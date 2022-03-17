import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carousel.css';
import Carousel  from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faStar,
	faPaperPlane,
	faEnvelope,
	faPlus,
	faEnvelopeOpenText,
	faPrint,
	faCircleXmark,
	faSearch
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
import {
    faFacebook,
	faPinterest,
	faWhatsapp,
	faLinkedin,
	faTumblrSquare,
	faTwitter,
	faPinterestP,
	faFacebookF,
	faLinkedinIn,
	faTumblr,
} from "@fortawesome/free-brands-svg-icons";
// import { Button, } from 'react-bootstrap';
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';



const MyCarousel = () => {
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
										<i className="modal-social-i fa-brands fa-google-drive" ></i>
									</Button>
									<p className='text-white'>Gmail</p>
								</div>
								<div className='modal-btn-div'>
									<Button href='#' className='linkedin-modal-btn d-flex justify-content-between'>
										<FontAwesomeIcon icon={faLinkedinIn} className='modal-social-i' />
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
										<i className="modal-social-i fa-brands fa-facebook-messenger"></i>
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
						onClick={() => setShowSocialModal(true)}
					>
						<MoreSocialModal show={showSocialModal} onHide={() => setShowSocialModal(false)} />
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
			{/* <Loader /> */}
		
		</Carousel>
	)
}
export default MyCarousel;