const socketIo = require("socket.io")(5500, {
  cors: {
    origin: ["http://localhost:8080"],
  },
});

socketIo.on("connection", (socket) => {
  console.log(socket.id);
});
