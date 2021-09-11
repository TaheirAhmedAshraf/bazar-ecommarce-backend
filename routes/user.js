const express = require('express')
const userSchema = require('../models/user-schema')
const router = express()

router.post('/', async (req, res) => {
    const { email, id, fullName } = req.body
    try {
        const newUser = new userSchema(
            {
                _id: id,
                full_name: fullName,
                email: email,
            })
        newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router