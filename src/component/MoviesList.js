import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const MoviesList = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try{
        const response = await axios.get("http://localhost:5000/movies");
        setMoviesList(response.data);
      }catch(e){
        console.log(e);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <div>
      {!moviesList.length ?
        
        <Spinner className="loader" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> 
      :
        <section className="bg-dark">
        <div className="container">
          <div className="row">
            {moviesList &&
              moviesList.map((movie, i) => {
                return (
                  <div
                    className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-6"
                    key={i}
                  >
                    <div className="product-listing-box">
                      <div className="product-listing-img">
                        <Link to={"/movie-details"} state={{ movie }}>
                          <img src={movie.image} alt="movie" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    }
    </div>
  );
};

export default MoviesList;
