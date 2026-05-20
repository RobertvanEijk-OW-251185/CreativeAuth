import "./SignUp.css";

import LoginSignupToggler from "../components/LogInSignUpToggle";
import PasswordPicker from "../components/PasswordPicker";

import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { registerUser } from "../api";

function SignUp() {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState([]);
	const [confirmPassword, setConfirmPassword] = useState([]);
	// const [samePassword, setSamePassword] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const navigate = useNavigate();

	//
	//

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		if (password.join(",") !== confirmPassword.join(",")) {
			setError(" Passwords do not match!! :( ");
			return;
		} else {
			setSuccess(" Passwords Match!! :) ");
			// return;
		}

		try {
			const res = await registerUser({
				name: fullname,
				email: email,
				password: password.join(""), // this converts the password's array into a string for MongoDB
			});

			console.log("Registered:", res?.data.message);
			setSuccess("Account Created!! :)");
			console.log(success);
			navigate("/SignIn");
		} catch (err) {
			// console.error(err.response.data);
			setError(
				err?.response?.data?.error || err?.message || "Registration Failed :(",
			);
		}
	};

	// const register = () => {
	// 	const [formData, setFormData] = useState({
	// 		name: "",
	// 		email: "",
	// 		password: "",
	// 	});
	// };

	// const handleChange = () => {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };

	return (
		<div className="formContainer">
			<div className="headingLine">
				<h1 className="emblem">◆</h1>
				<h1>InsertWebsiteName</h1>
			</div>
			<LoginSignupToggler></LoginSignupToggler>
			<div className="greeting">
				<span className="welcome-message">Create Your Account</span>
				<span className="extra-info">
					Pick 8 colours in a secret order — that's your password.
				</span>
			</div>
			<div className="signup-form">
				<div className="field">
					<span className="fullname-label">Full Name</span>
					<input
						value={fullname}
						onChange={(e) => setFullname(e.target.value)}
						type="text"
						placeholder="John Doe"
						className="fullname-input"></input>
				</div>
				<div className="field">
					<span className="email-label">Email</span>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						placeholder="you@example.com"
						className="email-input"></input>
				</div>
				<PasswordPicker key="password" onPasswordChange={setPassword} />
				<PasswordPicker
					key="confirmPassword"
					onPasswordChange={setConfirmPassword}
				/>

				{/* Maybe Error here??????? */}
				{error && (
					<span className="extra-info" style={{ color: "red" }}>
						{error}
					</span>
				)}

				<button className="signUp" onClick={handleSubmit}>
					Sign Up
				</button>
			</div>
			<div className="new-user-option">
				<span className="new-user-prompt">Already a Member?</span>
				<Link to="../SignIn">
					<button className="new">Sign in</button>
				</Link>
			</div>
		</div>
	);
}

// function SignUp() {
// 	// const [fullname, setFullname] = useState("");
// 	// const [email, setEmail] = useState("");

// 	// console.log(fullname);
// 	// console.log(email);
// 	// console.log(password);

// 	// const [password, setPassword] = useState([]);
// 	// const [confirmPassword, setConfirmPassword] = useState([]);

// 	// console.log("password:", password);
// 	// console.log("confirmPassword:", confirmPassword);

// 	const register = () => {
// 		const [formData, setFormData] = useState({
// 			name: "",
// 			email: "",
// 			password: "",
// 		});
// 	};

// 	const handleChange = () => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const [fullname, setFullname] = useState("");
// 	const [email, setEmail] = useState("");

// 	const [password, setPassword] = useState([]);
// 	const [confirmPassword, setConfirmPassword] = useState([]);

// 	const [samePassword, setSamePassword] = useState(false);

// 	// const handleSubmit = () => {
// 	// 	if (password.join(",") === confirmPassword.join(",")) {
// 	// 		setSamePassword(true);
// 	// 	} else {
// 	// 		setSamePassword(false);
// 	// 	}

// 	// 	console.log("Name:", fullname);
// 	// 	console.log("Email:", email);
// 	// 	console.log("Password:", password);
// 	// 	console.log("Confirm Password:", confirmPassword);
// 	// 	console.log("Is Password Same:", samePassword);
// 	// };

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const res = await registerUser(formData);
// 			console.log("Registered:", res.data);
// 			// redirect or show success message here

// 			// console checks
// 			// console.log("Name:", fullname);
// 			// console.log("Email:", email);
// 			// console.log("Password:", password);
// 			// console.log("Confirm Password:", confirmPassword);
// 			// console.log("Is Password Same:", samePassword);

// 			if (password.join(",") === confirmPassword.join(",")) {
// 				setSamePassword(true);
// 			} else {
// 				setSamePassword(false);
// 			}
// 		} catch (err) {
// 			console.error(err.response.data);
// 		}
// 	};

// 	return (
// 		<div className="formContainer">
// 			<div className="headingLine">
// 				<h1 className="emblem">◆</h1>
// 				<h1>InsertWebsiteName</h1>
// 			</div>
// 			<LoginSignupToggler></LoginSignupToggler>
// 			<div className="greeting">
// 				<span className="welcome-message">Create Your Account</span>
// 				<span className="extra-info">
// 					Pick 8 colours in a secret order — that's your password.
// 				</span>
// 			</div>
// 			<div className="signup-form">
// 				<div className="field">
// 					<span className="fullname-label">Full Name</span>
// 					<input
// 						value={fullname}
// 						onChange={(e) => setFullname(e.target.value)}
// 						type="text"
// 						placeholder="John Doe"
// 						className="fullname-input"></input>
// 				</div>
// 				<div className="field">
// 					<span className="email-label">Email</span>
// 					<input
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 						type="text"
// 						placeholder="you@example.com"
// 						className="email-input"></input>
// 				</div>
// 				<PasswordPicker key="password" onPasswordChange={setPassword} />
// 				<PasswordPicker
// 					key="confirmPassword"
// 					onPasswordChange={setConfirmPassword}
// 				/>
// 				<button className="signUp" onClick={handleSubmit}>
// 					Sign Up
// 				</button>
// 			</div>
// 			<div className="new-user-option">
// 				<span className="new-user-prompt">Already a Member?</span>
// 				<Link to="../SignIn">
// 					<button className="new">Sign in</button>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

export default SignUp;
