import React, { useEffect, useState } from "react";
import InformationCard from "../componentes/InformationCard";
import AsideInformation from "../componentes/AsideInformation";
import { Link } from "react-router-dom";
import "../styles/Information.css";

const Information = () => {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      const cachedData = localStorage.getItem("bookData");
      if (cachedData) {
        setCategories(JSON.parse(cachedData));
        setIsLoaded(true);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 200));
          const response = await fetch("https://gutendex.com/books/");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();

          const authorsList = data.results
            .flatMap((book) => book.authors.map((author) => author.name))
            .slice(0, 5);

          const subjectsList = data.results
            .flatMap((book) =>
              book.subjects.filter((subject) => subject.length <= 20)
            )
            .slice(0, 5);

          const languagesList = [];
          data.results.forEach((book) => {
            book.languages.forEach((language) => {
              if (!languagesList.includes(language)) {
                languagesList.push(language);
              }
            });
          });
          const truncatedLanguagesList = languagesList.slice(0, 5);

          const bookshelvesList = data.results
            .flatMap((book) => book.bookshelves)
            .slice(0, 5);

          const newCategories = [
            {
              category: "Authors",
              items: authorsList.map((name, id) => ({ id, name })),
            },
            {
              category: "Subjects",
              items: subjectsList.map((name, id) => ({ id, name })),
            },
            {
              category: "Languages",
              items: truncatedLanguagesList.map((name, id) => ({ id, name })),
            },
            {
              category: "Bookshelves",
              items: bookshelvesList.map((name, id) => ({ id, name })),
            },
          ];
          setCategories(newCategories);
          setIsLoaded(true);
          localStorage.setItem("bookData", JSON.stringify(newCategories));
        } catch (error) {
          console.error("Error fetching books:", error);
          setError(error);
        }
      }
    }

    fetchBooks();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="information-container-wrapper">
      <div className="information-container">
        {categories.map((category) => (
          <InformationCard
            key={category.category}
            category={category.category}
            items={category.items}
          />
        ))}
      </div>
      <Link to="/books">
        <button id="start">START USING BOOKREALM</button>
      </Link>
      <div className="aside-information">
        <AsideInformation />
      </div>
    </div>
  );
};

export default Information;
