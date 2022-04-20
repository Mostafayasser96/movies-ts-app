import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
	Form,
	FormGroup,
	ListGroup
} from 'react-bootstrap';
import '../styles/footer.css';
import { Link } from '../types/types';
import { useNavigate } from 'react-router-dom';
import {
	Modal,
	Button
} from 'react-bootstrap';
import {
	Inputs
} from '../types/types';
import {
	useForm,
	SubmitHandler,
} from 'react-hook-form';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const Footer = () => {
	const navigate = useNavigate();
	const links1: Link[] = [
		{
			value: 'Links',
			path: ''
		},
		{
			value: 'Movies',
			path: '/movies'
		},
		{
			value: 'TV-Shows',
			path: '/Tv-series'
		},
		{
			value: 'Most-Watched',
			path: '/most-watched'
		},
		{
			value: 'Top-IMDB',
			path: '/top-imdb'
		}
	];
	const links2: string[] = ['Action Movies', 'Horror Movies', 'Sci-fi Movies', 'Thriller Movies'];
	// const links3: string[] = ['Contact', 'Request'];

	// this is form validation using react hook form
	const schema = yup.object().shape({
		email: yup.string().email().required() ,
		title: yup.string().required() ,
		link: yup.string().required() ,
		captcha: yup.number().positive().required()
	})
	const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>({
		resolver: yupResolver(schema)
	});
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		reset({
			email: '',
			title: '',
			link: '',
			captcha: ''
		})
		// handleClose();
	}
   
	const RequestsForm = () => {
		return (

			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="email" className="label">Email</label>
				<input className='form-input'
				    type='email'
					id="email"
					placeholder='Your email'
					// {...register('email', { 
					// 	required: 'please enter correct email' ,
					// 	minLength: {
					// 		value: 4,
					// 		message: 'length must be 4 or more'
					// 	},
					// 	maxLength: {
					// 		value: 100,
					// 		message: 'max 100'
					// 	}
					// })}
					{...register('email')}
					
				/>
				{/* {errors?.email && errors?.email.type === 'string' &&(
				  <span className='error-span'>{errors.email.message}</span>
				)} */}
				<p> {errors?.email?.message} </p>
				<label htmlFor="text" className="label">Title </label>
				<input className='form-input'
				    type='text'
					id="title"
					placeholder='Enter your movie/show name'
					// {...register('title', { required: true })}
					{...register('title')}
				/>
				{/* {errors?.title && errors?.title?.type === 'string' && (
				  <span className='error-span'>show title is required</span>
				)} */}
				  <p> {errors?.title?.message} </p>
				<label htmlFor="Description" className="label">Description </label>
				<input className='form-input'
				    type='text'
					id="link"
					placeholder='Link IMDb if possible'
					// {...register('link', { required: true })}
                    {...register('link')}
				/>
				{/* {errors?.link && errors?.link?.type === 'string' && ( 
				   <span className='error-span'>Your Link Is Required</span>
				)} */}
				<p>{errors?.link?.message}</p>
				<div className='captcha-div'>
					<div className='captcha'>

					</div>
					<input type='text'
					id="captcha-value"
					placeholder='Enter the captcha'
					className='captcha-input'
					// {...register('captcha', { required: true })}
					{...register('captcha')}
				/>
				{/* {errors?.captcha && errors?.captcha?.type === 'valueAsNumber' && (
				  <span className='error-span'>Your Captcha Number Is Required</span>
				)} */}
				<p> {errors?.captcha?.message} </p>
				</div>
				<button type="submit"
					className="sub-btn"

				>Send Request</button>

			</form>
			
		)
	}
	// this is requests' modal 
	const [show, setShow] = useState<boolean>(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	const RequestsModal = () => {




		return (
			<div>


				<Modal show={show} onHide={handleClose}>
					<Modal.Header>
						<div className='modal-heading'>
							<Modal.Title>Send Your Request</Modal.Title>
							<FontAwesomeIcon icon={faXmark}
								className='close-btn'
								onClick={handleClose}
							/>
						</div>
						<p className='header-p'>
							If your movie/shows isn't listed in our library, you can send your request here,
							we will try to make it available asap!
						</p>
					</Modal.Header>
					<Modal.Body className='requests-modal-body'>
						<RequestsForm />
					</Modal.Body>
				</Modal>
			</div>
		)
	}
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
						<ListGroup.Item key={index}
							className='link1'
							onClick={() => navigate(link.path)}
						>
							{link.value}
						</ListGroup.Item>
					)}

				</ListGroup>
				<ListGroup className='links-group2'>

					{links2.map((link, index) =>
						<ListGroup.Item key={index} className='link2'>{link}</ListGroup.Item>
					)}
				</ListGroup>
				<ListGroup className='links-group3'>
					<ListGroup.Item className='link3' onClick={handleShow}>Requests</ListGroup.Item>
					<RequestsModal />
				</ListGroup>
			</div>
		</div>
	)
}
export default Footer;


