ubsApp.getWeekSummaryTemplate = function(templateConfig, tempVar){
    //console.log("Weekly Summary Id is: " + questionId);
    var questionId = 1;
    console.log("Weekly Summary Id is: " + questionId);
    templateConfig.lastWeekCash = userArray[playerChance].getLastWeekPlayerScore();
    templateConfig.lastWeekBankBalance = userArray[playerChance].getLastWeekBankBalance();
    templateConfig.lastWeekReputationPts = userArray[playerChance].getLastWeekReputationPts();
    templateConfig.lastWeekCredit = userArray[playerChance].getLastWeekCredit();
    templateConfig.lastWeekAdvantageCard = userArray[playerChance].getLastWeekAdvantageCardNumber();

    templateConfig.currentWeekCash = "₹ "+ (userArray[playerChance].getplayerScore() - templateConfig.lastWeekCash);
    templateConfig.currentWeekBankBalance = "₹ "+ (userArray[playerChance].getBankBalance() - templateConfig.lastWeekBankBalance);
    templateConfig.currentWeekReputationPts = userArray[playerChance].getReputationPts() - templateConfig.lastWeekReputationPts;
    templateConfig.currentWeekCredit = userArray[playerChance].getCredit() - templateConfig.lastWeekCredit;
    templateConfig.currentWeekAdvantageCard = userArray[playerChance].getAdvantageCardNumber() - templateConfig.lastWeekAdvantageCard ;
    templateConfig.userName = userArray[playerChance].getplayerName();
    templateConfig.currentInventory = (userArray[playerChance].getInventoryScore() - userArray[playerChance].getLastWeekInventoryScore()) + "%";
    templateConfig.currentInventoryValue = "₹ "+ ((userArray[playerChance].getInventoryScore() - userArray[playerChance].getLastWeekInventoryScore()) * ubsApp.inventoryPerPercentValue);
    templateConfig.header = ubsApp.getTranslation("ScoreSummary");

    if(ubsApp.openCurrentPlayerConfig && ubsApp.openCurrentPlayerConfig.header) {
        templateConfig.header = ubsApp.openCurrentPlayerConfig.header;
    }
    var week = userArray[playerChance].getWeeks();
    if(ubsApp.openCurrentPlayerConfig && ubsApp.openCurrentPlayerConfig.isWeekSummary) {
        week = week - 1;
    }
    templateConfig.weekNumber = week;

    //Update weeklySummary in DB
    var date = new Date();
    var startTime=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,templateConfig.currentWeekCash, 0, 0, startTime,"weeklySummary"+week+"currentWeekCash");
    ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,templateConfig.currentWeekBankBalance, 0, 0, startTime,"weeklySummary"+week+"currentWeekBankBalance");
    ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,templateConfig.currentWeekReputationPts, 0, 0, startTime,"weeklySummary"+week+"currentWeekReputationPts");
    ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,templateConfig.currentWeekCredit, 0, 0, startTime,"weeklySummary"+week+"currentWeekCredit");
    ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,templateConfig.currentWeekAdvantageCard, 0, 0, startTime,"weeklySummary"+week+"currentWeekAdvantageCard");
    ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,templateConfig.currentInventory, 0, 0, startTime,"weeklySummary"+week+"currentInventory");
    ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,templateConfig.currentInventoryValue, 0, 0, startTime,"weeklySummary"+week+"currentInventoryValue");
    

    userArray[playerChance].setOpenWeekSummary(false);
    userArray[playerChance].copyCurrentSummaryToLastWeek();

    tempVar.html += ubsWeekSummarytemplate(templateConfig);

}


ubsApp.openCurrentPlayerSummary = function(config) {
    ubsApp.openCurrentPlayerConfig = config;
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("weekSummaryPage");
    ubsApp.openCurrentPlayerConfig = {};
}