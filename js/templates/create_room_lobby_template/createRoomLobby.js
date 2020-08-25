ubsApp.getCreateRoomLobbyTemplate = function (templateConfig, tempVar) {
    tempVar.html += ubsCreateRoomLobbyTemplate(templateConfig);
}


ubsApp.openCreateRoomLobbyTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("createRoomLobbyPage");
}

//add create room functions below

// ubsApp.createRoomLobby = function () {
//     userLimit = document.getElementById("num_online_players").value;
//     userName = document.getElementById("playerNameInput").value;
//     age = document.getElementById("playerAge").value;
//     if (!userName) {
//         console.log("Invalid username");
//     } else if (age < 0 || !age) {
//         console.log("Invalid age");
//     }
//     else {
//         socket.emit("serverCreateRoom", {
//             description: "create room button clicked",
//             limit: userLimit,
//             userId: userName
//         });
//     }
// }