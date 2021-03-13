const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title:{type:String},
    content:{type:String,required:true},
    imageUrl:{type:String}   
});

module.exports = mongoose.model('category',categorySchema)