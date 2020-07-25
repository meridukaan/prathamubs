ubsApp.getAddPlayerTemplate=function(templateConfig,tempVar){
	var object={};
	templateConfig=$.extend(templateConfig,object);
	templateConfig.studentList = $.extend(ubsApp.studentArray,[]);
	templateConfig.isStudentAdded = ubsApp.studentArray.length > 0 ? true : false;
	tempVar.html+=ubsAddPlayerTemplate(templateConfig);

}


ubsApp.openAddPlayerTemplate = function(){
	ubsApp.startCurrentScenario();
	ubsApp.renderPageByName("addPlayerPage");
}

ubsApp.addNewPlayer = function() {
    $("#addPlayerValidationMessage").empty();
    let playerName = $("#playerNameInput").val();
    let playerAge = $("#playerAge").val();
    let gender = $("#playerGender").val();

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
    player.name = playerName;
    player.age = parseInt(playerAge);
    player.gender = gender;
    let players = [];
    players[0] = player;

    if(ubsApp.isAndroidEnabled) {
       Android.addStudents(JSON.stringify(players));
    }
    message = ubsApp.getTranslation("PLAYER_ADDED_SUCCESSFULLY");
    ubsApp.openResultPopup({
                       "message" : message,
                       "header" : "",
                       "headerStyle" : "text-align: center;  color: black; font-weight: 700; "
                       });
     if(ubsApp.isAndroidEnabled) {
     try {
              ubsApp.studentArray = JSON.parse(Android.getStudentList());

     } catch(err) {
         console.log("Erro parsing student array from andriod");
       ubsApp.studentArray=[];
     }
     } else {
        ubsApp.studentArray = JSON.parse("[{\r\n\t\"StudentId\": \"STU111451\",\r\n\t\"StudentAge\": 12,\"StudentGender\": \"male\",\"StudentName\": \"JITENDRA RAMSAJIVAN\"\r\n}, {\r\n\t\"StudentId\": \"STU111453\",\r\n\t\"StudentAge\": 24,\"StudentGender\": \"female\",\"StudentName\": \"ANUSHKA AMIT TIVARI\"\r\n}, {\r\n\t\"StudentId\": \"STU111448\",\r\n\t\"StudentAge\": 32,\"StudentGender\": \"male\",\"StudentName\": \"ANUBHAV SANTOSH\"\r\n}]");

     }
     ubsApp.populateStudentArray(ubsApp.studentArray);
    let numberOfPlayers = 4;

    if(ubsApp.studentArray.length < 4) {
        numberOfPlayers = ubsApp.studentArray.length;
    }

$('#num_online_players')
    .find('option')
    .remove()
    .end();
    for(let i=1; i<=numberOfPlayers; i++) {
        $('#num_online_players').append('<option value="' + i + '" id="player'+ i + '">' + i + '</option>')
    }

    $('#num_online_players').val(numberOfPlayers)

    monopoly.initOnlinePlayers();
}

ubsApp.updatePlayer = function(studentId) {

    var isDisabled = $("#" + studentId + "Name").prop('disabled');
    console.log(isDisabled);
    if(isDisabled){
        $("#" + studentId + "Name").prop('disabled', false);
        $("#" + studentId + "Age").prop('disabled', false);
        $("#" + studentId + "Gender").prop('disabled', false);
        $("#"+studentId).attr('src','images/update.png');
    }
    else{

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
        player.StudentName = playerName;
        player.StudentAge = parseInt(playerAge);
        player.StudentGender = gender;
        player.StudentID = studentId;

        if(ubsApp.isAndroidEnabled) {
           Android.updateStudent(JSON.stringify(player));
        }
        message = ubsApp.getTranslation("PLAYER_UPDATED_SUCCESSFULLY");
        ubsApp.openResultPopup({
                           "message" : message,
                           "header" : "",
                           "headerStyle" : "text-align: center;  color: black; font-weight: 700; "
                           });
         if(ubsApp.isAndroidEnabled) {
         try {
                  ubsApp.studentArray = JSON.parse(Android.getStudentList());

         } catch(err) {
             console.log("Erro parsing student array from andriod");
           ubsApp.studentArray=[];
         }
         } else {
            ubsApp.studentArray = JSON.parse("[{\r\n\t\"StudentId\": \"STU111451\",\r\n\t\"StudentAge\": 12,\"StudentGender\": \"male\",\"StudentName\": \"JITENDRA new RAMSAJIVAN\"\r\n}, {\r\n\t\"StudentId\": \"STU111453\",\r\n\t\"StudentAge\": 24,\"StudentGender\": \"female\",\"StudentName\": \"ANUSHKA AMIT TIVARI\"\r\n}, {\r\n\t\"StudentId\": \"STU111448\",\r\n\t\"StudentAge\": 32,\"StudentGender\": \"male\",\"StudentName\": \"ANUBHAV SANTOSH\"\r\n}]");

         }
         ubsApp.populateStudentArray(ubsApp.studentArray);
        let numberOfPlayers = 4;
        if(ubsApp.studentArray.length < 4) {
            numberOfPlayers = ubsApp.studentArray.length;
        }

    $('#num_online_players')
        .find('option')
        .remove()
        .end();
        for(let i=1; i<=numberOfPlayers; i++) {
            $('#num_online_players').append('<option value="' + i + '" id="player'+ i + '">' + i + '</option>')
        }

        $('#num_online_players').val(numberOfPlayers)

        monopoly.initOnlinePlayers();
    }
}

ubsApp.deletePlayer = function(studentId) {



        if(ubsApp.isAndroidEnabled) {
           Android.deleteStudent(studentId);
        }
        let message = ubsApp.getTranslation("PLAYER_DELETED_SUCCESSFULLY");
        ubsApp.openResultPopup({
                           "message" : message,
                           "header" : "",
                           "headerStyle" : "text-align: center;  color: black; font-weight: 700; "
                           });
         if(ubsApp.isAndroidEnabled) {
         try {
                  ubsApp.studentArray = JSON.parse(Android.getStudentList());

         } catch(err) {
             console.log("Erro parsing student array from andriod");
           ubsApp.studentArray=[];
         }
         } else {
            ubsApp.studentArray = JSON.parse("[{\r\n\t\"StudentId\": \"STU111451\",\r\n\t\"StudentAge\": 12,\"StudentGender\": \"male\",\"StudentName\": \"JITENDRA RAMSAJIVAN\"\r\n}, {\r\n\t\"StudentId\": \"STU111453\",\r\n\t\"StudentAge\": 24,\"StudentGender\": \"female\",\"StudentName\": \"ANUSHKA AMIT TIVARI\"\r\n}, {\r\n\t\"StudentId\": \"STU111448\",\r\n\t\"StudentAge\": 32,\"StudentGender\": \"male\",\"StudentName\": \"ANUBHAV SANTOSH\"\r\n}]");

         }
         ubsApp.populateStudentArray(ubsApp.studentArray);
        let numberOfPlayers = 4;
        if(ubsApp.studentArray.length < 4) {
            numberOfPlayers = ubsApp.studentArray.length;
        }

    $('#num_online_players')
        .find('option')
        .remove()
        .end();
        for(let i=1; i<=numberOfPlayers; i++) {
            $('#num_online_players').append('<option value="' + i + '" id="player'+ i + '">' + i + '</option>')
        }

        $('#num_online_players').val(numberOfPlayers)

        monopoly.initOnlinePlayers();
}