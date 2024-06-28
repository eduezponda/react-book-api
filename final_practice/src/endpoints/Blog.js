import React, { useEffect, useState } from "react";
import BlogCard from "../componentes/BlogCard";
import articlesData from "../data/articles.json";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <div className="blog-container">
      {articles.map((article) => (
        <BlogCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Blog;
