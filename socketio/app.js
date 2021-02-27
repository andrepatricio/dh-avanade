const app = require('express')();
const { Server } = require('http');
const server = Server(app);
const io = require('socket.io')(server);
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
        socket.broadcast.emit('new msg', data)
    })
});


server.listen(3000, ()=> {
    console.log("Listening on port 3000")
})