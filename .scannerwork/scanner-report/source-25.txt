const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    NLID: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    contact: Number,
})

const User = mongoose.model("User", userSchema)
module.exports = User