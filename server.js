const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serves your frontend

// --- API ROUTES & CONTROLLERS (Consolidated) ---

// Health check
app.get('/ping', (req, res) => res.send('Server is running!'));

// Auth Routes (Stubs)
app.post('/api/auth/register', (req, res) => res.status(201).json({ message: "Stub: Register user" }));
app.post('/api/auth/login', (req, res) => res.status(200).json({ message: "Stub: Login user" }));

// Task Routes (Stubs)
app.get('/api/tasks', (req, res) => res.status(200).json({ message: "Stub: Fetch all tasks" }));
app.post('/api/tasks', (req, res) => res.status(201).json({ message: "Stub: Create a new task", data: req.body }));
app.get('/api/tasks/:id', (req, res) => res.status(200).json({ message: `Stub: Fetch task ${req.params.id}` }));
app.put('/api/tasks/:id', (req, res) => res.status(200).json({ message: `Stub: Update task ${req.params.id}`, data: req.body }));
app.delete('/api/tasks/:id', (req, res) => res.status(200).json({ message: `Stub: Delete task ${req.params.id}` }));

// Start Server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});