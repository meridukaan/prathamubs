ubsApp.getLuckTemplate = function (templateConfig, tempVar) {
    if (templateConfig.negative) {
        templateConfig.payTitle = ubsApp.translation["payTitle"];

    }
    else {
        templateConfig.gainTitle = ubsApp.translation["gainTitle"];
    }

    templateConfig.hasAdvantageCard = userArray[playerChance].getAdvantageCardNumber() > 0 ? true : false;
    templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
    tempVar.html += ubsLuckTemplate(templateConfig);
}
ubsApp.socketLuckPaymentQuiz = function (page) {
    socket.emit('serverLuckPaymentQuiz', {
        description: "emitting luck payment quiz to server",
        page: page,
        roomCode: userArray[playerChance].getRoomCode()
    });
}

socket.on('clientLuckPaymentQuiz', function (data) {
    ubsApp.luckPaymentQuiz(data.page);
})

ubsApp.luckPaymentQuiz = function (page) {
    //luckTakeQuizPopupMessage
    ubsApp.openPopup({
        "message": ubsApp.translation["luckTakeQuizPopupMessage"],
        "header": ubsApp.translation["takeQuizTitle"],
        "headerStyle": "text-align: center;  color: green; font-weight: 700; ",
        "buttons": [
            {
                'id': "luckTakeQuizPopup",
                'name': ubsApp.getTranslation("OK"),
                'action': "ubsApp.callServerClosePopup();ubsApp.renderLuckQuizQuestion(\'" + page + "\')"
            }
        ]

    });
}


ubsApp.renderLuckQuizQuestion = function (page) {
    console.log("inside render luck quiz");
    ubsApp.emptyQuizQuestions();
    let config = ubsApp.pages[page].templates[0];
    let noOfQuestions = 1;
    choiceSelected.page = page;
    ubsApp.initializeQuizQuestions(0, config.credit);
    ubsApp.nextPlayerOnQuizClose = true;
    let quizPage = ubsApp.findQuizPage(config.category);
    quizPage.onClickPage.nextPage = "luckQuizResult";    //quizPage = resultPage
    quizPage.noOfQuestions = noOfQuestions;
    quizPage.entryPoint = "unluckyScenario";
    quizPage.luckScenarioName = page;
    ubsApp.pages[quizPage.onClickPage.nextPage].templates[0].noOfQuestions = noOfQuestions;
    ubsApp.pages[quizPage.pageName].templates[0].entryPoint = "unluckyScenario";
    ubsApp.pages[quizPage.pageName].templates[0].luckScenarioName = page;
    socket.emit('serverQuizPage', {
        description : "serverQuizPage called",
        quizPage : quizPage.pageName,
        roomCode : userArray[playerChance].getRoomCode()
    })
}

socket.on('clientQuizPage', function(data){
    console.log("inside socket quiz page and quiz page is  : "+ data.quizPage);
    ubsApp.renderFirstQuizPage(data.quizPage);
})

ubsApp.findQuizPage = function (category) {
    var filteredObjs = [];
    var quizConfig = ubsApp.quizConfig;
    var quizCategory = category;
    if (!quizCategory) {
        quizCategory = "General";
    }
    for (var quizConfigTemplate in quizConfig) {
        if (quizConfig[quizConfigTemplate].templates[0].category == quizCategory.toLowerCase()) {
            filteredObjs.push(quizConfig[quizConfigTemplate]);
        }
    }
    if (filteredObjs.length == 0) {
        for (var quizConfigTemplate in quizConfig) {
            if (quizConfig[quizConfigTemplate].templates[0].category == "general") {
                filteredObjs.push(quizConfig[quizConfigTemplate]);
            }
        }
    }

    var quizRandomNumber = Math.floor(Math.random() * filteredObjs.length);
    return filteredObjs[quizRandomNumber].templates[0];
}

ubsApp.payFromBank = function () {
    console.log("------------------PAY FROM BANK");
    // $.each(credit, function(index, val) {
    //     $.each(credit[index], function(key, value){
    //         if(key=="inventory"){
    //             userArray[playerChance].setInventoryScore(userArray[playerChance].getInventoryScore()+(value/1000));
    //         }
    //         else if(key=="bankBalance"){
    //             userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+value);
    //             if(userArray[playerChance].getBankBalance()<0){
    //                    userArray[playerChance].setBankBalance(0);
    //                 }
    //         }
    //         else if(key=="cash"){
    //             userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()+value);
    //             if(userArray[playerChance].getplayerScore()<0)
    //             {
    //                 userArray[playerChance].setplayerScore(0);
    //             }
    //         }
    //         else if(type=="reputation"){
    //                 userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
    //                 if(userArray[playerChance].getReputationPts()<0)
    //                 {
    //                     userArray[playerChance].setReputationPts(0);
    //                 }
    //         }
    //     });
    // });
    // if(type=="inventory"){
    //     userArray[playerChance].setInventoryScore(userArray[playerChance].getInventoryScore()+(value/1000));
    // }
    // else if(type=="bankBalance"){

    //     userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+value);
    //     if(userArray[playerChance].getBankBalance()<0){
    //         userArray[playerChance].setBankBalance(0);
    //     }
    // }
    // else if(type=="cash"){
    //     userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()+value);
    //     if(userArray[playerChance].getplayerScore()<0)
    //     {
    //         userArray[playerChance].setplayerScore(0);
    //     }
    // }
    // else if(type=="reputation"){
    //     userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
    //     if(userArray[playerChance].getReputationPts()<0)
    //     {
    //         userArray[playerChance].setReputationPts(0);
    //     }
    // }
}

ubsApp.socketPayOrGain = function(pageName, questionId){
    socket.emit('serverPayOrGain',{
        pageName : pageName,
        questionId : questionId,
        roomCode : userArray[playerChance].getRoomCode()
    })
}

socket.on('clientPayOrGain', function(data){
    ubsApp.payOrGain(data.pageName, data.questionId);
})

ubsApp.payOrGain = function (pageName, questionId) {
    console.log("Luck Question ID is: " + questionId);
    let initialBankBalance = userArray[playerChance].getBankBalance();
    let initialCashBalance = userArray[playerChance].getplayerScore();
    let initialReputationPoints = userArray[playerChance].getReputationPts();
    let initialInventory = userArray[playerChance].getInventoryScore();

    let isNegativeInvVal = false;
    let isNegativeBankBalVal = false;
    let isNegativeCashVal = false;
    let isNegativeRepPtVal = false;
    var date = new Date();
    var startTime = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var credit = ubsApp.pages[pageName].templates[0].credit;
    console.log(credit);
    $.each(credit, function (key, value) {
        if (key == "inventory") {
            if (value == "full") {
                value = -userArray[playerChance].getInventoryScore();
            }
            else if (value == "cash") {
                value = -userArray[playerChance].getplayerScore();
            }

            if (value < 0) {
                isNegativeInvVal = true;
            }
            var newInventoryLevel = parseFloat(parseFloat(userArray[playerChance].getInventoryScore()) + (value / 1000));
            userArray[playerChance].setInventoryScore(newInventoryLevel);
            if (userArray[playerChance].getInventoryScore() < 0) {
                done = false;
                let difference = userArray[playerChance].getInventoryScore() * (1000);
                userArray[playerChance].setInventoryScore(0);

                userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance() + difference);
                if (userArray[playerChance].getBankBalance() < 0) {
                    userArray[playerChance].setBankBalance(0);
                    difference = userArray[playerChance].getBankBalance();
                    userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore() + difference);
                    if (userArray[playerChance].getplayerScore() < 0) {
                        difference = userArray[playerChance].getplayerScore();
                        userArray[playerChance].setplayerScore(0);
                        if (userArray[playerChance].getCredit() + (difference * -1) <= userArray[playerChance].getCreditLimit()) {
                            userArray[playerChance].setCredit(userArray[playerChance].getCredit() + (difference * -1));
                        }
                        else {
                            userArray[playerChance].setCredit(userArray[playerChance].getCreditLimit());
                        }
                    }
                }
            }


        }
        else if (key == "insurance") {
            if (userArray[playerChance].getInsurance()) {
                console.log("Insurance REquired");

            }

        }
        else if (key == "bankBalance") {
            if (value == "full") {
                value = -userArray[playerChance].getBankBalance();
            }

            if (value < 0) {
                isNegativeBankBalVal = true;
            }
            userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance() + value);
            if (userArray[playerChance].getBankBalance() < 0) {
                done = false;
                let difference = userArray[playerChance].getBankBalance();
                userArray[playerChance].setBankBalance(0);
                userArray[playerChance].setInventoryScore(userArray[playerChance].getInventoryScore() + difference);
                if (userArray[playerChance].getInventoryScore() < 0) {
                    difference = userArray[playerChance].getInventoryScore();
                    userArray[playerChance].setInventoryScore(0);
                    userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore() + difference);
                    if (userArray[playerChance].getplayerScore() < 0) {
                        difference = userArray[playerChance].getplayerScore();
                        userArray[playerChance].setplayerScore(0);
                        if (userArray[playerChance].getCredit() + (difference * -1) <= userArray[playerChance].getCreditLimit()) {
                            userArray[playerChance].setCredit(userArray[playerChance].getCredit() + (difference * -1));
                        }
                        else {
                            userArray[playerChance].setCredit(userArray[playerChance].getCreditLimit());
                        }
                    }
                }
            }



        }
        else if (key == "cash") {
            if (value == "full") {
                value = -userArray[playerChance].getplayerScore();
            }

            if (value < 0) {
                isNegativeCashVal = true;
            }

            userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore() + value);
            if (userArray[playerChance].getplayerScore() < 0) {
                difference = userArray[playerChance].getplayerScore();
                userArray[playerChance].setplayerScore(0);

                //new

                userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance() + difference);
                if (userArray[playerChance].getBankBalance() < 0) {
                    done = false;
                    let difference = userArray[playerChance].getBankBalance();
                    userArray[playerChance].setBankBalance(0);
                    userArray[playerChance].setInventoryScore(userArray[playerChance].getInventoryScore() + difference);
                    if (userArray[playerChance].getInventoryScore() < 0) {
                        difference = userArray[playerChance].getInventoryScore();
                        userArray[playerChance].setInventoryScore(0);
                        if (userArray[playerChance].getCredit() + (difference * -1) <= userArray[playerChance].getCreditLimit()) {
                            userArray[playerChance].setCredit(userArray[playerChance].getCredit() + (difference * -1));
                        }
                        else {
                            userArray[playerChance].setCredit(userArray[playerChance].getCreditLimit());
                        }

                    }
                }

            }

        }
        else if (key == "reputationPoints") {
            if (value < 0) {
                isNegativeRepPtVal = true;
            }
            userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts() + value);
            if (userArray[playerChance].getReputationPts() < 0) {
                userArray[playerChance].setReputationPts(0);
            }

        }

    });

    let message = "";
    let header = "";
    // Bank Balance Compare
    if (isNegativeBankBalVal || initialBankBalance > userArray[playerChance].getBankBalance()) {
        header = ubsApp.getTranslation("badLuckResultHeader");
        message = ubsApp.formatMessage(ubsApp.translation["badLuckResultPopUpBankBalance"], [initialBankBalance - userArray[playerChance].getBankBalance()]);
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, initialBankBalance - userArray[playerChance].getBankBalance(), userArray[playerChance].getBankBalance(), 1, startTime, "LuckyUnluckyBankBalanceDecrease");
        console.log("Bank Balance 1");
    }
    else if (initialBankBalance < userArray[playerChance].getBankBalance()) {
        header = ubsApp.getTranslation("goodLuckResultHeader");
        message = ubsApp.formatMessage(ubsApp.translation["goodLuckResultPopUpBankBalance"], [userArray[playerChance].getBankBalance() - initialBankBalance]);
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, userArray[playerChance].getBankBalance() - initialBankBalance, userArray[playerChance].getBankBalance(), 1, startTime, "LuckyUnluckyBankBalanceIncrease");
        console.log("Bank Balance 2");
    }

    // Cash Balance Compare
    if (isNegativeCashVal || initialCashBalance > userArray[playerChance].getplayerScore()) {
        header = ubsApp.getTranslation("badLuckResultHeader");
        message = ubsApp.formatMessage(ubsApp.translation["badLuckResultPopUpCash"], [initialCashBalance - userArray[playerChance].getplayerScore()]);
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, initialCashBalance - userArray[playerChance].getplayerScore(), userArray[playerChance].getplayerScore(), 1, startTime, "LuckyUnluckyCashDecrease");
        console.log("Cash Balance 1");
    }
    else if (initialCashBalance < userArray[playerChance].getplayerScore()) {
        header = ubsApp.getTranslation("goodLuckResultHeader");
        message = ubsApp.formatMessage(ubsApp.translation["goodLuckResultPopUpCash"], [userArray[playerChance].getplayerScore() - initialCashBalance]);
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, userArray[playerChance].getplayerScore() - initialCashBalance, userArray[playerChance].getplayerScore(), 1, startTime, "LuckyUnluckyCashIncrease");
        console.log("Cash Balance 2");
    }

    //reputation points compare
    if (isNegativeRepPtVal || initialReputationPoints > userArray[playerChance].getReputationPts()) {
        header = ubsApp.getTranslation("badLuckResultHeader");
        message = ubsApp.formatMessage(ubsApp.translation["badLuckResultPopUpRepPt"], [initialReputationPoints - userArray[playerChance].getReputationPts()]);
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, initialReputationPoints - userArray[playerChance].getReputationPts(), userArray[playerChance].getReputationPts(), 1, startTime, "LuckyUnluckyRptPointsDecrease");
        console.log("Rpt points 1");
    }
    else if (initialReputationPoints < userArray[playerChance].getReputationPts()) {
        header = ubsApp.getTranslation("goodLuckResultHeader");
        message = ubsApp.formatMessage(ubsApp.translation["goodLuckResultPopUpRepPt"], [userArray[playerChance].getReputationPts() - initialReputationPoints]);
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, userArray[playerChance].getReputationPts() - initialReputationPoints, userArray[playerChance].getReputationPts(), 1, startTime, "LuckyUnluckyRptPointsIncrease");
        console.log("Rpt points 2");
    }

    //inventory compare
    if (isNegativeInvVal || initialInventory > userArray[playerChance].getInventoryScore()) {
        header = ubsApp.getTranslation("badLuckResultHeader");
        message = ubsApp.formatMessage(ubsApp.translation["badLuckResultPopUpInv"], [initialInventory - userArray[playerChance].getInventoryScore()]);
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, initialInventory - userArray[playerChance].getInventoryScore(), userArray[playerChance].getInventoryScore(), 1, startTime, "LuckyUnluckyInventoryDecrease");
        console.log("inventory points 1");
    }
    else if (initialInventory < userArray[playerChance].getInventoryScore()) {
        header = ubsApp.getTranslation("goodLuckResultHeader");
        message = ubsApp.formatMessage(ubsApp.translation["goodLuckResultPopUpInv"], [userArray[playerChance].getInventoryScore() - initialInventory]);
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, userArray[playerChance].getInventoryScore() - initialInventory, userArray[playerChance].getInventoryScore(), 1, startTime, "LuckyUnluckyInventoryIncrease");
        console.log("inventory points 1");
    }

    //ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, 0,0, 1, startTime, "LuckyUnluckyScenario");

    ubsApp.currentPlayerContents();
    ubsApp.openResultPopup({
        "message": message,
        "header": header,
        "headerStyle": "text-align: center;  color: black; font-weight: 700;",
    })

}

ubsApp.useOneAdvantageCard = function () {
    let header = ubsApp.getTranslation("redeemAdvantageCardHeader");
    if (userArray[playerChance].getAdvantageCardNumber() > 0) {
        userArray[playerChance].setAdvantageCardNumber(-1);
        let cardNumber = userArray[playerChance].getAdvantageCardNumber();
        let message = ubsApp.formatMessage(ubsApp.translation["redeemAdvantageCardMessage"], [cardNumber]);
        ubsApp.openResultPopup({
            "message": message,
            "header": header,
            "headerStyle": "text-align: center;  color: black;",
        })
    }
}
