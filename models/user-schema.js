const mongoose = require('mongoose')

const user = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    full_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: [true, "Email Address Required",],
    },
})

const UserSchema = mongoose.model("users", user)

module.exports = UserSchema;