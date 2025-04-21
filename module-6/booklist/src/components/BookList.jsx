// components/BookList.jsx
import {BookCard} from "./BookCard";

export  function BookList({ books, refs }) {
  return (
    <div>
      {books.map((book, idx) => (
        <BookCard
          key={book.key}
          book={book}
          innerRef={(el) => (refs.current[book.title.toLowerCase()] = el)}
        />
      ))}
    </div>
  );
}
