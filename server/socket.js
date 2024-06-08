const { Server } = require("socket.io");

const initSocket = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:5173/"
        }
    })
    io.on("connection", (socket) => {
        console.log(`User ${socket.id} connected`)
      
        socket.on("message", (message) => {
          socket.broadcast.emit("message", message);
        });
      
        socket.on("disconnect", () => {
          console.log("Disconnected");
        });
        // socket.emit("custom-named-event", data)
        // socket.on("custom-named-event", (data)=>{
        //     console.log("data socket: ", data)
        // })
      });
}
export default initSocket