import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'
const router = express.Router()

// Update User
router.put('/:id', updateUser)

// Delete User
router.delete('/:id', deleteUser)

// Get Single User
router.get('/:id', getSingleUser)

// Get All User
router.get('/', getAllUser)

export default router