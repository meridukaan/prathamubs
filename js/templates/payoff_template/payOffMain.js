ubsApp.getPayOffTemplate=function(templateConfig,tempVar){
	var object={};
	
	object.color=userArray[playerChance].getplayerColor();
	object.cash=userArray[playerChance].getplayerScore();
	object.bankBalance=userArray[playerChance].getBankBalance();
	object.debt=userArray[playerChance].getCredit();
	object.payOff="true";
	if(languageSelected=="hindi"){
		object.hindi=true;
	}
		ubsApp.openedTransferScenario = true;
	templateConfig=$.extend(templateConfig,object);
	templateConfig.openNextMove = ubsApp.openNextMoveAfterPayOff;
	tempVar.html+=ubsPayOffTemplate(templateConfig);
	//ubsApp.openNextMoveAfterPayOff = false;
}

socket.on('clientPayDebt',function(data){
	var questionId=data.questionId;
	console.log("Pay Off ID is : " + questionId);
	document.getElementById("result").innerHTML="";
	var date = new Date();
	var startTime=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
   	var amountEntered=document.getElementById("debtPaymentText").value;
	if(userArray[playerChance].getCredit()>0){
		if(amountEntered && amountEntered <= userArray[playerChance].getCredit()){
				var dropDown=document.getElementById("payOffDropDown");
				var paymentMode=dropDown.options[dropDown.selectedIndex].value;
				if(paymentMode=="cash"){
					if(amountEntered<=userArray[playerChance].getplayerScore()){
						userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()-amountEntered);
						userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+3);
						userArray[playerChance].setCredit(userArray[playerChance].getCredit()-amountEntered);
						ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,amountEntered, 0,0, startTime,"payDebt,Cash");
						if(ubsApp.isMultiplayerEnabled)
						{
							ubsApp.storePlayerDetailsOnServer(userArray[playerChance],"payOffDebt");
						}
						ubsApp.currentPlayerContents();
						ubsApp.closeCurrentScenario();
						if(userArray[playerChance].getCredit()==0){
							userArray[playerChance].setPayOffDeadline(-1);
						}

                        ubsApp.openResultPopup({
                                    "message" : ubsApp.getTranslation("debtPaidSuccessMsg").replace("{{debtAmount}}",amountEntered),
                                    "header" : ubsApp.getTranslation("SUCCESS"),
                                    "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                                    "buttons":[
                                        {
                                            'id':"closePopupButton",
                                            'name' : ubsApp.getTranslation("CLOSE"),
                                            'action': "ubsApp.callServerClosePopup();"
                                        }
                                    ]
                     });
					}
					else{
						document.getElementById("result").innerHTML=ubsApp.translation["moreCash"];		
					}
				}
				else if(paymentMode=="cheque"){
					if(amountEntered<=userArray[playerChance].getBankBalance()){
						userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()-amountEntered);
						userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+3);
						userArray[playerChance].setCredit(userArray[playerChance].getCredit()-amountEntered);
						ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,amountEntered, 0,0, startTime,"payDebt,cheque");
						if(ubsApp.isMultiplayerEnabled)
						{
							ubsApp.storePlayerDetailsOnServer(userArray[playerChance],"payOffDebt");
						}
						ubsApp.currentPlayerContents();
						if(userArray[playerChance].getCredit()==0){
							userArray[playerChance].setPayOffDeadline(-1);
						}
						ubsApp.closeCurrentScenario();
						ubsApp.openResultPopup({
                                    "message" : ubsApp.getTranslation("debtPaidSuccessMsg").replace("{{debtAmount}}",amountEntered),
                                    "header" : ubsApp.getTranslation("SUCCESS"),
                                    "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                                    "buttons":[
                                        {
                                            'id':"closePopupButton",
                                            'name' : ubsApp.getTranslation("CLOSE"),
                                            'action': "ubsApp.callServerClosePopup();"
                                        }
                                    ]
                     });
					}
					else{
						document.getElementById("result").innerHTML=ubsApp.translation["bankBalance"];		
					}
				}



			
		}

		else{
			document.getElementById("result").innerHTML=ubsApp.translation["enterValidAmount"];
		}
		
	}
	else{
			document.getElementById("result").innerHTML=ubsApp.translation["noDebt"]; //break;
	}
})

ubsApp.payDebt=function(questionId){
	socket.emit('serverPayDebt',{
		description : "This is the Pay Debt Method",
		roomCode : ubsApp.studentArray[playerChance].room,
		questionId : questionId
	})
}

ubsApp.modeOfPayment = function(value){
	socket.emit('serverPayOffDropDown',{
		dropDownValue : value,
		roomCode : ubsApp.studentArray[0].room
	})
}

socket.on('clientPayOffDropDown',function(data){
	var selectedValue = document.getElementById("payOffDropDown");
	selectedValue.value = data.dropDownValue;
})

ubsApp.openPayOffScenario=function(openNextMove = false){
	socket.emit('serverPayOffScenario',{
		description: "This is payOff Scenario method", 
		roomCode : ubsApp.studentArray[0].room,
		openNextMove : openNextMove
	})
}

socket.on('clientPayOffScenario',function(data){
	var openNextMove = data.openNextMove;
	ubsApp.startCurrentScenario();
	ubsApp.openNextMoveAfterPayOff = openNextMove;
	ubsApp.openedTransferScenario = true;
	ubsApp.renderPageByName("PayOffScenario");
})