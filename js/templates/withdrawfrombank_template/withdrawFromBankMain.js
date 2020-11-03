ubsApp.getWithdrawFromBankTemplate = function (templateConfig, tempVar) {
    var object = {};
    object.color = userArray[playerChance].getplayerColor();
    object.cash = userArray[playerChance].getplayerScore();
    object.bankBalance = userArray[playerChance].getBankBalance();
    ubsApp.openedTransferScenario = true;

    templateConfig = $.extend(templateConfig, object);
    tempVar.html += ubsPayOffTemplate(templateConfig);
}

ubsApp.openWithdrawFromBank = function () {
    socket.emit("serverOpenWithdrawFromBank", { roomCode: userArray[playerChance].getRoomCode() })
}

socket.on('clientOpenWithdrawFromBank', function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("withdrawFromBank");
})


ubsApp.withdrawFromBank = function (questionId) {
    socket.emit('serverWithdrawFromBank', {
        roomCode: userArray[playerChance].getRoomCode(),
        questionId: questionId
    })
}

socket.on('clientWithdrawFromBank', function (data) {
    ubsApp.socketWithdrawFromBank(data.questionId);
})

ubsApp.socketWithdrawFromBank = function (questionId) {
    console.log("Withdraw Id is : " + questionId);
    var number = parseInt(document.getElementById("debtPaymentText").value);
    var date = new Date();
    var startTime = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(), questionId, number, 0, 0, startTime, "withdrawFromBank");
    console.log("current player is: " + userArray[playerChance].getplayerName());
    if (number > 0) {
        if (number <= userArray[playerChance].getBankBalance()) {
            userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore() + number);
            userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance() - number);
            ubsApp.closeCurrentScenario();
            ubsApp.currentPlayerContents();
            ubsApp.openResultPopup({
                "message": ubsApp.getTranslation("withdrawSuccessMsg").replace("{{withdrawAmount}}", number),
                "header": ubsApp.getTranslation("SUCCESS"),
                "headerStyle": "text-align: center;  color: black; font-weight: 700;",
                "buttons": [
                    {
                        'id': "closePopupButton",
                        'name': ubsApp.getTranslation("CLOSE"),
                        'action': "ubsApp.callServerClosePopup();"
                    }
                ]
            });
        }
        else {
            document.getElementById("result").innerHTML = ubsApp.translation["bankBalance"];
        }
    }
    else {
        document.getElementById("result").innerHTML = ubsApp.translation["validAmount"];
    }
}
