ubsApp.getJoinRoomLobbyTemplate = function (templateConfig, tempVar) {
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
    tempVar.html += ubsJoinRoomLobbyTemplate(templateConfig);
}


ubsApp.openJoinRoomLobbyTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("joinRoomLobbyPage");
}

//add create room functions below

ubsApp.joinRoomLobby = function () {
    userLimit = document.getElementById("num_online_players").value;
    userName = document.getElementById("playerNameInput").value;
    age = document.getElementById("playerAge").value;
    if (!userName) {
        console.log("Invalid username");
    } else if (age < 0 || !age) {
        console.log("Invalid age");
    }
    else {
        socket.emit("serverCreateRoom", {
            description: "start room button clicked",
            limit: userLimit,
            userId: userName
        });
    }
}

socket.on("populateJoinRoomLobby", function(data){
    userList = data.userList;
    roomCode = Number(data.roomCode);
    console.log("ubsApp flag : " + ubsApp.isCreator + " socket flag : "+ data.isCreator);
    console.log(data.studentArray);
    ubsApp.studentArray=data.studentArray;
    if(!ubsApp.isCreator){
        ubsApp.openJoinRoomLobbyTemplate();
        ubsApp.populateJoinRoomLobbyPage(userList, roomCode);
    }
})