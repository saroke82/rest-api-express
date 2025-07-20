const express = require('express');
const router = express.Router();
let items = require('./data');

// Root Route
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

// GET all items
router.get('/items', (req, res) => {
  res.json(items);
});

// GET item by ID
router.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// POST create item
router.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = {
    id: items.length + 1,
    name,
    description
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item by ID
router.put('/items/:id', (req, res) => {
  const { name, description } = req.body;
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  item.name = name;
  item.description = description;

  res.json(item);
});

// DELETE item by ID
router.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(itemIndex, 1);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
