import React, { useState, useEffect, FC } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faStar,
  faFilter,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  CardImgProps,
  OverlayTrigger,
  Tooltip,
  TooltipProps

} from "react-bootstrap";
import { 
  CardProps,
  CarouselData,
  Movie, 
  Card,
  Season
} from '../types/types';
import { Dropdown } from 'react-bootstrap';




const MyMovieCard: FC<Card> = (movie: { 
   title: string;
   vote_average: number;
   release_date: string;
   vote_count: number;
   overview: string;
   original_language: string;
   genre_ids: number;
   id: number;
   poster_path: string;
   media_type?: String;
   popularity?: number;
}) => {
  // the tooltip of the card
  const MyCardTooltip = (props: JSX.IntrinsicAttributes & TooltipProps & React.RefAttributes<HTMLDivElement>) => {

    return (
      <Tooltip id='card-tooltip'
        {...props}
        className='tooltip'

      >
        <h6 className='movie-name'>
          {movie?.title}
        </h6>
        <div className='movie-data d-flex justify-content-between'>
          <span className=' assessment-span d-flex justify-content-between'>
            <FontAwesomeIcon icon={faStar} className='assessment-i' />
            <span className='movie-assessment'>
              {movie?.vote_average}
            </span>
          </span>
          <span className='production-year'>
            {movie?.release_date?.slice(0, 4)}
            </span>
          <span className='duration'>
            {movie?.id}
            </span>
          <span className='quality'>
            {movie?.vote_count}
            </span>
        </div>
        <p className='abstract'>
          {movie?.overview}
        </p>
        <div className='movie-data2'>
          <p className='country-p'>
            Country:
            <a href='#' className='country'> 
            {movie?.original_language}
            </a>
          </p>
          <p className='genre-p'>
            Genre:
            <a href='#' className='genre'> 
            {movie?.genre_ids}
            </a>
          </p>
        </div>
        <div className='stream-btns d-flex justify-content-between'>
          <Button type='submit' className='watch-now'>
            <FontAwesomeIcon icon={faPlay} className='watch-now-i' />
            Watch now
          </Button>
          <Button type='submit' className='love-btn'>
            <i className="love-i fa-regular fa-heart"></i>
          </Button>
        </div>


      </Tooltip>
    )

  }
  // the live-stream div const(It shows on hover over  MyCard component)
  const [streamShow, setStreamShow] = useState<boolean>(false);
  const years: string[] = [
    '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011',
    '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000s', '1990s',
    '1980s', '1970s', '1960s', '1950s', '1940s', '1930s', '1920s', '1910s', '1900s'
  ]
  return (
    
    <OverlayTrigger
      placement='right'
      overlay={MyCardTooltip}
      delay={{ show: 1000, hide: 1000 }}
    >
      <div className='card col-sm-6'
        onMouseEnter={() => setStreamShow(true)}
        onMouseLeave={() => setStreamShow(false)}
      >
        {/* note: the stream div that shows onhover is here */}
        {
          streamShow &&
          <div className='stream'>
            <div className='stream-shadow'>
              <div className='stream-overlay'>
                <FontAwesomeIcon icon={faPlay} className='stream-overlay-i' />
              </div>

            </div>
          </div>
        }
        <div className='card-img-div'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt='show-poster'
            className='show-img'
          />

        </div>
        <div className='show-quality'>
          HD
        </div>
        <div className='card-info'>
          <p className='show-name text-white'>
            {movie?.title}
          </p>
          <div className='show-info'>
            <div className='sub-info'>
              <div className='year'>
                {movie?.release_date?.slice(0, 4)}
              </div>
              <span className='dot-span'></span>
              <div className='show-time'>
               {movie?.id}
              </div>
            </div>
            <div className='show-type'>
              movie
            </div>
          </div>
        </div>

      </div>
    </OverlayTrigger>
  
  )
}
export default MyMovieCard;