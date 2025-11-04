const express = require('express');
const router = express.Router();

const Contact = require('../models/contactModel');


// Display all contacts
router.get('/', async(req, res)=>{
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (error) {
        console.log(error);
        
    }
});

//Display Single contacts
router.get('/:id', async(req, res)=>{
    try {
        const contact = await Contact.findById(req.params.id);
        res.json(contact);
    } catch (error) {
        console.log(error);
        
    }
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