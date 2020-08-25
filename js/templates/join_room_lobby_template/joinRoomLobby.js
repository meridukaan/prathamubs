const { Socket } = require("dgram");

ubsApp.getJoinRoomLobbyTemplate = function (templateConfig, tempVar) {
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
    tempVar.html += ubsJoinRoomTemplate(templateConfig);
}


ubsApp.openJoinRoomLobbyTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("joinRoomPageLobby");
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