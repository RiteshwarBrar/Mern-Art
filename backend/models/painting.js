const mongoose = require('mongoose');

const Schema = new mongoose.Schema

const paintingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Painting', paintingSchema);