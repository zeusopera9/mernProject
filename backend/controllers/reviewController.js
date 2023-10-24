import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReview = async(req, res) => {

    const tourId = req.params.tourId
    const newReview = new Review({...req.body})

    try {

        const savedReview = await newReview.save()

        // After Creating a review, now update the reviews array of the tour
        await Tour.findByIdAndUpdate(tourId, {
            $push: {reviews: savedReview._id}
        })

        res.status(200).json({success: true, message: 'Review Added', data: savedReview})

    } catch(err) {
        res.status(50).json({success: false, message: 'Failed to submit'})

    }
}