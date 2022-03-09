import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { ListGroup } from 'react-bootstrap';


const Footer = () => {
	return (
		<div className='footer d-flex space-between'>
			<div className='footer-info'>
				<div className='logo-div'>
					<img src='https://s1.bunnycdn.ru/assets/sites/fmovies/logo2.png'
						className='logo-img'
						alt='Fmovies logo'
					/>
				</div>
				<div className='footer-info-div'>
					<p className='info-p1'>
						FMovies is top of <strong>free streaming website</strong>&#44; where to watch movies online free without registration
						required&#46; With a big database and great features&#44; we&#96;re confident FMovies is the best free movies
						online website in the space that you can&#96;t simply miss&#33;
					</p>
					<a href='https://twitter.com/fmoviesdotto' className='twitter-a'>
						<FontAwesomeIcon icon={faTwitter} className='footer-social-i' />
						<span>Connect with us on twitter</span>
					</a>
					<p className='info-p2'>This site does not store any files on our server&#44; we only linked to the media which is hosted
						on 3rd party services.</p>
				</div>
			</div>
			<div className='footer-links'>
				<ListGroup className='links-group1'>
					<ListGroup.Item className='link1'>Links</ListGroup.Item>
					<ListGroup.Item className='link1'>Movies</ListGroup.Item>
					<ListGroup.Item className='link1'>TV-Shows</ListGroup.Item>
					<ListGroup.Item className='link1'>Most Watched</ListGroup.Item>
					<ListGroup.Item className='link1'>Top IMDb</ListGroup.Item>
				</ListGroup>
				<ListGroup className='links-group2'>
					<ListGroup.Item className='link2'>Action Movies</ListGroup.Item>
					<ListGroup.Item className='link2'>Horror Movies</ListGroup.Item>
					<ListGroup.Item className='link2'>Sci-fi Movies</ListGroup.Item>
					<ListGroup.Item className='link2'>Thriller Movies</ListGroup.Item>
				</ListGroup>
				<ListGroup className='links-group3'>
					<ListGroup.Item className='link3'>Contact</ListGroup.Item>
					<ListGroup.Item className='link3'>Request</ListGroup.Item>
				</ListGroup>
			</div>
		</div>
	)
}
export default Footer;