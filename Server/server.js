import express from "express";
import bodyParser from "body-parser";
const app = express()
const port = 5000

app.use(bodyParser.json());

const todoData = [
    { id: 1, description: "get a job" },
    { id: 2, description: "buy milk" },
    { id: 3, description: "make coffee for dad" }
]

let lastID;

const findAvailableID = () => {
    for (let i = 1; i < todoData.length + 2; i++) {
        if (!todoData.some((task) => task.id === i)) {
            lastID = i;
            break;
        }
    }
    return lastID;
};

app.get("/", (req, res) => {
    res.send("<h1> test </h1>")
})

app.get("/todo-data", (req, res) => {
    res.json(todoData)
});

app.post("/new-task", (req, res) => {
    todoData.push({ id: findAvailableID(), description: req.body.task, due_time: req.body.dueTime })
    todoData.sort((a, b) => a.id - b.id);
    res.json(todoData)
});

app.delete("/remove-task", (req, res) => {
    let itemIndex = todoData.findIndex((item) => {
        return item.id == req.body.id
    });
    console.log(req.body.id);
    todoData.splice(itemIndex, 1)
    res.json(todoData)
    lastID = todoData.length
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});