import express from 'express';
import {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
  resolveTicket
} from '../controllers/ticketController.js';

import { dataCheckMiddleware } from '../middlewares/dataCheckMiddleware.js';

const router = express.Router();

router.get('/', getAllTickets);
router.get('/:id', getTicketById);
router.post('/', dataCheckMiddleware, createTicket);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);
router.patch('/:id/resolve', resolveTicket);

export default router;
