import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Blog.css"; 

const BlogCard = ({ id, title, content }) => {
  const navigate = useNavigate();
  const extract = content.slice(0, 100);

  return (
    <div className="blog-card">
      <img
        src={`/images/${id}.webp`}
        width="200px"
        height="200px"
        alt="Imagen articulo blog"
      />
      <h2>{title}</h2>
      <div className="blog__card--text"></div>
      <p>{extract}...</p>
      <button className="leerMas" onClick={() => navigate(`/blog/${id}`)}>Read more...</button>
    </div>
  );
};

export default BlogCard;