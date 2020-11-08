ubsApp.startHelp=function(pageName){

    ubsApp.closeHelp();
	//document.getElementById("helpContent").style.opacity="0.95";
	$('#popupBackground').show();
	$('#helpContent').css("height",(screenHeight)+'px')
	$('#helpContent').css("width",(screenWidth)+'px')
	helpScenarioOpen=true;
	ubsApp.renderHelpPage(ubsApp.pages[pageName].templates);


}

ubsApp.socketStartHelp = function(pageName){
	if(pageName=="introHelp"){
		console.log("Starting intro help");
	}
	socket.emit('socketStartHelp', {
		descrtiption: 'Calling Server for Starting Help',
		pageName:pageName,
		roomCode: ubsApp.studentArray[0].room
	});
}

socket.on('clientStartHelp', function(data){
	console.log('Received message from Server, now starting help');
	ubsApp.startHelp(data.pageName);
})

ubsApp.renderHelpPage=function(template){
	let html = "";
	for(let i=0; i< template.length; i++) {
		let templateConfig = $.extend({},template[i]);
		 templateConfig["screenHeight"] = screenHeight;
         templateConfig["screenWidth"] = screenWidth;
		if(templateConfig.templateType=="static"){
			if(templateConfig.id == "helpContentVideo"){
				templateConfig.isOnlineMode = !ubsApp.isOfflineMode; //default
			}
			html+=ubsStaticTemplate(templateConfig);
		} else if(templateConfig.templateType ==  "popup") {
            document.getElementById("helpContent").style.opacity="1";
            document.getElementById("helpContent").style["background-color"] = "transparent";
        	html += ubsApp.getPopupHtml(templateConfig);
        	ubsApp.popupConfig = {};

		}

	}
	document.getElementById("helpContent").innerHTML+=html;
	setTimeout(ubsApp.stopAudioIfRequired(), 2000);

}

ubsApp.stopAudioIfRequired = function() {

    var vid = document.getElementById("helpVideo");
    	if(vid) {
    	    vid.onplay = function() {
                    ubsApp.stopBackgroundMusic();
                };
    	}

}

ubsApp.closeHelp=function(){

    ubsApp.startBackgroundMusic();
    $('#popupBackground').hide();
	$('#helpContent').css("height",0+'px')
	document.getElementById("helpContent").innerHTML="";
	helpScenarioOpen=false;
  document.getElementById("helpContent").style.opacity="0.95";
  document.getElementById("helpContent").style["background-color"] = "rgb(105,105,105)";
}


ubsApp.socketCloseHelp=function(){
	socket.emit('socketCloseHelp', {
		descrtiption: 'Calling Server for Closing Help',
		roomCode: ubsApp.studentArray[0].room
	});
}


socket.on('clientCloseHelp', function(data){
	console.log('Received message from Server, now closing help');
	ubsApp.closeHelp();
})
