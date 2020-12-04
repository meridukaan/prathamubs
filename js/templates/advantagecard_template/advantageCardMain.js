ubsApp.getAdvantageCardTemplate=function(templateConfig,tempVar){
    var object={};
    object.currentReputationPoint=userArray[playerChance].getReputationPts();
    templateConfig=$.extend(templateConfig,object);
    templateConfig.convertReputationPointsTitle = ubsApp.getTranslation("convertReputationPointsTitle");
    templateConfig.convertReputationMessage = ubsApp.getTranslation("convertReputationMessage");
    templateConfig.CANCEL = ubsApp.getTranslation("cancelTitle");
    templateConfig.OK = ubsApp.getTranslation("OK");
    templateConfig.currentWeekCash = "₹ "+ userArray[playerChance].getplayerScore();
    templateConfig.currentWeekBankBalance = "₹ "+ userArray[playerChance].getBankBalance();
    templateConfig.currentWeekReputationPts = userArray[playerChance].getReputationPts();
    templateConfig.currentWeekCredit = userArray[playerChance].getCredit();
    templateConfig.currentWeekAdvantageCard = userArray[playerChance].getAdvantageCardNumber();
    tempVar.html+=ubsAdvantageCardTemplate(templateConfig);
}

ubsApp.openAdvantageCard=function(){
    socket.emit('openAdvantageCardToServer', { description: "This is conversion of reputation points to advantage cards", roomCode : ubsApp.studentArray[0].room});
}

socket.on('openAdvantageCardToClient', function (data) {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("advantageCardScenario");
})

//ubsApp.checkDetails=function(){
//    var numberEntered=document.getElementById("convertText").value;
//    if(numberEntered>0){
//        if(numberEntered<=userArray[playerChance].getReputationPts()){
//            if(numberEntered%15==0){
//                document.getElementById("convertedNumber").innerHTML=numberEntered/15;
//                document.getElementById("remainingBalance").innerHTML=userArray[playerChance].getReputationPts()-numberEntered;
//            }
//            else{
//                document.getElementById("result").innerHTML=ubsApp.translation["enterInMultipleOf15"];
//            }
//        }
//        else{
//            document.getElementById("result").innerHTML=ubsApp.translation["You have entered more points than you have"];
//        }
//    }
//    else{
//        document.getElementById("result").innerHTML=ubsApp.translation["validReputationPts"];
//    }
//}

ubsApp.replicateAdvantageText=function(){
    convertTotal=document.getElementById("convertText").value;
    socket.emit('textToReplicateAdvantage',{
        description : "Event sends keypress events in textbox for total amount sale", total:convertTotal, roomCode : ubsApp.studentArray[0].room
    })
}

socket.on('replicatedTextAdvantage',function(data){
    document.getElementById("convertText").value=Number(data.total);
  })

ubsApp.covertReputationToWildCard=function(){
     var numberEntered=document.getElementById("convertText").value;
        socket.emit('convertReputationToAdvantageCardToServer', { description: "This is conversion of reputation points to advantage cards", roomCode : ubsApp.studentArray[0].room, numberEntered:numberEntered});
       

}

socket.on('convertReputationToAdvantageCardToClient',function(data){
    
    var numberEntered=data.numberEntered;
    if(numberEntered>14 && numberEntered <= userArray[playerChance].getReputationPts())
    {
        let reputationPointsUsed = numberEntered  - (numberEntered%15);
        userArray[playerChance].addAdvantageCardNumber(reputationPointsUsed / 15);
        userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()-reputationPointsUsed);
        if(ubsApp.isMultiplayerEnabled)
        {
            ubsApp.storePlayerDetailsOnServer(userArray[playerChance],"advantageCardScenario");
        }
        ubsApp.closeCurrentScenario();
        ubsApp.currentPlayerContents();
        ubsApp.openPopup({
            'message' : ubsApp.getTranslation("advantageCardConvertSuccess").replace("{{advantageCard}}",(reputationPointsUsed / 15)).replace("{{reputationPoints}}",reputationPointsUsed),
            "header" : ubsApp.getTranslation("SUCCESS"),
            "headerStyle" : "text-align: center;  color: green; font-weight: 700;",
        });

    }
else{
    ubsApp.openPopup({
        'message' : ubsApp.translation["validReputationPts"],
        "header" : ubsApp.getTranslation("ERROR"),
        "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
    });
    }
  })