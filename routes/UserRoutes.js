const express = require('express')
const router = express.Router()
const userController= require('../controllers/UserController')


router.post('/user',userController.addUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.post('/user/login',userController.loginUser)

module.exports = router;
