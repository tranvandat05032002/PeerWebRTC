const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { default: initSocket } = require('./socket');

var app = express();
const httpServer = createServer(app);

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

initSocket(httpServer);

function error(err, req, res, next) {
    // log it
    if (!test) console.error(err.stack);
  
    // respond with 500 "Internal Server Error".
    res.status(500);
    res.send("Internal Server Error");
}

app.use(error);

httpServer.listen(3400, function() {
    console.log(`Server is listening on port 3400`);
});

module.exports = app;
