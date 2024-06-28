import React from "react";
import "../styles/Books.css"

const Filters = ({
  searchQuery,
  setSearchQuery,
  category,
  setCategory,
  copyright,
  setCopyright,
  topic,
  setTopic,
  authorYearStart,
  setAuthorYearStart,
  authorYearEnd,
  setAuthorYearEnd,
  onSearch,
  errorMessage,
}) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value.toLowerCase())}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="it">Italian</option>
        <option value="fi">Finnish</option>
      </select>
      <select value={copyright} onChange={(e) => setCopyright(e.target.value)}>
        <option value="">Choose copyright</option>
        <option value="true">With</option>
        <option value="false">Without</option>
        <option value="true,false">Available information</option>
        <option value="null">Non available information</option>
      </select>
      <input
        type="number"
        placeholder="Author Year Start"
        value={authorYearStart}
        onChange={(e) => setAuthorYearStart(e.target.value)}
      />
      <input
        type="number"
        placeholder="Author Year End"
        value={authorYearEnd}
        onChange={(e) => setAuthorYearEnd(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Filters;
