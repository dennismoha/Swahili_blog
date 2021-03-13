const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true

    },
    imageUrl: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }

})

module.exports = mongoose.model('User', userSchema)