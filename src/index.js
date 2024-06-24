const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const LogInCollection = require("./mongo");
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Paths
const templatePath = path.join(__dirname, '..', 'templates');
const publicPath = path.join(__dirname, '..', 'public');
const partialsPath = path.join(templatePath, 'partials');

// Setup view engine and views directory
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// Serve static files from the public directory
app.use(express.static(publicPath));

// Custom middleware to handle /public/ URLs
app.use((req, res, next) => {
    // Check if the request URL starts with /public/
    if (req.url.startsWith('/public/')) {
        // Rewrite the URL to remove /public/
        req.url = req.url.replace('/public/', '/');
    }
    next(); // Move to the next middleware
});

// Routes
app.get('/', (req, res) => {
    res.render('login');  // Render login page
});

app.get('/signup', (req, res) => {
    res.render('signup');  // Render signup page
});

app.post('/signup', async (req, res) => {
    try {
        const existingUser = await LogInCollection.findOne({ name: req.body.name });
        if (existingUser) {
            return res.status(400).send("User details already exist");
        }
        
        const data = new LogInCollection({
            name: req.body.name,
            password: req.body.password
        });
        await data.save();

        res.status(201).redirect('/home');  // Redirect to home page upon successful signup
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});

app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ name: req.body.name });
        
        if (!check || check.password !== req.body.password) {
            return res.status(400).send("Incorrect username or password");
        }
        
        res.status(201).redirect('/home');  // Redirect to home page upon successful login
    } catch (e) {
        res.status(500).send("Error: " + e.message);
    }
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(publicPath, 'Homepage.html'));  // Serve Homepage.html from public folder
});

// Redirect any other request to their corresponding HTML files
app.get('*', (req, res) => {
    const htmlFilePath = path.join(publicPath, req.url);
    res.sendFile(htmlFilePath, (err) => {
        if (err) {
            res.status(404).send("File not found");
        }
    });
});

// Start server
app.listen(port, () => {
    console.log('Server connected to port ' + port);
});
``