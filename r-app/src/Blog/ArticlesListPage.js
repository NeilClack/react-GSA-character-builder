import React from 'react';
import articleContent from '../store/data/article-content';
import ArticlesList from './components/ArticlesList';

const ArticleListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={articleContent} />
    </>
);

export default ArticleListPage;