const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.mongodb.net/DATABASE_NAME')      
    .then(() => {
        console.log('Mongoose connected');
    })
    .catch((e) => {
        console.log('Connection failed: ', e.message);
    });

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const LogInCollection = mongoose.model('data', logInSchema);
module.exports = LogInCollection;
