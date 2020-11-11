const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var map = require('hashmap');
let rooms = [];
let userLimitMap = new map();
let roomUserMap = new map();
let creatorMap = new map();
let studentArrayMap = new map();
let roomPropertiesMap = new map();
let roomPropertiesList = new Array(); // [creatorSocketId, userLimit, userLanguage, numOfWeeks]

app.use(express.static(__dirname));
io.on('connection', function (socket) {

    socket.on('serverCreateRoom', function (data) {
        let users = new Set();
        let players = [];
        let player = {};
        userLimit = Number(data.roomLimit);
        userName = data.userName;
        language = data.roomLanguage;
        weeks = Number(data.roomWeeks);
        roomnum = Math.floor(1000 + Math.random() * 9000); //Generate random num for room code
        while (rooms.includes(roomnum)) {
            roomnum = Math.floor(1000 + Math.random() * 9000);
        }
        rooms.push(roomnum);
        creatorMap.set(roomnum, socket.id); //remove
        users.add(userName);
        userList = Array.from(users);
        userLimitMap.set(roomnum, userLimit); //remove
        socket.join(roomnum);

        roomUserMap.set(roomnum, users);
        roomPropertiesList.push([socket.id, userLimit, language, weeks]);
        roomPropertiesMap.set(roomnum, roomPropertiesList);

        playerChance = 0;//Initialize creator to be first player
        player.name = userName;
        player.age = Number(data.userAge);
        player.gender = data.userGender;
        player.room = roomnum;
        players.push(player);
        studentArrayMap.set(roomnum, players);

        socket.emit("populateCreateRoomLobby", { userSet: userList, studentArray: studentArrayMap.get(roomnum), roomCode: roomnum, isCreator: true, playerAge: data.userAge, playerGender: data.userGender });

    })

    socket.on('serverJoinRoom', function (data) {
        users = [];
        let player = {};
        roomCode = Number(data.roomCode);

        if (!rooms.includes(roomCode)) {
            console.log("Invalid room code");
            socket.emit("joinRoomPopup", { description: "Room code does not exist!", header: "Invalid room code" });

        } else if (roomUserMap.get(roomCode).has(data.userName)) {
            console.log("Username already exists");
            socket.emit("joinRoomPopup", { description: "Sorry, this username is already taken", header: "Username already exists" });

        } else if (roomUserMap.get(roomCode).size < userLimitMap.get(roomCode)) {
            socket.join(roomCode);
            roomUserMap.get(roomCode).add(data.userName);
            users = Array.from(roomUserMap.get(roomCode));
            playerChance = roomUserMap.get(roomCode).size - 1;
            console.log(roomUserMap.get(roomCode).size + " players in room " + roomCode + " : " + users);

            player.name = data.userName;
            player.age = Number(data.age);
            player.gender = data.gender;
            player.room = roomCode;
            player.chance = playerChance;
            studentArrayMap.get(roomCode).push(player);

            socket.emit("populateJoinRoomLobby", { userList: users, studentArray: studentArrayMap.get(roomCode), roomCode: roomCode, isCreator: false });
            socket.in(roomCode).emit("populateJoinRoomLobby", { userList: users, studentArray: studentArrayMap.get(roomCode), roomCode: roomCode, isCreator: false });
            socket.to(creatorMap.get(roomCode)).emit("populateCreateRoomLobby", { userSet: users, isCreator: true, roomCode: roomCode, studentArray: studentArrayMap.get(roomCode) });

        }//TODO : room full popup

    })

    socket.on('storePlayerDetailsToServer', function (data) {
        socket.emit('storePlayerDetailsToClient', {
            description: "Calls store player details on all clients",
            roomLanguage: data.roomLanguage
        })
        socket.to(Number(data.roomCode)).emit('storePlayerDetailsToClient', {
            description: "Calls store player details on all clients",
            roomLanguage: data.roomLanguage
        })
    })

    socket.on('actualTransferToBank', function (data) {
        socket.emit('openActualTransferToBank', { questionId: data.qid });
        socket.in(Number(data.roomCode)).emit('openActualTransferToBank', { questionId: data.qid });

    });


    socket.on('transferToBank', function (data) {
        socket.in(Number(data.roomCode)).emit('openTransferToBank', { flag: 1, openNextMove: false });
        socket.emit('openTransferToBank', { flag: 1, openNextMove: false });
    })

    socket.on('textToReplicate', function (data) {
        socket.broadcast.emit('replicatedText', {
            description: "Event to send back the text received from the player", amountToTransfer: data.cash
        })
    })

    socket.on('closeScenario', function (data) {
        socket.emit('closingCurrentScenario', {
            description: "This function would call the close scenario function on every client"
        });
        socket.in(Number(data.roomCode)).emit('closingCurrentScenario', {
            description: "This function would call the close scenario function on every client"
        });
    })

    socket.on('serverClosePopup', function (data) {
        socket.emit('socketClosePopup', {
            description: "Calling close pop up on current client",
            config: data.config,
            doNextMove: data.doNextMove
        });
        socket.in(Number(data.roomCode)).emit('socketClosePopup', {
            description: "Calling close popup on all clients in room",
            config: data.config,
            doNextMove: data.doNextMove
        });
    })

    socket.on('serverMyMove', function (data) {
        socket.emit('clientMyMove', {
            userDiceValue: data.userDiceValue,
            userChance: data.userChance,
            userPosition: data.userPosition,
            userRoom: data.userRoom,
            isCaller : true
        });
        socket.in(Number(data.userRoom)).emit('clientMyMove', {
            userDiceValue: data.userDiceValue,
            userChance: data.userChance,
            userPosition: data.userPosition,
            userRoom: data.userRoom,
            isCaller : false
        });
    })

    socket.on('callNextMove', function(data){
        socket.emit('nextMove', {
            description: "Calling Next Move in all Cleints in my room",
            isCaller:true
        });
        socket.in(Number(data.roomCode)).emit('nextMove', {
            description: "Calling Next Move in all Cleints in my room",
            isCaller:false
        });
    })

    socket.on('sendSelectedOptionId', function(data){
        socket.emit('selectedOptionId', {
            description: "Transferring selected option ID",
            isCaller:true,
            optionId: data.optionId
        });
        socket.in(Number(data.roomCode)).emit('selectedOptionId', {
            description: "Transferring selected option ID",
            isCaller:false,
            optionId: data.optionId
        });
    })

    socket.on('startScenarioToServer', function (data) {
        socket.in(Number(data.roomCode)).emit('startScenarioToClient', {
            description : "This event calls the startScenario on all clients in room", 
            templateName : data.templateName, 
            template : data.template, 
            key : data.key
        })
        socket.emit('startScenarioToClient', {
            description: "This event calls the startScenario on calling client in room", 
            templateName : data.templateName, 
            template : data.template, 
            key : data.key
        })
    })

    socket.on('serverAddToDisplay', function (data) {
        socket.in(Number(data.roomCode)).emit('clientAddToDisplay', {
            description: "This event calls the AddToDisplay (Calculator) on all clients in room", 
            clickedButtonVal:data.clickedButtonVal
        })
    })

    socket.on('serverSelectAvailableItem', function (data) {
        
        socket.in(Number(data.roomCode)).emit('clientSelectAvailableItem', {
            description: "This event calls the selectAvailableItem on all clients in room",
            config:data.config,
            arr:data.arr,
            noOfItems: data.noOfItems,
            val:data.val,
            tempVar : data.tempVar,
            isCaller : false
        })
        socket.emit('clientSelectAvailableItem', {
            description: "This event calls the selectAvailableItem on calling client in room",
            config:data.config,
            arr:data.arr,
            noOfItems: data.noOfItems,
            val:data.val,
            tempVar : data.tempVar,
            isCaller : true
        })
    })

    socket.on('serverReduceInventory', function(data){
        socket.in(Number(data.roomCode)).emit('clientReduceInventory',{
            description : "This event calls Reduce Inventory function on all clients in room",
            page : data.page,
            amount : data.amount,
            hideScenarios : data.hideScenarios,
            total : data.total,
            totalTime : data.totalTime,
            startTime : data.startTime,
            questionId : data.questionId,
        })
        socket.emit('clientReduceInventory',{
            description : "This event calls Reduce Inventory function on calling client in room",
            page : data.page,
            amount : data.amount,
            hideScenarios : data.hideScenarios,
            total : data.total,
            totalTime : data.totalTime,
            startTime : data.startTime,
            questionId : data.questionId,
        })
    })

    socket.on('serverPayOffScenario', function(data){
        socket.in(Number(data.roomCode)).emit('clientPayOffScenario', { 
            openNextMove: data.openNextMove
        });
        socket.emit('clientPayOffScenario', { 
            openNextMove: data.openNextMove 
        });
    })

    socket.on('serverPayDebt',function(data){
        socket.in(Number(data.roomCode)).emit('clientPayDebt', { 
            questionId: data.questionId
        });
        socket.emit('clientPayDebt', { 
            questionId: data.questionId 
        });
    })

    socket.on('serverPayOffDropDown', function(data){
        socket.in(Number(data.roomCode)).emit('clientPayOffDropDown',{
            dropDownValue : data.dropDownValue
        })
    })
    socket.on('textToReplicateSale', function (data) {
        socket.in(Number(data.roomCode)).emit('replicatedTextTotal', {
            description: "Event to send back the text received from the player", calculatedTotal: data.total
        })
    })

    socket.on('textToReplicateSaleOrder', function (data) {
        socket.in(Number(data.roomCode)).emit('replicatedTextSaleOrder', {
            description: "Event to send back the text received from the player", orderPrice: data.orderPrice, id : data.id
        })
    })

    socket.on('renderSalesComplete', function(data){
        socket.in(Number(data.roomCode)).emit('renderSalesCompleteClient', { 
            globalTempVar: data.globalTempVar,
            globalTempConfig : data.globalTempConfig
        });
        socket.emit('renderSalesCompleteClient', { 
            globalTempVar: data.globalTempVar,
            globalTempConfig : data.globalTempConfig
        });
    })


    socket.on('serverLuckPaymentQuiz', function(data) {
        socket.in(Number(data.roomCode)).emit('clientLuckPaymentQuiz', {
            page : data.page,
            roomCode : data.roomCode
        })
        socket.emit('clientLuckPaymentQuiz', {
            page : data.page,
            roomCode : data.roomCode
        })
    })

    socket.on('serverPayOrGain', function(data){
        socket.in(Number(data.roomCode)).emit('clientPayOrGain', {
            pageName : data.pageName,
            questionId : data.questionId,
            roomCode : data.roomCode
        })
        socket.emit('clientPayOrGain', {
            pageName : data.pageName,
            questionId : data.questionId,
            roomCode : data.roomCode
        })
    })

    socket.on('serverQuizPage', function(data){
        socket.in(Number(data.roomCode)).emit('clientQuizPage', {
            quizPage : data.quizPage,
            roomCode : data.roomCode
        })
        socket.emit('clientQuizPage', {
            quizPage : data.quizPage,
            roomCode : data.roomCode
        })
    })

    socket.on('serverOpenPopUp', function(data){
        socket.emit('clientOpenPopUp', {config : data.config});
        socket.in(Number(data.roomCode)).emit('clientOpenPopUp', {config : data.config})
    })



    socket.on('displayNextQuizQuestion', function(data){
        socket.in(Number(data.roomCode)).emit('clientDisplayNextQuestion', {
            description: "Displaying client by name", page:data.page,
            updateCorrectAnswerScore: data.updateCorrectAnswerScore,
            choiceSelected: data.choiceSelected
        })

        socket.emit('clientDisplayNextQuestion', {
            description: "Displaying client by name", page:data.page,
            updateCorrectAnswerScore: data.updateCorrectAnswerScore,
            choiceSelected: data.choiceSelected
        })
    })

    socket.on('socketCheckAnswerAndRenderNextPage', function(data){
        socket.in(Number(data.roomCode)).emit('checkAnswerAndRenderNextPage',{
            page: data.page,
            answer: data.answer,
            optionName: data.optionName,
            questionId: data.questionId,
            reputationPoints: data.reputationPoints,
            startTime: data.startTime,
            helpPageName: data.helpPageName,
            entryPoint: data.entryPoint,
            scenarioName: data.scenarioName
        })

        socket.emit('checkAnswerAndRenderNextPage',{
            page: data.page,
            answer: data.answer,
            optionName: data.optionName,
            questionId: data.questionId,
            reputationPoints: data.reputationPoints,
            startTime: data.startTime,
            helpPageName: data.helpPageName,
            entryPoint: data.entryPoint,
            scenarioName: data.scenarioName
        })
        
    })


    socket.on('decisionOptionClicked', function (data) {
       
        socket.emit('decisionOptionsResult', { reputationPts : data.reputationPts, bankBalance: data.bankBalance,
        startTime: data.startTime, questionId: data.questionId,
        insurance: data.insurance, page: data.page,
        pamphlet: data.pamphlet, randomProfit: data.randomProfit });
        socket.in(Number(data.roomCode)).emit('decisionOptionsResult', { reputationPts : data.reputationPts, bankBalance: data.bankBalance,
        startTime: data.startTime, questionId: data.questionId,
        insurance: data.insurance, page: data.page,
        pamphlet: data.pamphlet, randomProfit: data.randomProfit });

    }); 

    socket.on('rollDiceEvent', function (data) {
        socket.emit('replicateRollDice', { diceValue: data.diceValue });
        socket.in(Number(data.roomCode)).emit('replicateRollDice', { diceValue: data.diceValue });

    }); 

    socket.on('increaseInventory', function (data) {
        socket.emit('increaseInventoryLevel');
        socket.in(Number(data.roomCode)).emit('increaseInventoryLevel');

    });   

    socket.on('decreaseInventory', function (data) {
        socket.emit('decreaseInventoryLevel');
        socket.in(Number(data.roomCode)).emit('decreaseInventoryLevel');

    });   


    socket.on('openPurchaseScenario', function (data) {
        socket.emit('openPurchaseScenarioEvent');
        socket.in(Number(data.roomCode)).emit('openPurchaseScenarioEvent');

    });  

    socket.on('pay', function (data) {
        socket.emit('purchaseInventory', { questionId: data.questionId, startTime: data.startTime });
        socket.in(Number(data.roomCode)).emit('purchaseInventory', { questionId: data.questionId, startTime: data.startTime  });

    });

    socket.on('disableScreenForRest', function(data){
        socket.emit('disableScreen',{
            description:'Disable screen for all Ids except this Id',
            playerId:data.playerId
        })
        
        socket.in(Number(data.roomCode)).emit('disableScreen',{
            description:'Disable screen for all Ids except this Id',
            playerId:data.playerId
        })
        
    });

        socket.on('serverOpenWithdrawFromBank', function (data) {
        socket.emit('clientOpenWithdrawFromBank');
        socket.in(Number(data.roomCode)).emit('clientOpenWithdrawFromBank');
    });

    socket.on('serverWithdrawFromBank', function (data) {
        socket.emit('clientWithdrawFromBank', { questionId: data.questionId });
        socket.in(Number(data.roomCode)).emit('clientWithdrawFromBank', { questionId: data.questionId });



    socket.on('ServerStartHelp', function(data){
        socket.emit('ClientStartHelp',{
            description:'ClientStartHelp',
            pageName:data.pageName
        })
        
        socket.in(Number(data.roomCode)).emit('ClientStartHelp',{
            description:'ClientStartHelp',
            pageName:data.pageName
        })
        
    });

    socket.on('serverOpenScoreBoard', function(data){
        socket.emit('clientOpenScoreBoard',{
            description:'clientOpenScoreBoard'
        })
        
        socket.in(Number(data.roomCode)).emit('clientOpenScoreBoard',{
            description:'clientOpenScoreBoard'
            
        })
        
    });

    socket.on('servercloseSideIcon', function(data){
        socket.emit('clientcloseSideIcon',{
            description:'clientcloseSideIcon'
        })
        
        socket.in(Number(data.roomCode)).emit('clientcloseSideIcon',{
            description:'clientcloseSideIcon'
            
        })
        

    });

    socket.on('socketStartHelp', function(data){
        socket.emit('clientStartHelp',{
            description:'Starting Help Scenario',
            pageName:data.pageName
        })
        
        socket.in(Number(data.roomCode)).emit('clientStartHelp',{
            description:'Starting Help Scenario',
            pageName:data.pageName
        })
        
    });

    socket.on('socketCloseHelp', function(data){
        socket.emit('clientCloseHelp',{
            description:'Starting Help Scenario',
            pageName:data.pageName
        })
        
        socket.in(Number(data.roomCode)).emit('clientCloseHelp',{
            description:'Starting Help Scenario',
            pageName:data.pageName
        })
        
    });

})

http.listen(3000, function () {
    console.log('listening on port 3000');
});