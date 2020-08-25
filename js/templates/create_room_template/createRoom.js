ubsApp.getCreateRoomTemplate=function(templateConfig,tempVar){
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	tempVar.html+=ubsCreateRoomTemplate(templateConfig);
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

ubsApp.opencreateRoomTemplate = function(){
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("createRoomPage");
}

//add create room functions below