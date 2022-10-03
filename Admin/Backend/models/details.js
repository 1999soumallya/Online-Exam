const mongoose = require('mongoose');
const {Schema} = mongoose;

const detailSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    photo:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    },
    university:{
        type:String,
        required: true
    },
    designation:{
        type:String,
        required: true
    },
    idname:{
        type:String,
        required: true
    },
    photoName:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: "pending"
    }
})

const details = mongoose.model('admindetails',detailSchema)

module.exports = details;