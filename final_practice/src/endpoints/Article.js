import React from "react";
import { useParams } from "react-router-dom";
import articlesData from "../data/articles.json";

const Article = () => {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
