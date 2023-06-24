import React, { useState, useEffect } from "react";
import articlesContent from "../store/data/article-content";
import CommentsList from "./components/CommentsList";
import ArticlesList from "./components/ArticlesList";
import UpvotesSection from "./components/UpvotesSection";
import NotFoundPage from "../Errors/NotFoundPage";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articlesContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />;

  const otherArticles = articlesContent.filter(
    (article) => article.name !== name
  );
  return (
    <React.Fragment>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </React.Fragment>
  );
};

export default ArticlePage;
