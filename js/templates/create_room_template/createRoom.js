ubsApp.getCreateRoomTemplate = function (templateConfig, tempVar) {
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
    tempVar.html += ubsCreateRoomTemplate(templateConfig);
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
    userAge = document.getElementById("playerAge").value;
    userGender = document.getElementById("playerGender").value;
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
    } else if (userAge <= 0 || !userAge) {
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
            userId: userName,
            userAge : userAge,
            userGender : userGender
        });
    }
}