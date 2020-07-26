ubsApp.getAddPlayerTemplate=function(templateConfig,tempVar){
    var object={};
    templateConfig=$.extend(templateConfig,object);
    templateConfig.studentList = $.extend(ubsApp.studentArray,[]);
    templateConfig.isStudentAdded = ubsApp.studentArray.length > 0 ? true : false;
    if (ubsApp.isWebEnabled)
        tempVar.html += ubsAddPlayerTemplateonWeb(templateConfig);
    else
        tempVar.html += ubsAddPlayerTemplate(templateConfig);

}


ubsApp.openAddPlayerTemplate = function(){
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("addPlayerPage");
}

ubsApp.addNewPlayer = function () {
    $("#addPlayerValidationMessage").empty();
    let playerName = $("#playerNameInput").val();
    let playerAge = $("#playerAge").val();
    let gender = $("#playerGender").val();

    let message = "";

    if (!playerName) {
        message = ubsApp.getTranslation("ENTER_PLAYER_NAME");
    } else if (!playerAge) {
        message = ubsApp.getTranslation("ENTER_PLAYER_AGE");
    } else if (!gender) {
        message = ubsApp.getTranslation("ENTER_PLAYER_GENDER");
    }
    if (message) {
        $("#addPlayerValidationMessage").append(message);
        return;
    }
    let player = {};
    if (ubsApp.isWebEnabled) {
        player.playername = playerName;
    }
    else {
        player.name = playerName;
    }
    
    player.age = parseInt(playerAge);
    player.gender = gender;
    let players = [];
    players[0] = player;

    if (ubsApp.isAndroidEnabled) {
        Android.addStudents(JSON.stringify(players));
    }

    if (ubsApp.isWebEnabled) {
        player.deviceid = ubsApp.deviceFingerPrint; 
        player.playerid = "";
        
       $.ajax({
            url: "/api/player/AddPlayer",
            type: "post",
            dataType:"json",
            contentType:"application/json",
            data: JSON.stringify(player),
            success : function(data){
                console.log("Player Added successfully" + data);
                if (ubsApp.isWebEnabled) {
                    try {
                        $.ajax({
                            url: "/api/player/GetPlayerList?deviceid=" + player.deviceid,
                            type: "get",
                            dataType: "json",
                            contentType: "application/json",
                            success: function (data) {
                                ubsApp.studentArray = data;
                                ubsApp.populateAndInitOnlinePlayers("PLAYER_ADDED_SUCCESSFULLY");
                            }
                        });


                    } catch (err) {
                        console.log("Error parsing student array from Web");
                        ubsApp.studentArray = [];
                    }
                    
                }
            }
        });
    }
    if (ubsApp.isAndroidEnabled) {
        try {
            ubsApp.studentArray = JSON.parse(Android.getStudentList());
            ubsApp.populateAndInitOnlinePlayers("PLAYER_ADDED_SUCCESSFULLY");

        } catch (err) {
            console.log("Erro parsing student array from andriod");
            ubsApp.studentArray = [];
        }
    }

     else {
        ubsApp.studentArray = JSON.parse("[{\r\n\t\"StudentId\": \"STU111451\",\r\n\t\"StudentAge\": 12,\"StudentGender\": \"male\",\"StudentName\": \"JITENDRA RAMSAJIVAN\"\r\n}, {\r\n\t\"StudentId\": \"STU111453\",\r\n\t\"StudentAge\": 24,\"StudentGender\": \"female\",\"StudentName\": \"ANUSHKA AMIT TIVARI\"\r\n}, {\r\n\t\"StudentId\": \"STU111448\",\r\n\t\"StudentAge\": 32,\"StudentGender\": \"male\",\"StudentName\": \"ANUBHAV SANTOSH\"\r\n}]");

     }
}

ubsApp.populateAndInitOnlinePlayers = function (message) {
    ubsApp.populateStudentArray(ubsApp.studentArray);
    var numberOfPlayers = 4;

    if (ubsApp.studentArray.length < 4) {
        numberOfPlayers = ubsApp.studentArray.length;
    }
    $('#num_online_players')
        .find('option')
        .remove()
        .end();
    for (let i = 1; i <= numberOfPlayers; i++) {
        $('#num_online_players').append('<option value="' + i + '" id="player' + i + '">' + i + '</option>')
    }

    $('#num_online_players').val(numberOfPlayers)

    monopoly.initOnlinePlayers();
    message = ubsApp.getTranslation(message);
    ubsApp.openResultPopup({
        "message": message,
        "header": "",
        "headerStyle": "text-align: center;  color: black; font-weight: 700; "
    });
}

ubsApp.updatePlayer = function(studentId) {

    $("#addPlayerValidationMessage").empty();
        let playerName = $("#" + studentId + "Name").val();
        let playerAge = $("#" + studentId + "Age").val();
        let gender = $("#" + studentId + "Gender").val();

        let message = "";

        if(!playerName) {
            message = ubsApp.getTranslation("ENTER_PLAYER_NAME");
        } else if(!playerAge) {
            message = ubsApp.getTranslation("ENTER_PLAYER_AGE");
        } else if(!gender) {
            message = ubsApp.getTranslation("ENTER_PLAYER_GENDER");
        }
        if(message) {
            $("#addPlayerValidationMessage").append(message);
            return;
        }
        let player = {};
    if (ubsApp.isWebEnabled) {
        player.playername = playerName;
        player.age = parseInt(playerAge);
        player.gender = gender;
        player.playerid = studentId;
        player.deviceid = ubsApp.deviceFingerPrint;
    }
    else {
        player.StudentName = playerName;
        player.StudentAge = parseInt(playerAge);
        player.StudentGender = gender;
        player.StudentID = studentId;
    }
        

    if (ubsApp.isWebEnabled) {
        $.ajax({
            url: "/api/player/EditPlayer",
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(player),
            success: function (data) {
                console.log("Player Edited successfully" + data);
                if (ubsApp.isWebEnabled) {
                    try {
                        $.ajax({
                            url: "/api/player/GetPlayerList?deviceid=" + player.deviceid,
                            type: "get",
                            dataType: "json",
                            contentType: "application/json",
                            success: function (data) {
                                ubsApp.studentArray = data;
                                ubsApp.populateAndInitOnlinePlayers("PLAYER_UPDATED_SUCCESSFULLY");
                            }
                        });


                    } catch (err) {
                        console.log("Error parsing student array from Web");
                        ubsApp.studentArray = [];
                    }

                }
            }
        });
    }

         if(ubsApp.isAndroidEnabled) {
         try {
             Android.updateStudent(JSON.stringify(player));
             ubsApp.studentArray = JSON.parse(Android.getStudentList());
             ubsApp.populateAndInitOnlinePlayers("PLAYER_UPDATED_SUCCESSFULLY");

         } catch(err) {
             console.log("Erro parsing student array from andriod");
           ubsApp.studentArray=[];
         }
         } else {
            ubsApp.studentArray = JSON.parse("[{\r\n\t\"StudentId\": \"STU111451\",\r\n\t\"StudentAge\": 12,\"StudentGender\": \"male\",\"StudentName\": \"JITENDRA new RAMSAJIVAN\"\r\n}, {\r\n\t\"StudentId\": \"STU111453\",\r\n\t\"StudentAge\": 24,\"StudentGender\": \"female\",\"StudentName\": \"ANUSHKA AMIT TIVARI\"\r\n}, {\r\n\t\"StudentId\": \"STU111448\",\r\n\t\"StudentAge\": 32,\"StudentGender\": \"male\",\"StudentName\": \"ANUBHAV SANTOSH\"\r\n}]");

         }
}

ubsApp.deletePlayer = function(studentId) {

        if (ubsApp.isWebEnabled) {
            $.ajax({
                url: "/api/player/delete?playerid=" + studentId,
                type: "get",
                dataType: "json",
                contentType: "application/json",
                success: function (player) {
                    console.log("Player deleted successfully" + player);
                    if (ubsApp.isWebEnabled) {
                       
                        $.ajax({
                            url: "/api/player/GetPlayerList?deviceid=" + ubsApp.deviceFingerPrint,
                                type: "get",
                                dataType: "json",
                                contentType: "application/json",
                                success: function (data) {
                                    ubsApp.studentArray = data;
                                    ubsApp.populateAndInitOnlinePlayers("PLAYER_DELETED_SUCCESSFULLY");
                                }
                            });


                       

                    }
                }
            });
        }

        if(ubsApp.isAndroidEnabled) {
            try {
                Android.deleteStudent(studentId);
                ubsApp.studentArray = JSON.parse(Android.getStudentList());
                ubsApp.populateAndInitOnlinePlayers("PLAYER_DELETED_SUCCESSFULLY");
            }
            catch (err) {
                console.log("Erro parsing student array from andriod");
                ubsApp.studentArray = [];
            }

        }
        else {
            ubsApp.studentArray = JSON.parse("[{\r\n\t\"StudentId\": \"STU111451\",\r\n\t\"StudentAge\": 12,\"StudentGender\": \"male\",\"StudentName\": \"JITENDRA RAMSAJIVAN\"\r\n}, {\r\n\t\"StudentId\": \"STU111453\",\r\n\t\"StudentAge\": 24,\"StudentGender\": \"female\",\"StudentName\": \"ANUSHKA AMIT TIVARI\"\r\n}, {\r\n\t\"StudentId\": \"STU111448\",\r\n\t\"StudentAge\": 32,\"StudentGender\": \"male\",\"StudentName\": \"ANUBHAV SANTOSH\"\r\n}]");

        }
    
}