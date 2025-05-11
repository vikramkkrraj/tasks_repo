import express from 'express';
import { getAvailableBooksController, borrowBookController, returnBookController } from '../controllers/readerController.js';
import { returnCheckMiddleware } from '../middlewares/returnCheckMiddleware.js';
import { transactionLogger } from '../middlewares/transactionLogger.js';

const router = express.Router();

router.get('/reader/books', getAvailableBooksController);
router.post('/reader/borrow/:id', borrowBookController);
router.post('/reader/return/:id', returnCheckMiddleware, returnBookController);

export default router;
