monopoly.ubsBoardTemplate = undefined;
monopoly.ubsSideScoreBoardTemplate = undefined;
monopoly.ubsMonopolyStaticTemplate =undefined;
monopoly.ubsformTemplate = undefined;
monopoly.ubswebFormTemplate = undefined;
monopoly.centerScoreBoardTemplate=undefined;
monopoly.ubsEndGameTemplate = undefined;
monopoly.boardConfig={};
monopoly.salesScenarioArray=[];
monopoly.luckScenarioArray=[];
monopoly.purchaseScenarioArray=[];
monopoly.done_initialising=false;
monopoly.surpriseScenarioArray=[];
monopoly.blockCategory=[];
monopoly.scenariosArray=[];
monopoly.tokens = ['Red', 'Blue', 'Green', 'Purple'];
monopoly.difficultyLevel=["easy","medium","hard"];
monopoly.flag2= false;
monopoly.computerDifficulty={};
monopoly.scenario ={};
monopoly.numplayers=0;
let numplayers = monopoly.numplayers;
monopoly.playerChance = 0;
let playerChance = monopoly.playerChance;
let userArray=[];
let cashTransfered=false;
var initialPlayerCash=1000;
var initialPlayerBankBalance=100000;
var initialInventoryScore=60;
var initialReputation=10;
var harnamSinghProfit=8000;
// let playerColors =[Red, Green, Blue, Purple];
var ubsBoardTemplate = monopoly.ubsBoardTemplate;
var ubsSideScoreBoardTemplate = monopoly.sideScoreBoardTemplate;
var ubsEndGameTemplate = monopoly.ubsEndGameTemplate;
var ubsMonopolyStaticTemplate= monopoly.ubsMonopolyStaticTemplate;
var ubsformTemplate= monopoly.ubsformTemplate;

// var ubsCenterScoreBoardTemplate=monopoly.centerScoreBoardTemplate;
var boardConfig = monopoly.boardConfig;
var salesScenarioArray=monopoly.salesScenarioArray;
var luckScenarioArray=monopoly.luckScenarioArray;
var purchaseScenarioArray=monopoly.purchaseScenarioArray;
var done_initialising=monopoly.done_initialising;
var surpriseScenarioArray=monopoly.surpriseScenarioArray;
var blockCategory=monopoly.blockCategory;
var scenariosArray=monopoly.scenariosArray;
var tokens =monopoly.tokens;
var difficultyLevel=monopoly.difficultyLevel;
var flag2=monopoly.flag2;
var computerDifficulty=monopoly.computerDifficulty;
var scenario =  monopoly.scenario;
ubsApp.maxNumOfWeeks = 12   ;
var renderTimeOutMiliSec = 6000;
ubsApp.inventoryPerPercentValue = 1000;
ubsApp.endGameConfig = {};
ubsApp.openNextMoveAfterPurchase = true;
ubsApp.openNextMoveAfterTransfer = false;
ubsApp.openedTransferScenario = false;
ubsApp.openNextMoveAfterPayOff = false;

$(document).ready(function(){
	ubsApp.restartGame();
    ubsApp.isOfflineMode = false;
    try {
        if(ubsApp.isAndroidEnabled) {
            let isOnline = Android.isOnlineVersion();
            ubsApp.isOfflineMode = !isOnline;
        }
    } catch(err) {
    }
	//monopoly.renderPageforBoard(monopoly.pages.EnterLanguagePage);
});

monopoly.intitializeTemplates = function(){
	ubsBoardTemplate = Template7.compile(monopoly.boardTemplate);
	ubsSideScoreBoardTemplate = Template7.compile(monopoly.sideScoreBoardTemplate);
	rollingDiceTemplate = Template7.compile(monopoly.rollingDiceTemplate);
    ubsMonopolyStaticTemplate = Template7.compile(monopoly.staticTemplate);
    ubsformTemplate = Template7.compile(monopoly.formTemplate);
    ubswebFormTemplate = Template7.compile(monopoly.webFormTemplate);
    //ubsCenterScoreBoardTemplate=Template7.compile(ubsApp.centerScoreBoardTemplate);
    ubsEndGameTemplate = Template7.compile(monopoly.endGameTemplate);
}

monopoly.initialiseCategory = function(){
      for(let block = 0; block<boardConfig.top_row.length; block++){
          blockCategory[boardConfig.top_row[block].id]=boardConfig.top_row[block].category;
        }
      for(let block = 0; block<boardConfig.left_col.length; block++){
          blockCategory[boardConfig.left_col[block].id]=boardConfig.left_col[block].category;
        }
      for(let block = 0; block<boardConfig.right_col.length; block++){
          blockCategory[boardConfig.right_col[block].id]=boardConfig.right_col[block].category;
        }
      for(let block = 0; block<boardConfig.bottom_row.length; block++){
          blockCategory[boardConfig.bottom_row[block].id]=boardConfig.bottom_row[block].category;
        }
}

monopoly.renderPageforBoard = function(page) {
	let html = "";
  var emptyFlag=true;
  var changeDefaultDiceFace=false;
	for(let i=0; i< page.length; i++) {
        let templateConfig = $.extend({},page[i]);
        if(templateConfig.weekDeadLine){
          numberOfWeeksDeadline=templateConfig.weekDeadLine;
        }
		let templateType = templateConfig.templateType;

		if(templateType == "board"){
            
			boardConfig=templateConfig;
			for(let i = 0; i<numplayers; i++){
				templateConfig.top_row[0].players.push({
			    "playerId" : userArray[i].getplayerId(),
			    "tokenColor" : userArray[i].getplayerColor(),
			    "currentPos" :userArray[i].getplayerCurrentPos(),
			    "playerName" :userArray[i].getplayerName(),
			    "score" : userArray[i].getplayerScore()
			   });
             }
              for(var j=0;j<templateConfig.bottom_row.length;j++){
                let key=templateConfig.bottom_row[j].title;
                console.log(templateConfig.bottom_row);
                console.log(key);
                let translatedString=ubsApp.translation[key];
                templateConfig.bottom_row[j].title=translatedString;
              }
              for(var j=0;j<templateConfig.top_row.length;j++){
                templateConfig.top_row[j].title=ubsApp.translation[templateConfig.top_row[j].title];
              }
              for(var j=0;j<templateConfig.left_col.length;j++){
                templateConfig.left_col[j].title=ubsApp.translation[templateConfig.left_col[j].title];
              }
              for(var j=0;j<templateConfig.right_col.length;j++){
                templateConfig.right_col[j].title=ubsApp.translation[templateConfig.right_col[j].title];
              }
              console.log(templateConfig);

               monopoly.initialiseCategory();
               rollingDiceConfig.optionPageMap = templateConfig.optionPageMap;
               monopoly.updateRollingDiceTemplate(templateConfig);
               changeDefaultDiceFace=true;
               html+=ubsBoardTemplate(templateConfig);
            } else if(templateType == "sideScoreBoard") {
               flag2=true;
                var object={};
                object.bankBalanceAmount=userArray[playerChance].getBankBalance();
                object.cashAmount=userArray[playerChance].getplayerScore();
                object.debtAmount=userArray[playerChance].getCredit();
                object.weekTitle = ubsApp.getTranslation("weekTitle");
                var template=ubsApp.pages["sideScoreBoard"].templates[0];
                emptyFlag=false;
                $('#sideScoreBoardMainContainer').addClass('active');
            // fade in the overlay
                $('.mainBoardoverlay').addClass('active');
                template=$.extend(template,object);
                html += ubsSideScoreBoardTemplate(template);
                document.getElementById("templateBase").style.zIndex = "996";
                document.getElementById("templateContent").style.zIndex = "998";
                document.getElementById("templateContent").style.opacity = "0.99";
                $("#templateContent").empty();
                $("#templateContent").append(html);
                document.getElementById("templateContent").style.transition = "width 2s";
            }
            /*else if(templateType == "rollingDice"){
                rollingDiceConfig.optionPageMap = templateConfig.optionPageMap;
                monopoly.updateRollingDiceTemplate(templateConfig);
                html += rollingDiceTemplate(templateConfig);
            }*/ else if(templateType == "static") {
			    html += ubsStaticTemplate(templateConfig);
            }
            /*else if(templateType=="centerScoreBoard"){
              var object={};
              object.bankBalanceAmount="Rs. "+userArray[playerChance].getBankBalance();
              object.cashAmount="Rs. "+userArray[playerChance].getplayerScore();
              object.debtAmount="Rs. "+userArray[playerChance].getCredit();
              var template=ubsApp.pages["centerScoreBoard"].templates[0];
              template=$.extend(template,object);
              console.log(template);
              html+=ubsCenterScoreBoardTemplate(template);
            }*/
            else if(templateType=="audioTemplate"){
              html += ubsAudioTemplate(templateConfig);
            }
            else if(templateType == "endGameTemplate") {
                templateConfig = $.extend(templateConfig,ubsApp.endGameConfig);
                templateConfig.PLAYAGAIN = ubsApp.getTranslation("PLAYAGAIN");
                templateConfig.CLOSE = ubsApp.getTranslation("CLOSE");
                html += ubsEndGameTemplate(templateConfig);
            }
        }

	if(emptyFlag){
    $("#monopolyBase").empty();
	  $("#monopolyBase").append(html);
    if(document.getElementById("playerId") != null){
          $("#playerId").empty();
        $("#playerId").html(userArray[playerChance].getplayerName());
    }
   } 
  if(changeDefaultDiceFace){
      monopoly.changeDefaultDice();
  }
    if(flag2) {
        ubsApp.initializeLeaderBoard("Score");
        ubsApp.currentPlayerContents();
        flag2 = false;
        //$("#player").html(userArray[playerChance].getplayerName());
    }
}
// monopoly.playComputer = function(div){
//     div.addEventListener('playComputer', function (e) {
//         ubsApp.playDecisionTemplate(e.detail);
//     });
//   }


monopoly.startScenarios = function(blockNo){
    console.log("Inside Start Scenario");
  setTimeout(function(){
      let category = blockCategory[blockNo];
      ubsApp.currentScenarioCategory = category;
      if(category) {
        scenario = userArray[playerChance].getScenario(category,playerChance);   //   blockCategory[blockNo]
                let currentTemplateName=scenario.getName();
                let currentTemplate=ubsApp.pages[currentTemplateName].templates;
                let key=ubsApp.pages[currentTemplateName].templates[0].question;

                $('#monopolyBase').css("z-index",-10);
                $('#templateBase').css("z-index",10);

                document.getElementById("templateContent").style.opacity="0.95";

                $('#templateContent').css("height",(screenHeight)+'px')
                $('#templateContent').css("width",(screenWidth)+'px')
                $('#resultBackground').show();

                ubsApp.renderPageByName(scenario.getName());
                currentTemplate[0].question=key;
      } else {
         ubsApp.currentScenarioCategory = "";
         ubsApp.callServerNextMove();
      }

       
  },1000);

}

monopoly.myMove = function(count, pId, currentPos) {
  var temp="#p"+pId;
  var playerToken = $(temp);
  var blockNo = currentPos;   

   var movePlayer = setInterval(frame, 500);
  if(currentPos+count >= boardConfig.blocks){
    let x = userArray[pId].getWeeks();
    if(x < ubsApp.maxNumOfWeeks) {
          userArray[pId].setWeeks(++x);
            if(cashTransfered){
              cashTransfered=false;
              userArray[pId].setTransferReminderOpened(true);
            }
            else{
              userArray[pId].setTransferReminderOpened(false);
            }
            userArray[pId].setPaymentReminderOpen(true);
            userArray[pId].setOpenWeekSummary(true);
    } else {
        userArray[pId].setWeeks(++x);
        playerToken.hide();
        clearInterval(movePlayer);
        let message = userArray[pId].getplayerName() + " "  + ubsApp.getTranslation("gameFinishedForAUser");
        ubsApp.closeCurrentScenario();
        monopoly.noPlayersPlaying--;
        if(monopoly.noPlayersPlaying <= 0) {
            ubsApp.endGame();
        } else {
            ubsApp.openCurrentPlayerSummary({
                    			"header" : ubsApp.getTranslation("EndGameSummary"),
                    			"isWeekSummary" : true,
                    			});
            // setTimeout(function() { ubsApp.nextMove();}, 5000); //Call to server
            setTimeout(function(){ubsApp.callServerNextMove();}, 5000);
        }



    }


  }
  function frame(){
    if (blockNo == (currentPos+count)%boardConfig.blocks){
      userArray[pId].setplayerCurrentPos((currentPos+count)%boardConfig.blocks);
      clearInterval(movePlayer);
      if(userArray[pId].getWeeks() <= 12) {
        monopoly.startScenarios(blockNo);
      }
    } 
    else{
      blockNo++;
      
      blockNo %= boardConfig.blocks;
      if(blockNo==0){
          if(document.getElementById("weekContent")!=null){
            document.getElementById("weekContent").innerHTML=userArray[playerChance].getWeeks() + "/" + ubsApp.maxNumOfWeeks;
          }
      }
      $("#" + blockNo).append(playerToken);
      var audioElement = document.getElementById('p'+pId+'');
      ubsApp.raiseAudioEvent(audioElement, 'moveToken');

    }
  }
}

ubsApp.getTranslation = function(key) {
  if(ubsApp.translation[key]) {
    return ubsApp.translation[key];
  }

  return "";
}
monopoly.updateRollingDiceTemplate = function(template){
	let windowHeight =  $(window).height();
    template.diceSceneWidth = windowHeight/3;
}

monopoly.changeDefaultDice = function(){
      document.getElementById('dice1').classList.add('show-' + 5);
}

monopoly.rollDice  = function(){
  $('#rollIt').attr('disabled',true);
  $("#container-dice").css("pointer-events","none");
  
    diceVal = pointRoll();
	setTimeout(function(){ 
	if(playerChance >= numplayers){
		playerChance=0;
	}
	$("#player").html(userArray[playerChance].getplayerName());
	$("#diceval").html(diceVal);	
      monopoly.myMove(diceVal, playerChance, userArray[playerChance].getplayerCurrentPos());   //update Real time dice Value
    },1000);
}

monopoly.socketStorePlayerDetails=function(){
    socket.emit('storePlayerDetailsToServer',{
        description : "Calls server for storing details of player", roomCode : ubsApp.studentArray[0].room
    })
}

socket.on('storePlayerDetailsToClient',function(data){
   ubsApp.closeCurrentScenario();
    monopoly.chooseLanguage('english');
    // monopoly.storePlayerDetails();
})

monopoly.storePlayerDetails=function(){
    var i=0;
    let computerRequired=false;  //document.getElementById("computer").checked;
    let isOffline = ubsApp.isOfflineMode;
    let playerMap = {};
    ubsApp.maxNumOfWeeks = $("input[name='noOfWeeks']:checked"). val();

    numplayers=ubsApp.studentArray.length;

    if (numplayers <= 0) {
      ubsApp.openPopup({
        "header" : ubsApp.getTranslation("noPlayerAddedHeader"),
        "message" : ubsApp.getTranslation("noPlayerAdded"),
        "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
        "showCloseButton" : true,
        "showBorder" : true,
        "backgroundColor" :"white",
     });
     return;
    }

    // for( i=0;i<numplayers;i++) {

    //     if(playerMap[document.getElementById("name"+i).value]) {
    //          ubsApp.openPopup({
    //                 "message" : ubsApp.getTranslation("eachPlayerNameUniqueMessage"),
    //                 "header" : ubsApp.getTranslation("ERROR"),
    //                 "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
    //                 });
    //          return;
    //     }
    //     playerMap[document.getElementById("name"+i).value] = true;
    //  }

    for( i=0;i<numplayers;i++)
    {
        let user=new User();
        // let res = document.getElementById("name"+i).value.split("_");
        // user.setplayerName(res[1]);
        // user.setplayerStudentId(res[0]);

        user.setplayerName(ubsApp.studentArray[i].name);


        user.setplayerScore(initialPlayerCash);
        user.setLastWeekSummary(initialPlayerCash, initialPlayerBankBalance, initialReputation, 0, 0, 60.00);
        user.setInventoryScore(60.00);
        // var color=$('input[name=Radio'+i+']:checked').val();
        var color = monopoly.tokens[i];
        user.setplayerColor(color.toLowerCase());
        user.setplayerId("p"+i);
        user.setplayerCurrentPos(0);
        user.setAdvantageCardNumber(0);
        user.setBankBalance(initialPlayerBankBalance);
        user.setReputationPts(initialReputation);
        user.setCredit(0);
        user.setWildCard(0);
        user.setCreditLimit(90000);
        user.setTransferReminderOpened(true);
        user.setScenarioArray(scenariosArray);
        user.setWeeks(1);
        userArray[i]=user;
    }
    if(computerRequired)
    {
      let user=new User();
      user.setplayerName("Computer");
      user.setplayerScore(1000);
      user.setInventoryScore(100);
      user.setIsComputer(true);
      var level=$('input[name=compRadioLevel]:checked').val();
      user.setDifficultyLevel(level.toLowerCase());
      user.setInventoryScore(60);
      user.setCorrectProbability(level);
      user.setplayerCurrentPos(0);
      user.setplayerId("p"+i);
      user.setWeeks(0);
      user.setScenarioArray(scenariosArray);
      user.setplayerColor(tokens[tokens.length-1]);
      user.setCorrectAnswered(0);
      userArray.push(user);
      numplayers++;
    }
    monopoly.noPlayersPlaying = numplayers;
    done_initialising=true;
    console.log("StoreInitPlayers, before render");
    monopoly.renderPageforBoard(monopoly.pages["monopoly"]);
    ubsApp.openPopup({
                      "header" : "",
                      "message" : ubsApp.getTranslation("theGameBegins"),
                      "messageStyle" : "text-align: center;   color: red; font-size:2.5vmax;  padding-top: 19px;",
                      "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
                      "showCloseButton" : false,
                      "showBorder" : false,
                      "backgroundColor" :"white",
                   });
    setTimeout(function(){ubsApp.closePopup();}, 2000);
}

monopoly.initPlayers=function(){
    numplayers=document.getElementById("num_players").value;
    document.getElementById("take_input").innerHTML="";
    if(numplayers<=4)
    {
        for(var i=0;i<numplayers;i++)
        {
            var object={};
            object.nameTitle=ubsApp.translation["name"]+(i+1);
            object.numberOfTokens=[];
            object.nameId="name"+(i);
            for (var j = 0; j<tokens.length; j++) {
                object.numberOfTokens.push(
                {   "radioName":"Radio"+i,
                    "radioValue":tokens[j],
                    "radioId":"radio"+j,
                    "tokenColor":tokens[j],
                    "checked":false,
                    "display":"inline"
                });
            
            }
            if (ubsApp.isWebEnabled) {
                document.getElementById("take_input").innerHTML += ubsformTemplate(object);
            }
            else {
                document.getElementById("take_input").innerHTML += ubswebFormTemplate(object);
            }
      }
      
    }
}

monopoly.initOnlinePlayers=function(){
    document.getElementById("take_input").innerHTML = "";
    $("#enterOnlinePlayers").show();
    if(ubsApp.studentArray.length == 0) {
        $("#enterOnlinePlayers").hide();
        let message = ubsApp.getTranslation("ADD_PLAYER_TO_PLAY");
        let addPlayerDiv = "<div style=\"margin-bottom:2%\">" + message + "</div>";
        document.getElementById("take_input").innerHTML+=addPlayerDiv;
    } else {
         numplayers=document.getElementById("num_online_players").value;
            document.getElementById("take_input").innerHTML="";

            if(numplayers<=4)
            {
                for(var i=0;i<numplayers;i++)
                {
                    var object={};
                    object.nameTitle=ubsApp.translation["name"]+(i+1);
                    object.numberOfTokens=[];
                    object.nameId="name"+(i);
                    object.isDropdown = true;
                    object.studentArray = ubsApp.studentArray;
                    var isCheckedByDefault;
                    for (var j = 0; j<tokens.length; j++) {
                        isCheckedByDefault = (i==j);
                        object.numberOfTokens.push(
                        {   "radioName":"Radio"+i,
                            "radioValue":tokens[j],
                            "radioId":"radio"+j,
                            "tokenColor":tokens[j],
                            "checked":isCheckedByDefault,
                            "display":"none"
                        });

                    }
                    if (ubsApp.isWebEnabled) {
                        document.getElementById("take_input").innerHTML += ubswebFormTemplate(object);
                    }
                    else {
                        document.getElementById("take_input").innerHTML += ubsformTemplate(object);
                    }
                }

                for(var i=0;i<numplayers;i++) {
                    if (ubsApp.isWebEnabled) {
                        $("#name" + i).val(ubsApp.studentArray[i].playerid + "_" + ubsApp.studentArray[i].playername);
                    }
                    else {
                        $("#name" + i).val(ubsApp.studentArray[i].StudentId + "_" + ubsApp.studentArray[i].StudentName);
                    }
                }


            }
    }

}

monopoly.initOfflinePlayers=function(){
    numplayers=document.getElementById("num_offline_players").value;
    document.getElementById("take_input").innerHTML="";

    if(numplayers<=4)
    {
        for(var i=0;i<numplayers;i++)
        {
            var object={};
            object.nameTitle=ubsApp.translation["name"]+(i+1);
            object.numberOfTokens=[];
            object.nameId="name"+(i);
            object.isDropdown = true;
            object.studentArray = ubsApp.studentArray;
            var isCheckedByDefault;
            for (var j = 0; j<tokens.length; j++) {
                isCheckedByDefault = (i==j);
                object.numberOfTokens.push(
                {   "radioName":"Radio"+i,
                    "radioValue":tokens[j],
                    "radioId":"radio"+j,
                    "tokenColor":tokens[j],
                    "checked":isCheckedByDefault,
                    "display":"none"
                });

            }
            if (ubsApp.isWebEnabled) {
                document.getElementById("take_input").innerHTML += ubswebFormTemplate(object);
            }
            else {
                document.getElementById("take_input").innerHTML += ubsformTemplate(object);
            }
        }

        for(var i=0;i<numplayers;i++) {
            $("#name" + i).val(ubsApp.studentArray[i].StudentId + "_" + ubsApp.studentArray[i].StudentName);
        }


    }
}
monopoly.initComputerDifficulty=function()
{
  computerDifficulty={};
    computerDifficulty.difficulty=[];
    document.getElementById("computerDetails").innerHTML="";
  if(document.getElementById("computer").checked)
  {
    for(var i=0;i<difficultyLevel.length;i++)
    {
          computerDifficulty.difficulty.push({
          "radioName":"compRadioLevel",
          "radioValue":difficultyLevel[i],
          "radioId":"comp"+i,
          "text":ubsApp.translation[difficultyLevel[i]]
        }
        );
    }
    if (ubsApp.isWebEnabled) {
          document.getElementById("computerDetails").innerHTML += ubswebFormTemplate(computerDifficulty);
      }
      else {
          document.getElementById("computerDetails").innerHTML += ubsformTemplate(computerDifficulty);
      }
  } 
}

monopoly.initializeScenarios=function()
{
    scenariosArray = [];
    $.each(ubsApp.pages, function(key, value) {
        if(value.category)
        {
            let scenario = new Scenarios();
            scenario.setCategory(value.category);

            scenario.setRepeatForAllUsers(value.repeatforall);
            scenario.setRepeatforUser(value.repeatforuser);
            scenario.setName(key);
            
            //scenario.setTemplate(value.templates);
            scenario.setIfCalculatorRequired(true);
            if(scenariosArray[value.category]==null)
            {
                scenariosArray[value.category]=[];
            }
            scenariosArray[value.category].push(scenario);
        }
    });
}

monopoly.openLeaderBoard=function(category){
  ubsApp.initializeLeaderBoard(category);
  if(document.getElementById("leaderBoardParent") !=null){
		document.getElementById("leaderBoardParent").style.width="15%";
	}
}

monopoly.closeLeaderBoard=function(){

  if(document.getElementById("leaderBoardParent")) {
    document.getElementById("leaderBoardParent").style.width="0%";
  }


}

monopoly.createRoom=function(){
    console.log("Creating Room");
    ubsApp.openCreateRoomTemplate();
}

monopoly.joinRoom=function(){
    console.log("Join Room");
    ubsApp.openJoinRoomTemplate();
}


monopoly.chooseLanguage=function(language){

/*  var language=$('input[name=languageRadio]:checked').val();*/
  var flag = false;
  if(language == null){
	  flag = true;
	  language = "english";
  }

  let message = "Loading Game...";
  if(language == "hindi") {
    message = "गेम लोड हो रहा है...";
  } else if (language == "marathi") {
    message = "खेळ लोड करीत आहे...";
  }
  ubsApp.openPopup({
                                         "message" : message,
                                         "header" : "",
                                         "headerStyle" : "",
                                         "showCloseButton" : false,
                                         });

  
  var jsElm = document.createElement("script");
  jsElm.type = "text/javascript";
  jsElm.src = "js/language_translations/"+language+".js";
  document.head.appendChild(jsElm);
  
  var link  = document.createElement('link');
  languageSelected=language;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/'+language+'.css';
  document.head.appendChild(link);
  link.onload=function(){
    
    
  }
  
    
   jsElm.onload=function(){

      if(flag == true){
    	  ubsApp.openPopup({
              "message" : "Please select the language",
              "header" : "ERROR",
              "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
              "showCloseButton" : true,
              });
    	  
      }
     else
     {
        ubsApp.translation["screenHeight"] = screenHeight;
        ubsApp.translation["screenWidth"] = screenWidth;

          if (window.requestIdleCallback) {
              requestIdleCallback(function () {
                  var fp = new Fingerprint2();
                  fp.get(function (components) {
                      ubsApp.deviceFingerPrint = components;
                  })
              })
          } else {
              setTimeout(function () {
                  var fp = new Fingerprint2();
                  fp.get(function (components) {
                      ubsApp.deviceFingerPrint = components;
                  })
              }, 500)
          }
        monopoly.intitializeTemplates();
        	monopoly.initializeScenarios();
        	ubsApp.intitializeTemplates();
        	ubsApp.mapTemplatetoFunction();
            ubsApp.initializeUbsPages();
            monopoly.initializePages();
    	 ubsApp.translateScenarios();
    	 ubsApp.closePopup();
    	 ubsApp.startHelp("introHelp");
    	//  monopoly.pages.WelcomePage[1].src="<img src=\"images/" + languageSelected +"/logo.png\" style=\"height: 39vh;top:40%;margin: 6%;margin-left: 30%;\"> </img>";
          monopoly.storePlayerDetails();

      }
    }
  
  }

monopoly.readInstruction=function(){
	 
/*	  ubsApp.openPopup({ "message" : ubsApp.getTranslation("instructionsMessage"),
          "header" : ubsApp.getTranslation("instructionHeader"),
          "headerStyle" : "text-align: center;  color: red;"
               });*/
      ubsApp.startHelp("instructionHelp");
}

monopoly.openAddPlayer = function()  {
    ubsApp.openAddPlayerTemplate();
}
monopoly.startGame=function(){
	
	  var jsElm = document.createElement("script");
	  jsElm.type = "text/javascript";
	  jsElm.src = "js/language_translations/"+languageSelected+".js";
	  document.head.appendChild(jsElm);
	  
	  var link  = document.createElement('link');
	  link.rel  = 'stylesheet';
	  link.type = 'text/css';
	  link.href = 'css/'+languageSelected+'.css';
	  document.head.appendChild(link);
	  
	  link.onload=function(){
	    
	  }
	   jsElm.onload=function(){


             if(ubsApp.isAndroidEnabled) {
                ubsApp.studentArray = Android.getStudentList();
             }
             if(ubsApp.isWebEnabled){
                 ubsApp.openPopup({
                     "message": "Getting Players",
                     "header": "",
                     "headerStyle": "",
                     "showCloseButton": false,
                 });
                 $.ajax({
                     url: "/api/player/GetPlayerList?deviceid=" + ubsApp.deviceFingerPrint,
                    type: "get",
                    dataType:"json",
                    contentType:"application/json",
                    success : function(data){
                        ubsApp.studentArray = data;
                        ubsApp.populateStudentArray(ubsApp.studentArray);
                        monopoly.renderPageforBoard(monopoly.pages.InitialisePlayers);
                        if (ubsApp.studentArray.length < 4) {
                            for (let i = 4; i > ubsApp.studentArray.length; i--) {
                                $("#num_online_players option[value='" + i + "']").remove();
                            }
                        }
                        monopoly.initOnlinePlayers();
                        ubsApp.closePopup();
                    }
                })
             }
             else{
              ubsApp.studentArray = JSON.parse("[{\r\n\t\"StudentId\": \"STU111451\",\r\n\t\"StudentAge\": 12,\"StudentGender\": \"male\",\"StudentName\": \"JITENDRA RAMSAJIVAN\"\r\n}, {\r\n\t\"StudentId\": \"STU111453\",\r\n\t\"StudentAge\": 24,\"StudentGender\": \"female\",\"StudentName\": \"ANUSHKA AMIT TIVARI\"\r\n}, {\r\n\t\"StudentId\": \"STU111448\",\r\n\t\"StudentAge\": 32,\"StudentGender\": \"male\",\"StudentName\": \"ANUBHAV SANTOSH\"\r\n}]");

             }


           if(ubsApp.isOfflineMode) { // is mode offline
               try {
                             ubsApp.studentArray = JSON.parse(ubsApp.studentArray);

                    } catch(err) {
                        console.log("Error parsing student array from andriod");
                      ubsApp.studentArray=[];
                    }
              ubsApp.populateStudentArray(ubsApp.studentArray);
              monopoly.renderPageforBoard(monopoly.pages.InitialiseOfflinePlayers);
              if(ubsApp.studentArray.length < 4) {
                for(let i = 4 ; i > ubsApp.studentArray.length; i--) {
                    $("#num_offline_players option[value='" + i + "']").remove();
                }
                monopoly.initOfflinePlayers();
              }
           } else {
              try {
               ubsApp.studentArray = JSON.parse(ubsApp.studentArray);

              } catch(err) {
                console.log("Error parsing student array from andriod");

                ubsApp.studentArray=[];
              }
               ubsApp.populateStudentArray(ubsApp.studentArray);
              monopoly.renderPageforBoard(monopoly.pages.InitialisePlayers);
              if(ubsApp.studentArray.length < 4) {
                  for(let i = 4 ; i > ubsApp.studentArray.length; i--) {
                      $("#num_online_players option[value='" + i + "']").remove();
                  }
              }
              monopoly.initOnlinePlayers();
           }
	   }
}


ubsApp.confirmEndGame=function(){
    var audioElement = document.getElementById('endGame');
    ubsApp.raiseAudioEvent(audioElement, 'congratulations');
    ubsApp.openPopup({
      'message' : ubsApp.getTranslation("endGameConfirm"),
      "header" : ubsApp.getTranslation("ENDGAME"),
      "headerStyle" : "text-align: center;  color: red; font-weight: bold;",
      'buttons' : [
          {
              'name' : ubsApp.getTranslation("yes"),
              'action': "ubsApp.closePopup();ubsApp.endGame();"
          },

          {
                      'name' : ubsApp.getTranslation("no"),
                      'action': "ubsApp.closePopup();"
          }
      ]
  });
}

 ubsApp.endGame=function(){

 // turning off all the reminders
  userArray[playerChance].setPaymentReminderOpen(false);
  userArray[playerChance].setTransferReminderOpened(true);
  userArray[playerChance].setOpenWeekSummary(false);

  	var arr=[];

    let playersConfig =[];
    let atleastOne=false;
    let highestScoringPlayer = -1;
    let highestScore = -1000000;

  	for(var i=0;i<numplayers;i++){
  	    let playerConfig = {};
  	    playerConfig.widthOfEachPlayer = (100 / numplayers) - 3;
  	    let player = userArray[i];
  	    playerConfig.playerColor = player.getplayerColor();
        playerConfig.currentWeekCash = "₹ "+ player.getplayerScore();
        playerConfig.currentWeekBankBalance = "₹ "+ player.getBankBalance();
        playerConfig.currentWeekReputationPts = player.getReputationPts();
        playerConfig.currentWeekCredit = player.getCredit();
        playerConfig.currentWeekAdvantageCard = player.getAdvantageCardNumber();
        playerConfig.userName = player.getplayerName();
        playerConfig.currentInventory = "₹ "+ player.getInventoryScore() * ubsApp.inventoryPerPercentValue + " (" + player.getInventoryScore() + "%" + ")";
        if(i > 0) {
            playerConfig.showBorder = true;
        }
        playerConfig.BankBalance = ubsApp.getTranslation("BankBalance");
        playerConfig.ReputationPoints = ubsApp.getTranslation("repPoints");
        playerConfig.AdvantageCard = ubsApp.getTranslation("advantageCardTitle");
        playerConfig.Close = ubsApp.getTranslation("Close");
        playerConfig.PLAYER = ubsApp.getTranslation("PLAYER");
        playerConfig.INVENTORY = ubsApp.getTranslation("INVENTORY");
        playerConfig.playerNameTitle = ubsApp.getTranslation("playerNameTitle");
        playerConfig.Credit = ubsApp.getTranslation("DEBT");
        playerConfig.Cash = ubsApp.getTranslation("cashTitle");

        let weeks = player.getWeeks() - 1;
        if(weeks > 12) {
            weeks = 12;
        } else if(weeks < 1) {
            weeks = 1;
        }
  		var harnamProjectedScore=weeks*harnamSinghProfit;

  		let currentPlayerProfit=0;
  		currentPlayerProfit+=(player.getplayerScore()-initialPlayerCash);
  		currentPlayerProfit+=(player.getBankBalance()-initialPlayerBankBalance);
  		currentPlayerProfit-=player.getCredit();
  		currentPlayerProfit=currentPlayerProfit;
  		if(currentPlayerProfit<harnamProjectedScore)
  		{
  			arr[i]=false;
  		}
  		else{
  			arr[i]=true;
  		}

  		if(currentPlayerProfit > highestScore) {
  		    highestScoringPlayer = i;
  		    highestScore = currentPlayerProfit;
  		}

  		playersConfig[i] = playerConfig;

  	}

  		var winnerName="";



  		if(arr[highestScoringPlayer]) {
  		  winnerName=userArray[highestScoringPlayer].getplayerName() +  " " + ubsApp.getTranslation("hasWon") + ".<br> " + ubsApp.getTranslation("guptaJiProfit") + " = " + harnamProjectedScore + " " +  ubsApp.getTranslation("yourProfit") + " = " + highestScore;

  		} else {
  		     winnerName= ubsApp.getTranslation("hasHighestScoreMessage").replace("{{playerName}}" , userArray[highestScoringPlayer].getplayerName()) +  ".<br> " + ubsApp.getTranslation("guptaJiProfit") + " = " + harnamProjectedScore + " " +  ubsApp.getTranslation("yourProfit") + " = " + highestScore;

  		}

  		if(!atleastOne){

  	   }


  	ubsApp.endGameConfig.players = playersConfig;
  	monopoly.renderPageforBoard(monopoly.pages.endGamePage);
    ubsApp.openPopup({
                   "header" : winnerName,
                  "message" : "",
                  "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
                  "imageUrl" : ubsApp.getTranslation("congratulationImage"),
               });
  }

ubsApp.nextMove = function(){

    console.log("Calling next move");
    ubsApp.closeCurrentScenario();
    if(!userArray[playerChance]) {
        return;
    }
    if(userArray[playerChance].getWeeks() > 1 && userArray[playerChance].isOpenWeekSummary()) {
        ubsApp.openCurrentPlayerSummary({
            "header" : ubsApp.getTranslation("WeeklySummary"),
            "isWeekSummary" : true
            });
    }
    else if (userArray[playerChance].getTransferReminderOpened()==false){

                userArray[playerChance].setTransferReminderOpened(true);
                ubsApp.openTransferToBank(true);
    } else if(userArray[playerChance].getPayOffDeadline()==0 && userArray[playerChance].getPaymentReminderOpen()){
            userArray[playerChance].setPaymentReminderOpen(false);
            ubsApp.openPayOffScenario(true);

    } else {

         if(numplayers > 1) {
            ubsApp.raiseAudioEvent(document.getElementById('playerId'),'nextPlayer');
             ubsApp.openPopup({
                                           "header" : "",
                                          "message" : "",
                                          "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
                                           "imageUrl" : ubsApp.getTranslation("nextPlayerImage"),
                                          "imageStyle" : "width:100%;",
                                          "showCloseButton" : false,
                                          "showBorder" : false,
                                          "backgroundColor" :"transparent",
                                       });
                       setTimeout(function(){ubsApp.closePopup(true);}, 2000);
         }

			playerChance+=1;
	        playerChance%=numplayers;
	        let count = 0;
	        let atleastOnePlayerPlaying = false;

            while(!userArray[playerChance].isPlayerEligibleToPlay() && count <= numplayers) {
                count++;
                playerChance+=1;
                playerChance%=numplayers;
            }

            if(count <= numplayers) {
                atleastOnePlayerPlaying = true;
            }


			this.currentPlayerContents();

			$("#diceval").html(" ");

            if(!atleastOnePlayerPlaying) {

                ubsApp.endGame();
            }
			//$('#lastBalanceContent').html("Rs."+userArray[playerChance].getplayerScore());
			if(userArray[playerChance].getIsComputer()){
				decisionConfig={};
				setTimeout( function(){
					$('#rollIt').trigger('click');
					$('#rollIt').attr('disabled',true);
				},2000);
			}
    }


}
ubsApp.getScore=function()
{
	ubsApp.initializeScoreBoard();
    return userArray[playerChance].getplayerScore();
}

ubsApp.addScore=function (earnedScore)
{
    var currentScore=userArray[playerChance].getplayerScore();
    userArray[playerChance].setplayerScore(parseInt(currentScore)+parseInt(earnedScore));
}

ubsApp.addInventory=function(inventoryPoints){
	var currentInventory=userArray[playerChance].getInventoryScore();
	userArray[playerChance].setInventoryScore(inventoryPoints+currentInventory);
}

ubsApp.closeGame = function() {
    if(ubsApp.isAndroidEnabled) {
        Android.endSession();
    }else{
      window.location.href = "../prathamubs/thank_you.html";
    }

}


ubsApp.currentPlayerContents=function(){
    $("#playerId").empty();
	$("#playerId").html(userArray[playerChance].getplayerName());
	if(document.getElementById("weekContent") != null)
  {
    document.getElementById("weekContent").innerHTML=userArray[playerChance].getWeeks() + "/" + ubsApp.maxNumOfWeeks;
  document.getElementById("bankBalance").innerHTML="₹ "+userArray[playerChance].getBankBalance();
  document.getElementById("cash").innerHTML="₹ "+userArray[playerChance].getplayerScore();
  document.getElementById("debt").innerHTML="₹ "+userArray[playerChance].getCredit();
  document.getElementById("inventoryValueContent").innerHTML="₹ "+ Math.round((userArray[playerChance].getInventoryScore()*ubsApp.inventoryPerPercentValue));
  document.getElementById("inventoryContent").innerHTML=userArray[playerChance].getInventoryScore()+"%";
  document.getElementById("reputationContent").innerHTML=userArray[playerChance].getReputationPts();
  document.getElementById("advantageCardContent").innerHTML=userArray[playerChance].getAdvantageCardNumber();
  }
}




ubsApp.initializeLeaderBoard=function(category)
{
	let leaderBoardObject={}; //new
	 //new
	leaderBoardObject.array=[];
	if(category=="Score")
	{
		leaderBoardObject.title = ubsApp.translation["scoreSideBar"];
		for(var j=0;j<parseInt(numplayers);j++)
    	{ 	//new
			leaderBoardObject.array.push({
				"name":userArray[j].getplayerName(),
				"color":userArray[j].getplayerColor(),
				"score":userArray[j].getplayerScore()
			});

		}
	}
	else if(category=="Document")
	{
		leaderBoardObject.title = ubsApp.translation["documentSideBar"];
		for(var j=0;j<parseInt(numplayers);j++)
    	{
				//new
				leaderBoardObject.array.push({
					"name":userArray[j].getplayerName(),
					"color":userArray[j].getplayerColor(),
					"document":"Dummy Text"
				});
        	//document.getElementById("leaderBoard").innerHTML+="<div style=\"margin-top:15%;border:2px solid;display: block; white-space: nowrap; width:100%;padding:7px;display:inline-block; color:"+userArray[j].getplayerColor()+";\"><span style=\"color:white;white-space: nowrap; transition: width 2s;margin-top:2px;\">"+userArray[j].getplayerName()+": "+ "</span>"+ "<span id=\"score\" style=\"white-space: nowrap;margin-left:1%;margin-left:5%;color:white;\">" +"Dummt Text"+ "</span>"  +  "</div><br>";
		}
	}
	else if(category=="Inventory")
	{
		leaderBoardObject.title = ubsApp.translation["inventorySideBar"];
		for(var j=0;j<parseInt(numplayers);j++)
    	{
			//new
			leaderBoardObject.array.push({
				"name":userArray[j].getplayerName(),
				"color":userArray[j].getplayerColor(),
				"inventory":userArray[j].getInventoryScore()+"%",
			});
        	//document.getElementById("leaderBoard").innerHTML+="<div style=\"margin-top:15%;border:2px solid;display: block; white-space: nowrap; width:100%;padding:7px;display:inline-block; color:"+userArray[j].getplayerColor()+";\"><span style=\"color:white;white-space: nowrap; transition: width 2s;margin-top:2px;\">"+userArray[j].getplayerName()+": "+ "</span>"+ "<span id=\"score\" style=\"white-space: nowrap;margin-left:1%;margin-left:5%;color:white;\">" +"Dummy Text"+ "</span>"  +  "</div><br>";
		}
	}
	else if(category=="Merit")
	{
		leaderBoardObject.title = ubsApp.translation["meritSideBar"];
		for(var j=0;j<parseInt(numplayers);j++)
    	{
			//new
			leaderBoardObject.array.push({
				"name":userArray[j].getplayerName(),
				"color":userArray[j].getplayerColor(),
				"merit":"Dummy Text"
			});
        	//document.getElementById("leaderBoard").innerHTML+="<div style=\"margin-top:15%;border:2px solid;display: block; white-space: nowrap; width:100%;padding:7px;display:inline-block; color:"+userArray[j].getplayerColor()+";\"><span style=\"color:white;white-space: nowrap; transition: width 2s;margin-top:2px;\">"+userArray[j].getplayerName()+": "+ "</span>"+ "<span id=\"score\" style=\"white-space: nowrap;margin-left:1%;margin-left:5%;color:white;\">" +"Dummy Text"+ "</span>"  +  "</div><br>";
		}
	}

    if(document.getElementById("leaderBoardParent")) {
        document.getElementById("leaderBoardParent").innerHTML=ubsLeaderBoardTemplate(leaderBoardObject);
    }

}

ubsApp.openScoreBoard = function(){
  monopoly.renderPageforBoard(monopoly.pages.SideScoreBoardPage);
}

ubsApp.closeSideIcon = function(){
    $("#templateContent").empty();
}

ubsApp.openQuizIfValid = function() {

    if(userArray[playerChance].canUserTakeQuiz()) {
        userArray[playerChance].incrementQuizCount();
        ubsApp.openPopup({
            "message" : ubsApp.translation["quizStartHelp"],
            "header"  : ubsApp.translation["quiz"],
            "headerStyle" : "text-align: center;  color: green; font-weight: 700",
            "buttons":[
                    {
                            'id':"quizStart",
                            'name' : ubsApp.getTranslation("startQuiz"),
                            'action': "ubsApp.closePopup();ubsApp.renderPageByName('generalQuizStarter');"
                    }
                 ]

          });
        
    } else {
        ubsApp.openPopup({
        "message" : ubsApp.getTranslation("quizLimitReachedForWeek"),
        "header" : ubsApp.getTranslation("ERROR"),
        "headerStyle" : "text-align: center;  color: red; font-weight: 700; ",
        });
    }

}

ubsApp.restartGame = function() {
    monopoly.numplayers=0;
    numplayers = monopoly.numplayers;
    monopoly.playerChance = 0;
    userArray=[];
    monopoly.intitializeTemplates();
    monopoly.initializeScenarios();
    ubsApp.intitializeTemplates();
	ubsApp.mapTemplatetoFunction();
	ubsApp.initializeUbsPages();
	monopoly.initializePages();
    monopoly.renderPageforBoard(monopoly.pages.Splash);

    //raise Audio Event splash
    var audioElement = document.getElementById('splash');
    ubsApp.raiseAudioEvent(audioElement, 'splashScreenAudio');
    //setTimeout(monopoly.renderPageforBoard, 30, monopoly.pages.Splash);
    setTimeout(monopoly.renderPageforBoard, renderTimeOutMiliSec, monopoly.pages.CreateOrJoinRoom);
}

monopoly.initializePages = function() {
    monopoly.pages = $.extend({},monopoly.origpages);
}

ubsApp.startBackgroundMusic = function () {
    $('#backgroundaudio').get(0).play();
}

ubsApp.stopBackgroundMusic = function () {
    $('#backgroundaudio').get(0).pause();
}

ubsApp.populateStudentArray = function(studentArray) {

    for(let i = 0; i < studentArray.length; i++) {
        if (ubsApp.isAndroidEnabled) {
            if (studentArray[i].StudentGender.toLowerCase() == "male") {
                studentArray[i].isMale = true;
                studentArray[i].isFemale = false;
            } else {
                studentArray[i].isFemale = true;
                studentArray[i].isMale = false;
            }
        }
        else {
            if (studentArray[i].gender.toLowerCase() == "male") {
                studentArray[i].isMale = true;
                studentArray[i].isFemale = false;
            } else {
                studentArray[i].isFemale = true;
                studentArray[i].isMale = false;
            }
        }
        studentArray[i].MALE = ubsApp.getTranslation("MALE");
        studentArray[i].FEMALE = ubsApp.getTranslation("FEMALE");
        studentArray[i].update = ubsApp.getTranslation("UPDATE");
        studentArray[i]["delete"] = ubsApp.getTranslation("DELETE");
    }
}

socket.on('nextMove', function (data) {
    console.log("Toggling player chance");
    ubsApp.nextMove();
})