const router = require('express').Router()
const loginController = require('../controllers/login/index')
const userController = require('../controllers/user/user')
router.use('/login', loginController)
router.use('/user', userController)

module.exports = router;