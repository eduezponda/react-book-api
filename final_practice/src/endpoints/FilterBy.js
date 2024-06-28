import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookCard from "../componentes/BookCard";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class DetailsFetcher extends Component {
  state = {
    books: [],
    error: null
  };

  componentDidMount() {
    this.fetchBooks();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.idTipo !== prevProps.params.idTipo || this.props.params.idNombre !== prevProps.params.idNombre) {
      this.fetchBooks();
    }
  }

  fetchBooks = async () => {
    const { idTipo, idNombre } = this.props.params;
    let url = "https://gutendex.com/books/";

    switch (idTipo) {
      case "Authors":
        url += `?search=${idNombre}`;
        break;
      case "Subjects":
      case "Bookshelves": // 'Subjects' y 'Bookshelves' comparten la misma lógica
        url += `?topic=${idNombre}`;
        break;
      case "Languages":
        url += `?languages=${idNombre}`;
        break;
      default:
        this.setState({ error: "Tipo de filtro no válido" });
        return;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ books: data.results });
    } catch (error) {
      console.error("Failed to fetch books:", error);
      this.setState({ error: "Failed to fetch books" });
    }
  };

  render() {
    const { books, error } = this.state;
    return (
      <div className='infoResult'>
        <h1>Showing results for {this.props.params.idTipo}: {this.props.params.idNombre}</h1>
        {error && <p>Error: {error}</p>}
        {books.map(book => <BookCard key={book.id} book={book} />)}
        <Link to="/books" className="explore-more-link">
          <button>Explore more books!</button>
        </Link>
      </div>
    );
  }
}

export default withParams(DetailsFetcher);
