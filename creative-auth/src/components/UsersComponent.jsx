function AllUsersComponent({ name, email }) {
	return (
		<div>
			<div className="other-user">
				<div className="other-user-icon">
					<span className="ou-icon">◆</span>
				</div>
				<div className="other-user-info">
					<span className="ou-name">{name || "Unknown User"}</span>
					<span className="ou-email">{email || "Unknown Email"}</span>
				</div>
				{/* Didn't have time to make this functional :( */}
				{/* <button className="delete-user">Delete User</button> */}
			</div>
		</div>
	);
}

export default AllUsersComponent;
