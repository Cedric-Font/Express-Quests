const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.APP_PORT;


const movieControllers = require("./controllers/movieControllers");
const usersControlers = require("./controllers/usersControlers");
console.log(port)
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", usersControlers.getUsers);
app.get("/api/users/:id", usersControlers.getUsersById);

module.exports = app;
