monopoly.origpages = {
"EnterLanguagePage":[
    
        {
            "templateId":1,
            "templateType":"static",
            "src":"<div id=\"languageDetails\" style=\"cursor:pointer\" onclick=\"monopoly.chooseLanguage('english')\"><label style=\"color:white; cursor:pointer\" for\"english\">English</label></div>",
            "style": "position:absolute;margin-left:15%;padding:10px;border-radius:5px; background-color:black; width:70%;top:30%;"
        },
        {
            "templateId":1,
            "templateType":"static",
            "src":"<div id=\"languageDetails\" style=\"cursor:pointer\" onclick=\"monopoly.chooseLanguage('hindi')\"><label style=\"color:white;cursor:pointer\" for\"hindi\">Hindi || हिंदी</label></div>",    
            "style": "position:absolute; width:70%;padding:10px;border-radius:5px;top:45%;margin-left:15%; background-color:black;"
        },
         {
                    "templateId":1,
                    "templateType":"static",
                    "src":"<div id=\"languageDetails\" style=\"cursor:pointer\"  onclick=\"monopoly.chooseLanguage('marathi')\"><label style=\"color:white;cursor:pointer\" for\"hindi\">Marathi || मराठी</label></div>",
                    "style": "position:absolute; width:70%;padding:10px;border-radius:5px;top:60%;margin-left:15%; background-color:black;"
          },
        /*{
            "templateId":2,
            "templateType":"static",
            "src":"<button class=\"longButton\" onclick=\"monopoly.chooseLanguage()\" >CHOOSE LANGUAGE</button>",
            "style": "position: absolute;padding:10px;border-radius:5px;top:80%;left:35%;margin-left:5%; "
        },*/
        {
            "templateId":2,
            "templateType":"static",
            "src":"<img src=\"images/guptaji/guptaji_front.png\" style=\"position:absolute; top:20%; width: 12%; height: 40%;\"></img>",
           /* "style": "position: absolute;padding:10px;border-radius:5px;top:20%; " */
        }

    ],

    "CreateOrJoinRoom":[
    
        {
            "templateId":1,
            "templateType":"static",
            "src":"<div id=\"languageDetails\" style=\"cursor:pointer\" onclick=\"monopoly.createRoom()\"><label style=\"color:white; cursor:pointer\" for\"english\">Create Room || कक्ष बनाओ || खोली बनवा</label></div>",
            "style": "position:absolute;margin-left:15%;padding:10px;border-radius:5px; background-color:black; width:70%;top:30%;"
        },
        {
            "templateId":1,
            "templateType":"static",
            "src":"<div id=\"languageDetails\" style=\"cursor:pointer\" onclick=\"monopoly.joinRoom()\"><label style=\"color:white;cursor:pointer\" for\"hindi\">Join Room || कक्ष में शामिल हो || खोलीत सामील व्हा</label></div>",    
            "style": "position:absolute; width:70%;padding:10px;border-radius:5px;top:45%;margin-left:15%; background-color:black;"
        },
        
        {
            "templateId":2,
            "templateType":"static",
            "src":"<img src=\"images/guptaji/guptaji_front.png\" style=\"position:absolute; top:20%; width: 12%; height: 40%;\"></img>",
           /* "style": "position: absolute;padding:10px;border-radius:5px;top:20%; " */
        }

    ], 

 
    "Splash":[
        {
        "templateId":1,
        "templateType":"static",
        "style": "padding:8px;text-align:center; color:white;border-radius:5px;position:absolute;top:0%;width:100%;left:0%;height:6%;",
        "src":"<div id=\"splash\"> <img src=\"images/splash_screen.jpg\" style=\"width: 100%; height: 100%\"></img> </div>"
        },
        {
            "templateType":"audioTemplate",
            "audioSrc":"audio/10_FlashScreen.mp3",
            "audioId":"splashAudio",
        },

    ],

"WelcomePage":[
	  {
	        "templateId":2,
	        "templateType":"static",

	        "src":"<div id=\"redstrip\" class=\"redStrip\"> <img src=\"images/red_strip.png\" style=\"width: 100%; height: 100%\"></img> <div class=\"centered\">{{welcome}}</div></div>"
	    },

    {
      "templateId":2,
      "templateType":"static",
      "src":"<img src=\"images/" + languageSelected +"/logo.png\" style=\"height: 39vh;top:50%;margin: auto;margin-left: 55vh;\"> </img>",
      "style": " "
  },
  {
      "templateId":2,
      "templateType":"static",
      "src":"<button class=\"instructionButtons\"   onclick=\"monopoly.readInstruction()\">{{ReadInstructions}}</button>",
      "style": "position:absolute;padding:10px;border-radius:5px;top:80%;left:10%;margin-left:5%; "
  },
  {
      "templateId":2,
      "templateType":"static",
      "src":"<button class=\"startButtons\" onclick=\"monopoly.startGame()\" >{{StartGame}}</button>",
      "style": "position:absolute;padding:10px;border-radius:5px;top:80%;right:10%;margin-right:5%; "
  },
  {
        "templateId":2,
        "templateType":"static",
        "style":" width:100%;display: flex;flex-direction: row;justify-content: space-around; ",
        "src":"<button onclick=\"monopoly.renderPageforBoard(monopoly.pages.EnterLanguagePage);\" style=\"position:absolute;padding:10px; border-radius:5px;border: none;top:82%;right:45%;padding:10px; background-image: url(images/backbutton.png);background-size: 100% 100%;background-color:transparent; padding: 2% 4%;    color: red;\" > </button>",
    },
    {
        "templateId":2,
        "templateType":"static",
        "src":"<img src=\"images/guptaji/guptaji.png\" style=\"position:absolute; top:20%; width: 20%; height: 40%;\"></img>",
       /* "style": "position: absolute;padding:10px;border-radius:5px;top:20%; " */
    }

],

"SideScoreBoardPage":[
       {
            "templateId":12,
            "templateType":"sideScoreBoard",
        }

],

  
"InitialisePlayers":[{
                             "templateId":1,
                             "templateType":"static",
                             "style": "padding:8px;text-align:center; color:white;border-radius:5px;width:100%;left:0%;height:11vh;background-image: url(images/red_strip.png);    background-size: 100% 100%;font-size: 3vmax;",
                             "id":"initPageTitle",
                             "src":"{{initPageTitle}}",
                         },
//    {
//        "templateId":1,
//        "templateType":"static",
//        "src":"<input type=\"checkbox\" name=\"computer\" id=\"computer\" onclick=\"monopoly.initComputerDifficulty()\"><label for=\"computer\" id=\"computerRequiredTitle\">{{computerRequiredTitle}}</label>",
//        "style": "position:absolute; right:10%;top:10%;color:black;",
//    },
//    {
//        "templateId":1,
//        "templateType":"static",
//        "src":"<div id=\"computerDetails\"></div>",
//        "style": "position:absolute; right:10%;top:20%;"
//    },
//    {
//        "templateId":1,
//        "templateType":"static",
//        "src": "<div id=\"enterPlayers\">{{enterPlayers}}</div>" ,
//        "style": "position:absolute; left:25%;top:10%;color:black;",
//    },
    {
        "templateId":1,
        "templateType":"static",
        "src": "<div style=\"margin-bottom:2%;\">{{noOfWeeks}}<input type=\"radio\" name=\"noOfWeeks\" value=\"6\">6 <input type=\"radio\" name=\"noOfWeeks\" value=12 checked=\"\">12</div><div id=\"enterOnlinePlayers\">{{enterOfflinePlayers}} <select id=\"num_online_players\"   onchange=\"monopoly.initOnlinePlayers()\"> "+
                                                                                            "<option value=\"1\"><span  id=\"player1\">1</span></option> "+
                                                                                            "<option value=\"2\"><span id=\"player2\">2</span></option> "+
                                                                                            "<option value=\"3\"><span id=\"player3\">3</span></option> "+
                                                                                            "<option value=\"4\"><span id=\"player4\">4</span></option> "+
                                                                                        "</select> </div>" ,
        "style": "text-align:center;    margin-top: 2%;",
    },
//    {
//        "templateId":1,
//        "templateType":"static",
//        "style":"position:absolute;left:45%;top:10%;",
//        "src":"<input type=\"number\"  id=\"num_players\"   max=\"4\" min=\"1\" value=\"1\" oninput=\"monopoly.initPlayers()\"></input><br><br>",
//    },
    {
        "templateId":1,
        "templateType":"static",
        "style":"text-align: center;    margin-top: 2%;",
        "src":"<div id=\"take_input\"></div>",
    },
    {
           "templateId":1,
           "templateType":"static",
           "style":" width:90%;display: flex;flex-direction: row;justify-content: space-around;float:right; ",
           "src":"<button onclick=\"monopoly.renderPageforBoard(monopoly.pages.WelcomePage);\" style=\"border-radius:5px;border:0;    background-image: url(images/backbutton.png);background-size: 100% 100%;background-color: transparent;padding: 2% 4%;    color: red;\" > </button> <button onclick=\"monopoly.openAddPlayer();\" style=\" background: url('images/button long.png'); padding: 14px;    background-size: 100% 100%;    background-color: transparent;    border: none;    cursor: pointer;   color: red;\" > {{ADD_PLAYER}}</button> <button onclick=\"monopoly.storePlayerDetails()\" style=\"border-radius:5px;border:0;    background-image: url(images/nextbutton.png);background-size: 100% 100%;background-color: transparent;padding: 2% 4%;;    color: green;\" id=\"storePlayerDetailsButton\"> </button>",
       },
    /*{
        "templateId":1,
        "templateType":"static",
        "src":"<div id=\"languageDetails\"><input type=\"radio\" name=\"languageRadio\" value=\"english\" id=\"english\"><label for\"english\">English</label>&nbsp&nbsp<input type=\"radio\" name=\"languageRadio\" value=\"hindi\" id=\"hindi\"><label for\"hindi\">Hindi</label></div>",
        "style": "position:absolute; left:44%;bottom:3%;"
    }*/
   {
          "templateId":2,
          "templateType":"static",
          "src":"<img src=\"images/guptaji/guptaji_side.png\" style=\"position:absolute; top:20%; width: 12%; height: 40%;\"></img>",
         /* "style": "position: absolute;padding:10px;border-radius:5px;top:20%; " */
      }
],

"InitialiseOfflinePlayers":[{
        "templateId":1,
        "templateType":"static",
        "style": "padding:8px;text-align:center; color:white;border-radius:5px;width:100%;left:0%;height:11vh;background-image: url(images/red_strip.png);    background-size: 100% 100%;font-size: 3vmax;",
        "id":"initPageTitle",
        "src":"{{initPageTitle}}",
    },
//    {
//        "templateId":1,
//        "templateType":"static",
//        "src":"<input type=\"checkbox\" name=\"computer\" id=\"computer\" onclick=\"monopoly.initComputerDifficulty()\"><label for=\"computer\" id=\"computerRequiredTitle\">{{computerRequiredTitle}}</label>",
//        "style": "position:absolute; right:10%;top:10%;color:black;",
//    },
//    {
//        "templateId":1,
//        "templateType":"static",
//        "src":"<div id=\"computerDetails\"></div>",
//        "style": "position:absolute; right:10%;top:20%;"
//    },
    {
        "templateId":1,
        "templateType":"static",
        "src": "<div style=\"margin-bottom:2%;\">{{noOfWeeks}}<input type=\"radio\" name=\"noOfWeeks\" value=\"6\">6 <input type=\"radio\" name=\"noOfWeeks\" value=12 checked=\"\">12</div><div id=\"enterOfflinePlayers\">{{enterOfflinePlayers}} <select id=\"num_offline_players\"   onchange=\"monopoly.initOfflinePlayers()\"> "+
                                                                                            "<option value=\"1\"><span  id=\"player1\">1</span></option> "+
                                                                                            "<option value=\"2\"><span id=\"player2\">2</span></option> "+
                                                                                            "<option value=\"3\"><span id=\"player3\">3</span></option> "+
                                                                                            "<option value=\"4\"><span id=\"player4\">4</span></option> "+
                                                                                        "</select> </div>" ,
        "style": "text-align:center;    margin-top: 2%;",
    },

    {
        "templateId":1,
        "templateType":"static",
        "style":"text-align: center;    margin-top: 2%;",
        "src":"<div id=\"take_input\"></div>",
    },
    {
        "templateId":1,
        "templateType":"static",
        "style":" width:100%;display: flex;flex-direction: row;justify-content: space-around; ",
        "src":"<button onclick=\"monopoly.renderPageforBoard(monopoly.pages.WelcomePage);\" style=\"border-radius:5px;border:0;    background-image: url(images/backbutton.png);background-size: 100% 100%;background-color: transparent;padding: 2% 4%;    color: red;\" > </button> <button onclick=\"monopoly.storePlayerDetails()\" style=\"border-radius:5px;border:0;    background-image: url(images/nextbutton.png);background-size: 100% 100%;background-color: transparent;padding: 2% 4%;;    color: green;\" id=\"storePlayerDetailsButton\"> </button>",
    },
    /*{
        "templateId":1,
        "templateType":"static",
        "src":"<div id=\"languageDetails\"><input type=\"radio\" name=\"languageRadio\" value=\"english\" id=\"english\"><label for\"english\">English</label>&nbsp&nbsp<input type=\"radio\" name=\"languageRadio\" value=\"hindi\" id=\"hindi\"><label for\"hindi\">Hindi</label></div>",
        "style": "position:absolute; left:44%;bottom:3%;"
    }*/
    {
        "templateId":2,
        "templateType":"static",
        "src":"<img src=\"images/guptaji/guptaji_side.png\" style=\"position:absolute; top:20%; width: 12%; height: 40%;\"></img>",
       /* "style": "position: absolute;padding:10px;border-radius:5px;top:20%; " */
    }
],

	"monopoly": [
        {
            "weekDeadLine":4,
        },
        /* {
            "templateId":"1",
            "templateType":"static",
            "style":"position:absolute;bottom:18%;left:82%; width:7%;button[id=\"boardButtons\"]:focus {outline:0;}",
            "src":"<button id='rollIt' class='boardButtons' onclick=\"monopoly.rollDice()\" style=\"padding:5px; color:white;width:100%; border:0; font-size:1.05vw;background:#73e600; border-radius:5px; \">Roll it</button>",
            "audioId":"diceRollAudio",
        },*/
        {
            "templateType":"audioTemplate",
            "audioSrc":"audio/01_Dice.mp3",
            "audioId":"diceRollAudio",
        },
        
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"weekTitle",
        //     "style":"",
        //     "src":"WEEK: <span id=\"weekContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        // },
        /*{
            "templateId":1,
            "templateType":"static",
            "id":"weekTitle",
            "style":"",
            "src":"{{weekTitle}}: <span  id=\"weekContent\" style=\"padding:1px;\">100</span>"
        },*/
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"weekContent",
        //     "style":"background-color:yellow;border:1px solid black; padding-left:1px;padding-right:1px; ",
        //     "src":"1"
        // },
        /*{
            "templateId":1,
            "templateType":"static",
            "id":"inventoryTitle",
            "style":"",
            "src":"<span tooltip=\"{{inventoryTitle}}\" tooltip-position=\"top\" >{{inventoryTitle}} </span>: <span id=\"inventoryContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        },*/
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"inventoryContent",
        //     "style":"background-color:yellow;border:1px solid black; padding:1px;",
        //     "src":"50%"
        // },
       
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"inventoryValueContent",
        //     "style":"background-color:yellow;border:1px solid black; padding:1px;",
        //     "src":"Rs. 250,000"
        // },
       /* {
            "templateId":1,
            "templateType":"static",
            "id":"reputationTitle",
            "style":"",
            "src":"{{reputationTitle}}: <span id=\"reputationContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        },*/
       /* {
            "templateId":1,
            "templateType":"static",
            "id":"advantageCardTitle",
            "style":"",
            "src":"{{advantageCardTitle}}: <span id=\"advantageCardContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        },
        {
            "templateId":1,
            "templateType":"static",
            "id":"inventoryValueTitle",
            "style":"",
            "src":"{{inventoryValueTitle}}: <span id=\"inventoryValueContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        },*/
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"reputationContent",
        //     "style":"background-color:yellow;border:1px solid black; padding:1px;",
        //     "src":"10"
        // },
        /*{
            "templateId":1,
            "templateType":"static",
            "id":"convertToAdvantage",
            "style":"position:absolute;top:47.5%;left:90%;background-repeat: no-repeat;",
            "src":"<button onclick=\"ubsApp.openAdvantageCard()\" style=\"padding:7px; color:white;font-size:1.1vw; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{convertTitle}}</button>"

        },*/
       /* {
            "templateId":"1",
            "templateType":"static",
            "style":"position:absolute;bottom:18%;left:82%; width:7%;button[id=\"boardButtons\"]:focus {outline:0;}",
            "src":"<button id='rollIt' class='boardButtons' onclick=\"monopoly.rollDice()\" style=\"padding:5px; color:white;width:100%; border:0; font-size:1.05vw;background:#73e600; border-radius:5px; \">Roll it</button>",
            "audioId":"diceRollAudio",

        },
        {
            "templateType":"audioTemplate",
            "audioSrc":"audio/01_Dice.mp3",
            "audioId":"diceRollAudio",
        },
        {
            "templateId":"1",
            "templateType":"static",
            "style":"position:absolute;bottom:18%;left:90%; width:7%;button[id=\"boardButtons\"]:focus {outline:0;}",
            "src":"<button class='boardButtons' onclick=\"ubsApp.openQuizIfValid()\" style=\"padding:5px; color:white;width:100%; border:0; background:blue; font-size:1.05vw;border-radius:5px; \">Take Exam</button>"

        },
        {
            "templateId":"1",
            "templateType":"static",
            "style":"position:absolute;bottom:10%;left:82%; width:7%;button[id=\"boardButtons\"]:focus {outline:0;}",
            "src":"<button class='boardButtons' onclick=\"ubsApp.openPurchaseScenario()\" style=\"padding:5px; color:white;width:100%; border:0; background:orange;font-size:1.05vw; border-radius:5px; \">Purchase</button>"

        },
        {
            "templateId":"1",
            "templateType":"static",
            "style":"position:absolute;bottom:10%;left:90%;width:7%;button[id=\"boardButtons\"]:focus {outline:0;}",
            "src":"<button class='boardButtons' onclick=\"ubsApp.endGame()\" style=\"padding:5px;width:100%; color:white; border:0; font-size:1.05vw;background:red; border-radius:5px; \">End Game</button>"
        },*/
        
        // 
        

        //Previous was from here
        /*{
            "templateId":1,
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:5%;left:90%;width:10%;",
            "src":"<div style=\"color:white;display:none; text-align:center;padding:7px; cursor:pointer;\" onclick=\"monopoly.openLeaderBoard('Score')\" id=\"scoreSideBar\">Score</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1;height:100%; white-space: nowrap;top: 0%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "id" : "leaderBoardParent",
        },
        {
            "templateId":1, //display none is there
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:20%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px;display:none;  cursor:pointer;\" vertical-align: text-top; onclick=\"monopoly.openLeaderBoard('Inventory')\" id=\"inventorySideBar\">Inventory</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 20%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"inventoryBoard\" ></div>",
            "id" : "inventoryBoardParent"
        },
        {
            "templateId":1, //display none is there
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:35%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px;display:none; cursor:pointer;\" vertical-align: text-top; onclick=\"monopoly.openLeaderBoard('Document')\" id=\"documentSideBar\">Documents</div>",

        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 35%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"documentBoard\"  ></div>",
        },
        {
            "templateId":1, //display none is there
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:50%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px; cursor:pointer; display:none;\" vertical-align: text-top; onclick=\"monopoly.openLeaderBoard('Merit')\" id=\"meritSideBar\">Merits(Dummy)</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 50%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"meritBoard\"  ></div>",
            "id" : "meritBoardParent"
        },*/
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 80%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
        //     "src":"<div id=\"calculator\"  ></div>",
        //     "id" : "calculatorParent"
        // },
        
        {
            "templateId": 3,
            "templateType": "board",
            "language":"{{language}}",
            "rollIt":"{{rollIt}}",
            "playerTitle":"{{playerTitle}}",
            "blocks":26,
            "top_row":[
            {
                "players":[],
                "id"   : "0",
                "backgroundImage":"images/weekup.png",
                //"title":"pratham_title_start",
                "start": true,
                "footerColor" : "Grey",
                "footerText" : "{{start}}"
            },
            {
                "id"   : "1",
                "backgroundImage":"images/receipt-easy.png",
                "category":"salesSimple",
                "footerColor" : "White",
                "footerText" : "{{sale}}"
            },
            {
                "id"   : "2",
                "backgroundImage":"images/receipt-medium.png",
                // "title":"pratham_title_sales",
                "category" : "salesEasy",
                "footerColor" : "Grey",
                "footerText" : "{{sale}}"
            },
            {
                "id"   : "3",
                // "title":"pratham_title_purchase",
                "backgroundImage":"images/buy.png",
                "category" : "Purchase",
                "footerColor" : "White",
                "footerText" : "{{purchase}}"
            },
            {
                "id"   : "4",
                "backgroundImage":"images/decision.png",
                "category" : "Decision",
                "footerColor" : "Grey",
                "footerText" : "{{decision}}"
            },
            {
                "id"   : "5",
                // "title":"pratham_title_sales",
                "backgroundImage":"images/receipt-medium-hard.png",
                "category" : "salesModerate",
                "footerColor" : "White",
                "footerText" : "{{sale}}"
            },
            {
                "id"   : "6",
                "backgroundImage":"images/luck.png",
                "category" : "Luck",
                "footerColor" : "Grey",
                "footerText" : "{{luck}}"
            },
            {
                "id"   : "7",
                // "title":"pratham_title_purchase",
                "backgroundImage":"images/buy.png",
                "category" : "Purchase",
                "footerColor" : "White",
                "footerText" : "{{purchase}}"
            },
            {
                "id"   : "8",
                // "title":"pratham_title_sales",
                "backgroundImage":"images/receipt-hard.png",
                "category" : "salesDifficult",
                "footerColor" : "Grey",
                "footerText" : "{{sale}}"
            }
            ],

            "left_col":[
            {
                "id"   : "25",
                "backgroundImage":"images/receipt-hard.png",
                "category" : "salesDifficult",
                "footerColor" : "White",
                "footerText" : "{{sale}}"
            },
            {
                "id"   : "24",
                "backgroundImage":"images/decision.png",
                "category" : "Decision",
                "footerColor" : "White",
                "footerText" : "{{decision}}"
            },
            {
                "id"   : "23",
                "backgroundImage":"images/receipt-easy.png",
                "category" : "salesSimple",
                "footerColor" : "White",
                "footerText" : "{{sale}}"
            },
            {
                "id"   : "22",
                "backgroundImage":"images/buy.png",
                "category" : "Purchase",
                "footerColor" : "White",
                "footerText" : "{{purchase}}"
            },
            ],
            "right_col":[
                {
                    "id"   : "9",
                    "backgroundImage":"images/receipt-easy.png",
                    "category" : "salesSimple",
                    "footerColor" : "Grey",
                    "footerText" : "{{sale}}"
                },
                {
                    "id"   : "10",
                    "backgroundImage":"images/decision.png",
                    "category" : "Decision",
                    "footerColor" : "White",
                    "footerText" : "{{decision}}"
                },
                {
                    "id"   : "11",
                    "backgroundImage":"images/buy.png",
                    "category" : "Purchase",
                    "footerColor" : "White",
                    "footerText" : "{{purchase}}"
                },
                {
                    "id"   : "12",
                    "backgroundImage":"images/receipt-medium.png",
                    "category" : "salesEasy",
                    "footerColor" : "White",
                    "footerText" : "{{sale}}"
                },
                ],
            "bottom_row":[
                    {
                        "id"   : "21",
                        "backgroundImage":"images/receipt-medium-hard.png",
                        "category":"salesModerate",
                        "footerColor" : "White",
                        "footerText" : "{{sale}}"
                    },
                    {
                        "id"   : "20",
                        "backgroundImage":"images/luck.png",
                        "category" : "Luck",
                        "footerColor" : "Grey",
                        "footerText" : "{{luck}}"
                    },
                    {
                        "id"   : "19",
                        "backgroundImage":"images/buy.png",
                        "category" : "Purchase",
                        "footerColor" : "White",
                        "footerText" : "{{purchase}}"
                    },
                    {
                        "id"   : "18",
                        "backgroundImage":"images/receipt-medium.png",
                        "category" : "salesEasy",
                        "footerColor" : "Grey",
                        "footerText" : "{{sale}}"
                    },
                    {
                        "id"   : "17",
                        "backgroundImage":"images/receipt-hard.png",
                        "category" : "salesDifficult",
                        "footerColor" : "White  ",
                        "footerText" : "{{sale}}"
                    },
                    {
                        "id"   : "16",
                        "backgroundImage":"images/payment.png",
                        "category" : "Payment",
                        "footerColor" : "Grey",
                        "footerText" : "{{payment}}"
                    },
                    
                    {
                        "id"   : "15",
                        "backgroundImage":"images/receipt-medium-hard.png",
                        "category" : "salesModerate",
                        "footerColor" : "White",
                        "footerText" : "{{sale}}"
                    },
                    {
                        "id"   : "14",
                        "backgroundImage":"images/buy.png",
                        "category" : "Purchase",
                        "footerColor" : "Grey",
                        "footerText" : "{{purchase}}"
                    },
                    {
                        "id"   : "13",
                        "backgroundImage":"images/luck.png",
                        "category" : "Luck",
                        "footerColor" : "White",
                        "footerText" : "{{luck}}"
                    },
                    ],

        },
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "style":"position:absolute;top:65%;left:33%;",
        //     "id":"currentChanceDetails",
        //     "src":"<span id\"playerNameTitle\"> Player Name: <span id='player' style='padding: 1vw'></span></span>&nbsp;<span id=\"diceValueTitle\">Dice Value: <span id='diceval' style='padding: 1vw'></span></span>"
        // },
        {
            "templateId":4,
            "templateType":"rollingDice",
        }/*,
        {
            "templateId":12,
            "templateType":"sideScoreBoard",
        },*/

            
    ],

    "endGamePage" : [
        {
            "templateType":"endGameTemplate",
            "templateId":60,
            "GAMEOVER":"{{GAMEOVER}}",
            "gameLogo":"{{gameLogo}}",
            "CLOSE":"{{CLOSE}}",
        }
    ]
}

monopoly.initializePages();
