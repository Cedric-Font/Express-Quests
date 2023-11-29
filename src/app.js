const express = require("express");
require("dotenv").config();
const validateMovie = require("./midleWhares/validateMovie.js")
const validateUsers = require("./midleWhares/validateUsers.js")
const app = express();
const port = process.env.APP_PORT;
;
app.use(express.json()); 


const movieControllers = require("./controllers/movieControllers");
const usersControlers = require("./controllers/usersControlers");

console.log(port)
//get route
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", usersControlers.getUsers);
app.get("/api/users/:id", usersControlers.getUsersById);
//post route
//app.post("/api/movies",movieControllers.postMovie);
app.post("/api/users",validateUsers,usersControlers.postUsers);
app.post("/api/movies", validateMovie, movieControllers.postMovie);
//put route
app.put("/api/movies/:id", validateMovie, movieControllers.upDateMovies);
app.put("/api/users/:id", validateUsers, usersControlers.upDateUsers);
//delete route
app.delete("/api/movies/:id",movieControllers.deleteMovies)
app.delete("/api/users/:id",usersControlers.deleteUsers)
module.exports = app;
