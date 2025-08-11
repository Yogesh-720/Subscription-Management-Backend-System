import mongoose from 'mongoose';
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../config/env.js";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    try {
        await session.withTransaction(async () => {
            const { name, email, password } = req.body;

            const existingUser = await User.findOne({ email }).session(session);
            if (existingUser) {
                const err = new Error('User already exists');
                err.statusCode = 409;
                throw err;
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = await User.create([{ name, email, password: hashedPassword }], { session });
            const created = user[0];

            const token = jwt.sign({ userId: created._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

            const userToSend = created.toObject();
            delete userToSend.password;

            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: { token, user: userToSend }});
        });
    } catch (err) {
        next(err);
    } finally {
        session.endSession();
    }
}

export const signIn = async (req, res, next) => {
    //Implement SignIn Logic Here
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if (!user) {
            const error = new Error('User Not Found');
            error.statusCode = 404;
            throw error;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const error = new Error('Invalid Password');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({userId : user._id}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        const userToSend = user.toObject();
        delete userToSend.password;

        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data: {
                token,
                user: userToSend,
            }
        });

    }
    catch (err) {
        next(err);
    }
}
export const signOut = async (req, res, next) => {
    //Implement SignOut Logic Here

}