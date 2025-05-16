const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Your backend API URL from environment variable
const API_IP = process.env.API_IP || 'http://localhost:5000';
const API_PORT = process.env.API_PORT || 'http://localhost:5000';

app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve index with injected variable
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Todo App</title></head>
      <body>
        <h1>Todo List</h1>
        <input type="text" id="newTodo" placeholder="Add a task" />
        <button onclick="addTodo()">Add</button>
        <ul id="todoList"></ul>

        <script>
          window.API_IP = "${API_IP}";
          window.API_PORT = "${API_PORT}";
        </script>
        <script src="/public/main.js"></script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
  console.log(API_IP)
  console.log(API_PORT)
});
