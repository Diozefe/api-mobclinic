const UserModel = require('../../models/schema/user')
const router = require('express').Router()
const userModel = require('../../models/UserModel')

router.post('/register',async (req, res)=>{
    try {
        const resultado = await userModel.criar(req.body)
        return res.status(201).json(resultado);
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
