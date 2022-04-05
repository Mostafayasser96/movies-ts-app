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
  Latest,
  Season,
  Card,
  Movie
} from '../types/types';
import { Dropdown } from 'react-bootstrap';


const MySerieCard: FC<Card> = (serie: {
  id: number;
  episode_count?: number;
  season_number: number;
  name: string;
  last_air_date: string;
  overview: string;
  poster_path: string;
}) => {
  // the tooltip of the card
  const MyCardTooltip = (props: JSX.IntrinsicAttributes & TooltipProps & React.RefAttributes<HTMLDivElement>) => {

    return (
      <Tooltip id='card-tooltip'
        {...props}
        className='tooltip'

      >
        <h6 className='movie-name'>
          {serie?.name}
        </h6>
        <div className='movie-data d-flex justify-content-between'>
          <span className=' assessment-span d-flex justify-content-between'>
            <FontAwesomeIcon icon={faStar} className='assessment-i' />
            <span className='movie-assessment'>
              {serie?.id}
            </span>
          </span>
          <span className='production-year'>
            {serie?.id}
          </span>
          <span className='duration'>
            {serie?.last_air_date}
          </span>
          <span className='quality'>HD</span>
        </div>
        <p className='abstract'>
          {serie?.overview}
        </p>
        <div className='movie-data2'>
          <p className='country-p'>
            Country:
            <a href='#' className='country'> {serie?.season_number}</a>
          </p>
          <p className='genre-p'>
            Genre:
            <a href='#' className='genre'> {serie?.season_number}</a>
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
      <div className='card col-lg-2 '
        onMouseEnter={() => setStreamShow(true)}
        onMouseLeave={() => setStreamShow(false)}
      >
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
          <img src={`https://image.tmdb.org/t/p/w500/${serie?.poster_path}`}
            alt='show-poster'
            className='show-img'
          />

        </div>
        <div className='show-quality'>
          {serie?.id}
        </div>
        <div className='card-info'>
          <p className='show-name text-white'>
            {serie?.name}
          </p>
          <div className='show-info d-flex justify-content-between'>
            <div className='sub-info d-flex justify-content-space-between'>
              <div className='year'>
                {serie?.episode_count}
              </div>
              <span className='dot-span'></span>
              <div className='show-time'>
                {serie?.id}
              </div>
            </div>
            <div className='show-type'>
               serie
            </div>
          </div>
        </div>

      </div>
    </OverlayTrigger>

  )
}
export default MySerieCard;