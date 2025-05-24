import LibraryBook from '../models/library.model.js';

// Add a new book
export const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new LibraryBook({ title, author });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', data: newBook });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add book', error: err.message });
  }
};

// Borrow a book
export const borrowBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { borrowerName } = req.body;
    const book = await LibraryBook.findById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (book.status !== 'available') return res.status(409).json({ message: 'Book not available for borrowing' });

    const borrowDate = new Date();
    const dueDate = new Date(borrowDate);
    dueDate.setDate(dueDate.getDate() + 14);

    book.status = 'borrowed';
    book.borrowerName = borrowerName;
    book.borrowDate = borrowDate;
    book.dueDate = dueDate;
    book.returnDate = null;
    book.overdueFees = 0;

    await book.save();
    res.status(200).json({ message: 'Book borrowed successfully', data: book });
  } catch (err) {
    res.status(500).json({ message: 'Failed to borrow book', error: err.message });
  }
};

// Return a book
export const returnBook = async (req, res) => {
  try {
    const { book, overdueFee } = req;
    book.status = 'available';
    book.returnDate = new Date();
    book.overdueFees = overdueFee;
    book.borrowerName = null;
    book.borrowDate = null;
    book.dueDate = null;

    await book.save();
    res.status(200).json({ message: `Book returned. Overdue Fee: ₹${overdueFee}`, data: book });
  } catch (err) {
    res.status(500).json({ message: 'Failed to return book', error: err.message });
  }
};

// Get all books (with optional filters)
export const getBooks = async (req, res) => {
  try {
    const { status, title } = req.query;
    const query = {};
    if (status) query.status = status;
    if (title) query.title = new RegExp(title, 'i');

    const books = await LibraryBook.find(query);
    res.status(200).json({ data: books });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch books', error: err.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await LibraryBook.findById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (book.status === 'borrowed') return res.status(409).json({ message: 'Cannot delete a borrowed book' });

    await book.deleteOne();
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete book', error: err.message });
  }
};
