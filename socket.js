const LudoGame = require('./ludoEngine');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);

    socket.on('joinRoom', (roomId, user) => {
      socket.join(roomId);
      // Room/game logic here
      socket.emit('joinedRoom', roomId);
    });

    // Add more game events: roll dice, move, etc.
  });
};