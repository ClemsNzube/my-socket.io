const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
    socket.on('greeting', 
    (msg) => {
        console.log(msg);
    }
    )

    // socket.on('message',
    // (msg) => {
    //     console.log(msg);
    //     socket.emit('message', 'Hello from server');
    // }
    // )
    
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})