const Sequelize = require("sequelize");

const sequelize = new Sequelize("teste", "root", "P@$$word*01", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

sequelize
  .authenticate()
  .then(() => console.log("Conectado no Mysql!"))
  .catch((error) => console.log(error));

module.exports = sequelize;
