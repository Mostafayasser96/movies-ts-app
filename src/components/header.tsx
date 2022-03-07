// the fetch order: fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Nav, Navbar, NavDropdown } from 'react-bootstrap';



const Header = () => {
	return (
		<div className='header'>
			<Navbar className='parent-nav'>
						
						{/* Note: to avoid conflict of href between Navbar.Brand and react router's Link element path attribute
											we will use the hook called 'useHistory' of react, relating it to the onClick attribute 
											of the navbar.Brand
						*/}
						<Navbar.Brand href='#'>
							<img src='https://s1.bunnycdn.ru/assets/sites/fmovies/logo2.png'
								className='logo-img'
								alt='Fmovies logo'
							></img>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav' className='inner-nav-collapse'>
						 <Nav className='inner-nav'>
							<Nav.Link href='#' className='inner-nav-link'>Home</Nav.Link>
							{/* Note: 1- NavDropdown.Items appear onhover not onclick here.
												2- each NavDropdown.Item element here has href that has to be consistent with
												my apicall(each href has to be changed)
							*/}
							<NavDropdown title='Genre' id='basic-nav-dropdown' className='genres-dropdown'>
							 <NavDropdown.Item href='#' className='genre'>Action</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Biography</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Crime</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Family</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>History</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Music</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Romance</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Thriller</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Western</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Adventures</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Costumes</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Documentary</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Fantasy</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Horror</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Mystery</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Sci-Fi</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>TV Show</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Animation</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Comedy</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Drama</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Kungfu</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Reality TV</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>Sport</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='genre'>War</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title='Country' id='basic-nav-dropdown' className='country-dropdown'>
							 <NavDropdown.Item href='#' className='country'>Argentina</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Belgium</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>China</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Finland</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Hong Kong</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>International</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Italy</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Mexico</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Norway</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Romania</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>South Korea</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Swizerland</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>United Kingdom</NavDropdown.Item>

							 <NavDropdown.Item href='#' className='country'>Australia</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Brazil</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Czech Republic</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>France</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Hungary</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Ireland</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Japan</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Japan</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Netherlands</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Philippines</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Russia</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Spain</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Taiwan</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>United States</NavDropdown.Item>

							 <NavDropdown.Item href='#' className='country'>Austria</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Canada</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Denmark</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Germany</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>India</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Palestine</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Luxembourg</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>New Zealand</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Poland</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>South Africa</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Sweden</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Thailand</NavDropdown.Item>
							 <NavDropdown.Item href='#' className='country'>Egypt</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href='#' className='inner-nav-link'>Movies</Nav.Link>
							<Nav.Link href='#' className='inner-nav-link'>TV&#45;Series</Nav.Link>
							<Nav.Link href='#' className='inner-nav-link'>Top IMDb</Nav.Link>
						 </Nav>
						 

						</Navbar.Collapse>
					
				</Navbar>
			<Carousel className='carousel'>
				<Carousel.Item className='carousel-item1'>
					
				</Carousel.Item>
        <Carousel.Item>

				</Carousel.Item>

			</Carousel>


		</div>
	)
}
export default Header;