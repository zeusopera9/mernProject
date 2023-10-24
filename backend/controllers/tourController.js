import Tour from '../models/Tour.js'



// Create new tour
export const createTour = async(req, res) => {

    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()
        
        res.status(200).json({success:true, message:'Successfully Created', 
        data:savedTour})
    } catch(err) {
        res.status(500).json({success:false, message:'Failed to Create. Try again'})
    }
};

// Update tour
export const updateTour = async(req, res) => {
    const id = req.params.id

    try {

        const updatedTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        }, {new:true})

        res.status(200).json({success:true, message:'Successfully Updated', 
        data:updateTour})

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to Update'})
    }
    
};

// Delete tour
export const deleteTour = async(req, res) => {
    const id = req.params.id

    try {

        await Tour.findByIdAndDelete(id)

        res.status(200).json({success:true, message:'Successfully Deleted'})

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to Delete'})
    }
    
};

// getSingle tour
export const getSingleTour = async(req, res) => {
    try {

    } catch(err) {}
};

// getAll tour
export const getAllTour = async(req, res) => {
    try {

    } catch(err) {}
};
