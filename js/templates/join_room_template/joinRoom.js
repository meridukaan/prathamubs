ubsApp.getJoinRoomTemplate=function(templateConfig,tempVar){
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	tempVar.html+=ubsJoinRoomTemplate(templateConfig);
}


ubsApp.openJoinRoomTemplate = function(){
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("joinRoomPage");
}

//add join room functions below