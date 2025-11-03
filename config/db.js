const mongoose = require('mongoose');
const connectDB = async()=>{
     try {
        const connection = await mongoose.connect('mongodb+srv://ContactManagerUser:kUHJsCLWpFNqjHGq@contact-manager-cluster.by9tjl1.mongodb.net/contactmanager-api?appName=Contact-Manager-Cluster');

        console.log(`MongoDB connected ${connection.connection.host}`);
        
        
     } catch (error) {
        console.log(error);
        process.exit(1);
    
     }
};

module.exports = connectDB ;