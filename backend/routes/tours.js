import express from 'express'
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js'

const router = express.Router()

// Create new tour
router.post('/', createTour)

// Update tour
router.put('/:id', updateTour)

// Delete tour
router.delete('/:id', deleteTour)

// Get Single tour
router.get('/:id', getSingleTour)

// Get All tours
router.get('/', getAllTour)

// Get Tour by Search
router.get('/search/getTourBySearch', getTourBySearch)

// Geat Featured Tour
router.get('/search/getFeaturedTours', getFeaturedTour)

// Geat Tour Count
router.get('/search/getTourCount', getTourCount)

export default router;