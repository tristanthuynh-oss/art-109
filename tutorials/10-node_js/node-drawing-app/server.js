var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Hello World")

var socketio = require('socket.io');
var io = socketio(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection ' + socket.id);
    socket.on('mouse', mouseMsg.bind(null, socket));
}

function mouseMsg(socket, data) {
    socket.broadcast.emit('mouse', data);
    console.log(data);
}