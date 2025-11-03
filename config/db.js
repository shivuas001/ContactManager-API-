const mongoose = require('mongoose');
const connectDB = async()=>{
     try {
        const connection = await mongoose.connect('');

        console.log('MongoDB connected');
        
        
     } catch (error) {
        console.log(error);
        process.exit(1);
    
     }
}