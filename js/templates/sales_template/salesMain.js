function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 300);
    });
  }

var globalTempVar;
var globalTempConfig;
var socketComplete =false;
ubsApp.getSalesTemplate = function(templateConfig, tempVar){
    tempVar.salesConfig = templateConfig;
    if(monopoly.isCaller == true){
        ubsApp.selectAvailableItems(templateConfig, tempVar);
    }
    tempVar = globalTempVar;
    templateConfig = globalTempConfig;
}

socket.on("clientSelectAvailableItem",function(data){
    renderSales(data);
})

function renderSales(data){
        config=data.config;
        arr=data.arr;
        noOfItems= data.noOfItems;
        val=data.val;
        tempVar = data.tempVar;
        let orderNo=1;
        for(var i=0;i<noOfItems;i++){
            var x = config.order[i].itemId;
            config.order[i].rate = ubsApp.translation.itemRateDisplay[x];
    
            config.order[i].item = ubsApp.translation.itemTable[x];
    
            if(config.order[i].exclude==false){
                config.order[i].no = orderNo;
                orderNo++;
                val+=config.order[i].quantity * ubsApp.salesConfig.itemRate[x];
                if(config.order[i].discountOnItem) {
                    if(config.order[i].discountOnItem.type == 1) {
                        val-=config.order[i].discountOnItem.value * config.order[i].quantity * ubsApp.salesConfig.itemRate[x] / 100;
                    } else {
                        val-=config.order[i].discountOnItem.value;
                    }
                }
            }
        }
    
        if(config.discountOnTotal) {
            if(config.discountOnTotal.type == 1) {
                val-=config.discountOnTotal.value * val / 100;
            } else {
                val-=config.discountOnTotal.value;
            }
        }
        config["tempTotal"] = Math.round(val * 100) / 100;
         
        
        templateConfig=config;
        templateConfig.SUBMIT = ubsApp.getTranslation("SUBMIT");
           templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
           templateConfig.Customer = ubsApp.getTranslation("Customer");
           templateConfig.gameLogo = ubsApp.getTranslation("gameLogo");
       
           templateConfig.salesConfig = ubsApp.getTranslation("sale");
           templateConfig.sale = ubsApp.getTranslation("sale");
           templateConfig.Discount = ubsApp.getTranslation("Discount");
           templateConfig.PLAYER = ubsApp.getTranslation("PLAYER");
           templateConfig.Total = ubsApp.getTranslation("Total");
       
           
       
           ubsApp.startRecordingTimer(templateConfig);
           tempVar.html += ubsOrdertemplate(templateConfig);
           ubsApp.raiseAudioEvent(document.getElementById('templateContent'),'spaceLanding');
           globalTempVar = tempVar;
           globalTempConfig = templateConfig;

           if(ubsApp.noItemsForSale) {
               ubsApp.noItemsForSale = false;
               ubsApp.openPopup({
                               "message" : ubsApp.getTranslation("salesNoItemMessage"),
                               "header" : ubsApp.getTranslation("ERROR"),
                               "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                               "buttons":[
                                   {
                                       'id':"closePopupButton",
                                       'name' : ubsApp.getTranslation("CLOSE"),
                                         'action': "ubsApp.raiseAudioEvent(document.getElementById('closePopupButton'),'saleEnd'); ubsApp.callServerClosePopup(); ubsApp.stopTimer(); ubsApp.closeCurrentScenario(); ubsApp.callServerNextMove();"
                                   }
                               ]
                               });
           }
     socketComplete=true;
     socket.emit('renderSalesComplete',{
         roomCode : ubsApp.studentArray[playerChance].room,
         globalTempVar : globalTempVar,
         globalTempConfig : globalTempConfig
     })
}

ubsApp.bindSaleTabEvents = function() {


    $(".saleInputButtons").on("keydown",function(event){

                let nextIndex = -12323;
                if(event.target.id != "discount") {
                   nextIndex = parseInt(event.target.id[event.target.id.length - 1]) + 1;
                  }


               if (event.keyCode == 9 || event.keyCode == 13) {
                    event.preventDefault();
                   if($('#input' + nextIndex).length) {
                         if(!$('#input' + nextIndex).is(':disabled')) {
                            $('#input' + nextIndex).focus();
                         } else {
                              nextIndex++;
                              var gotInput = false;
                            while($('#input' + nextIndex).length) {
                                if(!$('#input' + nextIndex).is(':disabled')) {
                                    $('#input' + nextIndex).focus();
                                    gotInput = true;
                                    break;
                                }
                                nextIndex++;

                            }

                            if(!gotInput) {
                                if ($('#discount').length) {
                                                        $('#discount').focus();
                                                   }else {
                                                    $('#receiptTotal').focus();
                                                   }
                            }
                         }


                   } else if ($('#discount').length && event.target.id != "discount") {
                        $('#discount').focus();
                   }else {
                    $('#receiptTotal').focus();
                   }

               }

        });


}

ubsApp.salesOnLoadActions = function () {
     $('#bill').animate({
                      scrollLeft: $("#receiptTotal").offset().left
                    }, 2000);

     ubsApp.bindSaleTabEvents();
}
ubsApp.validateAmount = function(showPopup = true) {
    var item = document.getElementsByName('amt');
    var salesSubmitButton = document.getElementById('salesSubmitButton');
    var sum_of_individual_items=0;
	for(var i=0;i<item.length;i++){
    	if(!item[i].value) {
    	   if(showPopup) {
    	     ubsApp.raiseAudioEvent(salesSubmitButton, 'wrongAnswer');
                	   ubsApp.openPopup({
                           "message" : "Please calculate amount for all items. Do you need Help?",//ubsApp.getTranslation("quizLimitReachedForWeek"),
                          "header" : ubsApp.getTranslation("ERROR"),
                          "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
                          "imageUrl" : "",
                           'buttons' : [
                               {
                                   'name' : ubsApp.getTranslation("yes"),
                                   'action': "ubsApp.callServerClosePopup();ubsApp.startHelp(\'salesHelp\');",
                               },

                               {
                                           'name' : ubsApp.getTranslation("no"),
                                           'action': "ubsApp.callServerClosePopup();"
                               }
                           ]
                       });
    	   }

           return false;
	    }else{
            if(item[i].id=="discount"){
                sum_of_individual_items=sum_of_individual_items-parseFloat(item[i].value);
            }
            else{
                sum_of_individual_items=sum_of_individual_items+parseFloat(item[i].value);
            }
            
        }
	}
    if(!$("#receiptTotal").val()||sum_of_individual_items!=parseFloat($("#receiptTotal").val())) {
        if(showPopup) {
             ubsApp.openPopup({
                                   "message" : "Please calculate total amount. Do you need any help?",//ubsApp.getTranslation("quizLimitReachedForWeek"),
                                  "header" : ubsApp.getTranslation("ERROR"),
                                  "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
                                  "imageUrl" : "",
                                   'buttons' : [
                                       {
                                           'name' : ubsApp.getTranslation("yes"),
                                           'action': "ubsApp.callServerClosePopup();ubsApp.startHelp(\'salesHelp\');",
                                       },

                                       {
                                                   'name' : ubsApp.getTranslation("no"),
                                                   'action': "ubsApp.callServerClosePopup();"
                                       }
                                   ]
                               });
        }

                   return false;
        }
    return true;
}

ubsApp.callsReduceInventory = function(page,amount,hideScenarios,total,totalTime, startTime, questionId){
    socket.emit('serverReduceInventory',{
        page : page,
        amount : amount,
        hideScenarios : hideScenarios,
        total : total,
        totalTime : totalTime,
        startTime : startTime,
        questionId : questionId,
        roomCode: ubsApp.studentArray[playerChance].room
    })
}

socket.on('clientReduceInventory', function(data){
    page = data.page;
    amount = data.amount;
    hideScenarios = data.hideScenarios;
    total = data.total;
    totalTime = data.totalTime;
    startTime = data.startTime;
    questionId = data.questionId;

    ubsApp.reduceInventory(page,amount,hideScenarios,total,totalTime, startTime, questionId);    
})

ubsApp.reduceInventory= function(page,amount,hideScenarios,total,totalTime, startTime, questionId){
    console.log("Sales Question ID: " + questionId);
    total = parseFloat(total);
	let time = totalTime - $("#seconds").html();
	ubsApp.stopTimer();
	let c = userArray[playerChance].getplayerScore();
	let r = userArray[playerChance].getReputationPts();
	let s = userArray[playerChance].getInventoryScore();

	s-=0.85 * total * ubsApp.getMultiplier() /(1000);									//Multiplier from Inventory % to cash is 1000
	userArray[playerChance].setInventoryScore(s);
	let userTotal = Math.round(parseFloat($("#receiptTotal").val()) * 100) / 100;
	let cashIncreased = Math.round(total*ubsApp.getMultiplier() * 100)/ 100;
	if(Math.abs(userTotal - total) < 1){


		userArray[playerChance].setplayerScore(c+cashIncreased);

    let reputationPointIncrease = ubsApp.getReputationPointsIncreasedInSales(time, totalTime, ubsApp.currentScenarioCategory);

		userArray[playerChance].setReputationPts(r + reputationPointIncrease);
		ubsApp.raiseAudioEvent(document.getElementById('salesSubmitButton'), 'rightAnswer');
        ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,reputationPointIncrease, 0, ubsApp.getCategoryToPostScore(ubsApp.currentScenarioCategory), startTime,"salesReputationPointIncrease");
		ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,cashIncreased, 0, ubsApp.getCategoryToPostScore(ubsApp.currentScenarioCategory), startTime,"salesCashIncrease");
        let message = ubsApp.getTranslation("salesCorrectAnswer");
		if(reputationPointIncrease > 0) {
		    message += "<br>" + ubsApp.getTranslation("salesCorrectRptpt1").replace("{{reputationPoints}}",reputationPointIncrease).replace("{{time}}",time);
		}
		message += "<br>" + ubsApp.getTranslation("salesCorrectRptpt2").replace("{{cashincreased}}",cashIncreased);
		ubsApp.openResultPopup({
                "message" : message,
                "header" : ubsApp.getTranslation("salesResultHeader"),
                "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                "imageUrl" : ubsApp.getTranslation("wowImage"),
                "buttons":[
                	{
                		'id':"closePopupButton",
                		'name' : ubsApp.getTranslation("CLOSE"),
              			'action': "ubsApp.raiseAudioEvent(document.getElementById('closePopupButton'), 'saleEnd');setTimeout(function(){ubsApp.callServerClosePopup();}, 2000);"
                	}
                ]
                });

	}else{

        let message = ubsApp.getTranslation("salesWrongAnswer");
		if(userTotal>total){
			userArray[playerChance].setReputationPts(r-4);
			userArray[playerChance].setplayerScore(c+cashIncreased);
			message+= "<br>" + ubsApp.getTranslation("salesWrongRptpt") + 4 + ". ";
      ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,r-4, 0,ubsApp.getCategoryToPostScore(ubsApp.currentScenarioCategory), startTime,"salesReputationPointDecrease");
      ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,c+cashIncreased, 0, ubsApp.getCategoryToPostScore(ubsApp.currentScenarioCategory), startTime,"salesCashIncrease");
 
		}
		else{
		    cashIncreased = Math.round(userTotal*ubsApp.getMultiplier() * 100)/ 100;
		    userArray[playerChance].setReputationPts(r-4);
			userArray[playerChance].setplayerScore(c+cashIncreased);
			message+="<br>" + ubsApp.getTranslation("salesWrongRptpt") + 4 + ". ";
      ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,r-4, 0, ubsApp.currentScenarioCategory, startTime,"salesReputationPointDecrease");
      ubsApp.updateScoreInDB(userArray[playerChance].getplayerStudentId(),questionId,c+cashIncreased, 0, ubsApp.currentScenarioCategory, startTime,"salesCashIncrease");

		}

		message+= "<br>" +ubsApp.getTranslation("salesWrongRptpt3").replace("{{cashincreased}}",cashIncreased);
		ubsApp.raiseAudioEvent(document.getElementById('salesSubmitButton'), 'wrongAnswer');
		ubsApp.openResultPopup({
               "message" : message,
               "header" : ubsApp.getTranslation("salesResultHeader"),
               "headerStyle" : "text-align: center;  color: black; font-weight: 700; ",
               "imageUrl" : "images/wrong.jpg",
               "buttons":[
                      {
                           'name' : ubsApp.getTranslation("yes"),
                           'action': "ubsApp.callServerClosePopup(true);ubsApp.startHelp(\'salesAnswerHelp\');",
                     },

                	{
                		'id':"closePopupButton",
                		'name' : ubsApp.getTranslation("no"),
              			'action': "ubsApp.raiseAudioEvent(document.getElementById('closePopupButton'), 'saleEnd');ubsApp.callServerClosePopup()"
                	}
                ]
               });
	}
//	ubsApp.checkPageorBoard(page,amount,hideScenarios);
}

ubsApp.getReputationPointsIncreasedInSales = function(time, totalTime, currentScenarioCategory) {

let level1 = 20;
let level2 = 40;
let level3 = 60;
let level4 = 80;

if(currentScenarioCategory == "salesEasy") {
    level1=30;level2=50;level3=70;level4=90;
} else if(currentScenarioCategory == "salesModerate") {
    level1=40;level2=60;level3=80;level4=100;
} else if(currentScenarioCategory == "salesDifficult") {
    level1=65;level2=95;level3=125;level4=155;

}
let reputationPointIncrease = 0;
 if(time<=level1)reputationPointIncrease=4;
 		else if (time<=level2)reputationPointIncrease=3;
 		else if (time<=level3)reputationPointIncrease=2;
 		else if (time<=level4)reputationPointIncrease=1;

 return reputationPointIncrease;
}

ubsApp.calculateBill = function(){
	let total=0;
	var item = document.getElementsByName('amt');
	for(var i=0;i<item.length;i++){
        if(parseFloat(item[i].value) && item[i].id=="input"+(i+1))
            total += parseFloat(item[i].value);
        else if(parseFloat(item[i].value) && item[i].id=="discount")
        	total-= parseFloat(item[i].value);
    }
	//document.getElementById("receiptTotal").value=total;
}

ubsApp.selectAvailableItems = function(config, tempVar){

	let noOfItems =config.order.length;
	let val=0;
	let percent = 1-ubsApp.checkInventory();
	let notAvailable = Math.round(percent*noOfItems);
	let arr = [];

    if(notAvailable == noOfItems) {
        ubsApp.noItemsForSale = true;
    }
	while(arr.length < notAvailable){
	    var randomNumber = Math.floor(Math.random()*noOfItems);
	    if(arr.indexOf(randomNumber) > -1) continue;
	    arr[arr.length] = randomNumber;
	}
    for(let i = 0; i<arr.length;i++){
        config.order[arr[i]].exclude = true;
    }
    socket.emit("serverSelectAvailableItem",{
        config:config,
        arr:arr,
        noOfItems: noOfItems,
        val:val,
        tempVar : tempVar,
        roomCode: ubsApp.studentArray[playerChance].room

    });

}

ubsApp.checkInventory=function(){

	let percent = 0;
	let invLevel = userArray[playerChance].getInventoryScore();

    if(invLevel > 80 ){
       percent = (Math.random() % 0.1)+0.9;
    }
    else  if(invLevel >60 ){
       percent = (Math.random() % 0.2)+0.8;
    }
    else  if(invLevel > 40 ){
       percent = (Math.random() % 0.2)+0.6;
    }
    else  if(invLevel > 20 ){
       percent = (Math.random() % 0.2 )+0.4;
    }
    else  if(invLevel > 0 ){
       percent = (Math.random() % 0.2)+0.2;
    } else  {
        percent = 0;
    }
    return percent;
}

ubsApp.getMultiplier = function() {
    if(userArray[playerChance].getReputationPts() >= 100) {
        return 55;
    }
    return 50;
}
ubsApp.salesTimeOut= function(temp){
    if(ubsApp.validateAmount(false)) {
        $('#salesSubmitButton').trigger("click");
    } else {
        let r = userArray[playerChance].getReputationPts();

            let message = ubsApp.getTranslation("salesWrongAnswer");
        	userArray[playerChance].setReputationPts(r-4);
        	ubsApp.raiseAudioEvent(document.getElementById(temp.divID), 'timeOut');
            message+="<br>" + ubsApp.getTranslation("salesTimeOut");
            ubsApp.openResultPopup({
                   "message" : message,
                   "header" : ubsApp.getTranslation("salesResultHeader"),
                   "headerStyle" : "text-align: center;  color: black; font-weight: 700; ",
                   "buttons":[
                                        {
                                            'id':"closePopupButton",
                                            'name' : ubsApp.getTranslation("CLOSE"),
                                            'action': "ubsApp.callServerClosePopup();"
                                        }
                                    ]
                   });
    }

	}

ubsApp.getCategoryToPostScore = function(category){
  var numericCategory;
  switch(category){
    case "salesSimple":
      numericCategory = 1;
      break;
    case "salesEasy":
      numericCategory = 2;
      break;
    case "salesModerate":
      numericCategory = 3;
      break;
    case "salesDifficult":
      numericCategory = 4;
      break;
  }

  return numericCategory;
}

document.addEventListener('onkeyup',calculatorTotal);

function calculatorTotal(event){
    calculatedTotal=document.getElementById("receiptTotal").value;
    socket.emit('textToReplicateSale',{
        description : "Event sends keypress events in textbox for total amount sale", total:calculatedTotal, roomCode : ubsApp.studentArray[0].room
    })
  
}
socket.on('replicatedTextTotal',function(data){
  document.getElementById("receiptTotal").value=Number(data.calculatedTotal);
})

document.addEventListener('onkeyup',eachOrderPrice);

function eachOrderPrice(event,imp){
    orderPrice=imp.value;
    id=imp.id;
    socket.emit('textToReplicateSaleOrder',{
        description : "Event sends keypress events in textbox for total amount sale", 
        orderPrice:orderPrice, 
        roomCode : ubsApp.studentArray[0].room,
        id : id
    })
  
}
socket.on('replicatedTextSaleOrder',function(data){
  document.getElementById(data.id).value=Number(data.orderPrice);
})

document.addEventListener('onkeyup',discountSale);

function discountSale(event){
    discountSaleValue=document.getElementById("discount").value;
    socket.emit('textToReplicateSaleDiscount',{
        description : "Event sends keypress events in textbox for discount sale", discount:discountSaleValue, roomCode : ubsApp.studentArray[0].room
    })
  
}
socket.on('replicatedTextDiscount',function(data){
  document.getElementById("discount").value=Number(data.discountSaleValue);
})