var PORT = process.env.PORT = 80;
var express = require('express')
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/site/assets', express.static(path.resolve('site/assets')));
app.use('/site/logo', express.static(path.resolve('site/logo')));
app.use('/site/src/images', express.static(path.resolve('site/src/images')));

app.get('/', function(req, res){
    res.sendFile(path.resolve('index.html'));
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(PORT, function(){
    console.log('listening on :' + PORT);
});