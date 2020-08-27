ubsApp.getCreateRoomTemplate = function (templateConfig, tempVar) {
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
    tempVar.html += ubsCreateRoomTemplate(templateConfig);
}

ubsApp.createRoom=function(){
    roomnum=Math.floor(1000 + Math.random() * 9000); //Generate random number for room
    while(rooms.includes(roomnum)){
        roomnum=Math.floor(1000 + Math.random() * 9000);
    }
    //Should  we be creating a simple array for rooms, and a map which will map all users to particular room? Or is this going to be a DB driven model?
    rooms.push(roomnum);
    userLimit = document.getElementById("num_online_players").value;
    userName = document.getElementById("playerNameInput").value;
    userLimitMap.set(roomnum, userLimit);
    socket.join(roomnum);
    roomUserMap.set(roomnum, userName);
}

ubsApp.openCreateRoomTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("createRoomPage");
}

ubsApp.populateCreateRoomLobbyPage = function(users, roomCode){
    console.log("populate method in create room js called with room code "+roomCode +"and users : "+users);
    document.getElementById("roomCode").innerHTML = roomCode;
    document.getElementById("listOfUsers").innerHTML = users;
    // ubsApp.openCreateRoomLobbyTemplate();
}

//add create room functions below

ubsApp.createRoom = function () {
    userLimit = document.getElementById("num_online_players").value;
    userName = document.getElementById("playerNameInput").value;
    age = document.getElementById("playerAge").value;
    if (!userName) {
        console.log("Invalid username");
        ubsApp.openResultPopup({
            "message": "Please enter valid username",
            "header": "Invalid Username",
            "headerStyle": "text-align: center;  color: black; font-weight: 700;",
            "buttons": [
                {
                    'id': "closePopupButton",
                    'name': "CLOSE",
                    'action': "ubsApp.closePopup();"
                }
            ]
        });
    } else if (age <= 0 || !age) {
        console.log("Invalid age");
        ubsApp.openResultPopup({
            "message": "Please enter valid age",
            "header": "Invalid age",
            "headerStyle": "text-align: center;  color: black; font-weight: 700;",
            "buttons": [
                {
                    'id': "closePopupButton",
                    'name': "CLOSE",
                    'action': "ubsApp.closePopup();"
                }
            ]
        });
    } else if(userLimit == 1){
        console.log("Please visit pratham web URL");
        ubsApp.openResultPopup({
            "message": "Please play on http://meridukan.prathamopenschool.org/",
            "header": "Single player",
            "headerStyle": "text-align: center;  color: black; font-weight: 700;",
            "buttons": [
                {
                    'id': "closePopupButton",
                    'name': "CLOSE",
                    'action': "ubsApp.closePopup();"
                }
            ]
        });
    }
    else {
        socket.emit("serverCreateRoom", {
            description: "create room button clicked",
            limit: userLimit,
            userId: userName
        });
    }
}