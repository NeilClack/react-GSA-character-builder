import React from "react";
import articleContent from "../store/data/article-content";
import ArticlesList from "./components/ArticlesList";

const ArticleListPage = () => (
  <React.Fragment>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
  </React.Fragment>
);

export default ArticleListPage;
