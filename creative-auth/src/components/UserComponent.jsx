import "../pages/Dashboard.css";

import { Link, useNavigate } from "react-router-dom";

function LoggedInUserComponent() {
	const navigate = useNavigate();

	return (
		<div className="user-frame">
			<div className="logged-in-user">
				<div className="user-information">
					<div className="user-icon">
						<span className="icon-user">◆</span>
					</div>
					<div className="user-info">
						<span className="user-name">User Name</span>
						<span className="user-email">User Email</span>
					</div>
				</div>
				<div className="user-actions">
						<button className="edit-user" onClick={() => navigate('/dashboard')}>
							<span className="edit">Edit User</span>
						</button>
						<button className="sign-out" onClick={() => navigate('/signup')}>
							<span className="signOut">Sign Out</span>
						</button>
				</div>
			</div>
		</div>
	);
}

export default LoggedInUserComponent;
