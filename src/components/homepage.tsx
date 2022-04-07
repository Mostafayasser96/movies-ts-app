import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStream,
  faList,
  faChartLine,
  faCircleChevronRight,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import {
  CarouselData,
  Latest,
  CardProps,
  Season,
  Movie,
  Card
} from '../types/types';
import MyMovieCard from '../cards/moviecard';
import MySerieCard from '../cards/seriecard';
import { useNavigate } from 'react-router-dom';
import { 
  Button, 
  ButtonGroup 
} from 'react-bootstrap';


const Main = () => {
  // these are states and functions for the first 3 apis'
  const [recMovie, setRecMovie] = useState<Card[]>([]);
  const [recTv, setRecTv] = useState<Card[]>([]);
  const [trending, setTrending] = useState<Card[]>([]);

  const handleRecMovie = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      .then(response => response.json() as Promise<Card>)
      .then(data => {
        console.log(data);
        let shows: Card[] = [];
        for(let i = 0; i < 12; i++){
          shows.push(data);
          console.log(shows);
          setRecMovie(shows);
          setRecTv([]);
          setTrending([]);
        }

         // setRecMovie(data);
        // setRecMovie([]);

        // // carouselData approach
        // setRecMovie(data);
        // setRecTv([]);
        // setTrending([]);
        
      });
  }
  const handleRecTv = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`)
      .then(response => response.json() as Promise<Card>)
      .then((data) => {
        console.log(data);
        let shows: Card[] = [];
        for(let i = 0; i <= 12; i++){
          shows.push(data);
          console.log(shows);
          setRecTv(shows);
          setRecMovie([]);
          setTrending([]);
        }
        
        
      });
  }
  const handleTrending = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then(response => response.json() as Promise<Card>)
      .then(data => {
        console.log(data);
        let shows: Card[] = [];
        for(let i = 0; i <= 12; i++){
          shows.push(data);
          console.log(shows);
          setTrending(shows);
          setRecMovie([]);
          setRecTv([]);
        }

        // // carouselData approach
        // setTrending(data);
        // setRecMovie([]);
        // setRecTv([]);
      });
  }
  // these are states for 3 latest sections
  const [latestMovies, setLatestMovies] = useState<Card[]>([]);
  const [latestTv, setLatestTv] = useState<Card[]>([]);
  const [requested, setRequested] = useState<Card[]>([]);
  const handleLatestMovies = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json() as Promise<Card>)
      .then(data => {
        console.log(data);
        let shows: Card[] = [];
        for(let i = 0; i <= 12; i++){
          shows.push(data);
          console.log(shows);
          setLatestMovies(shows);
        }
       
        // setLatestMovies(data);
      });
  }
  const handleLatestTv = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`)
      .then(response => response.json() as Promise<Card>)
      .then(data => {
        console.log(data);
        let shows: Card[] = [];
        for(let i = 0; i <= 12; i++){
          shows.push(data)
        }
        setLatestTv(shows);

        // setLatestTv(data);
      });
  }
  const handleRequested = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`)
      .then(response => response.json() as Promise<Card> )
      .then(data => {
        console.log(data);
        let shows: Card[] = [];
        for(let i = 0; i <= 12; i++){
          shows.push(data)
        }
        setRequested(shows);

        // setRequested(data);
      });
  }
  // the api calls
  useEffect(() => {
    // handleRecMovie();
    handleLatestMovies();
    handleLatestTv();
    handleRequested();

  }, []);
  //  handling the useNavigate hook (for view all buttons)
  let navigate = useNavigate();
  return (
    <div className='main'>
      <div className='recommended'>
        <div className='heading'>
          <h2>
            <span>Recom</span>mended
          </h2>



          <ButtonGroup className='heading-btn-group'>
            <Button type='submit'
              className='movies-btn'
            onClick={handleRecMovie}
            >
              {/* note: the icon here isn't the same one as it's not consistent with react fa library */}
              <FontAwesomeIcon icon={faPlay} className='main-stream-overlay-i' />
              Movies
            </Button>
            <Button type='submit'
              className='shows-btn'
              onClick={handleRecTv}
            >
              <FontAwesomeIcon icon={faList} className='btn-i' />
              TV Shows
            </Button>
            <Button type='submit'
              className='trending-btn'
              onClick={handleTrending}
            >
              <FontAwesomeIcon icon={faChartLine} className='btn-i' />
              Trending
            </Button>
          </ButtonGroup>


          {/* <span className='line'></span> */}
        </div>
        <div className='movies-card-list row'>
          {/* map method for recommended movies */}
          {recMovie?.map((movie, index) => 
             <MyMovieCard key={index} {...movie} />
          )}
          {/* map method for recommended TV-shows */}
          {recTv?.map((serie, index) =>
            <MySerieCard key={index} {...serie} />
          )}
          {/* map method for trending movies */}
          {trending?.map((movie, index) =>
            <MyMovieCard key={index} {...movie}  />
          )}
        </div>







      </div>
      <div className='latest-movies'>
        <div className='main-heading d-flex justify-content-between'>
          <h2>
            <span>Latest</span> Movies
          </h2>
          <button className='view-btn'
            type='submit'
            id='viewBtn'
            onClick={() => navigate('/movies')}
          >
            View All
            <FontAwesomeIcon icon={faCircleChevronRight} className='viewbtn-i' />
          </button>
        </div>

        <div className='latest-movies-cards row'>
          {/* map method for latest moives */}
          {latestMovies?.map((movie, index) =>
            <MyMovieCard key={index} {...movie} />
          )}
        </div>
      </div>
      <div className='latest-tv'>
        <div className='main-heading d-flex justify-content-between'>
          <h2>
            <span>Latest</span> TV-Series
          </h2>
          <button className='view-btn'
            type='submit'
            id='viewBtn'
            onClick={() => navigate('/Tv-series')}
          >
            View All
            <FontAwesomeIcon icon={faCircleChevronRight} className='viewbtn-i' />
          </button>
        </div>

        <div className='latest-tv-cards row'>
          {/* map method for latest tv shows */}
          {latestTv?.map((serie, index) =>
            <MySerieCard key={index} {...serie} />
          )}
        </div>
      </div>
      <div className='requested'>
        <div className='main-heading d-flex justify-content-between'>
          <h2>
            <span>Req</span>uested
          </h2>
          <button className='view-btn'
            type='submit'
            id='viewBtn'
            onClick={() => navigate('/movies')}
          >
            View All
            <FontAwesomeIcon icon={faCircleChevronRight} className='viewbtn-i' />
          </button>
        </div>

        <div className='requested-cards row'>
          {/* map method for requested tv shows */}
          {requested?.map((serie, index) =>
            <MySerieCard key={index} {...serie} />
          )}
        </div>
      </div>

    </div>
  )
}
export default Main;