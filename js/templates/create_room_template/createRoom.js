ubsApp.getCreateRoomTemplate = function (templateConfig, tempVar) {
    // templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
    tempVar.html += ubsCreateRoomTemplate(templateConfig);
}


ubsApp.openCreateRoomTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("createRoomPage");
}

//add create room functions below

ubsApp.createRoom = function () {
    // ubsApp.maxNumOfWeeks = document.getElementById("");
    numOfWeeks = ubsApp.maxNumOfWeeks = $("input[name='noOfWeeks']:checked"). val();
    userLimit = document.getElementById("num_online_players").value;
    userName = document.getElementById("playerNameInput").value;
    userAge = document.getElementById("playerAge").value;
    userGender = document.getElementById("playerGender").value;
    languageSelected = document.getElementById("languageSelect").value;
    console.log("language :" + languageSelected)
    if (!userName) {
        console.log("Invalid username");
        ubsApp.openResultPopup({
            "message": "Please enter valid username",
            "header": "Invalid Username",
            "headerStyle": "text-align: center;  color: black; font-weight: 700;",
            "buttons": [
                {
                    'id': "closePopupButton",
                    'name': "CLOSE",
                    'action': "ubsApp.callServerClosePopup();"
                }
            ]
        });
    } else if (userAge <= 0 || !userAge) {
        console.log("Invalid age");
        ubsApp.openResultPopup({
            "message": "Please enter valid age",
            "header": "Invalid age",
            "headerStyle": "text-align: center;  color: black; font-weight: 700;",
            "buttons": [
                {
                    'id': "closePopupButton",
                    'name': "CLOSE",
                    'action': "ubsApp.callServerClosePopup();"
                }
            ]
        });
    } else if(userLimit == 1){
        console.log("Please visit pratham web URL");
        ubsApp.openResultPopup({
            "message": "Please play on http://meridukan.prathamopenschool.org/",
            "header": "Single player",
            "headerStyle": "text-align: center;  color: black; font-weight: 700;",
            "buttons": [
                {
                    'id': "closePopupButton",
                    'name': "CLOSE",
                    'action': "ubsApp.callServerClosePopup();"
                }
            ]
        });
    }
    else {
        socket.emit("serverCreateRoom", {
            description: "create room button clicked",
            roomLimit: userLimit,
            userName: userName,
            userAge : userAge,
            userGender : userGender,
            roomWeeks : numOfWeeks,
            roomLanguage : languageSelected
        });
    }
}