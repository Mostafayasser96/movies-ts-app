// the fetch order: fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
