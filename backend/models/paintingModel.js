const mongoose = require('mongoose');

//const Schema = new mongoose.Schema --redundant code--

const paintingSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Painting', paintingSchema);