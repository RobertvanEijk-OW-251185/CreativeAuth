const express = require("express");
const router = express.Router();

const User = require("../models/User.js");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//
// REGISTER logic
//

// router.post("/register", async (req, res) => {
// 	try {
// 		const user = new User(req.body);
// 		await user.save();
// 		res.status(201).json({ message: "User registered!", user });
// 	} catch (err) {
// 		res.status(400).json({ error: err.message });
// 	}
// });

// User registration with password hashing...

router.post("/register", async (req, res) => {
	try {
		const { name, email, password } = req.body;
		// Generate Salt
		const salt = await bcrypt.genSalt(10);

		// Hash Password
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create new user
		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword,
		});

		await newUser.save();

		res.json({ message: "User Registered Successfully!!" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//
// LOGIN logic
//

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(404).json({ message: "User not found..." });

		const isMatch = await bcrypt.compare(req.body.password, user.password);
		if (!isMatch) {
			return res.status(401).json({ message: "Wrong password" });
		}

		// jwt here i think...

		const token = jwt.sign(
			{ id: user._id, name: user.name },
			process.env.JWT_SECRET,
			{ expiresIn: "1d" },
		);

		// send token back to frontend

		// old password check, before hashing lol
		// if (user.password !== req.body.password)
		// 	return res.status(401).json({ message: "Wrong password" });

		res
			.status(200)
			.json({
				token,
				message: "Login successful",
				user: { _id: user.id, name: user.name, email: user.email },
			});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Get all Users

router.get("/allUsers", async (req, res) => {
	try {
		const allUsers = await User.find({});
		res.status(200).json(allUsers);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Exports
module.exports = router;

//
// Create New User
//

// router.post("/router", async (req, res) => {
// 	const { name, email, password } = req.body;

// 	try {
// 		const user = new User({ name, email, password });
// 		await user.save();
// 		res.status(201).json(user);
// 	} catch (err) {
// 		res.status(400).json({ err: err.message });
// 	}
// });

// module.exports = router;
