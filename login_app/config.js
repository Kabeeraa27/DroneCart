const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// MongoDB connection setup
async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb+srv://kabeeer27:DroneCart@cluster0.nmqspld.mongodb.net/USER_DATA:27017', {      
        useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connection Succeeded.');
    } catch (err) {
        console.error('Error in DB connection : ' + err);
        process.exit(1); // Exit process on database connection failure
    }
}

connectToDatabase();

// Set up sessions and other middleware
app.use(session({
    secret: '6969',
    resave: true,
    saveUninitialized: false
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Serve Homepage.html
app.get('/Homepage.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'Homepage.html'));
});


// Error handling middleware
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

// Start server
const PORT = process.env.PORT || 27017;
app.listen(PORT, function () {
    console.log('Server is started on http://127.0.0.1:' + PORT);
});
