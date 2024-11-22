const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true });

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

// API Endpoints
app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).send(task);
});

app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: 'Task deleted' });
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send(tasks);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:5000/tasks`);
});
