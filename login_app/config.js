const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/dronelog", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.error("Database connection error:", err);
});

// Define the schema
const Loginschema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

// Create the model
const User = mongoose.model("User", Loginschema);

module.exports = User;
