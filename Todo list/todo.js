const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Set the views directory

let todos = [];

app.get('/', (req, res) => {
    res.render('todo', { todos: todos }); // Render the 'index' view and pass the todos data
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/addTodo', (req, res) => {
    const todo = req.body.todo;
    todos.push(todo);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
