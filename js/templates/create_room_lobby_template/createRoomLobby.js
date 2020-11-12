ubsApp.getCreateRoomLobbyTemplate = function (templateConfig, tempVar) {
    tempVar.html += ubsCreateRoomLobbyTemplate(templateConfig);
}


ubsApp.openCreateRoomLobbyTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("createRoomLobbyPage");
}


ubsApp.populateCreateRoomLobbyPage = function(users, roomCode){
    document.getElementById("roomCode").innerHTML = roomCode;
    document.getElementById("listOfUsers").innerHTML = users;
    // ubsApp.openCreateRoomLobbyTemplate();
}

socket.on("populateCreateRoomLobby", function(data){
    console.log("list of users : "+data.userSet);
    ubsApp.isCreator = Boolean(data.isCreator);
    console.log(data.studentArray);
    ubsApp.studentArray = data.studentArray;
    ubsApp.openCreateRoomLobbyTemplate();
    ubsApp.populateCreateRoomLobbyPage(data.userSet, Number(data.roomCode));
});

socket.on("storePlayerDetailsError", function(data){
    console.log(data.description);
    document.getElementById("errorMessage").innerHTML = data.description;
});

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