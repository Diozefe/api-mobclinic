const router = require('express').Router()
const userModel = require('../../models/UserModel')
router.post('/',async (req, res)=>{
    try {
       const user = await userModel.buscar(req.body)
       return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json(error)
    }
})


module.exports = router