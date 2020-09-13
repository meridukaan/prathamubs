ubsApp.getQuizTemplate = function(templateConfig, tempVar){
	if(templateConfig.options!=undefined){
		ubsDecisionOption = templateConfig.options[0].optionName;
	}
	templateConfig.gameLogo = ubsApp.getTranslation("gameLogo");
	tempVar.html+=ubsQuizTemplate(templateConfig);
}

ubsApp.doneQuiz=function(){
	this.currentPlayerContents();
	ubsApp.cancelQuiz();
}


ubsApp.atleastOneSelected= function(name){
	var radio = document.getElementsByName(name);
  	for (var i=0; i<radio.length; i++) {

    if (radio[i].checked) {
      return true;
    }
  }
  return false;
}


ubsApp.displayNextQuizQuestion=function(page, updateCorrectAnswerScore){
	  var quizCorrectAnswer = $("#correctAnswers").html();
 	  var questionNo = $("#quizQuestionNumber").html();
	  ubsApp.renderPageByName(page);
	  ubsApp.startRecordingTimer(ubsApp.pages[page].templates[0]);
  	  questionNo=parseInt(questionNo)+1;
	  $("#quizQuestionNumber").text(questionNo);
	  $("#correctAnswers").text(quizCorrectAnswer);

	  if(ubsApp.pages[page].templates[0].quizResult){
	  		ubsApp.displayResults(page);
	  }
}

ubsApp.checkAnswerAndRenderNextPage=function(page, answer, optionName, questionId, reputationPoints, startTime, helpPageName, entryPoint, scenarioName){
  console.log("Quiz Question ID: "+ questionId);
  var totalMarks = 1; // each question carries 1 mark
  var date=new Date();
  var resultConfig={};
  if(startTime == ""){
  	var startTime=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  }
    if(ubsApp.atleastOneSelected(optionName)){
  	  let quizCorrectAnswer = $("#correctAnswers").html();
	  let checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").attr("id");
	  let questionNo = $("#quizQuestionNumber").html();
	  let audioElement = document.getElementById('answerDiv');
	  let quizResultMessage;
	  let nextAction;

	  if(checkedValue == answer){
	  		let scoredMarks = 1;
	  		quizCorrectAnswer = parseInt(quizCorrectAnswer) + 1;
		  	ubsApp.updateAnswers(questionNo - 1);
		  	if(entryPoint == "unluckyScenario"){
		  		let currentPlayerRepPoints = userArray[playerChance].getReputationPts();
		  		quizResultMessage = ubsApp.formatMessage(ubsApp.formatMessage(ubsApp.translation['quizWrongResultFromLuckyScenario'], [reputationPoints]));
		  		nextAction = "ubsApp.callServerClosePopup(); ubsApp.closeCurrentScenario();ubsApp.callServerNextMove();"
		  	}
		  	else{
		  		quizResultMessage = ubsApp.formatMessage(ubsApp.formatMessage(ubsApp.translation['quizCorrectAnswerMessage'], [reputationPoints]));
		  		nextAction = "ubsApp.callServerClosePopup("+true+");ubsApp.displayNextQuizQuestion(\'"+ page +"\', true);"
		  	}
		    ubsApp.openPopup({
        		"message" : quizResultMessage,
        		"header"  : ubsApp.translation["quizCorrectAnswerHeading"],
        		"headerStyle" : "text-align: center;  color: green; font-weight: 700; ",
        		"buttons":[
                		{
                			'id':"quizRightAnswer",
                            'name' : ubsApp.getTranslation("OK"),
                            'action': nextAction
                        }
                 ]

        	});  
		    $("#correctAnswers").text(quizCorrectAnswer);
  			ubsApp.raiseAudioEvent(audioElement, 'rightAnswer');
			ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, scoredMarks,totalMarks, 1, startTime, "quizScore");
	  		ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, reputationPoints,reputationPoints, 1, startTime, "quizReputationPoints");

	  }
	  else{
		  	scoredMarks = 0;
		  	if(entryPoint == "unluckyScenario"){
		  		let currentPlayerRepPoints = userArray[playerChance].getReputationPts();
		  		quizResultMessage = ubsApp.formatMessage(ubsApp.formatMessage(ubsApp.translation['quizWrongResultFromUnluckyScenario'], [reputationPoints]));
				userArray[playerChance].setReputationPts(currentPlayerRepPoints);
		  		ubsApp.openPopup({
	        		"message" : quizResultMessage,
	        		"header"  : ubsApp.translation["quizWrongAnswerHeading"],
	        		"headerStyle" : "text-align: center;  color: red; font-weight: 700; ",
	        		"buttons":[
	                		{
	                			'id':"unluckyScenarioOkButton",
	                            'name' : ubsApp.getTranslation("OK"),
	                            'action': "ubsApp.callServerClosePopup(); ubsApp.payOrGain(\'"+ scenarioName +"\');ubsApp.closeCurrentScenario(); ubsApp.callServerNextMove();"
	                        }
	                 ]

	        	});
		  	}
		  	else{	
		  		quizResultMessage = ubsApp.formatMessage(ubsApp.formatMessage(ubsApp.translation['quizWrongAnswerMessage'], [reputationPoints]));
			  	ubsApp.openPopup({
	        		"message" : quizResultMessage,
	        		"header"  : ubsApp.translation["quizWrongAnswerHeading"],
	        		"headerStyle" : "text-align: center;  color: red; font-weight: 700; ",
	        		"buttons":[
	                		{
	                			'id':"quizWrongAnswer",
	                            'name' : ubsApp.getTranslation("yes"),
	                            'action': "ubsApp.startHelp(\'"+helpPageName+"\');ubsApp.displayNextQuizQuestion(\'"+ page +"\', true);"
	                        },
	                        {
	                			'id':"quizWrongAnswer",
	                            'name' : ubsApp.getTranslation("no"),
	                            'action': "ubsApp.callServerClosePopup("+true+");ubsApp.displayNextQuizQuestion(\'"+ page +"\', true);"
	                        }
	                 ]

        		});
		  	}
 
  			ubsApp.raiseAudioEvent(audioElement, 'wrongAnswer');
  			ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, scoredMarks,totalMarks, 1, startTime, "quizScore");
	  		ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, 0,reputationPoints, 1, startTime, "quizReputationPoints");

	  	
	  }
	  ubsApp.currentPlayerContents();
	  // if(ubsApp.pages[page].templates[0].quizResult){
	  // 	ubsApp.displayResults(page);
	  // }
  }
}

ubsApp.updateAnswers = function(questionNo){
	 choiceSelected.answers[questionNo]=true;
}

ubsApp.getTotalCorrectAnswers= function(){

   let x=0;
   for(let i=0; i<choiceSelected.answers.length;i++){
     if(choiceSelected.answers[i] == true) {
        x++;
     }
	}
    return x;
}



ubsApp.luckQuizResult=function(){

	let infoPage = ubsApp.pages[choiceSelected.page].templates[0];
	let inventory = 0;
	let bankBalance =0;
	let reputationPoints = 0;
	let cash = 0;
	let correctAnswers = ubsApp.getTotalCorrectAnswers();
	for(let i=0;i<choiceSelected.answers.length;i++){
		if(choiceSelected.answers[i]==false){
		   inventory += choiceSelected.credit[i].inventory;
		   //bankBalance += choiceSelected.credit[i].bankBalance;
		   //reputationPoints += choiceSelected.credit[i].reputationPoints;
		   cash += choiceSelected.credit[i].cash;
		}
	}

	let playerCash = userArray[playerChance].getplayerScore();
	userArray[playerChance].setplayerScore(playerCash+cash);

	let playerBankBalance = userArray[playerChance].getBankBalance();
	userArray[playerChance].setBankBalance(playerBankBalance+bankBalance);

	let playerInventory = userArray[playerChance].getInventoryScore();
	userArray[playerChance].setInventoryScore(playerInventory+inventory);

	if(correctAnswers == 1){
		$("#quizResult").text(infoPage.positiveMsg);

	}else{
		$("#quizResult").text(infoPage.negativeMsg);
		}

}

ubsApp.generalQuizResult=function(page){

	let resultPage = ubsApp.pages[choiceSelected.page].templates[0];
	let inventory = 0;
	let bankBalance =0;
	let reputationPoints = 0;
	let cash = 0;

	let correctAnswers = ubsApp.getTotalCorrectAnswers();
	for(let i=0;i<choiceSelected.answers.length;i++){
		if(choiceSelected.answers[i]==true){
		   inventory += choiceSelected.credit[i].inventory;
		   bankBalance += choiceSelected.credit[i].bankBalance;
		   reputationPoints += choiceSelected.credit[i].reputationPoints;
		   cash += choiceSelected.credit[i].cash;
		}
	}
	let playerRepPoints = userArray[playerChance].getReputationPts();
	userArray[playerChance].setReputationPts(playerRepPoints+reputationPoints);
	$("#quizQuestionNumber").text("");
	if(correctAnswers === resultPage.noOfQuestions){
			ubsApp.openResultPopup({
                "message" : ubsApp.formatMessage(ubsApp.translation['quizAllCorrectAnswers'], [reputationPoints]),
                "header" : ubsApp.getTranslation("quizResultHeader"),
                "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                "imageUrl" : ubsApp.getTranslation("wowImage"),
                });
	}
	else{
			ubsApp.openResultPopup({
                "message" : ubsApp.formatMessage(ubsApp.translation['quizPartialCorrectMessage'], [reputationPoints]),
                "header" : ubsApp.getTranslation("quizResultHeader"),
                "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                });
			
	}
	ubsApp.currentPlayerContents();

	
}


ubsApp.displayResults = function(page){
	$("#quizCancel").attr("disabled", true);
	$("#quizDone").attr("disabled", false);
	if(page == "luckQuizResult"){
		ubsApp.luckQuizResult();
	}
	else if(page == "generalQuizResult"){
		ubsApp.generalQuizResult();
	}
}


//ubsApp.getChoiceTemplate = function(templateConfig, tempVar){
//	if(ubsApp.areAllChoicesSelected() == true) {
//        choiceSelected={};
//        if(templateConfig.nextPage.page){
//        	ubsApp.renderPageByName(templateConfig.nextPage.page);
//        }
//        else{
//        	ubsApp.nextMove();
//        }
//        return;
//    }
//	ubsApp.updateChoiceSelected(templateConfig);
//	if(templateConfig.display_score){
//		tempVar.html += ubsScoreTemplate(ubsApp.pages.score[0]);
//	}
//	let containerHeight = $(window).innerHeight() - 50;
//	for(let i=0; i< templateConfig.choices.length; i++)  {
//		templateConfig.choices[i].display = choiceSelected[i];
//		templateConfig.choices[i].choiceHeight = (containerHeight / templateConfig.choiceHeightFactor) + 'px';
//	}
//	templateConfig.containerHeight= $(window).innerHeight() +'px';
//  	html += ubschoiceTemplate(templateConfig);
//  	if(templateConfig.audioSrc){
//  		audioConfig = templateConfig;
//  		tempVar.html+= ubsAudioTemplate(templateConfig);
//	}
//}


//ubsApp.checkSelected= function(){
//
//   let allSelected = true;
//	$.each(choiceSelected, function(key,value){
//     if(value == true) {
//     	allSelected =  false;
//		return false;
//     }
//});
//	return allSelected;
//}