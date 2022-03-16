import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel  from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faStar
} from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from 'react-bootstrap';




const MyCarousel = () => {
	return (
		<Carousel className='carousel' 
		          controls={false} >
			<Carousel.Item className='carousel-item1'>
				<img
					// className="d-block w-100"
					src='#'
					alt="First slide"
				/>
				<Carousel.Caption className='slider-show-data'>
					<h1 className='slider-h1 text-white'>Red Notice</h1>
					<div className='slider-sub-data d-inline-flex justify-content-around'>
						<span className='slider-quality'>HD</span>
						<span className='slider-assessment d-flex justify-content-between'>
							<FontAwesomeIcon icon={faStar} className='slider-assessment-i text-white' />
							<span className='slider-movie-assessment text-white'>8.50</span>
						</span>
						<span className='slider-duration'>122 min</span>
						<span className='genre-span'>
							<a href='#' className='slider-movie-genre text-white'>Action</a>
						</span>
					</div>
					<p className='slider-p'>
						Adam Reed, age 12, and still grieving the sudden death of his father a year earlier, walks into his
						garage one night to find a wounded pilot hiding there. This...
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
			{/* note: the css property called (box-shadow) is very important for carousel styling */}
		</Carousel>
	)
}
export default MyCarousel;