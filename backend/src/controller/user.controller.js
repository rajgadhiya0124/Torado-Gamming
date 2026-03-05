import bcrypt from "bcrypt"
import { UserModel } from "../model/user.model.js";
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    try {
        const { first_name, last_name, username, email, password,confirm_password } = req.body;
        const createdBy = req.user ? req.user.id : 1;

        if (!first_name || !last_name || !username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingUser = await UserModel.FindUserByEmail(email);
        if(existingUser.length > 0){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        if (password !== confirm_password) {
            return res.status(400).json({
                success: false,
                message: "Passwords and ConformPassword not match"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.RegiserUser({
            first_name,
            last_name,
            username,
            email,
            password: hashedPassword,
            createdBy
        });

        res.status(201).json({
            success: true,
            message: "Registered Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//login user by email or username
export const loginUser = async (req, res) => {
    try {
        const { login, password } = req.body;  //in login username or email comes

        if (!login || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required"
            });
        }

        const user = await UserModel.loginUser(login);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Email or UserName not Exist"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {id: user.id ,role: user.role},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        );

        res.cookie("token", token,{
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token : token,
            data: {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//delete user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedBy = req.user ? req.user.id : 1;

        await UserModel.deleteUser({id, updatedBy});

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (error) {
        console.error("Delete User Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};