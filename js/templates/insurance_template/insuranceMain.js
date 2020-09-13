ubsApp.getInsuranceTemplate = function(templateConfig, tempVar){
	var object={};
	object.balance = userArray[playerChance].getBankBalance();
	object.cash = userArray[playerChance].getplayerScore();
	object.debt = userArray[playerChance].getCredit();
	object.inventory = userArray[playerChance].getInventoryScore();
	object.inventoryValue = (userArray[playerChance].getInventoryScore()*1000);
	object.reputationPts = userArray[playerChance].getReputationPts();
	object.currentPlayerName = userArray[playerChance].getplayerName();
    object.gameLogo = ubsApp.getTranslation("gameLogo");
	object = $.extend(true, templateConfig, object);
	tempVar.html += ubsInsuranceTemplate(templateConfig);
}


ubsApp.increasePremium = function(){
	let sum=0;
	let premium = 0;

	$("input[name='insuranceTypes']:checked").each(function(){
      premium += parseInt($(this).val());
      sum += parseInt($("input[id='sum"+$(this).attr("id") + "']").val());
    });
    document.getElementById("annualPremium").value=premium;
	document.getElementById("sumAssured").value=sum;
}

ubsApp.buyInsurance = function(page){


	let premium = parseInt($("#annualPremium").val());
	if(premium!=0){
		let sumAssured = parseInt($("#sumAssured").val());
		let e = document.getElementById("modeOfPaymentOptions");
		let option = e.options[e.selectedIndex].value;
		if(option=="cash"){
			let playerCash = userArray[playerChance].getplayerScore();
			if(playerCash>=premium){
				userArray[playerChance].setplayerScore(playerCash-premium);    //have to check if balance is low or not
			}else{
				let playerBankBalance = userArray[playerChance].getBankBalance();
				if(playerBankBalance > premium){
					userArray[playerChance].setBankBalance(playerBankBalance-premium);
				}else{
					let playerDebt = userArray[playerChance].getCredit();
					userArray[playerChance].setCredit(premium + playerDebt);
				}
			}

		}else if(option=="cheque"){
			let playerBankBalance = userArray[playerChance].getBankBalance();
			if(playerBankBalance > premium){
					userArray[playerChance].setBankBalance(playerBankBalance-premium);
			}else{
				let playerDebt = userArray[playerChance].getCredit();
				userArray[playerChance].setCredit(premium + playerDebt);
			}
		}
		userArray[playerChance].setInsurance(true);
		userArray[playerChance].setSumAssured(sumAssured);
		userArray[playerChance].setPremium(premium);

		ubsApp.pages[page].repeatforuser = false;

        //code for premium payment or set insurance to false
		ubsApp.callServerNextMove();
	}
}
