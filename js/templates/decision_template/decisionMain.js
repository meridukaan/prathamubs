ubsApp.getDecisionTemplate=function(templateConfig,tempVar){
var object={};
object.balance = userArray[playerChance].getBankBalance();
object.cash = userArray[playerChance].getplayerScore();
object.debt = userArray[playerChance].getCredit();
object.inventory = userArray[playerChance].getInventoryScore();
object.inventoryValue = (userArray[playerChance].getInventoryScore()*1000);
object.reputationPts = userArray[playerChance].getReputationPts();
object.currentPlayerName = userArray[playerChance].getplayerName();
object.gameLogo = ubsApp.getTranslation("gameLogo");
ubsApp.startRecordingTimer(templateConfig);
object = $.extend(true, templateConfig, object);
for(let i = 0; i < object.options.length; i++) {
    object.options[i]["startTime"] = templateConfig.startTime;
    object.options[i]["questionId"] = object.questionId;
}
tempVar.html+=ubsDecisionTemplate(object);
$('#templateContent').css("height","100vh");
$('#templateContent').css("width","100vw");
}

ubsApp.renderDecisonTemplate = function() {
  let checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").attr("id");
  answerselected=$("#" + checkedValue + "Amount").text();
  inventoryToBeUpdated=$("#" + checkedValue + "Inventory").text();


  clearInterval(interval);
  clearInterval(timeVar);
  this.renderPage(ubsApp.pages[ubsDecisionOptionMap[checkedValue].page]);


}

ubsApp.decisionOptions = function(reputationPts, bankBalance, startTime, questionId, insurance=false, page="", pamphlet=false, randomProfit=false)
{
	socket.emit('decisionOptionClicked', {description: "decisionOptionClicked", 
		reputationPts : reputationPts, bankBalance: bankBalance,
		startTime: startTime, questionId: questionId,
		insurance: insurance, page: page,
		pamphlet: pamphlet, randomProfit: randomProfit,
		roomCode : ubsApp.studentArray[0].room});

}
socket.on('decisionOptionsResult', function(data){
	var reputationPts = data.reputationPts;
	var bankBalance = data.bankBalance;
	var startTime = data.startTime;
	var questionId = data.questionId;
	var insurance = data.insurance;
	var page = data.page;
	var pamphlet = data.pamphlet;
	var randomProfit = data.randomProfit;
	
	console.log("Decision Question Id is : " + questionId);
    reputationPts = parseInt(reputationPts);
	let initialPlayerRepPoints = userArray[playerChance].getReputationPts();
	let totalReputationPoints = initialPlayerRepPoints+parseInt(reputationPts);
	let initialPlayerBankBalance = userArray[playerChance].getBankBalance();
	let totalPlayerBankBalance = initialPlayerBankBalance+parseInt(bankBalance);
	let decisionResultMessage = "";
	let nextAction;
	userArray[playerChance].setReputationPts(initialPlayerRepPoints+ reputationPts);
	userArray[playerChance].setBankBalance(initialPlayerBankBalance+parseInt(bankBalance));
	if(insurance == "true"){
	ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, 0,0, 1, startTime, "decisionInsuranceQuestion");
	 ubsApp.renderPageByName(page);
	}
	else{

		if(pamphlet == "true"){
			let profit = Math.floor(Math.random() * 2500) + 500;
			let playerBankBalance = userArray[playerChance].getBankBalance();
			userArray[playerChance].setBankBalance(playerBankBalance+profit);
			totalPlayerBankBalance += playerBankBalance+profit;
		
			ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, totalPlayerBankBalance,totalPlayerBankBalance, 1, startTime, "decisionBankBalanceGain");
			nextAction="ubsApp.callServerNextMove();";
			decisionResultMessage = ubsApp.formatMessage(ubsApp.translation["decisionResultMessageInCaseOfPamphletOrFestival"], [reputationPts, Math.abs(bankBalance), profit]);
		}
		else if(randomProfit == "true"){
			let profitPercentage = Math.floor(Math.random() * 50) +10;
			let playerBankBal = userArray[playerChance].getBankBalance();
			let balIncreaseAsProfit =  Math.floor((profitPercentage/100)*playerBankBal);
			totalPlayerBankBalance += balIncreaseAsProfit;
			ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, totalPlayerBankBalance,totalPlayerBankBalance, 1, startTime, "decisionBankBalanceGain");
			nextAction="ubsApp.callServerNextMove();";
			decisionResultMessage = ubsApp.formatMessage(ubsApp.translation["decisionResultMessageInCaseOfPamphletOrFestival"], [reputationPts, Math.abs(bankBalance), balIncreaseAsProfit]);
		}
		else{
			nextAction="ubsApp.callServerClosePopup();";
			if(totalReputationPoints > initialPlayerRepPoints && totalPlayerBankBalance < initialPlayerBankBalance){
				decisionResultMessage = ubsApp.formatMessage( ubsApp.translation["decisionGainReptPointsLostBalance"],[Math.abs(reputationPts), Math.abs(bankBalance)]);
				ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, reputationPts,reputationPts, 1, startTime, "decisionRptPtsGain");
				ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, bankBalance,bankBalance, 1, startTime, "decisionBankBalanceLoss");

			} 
			else if(totalReputationPoints < totalReputationPoints && totalPlayerBankBalance > initialPlayerBankBalance){
				decisionResultMessage = ubsApp.formatMessage(ubsApp.translation["decisionGainBalanceLoseRptPts"],[Math.abs(bankBalance), Math.abs(reputationPts)]);
				ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, reputationPts,reputationPts, 1, startTime, "decisionRptPtsLoss");
				ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, bankBalance,bankBalance, 1, startTime, "decisionBankBalanceGain");

			}
			else if (totalReputationPoints > initialPlayerRepPoints){
				decisionResultMessage = ubsApp.formatMessage(ubsApp.translation["decisionGainRptPts"],[Math.abs(reputationPts)]);
				ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, reputationPts,reputationPts, 1, startTime, "decisionRptPtsGain");

			}
			else if (totalReputationPoints < initialPlayerRepPoints){
				decisionResultMessage = ubsApp.formatMessage(ubsApp.translation["decisionLoseRptPts"],[Math.abs(reputationPts)]);
				ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, reputationPts,reputationPts, 1, startTime, "decisionRptPtsLoss");
			}
			else {
				decisionResultMessage = ubsApp.translation["decisionSameMessaage"];
			}
		}
		 ubsApp.openResultPopup({
        	"message" : decisionResultMessage,
        	"header" : ubsApp.translation["decisionResult"],
        	"headerStyle" : "text-align: center;  color: black; font-weight: 700; ",
        	"buttons":[
                		{
                			'id':"decisionPopup",
                            'name' : ubsApp.getTranslation("OK"),
                            'action': nextAction
                        }
                 ]
        })
	}
	


})


//Computer Player

ubsApp.playDecisionTemplate =function(decisionConfig){
    var player= userArray[playerChance];
	var correctProbability = player.getCorrectProbability();
	var number = player.getCorrectAnswered();
	var answer = ubsApp.chooseAnswer(decisionConfig, correctProbability, number);
	$("input[type=radio]").attr('disabled', true);
	$('#submitQuestion').attr('disabled', true);
	setTimeout(function(){
		$("input[type=radio]").attr('disabled', false);
 		$("input[name='"+ubsDecisionOption+"'][value='"+answer+"']").attr('checked', true);
 		$("input[type=radio]:not(input[name='"+ubsDecisionOption+"'][value='"+answer+"'])").attr('disabled', true);
 		setTimeout(function(){
 			$('#submitQuestion').attr('disabled', false);
 			$("input[type=radio]").attr('disabled', false);
 			$('#submitQuestion').trigger('click');
 		},decisionConfig.optionsTime);
  	},decisionConfig.questionTime);
}


ubsApp.chooseAnswer = function(decisionConfig, correctProbability, number){
	var totalOptions = decisionConfig.options.length;
	var optionConfig={};
	var selectRange = Math.random();
	if(selectRange<=correctProbability){
        number++;
        userArray[playerChance].setCorrectAnswered(number);
		for(let i=0;i<totalOptions; i++){
			if(decisionConfig.options[i].priority == "1"){
				return decisionConfig.options[i].optionValue;
			}
		}
	}
	else{
		 var randomPriority =(Math.floor(Math.random()*(totalOptions-1))+2);
		 for(let i=0;i<totalOptions; i++)
			{
				if(decisionConfig.options[i].priority == ""+randomPriority){
					return decisionConfig.options[i].optionValue;
			}
		}
	}
}


//Computer Player

// ubsApp.getDecisionTemplate = function(templateConfig, tempVar){
// 	tempVar.decisionConfig = templateConfig;
// 	tempVar.html += ubsDecisionTemplate(templateConfig);
// 	ubsDecisionOption = templateConfig.options[0].optionName;
// 	if(templateConfig.display_score){
// 		tempVar.html += ubsScoreTemplate(ubsApp.pages.score[0]);
// 	}
// 	if(templateConfig.score_animation_req){
// 		tempVar.flag=true;
// 	}
// 	ubsDecisionOptionMap = templateConfig.optionPageMap;
// }



