module.exports = app => {
  const todos = require("../controllers/todo.controller.js");

  var router = require("express").Router();

   // Create a new Todo
   router.post("/", todos.create);

   // Retrieve all Todos
   router.get("/", todos.findAll);

  // Update a Todo with id
  router.put("/:id", todos.update);

  // Delete a Todo with id
  router.delete("/:id", todos.delete);

};