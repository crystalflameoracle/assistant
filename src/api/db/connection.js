const Sequelize = require("sequelize");

const sequelize = new Sequelize("assistant", "assistant", "egamkrad", {
  dialect: "mysql",
  host: "db",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
