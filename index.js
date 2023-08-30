const fs = require('fs');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', function (req, res) {
   fs.createReadStream('./index.html').pipe(res);
})

server.listen(1337);


io.on('connection', function (client) {
    client.on("message", function (msg) {
        client.emit('message', msg)
    })
})