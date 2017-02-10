const   path = require('path'),
		http = require('http'),
		url = require('url'),
		qs = require('querystring');

var postData = qs.stringify({
	'msg': 'hello post',
	'first': 'first data'
});

var options = {
	hostname: 'localhost',
	port: 8000,
	path: '/test',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': Buffer.byteLength(postData)
	}
};
//req -- http.ClientRequest 类
var req = http.request(options, (res) => {
	console.log(`STATUS: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`主体: ${chunk}`);
	});
	res.on('end', () => {
		console.log('finished');
	});
	
});
req.on('error', (e) => {
	
	console.log(`$(e.message)`);
	
});
req.write(postData);
req.end();

















