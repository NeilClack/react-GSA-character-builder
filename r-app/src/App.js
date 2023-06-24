import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ArticlePage from "./Blog/ArticlePage";
import NotFoundPage from "./Errors/NotFoundPage";
import ArticlesListPage from "./Blog/ArticlesListPage";
import CharacterCreationPage from "./CharacterCreation/CharacterCreationPage";
import NavBar from "./UI/NavBar";
import "./App.css";

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

            <Route
              path="/characters/new"
              component={CharacterCreationPage}
              exact
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
