var express = require('express');
var app = express();
var http = app.listen(process.env.PORT || 8080);
var io = require('socket.io').listen(http);
var path = require('path');

app.use('/site', express.static(path.resolve('site')));

app.get('/Plaginz', function (req, res) {
    res.sendFile(path.resolve('index.html'));
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.on("listening", function () {
    console.log("listening " + process.env.PORT);
})
