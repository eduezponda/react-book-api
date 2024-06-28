import React, { useState, useCallback } from "react";
import Filters from "../componentes/Filters";
import BookCard from "../componentes/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [copyright, setCopyright] = useState("");
  const [topic, setTopic] = useState("");
  const [authorYearStart, setAuthorYearStart] = useState("");
  const [authorYearEnd, setAuthorYearEnd] = useState("");
  const [error, setError] = useState("");
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = useCallback(async () => {
    let url = `https://gutendex.com/books?search=${searchQuery}`;
    setSearchAttempted(true);
    setIsLoading(true);

    if (category !== "") {
      url += `&languages=${category}`;
    }
    if (copyright !== "") {
      url += `&copyright=${copyright}`;
    }
    if (topic !== "") {
      url += `&topic=${topic}`;
    }
    if (
      authorYearStart !== "" &&
      authorYearEnd !== "" &&
      parseInt(authorYearStart) >= parseInt(authorYearEnd)
    ) {
      setError("The second date must be bigger than the first one");
      setBooks([]);
      setIsLoading(false);
      return;
    }

    setError("");

    if (authorYearStart !== "") {
      url += `&author_year_start=${authorYearStart}`;
    }
    if (authorYearEnd !== "") {
      url += `&author_year_end=${authorYearEnd}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch books:", error);
      setIsLoading(false);
    }
  }, [searchQuery, category, copyright, topic, authorYearStart, authorYearEnd]);

  return (
    <div class="books-container">
      <h2 id="title">EXPLORE AND FILTER BOOKS FROM OUR API</h2>
      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        category={category}
        setCategory={setCategory}
        copyright={copyright}
        setCopyright={setCopyright}
        topic={topic}
        setTopic={setTopic}
        authorYearStart={authorYearStart}
        setAuthorYearStart={setAuthorYearStart}
        authorYearEnd={authorYearEnd}
        setAuthorYearEnd={setAuthorYearEnd}
        onSearch={fetchBooks}
        errorMessage={error}
      />
      {isLoading ? (
        <p id = "loading">Loading...</p>
      ) : searchAttempted && books.length === 0 ? (
        <p id="message">
          No books found with the specified filters. Please try different
          filters.
        </p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default Books;
