import { readTickets, writeTickets } from '../models/ticketModel.js';

export async function getAllTickets(req, res) {
  const tickets = await readTickets();
  res.status(200).json(tickets);
}

export async function getTicketById(req, res) {
  const { id } = req.params;
  const tickets = await readTickets();
  const ticket = tickets.find(t => t.id == id);
  ticket ? res.status(200).json(ticket) : res.status(404).json({ error: "Ticket not found" });
}

export async function createTicket(req, res) {
  const { title, description, priority, user } = req.body;
  const tickets = await readTickets();
  const newTicket = {
    id: tickets.length + 1,
    title,
    description,
    priority,
    user,
    status: 'pending'
  };
  tickets.push(newTicket);
  await writeTickets(tickets);
  res.status(201).json(newTicket);
}

export async function updateTicket(req, res) {
  const { id } = req.params;
  const { title, description, priority } = req.body;
  const tickets = await readTickets();
  const index = tickets.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ error: "Ticket not found" });

  if (title) tickets[index].title = title;
  if (description) tickets[index].description = description;
  if (priority) tickets[index].priority = priority;

  await writeTickets(tickets);
  res.status(200).json(tickets[index]);
}

export async function deleteTicket(req, res) {
  const { id } = req.params;
  let tickets = await readTickets();
  const index = tickets.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ error: "Ticket not found" });

  const deleted = tickets.splice(index, 1);
  await writeTickets(tickets);
  res.status(200).json(deleted[0]);
}

export async function resolveTicket(req, res) {
  const { id } = req.params;
  const tickets = await readTickets();
  const ticket = tickets.find(t => t.id == id);
  if (!ticket) return res.status(404).json({ error: "Ticket not found" });

  ticket.status = "resolved";
  await writeTickets(tickets);
  res.status(200).json(ticket);
}
