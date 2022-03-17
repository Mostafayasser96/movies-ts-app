// the fetch order: fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVSeries from './pages/TV-series';
import TopImdb from './pages/Top-IMDb';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='TV-series' element={<TVSeries />} />
          <Route path='top-imdb' element={<TopImdb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
