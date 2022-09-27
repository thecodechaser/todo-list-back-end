module.exports = {
  HOST: "localhost",
  USER: "thecodechaser",
  PASSWORD: "thecode123",
  DB: "todolist",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};