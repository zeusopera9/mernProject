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
    const id = req.params.id

    try {

        const tour = await Tour.findById(id).populate('reviews')

        res.status(200).json({success:true, message:'Successful', data:tour})
    } catch(err) {
        res.status(404).json({success:false, message:'Not Found'})
    }
};

// getAll tour
export const getAllTour = async(req, res) => {

    // For Pagination
    const page = parseInt(req.query.page)

    try {

        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);
        res.status(200).json({success:true, count:tours.length, message:'Successful', data:tours})

    } catch(err) {
        res.status(404).json({success:false, message:'Not Found'})
    }
};

// Get Tour by Search
export const getTourBySearch = async(req, res) => {

    // Here 'i' means case sensitive
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)   
    
    try {

        // gte means greater than equal
        const tours = await Tour.find({ city, distance:{$gte: distance}, 
        maxGroupSize:{$gte:maxGroupSize} })

        res.status(200).json({success:true, message:'Successful', data:tours})

    } catch(err) {
        res.status(404).json({success:false, message:'Not Found'})
    }
};

// get Featured tour
export const getFeaturedTour = async(req, res) => {

    // For Pagination
    const page = parseInt(req.query.page)

    try {

        const tours = await Tour.find({featured:true}).populate('reviews').limit(8);
        res.status(200).json({success:true, message:'Successful', data:tours})

    } catch(err) {
        res.status(404).json({success:false, message:'Not Found'})
    }
};

// Get Tour Counts
export const getTourCount = async(req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({success:true, data:tourCount})
    } catch(err) {
        res.status(500).json({success:false, message: 'Failed to Fetch'})
    }
}
