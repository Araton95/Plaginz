var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/site', express.static(path.resolve('../../../site')));

app.get('/Plaginz', function (req, res) {
    res.sendFile(path.resolve('../../../index.html'));
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(8080, function () {
    console.log("listenin");
});
