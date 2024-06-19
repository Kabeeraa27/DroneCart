const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;
const projectDirectory = "C:/Users/kabee/OneDrive/Desktop/WP_Project";

const server = http.createServer((req, res) => {
    const filePath = path.join(projectDirectory, req.url);

    fs.readdir(filePath, (err, files) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
        }

        // Display directory listing with clickable links
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Directory Listing</h1>');
        res.write('<ul>');
        files.forEach(file => {
            const fileLink = path.join(req.url, file);
            res.write(`<li><a href="${fileLink}">${file}</a></li>`);
        });
        res.write('</ul>');
        res.end();
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
