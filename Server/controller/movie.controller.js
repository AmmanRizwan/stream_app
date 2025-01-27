const Movie = require('../modules/model.js');

// @desc    GET all movies
// @route   GET /api/movies/
const getMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();

    if (!allMovies)
    {
      return res.status(404).json({error: "Movies not Found"});
    }
    res.status(200).json(allMovies);
    console.log("Getting Movies");
  }
  catch (err) {
    console.log(err.message);
  }
}

// @desc    GET single movies
// @route   GET /api/movies/:id
const getMovie = async (req, res) => {
  try {
    const rank = Number(req.params.rank);
    const singleMovie = await Movie.findOne({rank: rank});

    if (!singleMovie) {
      return res.status(404).json({error: "Movie not Found"});
    }
    res.status(200).json(singleMovie);
    console.log("Getting Single Movie");
  }
  catch (err)
  {
    console.log(err.message);
  }
}

// @desc    Create a movie
// @route   POST /api/movies/:id
const postMovie = async (req, res) => {
  try {
    const findMovie = await Movie.find({});
    
    let rank = 0;
    if (findMovie.length > 0) {
      let lastMovie = findMovie.slice(-1);
      let lastRank = lastMovie[0].rank;
      console.log(lastRank);
      rank = lastRank + 1;
    }
    rank = 1;
    
    const addMovie = await Movie.create({ rank: rank, ...req.body });

    if (!addMovie) {
      return res.status(404).json({error: "Cannot Create A Movie Detail"});
    }
    
    res.status(201).json({message: "Movie Detail has Created Successfully"});
    console.log("Movie Added");
  }
  catch (err) {
    console.log(err.message);
  }
}

// @desc    Update a movie
// @route   PUT /api/movies/:id
const updateMovie = async (req, res) => {
  try {
    const { rank } = req.params;
    const findMovie = await Movie.findOneAndUpdate({rank: rank}, req.body);

    if (!findMovie)
    {
      return res.status(404).json({error: "Movie Not Found"});
    }
    res.status(200).json({message: "Movie has Updated Successfully"});
    console.log("Movie Updated");
  }
  catch (err)
  {
    console.log(err.message);
  }
}

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
const deleteMovie = async (req, res) => {
  try {
    const { rank } = req.params;
    const findMovie = await Movie.findOneAndDelete({rank: rank});

    if (!findMovie)
    {
      return res.status(404).json({error: "Movie Not Found"});
    }
    res.status(200).json({message: "Movie has Deleted Successfully"});
    console.log("Movie Deleted");
  }
  catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  getMovies,
  getMovie,
  postMovie,
  updateMovie,
  deleteMovie,
}