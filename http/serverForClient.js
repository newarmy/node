const http = require('http');
const net = require('net');
const url = require('url');

var proxy = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('okay');
});

proxy.on('connect', (req, cltSocket, head) => {
	//
	var srvUrl = url.parse(`http://${req.url}`);
	console.log(srvUrl.hostname);
	var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () =>{
		cltSocket.write('HTTP/1.1 200 连接已建立\r\n' +
                    '委托代理: Node.js-代理\r\n' +
                    '\r\n');
		srvSocket.write(head);
		srvSocket.pipe(cltSocket);
		cltSocket.pipe(srvSocket);
	});
	
});


proxy.listen(1337, '127.0.0.1', () => {
	var options = {
		port: 1337,
		hostname: '127.0.0.1',
		method: 'CONNECT',
		path: 'www.sohu.com:80'
	};
	var req = http.request(options);
	req.end();
	req.on('connect', (res, socket, head) => {
		
		console.log('got connected!');
		
		socke.write('GET / HTTP/1.1\r\n' +
                 'Host: www.sohu.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
	    socket.on('data', (chunk) => {
			console.log(chunk.toString());
		});
		socket.on('end', () => {
			proxy.close();
		})
	});
});

















