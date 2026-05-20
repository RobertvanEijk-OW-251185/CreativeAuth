// import css
import "./SignIn.css";

// import Components
import LoginSignupToggler from "../components/LogInSignUpToggle";
// import PasswordPicker from "../components/PasswordPicker";
import PasswordPicker from "../components/PasswordPicker";

// import browser router
import { Link, useNavigate } from "react-router-dom";

// Import useState
import { useState } from "react";

// import API login thing
import { loginUser } from "../api";

function SignIn() {
	// State variables for signing in:
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState([]);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const navigate = useNavigate();

	// handleSubmit function
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			const res = await loginUser({
				name: name,
				email: email,
				password: password.join(""),
			});

			console.log("Full response:", res.data);

			localStorage.setItem("user", JSON.stringify(res.data.user)); // sends signed in user's info to localStorage for later use
			console.log("Logged in:", res.data.message);
			setSuccess("Login was successful!! :)");
			navigate("/dashboard");
		} catch (err) {
			setError(err?.response?.data?.message || "Login Failed... :(");
		}
	};

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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="you@example.com"
						className="email-input"></input>
				</div>
				<PasswordPicker onPasswordChange={setPassword}></PasswordPicker>

				{/* Login success message?? */}
				{error && (
					<span className="extra-info" style={{ color: "red" }}>
						{error}
					</span>
				)}
				{success && (
					<span className="extra-info" style={{ color: "green" }}>
						{success}
					</span>
				)}

				{/* <Link to="../Dashboard">
					<button className="signIn" onClick={handleSubmit}>
						Sign In
					</button>
				</Link> */}
				<button className="signIn" onClick={handleSubmit}>
					Sign In
				</button>
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
