import LibraryBook from '../models/library.model.js';

// Middleware: Validate required fields
export const validateBookData = (req, res, next) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Incomplete Data. Title and Author are required.' });
  }
  next();
};

// Middleware: Limit borrowing to 3 books per borrower
export const checkBorrowLimit = async (req, res, next) => {
  const { borrowerName } = req.body;
  const borrowedBooks = await LibraryBook.countDocuments({
    borrowerName,
    status: 'borrowed'
  });

  if (borrowedBooks >= 3) {
    return res.status(409).json({ message: 'Borrowing limit exceeded. Max 3 books allowed per user.' });
  }
  next();
};

// Middleware: Overdue fee calculator
export const calculateOverdueFee = async (req, res, next) => {
  const { id } = req.params;
  const book = await LibraryBook.findById(id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found.' });
  }

  const today = new Date();
  let fee = 0;

  if (book.dueDate && today > book.dueDate) {
    const diffTime = Math.abs(today - book.dueDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    fee = diffDays * 10;
  }

  req.overdueFee = fee;
  req.book = book;
  next();
};
