// components/SearchBar.jsx
import { useRef } from "react";

const binarySearch = (arr, target) => {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const compare = arr[mid].title.toLowerCase().localeCompare(target);
    if (compare === 0) return mid;
    compare < 0 ? (l = mid + 1) : (r = mid - 1);
  }
  return -1;
};

export  function SearchBar({ books, refs }) {
  const inputRef = useRef();

  const handleSearch = () => {
    const query = inputRef.current.value.trim().toLowerCase();
    const idx = binarySearch(books, query);
    if (idx !== -1) {
      const book = books[idx];
      refs.current[book.title.toLowerCase()]?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Book not found.");
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Search title..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
