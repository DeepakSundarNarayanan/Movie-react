import api from './api/axiosConfig';
import './App.css';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();


  const getMovies = async () => {
    try {
      const res = await api.get("/api/v1/movies");
      console.log(res.data);
      setMovies(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);


  const getMovieData = async (movieId) => {
    try{

      const response = await api.get("/api/v1/movies/${movieId}")
      const singleMovie = response.data;
      setMovie(singleMovie);
      set

    }
    catch(err){

    }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:yTrailertId" element={<Trailer/>}/>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie ={movie}reviews={reviews} setReviews={setReviews}></Reviews>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
