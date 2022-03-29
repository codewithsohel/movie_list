import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


const MovieDetail = () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/movie/${location.state.movie._id}`
        );
        setMovieDetails(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getMovieDetails();
  }, [location.state.movie._id]);


  return (
    <div>
    {!movieDetails ?
        <Spinner className="loader" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> 
      :
      <div>
      <div className="header-details">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <h2 className="text-white">{movieDetails.title}</h2>
          </div>
        </div>
      </div>
      <section className="details-box">
        <div className="container">
          <div className="row mb-4">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-5">
              <div className="product-listing-box">
                <a href="details.html">
                  <div className="product-listing-img">
                    <img src={movieDetails.image} alt="img" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-7">
              <div className="product-listing-details">
                <h3>{movieDetails.year}</h3>
                <h5>{movieDetails.min}</h5>
                <i className="bi bi-three-dots-vertical"></i>
                <div className="rating-box mt-4">{movieDetails.rating}</div>
                <div className="add_fav mt-3">
                  <button className="btn btn-secondary w-100 py-3 mt-2">Add to Favorite</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <p>{movieDetails.description}</p>
            </div>
          
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <div className="trailers">
                <h4>Trailers</h4>
                <div className="play-trailers py-4 px-3 mb-3">
                  <div className="d-flex align-items-center"><i className="fal fa-play-circle"></i>Play trailer 1</div>
                </div>
                <div className="play-trailers py-4 px-3 mb-3">
                <div className="d-flex align-items-center"><i className="fal fa-play-circle"></i>Play trailer 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    }
    </div>
  );
};

export default MovieDetail;
