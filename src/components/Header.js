import React from "react";
import "../App.css";
import useAuth from "../hooks/useAuth";
import { useHistory, NavLink } from "react-router-dom";

const Nav = () => {
	const { authed, logout } = useAuth();
	const history = useHistory();

	const handleLogout = () => {
		logout();
		history.push("/");
	};

	return (
		<nav>
			<ul className="header">
				<li>
					<NavLink exact="true" activeclassname="active" to="/">
						Home
					</NavLink>
				</li>
				{authed ? (
					<li style={{ float: "right" }}>
						<a style={{ color: "white" }} onClick={handleLogout}>
							Logout
						</a>
					</li>
				) : (
					<li style={{ float: "right" }}>
						<NavLink activeclassname="active" to="/login">
							Login
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
