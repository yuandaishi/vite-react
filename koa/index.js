const Koa = require('koa');
const _ = require('koa-route');
const {ws,home} = require('./router/index');
const WebSocket = require('ws');
const app = new Koa();

// 开启websocket
const wss = new WebSocket.Server({ port: 3002 });
wss.on('connection', function connection(ws) {
  console.log('server: receive connection.');
  
  // 接到前端发过来的信息的时候执行
  ws.on('message', function incoming(message) {
    console.log('%s',message)//这个数据并不是字符串
    setInterval(() => {
      ws.send(`这是服务端返回的数据：${Math.random()}`);
    }, 2000);
  });
});

app.use(_.get('/',home));
app.use(_.get('/ws',ws))
app.listen(3001);