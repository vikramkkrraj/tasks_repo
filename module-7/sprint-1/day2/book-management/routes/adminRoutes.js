import express from 'express';
import { getAllBooksController, addBookController, updateBookController, deleteBookController } from '../controllers/adminController.js';

const router = express.Router();

router.get('/admin/books', getAllBooksController);
router.post('/admin/books', addBookController);
router.patch('/admin/books/:id', updateBookController);
router.delete('/admin/books/:id', deleteBookController);

export default router;
