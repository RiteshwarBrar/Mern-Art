const express = require('express');
const Painting = require('../models/paintingModel');
const router = express.Router();
const mongoose = require('mongoose');
//GET all paintings     //////////////////////////////////////////
router.get('/', async(req, res) => {
    const paintings = await Painting.find({}).sort({createdAt: -1});
    res.status(200).json(paintings);
    });

//GET a painting by id ///////////////////////////////////////////
router.get('/:id', async(req, res) => {
    const { id } = req.params;

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No painting with id: ${id}`);
    }
    //find painting by id
    const painting = await Painting.findById(id);
    if(!painting) {
        return res.status(404).json({ message: "Painting not found"});
    }
    res.status(200).json(painting);
    });

//POST a new painting   //////////////////////////////////////////
router.post('/', async(req, res) => {
    const { title, date, description, image } = req.body;
    try{
        const painting = await Painting.create({ title, date, description, image })
        res.status(200).json(painting);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
    });

//DELETE a painting by id /////////////////////////////////////////
router.delete('/:id', async(req, res) => {
    const { id } = req.params;

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No painting with id: ${id}`);
    }
    //find and delete painting by id
    const painting = await Painting.findOneAndDelete({_id: id});
    if(!painting) {
        return res.status(400).json({ message: "Painting not found"});
    }
    res.status(200).json(painting);
    });
    
//PATCH update a painting by id --might not be used-- /////////////
router.patch('/:id', async(req, res) => {
    const { id } = req.params;

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No painting with id: ${id}`);
    }
    //find and update painting by id
    const painting = await Painting.findOneAndUpdate({_id: id},{
        ...req.body
    });   

    if(!painting) {
        return res.status(400).json({ message: "Painting not found"});
    }
    res.status(200).json(painting);
    });

module.exports = router;