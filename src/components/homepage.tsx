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
  Latest
} from '../types/types';
import MyMovieCard from '../cards/moviecard';
import MySerieCard from '../cards/seriecard';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';


const Main = () => {
  // these are states an functions for the first 3 apis'
  const [recMovie, setRecMovie] = useState<CarouselData>();
  const [recTv, setRecTv] = useState<CarouselData>();
  const [trending, setTrending] = useState<CarouselData>();

  const handleRecMovie = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`http://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json() as Promise<CarouselData>)
      .then(data => {
        console.log(data);
        setRecMovie(data);
      });
  }
  const handleRecTv = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json() as Promise<CarouselData>)
      .then((data) => {
        console.log(data);
        setRecTv(data);
      });
  }
  const handleTrending = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then(response => response.json() as Promise<CarouselData>)
      .then(data => {
        console.log(data);
        setTrending(data);
      });
  }
  // these are states for 3 latest sections
  const [latestMovies, setLatestMovies] = useState<CarouselData>();
  const [latestTv, setLatestTv] = useState([] as Latest['seasons']);
  const [requested, setRequested] = useState<Latest>();
  const handleLatestMovies = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json() as Promise<CarouselData>)
      .then(data => {
        console.log(data);
        setLatestMovies(data);
      });
  }
  const handleLatestTv = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`)
      .then(response => response.json() as Promise<Latest['seasons']>)
      .then(data => {
        console.log(data);
        setLatestTv(data);
      });
  }
  const handleRequested = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`)
      .then(response => response.json() as Promise<Latest>)
      .then(data => {
        console.log(data);
        setRequested(data);
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
            // onClick={handleRecMovie}
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
          {/* {recMovie?.results.map((movie, index) =>
            <MyMovieCard key={index} movie={movie} />
          )} */}
          {/* map method for recommended TV-shows */}
          {/* {recTv?.results.map((movie, index) =>
            <MySerieCard key={index} movie={movie} />
          )} */}
          {/* map method for trending  */}
          {/* {trending?.results.map((movie, index) =>
            <MyMovieCard key={index} movie={movie} />

          )} */}
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
          {latestMovies?.page && latestMovies?.results.map((movie, index) =>
            <MyMovieCard key={index} movie={movie}  />
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

        <div className='latest-tv-cards'>
          {/* map method for latest tv shows */}
          {/* {latestTv?.map((movie, index) =>
            <MyCard key={index} movie={movie} />
          )} */}
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

        <div className='requested-cards'>
          {/* map method for requested  */}
          {/* {requested?.map((movie, index) =>
            <MyCard key={index} movie={movie} />
          )} */}
        </div>
      </div>

    </div>
  )
}
export default Main;