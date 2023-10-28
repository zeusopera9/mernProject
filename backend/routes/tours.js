import express from 'express'
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router()

// Create new tour
router.post('/', verifyAdmin, createTour)

// Update tour
router.put('/:id', verifyAdmin, updateTour)

// Delete tour
router.delete('/:id', verifyAdmin, deleteTour)

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