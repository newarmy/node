const 	fs = require('fs'),
		path = require('path'),
		http = require('http'),
		url = require('url'),
		qs = require('querystring');

const server = http.createServer((req, res) => {
	//get request address
	const urlStr = req.url;
	//parsing url string to url Object
	const urlObj = url.parse(urlStr);
	//parsing query string to query Object
	console.log(urlObj);
	if(!urlObj.query){
		return;
	}
		
	const parObj = qs.parse(urlObj.query);
	const name = parObj['name'];
	//const pathObj = path.parse(__dirname);
	console.log(__dirname);
	//console.log(pathObj);
	// 拼接文件路径
	const file = path.resolve(__dirname, 'data/', name+'.json');
	fs.readFile(file, 'utf-8', (err, data) => {
		if(err) throw err;
		res.setHeader('Content-Type', 'application/json');
		res.write(data, 'utf-8');
		res.end();
	});
	//console.log(file);
});

server.listen(8000);



















