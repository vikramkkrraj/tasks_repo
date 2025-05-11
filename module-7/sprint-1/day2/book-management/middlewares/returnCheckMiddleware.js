import { getBookById } from '../models/bookModel.js';

export const returnCheckMiddleware = (req, res, next) => {
    const bookId = req.params.id;
    const book = getBookById(bookId);

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    const borrowedDate = new Date(book.borrowedDate);
    const currentDate = new Date();
    const diffInTime = currentDate - borrowedDate;
    const diffInDays = diffInTime / (1000 * 3600 * 24); // Convert to days

    if (diffInDays < 3) {
        return res.status(400).json({ error: 'Book cannot be returned within 3 days of borrowing.' });
    }

    next();
};
