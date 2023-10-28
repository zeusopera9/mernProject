import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router()



// Update User
router.put('/:id', verifyUser, updateUser)

// Delete User
router.delete('/:id', verifyUser, deleteUser)

// Get Single User
router.get('/:id', verifyUser, getSingleUser)

// Get All User
router.get('/', verifyAdmin, getAllUser)

export default router