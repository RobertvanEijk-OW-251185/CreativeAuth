import "./Dashboard.css";
import LoggedInUserComponent from "../components/UserComponent";
import AllUsersComponent from "../components/UsersComponent";

import { useState, useEffect } from "react";
import { getAllUsers } from "../api";

function DashboardPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const res = await getAllUsers();
				setUsers(res.data); // saves user in an array of data
			} catch (err) {
				console.error("Failed to load Users:", err);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div className="dashboard-page">
			<LoggedInUserComponent></LoggedInUserComponent>
			<div className="all-users-container">
				{users.map((user) => (
					<AllUsersComponent
						key={user._id}
						name={user.name}
						email={user.email}></AllUsersComponent>
				))}
			</div>
		</div>
	);
}

export default DashboardPage;
