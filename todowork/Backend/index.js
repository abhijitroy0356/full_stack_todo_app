const express = require('express');
const { createTodo, updateTodo } = require('./types.js');
const { todo } = require('./db');
const cors = require("cors")
const app = express();


app.use(express.json());
app.use(cors())

app.post('/info', async (req, res) => {
    const structure = req.body;
    const parsedStructured = createTodo.safeParse(structure); // Fix typo here

    if (!parsedStructured.success) {
        res.status(411).json({
            msg: "not working"
        });
        return;
    }
    await todo.create({
        title: parsedStructured.title,
        description: parsedStructured.description,
        completed: false
    });
    res.json({
        msg: "todo is done bruf"
    });
});

app.get('/getinfo', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.put('/update', async (req, res) => { // Fix typo in the endpoint
    const update = req.body;
    const parsedUpdatedInfo = updateTodo.safeParse(update); // Fix typo here

    if (!parsedUpdatedInfo.success) {
        res.status(404).json({
            msg: "not found"
        });
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg: "task updated successfully"
    });
});

app.listen(5000);
