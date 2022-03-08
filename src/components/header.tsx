// the fetch order: fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSearch,
	faUser,
	faEnvelope,
	faPlus,
	faPaperPlane,
	faEnvelopeOpenText,
	faPrint
} from '@fortawesome/free-solid-svg-icons';
import {
	Carousel,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
	Button,
	NavItem,
	Dropdown,
	// HTMLDivElement,

} from 'react-bootstrap';
import {
	faFacebook,
	faTwitter,
	faPinterest,
	faWhatsapp,
	faLinkedin,
	faTumblr,

} from "@fortawesome/free-brands-svg-icons";
import {
	IconLookup,
	IconDefinition,
	findIconDefinition
} from '@fortawesome/fontawesome-svg-core';
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
// import * as ReactBootstrap from "react-bootstrap";

const Header = () => {
	const messengerLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' };
	const messengerIconDefinition: IconDefinition = findIconDefinition(messengerLookup);
	const gmailLookup: IconLookup = { prefix: 'fad', iconName: 'google-plus' };
	const gmailIconDefinition: IconDefinition = findIconDefinition(gmailLookup);
	return (
		<div className='header'>
			<Navbar className='parent-nav'>

				{/* Note: 1- to avoid conflict of href between Navbar.Brand and react router's Link element path attribute
						  we will use the hook called 'useHistory' of react, relating it to the onClick attribute 
						  of the navbar.Brand.
						  2- refactor the css file to be consistent with bootstrap react.(indent styles within className attributes).
						*/}
				<Navbar.Brand href='#'>
					<img src='https://s1.bunnycdn.ru/assets/sites/fmovies/logo2.png'
						className='logo-img'
						alt='Fmovies logo'
					></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Nav className='inner-nav'>
					<Nav.Link href='#' className='inner-nav-link'>Home</Nav.Link>
					{/* Note: 1- NavDropdown.Items appear onhover not onclick here.
							  2- each NavDropdown.Item element here has href that has to be consistent with
								 my apicall(each href has to be changed).
							  3- turn that navDropdown.Item elements into array values and map over it.
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

				<Form className='navbar-form'>
					<Button type='submit' className='search-btn'>
						<FontAwesomeIcon icon={faSearch} className='search-i' />
					</Button>
					<FormControl type='search'
						placeholder='Enter your keywords...'
						aria-label='search'
						className='search-input'
					/>
				</Form>
				<Nav className='register'>
					<NavItem className='profile'>
						<FontAwesomeIcon icon={faUser} className='profile-i' />
					</NavItem>

					<NavItem className='register-p'>
						Login&sol;Register
					</NavItem>
				</Nav>

			</Navbar>

			<Carousel className='carousel'>
				<Carousel.Item className='carousel-item1'>

				</Carousel.Item>
				<Carousel.Item>

				</Carousel.Item>

			</Carousel>
			<div className='website-info'>
				<h3 className='info-h'>
					Watch Movies Online Free
				</h3>
				<p className='info-p'>
					fmovies&#46;to &#45; Just a better place to <strong className='p-strong-1'>watch movies online for free</strong>&#46;
					It allows you to <strong className='p-strong-2'>watch movies online</strong> in high quality for free&#46;
					No registration is required&#46; The content is updated daily with fast streaming
					servers&#44; multi&#45;language subtitles supported&#46; Just open fmovies&#46;to and
					watch your favorite movies&#44; tv-shows&#46; We have almost any movie&#44; tv&#45;shows you want to watch&#33;
					Please bookmark <strong className='p-strong-3'>fmovies&#46;name</strong> to update about fmovies domains&#46;
					Please help us by sharing this site with your friends&#46; Thanks&#33;
				</p>
				<div className='social-media'>
					<Button className='facebook-btn d-flex space-between'>
						<FontAwesomeIcon icon={faFacebook} className='social-i' />
						<p>Facebook</p>
					</Button>
					<Button className='twitter-btn'>
						<FontAwesomeIcon icon={faTwitter} className='social-i' />
						<p> Twitter</p>
					</Button>
					<Button className='email-btn'>
						<FontAwesomeIcon icon={faEnvelope} className='social-i' />
						<p>Email</p>
					</Button>
					<Button className='pinterest-btn'>
						<FontAwesomeIcon icon={faPinterest} className='social-i' />
						<p>Pinterest</p>
					</Button>
					<Button className='whatsapp-btn'>
						<FontAwesomeIcon icon={faWhatsapp} className='social-i' />
						<p> Whatsapp</p>
					</Button>
					<Button className='telegram-btn'>
						<FontAwesomeIcon icon={faPaperPlane} className='social-i' />
						<p>Telegram</p>
					</Button>
					<Dropdown title='More' id='more' className='more-dropdown'>
						<DropdownToggle className='more-toggle'>
							<FontAwesomeIcon icon={faPlus} className='social-i' />
							<p><span>More </span>92.1k</p>
						</DropdownToggle>

						<DropdownMenu className='more-menu'>
							<DropdownItem href='#' className='print'>
								<FontAwesomeIcon icon={faPrint} className='social-item-i' />
								<p>Print</p>
							</DropdownItem>
							<DropdownItem href='#' className='gmail'>
								<FontAwesomeIcon icon={gmailIconDefinition} className='social-item-i' />
								<p>Gmail</p>
							</DropdownItem>
							<DropdownItem href='#' className='linkedin'>
								<FontAwesomeIcon icon={faLinkedin} className='social-item-i' />
								<p> Linkedin</p>
							</DropdownItem>
							<DropdownItem href='#' className='email-app'>
								<FontAwesomeIcon icon={faEnvelopeOpenText} className='social-item-i' />
								<p>Email App</p>
							</DropdownItem>
							<DropdownItem href='#' className='tumblr'>
								<FontAwesomeIcon icon={faTumblr} className='social-item-i' />
								<p>Tumblr</p>
							</DropdownItem>
							<DropdownItem href='#' className='messenger'>
								<FontAwesomeIcon icon={messengerIconDefinition} className='social-item-i' />
								<p>Messenger</p>
							</DropdownItem>
							{/* Note: There is a modal that appears when clicking on more-item */}
							<DropdownItem href='#' className='more-item'>
								<FontAwesomeIcon icon={faPlus} />
								<p>More...&#40;181&#40;</p>
							</DropdownItem>
							<DropdownItem href='#' className='add-this'>
								<FontAwesomeIcon icon={faPlus} />
								<p>Add This</p>
							</DropdownItem>
						</DropdownMenu>

					</Dropdown>
				</div>
			</div>

		</div>
	)
}
export default Header;