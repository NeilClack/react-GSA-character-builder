const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb");

const cors = require("cors");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const withDB = async (operations) => {
    try {
        const client =  await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('r-app');
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error});
    }
}
//api routes
app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB( async (db) => {
        const articleName = req.params.name;
        const articlesInfo = await db.collection('articles').findOne({name: articleName});
        
        db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                upvotes: articlesInfo.upvotes + 1
            }
        });

        const updatedInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(updatedInfo);
    });
})

app.post('/api/articles/:name/addcomment', async (req, res) => {
    const { username, text} = req.body;
    const articleName = req.params.name;
    withDB( async (db) => {
        const articleInfo = await db.collection('articles').findOne({name: articleName});

        await db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text}),
            }
        });

        const updatedInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).send( updatedInfo );
    }, res);
})

app.get('/api/articles/:name', async (req, res) => {
    withDB( async (db) => {
        const articleName = req.params.name;
        const articlesInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(articlesInfo);
    });
})
// Character creation routes
app.get('/api/character/:creation', async (req, res) => {
    withDB( async (db) => {
        const articleName = req.params.name;
        const articlesInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(articlesInfo);
    });
})

//test routes
app.get('/hello', (req, res) => res.send('Hello!'));

app.get('/hello/:name', (req, res) => res.send(`Hello, ${req.params.name}!`));

app.post('/hello', (req, res) => res.send(`Hello, ${req.body.name}!`));

app.listen(8000, () => console.log('listening on port 8000'));