const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    avl:{
        type:String,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('Book',bookSchema)