ubsApp.getCreateRoomTemplate=function(templateConfig,tempVar){
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	tempVar.html+=ubsCreateRoomTemplate(templateConfig);
}


ubsApp.opencreateRoomTemplate = function(){
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("createRoomPage");
}

//add create room functions below