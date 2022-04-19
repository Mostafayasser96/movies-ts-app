import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStream,
  faList,
  faChartLine,
  faCircleChevronRight,
  faPlay,
  faBookJournalWhills,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import {
  CarouselData,
  Latest,
  CardProps,
  Season,
  Movie,
  Card,
  MyButton
} from '../types/types';
import MyMovieCard from '../cards/moviecard';
import MySerieCard from '../cards/seriecard';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonGroup
} from 'react-bootstrap';
import { isTemplateExpression } from 'typescript';



const Main = (props: {
  id: number; 
  value: string; 
  active: boolean; 
  setActiveButton: React.Dispatch<React.SetStateAction<number>>
}) => {

  // these are states and functions for the first 3 apis'
  const [recMovie, setRecMovie] = useState<Card[]>([]);
  const [recTv, setRecTv] = useState<Card[]>([]);
  const [trending, setTrending] = useState<Card[]>([]);
  

  const handleRecMovie = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      .then(response => response.json() as Promise<CarouselData>)
      .then(data => {
        console.log(data.results);
        let shows: Card[] = data.results;
        setRecMovie(shows);
        setRecTv([]);
        setTrending([]);
        
      });
  }
  const handleRecTv = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`)
      .then(response => response.json() as Promise<Card>)
      .then((data) => {
        console.log(data);
        let shows: Card[] = [];
        for (let i = 0; i <= 12; i++) {
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
      .then(response => response.json() as Promise<CarouselData>)
      .then(data => {
        console.log(data);
        let shows: Card[] = data.results;
        // for(let i = 0; i <= 12; i++){
        //   shows.push(data);
        //   console.log(shows); 
        // }

        setTrending(shows);
        setRecMovie([]);
        setRecTv([]);
      
      });
  }
  // these are states for 3 latest sections
  const [latestMovies, setLatestMovies] = useState<Card[]>([]);
  const [latestTv, setLatestTv] = useState<Card[]>([]);
  const [requested, setRequested] = useState<Card[]>([]);
  const handleLatestMovies = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json() as Promise<CarouselData>)
      .then(data => {
        console.log(data);
        let shows: Card[] = data.results;
        // for(let i = 0; i <= 12; i++){
        //   shows.push(data);
        //   console.log(shows);
        // }
        setLatestMovies(shows);
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
        for (let i = 0; i <= 12; i++) {
          shows.push(data)
        }
        setLatestTv(shows);

      });
  }
  const handleRequested = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`)
      .then(response => response.json() as Promise<Card>)
      .then(data => {
        console.log(data);
        let shows: Card[] = [];
        for (let i = 0; i <= 12; i++) {
          shows.push(data)
        }
        setRequested(shows);

        // setRequested(data);
      });
  }
  // the api calls
  useEffect(() => {
    handleRecMovie();
    handleLatestMovies();
    handleLatestTv();
    handleRequested();

  }, []);
  //  handling the useNavigate hook (for view all buttons)
  let navigate = useNavigate();
  // const color: boolean = true;
  // new approach for button group
  const MyButton = (props: {
    id: number; 
    value: string; 
    active: boolean; 
    setActiveButton: React.Dispatch<React.SetStateAction<number>>;
    className: string; 
    handler: () => void;
    icon: IconDefinition;
    iconClass: string
  }) => {
    const clickHandler = () => {
      props.setActiveButton(props.id);
      props.handler();
   }
     return(
       <button
          className={props.className}
          style={{ backgroundColor: `${props.active? '#25313f' : '#0d1218'}` }}
          value={props.value}
          onClick={() => clickHandler()}
         >
           <FontAwesomeIcon icon={props.icon} className={props.iconClass} />
           {props.value}
         </button>
     )
  }
  const [activeButton, setActiveButton] = useState<number>(0);
  const button_Data = [
    {
      name: 'movies',
      value: 'Movies',
      className: 'movies-btn',
      handler: handleRecMovie,
      icon: faPlay,
      iconClass: 'main-stream-overlay-i'
    },
    {
      name: 'tv-series',
      value: 'TV-Series',
      className: 'shows-btn',
      handler: handleRecTv,
      icon: faList,
      iconClass: 'btn-i'
    },
    {
      name: 'trending',
      value: 'Trending',
      className: 'trending-btn',
      handler: handleTrending,
      icon: faChartLine,
      iconClass: 'btn-i'
    }
  ]






  return (
    <div className='main'>
      <div className='recommended'>
        <div className='heading'>
          <h2>
            <span>Recom</span>mended
          </h2>





          {/* <div className='heading-btn-group'>
            <button type='submit'
              className='movies-btn'
              id='moviesBtn'
              onClick={handleRecMovie}
              style={{ backgroundColor: color}}
            >
              <FontAwesomeIcon icon={faPlay} className='main-stream-overlay-i' />
              Movies
            </button>
            <button type='submit'
              className='shows-btn'
              id='tv-series'
              onClick={handleRecTv}
            >
              <FontAwesomeIcon icon={faList} className='btn-i' />
              TV Shows
            </button>
            <button type='submit'
              className='trending-btn'
              id='trendingBtn'
              onClick={handleTrending}
            >
              <FontAwesomeIcon icon={faChartLine} className='btn-i' />
              Trending
            </button>
          </div> */}


          <div className='heading-btn-group'>
            {button_Data.map((item, index) => (
                 <MyButton 
                 className={item.className}
                 id={index}
                 value={item.value} 
                 setActiveButton={setActiveButton} 
                 active={activeButton === index ? true : false}
                 handler={item.handler}
                 icon={item.icon}
                 iconClass={item.iconClass}
                 />
        
            ))}
          </div>
           

           


          


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
            <MyMovieCard key={index} {...movie} />
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