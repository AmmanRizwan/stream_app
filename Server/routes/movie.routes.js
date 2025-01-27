const express = require('express');
const { 
  getMovies,
  getMovie,
  postMovie,
  updateMovie,
  deleteMovie, } = require('../controller/movie.controller.js');

const movieRouter = express.Router();

movieRouter.get('/', getMovies);
movieRouter.get('/:rank', getMovie);
movieRouter.post('/', postMovie);
movieRouter.put('/:rank', updateMovie);
movieRouter.delete('/:rank', deleteMovie);


module.exports = movieRouter;