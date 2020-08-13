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

    socket.on('actualTransferToBank', function(data){
        console.log(data.description);
        console.log(data.qid);
        socket.emit('openActualTransferToBank', {questionId : data.qid});
        socket.in(1).emit('openActualTransferToBank', {questionId : data.qid});

    });

    socket.on('transferToBank', function(data){
        console.log(data.description);
        socket.in(1).emit('openTransferToBank', {flag : 1, openNextMove:false});
        socket.emit('openTransferToBank', {flag : 1, openNextMove:false});
    })

    socket.on('textToReplicate', function(data){
        console.log("Received value entered "+data.cash);
        socket.in(1).emit('replicatedText',{
            description : "Event to send back the text received from the player", amountToTransfer : data.cash
        })
    })

    socket.on('closeScenario', function(data){
        console.log("opened server side of close scenario")
        socket.emit('closingCurrentScenario',{
            description : "This function would call the close scenario function on every client"
        });
        socket.in(1).emit('closingCurrentScenario',{
            description : "This function would call the close scenario function on every client"
        });
    })

    socket.on('startScenarioToServer',function(data){
        console.log("Opened startScenario on Server");
        socket.in(1).emit('startScenarioToClient',{
            description : "This event calls the startScenario on all clients in room", templateName : data.templateName, template : data.template, key : data.key
        })
        socket.emit('startScenarioToClient',{
            description : "This event calls the startScenario on all clients in room", templateName : data.templateName, template : data.template, key : data.key
        })
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
