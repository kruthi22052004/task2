const express = require('express');
const app = express();
const tasks = []; // Temporary array for storing tasks
let idCounter = 1;

app.use(express.json());

app.post('/api/tasks', (req, res) => {
    const task = { id: idCounter++, ...req.body, completed: false };
    tasks.push(task);
    res.status(201).json(task);
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.put('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
        task.completed = true;
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

app.delete('/api/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Task not found');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
