import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
	try {
		const { fullName, username, email, password } = req.body;
		console.log("Received email:", email);

		if (!email || typeof email !== "string") {
			return res.status(400).json({ error: "Email is required and must be a string" });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ error: "Invalid email format" });
		}

		// Optimize DB Query: Check if email or username exists in one call
		const existingUser = await User.findOne({ $or: [{ username }, { email }] });
		if (existingUser) {
			if (existingUser.username === username) {
				return res.status(400).json({ error: "Username is already taken" });
			}
			if (existingUser.email === email) {
				return res.status(400).json({ error: "Email is already taken" });
			}
		}

		if (password.length < 6) {
			return res.status(400).json({ error: "Password must be at least 6 characters long" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({ fullName, username, email, password: hashedPassword });

		await newUser.save();
		if (!newUser._id) {
			return res.status(400).json({ error: "User registration failed" });
		}

		generateTokenAndSetCookie(newUser._id, res);
		res.status(201).json({
			_id: newUser._id,
			fullName: newUser.fullName,
			username: newUser.username,
			email: newUser.email,
			followers: newUser.followers,
			following: newUser.following,
			profileImg: newUser.profileImg,
			coverImg: newUser.coverImg,
		});
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			email: user.email,
			followers: user.followers,
			following: user.following,
			profileImg: user.profileImg,
			coverImg: user.coverImg,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = async (req, res) => {
	try {
		res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
