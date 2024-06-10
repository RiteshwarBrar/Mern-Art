const express = require('express');

const router = express.Router();
//GET all paintings
router.get('/', (req, res) => {
    res.json({ message: "Get all paintings"});
    });

//GET a painting by id
router.get('/:id', (req, res) => {
    res.json({ message: "Get a single painting for id " + req.params.id});
    });

//POST a new painting
router.post('/', (req, res) => {
    res.json({ message: "Create a new painting"});
    });

//DELETE a painting by id
router.delete('/:id', (req, res) => {
    res.json({ message: "Delete a painting for id " + req.params.id});
    });
    
//PATCH update a painting by id --might not be used--
router.patch('/:id', (req, res) => {
    res.json({ message: "Update a painting for id " + req.params.id});
    });

module.exports = router;