const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        fullName: {
            type: String,
        },
        phone: {
            type: Number,
            unique: true,
        },
        address: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        photo: {
            type:String,
        }
},
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)