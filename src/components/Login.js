import React, { useState } from "react";
import { useLocation, Redirect, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

export default function Login() {
	const init = { username: "", password: "" };
	const [loginCredentials, setLoginCredentials] = useState(init);
	const [error, setError] = useState();
	const { login } = useAuth();
	const location = useLocation();
	let history = useHistory();

	let { from } = location.state || { from: { pathname: "/" } };

	const performLogin = (evt) => {
		evt.preventDefault();

		login(loginCredentials.username, loginCredentials.password, () => {
			history.replace(from);
		}).catch(async (err) => {
			const e = await err;
			setError(e.message);
			console.log(e);
		});
	};

	const onChange = (evt) => {
		setLoginCredentials({
			...loginCredentials,
			[evt.target.id]: evt.target.value,
		});
	};

	return (
		<div
			style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
		>
			<h2 style={{ margin: "30px" }}>Login</h2>
			<Form className="form-group mb-3" onChange={onChange}>
				<Form.Group className="mb-3" controlId="formBasicUsername">
					<input
						className="form-control"
						placeholder="Username"
						id="username"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<input
						className="form-control"
						placeholder="Password"
						id="password"
						type="password"
						required
					/>
				</Form.Group>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<Button variant="primary" onClick={performLogin}>
					Login
				</Button>
			</Form>
		</div>
	);
}
