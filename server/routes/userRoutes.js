// Create Routes
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// I did this in the wring file i think... whoops

// User registration with password hashing...

// router.post("/register", async (req, res) => {
// 	try {
// 		const { name, email, password } = req.body;
// 		// Generate Salt
// 		const salt = await bcrypt.genSalt(10);

// 		// Hash Password
// 		const hashedPassword = await bcrypt.hash(password, salt);

// 		// Create new user
// 		const newUser = new User({
// 			name: req.body.name,
// 			email: req.body.email,
// 			password: hashedPassword,
// 		});

// 		await newUser.save();

// 		res.json({ message: "User Registered Successfully!!" });
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// });

// Create a new User
// router.post("/register", async (req, res) => {
// 	const { name, email, password } = req.body;

// 	try {
// 		const user = new User({ name, email, password });
// 		await user.save();
// 		res.status(201).json(user);
// 	} catch (err) {
// 		res.status(400).json({ error: err.message });
// 	}
// });

// Create Routes CTD
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
