// import css
import "./SignIn.css";

// import Components
import LoginSignupToggler from "../components/LogInSignUpToggle";
import PasswordPicker from "../components/PasswordPicker";

// import browser router
import { BrowserRouter, Link } from "react-router-dom";

// Import useState
import { useState } from "React";

function SignIn() {
	return (
		<div className="formContainer">
			<div className="headingLine">
				<h1 className="emblem">◆</h1>
				<h1>InsertWebsiteName</h1>
			</div>
			<LoginSignupToggler></LoginSignupToggler>
			<div className="greeting">
				<span className="welcome-message">Welcome back</span>
				<span className="extra-info">Sign in with your colour sequence.</span>
			</div>
			<div className="signin-form">
				<div className="field">
					<span className="email-label">Email</span>
					<input
						type="text"
						placeholder="you@example.com"
						className="email-input"></input>
				</div>
				<PasswordPicker />
				<button className="signIn">Sign In</button>
			</div>
			<div className="new-user-option">
				<span className="new-user-prompt">New Here?</span>
				<Link to="../SignUp">
					<button className="new">Create an Account</button>
				</Link>
			</div>
		</div>
	);
}
export default SignIn;
