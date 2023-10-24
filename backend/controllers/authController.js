import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// User Registration
export const register = async(req, res) => {
    try {

        // Hashing the Password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save()
        res.status(200).json({success:true, message:'Successfully Registered'})

    } catch(err) {
        res.status(500).json({success:false, message:'Registration Failed'})
        console.log(err)
    }
};

// User Login
export const login = async(req, res) => {

    const email = req.body.email
    
    try {

        const user = await User.findOne({email})
        // If user does not exist
        if(!user) {
            return res.status(404).json({success:false, message:'User not found'})
        }

        // If user exists then check the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        // If Password is incorrect
        if(!checkCorrectPassword) {
            return res.status(401).json({success:false, message:'Incorrect email or Password'})
        }

        const {password, role, ...rest} = user._doc

        // Create JWT
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET_KEY,
            {expiresIn: "15d"})

        // Set token in the browser cookies and send the response to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({token, data:{...rest}, role})

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to Login'})
    }
};
