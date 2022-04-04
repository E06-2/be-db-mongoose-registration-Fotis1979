const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type:String, required: true} ,
    password: {type:String, required:true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    dateOfBirth: {type:Date, required:true},
    email: {type:String, required: true},
    telephone: String,
    gender: {type:String, enum:["Male", "Female", "Other", "N/A"]}
});
const User = mongoose.model('User', UserSchema);

module.exports = User

