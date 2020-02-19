//Libreria http de Node.js
const http = require('http');

//Hos: loopback address
const hostname = '127.0.0.1';

//Node.js default port 
const port = 3000;

//Funcion
function f () {

}

//ECMAScript 6 Function
const f2 = () => {

}
//ECMAScript 6 Anonymous Function
() => {}

//req --> Request 
//res --> 

const server = http.createServer((req, res) => {
    //OK
    res.statusCode = 200;
    //Set content mimetype 
    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})