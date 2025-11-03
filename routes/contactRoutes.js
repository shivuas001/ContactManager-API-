const express = require('express');
const router = express.Router();

// Display all contacts
router.get('/', (req, res)=>{
    res.json({message:"this is for showing all contacts"})
});

//Display Single contacts
router.get('/:id', (req, res)=>{
    res.json({message:"this is for showing Single contacts"})
});

//Creating contacts
router.post('/', (req, res)=>{
    res.json({message:"this is for Creating contacts"})
});

//Updating contacts
router.put('/:id', (req, res)=>{
    res.json({message:"this is for Updating contacts"})
});

//Deleting contacts
router.delete('/:id', (req, res)=>{
    res.json({message:"this is for Deleting contacts"})
});


module.exports = router