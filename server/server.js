const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Initialise Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
	res.send("Hello World");
});

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDB connected");
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => console.error(err));

const authRoutes = require("./routes/auth");

app.use("/", authRoutes);
