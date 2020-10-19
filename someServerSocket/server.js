const express = require('express');
const bodyparser = require('body-parser');
//const student = require('./student');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded());
//  app.use(student);

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

app.get('/status/:id',(request, response) => {
    const id = request.params.id;

    response.status(200).send('');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.emit('status')
});

/***
	connection event
	disconnect event

	.on --> listen event 
	.emit --> emits event

	In order to send an event to everyone,
	 Socket.IO gives us the io.emit() method.

	If you want to send a message to everyone 
	except for a certain emitting socket,
	we have the broadcast flag for emitting
	from that socket:
	io.on('connection', (socket) => {
	  socket.broadcast.emit('hi');
	});



// sending to sender-client only
socket.emit('message', "this is a test");

// sending to all clients, include sender
io.emit('message', "this is a test");

// sending to all clients except sender
socket.broadcast.emit('message', "this is a test");

// sending to all clients in 'game' room(channel) except sender
socket.broadcast.to('game').emit('message', 'nice game');

// sending to all clients in 'game' room(channel), include sender
io.in('game').emit('message', 'cool game');

// sending to sender client, only if they are in 'game' room(channel)
socket.to('game').emit('message', 'enjoy the game');

// sending to all clients in namespace 'myNamespace', include sender
io.of('myNamespace').emit('message', 'gg');

// sending to individual socketid (server-side)
socket.broadcast.to(socketid).emit('message', 'for your eyes only');

// join to subscribe the socket to a given channel (server-side):
socket.join('some room');

// then simply use to or in (they are the same) when broadcasting or emitting (server-side)
io.to('some room').emit('some event'):

// leave to unsubscribe the socket to a given channel (server-side)
socket.leave('some room');

// sending to all clients in namespace 'myNamespace', include sender
io.of('myNamespace').emit('message', 'gg');
// sending to individual socketid
socket.broadcast.to(socketid).emit('message', 'for your eyes only');




					OFFICIAL

	io.on('connect', onConnect);

function onConnect(socket){

  // sending to the client
  socket.emit('hello', 'can you hear me?', 1, 2, 'abc');

  // sending to all clients except sender
  socket.broadcast.emit('broadcast', 'hello friends!');

  // sending to all clients in 'game' room except sender
  socket.to('game').emit('nice game', "let's play a game");

  // sending to all clients in 'game1' and/or in 'game2' room, except sender
  socket.to('game1').to('game2').emit('nice game', "let's play a game (too)");

  // sending to all clients in 'game' room, including sender
  io.in('game').emit('big-announcement', 'the game will start soon');

  // sending to all clients in namespace 'myNamespace', including sender
  io.of('myNamespace').emit('bigger-announcement', 'the tournament will start soon');

  // sending to a specific room in a specific namespace, including sender
  io.of('myNamespace').to('room').emit('event', 'message');

  // sending to individual socketid (private message)
  io.to(socketId).emit('hey', 'I just met you');

  // WARNING: `socket.to(socket.id).emit()` will NOT work, as it will send to everyone in the room
  // named `socket.id` but the sender. Please use the classic `socket.emit()` instead.

  // sending with acknowledgement
  socket.emit('question', 'do you think so?', function (answer) {});

  // sending without compression
  socket.compress(false).emit('uncompressed', "that's rough");

  // sending a message that might be dropped if the client is not ready to receive messages
  socket.volatile.emit('maybe', 'do you really need it?');

  // specifying whether the data to send has binary data
  socket.binary(false).emit('what', 'I have no binaries!');

  // sending to all clients on this node (when using multiple nodes)
  io.local.emit('hi', 'my lovely babies');

  // sending to all connected clients
  io.emit('an event sent to all connected clients');

};



*/

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  /***
		Let’s register an event called my message 
		inside our index.js node file and 
		console the data and 
		we will emit the same event from Angular app.
  */

  socket.on('my message', (msg) => {//socket .on --> listner
    console.log('message: ' + msg);
    /***
  		 let’s emit an event from the server side
  	*/
    //io.emit('my broadcast', `server: ${msg}`);
    io.emit('my message', `server: ${msg}  broadcast`);
    socket.emit('my message', `server: ${msg} unicast`);

  });

  /*socket.on('my message', (msg) => {
  	
  });*/
});


/*app.listen(3000,'0.0.0.0',() => {
    console.log('hello your express server is listening on 3000');
});*/
http.listen(3000, () => {
  console.log('listening on *:3000');
});