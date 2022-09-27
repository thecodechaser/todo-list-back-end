module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    task: {
      type: Sequelize.STRING
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Todo;
};