const mongoose = require("mongoose");

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
