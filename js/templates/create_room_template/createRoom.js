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
    //Message to stop multiple clicks when API is slow
    document.getElementById('roomCreatingMessage').innerHTML="Creating Room"; 
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
                    'action': "ubsApp.closeCurrentScenario();"
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
                    'action': "ubsApp.closeCurrentScenario();"
                }
            ]
        });
    }  else {
        monopoly.storeMyDetails(userName, userAge, userGender);
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