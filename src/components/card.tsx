import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  OverlayTrigger,
  Tooltip,
  TooltipProps

} from "react-bootstrap";





const MyCard = () => {

  // the tooltip of the card
  const MyCardTooltip = (props: JSX.IntrinsicAttributes & TooltipProps & React.RefAttributes<HTMLDivElement>) => {

    return (
      <Tooltip id='card-tooltip'
        {...props}
        className='tooltip'

      >

        <h6 className='movie-name'>The Adam Project</h6>
        <div className='movie-data d-flex justify-content-between'>
          <span className=' assessment-span d-flex justify-content-between'>
            <FontAwesomeIcon icon={faStar} className='assessment-i' />
            <span className='movie-assessment'>7.5</span>
          </span>
          <span className='production-year'>2022</span>
          <span className='duration'>110 min</span>
          <span className='quality'>HD</span>
        </div>
        <p className='abstract'>
          Adam Reed, age 12, and still grieving the sudden death of his father a year earlier, walks into his
          garage one night to find a wounded pilot hiding there. This...
        </p>
        <div className='movie-data2'>
          <p className='country-p'>
            Country:
            <a href='#' className='country'> United States</a>
          </p>
          <p className='genre-p'>
            Genre:
            <a href='#' className='genre'> Comedy</a>
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
  return (
    <OverlayTrigger
      placement='right'
      overlay={MyCardTooltip}
      delay={{ show: 1000, hide: 10000 }}
    >
      <div className='card'
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
          <img src=''
            alt='show-poster'
            className='show-img'
          />

        </div>
        <div className='show-quality'>
          CAM
        </div>
        <div className='card-info'>
          <p className='show-name text-white'>
            The Batman
          </p>
          <div className='show-info d-flex space-between'>
            <div className='sub-info d-flex justify-content-space-between'>
              <div className='year'>
                2022
              </div>
              <span className='dot-span'></span>
              <div className='show-time'>
                111 min
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
export default MyCard;