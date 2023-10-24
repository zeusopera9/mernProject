import User from '../models/User.js'



// Create new User
export const createUser = async(req, res) => {

    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        
        res.status(200).json({success:true, message:'Successfully Created', 
        data:savedUser})
    } catch(err) {
        res.status(500).json({success:false, message:'Failed to Create. Try again'})
    }
};

// Update User
export const updateUser = async(req, res) => {
    const id = req.params.id

    try {

        const updatedUser = await User.findByIdAndUpdate(id,{
            $set: req.body
        }, {new:true})

        res.status(200).json({success:true, message:'Successfully Updated', 
        data:updateUser})

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to Update'})
    }
    
};

// Delete User
export const deleteUser = async(req, res) => {
    const id = req.params.id

    try {

        await User.findByIdAndDelete(id)

        res.status(200).json({success:true, message:'Successfully Deleted'})

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to Delete'})
    }
    
};

// getSingle User
export const getSingleUser = async(req, res) => {
    const id = req.params.id

    try {

        const user = await User.findById(id)

        res.status(200).json({success:true, message:'Successful', data:user})
    } catch(err) {
        res.status(404).json({success:false, message:'Not Found'})
    }
};

// getAll User
export const getAllUser = async(req, res) => {

    try {

        const users = await User.find({});
        res.status(200).json({success:true, message:'Successful', data:users})

    } catch(err) {
        res.status(404).json({success:false, message:'Not Found'})
    }
};