const http = require('http');

const server = http.createServer( (req, res) => {
    if(req.url === '/') {
        // console.log('req: ', req.client);
        
        res.write('Hello World.');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection');
});

server.listen(3000);

console.log('Listening on port 3000.');

// to see, open browser to 
// localhost:3000/api/courses 
// (http://127.0.0.1:3000/api/courses)
