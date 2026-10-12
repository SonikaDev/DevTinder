const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://sonikabharti60_db_user:sWbq6hnMTvc2YHpq@learnnodejs.ttzotyr.mongodb.net/devTinder';

    try {
        const connection = await mongoose.connect(mongoUri);
        console.log(`Database connection established... ${connection.connection.host}`);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
