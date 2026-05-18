import "./LogInSignUpToggle.css";
import { NavLink } from "react-router-dom";

function LoginSignupToggler() {
	return (
		<div className="signInSignUpToggle">
			<NavLink
				to="/signin"
				className={({ isActive }) =>
					isActive ? "signInToggle active" : "signInToggle"
				}>
				Sign In
			</NavLink>
			<NavLink
				to="/signup"
				className={({ isActive }) =>
					isActive ? "signUpToggle active" : "signUpToggle"
				}>
				Sign Up
			</NavLink>
		</div>
	);
}

export default LoginSignupToggler;
