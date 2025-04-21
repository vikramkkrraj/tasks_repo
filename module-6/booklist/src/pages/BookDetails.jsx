// pages/BookDetails.jsx
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export  function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${id}.json`)
      .then((res) => setBook(res.data));
  }, [id]);

  return book ? (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description?.value || "No description available"}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
