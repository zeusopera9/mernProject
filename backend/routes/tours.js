import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../controllers/tourController.js'

const router = express.Router()

// Create new tour
router.post('/', createTour)

// Update tour
router.put('/:id', updateTour)

// Delete tour
router.delete('/:id', deleteTour)

// Get Single tour
router.get('/:id', getSingleTour)

// Get All tour
router.get('/:id', getAllTour)

export default router;