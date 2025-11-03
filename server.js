const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.json({message:"contact manager api is running"});
});

// Display all contacts
app.get('/contacts', (req, res)=>{
    res.json({message:"this is for showing all contacts"})
});

//Display Single contacts
app.get('/contacts/:id', (req, res)=>{
    res.json({message:"this is for showing Single contacts"})
});

//Creating contacts
app.post('/contacts', (req, res)=>{
    res.json({message:"this is for Creating contacts"})
});

//Updating contacts
app.put('/contacts/:id', (req, res)=>{
    res.json({message:"this is for Updating contacts"})
});

//Deleting contacts
app.delete('/contacts/:id', (req, res)=>{
    res.json({message:"this is for Deleting contacts"})
});


app.listen(5000,(req, res)=>{
    console.log('server is running in 5000 port');
});