// the fetch order: fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
import React, { useState } from 'react';
import Login from './login';
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
	faPrint,
	faCircleXmark,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import {
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
	Button,
	NavItem,
	Dropdown,
	Modal,
	ButtonGroup,

} from 'react-bootstrap';
import {
	faFacebook,
	faTwitter,
	faPinterest,
	faWhatsapp,
	faLinkedin,
	faTumblrSquare,
	faPinterestP,
	faFacebookF,
	faLinkedinIn,
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
	// syntax to get the two missed icons(not working).
	const messengerLookup: IconLookup = { prefix: 'fad', iconName: 'facebook-messenger' };
	const messengerIconDefinition: IconDefinition = findIconDefinition(messengerLookup);
	const gmailLookup: IconLookup = { prefix: 'fad', iconName: 'google-plus' };
	const gmailIconDefinition: IconDefinition = findIconDefinition(gmailLookup);
	// refactoring genres and countries array elements.
	const genres: string[] = ['Action', 'Biography', 'Crime', 'Family', 'History', 'Music', 'Romance',
		'Thriller', 'Western', 'Adventures', 'Costumes', 'Documentary', 'Fantasy',
		'Horror', 'Mystery', 'Sci-Fi', 'TV show', 'Animation', 'Comedy', 'Drama',
		'Kungfu', 'Reality TV', 'Sport', 'War'
	];
	const countries: string[] = [
		'Argentina', 'Pelgium', 'Finland', 'Hong Kong', 'International', 'Italy', 'Mexico', 'Norway',
		'Romania', 'South Korea', 'Swizerland', 'United Kingdom', 'Australia', 'Brazil', 'Czech Republic',
		'France', 'Hungary', 'Ireland', 'Japan', 'Netherlands', 'Philippines', 'Russia', 'Spain', 'Taiwan',
		'United States', 'Austria', 'Canada', 'Germany', 'Denmark', 'India', 'Palestine', 'Luxembourg',
		'New Zealand', 'Poland', 'South Africa', 'Sweden', 'Thailand', 'Egypt'
	]
	// login modal const
	const [showModal, setShow] = useState<boolean>(false);
	// More button's modal
	const [showSocialModal, setShowSocialModal] = useState<boolean>(false);
	function MoreSocialModal(props: { show: boolean; onHide: () => void }) {
		return (
			<Modal {...props}
				onHide={() => setShowSocialModal(false)}
				aria-labelledby='contained-modal-title-vcenter'
				fullscreen
				centered

			>
				<Modal.Header className='more-social-modal-header'>
					<Modal.Title>
						<FontAwesomeIcon icon={faCircleXmark}
							className='social-modal-exit-i'
							onClick={() => setShowSocialModal(false)}
						/>
					</Modal.Title>
					<Modal.Body>
						<h1 className='social-h1 text-white'>Share</h1>
						<p className='social-p text-white'>FMovies | Watch Movies Online Free on FMovies.to</p>
						<span className='social-url'>https://fmovies.name</span>
						<Form className='social-modal-form d-inline-flex'>

							<FormControl type='search'
								placeholder='Find a Service'
								aria-label='search'
								className='social-search-input text-white'
							/>
							<Button type='submit' className='social-search-btn'>
								<FontAwesomeIcon icon={faSearch} className='social-search-i' />
							</Button>
						</Form>
						<p className='btn-group-p'>top services</p>
						<div className='btn-groups'>
							<ButtonGroup aria-label='basic-example'
								className='social-btn-group1 d-flex justify-content-between'>
								<div className='modal-btn-div'>
									<Button className='pinterest-modal-btn d-block text-capitalize'>
									<FontAwesomeIcon icon={faPinterestP} className='modal-social-i' />
									</Button>
									<p className='text-white'>Pinterest</p>
								</div>


								<div className='modal-btn-div'>
									<Button className='facebook-modal-btn d-block bg-#3b5998  text-capitalize'>
									<FontAwesomeIcon icon={faFacebookF} className='modal-social-i' />

									</Button>
									<p className='text-white'>Facebook</p>
								</div>

								<div className='modal-btn-div'>
									<Button className='twitter-modal-btn d-block text-capitalize'>
										<FontAwesomeIcon icon={faTwitter} className='modal-social-i' />

									</Button>
									<p className='text-white'> Twitter</p>
								</div>

								<div className='modal-btn-div'>
									<Button href='#' className='print-modal-btn d-block '>
										<FontAwesomeIcon icon={faPrint} className='modal-social-i' />
									</Button>
									<p className='text-white'>Print</p>
								</div>

								<div className='modal-btn-div'>
									<Button className='email-modal-btn d-flex justify-content-between  text-capitalize'>
										<FontAwesomeIcon icon={faEnvelope} className='modal-social-i' />

									</Button>
									<p className='text-white'>Email</p>
								</div>


							</ButtonGroup>
							<ButtonGroup aria-label='basic-example'
								className='social-btn-group2 d-flex justify-content-between'>
								<div className='modal-btn-div'>
									<Button href='#' className='gmail-modal-btn d-flex justify-content-between'>
										{/* note: the gmail icon here isn't working, use the fonts folder to solve that */}
										<FontAwesomeIcon icon={['fab', 'google-drive']} className='modal-social-i' />
									</Button>
									<p className='text-white'>Gmail</p>
								</div>
								<div className='modal-btn-div'>
									<Button href='#' className='linkedin-modal-btn d-flex justify-content-between'>
									<FontAwesomeIcon icon={faLinkedinIn} className='modal-social-i'/>
									</Button>
									<p className='text-white'> Linkedin</p>
								</div>
								<div className='modal-btn-div'>
									<Button href='#' className='email-app-modal-btn d-flex justify-content-between'>
										<FontAwesomeIcon icon={faEnvelopeOpenText} className='modal-social-i' />
									</Button>
									<p className='text-white'>Email App</p>
								</div>
								<div className='modal-btn-div'>
									<Button href='#' className='tumblr-modal-btn d-flex justify-content-between'>
									<FontAwesomeIcon icon={faTumblr} className='modal-social-i' />
									</Button>
									<p className='text-white'>Tumblr</p>
								</div>
								<div className='modal-btn-div'>
									<Button href='#' className='messenger-modal-btn d-flex justify-content-between'>
										<FontAwesomeIcon icon={['fab', 'facebook-messenger']} className='modal-social-i' />
									</Button>
									<p className='text-white'>Messenger</p>
								</div>
							</ButtonGroup>
						</div>
						<Button className='load-more-btn text-black' type='submit'>
							load more
						</Button>
					</Modal.Body>
					<Modal.Footer className='social-modal-footer'>
						<div className='modal-add-this d-flex justify-content-between'>
							<FontAwesomeIcon icon={faPlus} className='modal-add-this-i text-white' />
							<p className='text-white'>Add This</p>
						</div>
					</Modal.Footer>
				</Modal.Header>

			</Modal>
		)
	}
	return (
		<div className='header'>
			<Navbar className='parent-nav z-index-999 width-60% height-5% border-radius-20'>

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
					<NavDropdown title='genres' id='basic-nav-dropdown' className='genres-dropdown'>
						{genres.map((genre) =>
							<NavDropdown.Item href='#' className='genre'>{genre}</NavDropdown.Item>
						)}
					</NavDropdown>
					<NavDropdown title='Country' id='basic-nav-dropdown' className='country-dropdown'>
						{countries.map((country) =>
							<NavDropdown.Item href='#' className='country'>{country}</NavDropdown.Item>
						)}


					</NavDropdown>
					<Nav.Link href='#' className='inner-nav-link'>Movies</Nav.Link>
					<Nav.Link href='#' className='inner-nav-link'>TV&#45;Series</Nav.Link>
					<Nav.Link href='#' className='inner-nav-link'>Top IMDb</Nav.Link>
				</Nav>

				<Form className='navbar-form d-inline-flex'>
					<Button type='submit' className='search-btn'>
						<FontAwesomeIcon icon={faSearch} className='search-i' />
					</Button>
					<FormControl type='search'
						placeholder='Enter your keywords...'
						aria-label='search'
						className='search-input'
					/>
				</Form>
				<Nav className='register d-flex justify-content-between'>
					<NavItem className='profile'>
						<FontAwesomeIcon icon={faUser} className='profile-i' />
					</NavItem>

					<NavItem className='register-p' onClick={() => setShow(true)}>
						Login/Register
						<Login show={showModal} onHide={() => setShow(false)} />
					</NavItem>
				</Nav>

			</Navbar>


			<div className='website-info text-left'>
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
				<div className='social-media d-flex justify-content-between'>
					<Button className='facebook-btn d-flex justify-content-between bg-#3b5998  text-capitalize'>
						<FontAwesomeIcon icon={faFacebook} className='social-i' />
						<p>Facebook</p>
					</Button>
					<Button className='twitter-btn d-flex justify-content-between text-capitalize'>
						<FontAwesomeIcon icon={faTwitter} className='social-i' />
						<p> Twitter</p>
					</Button>
					<Button className='email-btn d-flex justify-content-between  text-capitalize'>
						<FontAwesomeIcon icon={faEnvelope} className='social-i' />
						<p>Email</p>
					</Button>
					<Button className='pinterest-btn d-flex justify-content-between  text-capitalize'>
						<FontAwesomeIcon icon={faPinterest} className='social-i' />
						<p>Pinterest</p>
					</Button>
					<Button className='whatsapp-btn d-flex justify-content-between  text-capitalize'>
						<FontAwesomeIcon icon={faWhatsapp} className='social-i' />
						<p> Whatsapp</p>
					</Button>
					<Button className='telegram-btn d-flex justify-content-between  text-capitalize'>
						<FontAwesomeIcon icon={faPaperPlane} className='social-i' />
						<p>Telegram</p>
					</Button>
					<Dropdown title='More'
						id='more'
						className='more-dropdown p-0'
					// onClick={() => setShowSocialModal(true)}
					>
						<MoreSocialModal show={showSocialModal} onHide={() => setShowSocialModal(true)} />
						<DropdownToggle className='more-toggle d-flex justify-content-between text-capitalize text-white'>
							<FontAwesomeIcon icon={faPlus} className='social-i' />
							<p><span>More </span>92.1k</p>
						</DropdownToggle>

						<DropdownMenu className='more-menu'>
							<DropdownItem href='#' className='print d-flex justify-content-between '>
								<FontAwesomeIcon icon={faPrint} className='social-item-i' />
								<p>Print</p>
							</DropdownItem>
							<DropdownItem href='#' className='gmail d-flex justify-content-between'>
								<FontAwesomeIcon icon={['fab', 'google-drive']} className='social-item-i' />
								<p>Gmail</p>
							</DropdownItem>
							<DropdownItem href='#' className='linkedin d-flex justify-content-between'>
								<FontAwesomeIcon icon={faLinkedin} className='social-item-i' />
								<p> Linkedin</p>
							</DropdownItem>
							<DropdownItem href='#' className='email-app d-flex justify-content-between'>
								<FontAwesomeIcon icon={faEnvelopeOpenText} className='social-item-i' />
								<p>Email App</p>
							</DropdownItem>
							<DropdownItem href='#' className='tumblr d-flex justify-content-between'>
								<FontAwesomeIcon icon={faTumblrSquare} className='social-item-i' />
								<p>Tumblr</p>
							</DropdownItem>
							<DropdownItem href='#' className='messenger d-flex justify-content-between'>
								<FontAwesomeIcon icon={['fab', 'facebook-messenger']} className='social-item-i' />
								<p>Messenger</p>
							</DropdownItem>
							{/* Note: There is a modal that appears when clicking on more-item */}
							<DropdownItem href='#'
								className='more-item d-flex justify-content-between'
								onClick={() => setShowSocialModal(true)}
							>
								<FontAwesomeIcon icon={faPlus} className='more-item-i text-white' />
								<p>More...&#40;181&#41;</p>
							</DropdownItem>
							<DropdownItem href='#' className='add-this d-flex justify-content-between'>
								<FontAwesomeIcon icon={faPlus} className='add-this-i text-white' />
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