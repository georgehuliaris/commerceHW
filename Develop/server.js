const express = require('express');
const routes = require('./routes');
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../Develop/server.js");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
