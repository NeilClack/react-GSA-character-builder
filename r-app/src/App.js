import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import ArticlesListPage from './pages/ArticlesListPage';
import CharacterCreationPage from './pages/CharacterCreationPage';
import NavBar from './pages/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/article/:name" component={ArticlePage} exact />
            <Route path="/article-list" component={ArticlesListPage} exact />

            <Route path="/characters/new" component={CharacterCreationPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
