
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
    var alphaNumeric = /^[0-9a-zA-Z]+$/;
    isAlphaNumeric = alphaNumeric.test(playerName); 
    if (!playerName) {
        document.getElementById("inputErrorMessage").innerHTML="Please enter valid username";
    }
    else if (!isAlphaNumeric){
        document.getElementById("inputErrorMessage").innerHTML="Only Alphabets and Numbers allowed in username";
    }
    else if (!playerAge || playerAge > 100) {
        document.getElementById("inputErrorMessage").innerHTML="Please enter valid age";
    } else {
        monopoly.storeMyDetails(playerName, playerAge, playerGender);
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
    document.getElementById("inputErrorMessage").innerHTML=data.description;
})