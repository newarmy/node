const http = require('http');

// 创建一个 HTTP 服务器
var srv = http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');
});
srv.on('upgrade', (req, socket, head) => {
  socket.write('HTTP/1.1 101 Web Socket 协议握手\r\n' +
               '升级: WebSocket\r\n' +
               '连接: 升级\r\n' +
               '\r\n');

  socket.pipe(socket); // 回声
});

// 现在服务器正在运行
srv.listen(1337, '127.0.0.1', () => {

  // 发送一个请求
  var options = {
    port: 1337,
    hostname: '127.0.0.1',
    headers: {
      'Connection': 'Upgrade',
      'Upgrade': 'websocket'
    }
  };

  var req = http.request(options);
  req.end();

  req.on('upgrade', (res, socket, upgradeHead) => {
    console.log('已升级！');
    socket.end();
    process.exit(0);
  });
});