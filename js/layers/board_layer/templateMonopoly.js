// using http://pojo.sodhanalibrary.com/string.html
monopoly.rollingDiceTemplate =
'  <div class="dice-board">'+
''+
    ''+
'    <div class="container-dice" >'+
'      <div id=\'dice1\' class="dice dice-one" style="float:left;">'+
'        <div id="dice-one-side-one" class=\'side one\'>'+
'          <div class="divot one-1"></div>'+
'        </div>'+
'        <div id="dice-one-side-two" class=\'side two\'>'+
'          <div class="divot two-1"></div>'+
'          <div class="divot two-2"></div>'+
'        </div>'+
'        <div id="dice-one-side-three" class=\'side three\'>'+
'          <div class="divot three-1"></div>'+
'          <div class="divot three-2"></div>'+
'          <div class="divot three-3"></div>'+
'        </div>'+
'        <div id="dice-one-side-four" class=\'side four\'>'+
'          <div class="divot four-1"></div>'+
'          <div class="divot four-2"></div>'+
'          <div class="divot four-3"></div>'+
'          <div class="divot four-4"></div>'+
'        </div>'+
'        <div id="dice-one-side-five" class=\'side five\'>'+
'          <div class="divot five-1"></div>'+
'          <div class="divot five-2"></div>'+
'          <div class="divot five-3"></div>'+
'          <div class="divot five-4"></div>'+
'          <div class="divot five-5"></div>'+
'        </div>'+
'        <div id="dice-one-side-six" class=\'side six\'>'+
'          <div class="divot six-1"></div>'+
'          <div class="divot six-2"></div>'+
'          <div class="divot six-3"></div>'+
'          <div class="divot six-4"></div>'+
'          <div class="divot six-5"></div>'+
'          <div class="divot six-6"></div>'+
'        </div>'+
'      </div>'+
'</div></div>';

monopoly.boardTemplate='<div class="responsive">'+
    '<div class="mainSquare">'+
        '<div class="row top">'+
            '{{#each top_row}}'+
                '<div class="square1">'+
                    '<div style="height: 80%;background-image: url(\'{{backgroundImage}}\');background-size: 100% 100%;"></div>'+
                    '<div class="squareFooter{{footerColor}}">{{footerText}}</div>'+
                    '<div class="firstLine firstLine-top rotation2" id={{id}}>'+'{{title}}'+'<br>'+
                        '{{#if start}}'+
                            '{{#each players}}'+
                              '<span id="{{playerId}}"><img  src="images/{{tokenColor}}.png"> </span>&nbsp;'+
                              '{{/each}}'+
                            '{{/if}}'+
                    '</div>'+
                '</div>'+
            '{{/each}}'+
        '</div>'+
        
        '<div class="row center">'+
            '<div class="square2">'+ 
                '{{#each left_col}}'+
                    '<div class="squareSide">'+
                        '<div class="headerSide header-left {{color}}" style="background-image: url(\'{{backgroundImage}}\');background-size: 100% 100%;"></div>'+
                        '<div class="firstLine firstLine-left rotation1" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                    '</div>'+
                    '<div class="squareFooter{{footerColor}}">{{footerText}}</div>'+
                '{{/each}}'+
            '</div>'+    
            '<div class="square9" >'+
                '<div class="centerDiceContainer">'+
                    '<div class="centerDiceRowRight" >'+
                        '<div class="playerName">'+
                            '<div>{{playerTitle}}: </div>'+
                            '<div id="playerId"></div>'+
                        '</div>'+
                    '</div>'+

                    '<div class="centerDiceRow">'+
                        '<div style="height: 9vw;width: 15vw;background-image: url(images/logo_{{language}}.png);background-size: 100% 100%;"></div>'+
                    '</div>'+

                    '<div class="centerDiceRow">'+monopoly.rollingDiceTemplate+'</div>'+
                    '<div class="centerDiceRow">'+
                        '<button id="rollIt" class="sideScoreBoardButton" onclick="monopoly.rollDice()" style="width: 15%;padding: 1%;padding-bottom: 2.8%;">{{rollIt}}</button>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            
            '<div class="square2">'+
                '{{#each right_col}}'+
                    '<div class="squareSide">'+
                        '<div class="headerSide header-left {{color}}" style="background-image: url(\'{{backgroundImage}}\');background-size: 100% 100%;"></div>'+
                        '<div class="firstLine firstLine-right rotation3" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                    '</div>'+
                    '<div class="squareFooter{{footerColor}}">{{footerText}}</div>'+
                '{{/each}}'+
            '</div>'+
        '</div>'+
        '<div class="row top">'+
            '{{#each bottom_row}}'+
                '<div class="square1">'+
                    '<div style="height: 80%;background-image: url(\'{{backgroundImage}}\');background-size: 100% 100%;"></div>'+
                    '<div class="squareFooter{{footerColor}}">{{footerText}}</div>'+
                    '<div class="firstLine firstLine-top rotation2" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                '</div>'+
            '{{/each}}'+
        '</div>'+
    '</div>'+
'</div>'+
'<nav >'+
            '<div>'+
                '<button type="button" class="sideIcon" id="sidebarCollapse" onclick="ubsApp.openScoreBoard()">'+
                
                '</button>'+
            '</div>'+
        '</nav>';

monopoly.sideScoreBoardTemplate= '<div class="mainBoardoverlay">'+
'<button id="sideScoreBoardCollapse" class="sideIconCollapse" onclick="ubsApp.closeSideIcon();"></button>'+
'<nav class="sideScoreBoardMainContainer">'+
'<div class="sideScoreBoard">'+
'<div class="sideScoreBoardContainer">'+
'        <div class="sideScoreBoardRow">'+
'            <div class="sideScoreBoardCol"></div>'+
'            <div class="sideScoreBoardCol"><img src="images/red header.png" style="width: 100%;"></div>                <div class="sideScoreBoardCol"></div>'+
'        </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol weekTitle">{{weekTitle}}: <span id="weekContent">100</span></div>'+
'        <div class="sideScoreBoardCol"></div>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{bankBalanceTitle}}:</div>'+
'        <span id="bankBalance" class="sideScoreBoardCol">₹ {{bankBalanceAmount}}</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{cashTitle}}:</div>'+
'        <span class="sideScoreBoardCol" id="cash">₹ {{cashAmount}}</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{debtTitle}}:</div>'+
'        <span id="debt" class="sideScoreBoardCol">₹ {{debtAmount}}</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'       <button class="sideScoreBoardCol sideScoreBoardButton" style="font-size: 1.1vmax;" onclick="ubsApp.openTransferToBank()">{{transferTitle}}</button>'+
'       <button class="sideScoreBoardCol sideScoreBoardButton" style="font-size: 1.1vmax;" onclick="ubsApp.openWithdrawFromBank()">{{withdrawTitle}}</button>'+
'       <button class="sideScoreBoardCol sideScoreBoardButton" style="font-size: 1.1vmax;" onclick="ubsApp.openPayOffScenario()">{{payOffTitle}}</button>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'       <hr>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{inventoryTitle}}:</div>'+
'        <span id="inventoryValueContent" class="sideScoreBoardCol" >100</span>'+
'        <span id="inventoryContent" class="sideScoreBoardCol" >50</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'       <div class="sideScoreBoardCol"></div>'+
'       <button class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openPurchaseScenario(false)" style="padding-left: 7%;padding-right: 7%;">{{buy}}</button>'+
'       <div class="sideScoreBoardCol"></div>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'       <hr>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{reputationTitle}}:</div>'+
'        <span id="reputationContent" class="sideScoreBoardCol">100</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{advantageCardTitle}}:</div>'+
'        <span id="advantageCardContent" class="sideScoreBoardCol">100</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'       <div class="sideScoreBoardCol"></div>'+
'       <button class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openAdvantageCard()">{{convertTitle}}</button>'+
'       <div class="sideScoreBoardCol"></div>'+
'    </div>'+
'  </div>'+
'</div>'+
'  <div class="sideScoreBoardRow">'+
'       <button class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openQuizIfValid()" style="padding-left: 7%;padding-right: 7%;padding-bottom: 4%;">{{quizTitle}}</button>'+
'       <button class="sideScoreBoardCol sideScoreBoardHelpButton" onclick="ubsApp.socketStartHelp(\'instructionHelp\')"></button>'+
'       <button class="sideScoreBoardCol sideScoreBoardEndButton" onclick="ubsApp.confirmEndGame()"></button>'+
'  </div>'+
'</nav>'+
'</div>';





/*monopoly.rollingDiceTemplate = '<body class = "diceBody"><div style="position:absolute; top:32%; left:37%;">'+

'  <div class="rollscene" id="rollscene" style= "height:{{diceSceneWidth}}px; display:table; margin:auto;"}>'+
'    <div onclick="mainroll()" class="cube">'+
'      <div id="class_1" class="cube_face_1">O</div>'+
'        <div id="class_2" class="cube_face_2">O O</div>'+
'      <div id="class_3" class="cube_face_3">  O<br>  O<br>O</div>'+
'      <div id="class_4" class="cube_face_4">O  O<br><br>O  O</div>'+
'      <div id="class_5" class="cube_face_5">O  O<br>  O<br>O  O</div>'+
'      <div id="class_6" class="cube_face_6">O  O<br>O  O<br>O  O</div>'+
'    </div>'+
'    <div class="rollButton">'+
     '<button id ="rollIt" onclick="monopoly.rollDice()" >Roll it </button>'+
'    </div>'+
'  </div>'+
'</div></body>';*/


/*
'      <div id=\'dice2\' style=" float:right;" class="dice dice-one">'+
'        <div id="dice-one-side-one" class=\'side one\'>'+
'          <div class="divot one-1"></div>'+
'        </div>'+
'        <div id="dice-one-side-two" class=\'side two\'>'+
'          <div class="divot two-1"></div>'+
'          <div class="divot two-2"></div>'+
'        </div>'+
'        <div id="dice-one-side-three" class=\'side three\'>'+
'          <div class="divot three-1"></div>'+
'          <div class="divot three-2"></div>'+
'          <div class="divot three-3"></div>'+
'        </div>'+
'        <div id="dice-one-side-four" class=\'side four\'>'+
'          <div class="divot four-1"></div>'+
'          <div class="divot four-2"></div>'+
'          <div class="divot four-3"></div>'+
'          <div class="divot four-4"></div>'+
'        </div>'+
'        <div id="dice-one-side-five" class=\'side five\'>'+
'          <div class="divot five-1"></div>'+
'          <div class="divot five-2"></div>'+
'          <div class="divot five-3"></div>'+
'          <div class="divot five-4"></div>'+
'          <div class="divot five-5"></div>'+
'        </div>'+
'        <div id="dice-one-side-six" class=\'side six\'>'+
'          <div class="divot six-1"></div>'+
'          <div class="divot six-2"></div>'+
'          <div class="divot six-3"></div>'+
'          <div class="divot six-4"></div>'+
'          <div class="divot six-5"></div>'+
'          <div class="divot six-6"></div>'+
'        </div>'+
'      </div>'+

'  '+*/



monopoly.staticTemplate ='<div class="{{width}}" style="{{style}}"   onclick="monopoly.renderPageforBoard(\'{{onClickPage}}\',\'{{amount}}\')">'+
'{{#if isOfflineMode}}'+
'       {{src}}'+
'{{else}}'+
'       {{srcOnline}}'+
' </div>'+
'<div id={{audioId}}></div>';

monopoly.webFormTemplate = '{{#if nameTitle}}<br><div class="title" >{{nameTitle}}:</span> ' +
    '{{#if isDropdown}}' +
    '<select id="{{nameId}}" >' +
    ' {{#each studentArray}}' +
    '<option value="{{playerid}}_{{playername}}">{{playername}} </option>' +
    '{{/each}}' +
    '</select>' +
    '{{else}}' +
    '<input type=\"text\" id=\"{{nameId}}\" style=\"margin-left:9px;\"></input>' +
    '{{/if}}' +
    '<br><br>' +
    '{{#if numberOfTokens}}' +
    '{{#each numberOfTokens}}' +
    '<input type=\"radio\" style="display:{{display}};padding-left:5em; " name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"  {{#if checked}}checked{{/if}}><label style="display:{{display}};" for=\"{{radioId}}\"><img src=\"images/{{tokenColor}}.png\" style=\"height:32px;width:32px;\"></label>' +
    '{{/each}}' +
    '{{/if}}' +
    '{{#if difficulty}}' +
    '{{#each difficulty}}' +
    '<input type=\"radio\" style\"display:inline;padding-left:5em; \" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\">{{text}}</label>' +
    '{{/each}}' +
    '{{/if}}' +
    '{{#if language}}' +
    '{{#each language}}' +
    '<input type=\"radio\" style\"display:inline;padding-left:5em; \" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\">{{text}}</label>' +
    '{{/each}}' +
    '{{/if}}';

monopoly.formTemplate='{{#if nameTitle}}<br><div class="title" >{{nameTitle}}:</span> '+
'{{#if isDropdown}}'+
    '<select id="{{nameId}}" >'+
        ' {{#each studentArray}}'+
        '<option value="{{StudentId}}_{{StudentName}}">{{StudentName}} </option>'+
        '{{/each}}'+
    '</select>'+
'{{else}}'+
'<input type=\"text\" id=\"{{nameId}}\" style=\"margin-left:9px;\"></input>'+
 '{{/if}}'+
'<br><br>'+
'{{#if numberOfTokens}}'+
    '{{#each numberOfTokens}}'+
        '<input type=\"radio\" style="display:{{display}};padding-left:5em; " name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"  {{#if checked}}checked{{/if}}><label style="display:{{display}};" for=\"{{radioId}}\"><img src=\"images/{{tokenColor}}.png\" style=\"height:32px;width:32px;\"></label>'+
    '{{/each}}'+
'{{/if}}'+
'{{#if difficulty}}'+
    '{{#each difficulty}}'+
        '<input type=\"radio\" style\"display:inline;padding-left:5em; \" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\">{{text}}</label>'+
    '{{/each}}'+
'{{/if}}'+
'{{#if language}}'+
    '{{#each language}}'+
        '<input type=\"radio\" style\"display:inline;padding-left:5em; \" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\">{{text}}</label>'+
    '{{/each}}'+
'{{/if}}';


monopoly.endGameTemplate = '<div style="'+
                           '    position:  absolute;'+
                           '    top: 1%;'+
                           '    right: 1%;'+
                           '    width: 13vw;'+
                           '"> <img src="{{gameLogo}}" style="'+
                           '    width: 100%;'+
                           '"> </div>'+
                           ''+
                           '<div style="'+
                           '    background-image: url(\'images/welcomeredstrip.png\');'+
                           '    color: white;'+
                           '    font-weight: 700;'+
                           '    height: 10vh;'+
                           '    text-align: center;'+
                           '    font-size: 7vh;'+
                           '    margin-top: 5%; background-size: 100%;'+
                           '">'+
                           '    {{GAMEOVER}}'+
                           '</div>'+
                           '<div style="margin-top: 12px; background-color: white; display: inline-block; width: 100%;    padding-top: 15px; font-weight: 700;">'+
                           ''+
                           '    <div style="display: inline-block; width: 100%;">'+
                           '        {{#each players}}'+
                           '        <div style="width:{{widthOfEachPlayer}}%;float: left; {{#if showBorder}}border-left: 1px solid red; {{/if}}padding-left: 20px;    padding-right: 18px;">'+
                           ''+
                           '            <div style="display: inline-block;width: 100%; color:{{playerColor}};">'+
                           '                <div style="float:left; height: 36px;"><img src="images/{{playerColor}}.png" style="height:100%"> </img></div>'+
                           '            <div style=" padding-top: 19px;float: left; padding-left: 7px;">{{PLAYER}}: {{userName}} </div>'+
                           '        </div>'+
                           ''+
                           '        <div style="display: inline-block;width: 100%;">'+
                           '            <div style="float: left;">{{BankBalance}}</div>'+
                           '            <div style="float: right;">{{currentWeekBankBalance}}</div>'+
                           '        </div>'+
                           ''+
                           '        <div style="display: inline-block;width: 100%;">'+
                           '            <div style="float: left;">{{Cash}}</div>'+
                           '            <div style="float: right;">{{currentWeekCash}}</div>'+
                           '        </div>'+
                           ''+
                           '        <div style="display: inline-block;width: 100%;">'+
                           '            <div style="float: left;">{{Credit}}</div>'+
                           '            <div style="float: right;">{{currentWeekCredit}}</div>'+
                           '        </div>'+
                           ''+
                           '        <div style="display: inline-block;width: 100%;">'+
                           '            <div style="float: left;">{{INVENTORY}}</div>'+
                           '            <div style="float: right;">{{currentInventory}}</div>'+
                           '        </div>'+
                           '        <div style="display: inline-block;width: 100%;">'+
                           '            <div style="float: left;">{{ReputationPoints}}</div>'+
                           '            <div style="float: right;">{{currentWeekReputationPts}}</div>'+
                           '        </div>'+
                           '        <div style="display: inline-block;width: 100%;">'+
                           '            <div style="float: left;">{{AdvantageCard}}</div>'+
                           '            <div style="float: right;">{{currentWeekAdvantageCard}}</div>'+
                           '        </div>'+
                           ''+
                           '    </div>'+
                           '    {{/each}}'+
                           ''+
                           '</div>'+
                           ''+
                           '   <div style="display:flex;justify-content:space-around;flex-direction:row;"> <div style="margin-top: 10px;margin-bottom: 10px;"> <div style="cursor:pointer;background-image: url(images/buttonMedium.png);background-size: 100% 100%; width: fit-content;margin: auto;   padding: 7px;    color: green;" onClick="ubsApp.restartGame();"> {{PLAYAGAIN}} </div></div>'+
                           ' <div style="margin-top: 10px;margin-bottom: 10px;"> <div style="cursor:pointer;background-image: url(images/buttonMedium.png);background-size: 100% 100%; width: fit-content;margin: auto;   padding: 7px;    color: red;" onClick="ubsApp.closeGame();"> {{CLOSE}} </div></div>'+
                           '</div>'+
                           '</div>';


