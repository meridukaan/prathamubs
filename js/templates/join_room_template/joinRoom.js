
ubsApp.getJoinRoomTemplate = function (templateConfig, tempVar) {
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
    tempVar.html += ubsJoinRoomTemplate(templateConfig);
}


ubsApp.openJoinRoomTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("joinRoomPage");
}

ubsApp.populateJoinRoomLobbyPage = function(userList, roomCode){
    console.log("list of users in populate method :"+userList);
    document.getElementById("listOfUsers").innerHTML = userList;
    // ubsApp.openJoinRoomLobbyTemplate();
}

//add join room functions below

ubsApp.joinRoom = function () {
    roomCode = document.getElementById("roomCode").value;
    playerAge = document.getElementById("playerAge").value;
    playerName = document.getElementById("playerNameInput").value;
    playerGender = document.getElementById("playerGender").value;
    if (!playerName) {
        ubsApp.openResultPopup({
            "message": "Please enter valid username",
            "header": "Invalid username",
            "headerStyle": "text-align: center;  color: black; font-weight: 700;",
            "buttons": [
                {
                    'id': "closePopupButton",
                    'name': "CLOSE",
                    'action': "ubsApp.callServerClosePopup();"
                }
            ]
        });
    }
    else if (!playerAge) {
        ubsApp.openResultPopup({
            "message": "Please enter valid age",
            "header": "Invalid age",
            "headerStyle": "text-align: center;  color: black; font-weight: 700;",
            "buttons": [
                {
                    'id': "closePopupButton",
                    'name': "CLOSE",
                    'action': "ubsApp.callServerClosePopup();"
                }
            ]
        });
    } else {
        socket.emit("serverJoinRoom", {
            description: "Player trying to join room",
            roomCode: roomCode,
            age: playerAge,
            userName: playerName,
            gender: playerGender
        })
    }
}

//only for testing purposes 
//TODO : delete the follwoing later
socket.on("callingMonopolyBoard", function () {
    console.log("inside socket board");
    monopoly.renderPageforBoard(monopoly.pages["monopoly"]);
})

socket.on("joinRoomPopup", function (data) {
    ubsApp.openResultPopup({
        "message": data.description,
        "header": data.header,
        "headerStyle": "text-align: center;  color: black; font-weight: 700;",
        "buttons": [
            {
                'id': "closePopupButton",
                'name': "CLOSE",
                'action': "ubsApp.callServerClosePopup();"
            }
        ]
    });
})