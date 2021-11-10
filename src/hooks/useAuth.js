import * as React from "react";
import Facade from "../facades/Facade";

const authContext = React.createContext();

function useAuth() {
	const [authed, setAuthed] = React.useState(false);
	return {
		authed,
		login(user, pass, callback) {
			return Facade.login(user, pass)
				.then((res) => {
					return setAuthed(true);
				})
				.then((done) => callback());
		},
		logout() {
			return new Promise((res) => {
				Facade.logout();
				setAuthed(false);
				res();
			});
		},
	};
}

export function AuthProvider({ children }) {
	const auth = useAuth();

	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
	return React.useContext(authContext);
}
