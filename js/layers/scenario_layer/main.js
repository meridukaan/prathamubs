let ubsApp = {};
ubsApp.monopoly = {};
let monopoly = ubsApp.monopoly;
let ubsStaticTemplate;
let ubsDecisionTemplate;
let ubsDecisionOption;
let ubsDecisionOptionMap;
let wheelOfFortuneTemplate;
let ubsSuccessErrortemplate;
let ubsScoreTemplate;
let ubsPopupTemplate;
let ubsTimerTemplate;
let ubsAudioTemplate;
let ubsCalculatorTemplate;
let ubsLeaderBoardTemplate;
let ubsPurchaseTemplate;
let	ubsLuckTemplate;
let ubsPayOffTemplate;
let ubsOrdertemplate;
let ubsAdvantageCardTemplate;
let ubsQuizTemplate;
let ubsWeekSummarytemplate;
let ubsAddPlayerTempate;
let choiceSelected={};
let timeVar;
var helpScenarioOpen=false;
var numberOfWeeksDeadline=0;
var answerselected=0;       
var inventoryToBeUpdated=0;
var minimumInventoryScoreRequired=0;
ubsApp.wheelOfFortune = null;
var scenarioVideo;
var interval;				
let audioConfig = {};
var count=0;
var languageSelected="hindi";
var calculatorReq=false;
let screenHeight = $(window).height();
let screenWidth = $(window).width();

let templateName = ["static", "decision","purchase","withdrawFromBank","advantageCard","luck","pay","payOff", "insurance","transfer","wheelOfFortune", "timerTemp", "popup", "rollingDice","scratchCard","choice","audio", "score","sales", "quiz","quizStarter", "popup", "weekSummary", "addPlayer"];
let templateMap = {};
let offlinePurchaseClicked=false;
ubsApp.isAndroidEnabled=false;
ubsApp.isWebEnabled = true;
ubsApp.deviceFingerPrint = "";
ubsApp.popupConfig = {};

$(document).ready(function(){
	ubsApp.intitializeTemplates();
	ubsApp.mapTemplatetoFunction();
});


ubsApp.getTimerTempTemplate = function(templateConfig, tempVar){
	if(!userArray[playerChance].getIsComputer())
	{tempVar.html+=ubsTimerTemplate(templateConfig);
	tempVar.timerConfig=templateConfig;}
}


ubsApp.getAudioTemplate = function(templateConfig, tempVar){
	if(templateConfig.audioSrc){
		audioConfig = templateConfig;
		tempVar.html += ubsAudioTemplate(templateConfig);
	}
}

ubsApp.getScoreTemplate = function(templateConfig, tempVar){
	 if(templateConfig.score_animation_req){
		flag=true;
	 }
	tempVar.html += ubsScoreTemplate(templateConfig);
}




ubsApp.renderPage = function(page) {
	monopoly.closeLeaderBoard();
	// if(page.minimumInventoryScoreRequired){
	// 	minimumInventoryScoreRequired=page.minimumInventoryScoreRequired;
	// }
	if(page.videoLink){
		scenarioVideo=page.videoLink;
	}

	if(page.templates) {
		page=page.templates;
	}
	let html = "";
	let tempVar = {};
	tempVar.html = "";
	tempVar.salesConfig = "";
	tempVar.quizConfig = {};
	tempVar.wheelConfig = {};
	tempVar.timerConfig = {};
	tempVar.staticConfig = {};
	tempVar.decisionConfig = {};
	tempVar.scratchCardTemplateConfig = undefined;
	tempVar.flag=false;


	for(let i=0; i< page.length; i++) {
		let templateConfig = $.extend({},page[i]);
		let templateType = templateConfig.templateType;
		eval(templateMap[templateType])(templateConfig,tempVar);

	}

	if(tempVar.html) {
		$("#templateContent").empty();
		$("#templateContent").append(tempVar.html);

	}

	

	if(tempVar.wheelConfig.segments){
		tempVar.wheelConfig.animation.callbackFinished = ubsWheelOfFortune.alertPrize;
	    ubsApp.wheelOfFortune = new Winwheel(tempVar.wheelConfig, true);
	} else if (tempVar.scratchCardTemplateConfig) {
	    initScratchCard(tempVar.scratchCardTemplateConfig);
	}

	if(audioConfig.audioSrc){
		var divElement = document.getElementById(audioConfig.audioId);
		if(divElement != null) {
			playAudio(divElement);
			var audioevent = new CustomEvent('playAudio',{
					detail: audioConfig.audioSrc,
			});
			divElement.dispatchEvent(audioevent);
		}
	}

    if(Object.keys(tempVar.decisionConfig).length!=0 && userArray[playerChance].getIsComputer() ){
		ubsApp.playDecisionTemplate(tempVar.decisionConfig);
		tempVar.decisionConfig={};
    }

    if(Object.keys(tempVar.staticConfig).length!=0 && userArray[playerChance].getIsComputer() ){
    	ubsApp.playStaticTemplate(tempVar.staticConfig);
    	tempVar.staticConfig={};
	}

	if(Object.keys(tempVar.timerConfig).length != 0 && !userArray[playerChance].getIsComputer()	){
		ubsApp.startTimer(tempVar.timerConfig);
		tempVar.timerConfig={};
	}

	if(Object.keys(tempVar.salesConfig).length != 0){
		ubsApp.startTimer(tempVar.salesConfig);
	}


	// if(answerselected!=0)
	// {
	// 	ubsApp.addScore(parseInt(answerselected));
	// 	document.getElementById("lastBalanceContent").innerHTML="₹"+userArray[playerChance].getplayerScore();
	// 	answerselected=0;
	// }	
	// if(inventoryToBeUpdated!=0)
	// {
	// 	ubsApp.addInventory(parseInt(inventoryToBeUpdated));
	// 	document.getElementById("inventoryContent").innerHTML=userArray[playerChance].getInventoryScore()+"%";
	// 	//ubsApp.animate_score(parseInt(inventoryToBeUpdated),document.getElementById("inventoryContent"));
	// 	inventoryToBeUpdated=0;
	// }

	/*if($('#headId').length > 0) {
		if(flag){
				ubsApp.animate_score(answerselected);
		}
		document.getElementById("headId").innerHTML=ubsApp.getScore();
	}*/
}
    
ubsApp.mapTemplatetoFunction = function(){
    templateMap={};
	for(let i=0; i<templateName.length; i++){
	   templateMap[templateName[i]]= "ubsApp.get"+templateName[i].charAt(0).toUpperCase()+templateName[i].substring(1)+"Template";
	}
}

ubsApp.checkPageorBoard= function(page,amount,hideScenarios){
	clearInterval(timeVar);
	if(hideScenarios == "true"){
        ubsApp.nextMove();
	}
	else {
		ubsApp.renderPageByName(page);/*,amount);*/
	}
}



ubsApp.renderPageByName = function(pageName)/*,amount)*/ {
	clearInterval(interval);

	/*if(amount === undefined || amount === null|| amount.length===0){	

	}
	else{
		ubsApp.animate_score(amount);
	}*/
	pageName=pageName.trim();
	this.renderPage(ubsApp.pages[pageName]);
}



ubsApp.intitializeTemplates = function() {
	ubsStaticTemplate = Template7.compile(ubsApp.staticTemplate);
	ubsDecisionTemplate = Template7.compile(ubsApp.decisionTemplate);
	wheelOfFortuneTemplate = Template7.compile(ubsApp.wheelOfFortuneTemplate);
	rollingDiceTemplate = Template7.compile(ubsApp.rollingDiceTemplate);
	scratchCardTemplate = Template7.compile(ubsApp.scratchCard);
	ubschoiceTemplate = Template7.compile(ubsApp.choiceTemplate);
	ubsScoreTemplate=Template7.compile(ubsApp.scoreTemplate);
	ubsTimerTemplate = Template7.compile(ubsApp.timerTemplate);
	ubsAudioTemplate = Template7.compile(ubsApp.audioTemplate);
	ubsBoardtemplate = Template7.compile(ubsApp.boardTemplate);
	ubsQuizTemplate = Template7.compile(ubsApp.quizTemplate);
	ubsAdvantageCardTemplate=Template7.compile(ubsApp.advantageCardTemplate);
	ubsWeekSummarytemplate=Template7.compile(ubsApp.weekSummaryTemplate);
	// ubsCalculatorTemplate=Template7.compile(ubsApp.calculatorTemplate);
	ubsLeaderBoardTemplate=Template7.compile(ubsApp.leaderBoardTemplate);
	ubsPurchaseTemplate=Template7.compile(ubsApp.purchaseTemplate);
	ubsLuckTemplate=Template7.compile(ubsApp.luckyUnluckyTemplate);
	ubsPayOffTemplate=Template7.compile(ubsApp.payOffTemplate);
	ubsOrdertemplate = Template7.compile(ubsApp.salesTemplate);
	ubsInsuranceTemplate = Template7.compile(ubsApp.insuranceTemplate);
	ubsPopupTemplate = Template7.compile(ubsApp.popUpTemplate);
	ubsAddPlayerTemplate = Template7.compile(ubsApp.addPlayerTemplate);
	ubsAddPlayerTemplateonWeb = Template7.compile(ubsApp.addPlayerTemplateonWeb);

}




ubsApp.openCalculator=function(){
	document.write("Calculator Opened");
}




ubsApp.startTimer=function(temp){
	var timeleft = temp.time;
	

    timeVar = setInterval(function(){
		if(document.getElementById(temp.divID))
		document.getElementById(temp.divID).innerHTML = timeleft;
		if(!helpScenarioOpen){
			timeleft--;
		}

	    if(timeleft === 0 ){
	        clearInterval(timeVar);
	        ubsApp.salesTimeOut(temp);
	        choiceSelected={};
//	        ubsApp.nextMove();
	    }
	},1000);

}

ubsApp.stopTimer = function() {
    clearInterval(timeVar);
}




ubsApp.closeCurrentScenario=function(){
    $('#resultBackground').hide();
	// $('#monopolyBase').css("z-index",0)
	// $('#templateContent').css("z-index",0)
	$('#templateContent').css("height",0+'px')
	document.getElementById("templateContent").innerHTML="";
	document.getElementById("templateContent").style["background-color"] = "rgb(105,105,105)";
	 document.getElementById("templateContent").style.opacity="0.95";
	$('#rollIt').attr('disabled',false);
    ubsApp.openNextMoveAfterPayOff = false;
    ubsApp.openNextMoveAfterTransfer = false;

}

ubsApp.startCurrentScenario=function(){
    $('#resultBackground').show();
	 $('#monopolyBase').css("z-index",-10)
	 $('#templateBase').css("z-index",10)
	
	document.getElementById("templateContent").style.opacity="0.95";
	
	$('#templateContent').css("height",(screenHeight)+'px')
	$('#templateContent').css("width",(screenWidth)+'px')
}


ubsApp.translateScenarios=function(){
	var string=JSON.stringify(ubsApp.pages);
    var pattern = /\{{([^}]+)\}}/g;

	var resultString = string.replace( pattern, function replacer(match){
        return ubsApp.getTranslation(match.substring(2,match.length - 2));
    } );
//	while(string.indexOf("{{")>=0){
//		let translationKey= string.substring(string.indexOf("{{") + 2,string.indexOf("}}",string.indexOf("{{")));//string.substring(string.indexOf("{{")+2,string.indexOf("}}"));
//
//		let stringToBeReplaced="{{"+translationKey+"}}";
//		string=string.replace(stringToBeReplaced,ubsApp.translation[translationKey]);
//	}
	ubsApp.pages=JSON.parse(resultString);
	string=JSON.stringify(monopoly.pages);
	var resultString = string.replace( pattern, function replacer(match){
            return ubsApp.getTranslation(match.substring(2,match.length - 2));
        } );
//	while(string.indexOf("{{")>=0){
//		let translationKey= string.substring(string.indexOf("{{") + 2,string.indexOf("}}",string.indexOf("{{")));//string.substring(string.indexOf("{{")+2,string.indexOf("}}"));
//
//		let stringToBeReplaced="{{"+translationKey+"}}";
//		string=string.replace(stringToBeReplaced,ubsApp.translation[translationKey]);
//	}
	
	monopoly.pages=JSON.parse(resultString);
}


ubsApp.openPopup = function(config) {

    $('#popupBackground').show();
     let showImage = false;
        if(config.imageUrl) {
            showImage = true;
        }
   ubsApp.popupConfig = $.extend({
    "showCloseButton" : true,
    "imageStyle":"",
    "showBorder" : true,
    "backgroundColor" :"white",
    "messageStyle" : "text-align: center;     padding-top: 19px;",
   }, config);

   ubsApp.popupConfig.showImage = showImage;
   ubsApp.startHelp("generalPopUp");
}

ubsApp.closePopup = function(config, doNextMove=true) {

   if(ubsApp.isResultPopUpOpen && config) {
        $('#popupBackground').hide();
        ubsApp.closeHelp();
   } 
   else if (ubsApp.isResultPopUpOpen){
        ubsApp.closeResultPopup(doNextMove);
        ubsApp.isResultPopUpOpen = false;
   }
   else {
        $('#popupBackground').hide();
        ubsApp.closeHelp();
   }

}

// Give key imageUrl to pass a image
ubsApp.openResultPopup = function(config) {
    $('#resultBackground').show();
    let showImage = false;
    if(config.imageUrl) {
        showImage = true;
    }
   ubsApp.popupConfig = $.extend({
    "showCloseButton" : true,
    "imageStyle":"",
    "showBorder" : true,
    "backgroundColor" :"white",
     "messageStyle" : "text-align: center;     padding-top: 19px;",

   }, config);
   ubsApp.popupConfig.showImage = showImage;
   ubsApp.renderPageByName("generalPopUp");
   ubsApp.isResultPopUpOpen = true;

}

ubsApp.closeResultPopup = function(doNextMove=true) {
   $('#resultBackground').hide();

   if(ubsApp.openedTransferScenario && (ubsApp.openNextMoveAfterTransfer || ubsApp.openNextMoveAfterPayOff)) {
       ubsApp.nextMove();
       }
    else if (!ubsApp.openedTransferScenario ) {
        ubsApp.nextMove();
   }
   else {
    ubsApp.closeCurrentScenario();
    ubsApp.openNextMoveAfterPayOff = false;
    ubsApp.openNextMoveAfterTransfer = false;
    ubsApp.openedTransferScenario = false;


   }
}

ubsApp.updateScoreInDB = function (playerStudentId, scenarioquestionId, scoredmarks, totalmarks, questionlevel, scenarioStartTime, scoreLabel){
	if(ubsApp.isAndroidEnabled){
		Android.addScore(playerStudentId,questionId,scoredMarks, totalMarks, level, startTime,label);
	}

		if(ubsApp.isWebEnabled)
	{
		var scoreObject = {
			studentId: playerStudentId,
			questionId: scenarioquestionId,
			scoredMarks:scoredMarks,
			totalMarks: totalMarks,
			level: questionLevel,
			startTime: scenarioStartTime,
			label: scoreLabel

		} 
		$.ajax({
        	url: "/api/ScorePush/ScorePushData",
  			type: "post",
  			dataType:"json",
  			contentType:"application/json",
  			data: JSON.stringify(scoreObject),
  			success : function(data){
    			console.log(data);
   			}
  		})
	}
	
}

ubsApp.raiseAudioEvent =function(divElement, eventName, audioSrc){
      var audioSrc;
      if(!audioSrc){
      	switch(eventName){
	      	case 'moveToken':
	      		audioSrc =  'audio/02_TokenMove.mp3';
	      		break;
	      	case 'rollingDice':
	      		audioSrc = 'audio/01_Dice.mp3';
	      		break;
	      	case 'rightAnswer':
	      		audioSrc = 'audio/04_CorrectAnswer.mp3';
	      		break;
	      	case 'wrongAnswer':
	      	case 'timeOut':
	      		audioSrc = 'audio/05_WrongAnswer.mp3';
	      		break;
	      	case 'congratulations':
	      		audioSrc = 'audio/11_Congratulations.mp3';
	      		break;
	      	case 'splashScreenAudio':
	      		audioSrc = 'audio/10_FlashScreen.mp3';
	      		break;
	      	case 'saleEnd':
	      		audioSrc = 'audio/06_SaleEnd.mp3';
	      		break;
	      	case 'spaceLanding':
	      		audioSrc = 'audio/03_SpaceLanding.mp3';
	      		break;
	      	case 'nextPlayer':
	      		audioSrc = 'audio/09_NextPlayerTurn.mp3';
	      		break;
      	}
      }

      if(divElement != null) {
        playAudio(divElement);
        var audioevent = new CustomEvent('playAudio',{
            detail: audioSrc,
        });
        divElement.dispatchEvent(audioevent);
      }
}

ubsApp.formatMessage = function(string, replacements){
    return string.replace(/\{(\d+)\}/g, function() {
        return replacements[arguments[1]];
    });

    // Or, if prototype code above...
    String.format.apply(string, replacements);
}


ubsApp.initializeUbsPages = function() {
    ubsApp.pages= {
    };

    ubsApp.pages=$.extend(ubsApp.pages, ubsApp.decisionInsurancePage);
    ubsApp.pages=$.extend(ubsApp.pages, ubsApp.salesConfig);
    ubsApp.pages=$.extend(ubsApp.pages, ubsApp.decisionConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.transferToBankConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.payOffConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.purchaseConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.paymentConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.luckConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.advantageCardConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.sideScoreBoardConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.withdrawFromBankConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.helpConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.quizConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.quizStarterConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.successErrorConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.weekSummaryConfig);
    ubsApp.pages=$.extend(ubsApp.pages,ubsApp.addPlayerConfig);
}

ubsApp.startRecordingTimer = function(templateConfig){
	var date = new Date();
	templateConfig.startTime = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

// ubsApp.animate_score=function(amount){


// 	ubsApp.addScore(parseInt(amount));
//     var sc=userArray[playerChance].getplayerScore();
//     var target_score=sc+parseInt(amount);
//     var element=document.getElementById("lastBalanceContent");

//     if(amount<0)
//     {

//         interval=window.setInterval(function () {
//         sc = sc-1;
//         element.innerHTML = "Rs."+sc;
//         if(sc==target_score)
//             clearInterval(interval);
//         }, parseInt(amount)/1000000);
//     }
//     else if(amount>0)
//     {

//             interval=window.setInterval(function () {
//             sc = sc+1;
//             element.innerHTML = "Rs."+sc;
//             if(sc==target_score)
//                 clearInterval(interval);
//             }, parseInt(amount)/1000000);
//     }

// 	element.innerHTML=userArray[playerChance].getplayerScore();

// }

// ubsApp.animateMoney=function(amount){

//     var sc=userArray[playerChance].getplayerScore();
//     var target_score=sc+parseInt(amount);
// 	var element=document.getElementById("lastBalanceContent");
// 	var temp=amount;
//     if(amount<0)
//     {

//         interval=window.setInterval(function () {
//         sc = sc-1;
// 		if(sc>target_score){
// 			userArray[playerChance].setplayerScore(target_score);
// 			clearInterval(interval);
// 		}
// 		element.innerHTML = "Rs."+target_score;
//         }, target_score/1000000);
//     }
//     else if(amount>0)
//     {

//             interval=window.setInterval(function () {
//             sc = sc+1;

// 			if(sc>target_score){
// 				userArray[playerChance].setplayerScore(target_score);
// 				clearInterval(interval);
// 			}
// 			element.innerHTML = "Rs."+target_score;
//             }, target_score/1000000);
//     }
//     //ubsApp.addScore(parseInt(amount));
// 	//element.innerHTML=userArray[playerChance].getplayerScore();
// }








// ubsApp.generateVideo=function(){
// 	var videoConfiguration={};
// 	videoConfiguration.message=scenarioVideo;
// 	console.log(videoConfiguration.message);
// 	videoConfiguration.msg_style="z-index:100;"

// 	document.getElementById("templateBase").innerHTML+=ubsPopupTemplate(videoConfiguration);
// 	$('#helpButton').attr('disabled',false);
// }
