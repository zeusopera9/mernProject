import Booking from '../models/Booking.js'

// Create new Booking
export const createBooking = async(req, res) => {
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()

        res.status(200).json({success: true, message:'Tour Has been Booked!', 
        data: savedBooking})

    } catch(err) {
        res.status(500).json({success: false, message:'Booking Failed'})
    }
}

// Get Single Booking
export const getBooking = async(req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)
        res.status(200).json({success: true, message:'Successful', 
        data: book})
    } catch(err) {
        res.status(404).json({success: false, message:'Booking not Found'})
    }
}

// Get All Booking
export const getAllBooking = async(req, res) => {


    try {
        const books = await Booking.find()
        res.status(200).json({success: true, message:'Successful', 
        data: books})
    } catch(err) {
        res.status(500).json({success: false, message:'Internal Server Error'})
    }
}