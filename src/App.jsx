import { createContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
	AccountPage,
	AdminPage,
	HomePage,
	LoginPage,
	NotFoundPage,
} from "./pages";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import "./App.css";

export const UserContext = createContext(null);

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	return (
		<>
			<UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
				{navBar()}
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={LoginPage} />
					<Route path="/accountPage" element={<ProtectedRoute />} />
					<Route exact path="/accountPage" element={<AccountPage />} />
					<Route path="/adminPage" element={<ProtectedRoute />} />
					<Route exact path="/adminPage" element={<AdminPage />} />

					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
}

function navBar() {
	return (
		<nav>
			<ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/AccountPage">Account</Link>{" "}
				</li>
				<li>
					<Link to="/AdminPage">Admin</Link>{" "}
				</li>
			</ul>
		</nav>
	);
}

export default App;
