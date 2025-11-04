const express = require('express');
const router = express.Router();

const Contact = require('../models/contactModel');


// Display all contacts
router.get('/', (req, res)=>{
    res.json({message:"this is for showing all contacts"})
});

//Display Single contacts
router.get('/:id', (req, res)=>{
    res.json({message:"this is for showing Single contacts"})
});

//Creating contacts
router.post('/', async(req, res)=>{
    console.log(req.body);

    const { name, phone, email, address } = req.body ;

    try {
        const contact = await Contact.create({ name, phone, email, address });
        res.json(contact);
    } catch (error) {
        console.log(error);
    }
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