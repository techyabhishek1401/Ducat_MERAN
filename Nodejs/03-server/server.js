const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request recieved:", req.url);
    switch (req.url) {
        case '/home': res.write("<h1>I'm at home</h1>");
            res.end();
            break;
        case '/about': res.write("I'm at ABOUT");
            res.end();
            break;
        default: res.write("404 page not found");
            res.end();
            break;
    }

})
server.listen('8080', () => console.log("server is running at localhost:8080"))