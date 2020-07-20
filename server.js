const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// const port = 3000;
// const path = require('path');
// const fs = require('fs');

app.use(express.static(__dirname));
var usersList = [];
io.on('connection', function (socket) {
    
    socket.join(1);
    usersList.push(usersList.length);
    console.log(usersList);

    socket.on('transferToBank', function(data){
        console.log(data.description);
        socket.in(1).emit('openTransferToBank', {flag : 1});
        socket.emit('openTransferToBank', {flag : 1});
    })

})


// var server = app.listen(3000, function () {
//     var host = 'localhost';
//     var port = server.address().port;
//     console.log('listening on http://'+host+':'+port+'/');
// });
http.listen(3000, function () {
    console.log('listening on port 3000');
});