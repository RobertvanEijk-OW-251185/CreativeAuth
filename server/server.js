const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Load environment variables form .env file:
require("dotenv").config();

// Initialises the Express App
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to Parse JSON bodies
app.use(cors());
app.use(express.json());

// MongoDB connection
app.get("/", (req, res) => {
	res.send("API is running");
});

// // Connect MongoDB
// mongoose
// 	.connect(process.env.MONGO_URI, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log("MongoDB connected!!"))
// 	.catch((err) => console.log(err));

// bcrypt and salt
const bcrypt = require("bcrypt");
const User = require("./models/User");

// Connect MongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err));

// User Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// mongoose
// 	.connect(process.env.MONGO_URI)
// 	.then(() => {
// 		console.log("MongoDB Connected");
// 		app.listen(PORT, () => {
// 			console.log(`Server running on port ${PORT}`);
// 		});
// 	})
// 	.catch((err) => console.log(err));

// Connect MongoDB port 5000
// mongoose
// 	.connect(process.env.MONGO_URI)
// 	.then(() => {
// 		console.log("MongoDB Connected");
// 		app.listen(5000, () => {
// 			console.log("Server running on port 5000");
// 		});
// 	})
// 	.catch((err) => console.log(err));

// app.listen(5000, () => {
// 	console.log("Server running on port 5000");
// });

// Connect MongoDB port 5001
// mongoose
// 	.connect(process.env.MONGO_URI)
// 	.then(() => {
// 		console.log("MongoDB Connected");
// 		app.listen(5001, () => {
// 			console.log("Server running on port 5001");
// 		});
// 	})
// 	.catch((err) => console.log(err));

// app.listen(5001, () => {
// 	console.log("Server running on port 5001");
// });

const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);
