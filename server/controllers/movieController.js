const MovieModel = require("../models/movieSchema");
const data = require("../configs/moviesData.json");

const getMovieList = async (request, response) => {
  try {
    const moviesList = await MovieModel.find().select("_id title image");
    response.send(moviesList);
  } catch (error) {
    response.status(500).send(error);
  }
};

const setMovies = async () => {
  try {
    var movieData = await MovieModel.find({});
    if (movieData.length === 0) {
      await MovieModel.insertMany(data);
      console.log("movies list seeded");
    }
  } catch (err) {
    console.error(err);
  }
};

const getMovieById = async (request, response) => {
  const moviesId = await MovieModel.findOne({ _id: request.params.id });
  try {
    response.send(moviesId);
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.getMovieList = getMovieList;
exports.setMovies = setMovies;
exports.getMovieById = getMovieById;
