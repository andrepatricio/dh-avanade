const app = require('express')();
const { Server } = require('http');
const server = Server(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
const path = require('path');

app.get('/', (req, res)=>{
    res.send(200);
})

let count = 0;
io.on('connection', (socket)=>{
    console.log(socket.id)
    count++;
    io.emit('contador', { count })

    socket.on('disconnect', () => {
        count--;
        io.emit('contador', { count })
    })

    socket.on('send msg', (data) => {
        console.log(data);
        socket.broadcast.emit('new msg', data)
    })
});


server.listen(3300, ()=> {
    console.log("Listening on port 3300")
})