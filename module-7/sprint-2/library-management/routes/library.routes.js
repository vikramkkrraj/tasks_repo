import express from 'express';
import {
  addBook,
  borrowBook,
  returnBook,
  getBooks,
  deleteBook
} from '../controllers/library.controller.js';

import {
  validateBookData,
  checkBorrowLimit,
  calculateOverdueFee
} from '../middleware/library.middleware.js';

const router = express.Router();

// POST - Add a new book
router.post('/books', validateBookData, addBook);

// PATCH - Borrow a book
router.patch('/borrow/:id', checkBorrowLimit, borrowBook);

// PATCH - Return a book
router.patch('/return/:id', calculateOverdueFee, returnBook);

// GET - Retrieve books with optional filters
router.get('/books', getBooks);

// DELETE - Delete a book (only if not borrowed)
router.delete('/books/:id', deleteBook);

export default router;
