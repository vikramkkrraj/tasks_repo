// components/BookCard.jsx
import { Link } from "react-router-dom";

export  const BookCard = ({ book, innerRef }) => {
  return (
    <div ref={innerRef} className="card">
      <h3>{book.title}</h3>
      <p>{book.author_name?.[0]}</p>
      <Link to={`/book/${book.key.split('/').pop()}`}>Details</Link>
    </div>
  );
}
