const express = require("express");
const router = express.Router();

const User = require("../models/User.js");

//
// REGISTER logic
//

router.post("/register", async (req, res) => {
	const user = new User(req.body);
	await user.save();
	res.send("User registered!");
});

//
// LOGIN logic
//

router.post("/login", async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.send("User not found...");

	if (user.password !== req.body.password) return res.send("Wrong password");

	res.send("Login successful");
});

// Exports
module.exports = router;

//
// Create New User
//

router.post("/router", async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const user = new User({ name, email, password });
		await user.save();
		res.status(201).json(user);
	} catch (err) {
		res.status(400).json({ err: err.message });
	}
});

module.exports = router;
