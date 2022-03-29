import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { ListGroup } from 'react-bootstrap';
import '../styles/footer.css';

const Footer = () => {
	const links1: string[] = ['Links', 'Movies', 'TV-Shows', 'Most Watched', 'Top IMDb'];
	const links2: string[] = ['Action Movies', 'Horror Movies', 'Sci-fi Movies', 'Thriller Movies'];
	const links3: string[] = ['Contact', 'Request'];
	return (
		<div className='footer'>
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
					<p className='info-p2 font-italic'>This site does not store any files on our server&#44; we only linked to the media which is hosted
						on 3rd party services.</p>
				</div>
			</div>
			<div className='footer-links d-flex justify-content-between'>
				<ListGroup className='links-group1'>

					{links1.map((link, index) =>
						<ListGroup.Item key={index} className='link1'>{link}</ListGroup.Item>
					)}

				</ListGroup>
				<ListGroup className='links-group2'>

					{links2.map((link, index) => 
						 <ListGroup.Item key={index} className='link2'>{link}</ListGroup.Item>
					)}
				</ListGroup>
				<ListGroup className='links-group3'>

					{links3.map((link, index) => 
						<ListGroup.Item key={index}  className='link3'>{link}</ListGroup.Item>
					)}
				</ListGroup>
			</div>
		</div>
	)
}
export default Footer;