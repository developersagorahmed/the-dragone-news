import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div>
			<Container className="mx-auto w-25">
				<h3>Please Register</h3>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							placeholder="Your Name"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Photo URL</Form.Label>
						<Form.Control
							type="text"
							name="photo"
							placeholder="Photo URL"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							placeholder="Enter email"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							placeholder="Password"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							name="accept"
							label="Accept terms and Conditions"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Register
					</Button>
					<br />
					<Form.Text className="text-secondary">
						Already have an Account<Link to="/login">Login</Link>
					</Form.Text>{" "}
					<br />
					<Form.Text className="text-success"></Form.Text> <br />
					<Form.Text className="text-danger"></Form.Text>
				</Form>
			</Container>
		</div>
	);
};

export default Register;
