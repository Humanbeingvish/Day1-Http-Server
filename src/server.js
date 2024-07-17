"use strict";
// import http from 'http';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const hostname:string= '127.0.0.1';
// const port:number= 3000;
// const server = http.createServer((req,res)=>{
//     console.log('Hello world ')
//     res.statusCode=200;
//     res.setHeader('Content-type','text/plain ')
//     res.end('Hello world!\n')
// });
// server.listen(port,hostname,()=>{
//     console.log('Server running on port 3000')
// })
const http_1 = __importDefault(require("http"));
const host = 'localhost';
const port = 3000;
const server = http_1.default.createServer((req, res) => {
    console.log('Hello Hari');
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello vishnu\n');
});
server.listen(port, host, () => {
    console.log('Server started');
});
