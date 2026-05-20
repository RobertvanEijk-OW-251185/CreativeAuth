const express = require("express");
const router = express.Router();

const User = require("../models/User.js");

//
// REGISTER logic
//

router.post("/register", async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		res.status(201).json({ message: "User registered!", user });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

//
// LOGIN logic
//

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(404).json({ message: "User not found..." });

		if (user.password !== req.body.password)
			return res.status(401).json({ message: "Wrong password" });

		res.status(200).json({ message: "Login successful", user });
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
