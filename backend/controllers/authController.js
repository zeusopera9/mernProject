import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// User Registration
export const register = async(req, res) => {
    try {

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo
        })

        await newUser.save()
        req.status(200).json({success:true, message:'Successfully Registered'})

    } catch(err) {
        req.status(500).json({success:false, message:'Registration Failed'})
    }
};

// User Login
export const login = async(req, res) => {
    try {

    } catch(err) {}
};
