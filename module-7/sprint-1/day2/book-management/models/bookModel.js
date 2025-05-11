import fs from 'fs';
import path from 'path';

const dbPath = path.resolve('db.json');

// Read the current data from the db.json file
const readData = () => {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
};

// Write data to db.json file
const writeData = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
};

// Get all books
export const getAllBooks = () => {
    const books = readData();
    return books;
};

// Get available books
export const getAvailableBooks = () => {
    const books = readData();
    return books.filter(book => book.status === 'available');
};

// Get a single book by ID
export const getBookById = (id) => {
    const books = readData();
    return books.find(book => book.id === parseInt(id));
};

// Add a new book
export const addBook = ({ title, author, genre, publishedYear }) => {
    const books = readData();
    const newBook = {
        id: books.length + 1,
        title,
        author,
        genre,
        publishedYear,
        status: 'available'
    };
    books.push(newBook);
    writeData(books);
    return newBook;
};

// Update a book
export const updateBook = (id, { title, author, genre, publishedYear }) => {
    const books = readData();
    const bookIndex = books.findIndex(book => book.id === parseInt(id));

    if (bookIndex === -1) {
        return null;
    }

    books[bookIndex] = {
        ...books[bookIndex],
        title,
        author,
        genre,
        publishedYear
    };

    writeData(books);
    return books[bookIndex];
};

// Delete a book
export const deleteBook = (id) => {
    const books = readData();
    const updatedBooks = books.filter(book => book.id !== parseInt(id));
    writeData(updatedBooks);
};

// Borrow a book
export const borrowBook = (id, readerName) => {
    const books = readData();
    const bookIndex = books.findIndex(book => book.id === parseInt(id));

    if (bookIndex === -1 || books[bookIndex].status === 'borrowed') {
        return null;
    }

    books[bookIndex] = {
        ...books[bookIndex],
        status: 'borrowed',
        borrowedBy: readerName,
        borrowedDate: new Date().toISOString()
    };

    writeData(books);
    return books[bookIndex];
};

// Return a book
export const returnBook = (id) => {
    const books = readData();
    const bookIndex = books.findIndex(book => book.id === parseInt(id));

    if (bookIndex === -1) {
        return null;
    }

    const returnedBook = {
        ...books[bookIndex],
        status: 'available',
        borrowedBy: null,
        borrowedDate: null
    };

    books[bookIndex] = returnedBook;
    writeData(books);
    return returnedBook;
};
