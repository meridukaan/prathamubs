const { Socket } = require("dgram");

ubsApp.getCreateRoomTemplate = function (templateConfig, tempVar) {
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
    tempVar.html += ubsCreateRoomTemplate(templateConfig);
}


ubsApp.opencreateRoomTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("createRoomPage");
}

//add create room functions below

ubsApp.createRoom = function () {
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
            description: "create room button clicked",
            limit: userLimit,
            userId: userName
        });
    }
}