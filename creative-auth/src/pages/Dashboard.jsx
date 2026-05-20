import "./Dashboard.css";
import LoggedInUserComponent from "../components/UserComponent";
import AllUsersComponent from "../components/UsersComponent";

function DashboardPage() {
	return (
		<div className="dashboard-page">
			<LoggedInUserComponent></LoggedInUserComponent>
			<div className="all-users-container">
				<AllUsersComponent></AllUsersComponent>
				<AllUsersComponent></AllUsersComponent>
				<AllUsersComponent></AllUsersComponent>
				<AllUsersComponent></AllUsersComponent>
				<AllUsersComponent></AllUsersComponent>
				<AllUsersComponent></AllUsersComponent>
				<AllUsersComponent></AllUsersComponent>
			</div>
		</div>
	);
}

export default DashboardPage;
