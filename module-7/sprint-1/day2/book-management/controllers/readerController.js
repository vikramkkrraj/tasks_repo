import { getAvailableBooks, borrowBook, returnBook } from '../models/bookModel.js';

// Get all available books (reader)
export const getAvailableBooksController = (req, res) => {
    const books = getAvailableBooks();
    res.status(200).json(books);
};

// Borrow a book (reader)
export const borrowBookController = (req, res) => {
    const bookId = req.params.id;
    const { readerName } = req.body;
    const borrowedBook = borrowBook(bookId, readerName);
    res.status(200).json(borrowedBook);
};

// Return a book (reader)
export const returnBookController = (req, res) => {
    const bookId = req.params.id;
    const returnedBook = returnBook(bookId);
    res.status(200).json(returnedBook);
};
