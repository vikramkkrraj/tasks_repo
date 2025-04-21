// pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/bookSlice";
import {BookList} from "../components/BookList";
import {Pagination} from "../components/Pagination";
import {SearchBar} from "../components/SearchBar";

export  function Home() {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.book);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const refs = useRef({});

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const indexOfLast = currentPage * booksPerPage;
  const indexOfFirst = indexOfLast - booksPerPage;
  const currentBooks = books.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <SearchBar books={books} refs={refs} />
      {loading ? <p>Loading...</p> : <BookList books={currentBooks} refs={refs} />}
      <Pagination
        total={books.length}
        perPage={booksPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
