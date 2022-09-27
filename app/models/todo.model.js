module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("todo", {
    id: {
      type: Sequelize.STRING
    },
    task: {
      type: Sequelize.STRING
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Tutorial;
};