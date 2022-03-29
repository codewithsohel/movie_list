import { Routes, Route } from "react-router-dom";

import MoviesList from "./component/MoviesList";
import MovieDetail from "./component/MovieDetail";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route exact path="/" element={<MoviesList />} />
        <Route exact path="/movie-details" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
