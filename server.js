const express = require('express');
const app = express();
const contacts = require('./routes/contactRoutes')

app.get('/', (req, res)=>{
    res.json({message:"contact manager api is running"});
});

app.use('/contacts', contacts);

app.listen(5000,(req, res)=>{
    console.log('server is running in 5000 port');
});