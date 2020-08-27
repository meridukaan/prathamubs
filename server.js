const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var map = require('hashmap');

let rooms = [];
let userLimitMap = new map();
let roomUserMap = new map();
let creatorMap = new map();


// const port = 3000;
// const path = require('path');
// const fs = require('fs');

app.use(express.static(__dirname));
// var usersList = [];
io.on('connection', function (socket) {

    // socket.join(1);
    // usersList.push(usersList.length);
    // console.log(usersList);

    socket.on('serverCreateRoom', function (data) {
        let users = new Set();
        roomnum = Math.floor(1000 + Math.random() * 9000); //Generate random num for room code
        while (rooms.includes(roomnum)) {
            roomnum = Math.floor(1000 + Math.random() * 9000);
        }
        rooms.push(roomnum);
        creatorMap.set(roomnum, socket.id);
        userLimit = Number(data.limit);
        userName = data.userId;
        users.add(userName);
        userList = Array.from(users);
        userLimitMap.set(roomnum, userLimit);
        socket.join(roomnum);
        roomUserMap.set(roomnum, users);
        console.log("Room successfully created with room code : " + roomnum + "with users" + userList);
        socket.emit("populateCreateRoomLobby", {userSet : userList, roomCode : roomnum, isCreator : true});
        
    })

    socket.on('serverJoinRoom', function (data) {
        users = [];
        roomCode = Number(data.roomCode);
        //For both failing conditions below, we should have popup which will show error, and upon close will return to join room.
        if (!rooms.includes(roomCode)) {
            console.log("Invalid room code");
            socket.emit("joinRoomPopup", {description : "Room code does not exist!", header : "Invalid room code"});
        } else if (roomUserMap.get(roomCode).has(data.userName)) {
            console.log("Username already exists");
            socket.emit("joinRoomPopup", {description : "Sorry, this username is already taken", header : "Username already exists"});
        } else if(roomUserMap.get(roomCode).size < userLimitMap.get(roomCode)){            
            socket.join(roomCode);
            roomUserMap.get(roomCode).add(data.userName);
            users = Array.from(roomUserMap.get(roomCode));
            console.log("room size is " + roomUserMap.get(roomCode).size);
            console.log("user limit is " + (userLimitMap.get(roomCode)));
            console.log("You have successfully joined room " + roomCode);
            // socket.emit("joinRoomPopup", {description : "You have successfully joined room", header : "Success!"});
            console.log(roomUserMap.get(roomCode).size + " players in room " + roomCode + " : " + users);
            socket.emit("populateJoinRoom", {userList : users, roomCode : roomCode, isCreator : false});
            socket.in(roomCode).emit("populateJoinRoom", {userList : users, roomCode : roomCode, isCreator : false});
            socket.to(creatorMap.get(roomCode)).emit("populateCreateRoomLobby", {userSet : users, isCreator : true, roomCode : roomCode});

            // socket.emit("populateCreateRoomLobby", {userSet : users, roomCode : roomnum});
            if(roomUserMap.get(roomCode).size == userLimitMap.get(roomCode)){
                console.log("start game");
            }
        }//TODO : room full popup
        
    })

    socket.on('actualTransferToBank', function (data) {
        console.log(data.description);
        console.log(data.qid);
        socket.emit('openActualTransferToBank', { questionId: data.qid });
        socket.in(1).emit('openActualTransferToBank', { questionId: data.qid });

    });

    socket.on('transferToBank', function (data) {
        console.log(data.description);
        socket.in(1).emit('openTransferToBank', { flag: 1, openNextMove: false });
        socket.emit('openTransferToBank', { flag: 1, openNextMove: false });
    })

    socket.on('textToReplicate', function (data) {
        console.log("Received value entered " + data.cash);
        socket.broadcast.emit('replicatedText', {
            description: "Event to send back the text received from the player", amountToTransfer: data.cash
        })
    })

    socket.on('closeScenario', function (data) {
        console.log("opened server side of close scenario")
        socket.emit('closingCurrentScenario', {
            description: "This function would call the close scenario function on every client"
        });
        socket.in(1).emit('closingCurrentScenario', {
            description: "This function would call the close scenario function on every client"
        });
    })

    socket.on('serverClosePopup', function (data) {
        console.log("Server side close pop up function");
        socket.emit('socketClosePopup', {
            description: "Calling close pop up on current client"
        });
        socket.in(1).emit('socketClosePopup', {
            description: "Calling close popup on all clients in room"
        });
    })
})

http.listen(3000, function () {
    console.log('listening on port 3000');
});