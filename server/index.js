const express = require('express');
const bodyParser = require('body-parser')
const {Server} = require('socket.io')
const io = new Server()
var app = express();

app.use(bodyParser.json())
io.on("connection", (socket) => {
    console.log(`Peer ${socket.id} connection`);
})

app.listen(8000, function() {
    console.log(`Server is listening on port 8000`);
});
io.listen(8100)

module.exports = app;
