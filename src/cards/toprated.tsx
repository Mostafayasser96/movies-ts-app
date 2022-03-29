import React, { useState, useEffect, FC } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faStar,
    faCalendarDay,
    faFilter
} from '@fortawesome/free-solid-svg-icons';
import {
    Button,
    OverlayTrigger,
    Tooltip,
    TooltipProps

} from "react-bootstrap";
import { 
    CardProps, 
    CarouselData ,
    Movie
} from '../types/types';
import { Dropdown } from 'react-bootstrap';


const MyTopRatedCard: FC<CardProps['movie']> = (movie: CardProps['movie']) => {
    // the tooltip of the card
    const MyCardTooltip = (props: JSX.IntrinsicAttributes & TooltipProps & React.RefAttributes<HTMLDivElement>) => {

        return (
            <Tooltip id='card-tooltip'
                {...props}
                className='tooltip'

            >
                <h6 className='movie-name'>
                    Red Notice
                </h6>
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
                    <img src={`https://image.tmdb.org/t/p/w500/`}
                        alt='show-poster'
                        className='show-img'
                    />

                </div>
                <div className='show-quality'>
                    { }
                </div>
                <div className='card-info'>
                    <p className='show-name text-white'>
                        { }
                    </p>
                    <div className='show-info d-flex justify-content-between'>
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
export default MyTopRatedCard;