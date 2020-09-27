const socketIO = require("socket.io");

let socket;

const connection = (server) => {
  // Agregar conexión de socket al servidor
  const io = socketIO.listen(server);

  // Handle events
  io.on("connection", (newSocket) => {
    socket = newSocket;
    console.log(newSocket.id);
  });
};

const getSocket = () => socket;

module.exports = {
  connection,
  getSocket
};
