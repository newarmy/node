const 	fs = require('fs'),
		path = require('path'),
		http = require('http'),
		url = require('url'),
		qs = require('querystring');
/*
 req --> http.IncomingMessage
 res --> http.ServerResponse 
*/
const server = http.createServer((req, res) => {
	//get request address
	const urlStr = req.url;
	console.log(req.url);
	console.log('------------------------------------------');
	console.log(req.headers);
	console.log('------------------------------------------');
	console.log(req.httpVersion);
	console.log('------------------------------------------');
	console.log(req.method);
	console.log('------------------------------------------');
	console.log(req.rawHeaders);
	console.log('------------------------------------------');
	if(req.method === 'POST') {
		let data ='';
		req.setEncoding('utf8');
		req.on('data', (chunk) => {
			data +=chunk;
		});
		req.on('end', (chunk) => {
			res.writeHead(200, {'Content-Type': 'text/plain', 'Content-Length': Buffer.byteLength(data)});
			res.write(data);
			res.end();
		});
	}
	//console.log(file);
});

server.listen(8000, 'localhost');



















