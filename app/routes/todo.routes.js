module.exports = app => {
  const todos = require("../controllers/todo.controller.js");

  var router = require("express").Router();

   // Create a new Tutorial
   router.post("/", todos.create);

 
};