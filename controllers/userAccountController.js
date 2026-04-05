import Signup from "../models/userAccount.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Something is missing", success: false });
        }

        const existingUser = await Signup.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exist with this email.", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await Signup.create({ name, email, password: hashedPassword });

        return res.status(201).json({ message: "Account created successfully.", success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;  // removed 'role' unless your model has it

        if (!email || !password) {
            return res.status(400).json({ message: "Something is missing", success: false });
        }

        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password.", success: false });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Incorrect email or password.", success: false });
        }

        

        const tokenData = { userId: user._id };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '90d' });

        const safeUser = {
            _id: user._id,
            name: user.name,
            email: user.email,
        };

        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,      
                sameSite: 'strict',
            })
            .json({ message: `Welcome back ${safeUser.name}`, user: safeUser, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const logout = async (req, res) => {
    try {
        return res
            .status(200)
            .cookie("token", "", { maxAge: 0, httpOnly: true, expires: new Date(0) })
            .json({ message: "Logged out successfully.", success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};