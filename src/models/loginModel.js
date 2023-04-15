const mongoose = require("mongoose")
const {Schema} = mongoose

const loginModel = new Schema({
    usuario: {
        type: String,
        unique: true,
        required: true
    },
    senha:{type: String, required:true, select:false}
})

module.exports = mongoose.model('login',loginModel)