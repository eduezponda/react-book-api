import React from "react";
import "../styles/Books.css"; 

const BookCard = ({ book }) => {
  if (!book) return <div>Book data not available.</div>;

  const showAuthors = (authors) => {
    return authors.map((author, index) => (
      <span key={index}>
        {author.name}
        {index < authors.length - 1 ? ", " : ""}
      </span>
    ));
  };

  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <img src={book.formats["image/jpeg"]} alt="Cover" />
      <div>Authors: {showAuthors(book.authors)}</div>
      <div>Subjects: {book.subjects.join(", ")}</div>
      <p>Bookshelves: {book.bookshelves.join(", ")}</p>
      <p>Languages: {book.languages.join(", ")}</p>
    </div>
  );
};

export default BookCard;
