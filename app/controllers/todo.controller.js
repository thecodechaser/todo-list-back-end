const db = require("../models");
const Todo = db.todos;
const Op = db.Sequelize.Op;

// Create and Save a new todo
exports.create = (req, res) => {
  if (!req.body.task) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const todo = {
    task: req.body.task,
    completed: req.body.completed ? req.body.completed : false
  };

  // Save Tutorial in the database
  Todo.create(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Todo."
      });
    });
};

// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
  const task = req.query.task;
  var condition = task ? { task: { [Op.like]: `%${task}%` } } : null;

  Todo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};