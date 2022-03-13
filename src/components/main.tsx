import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStream,
  faList,
  faChartLine,
  faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <div className='main'>
      <div className='recommended'>
        <div className='heading d-flex justify-content-between'>
          <h2>
            <span>Recom</span>mended
          </h2>
         
          <button type='submit' className='movies-btn'>
            {/* note: the icon here isn't the same one as it's not consistent with react fa library */}
            <FontAwesomeIcon icon={faStream} className='btn-i' />
            Movies
          </button>
          <button type='submit' className='shows-btn'>
            <FontAwesomeIcon icon={faList} className='btn-i' />
            TV Shows
          </button>
          <button type='submit' className='trending-btn'>
            <FontAwesomeIcon icon={faChartLine} className='btn-i' />
            Trending
          </button>
          <span className='line'></span>
        </div>
      </div>
      <div className='latest-movies d-flex justify-content-between'>
        <h2>
          <span>Latest</span> Movies
        </h2>
        <button className='view-btn' type='submit' id='viewBtn'>
          View All
          <FontAwesomeIcon icon={faCircleChevronRight} className='viewbtn-i' />
        </button>
      </div>
      <div className='latest-tv d-flex justify-content-between'>
        <h2>
          <span>Latest</span> TV-Series
        </h2>
        <button className='view-btn' type='submit' id='viewBtn'>
          View All
          <FontAwesomeIcon icon={faCircleChevronRight} className='viewbtn-i' />
        </button>
      </div>
      <div className='requested d-flex justify-content-between'>
        <h2>
          <span>Req</span>uested
        </h2>
        <button className='view-btn' type='submit' id='viewBtn'>
          View All
          <FontAwesomeIcon icon={faCircleChevronRight} className='viewbtn-i' />
        </button>
      </div>
    </div>
  )
}
export default Main;