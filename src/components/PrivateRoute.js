import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { authed } = useAuth();
	return (
		<Route
			{...rest}
			render={({ location }) => {
				return authed === true ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				);
			}}
		/>
	);
};

export default PrivateRoute;
