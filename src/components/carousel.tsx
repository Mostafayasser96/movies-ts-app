import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../styles/carousel.css';
import Social from '../components/social';
import Carousel from "react-bootstrap/Carousel";
import { CarouselData } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faStar,

} from '@fortawesome/free-solid-svg-icons';
import {
	NavDropdown,
	Button,
	Dropdown,
	Modal,
	ButtonGroup,
	Form,
	FormControl
} from 'react-bootstrap';



const MyCarousel = () => {

	const [carouselData, setCarouselData] = useState<CarouselData>();
	useEffect(() => {
		const apiKey = process.env.REACT_APP_API_KEY;
		fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`)
			.then(response => response.json() as Promise<CarouselData>)
			.then((data) => {
				console.log(data)
				setCarouselData(data);
			})
	}, [])
	// const for carousel indicators
	const [min] = useState<number>(0);
	const [max] = useState<number>(9);



	return (
		<div className='carousel-div'>
			<Carousel className='carousel'
				controls={false} >

				{carouselData?.results.map((item, index) => {
					if (index >= min && index <= max) {
						return (<Carousel.Item key={index} className='carousel-item1'>
							<img
								className="movie-poster d-block w-100 img-responsive d-flex justify-content-center align-items-center"
								src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
								alt={item?.title}
							/>
							<Carousel.Caption className='slider-show-data'>
								<h1 className='slider-h1 text-white'>
									{item.title}
								</h1>
								<div className='slider-sub-data d-inline-flex justify-content-around'>
									<span className='slider-quality'>
										HD
									</span>
									<span className='slider-assessment d-flex justify-content-between'>
										<FontAwesomeIcon icon={faStar} className='slider-assessment-i text-white' />
										<span className='slider-movie-assessment text-white'>
											{item.vote_average}
										</span>
									</span>
									<span className='slider-duration'>
										{item?.vote_average}
									</span>
									<span className='genre-span'>
										<a href='#' className='slider-movie-genre text-white'>
											{item?.genre_ids}
										</a>
									</span>
								</div>
								<p className='slider-p col-md-8 col-sm-6'>
									{/* Adam Reed, age 12, and still grieving the sudden death of his father a year earlier, walks into his
						garage one night to find a wounded pilot hiding there. This... */}
									{item?.overview}
								</p>
								<ButtonGroup className='slider-btn-group d-inline-flex justify-content-between'>
									<Button className='slider-btn1 text-capitalize'>
										<FontAwesomeIcon icon={faPlay} className='btn1-i' />
										Watch now
									</Button>
									<Button className='slider-btn2 text-capitalize'>
										<i className="btn2-i fa-regular fa-heart"></i>
										Add to list
									</Button>
								</ButtonGroup>
							</Carousel.Caption>
						</Carousel.Item>
						
						

						)
					}
				})}
				

			</Carousel>
			<Social />
		</div>
	)
}
export default MyCarousel;


