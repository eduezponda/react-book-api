import React from "react";
import { Link } from "react-router-dom"; 

const InformationCard = ({ category, items }) => {
  console.log(category);
  return (
    <div className="information-card">
      <h2>{category}</h2>
      {items.map((item) => (
        <div key={item.id}>
          {}
          <Link to={`/filterBy/${category}/${item.name}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default InformationCard;
