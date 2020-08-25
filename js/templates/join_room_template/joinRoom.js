const { Socket } = require("dgram");

ubsApp.getJoinRoomTemplate=function(templateConfig,tempVar){
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	tempVar.html+=ubsJoinRoomTemplate(templateConfig);
}


ubsApp.openJoinRoomTemplate = function(){
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("joinRoomPage");
}

//add join room functions below

ubsApp.joinRoom = function(){
    roomCode = document.getElementById("roomCode").value;
    playerAge = document.getElementById("playerAge").value;
    playerName = document.getElementById("playerNameInput").value;
    playerGender = document.getElementById("playerGender").value;

    if()
    socket.emit("serverJoinRoom", {
        description : "Player trying to join room",
        roomCode : roomCode,
        age : playerAge,
        userName : playerName,
        gender : playerGender
    })
}