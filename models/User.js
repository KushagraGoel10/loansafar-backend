const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
   
    selectedAmount: String,
    name: String,
    phoneNumber:String,
    email: String, 
    panCard: String
})

const UserModel = mongoose.model("users" , UserSchema)
module.exports = UserModel

