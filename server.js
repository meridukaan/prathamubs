const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var map = require('hashmap');
let rooms = [];
let userLimitMap = new map();
let roomUserMap = new map();
let creatorMap = new map();
let studentArrayMap = new map();
let roomPropertiesMap = new map();
let roomPropertiesList = new Array(); // [creatorSocketId, userLimit, userLanguage, numOfWeeks]

app.use(express.static(__dirname));
io.on('connection', function (socket) {

    socket.on('serverCreateRoom', function (data) {
        let users = new Set();
        let players = [];
        let player = {};
        userLimit = Number(data.roomLimit);
        userName = data.userName;
        language = data.roomLanguage;
        weeks = Number(data.roomWeeks);
        roomnum = Math.floor(1000 + Math.random() * 9000); //Generate random num for room code
        while (rooms.includes(roomnum)) {
            roomnum = Math.floor(1000 + Math.random() * 9000);
        }
        rooms.push(roomnum);
        creatorMap.set(roomnum, socket.id); //remove
        users.add(userName);
        userList = Array.from(users);
        userLimitMap.set(roomnum, userLimit); //remove
        socket.join(roomnum);
        
        roomUserMap.set(roomnum, users);
        roomPropertiesList.push([socket.id, userLimit, language, weeks]);
        roomPropertiesMap.set(roomnum, roomPropertiesList);
        console.log(roomPropertiesMap.get(roomnum));    

        playerChance=0;//Initialize creator to be first player
        player.name=userName;
        player.age=Number(data.userAge);
        player.gender = data.userGender;
        player.room = roomnum;
        players.push(player);
        studentArrayMap.set(roomnum, players);
        
        console.log(studentArrayMap.get(roomnum));
        console.log("Room successfully created with room code : " + roomnum + "with users" + userList);
        socket.emit("populateCreateRoomLobby", {userSet : userList, studentArray : studentArrayMap.get(roomnum), roomCode : roomnum, isCreator : true, playerAge : data.userAge, playerGender : data.userGender});
        
    })

    socket.on('serverJoinRoom', function (data) {
        users = [];
        let player = {};
        roomCode = Number(data.roomCode);

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
            playerChance = roomUserMap.get(roomCode).size - 1;
            console.log("Chance of player is " + playerChance);
            console.log(roomUserMap.get(roomCode).size + " players in room " + roomCode + " : " + users);
            
            player.name=data.userName;
            player.age=Number(data.age);
            player.gender=data.gender;
            player.room = roomCode;
            player.chance = playerChance;
            studentArrayMap.get(roomCode).push(player);
            
            console.log(studentArrayMap.get(roomCode));
            socket.emit("populateJoinRoomLobby", {userList : users, studentArray : studentArrayMap.get(roomCode), roomCode : roomCode, isCreator : false});
            socket.in(roomCode).emit("populateJoinRoomLobby", {userList : users, studentArray : studentArrayMap.get(roomCode), roomCode : roomCode, isCreator : false});
            socket.to(creatorMap.get(roomCode)).emit("populateCreateRoomLobby", {userSet : users, isCreator : true, roomCode : roomCode, studentArray : studentArrayMap.get(roomCode)});
            
        }//TODO : room full popup
        
    })

    socket.on('storePlayerDetailsToServer',function(data){
        socket.emit('storePlayerDetailsToClient',{
            description : "Calls store player details on all clients",
            roomLanguage : data.roomLanguage
        })
        socket.to(Number(data.roomCode)).emit('storePlayerDetailsToClient',{
            description : "Calls store player details on all clients",
            roomLanguage : data.roomLanguage
        })
    })

    socket.on('actualTransferToBank', function (data) {
        console.log(data.description);
        console.log(data.qid);
        socket.emit('openActualTransferToBank', { questionId: data.qid });
        socket.in(Number(data.roomCode)).emit('openActualTransferToBank', { questionId: data.qid });

    });

    socket.on('transferToBank', function (data) {
        console.log(data.description);
        socket.in(Number(data.roomCode)).emit('openTransferToBank', { flag: 1, openNextMove: false });
        socket.emit('openTransferToBank', { flag: 1, openNextMove: false });
    })

    socket.on('textToReplicate', function (data) {
        socket.broadcast.emit('replicatedText', {
            description: "Event to send back the text received from the player", amountToTransfer: data.cash
        })
    })

    socket.on('closeScenario', function (data) {
        console.log("opened server side of close scenario")
        socket.emit('closingCurrentScenario', {
            description: "This function would call the close scenario function on every client"
        });
        socket.in(Number(data.roomCode)).emit('closingCurrentScenario', {
            description: "This function would call the close scenario function on every client"
        });
    })

    socket.on('serverClosePopup', function (data) {
        console.log("Server side close pop up function");
        socket.emit('socketClosePopup', {
            description: "Calling close pop up on current client",
            config : data.config,
            doNextMove : data.doNextMove
        });
        socket.in(Number(data.roomCode)).emit('socketClosePopup', {
            description: "Calling close popup on all clients in room",
            config : data.config,
            doNextMove : data.doNextMove
        });
    })
})

http.listen(3000, function () {
    console.log('listening on port 3000');
});