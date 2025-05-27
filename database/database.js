const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb+srv://atuligorgodze27:ICAm5liLGxzFH7iP@cluster0.2cggndi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = { connectDatabase };