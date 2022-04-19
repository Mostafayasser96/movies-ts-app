import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/login.css";
import {
	Button,
	Form,
	FormGroup,
	Modal,
	ModalHeader,
	
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';





const Login = (props: {show: boolean; onHide: () => void;}) => {

	const LoginForm = () => {
		return (
			<Form className="login-form" >
				<Form.Group controlId="formBasicEmail" className="form-group1">
					<Form.Label htmlFor='formInput' className="form-label">Your account</Form.Label>
					<Form.Control type='text'
						placeholder="Your username or email"
						className="form-input"
						id="formInput1"

					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label htmlFor="formInput2" className="form-label">Password</Form.Label>
					<Form.Control type='password'
						placeholder="Password"
						className="form-input"
						id="formInput2"

					/>
				</Form.Group>

				{/* note: the anchor element here must be changed to Link with react router */}
				<a href='#' className="forgot-password">Forgot Your password?</a>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type='checkbox' label='Remember me' className="remember-div"></Form.Check>
				</Form.Group>
				<Button variant="primary" type='submit' className="login-modal-btn">Login</Button>
			</Form>
		)
	}
	return (
		<div>
		<Modal centered
			aria-labelledby='contained-modal-title-vcenter'
			{...props}
		>
			<Modal.Header className="login d-block">
				<Modal.Title id='contained-modal-title-vcenter' className="login-title">
					<FontAwesomeIcon icon={faXmark}  
					                 className='exit-i d-block' 
									
									 />
					<span>Sign In</span>

				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="modal-body">
				<LoginForm />
			</Modal.Body>
			<Modal.Footer className="login-footer">
				{/* note: the anchor element here must be changed to Link with react router */}
				<p className="acc-check">Don't have an account?</p>
				<a href="#" className="register-btn">Register</a>
			</Modal.Footer>

		</Modal>
		</div>

	)
}
export default Login;



// export default function Login(props: {open: boolean; setOpen: () => void}){
// 	const {open, setOpen} = props;
// 	return(
// 		<Modal show={open} as={Fragment}>
//            <div>
// 			   <h1>this is the modal</h1>
// 			   <button type="button" onClick={() => setOpen(false)}>

// 			   </button>
// 		   </div>
// 		</Modal>
// 	)
// }