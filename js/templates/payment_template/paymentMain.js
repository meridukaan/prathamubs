ubsApp.getPayTemplate=function(templateConfig,tempVar){
    templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	tempVar.html+=ubsLuckTemplate(templateConfig);
}

ubsApp.payFromBank = function(pageName, questionId){
    socket.emit('serverPayFromBank', {
        pageName: pageName,
        questionId: questionId,
        roomCode: userArray[playerChance].getRoomCode()
    })
}

socket.on('clientPayFromBank', function(data){
    ubsApp.socketPayFromBank(data.pageName, data.questionId);
})

ubsApp.socketPayFromBank=function(pageName,questionId){
    console.log("Payment Question ID is: " + questionId)
    let initialBankBalance = userArray[playerChance].getBankBalance();
    let initialCashBalance = userArray[playerChance].getplayerScore();
    let initialReputationPoints = userArray[playerChance].getReputationPts();
    let initialInventory = userArray[playerChance].getInventoryScore();
    let deduction = 0;
    var date = new Date();
    var startTime=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var credit=ubsApp.pages[pageName].templates[0].credit;
    $.each(credit, function(key, value) {
        if(key=="bankBalance"){
            deduction = -value;
            userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+value);     
                if(userArray[playerChance].getBankBalance()<0){
                    
                    let difference=userArray[playerChance].getBankBalance();
                    userArray[playerChance].setBankBalance(0);
                    
                    
                    difference=userArray[playerChance].getInventoryScore();
                    userArray[playerChance].setInventoryScore(0);
                    /*if(userArray[playerChance].getCredit()+(difference*(-1))<=userArray[playerChance].getCreditLimit()){
                        userArray[playerChance].setCredit(userArray[playerChance].getCredit()+(difference*(-1)));
                    }
                    else{
                    }*/
                }
                
        }
        else if(key=="reputationPoints"){
            userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
            
        }
        
    });

        let message = "";
        let header = ubsApp.getTranslation("paymentResultHeader");
        // Bank Balance Compare
        if(initialBankBalance <= 0 || initialBankBalance > userArray[playerChance].getBankBalance())
        {
/*            message= message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpBankBalance"], [initialBankBalance - userArray[playerChance].getBankBalance()]);*/
            message= message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpBankBalance"], [deduction]);
            //ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, deduction,userArray[playerChance].getBankBalance(), 1, startTime, "PaymentBankBalanceDecrease");
            //console.log("Bank Balance 1");
        }
        else if(initialBankBalance < userArray[playerChance].getBankBalance())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["goodPaymentResultPopUpBankBalance"], [userArray[playerChance].getBankBalance() - initialBankBalance]);
            //ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, userArray[playerChance].getBankBalance() - initialBankBalance,[userArray[playerChance].getBankBalance(), 1, startTime, "PaymentBankBalanceIncrease");
            //console.log("Bank Balance 2");
        }

        // Cash Balance Compare
        if(initialCashBalance > userArray[playerChance].getplayerScore())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpCash"], [initialCashBalance - userArray[playerChance].getplayerScore()]);
            //ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, initialCashBalance - userArray[playerChance].getplayerScore(),userArray[playerChance].getplayerScore(), 1, startTime, "PaymentCashBalanceDecrease");
            //console.log("Cash Balance 1");
        }
        else if(initialCashBalance < userArray[playerChance].getplayerScore())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["goodPaymentResultPopUpCash"], [userArray[playerChance].getplayerScore() - initialCashBalance]);
            //ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, userArray[playerChance].getplayerScore() - initialCashBalance,userArray[playerChance].getplayerScore(), 1, startTime, "PaymentCashBalanceIncrease");
            //console.log("Cash Balance 2");
        }

        //reputation points compare
        if(initialReputationPoints > userArray[playerChance].getReputationPts())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpRepPt"], [initialReputationPoints - userArray[playerChance].getReputationPts()]);
           // ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, initialReputationPoints - userArray[playerChance].getReputationPts(),userArray[playerChance].getReputationPts(), 1, startTime, "PaymentRptPointsDecrease");
           // console.log("Rpt Points 1");
        }
        else if(initialReputationPoints < userArray[playerChance].getReputationPts())
        {
            message= message + ubsApp.formatMessage(ubsApp.translation["goodPaymentResultPopUpRepPt"], [userArray[playerChance].getReputationPts() - initialReputationPoints]);
            //ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, userArray[playerChance].getReputationPts() - initialReputationPoints,userArray[playerChance].getReputationPts(), 1, startTime, "PaymentRptPointsIncrease");
            //console.log("Rpt Points 2");
        }

        //inventory compare
        if(initialInventory > userArray[playerChance].getInventoryScore())
        {
            if (userArray[playerChance].getInventoryScore()==0 && userArray[playerChance].getBankBalance() <= 0)
            {
                message = message + ubsApp.translation["badPaymentResultPopUpInv2"];
            }
            else
            {
                message = message + ubsApp.formatMessage(ubsApp.translation["badPaymentResultPopUpInv"], [initialInventory - userArray[playerChance].getInventoryScore()]);
            }
           // ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, initialInventory - userArray[playerChance].getInventoryScore(),userArray[playerChance].getInventoryScore(), 1, startTime, "PaymentInventoryDecrease");
            //console.log("inventory 1");
        }
        else if(initialInventory < userArray[playerChance].getInventoryScore())
        {
            message = message + ubsApp.formatMessage(ubsApp.translation["goodPaymentResultPopUpInv"], [userArray[playerChance].getInventoryScore() - initialInventory]);
            //ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, userArray[playerChance].getInventoryScore() - initialInventory,userArray[playerChance].getInventoryScore(), 1, startTime, "PaymentInventoryIncrease");
            //console.log("inventory 2");
        }

         ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, 0,0, 1, startTime, "PaymentScenario");

        ubsApp.openResultPopup({
            "message" : message,
            "header" : header,
            "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
            })

}