//console.log("hello world");
const http= require('http');

const hostname= '127.0.0.1'
const port= 3000;

const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    res.end('my name is sahil');
});

server.listen(port,hostname,()=>{
    console.log(`server runnuig at http://${hostname}:${port}/`);
});  