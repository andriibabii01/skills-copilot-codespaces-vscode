// Create web server
var express = require('express');
var app = express();
// Create a static web server
app.use(express.static(__dirname));
// Create a server
var http = require('http');
var server = http.createServer(app);
// Create a socket server
var io = require('socket.io')(server);
// Listen for a connection event
io.on('connection', function(socket) {
  // Listen for a comment event
  socket.on('comment', function(data) {
    // Broadcast the comment event to all connected clients
    io.sockets.emit('comment', data);
  });
});
// Listen for a connection event on port 3000
server.listen(3000, function() {
  console.log('Server listening on port 3000');
});