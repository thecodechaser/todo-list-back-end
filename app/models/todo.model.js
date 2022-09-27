module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("todo", {
    id: {
      type: Sequelize.STRING
    },
    task: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};