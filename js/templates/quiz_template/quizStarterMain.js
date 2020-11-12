ubsApp.getQuizStarterTemplate = function(templateConfig, tempVar){

	tempVar.quizConfig = templateConfig;
	tempVar.quizConfig.currentPlayerName = userArray[playerChance].getplayerName();
	ubsApp.generalQuiz(tempVar.quizConfig);
}

ubsApp.initializeQuizQuestions = function(questionNo, credit) {

	 choiceSelected.answers[questionNo] = false;
	 choiceSelected.credit.push({
	 	"inventory":credit.inventory,
	 	 "bankBalance":credit.bankBalance,
	     "cash":credit.cash,
	     "reputationPoints":credit.reputationPoints
	});
}




ubsApp.emptyQuizQuestions = function(){
	choiceSelected={};
	choiceSelected.page ="";
	choiceSelected.answers =[];
	choiceSelected.credit=[];
}



ubsApp.cancelQuiz=function(scenarioName){
	if(scenarioName!=""){
		ubsApp.payOrGain(scenarioName);
	}
	choiceSelected = {};
	$("#quizCancel").attr("disabled", false);
	ubsApp.socketCloseCurrentScenario();
	if(ubsApp.nextPlayerOnQuizClose) {
	    ubsApp.nextPlayerOnQuizClose = false;
	    ubsApp.callServerNextMove();
	}

}

ubsApp.generalQuiz=function(config){   //credits can be amount or points depending on type of quiz

	ubsApp.emptyQuizQuestions();
	console.log("This is the config: "+ config +" of player: "+ userArray[playerChance].getplayerName());

	let arr = [];
	let noOfQuestions = config.noOfQuestions;
	let totalNoOfQuestions =  config.totalNoOfQuestions;
    choiceSelected.page=config.resultPage;

	while(arr.length < noOfQuestions){
	    var randomNumber = Math.floor(Math.random()*totalNoOfQuestions+1);
	    if(arr.indexOf(randomNumber) > -1) continue;
	    arr[arr.length] = randomNumber;
	}

	for(let i=0;i<arr.length-1;i++){
		ubsApp.pages["quizQ"+arr[i]].templates[0].onClickPage.nextPage = "quizQ"+arr[i+1];
		ubsApp.initializeQuizQuestions(i, ubsApp.pages["quizQ"+arr[i]].templates[0].credit);
		ubsApp.pages["quizQ"+arr[i]].templates[0].noOfQuestions = noOfQuestions;
		ubsApp.pages["quizQ"+arr[i]].templates[0].currentPlayerName = config.currentPlayerName;
	}


	ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].onClickPage.nextPage = config.resultPage;
	ubsApp.initializeQuizQuestions(arr.length-1, ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].credit);
	ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].noOfQuestions = config.noOfQuestions;    			//noOfQuestions to be put in quiz config
	ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].currentPlayerName = config.currentPlayerName;
	ubsApp.pages[config.resultPage].templates[0].noOfQuestions = noOfQuestions;
	// ubsApp.renderFirstQuizPage("quizQ"+arr[0]);
	socket.emit('serverQuizPage', {
		description: "Render General Quiz",
        quizPage : "quizQ"+arr[0],
        roomCode : userArray[playerChance].getRoomCode()
	})
}

ubsApp.renderFirstQuizPage = function(page){

	var pageTemplate = ubsApp.pages[page].templates[0];
	$('#monopolyBase').css("z-index",-10);
    $('#templateBase').css("z-index",10);
    if(pageTemplate.entryPoint == "unluckyScenario"){
    	pageTemplate.currentPlayerName = userArray[playerChance].getplayerName();
    }
    document.getElementById("templateContent").style.opacity="0.95";

    $('#templateContent').css("height","100vh");
    $('#templateContent').css("width","100vw");
    ubsApp.startRecordingTimer(pageTemplate);
    ubsApp.renderPageByName(page);
    if(pageTemplate.entryPoint == "unluckyScenario"){
    	$('#score').hide();
    	$('#quizDone').hide();
    }
	$("#correctAnswers").text("0");
	$("#quizQuestionNumber").text("1");

}
