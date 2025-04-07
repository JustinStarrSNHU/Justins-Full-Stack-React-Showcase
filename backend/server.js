require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// Enable CORS for your frontend URL
app.use(cors({
  origin: 'https://justins-fullstack-showcase-frontend-731991412305.us-central1.run.app'
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Todo List schema and routes
const todoSchema = new mongoose.Schema({
  task: String,
  completed: { type: Boolean, default: false }, // Add completed property
});

const Todo = mongoose.model('Todo', todoSchema);

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const newTodo = new Todo({
    task: req.body.task,
    completed: req.body.completed || false, // Handle completed property
  });
  await newTodo.save();
  res.json(newTodo);
});

app.put('/todos/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { task: req.body.task, completed: req.body.completed }, // Handle completed property
    { new: true }
  );
  res.json(updatedTodo);
});

app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});

// Guest Book Schema and Routes
const guestBookSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const GuestBookEntry = mongoose.model('GuestBookEntry', guestBookSchema);

app.get('/guestbook', async (req, res) => {
  const entries = await GuestBookEntry.find();
  res.json(entries);
});

app.post('/guestbook', async (req, res) => {
  const newEntry = new GuestBookEntry({
    name: req.body.name,
    message: req.body.message,
  });
  await newEntry.save();
  res.status(201).json(newEntry);
});

// Visitor Count Schema and Routes
const visitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

const Visitor = mongoose.model('Visitor', visitorSchema);

app.get('/api/visitor-count', async (req, res) => {
  let visitor = await Visitor.findOne();
  if (!visitor) {
      visitor = new Visitor({ count: 1 });
      await visitor.save();
  } else {
      visitor.count += 1;
      await visitor.save();
  }
  res.json({ count: visitor.count });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});