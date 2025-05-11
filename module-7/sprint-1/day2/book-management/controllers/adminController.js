import { getAllBooks, addBook, updateBook, deleteBook } from '../models/bookModel.js';

// Get all books (admin)
export const getAllBooksController = (req, res) => {
    const books = getAllBooks();
    res.status(200).json(books);
};

// Add a new book (admin)
export const addBookController = (req, res) => {
    const { title, author, genre, publishedYear } = req.body;
    const newBook = addBook({ title, author, genre, publishedYear });
    res.status(201).json(newBook);
};

// Update book details (admin)
export const updateBookController = (req, res) => {
    const bookId = req.params.id;
    const { title, author, genre, publishedYear } = req.body;
    const updatedBook = updateBook(bookId, { title, author, genre, publishedYear });
    res.status(200).json(updatedBook);
};

// Delete a book (admin)
export const deleteBookController = (req, res) => {
    const bookId = req.params.id;
    deleteBook(bookId);
    res.status(204).send();
};
