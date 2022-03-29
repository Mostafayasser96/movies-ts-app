import { faCalendarDay, faFilter } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  CardProps,
  Dropdown,
  // Input
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
// import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CarouselData,
  Latest,
  Seasons,
  Movie
} from "../types/types";
import { useLocation, useParams } from "react-router-dom";
import MyMovieCard from "../cards/moviecard";
import MySerieCard from "../cards/seriecard";
import MyTopRatedCard from "../cards/toprated";

const Main2 = () => {
  const years: string[] = [
    '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011',
    '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000s', '1990s',
    '1980s', '1970s', '1960s', '1950s', '1940s', '1930s', '1920s', '1910s', '1900s'
  ]
  const location = useLocation();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie>();
  const [topRated, setTopRated] = useState<Movie>();
  const [tvSeries, setTvSeries] = useState<Seasons>();
  const handleChange = () => {
    setDropdown(true);
  }
  const handleMovies = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      .then(response => response.json() as Promise<Movie>)
      .then(data => {
        console.log(data);
        setMovies(data);
      });
  }
  const handleTopRated = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json() as Promise<Movie>)
      .then(data => {
        console.log(data);
        setTopRated(data);
      });
  }
  const handleSeries = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/tv/{tv_id}?api_key=${apiKey}&language=en-US`)
      .then(response => response.json() as Promise<Seasons>)
      .then(data => {
        console.log(data);
        setTvSeries(data);
      });
  }
  // the api call
  useEffect(() => {
    handleMovies();
    handleTopRated();
    handleSeries();
  }, [])
  const { name } = useParams();
  return (
    <div className="show-list">
      <h1 className="heading">
        <span>{name}</span>
      </h1>
      <div className="filter d-flex justify-content-between">
        <Dropdown
          title="Year"
          id='years'
          className="years-dropdown"

        >
          <Dropdown.Toggle className="dropdown-toggle d-flex justify-content-between">
            <FontAwesomeIcon icon={faCalendarDay} className='year-i' />
            <span className="year-span">Year</span>
            <span className="all-span">All</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="years-menu bg-dark">
            {years.map((year, index) =>
              <Dropdown.Item key={index}>
                <input type='checkbox' className="item-check" />
                {year}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Button type="submit" className="filter-btn d-flex justify-content-between">
          <FontAwesomeIcon icon={faFilter} className='filter-i' />
          Filter
        </Button>

      </div>

      <div className="movies-card-list row">
        {/* {name == 'movies' && movies?.id && movies?.map((movie, index) =>
          <MyMovieCard key={index} movie={movie} />
        )}
        {name == 'Tv-series' && tvSeries?.name  && tvSeries?.map((serie, index) => 
          <MySerieCard key={index} serie={serie} />
        )}
        {name == 'top-imdb' && topRated?.vote_count && topRated?.map((movie, index) =>
          <MyTopRatedCard key={index} movie={movie} />
        )} */}
      </div>
    </div>
  )
}
export default Main2;