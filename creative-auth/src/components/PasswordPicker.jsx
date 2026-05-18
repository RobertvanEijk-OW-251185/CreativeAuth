// import styling
import "./PasswordPicker.css";

// Import React Stuff
import { useState } from "React";

const COLOURS = [
	{ id: "purple", className: "colour c-purple" },
	{ id: "pink", className: "colour c-pink" },
	{ id: "blue", className: "colour c-blue" },
	{ id: "orange", className: "colour c-orange" },
];

const MAX = 8;

function PasswordPicker({ onPasswordChange }) {
	const [password, setPassword] = useState([]);

	const updatePassword = (newPassword) => {
		setPassword(newPassword);
		onPasswordChange(newPassword);
	};

	// const handleColourPick = (colourID) => {
	// 	if (password.length >= MAX) return;
	// 	setPassword([...password, colourID]);
	// };

	const handleColourPick = (colourID) => {
		if (password.length >= MAX) return;
		updatePassword([...password, colourID]);
	};

	// const handleUndo = () => setPassword(password.slice(0, -1));
	// const handleClear = () => setPassword([]);

	const handleUndo = () => updatePassword(password.slice(0, -1));
	const handleClear = () => updatePassword([]);

	// On Password Change

	return (
		<div className="password-picker">
			<div className="password-label">
				<h3>Password</h3>
				<div className="character-count">
					<h3>
						{password.length} / {MAX}
					</h3>
					{/* <h3>eye</h3> */}
				</div>
			</div>
			<div className="colours">
				{COLOURS.map((c) => (
					<button
						key={c.id}
						className={c.className}
						onClick={() => handleColourPick(c.id)}
						disabled={password.length >= MAX}></button>
				))}
				{/* <button className="colour c-purple"></button>
				<button className="colour c-pink"></button>
				<button className="colour c-blue"></button>
				<button className="colour c-orange"></button> */}
			</div>
			<div className="password-display">
				{Array.from({ length: MAX }, (_, i) => (
					<div
						key={i}
						className={`colour-input${i === password.length ? " active" : ""}`}
						data-colour={password[i] ?? ""}></div>
				))}
				{/* <div className="colour-input active"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div> */}
			</div>
			<div className="info-actions">
				<p>Pick 8 colors in your secret order</p>
				<div className="password-actions">
					<button
						className="undo"
						onClick={handleUndo}
						disabled={password.length === 0}>
						<span className="undo-text">Undo</span>
					</button>
					<button className="clear" onClick={handleClear}>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
}

export default PasswordPicker;
