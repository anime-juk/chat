var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
server.listen(port);
var msg1="";

app.use(express.static('public'));
app.get('/socket.io.js', function(req,res){
    res.sendFile(__dirname+'/node_modules/socket.io-client/dist/socket.io.js');
  });
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/chat.html');
  });

  io.on('connection', function(socket){
    io.emit('message', msg1);
    socket.on('message', function(msg){
      console.log('message: ' + msg);
      msg1=msg1+msg[0]+":"+msg[1]+'<br>';
      io.emit('message', msg1);
    });
  });