ubsApp.getCreateRoomTemplate = function (templateConfig, tempVar) {
    tempVar.html += ubsCreateRoomTemplate(templateConfig);
}


ubsApp.openCreateRoomTemplate = function () {
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("createRoomPage");
}

ubsApp.createRoom = function () {
    //Message to stop multiple clicks when API is slow 
    numOfWeeks = ubsApp.maxNumOfWeeks = $("input[name='noOfWeeks']:checked"). val();
    userLimit = document.getElementById("num_online_players").value;
    userName = document.getElementById("playerNameInput").value;
    userAge = document.getElementById("playerAge").value;
    userGender = document.getElementById("playerGender").value;
    languageSelected = document.getElementById("languageSelect").value;
    console.log("language :" + languageSelected)
    var alphaNumeric = /^[0-9a-zA-Z]+$/;
    isAlphaNumeric = alphaNumeric.test(userName); 
    if (!userName) {
        console.log("Invalid username");
        document.getElementById("inputErrorMessage").innerHTML="Please enter valid username"
    } else if (!isAlphaNumeric){
        document.getElementById("inputErrorMessage").innerHTML="Only alphabets and numbers allowed in the username"
    } else if (!userAge || userAge >100) {
        console.log("Invalid age");
        document.getElementById("inputErrorMessage").innerHTML="Please enter valid age"
    }  else {
        document.getElementById("inputErrorMessage").innerHTML=""
        document.getElementById('roomCreatingMessage').innerHTML="Creating Room";
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
