const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.APP_PORT;
app.use(express.json()); 


const movieControllers = require("./controllers/movieControllers");
const usersControlers = require("./controllers/usersControlers");

console.log(port)
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", usersControlers.getUsers);
app.get("/api/users/:id", usersControlers.getUsersById);
app.post("/api/movies",movieControllers.postMovie);
app.post("/api/users",usersControlers.postUsers);
module.exports = app;
