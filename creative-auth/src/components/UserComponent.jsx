import "../pages/Dashboard.css";

import { Link, useNavigate } from "react-router-dom";

function LoggedInUserComponent() {
	const navigate = useNavigate();

	const user = JSON.parse(localStorage.getItem("user")); // grabs signed in user info from local storage

	const handleSignout = () => {
		localStorage.removeItem("user"); // clears user data from local storage after sign out
		navigate("/SignIn");
	};

	return (
		<div className="user-frame">
			<div className="logged-in-user">
				<div className="user-information">
					<div className="user-icon">
						<span className="icon-user">◆</span>
					</div>
					<div className="user-info">
						<span className="user-name">{user.name || "Unknown user?"}</span>
						<span className="user-email">{user.email || "No Email?"}</span>
					</div>
				</div>
				<div className="user-actions">
					<button className="edit-user" onClick={() => navigate("/dashboard")}>
						<span className="edit">Edit User</span>
					</button>
					<button className="sign-out" onClick={() => handleSignout()}>
						<span className="signOut">Sign Out</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default LoggedInUserComponent;
