// using http://pojo.sodhanalibrary.com/string.html

ubsApp.staticTemplate ='<div class="{{width}}" id="{{id}}" style="{{style}}" {{#if onClickPage}} onclick="ubsApp.checkPageorBoard(\' {{onClickPage.nextPage}} \',\'{{amount}}\', \'{{onClickPage.hideScenarios}}\')" {{/if}}>'+
'{{#if isOnlineMode}}'+
'       {{srcOnline}}'+
'{{else}}'+
'       {{src}}'+
' </div>'+
'{{/if}}'+
'<div id={{audioId}}></div>';
	
	

// ubsApp.decisionTemplate = '	 <div class="{{width}}" style="{{style}}">'+
// '			'+
// '		'+
// '		<div style="{{questionStyle}}">{{question}}</div><br>'+
// '		<div>'+
// '				'+
// '			{{#each options}}'+
// '			 <div  style="color: black;background-color:rgb(153, 230, 255);border-radius: 2vw;padding:.5vw;font-size:0.9vw;"> <input type="radio" style="{{radio_style}}" name="{{optionName}}" value="{{optionValue}}" id={{id}}> {{optionValue}}</div><br>'+
// '<span style="display:none" id="{{id}}Amount">{{amount}}</span>' +
// '<span style="display:none" id="{{id}}Inventory">{{inventoryScoreToBeChanged}}</span>'+
// '			{{/each}}    '+
// '				'+
// '		</div>'+
// '		<div style="text-align:center">'+
// '			<button id = "submitQuestion" style=\'background-color: #b3e6ff;color:black;display:inline-block;text-decoration: none;border:1px solid blue;width:8vw;\' onclick="ubsApp.renderDecisonTemplate()" >Submit</button>'+
// '		</div>'+
// '		  '+
// '		'+
// '			'+
// '		</div>' +
// '<div id={{audioId}}></div>';

ubsApp.wheelOfFortuneTemplate =   '<div style="{{style}}"  class="{{width}}" >'+
' <div style="width:100%; text-align: center;">'+
'<img src="images/caret-down.svg" style="height: 30px;" ></img>'+
'<canvas id="canvas"  width="{{wheelWidth}}" height="{{wheelWidth}}" style="padding-bottom:5px; padding-left: 0;padding-right: 0;margin-left: auto;margin-right: auto;display: block;">'+
'<p style="{color: white}" align="center">Sorry, your browser doesn\'t support canvas. Please try another.</p>'+
' </canvas>'+
' </div>'+
' <div style="width:100%; text-align: center;">'+
'	<button onclick="ubsWheelOfFortune.startSpin()"  style="background-color:#ff6600; padding:5px; border-radius:5px; border:0;" >Spin </button>'+
' </div>'+
' </div>'+
'<div id={{audioId}}></div>'+
' '/*+
' <div id= "wheelOfFortuneModal" style="display:none; padding: 30px; background-color: rgba(255, 255, 255, 0.8);position:fixed; z-index:100; width:100%; height:100%; ">'+
' <div style="    display: table-cell; vertical-align: middle;">'+
' <div style="width: 300px; height: 60px; background-color: wheat;padding: 5px; margin: auto; text-align: center; overflow-x: auto;overflow-y: auto;">'+
'   Yay !!! Lets proceed to <span id="wheelOfFortuneIndicatedSegment"> </span> section.'+
'   <div style="border:1px solid;cursor: pointer; width: fit-content;padding: 3px;     margin: auto;" onClick="ubsWheelOfFortune.resetWheel()"> Next </div>'+
' </div>'+
' </div>'+
' </div>'*/;
' ';

/*ubsApp.rollingDiceTemplate = '<body class = "diceBody"><div style="position:absolute; top:35%; left:45%;">'+
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
     '<button onclick="mainroll()" id=\"rollItButton\">Roll it </button>'+
'    </div>'+
'  </div>'+
'</div></body>';*/

ubsApp.rollingDiceTemplate = '<link rel="stylesheet" href="roll_dice.css">'+
'  <button id=\'pointRollButton\' class=\'roll-button\'>Roll it</button>'+
'  <div class="dice-board">'+
''+
''+
'    <div class="container-dice">'+
'      <div id=\'dice1\' class="dice dice-one">'+
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
''+
''+
'    </div> '+
''+
''+
'  </div>'+
'    <script type="text/javascript" src="roll_dice.js"></script>';
    




ubsApp.scratchCard ='<canvas id="scratch_card_canvas"'+
                    '	height="{{height}}px"'+
                    '	width="{{width}}px"'+
                    '	style="{{style}}" />';

ubsApp.choiceTemplate =  '<div id = "choiceTemplate" style="height:{{containerHeight}}">'+ '{{#each choices}}'+
''+
'		'+
'				'+
'				<div class="{{width}}" style="{{style}}; height: {{choiceHeight}}; {{#if display}} ;cursor:pointer;{{/if}}" {{#if onClickPage}} {{#if display}} onclick="ubsApp.updateChoices(\'{{choiceID}}\', \'{{onClickPage}}\')" {{/if}}{{/if}}>'+
'					{{#if display}} '+
''+
'					{{notSelectedSrc}} '+
'                   {{else}}'+
'					   {{selectedSrc}}'+
'					{{/if}}'+
'	            </div>'+
''+
'			'+
''+
'			{{/each}}' + '</div>'+
' <div id={{audioId}}></div>';
    
ubsApp.scoreTemplate= //'<style>'+ 
 
// ' .coin{display:block ; width: 35px; height: 35px; -ms-transform-style:preserve-3d;-webkit-transform-style:preserve-3d; transform-style:preserve-3d;  animation: coin 2s linear infinite; }'+

// ' .coin .front{ width: 100%; height: 100%; border-radius: 50%; position: absolute; top: 0; left: 0; z-index: -1; }'+

// ' .coin .back{ width: 100%; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} border-radius: 50%; transform: rotateY(180deg)translateZ(10px); -webkit-transform:rotateY(180deg)translateZ(10px); -ms-transform:rotateY(180deg)translateZ(10px); position: absolute; top: 0; left: 0; z-index: 1; }'+

// ' .coin .front_b{ width: 100%; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} border-radius: 50%; transform: translateZ(-1px); -webkit-transform:translateZ(-1px); position: absolute; top:0; left: 0; z-index: 2;}'+

// ' .coin:before{ content: \"\"; margin-left: -5px; width: 10px; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} position: absolute; top: 0; left: 50%; z-index:1; -webkit-transform:rotateY(-90deg); -webkit-transform-origin:100% 50%; transform:  rotateY(-90deg); transform-origin: 100% 50%;}'+

// ' .coin .front_b:before{ content: \"\"; width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: 3; }'+ 


// ' .coin .back:before{content: \"\";width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: -3;}'+



// ' .print_txt{ display:block;padding: 10px ; font-weight: 500;font-size: 18px;width: 7%;} '+


// ' @keyframes'+ 
// ' coin{'+ 
// 	'0%{}'+ 
// 	'100%{-webkit-transform: rotateY(360deg);}}'+ 


// ' </style>'+


'<div style=\"position: absolute; top: 0%; left: 90%; {{#if textColor}}color:{{textColor}};{{/if}}\"\">'+		
	'<div class=\"print_txt\" id=\"headId\" align=\"center\" > </div>'+

'</div>'+

'<div style=\"position: absolute; top: 0.5%; left: 95%; \"> '+
	
	'<div class=\"coin\" id=\"coin\" style=\"float:right; {{#if backgroundColor}}background-color:{{backgroundColor}};\">'+ 
		'<div class=\"front\"></div>'+
		'<div class=\"front_b\"></div>'+
		'<div class=\"back\"></div>'+
	'</div>'+
	
'</div>'


//ubsApp.popupTemplate = '<div id="{{id}}"  style=" padding: 30px; background-color: rgba(255, 255, 255, 0.8);position:fixed; z-index:100; width:100%; height:100%;">'+
//' 	<div style="display: table-cell; vertical-align: middle;">'+
//' 		'+
//' 		<div style="{{msg_style}};background-color:#0099ff;">'+
//'   			{{message}}'+
//'   			<div style="{{button_style}}" onClick="{{onClick}}"> Next </div>'+
//' 		</div>'+
//' 		'+
//' 	</div>'+
//' </div>';

ubsApp.modalTemplate = 	'<div class="modal animated zoomIn" id="scenarios" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
'  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">'+
'    <div class="modal-content">'+
'      <div class="modal-body">'+
'      </div>  '+
'    </div>'+
'  </div>'+
'</div>';
    



ubsApp.timerTemplate = '<div style="color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;position:absolute; top:5%; right:6%;" class="timer"> Timer: </div>'+'<div class="timer" style="{{style}}" id="{{divID}}" >'+

''+
'</div>';


ubsApp.audioTemplate = '<div >'+
'	<audio id = "soundtrack">'+
'		<source src={{audioSrc}} type="audio/mp3">'+
'	</audio>'+
'</div>';

ubsApp.boardTemplate='<div class="responsive">'+
    '<div class="mainSquare">'+
        '<div class="row top">'+
            '{{#each top_row}}'+
                '<div class="square1">'+
                    '<div class="header header-top {{color}}"></div>'+
                    '<div class="firstLine firstLine-top rotation2" id={{id}}>'+'{{title}}'+
                        '{{#if start}}'+
                            '{{#each player}}'+
                              '<div id="{{playerId}}"><span class="dot {{pc}}"></span></div>'+
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
                        '<div class="headerSide header-left {{color}}"></div>'+
                        '<div class="firstLine firstLine-left rotation1">'+'{{title}}'+'</div>'+
                    '</div>'+
                '{{/each}}'+
            '</div>'+    
            '<div class="square9"></div>'+
            
            '<div class="square2">'+
                '{{#each right_col}}'+
                    '<div class="squareSide">'+
                        '<div class="headerSide header-left {{color}}"></div>'+
                        '<div class="firstLine firstLine-right rotation3">'+'{{title}}'+'</div>'+
                    '</div>'+
                '{{/each}}'+
            '</div>'+
        '</div>'+
        '<div class="row top">'+
            '{{#each bottom_row}}'+
                '<div class="square1">'+
                    '<div class="header header-top {{color}}"></div>'+
                    '<div class="firstLine firstLine-top rotation2">'+'{{title}}'+'</div>'+
                '</div>'+
            '{{/each}}'+
        '</div>'+
    '</div>'+
'</div>';

ubsApp.leaderBoardTemplate=
    '<div id=\"leaderBoardTitle\" style=\"color:white;\" >'+
        '{{title}}'+
    '</div>'+
    '<hr style=\"color:white;\"><br>'+
    '<div id=\"leaderBoard\" >'+
        '<button onclick=\"monopoly.closeLeaderBoard()\" style=\"align:center;background-color:black;border:0;color:white;\">Close</button><br>'+
        '{{#each array}}'+
        '<div style=\"margin-top:15%;border:2px solid;display: block; white-space: nowrap; width:100%;padding:7px;display:inline-block; color:{{color}};\">'+
            '<span style=\"color:white;white-space: nowrap; transition: width 2s;margin-top:2px;\">{{name}}:</span>'+
            '<span id=\"score\" style=\"white-space: nowrap;margin-left:1%;margin-left:5%;color:white;\">{{score}}{{inventory}}{{document}}{{merit}}'+
            '{{#if score}}'+
                '<img src=\"images/coin.png\" width=\"25\" height=\"25\" >'+
            '{{/if}}'+
            '</span>'+
            '</div><br>'+
        '{{/each}}'+
        
    '</div><br>';

    ubsApp.addPlayerTemplateonWeb =
    '<div style="{{style}}">' +
    '    <div style="background-color: white;margin-left:1%;margin-right:1%;position: relative; overflow: auto; max-height: 80vh; ">' +
    '' +
    '        <div>' +
    '' +
    '            <div style="text-align: center;margin-top:1%" class="popupHeaderFontSize" >{{title}}</div>' +
    '' +
    '        </div>' +
    '' +
    '        <div style="padding-bottom:10px;"> <img src="images/red header.png" style="width:100%;">  </div>' +
    '        ' +
    '        <div style="display: inline-block;width: 100%;font-weight:bold;">' +
    '<div id="addPlayerValidationMessage" style="color:red;margin-bottom: 2%;text-align: center;"> </div>' +

    '            <div style="display: table;width: 80%;     margin-left: 10%;    margin-bottom: 2%;">' +
    '                <div style="display: table-row;">' +
    '                        <div style="display: table-cell;">{{name}}</div>' +
    '                        <div style="display: table-cell;">{{age}}</div>' +
    '                        <div style="display: table-cell; ">{{gender}}</div>' +
    '                        <div style="display: table-cell; "></div>' +
    '                        <div style="display: table-cell; "></div>' +


    '                </div>' +
    '                <div style="display: table-row;">' +
    '                        <div style="display: table-cell;"><input  style="" id="playerNameInput"></input></div>' +
    '                        <div style="display: table-cell;"><input type="number" style="" id="playerAge"></input></div>' +
    '                        <div style="display: table-cell;"><select style="" id="playerGender"><option id="male" value="male">{{MALE}}</option><option id="female" value="female">{{FEMALE}}</option></select></div>' +
    '                        <div style="display: table-cell; vertical-align: middle;cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%; padding-bottom: 1%; color: green;font-weight:bold;text-align: center;" onclick="ubsApp.addNewPlayer()" >{{add}}</div>' +

    '                </div>' +
    '{{#if isStudentAdded}}' +

    '                <div style="display: table-row;">' +
    '                        <div style="display: table-cell;padding-bottom:2%; padding-top: 2%;"><hr></div>' +
    '                        <div style="display: table-cell;"><hr></div>' +
    '                        <div style="display: table-cell;"><hr></div>' +
    '                        <div style="display: table-cell;"><hr></div>' +

    '                </div>' +
    '{{/if}}' +
    '{{#each studentList}}' +

    '                <div style="display: table-row;">' +
    '                        <div id="webEnabled"style="display: table-cell;"><input  style="" id="{{playerid}}Name" value="{{playername}}"></input></div>' +
    '                        <div style="display: table-cell;"><input type="number" style="" id="{{playerid}}Age" value="{{age}}"></input></div>' +
    '                        <div style="display: table-cell;"><select style="" id="{{playerid}}Gender"><option {{#if isMale}} selected="selected" {{/if}} id="male" value="male">{{MALE}}</option><option {{#if isFemale}} selected="selected" {{/if}} id="female" value="female">{{FEMALE}}</option></select></div>' +
    //'                        <div style="display: table-cell;cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;padding: 1.5%; color: green;font-weight:bold; text-align: center;" onclick="ubsApp.updatePlayer(\'{{StudentId}}\')" >{{update}}</div>'+
    //'                        <div style="display: table-cell;cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;padding: 1.5%; color: green;font-weight:bold; text-align: center;" onclick="ubsApp.deletePlayer(\'{{StudentId}}\')" >{{delete}}</div>'+
    '                        <div style="display: table-cell; text-align:center" onclick="ubsApp.updatePlayer(\'{{playerid}}\')"  ><img style="width:25%;cursor:pointer;" src="images/update.png"></img></div>' +
    '                        <div style="display: table-cell;" onclick="ubsApp.deletePlayer(\'{{playerid}}\')" ><img style="width:25%;cursor:pointer;" src="images/delete.png"></img></div>' +
    '                </div>' +
    '{{/each}}' +

    '' +
    '            </div>' +
    '        </div>' +
    '' +
    '        <div style="display:inline-block;width:100%;">' +
    '                 <div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: red;font-weight: bold; width: 15.5%;text-align: center;" onclick="ubsApp.closeCurrentScenario()" >{{cancel}}</div>' +

    '        </div>' +
    '</div>' +
    '</div>';


    ubsApp.addPlayerTemplate =
    '<div style="{{style}}">'+
                               '    <div style="background-color: white;margin-left:1%;margin-right:1%;position: relative; overflow: auto; max-height: 80vh; ">'+
                               ''+
                               '        <div>'+
                               ''+
                               '            <div style="text-align: center;margin-top:1%" class="popupHeaderFontSize" >{{title}}</div>'+
                               ''+
                               '        </div>'+
                               ''+
                               '        <div style="padding-bottom:10px;"> <img src="images/red header.png" style="width:100%;">  </div>'+
                               '        '+
                               '        <div style="display: inline-block;width: 100%;font-weight:bold;">'+
                               '<div id="addPlayerValidationMessage" style="color:red;margin-bottom: 2%;text-align: center;"> </div>'+

                               '            <div style="display: table;width: 80%;     margin-left: 10%;    margin-bottom: 2%;">'+
                               '                <div style="display: table-row;">'+
                               '                        <div style="display: table-cell;">{{name}}</div>'+
                               '                        <div style="display: table-cell;">{{age}}</div>'+
                               '                        <div style="display: table-cell; ">{{gender}}</div>'+
                               '                        <div style="display: table-cell; "></div>'+
                               '                        <div style="display: table-cell; "></div>'+


                               '                </div>'+
                               '                <div style="display: table-row;">'+
                               '                        <div style="display: table-cell;"><input  style="" id="playerNameInput"></input></div>'+
                               '                        <div style="display: table-cell;"><input type="number" style="" id="playerAge"></input></div>'+
                               '                        <div style="display: table-cell;"><select style="" id="playerGender"><option id="male" value="male">{{MALE}}</option><option id="female" value="female">{{FEMALE}}</option></select></div>'+
                               '                        <div style="display: table-cell; vertical-align: middle;cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%; padding-bottom: 1%; color: green;font-weight:bold;text-align: center;" onclick="ubsApp.addNewPlayer()" >{{add}}</div>'+

                               '                </div>'+
                               '{{#if isStudentAdded}}' +

                              '                <div style="display: table-row;">'+
                              '                        <div style="display: table-cell;padding-bottom:2%; padding-top: 2%;"><hr></div>'+
                              '                        <div style="display: table-cell;"><hr></div>'+
                              '                        <div style="display: table-cell;"><hr></div>'+
                              '                        <div style="display: table-cell;"><hr></div>'+

                              '                </div>'+
                               '{{/if}}' +
                              '{{#each studentList}}' +

                               '                <div style="display: table-row;">'+
                               '                        <div style="display: table-cell;"><input  style="" id="{{StudentId}}Name" value="{{StudentName}}" disabled></input></div>'+
                               '                        <div style="display: table-cell;"><input type="number" style="" id="{{StudentId}}Age" value="{{StudentAge}}" disabled></input></div>'+
                               '                        <div style="display: table-cell;"><select style="" id="{{StudentId}}Gender" disabled><option {{#if isMale}} selected="selected" {{/if}} id="male" value="male">{{MALE}}</option><option {{#if isFemale}} selected="selected" {{/if}} id="female" value="female">{{FEMALE}}</option></select></div>'+
                               //'                        <div style="display: table-cell;cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;padding: 1.5%; color: green;font-weight:bold; text-align: center;" onclick="ubsApp.updatePlayer(\'{{StudentId}}\')" >{{update}}</div>'+
                               //'                        <div style="display: table-cell;cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;padding: 1.5%; color: green;font-weight:bold; text-align: center;" onclick="ubsApp.deletePlayer(\'{{StudentId}}\')" >{{delete}}</div>'+
                               '                        <div style="display: table-cell; text-align:center" onclick="ubsApp.updatePlayer(\'{{StudentId}}\')"  ><img style="width:35%;cursor:pointer;" id="{{StudentId}}" src="images/edit.png"></img></div>'+
                               '                        <div style="display: table-cell;" onclick="ubsApp.deletePlayer(\'{{StudentId}}\')" ><img style="width:25%;cursor:pointer;" src="images/delete.png"></img></div>'+
                              '                </div>'+
                              '{{/each}}' +

                               ''+
                               '            </div>'+
                               '        </div>'+
                               ''+
                               '        <div style="display:inline-block;width:100%;">'+
                               '                 <div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: red;font-weight: bold; width: 15.5%;text-align: center;" onclick="ubsApp.closeCurrentScenario()" >{{cancel}}</div>'+

                               '        </div>'+
                               '</div>'+
                               '</div>';

    
    ubsApp.joinRoomTemplate = '<div style="{{style}}">'+
    '	<div style="background-color: white;margin-left:1%;margin-right:1%;position: relative; overflow: auto; max-height: 80vh; ">	'+
    '		<div>'+
    '			<div style="text-align: center;margin-top:1%" class="popupHeaderFontSize" >{{title}}</div>'+
    '		</div>'+
    '		'+
    '		<div style="padding-bottom:10px;"> <img src="images/red header.png" style="width:100%;"></div>'+
    '		'+
    '		<div style="display: inline-block;width: 100%;font-weight:bold;">'+
    '			<div id="addPlayerValidationMessage" style="color:red;margin-bottom: 2%;text-align: center;"> </div>'+
    '			<div style="display: table;width: 80%;     margin-left: 10%;    margin-bottom: 2%;">'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell;">{{name}}</div>'+
    '				<div style="display: table-cell;">{{age}}</div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell;"><input  style="" id="playerNameInput"></input></div>'+
    '				<div style="display: table-cell;"><input type="number" style="" id="playerAge"></input></div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell; ">{{gender}}</div>'+
    '				<div style="display: table-cell; ">{{roomCode}}</div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell;"><select style="" id="playerGender"><option id="male" value="male">{{MALE}}</option><option id="female" value="female">{{FEMALE}}</option></select></div>'+
    '				<div style="display: table-cell;"><input type="text" style="" id="roomCode"></input></div>'+
    '			</div>'+
    '		</div>'+
    '	'+
    '		</div>'+
    '		<div style="display:inline-block;width:100%;">'+
    '			<div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: {{color}};font-weight: bold; width: 15.5%;text-align: center;" onclick="ubsApp.joinRoom()">{{joinRoom}}</div>'+
    '			<div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: red;font-weight: bold; width: 15.5%;text-align: center;" onclick="ubsApp.closeCurrentScenario()" >{{cancel}}</div>'+
    '		</div>'+
    '	</div>'+
    '</div>';

    ubsApp.joinRoomLobbyTemplate = '<div style="{{style}}">'+
    '	<div style="background-color: white;margin-left:1%;margin-right:1%;position: relative; overflow: auto; max-height: 80vh; ">	'+
    '		<div>'+
    '			<div style="text-align: center;margin-top:1%" class="popupHeaderFontSize" >{{title}}</div>'+
    '		</div>'+
    '		'+
    '		<div style="padding-bottom:10px;"> <img src="images/red header.png" style="width:100%;"></div>'+
    '		'+
    '		<div style="display: inline-block;width: 100%;font-weight:bold;">'+
    '			<div id="addPlayerValidationMessage" style="color:red;margin-bottom: 2%;text-align: center;"> </div>'+
    '			<div style="display: table;width: 80%;     margin-left: 10%;    margin-bottom: 2%;">'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell;">{{joined_room_message}}</div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell;">{{people_message}}</div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell; " id ="listOfUsers"></div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell; ">{{waitingMessage}}</div>'+
    '			</div>'+
    '			'+
    '		</div>'+
    '		</div>'+
    '	</div>'+
    '</div>';

    ubsApp.createRoomTemplate = '<div style="{{style}}">'+
    '	<div style="background-color: white;margin-left:1%;margin-right:1%;position: relative; overflow: auto; max-height: 80vh; ">	'+
    '		<div>'+
    '			<div style="text-align: center;margin-top:1%" class="popupHeaderFontSize" >{{title}}</div>'+
    '		</div>'+
    '		'+
    '		<div style="padding-bottom:10px;"> <img src="images/red header.png" style="width:100%;"></div>'+
    '		'+
    '		<div style="display: inline-block;width: 100%;font-weight:bold;">'+
    '			<div id="addPlayerValidationMessage" style="color:red;margin-bottom: 2%;text-align: center;"> </div>'+
    '			<div style="display: table;width: 80%;     margin-left: 10%;    margin-bottom: 2%;">'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell;">{{name}}</div>'+
    '				<div style="display: table-cell;">{{age}}</div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell;"><input  style="" id="playerNameInput"></input></div>'+
    '				<div style="display: table-cell;"><input type="number" style="" id="playerAge"></input></div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell; ">{{gender}}</div>'+
    '				<div style="display: table-cell; ">{{languageSelect}}</div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell;"><select style="" id="playerGender"><option id="male" value="male">{{MALE}}</option><option id="female" value="female">{{FEMALE}}</option></select></div>'+
    '				<div style="display: table-cell;"><select style="" id="languageSelect"><option id="english" value="english">{{ENGLISH}}</option><option id="hindi" value="hindi">{{HINDI}}</option><option id="marathi" value="marathi">{{MARATHI}}</option></select></div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell; ">{{numberOfWeeks}}</div>'+
    '				<div style="display: table-cell; ">{{numberOfPlayers}}</div>'+
    '			</div>'+
    '			<div style="display: table-row;">'+
    '				<div style="display: table-cell; "><input type="radio" name="noOfWeeks" value="6">6 <input type="radio" name="noOfWeeks" value=12 checked="">12</div>'+
    '				<div style="display: table-cell; "><select style="" id="num_online_players"><option id="one" value="1">1</option><option id="two" value="2">2</option><option id="three" value="3">3</option><option id="four" value="4">4</option></select></div>'+
    '			</div>'+
    '		</div>'+
    '	'+
    '		</div>'+
    '		<div style="display:inline-block;width:100%;">'+
    '			<div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: {{color}};font-weight: bold; width: 17.5%;text-align: center;" onclick="ubsApp.createRoom()"  >{{createRoom}}</div>'+
    '			<div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: red;font-weight: bold; width: 15.5%;text-align: center;" onclick="ubsApp.closeCurrentScenario()" >{{cancel}}</div>'+
    '		</div>'+
    '	</div>'+
    '</div>';
        
    ubsApp.createRoomLobbyTemplate = '<div style="{{style}}">'+
'	<div style="background-color: white;margin-left:1%;margin-right:1%;position: relative; overflow: auto; max-height: 80vh; ">	'+
'		<div>'+
'			<div style="text-align: center;margin-top:1%" class="popupHeaderFontSize" >{{title}}</div>'+
'		</div>'+
'		'+
'		<div style="padding-bottom:10px;"> <img src="images/red header.png" style="width:100%;"></div>'+
'		'+
'		<div style="display: inline-block;width: 100%;font-weight:bold;">'+
'			<div id="addPlayerValidationMessage" style="color:red;margin-bottom: 2%;text-align: center;"> </div>'+
'			<div style="display: table;width: 80%;     margin-left: 10%;    margin-bottom: 2%;">'+
'			<div style="display: table-row;">'+
'				<div style="display: table-cell;">{{roomCodeLabel}}</div>'+
'				<div style="display: table-cell;" id="roomCode"></div>'+
'			</div>'+
'			<div style="display: table-row;">'+
'				<div style="display: table-cell;">{{people_message}}</div>'+
'			</div>'+
'			<div style="display: table-row;">'+
'				<div style="display: table-cell; " id ="listOfUsers"></div>'+
'			</div>'+
'			'+
'		</div>'+
''+
'		<div style="display:inline-block;width:100%;">'+
'			<div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: {{color}};font-weight: bold; width: 17.5%;text-align: center;" onclick="monopoly.socketStorePlayerDetails()">{{startGame}}</div>'+
'			<div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: red;font-weight: bold; width: 17.5%;text-align: center;" onclick="ubsApp.closeCurrentScenario()">{{shareCode}}</div>'+
'		</div>'+
'	'+
'		</div>'+
'	</div>'+
'</div>';


    ubsApp.salesTemplate=
    '<div class="mainDiv row" style="height:100%;width:100%">'+
    '       <div class="salesScreenTitle" style="color:white">'+
                    '           {{sale}}' +
                    '       </div>'+
                    '           <div class="salesIconContainer">'+
                    '               <img src="{{salesImage}}.png" class="icon" style="">'+
                    '           </div>'+
                    '       <div id="luckPlayerNameTitle">'+
                    '       {{PLAYER}}:<span id="player" style="padding: 1px">{{currentPlayerName}}</span>'+
                    '       </div>'+
'    <div class="col-md-2 col-sm-2 col-xs-2 customer">'+
     '<div id="profile">'+
    ' <img src="{{profilePicture}}.png" class="icon" style="">'+
'       </div>'+
'           <br>'+
'<div style="display:inline-block; width:80%; text-align:left;;float:left";>'+
'                  <button class="customerButton">'+
'           {{Customer}}'+
'              </div>'+
'<img src="{{gameLogo}}" class="gameLogoImage">' +
'       </div>'+
    //need to add dhandha chalo image here
//'    <div class="col-md-2 col-sm-2 col-xs-2 customer">'+
//'       <div id="order">'+
//'           <div id="orderList">'+
//'           <div style="background-color: white;height: 100%;padding: 2px;overflow: auto;">'+
//'           <center><b>{{Order}}</b></center>'+
//'               <table class="table table-sm">'+
//'                   <tbody>'+
//'                       {{#each order}}'+
//'                         <tr class = "row{{no}} {{#if exclude}}strikeout{{/if}}" data-toggle="tooltip" data-placement="bottom" {{#if exclude}}title="This item is not available in your Inventory"{{/if}} >'+
//'                           <td class="items">{{item}}</td>'+
//'                           <td class="items">{{amount}}</td>'+
//'                         </tr>'+
//'                       {{/each}}'+
//'                   </tbody>'+
//'               </table>'+
//'           </div>'+
//'       </div>'+
//'       </div>'+
//'    </div>'+
'    <div class="col-md-5 col-sm-5 col-xs-5 receipt-gen">'+
'       <div class="receipt">'+
'       <div class="receiptSale">'+
'        <div style="background-color: white;height: 100%;padding: 2px;">'+
'           <div id="title">{{receiptHeading}}</div>'+
'       '+
'           <img src="images/red header.png" style="width:100%" >'+
'           <div id="bill">'+
'               <div class="table-responsive" style="overflow-x: unset;">          '+
'                 <table class="table table-bordered">'+
'                   <thead>'+
'                     <tr>'+
'                       <th>#</th>'+
'                       <th>{{Items}}</th>'+
'                       <th>{{Quantity}}</th>'+
'                       <th>{{Rate}}</th>'+
'                       <th>{{Amount}}</th>'+
'                     </tr>'+
'                   </thead>'+
'                   <tbody>'+
'                       {{#each order}}'+
'                     <tr class = "row{{no}} {{#if exclude}}strikeout{{/if}}" data-toggle="tooltip" data-placement="bottom" {{#if exclude}}title="This item is not available in your Inventory"{{/if}} ">'+
'                       <td  class="items">{{no}}</td>'+
'                       <td  class="items">{{item}}</td>'+
'                       <td  class="items" id="itemPrice{{no}}">{{amount}}</td>'+
'                       <td  class="items">{{rate}}</td>'+
'                       <td ><input id = "input{{no}}{{#if exclude}}-1{{/if}}" type="number" name="amt" class="amount saleInputButtons" oninput="ubsApp.calculateBill()" {{#if exclude}}disabled{{/if}} {{#if exclude}}value="0"{{/if}}></td>  '+
'                     </tr>'+
'                       {{/each}}'+
'                     {{#if discount}}'+
'                     <tr>'+
'                       <td colspan="4" style="color:#009933;vertical-align:middle;"><i> {{Discount}}: &nbsp;&nbsp;{{discount}}</i></td>'+
'                       <td ><input id = "discount" type="number" name="amt" class="amount saleInputButtons" oninput="ubsApp.calculateBill()" ></td>  '+
'                     </tr>'+
'                     {{/if}}'+
'                     <tr>'+
'                       <td></td>'+
'                       <td></td>'+
'                       <td></td>'+
'                       <td><b>{{Total}}</b></td>'+
'                       <td><input type="number"  id="receiptTotal" class="amount" ></td>    '+
'                     </tr>'+
'                   </tbody>'+
'                 </table>'+
'               </div>'+
'           </div>'+
'           </div>'+
'       </div>'+
'       </div>'+
'    </div>'+
'   <div class="col-md-5 col-sm-5 col-xs-5" style="    margin-top: 5%;">'+
'   <div style="display: flex;flex-direction: row;justify-content: space-around;" >' +
'       <div class="tools" style="color:white;    text-align: center;padding-right: 6%;">'+
'           {{Tools}}'+
'       </div>'+
        '<div style="text-align: center;">'+
        '       <span id = "minutes">00'+
        '           '+
        '       </span>'+
        '       <span id = "colon">'+
        '           :'+
        '       </span>'+
        '       <span id = "seconds">'+
        '           '+
        '       </span> </div>'+
        '   </div>' +
'           '+
'       <div id="calculator">'+
'           <input type="text" readonly size="10" maxlength="7" id="numberInput">'+
'           <input id="calcButton" class="button gray" type="button" value="7" onclick="addToDisplay(7)">'+
'           <input id="calcButton" class="button gray" type="button" value="8" onclick="addToDisplay(8)">'+
'           <input id="calcButton" class="button gray" type="button" value="9" onclick="addToDisplay(9)">'+
'           <input id="calcButton" class="button pink" type="button" value="/" onclick="addToDisplay(\'/\')">'+
'           <input id="calcButton" class="button gray" type="button" value="4" onclick="addToDisplay(4)">'+
'           <input id="calcButton" class="button gray" type="button" value="5" onclick="addToDisplay(5)">'+
'           <input id="calcButton" class="button gray" type="button" value="6" onclick="addToDisplay(6)">'+
'           <input id="calcButton" class="button pink" type="button" value="*" onclick="addToDisplay(\'*\')">'+
'           <input id="calcButton" class="button gray" type="button" value="1" onclick="addToDisplay(1)">'+
'           <input id="calcButton" class="button gray" type="button" value="2" onclick="addToDisplay(2)">'+
'           <input id="calcButton" class="button gray" type="button" value="3" onclick="addToDisplay(3)">'+
'           <input id="calcButton" class="button pink" type="button" value="+" onclick="addToDisplay(\'+\')">'+
'           <input id="calcButton" class="button orange" type="button" value="C" onclick="addToDisplay(\'C\')">'+
'           <input id="calcButton" class="button gray" type="button" value="0" onclick="addToDisplay(0)">'+
'           <input id="calcButton" class="button orange" type="button" value="=" onclick="addToDisplay(\'=\')">'+
'           <input id="calcButton" class="button pink" type="button" value="-" onclick="addToDisplay(\'-\')">'+
'           <input id="calcButton" class="button orange" type="button" value="DEL" onclick="addToDisplay(\'DEL\')">'+
'           <input id="calcButton" class="button gray" type="button" value="." onclick="addToDisplay(\'.\')">'+
'           <input id="calcButton" class="button orange" type="button" value="+/-" disabled onclick="addToDisplay(\'\')">'+
'       </div>'+
'<div style="display:flex; width:100%; text-align:left;     margin-top: 2%;">'+
'                  <div id= "salesSubmitButton" class="submitButton" style="cursor:pointer" onclick="if (ubsApp.validateAmount() !== false) { ubsApp.reduceInventory(\' {{onClickPage.nextPage}} \',\'{{amount}}\', \'{{onClickPage.hideScenarios}}\',\'{{tempTotal}}\',\'{{time}}\', \'{{startTime}}\', \'{{questionId}}\');}">'+
'           {{SUBMIT}}'+
' </div>' +
'           <div class="helpBtn" style="padding: 6%;" onclick="ubsApp.startHelp(\'{{helpPageName}}\')"></div>'+
'<div id="salesSubmitButton" class="submitButton" style="cursor:pointer;color: black;" onclick="ubsApp.startHelp(\'salesAnswerHelp\');">           GUIDELINES </div>' +
'              </div>'+

//'       <img class="butt" id="help" onclick="ubsApp.startHelp(\'{{helpPageName}}\')" src="images/help.png" />'+
'   </div>'+
'  </div>' +
'<script type="text/javascript">ubsApp.salesOnLoadActions();</script>';

ubsApp.quizTemplate = '<div id="quiz">'+
'   <div id="quizTitle">'+
'       <span id="quizEmoji"></span>    '+
'       <span id="quizHeading">{{quizTitle}}</span>'+
'       <span id="score">{{scoreTitle}}: <span id="correctAnswers"></span>/{{noOfQuestions}} </span>'+
'       <span id="playerName"> {{playerTitle}}: {{currentPlayerName}}</span>'+
'   </div>'+
'   <div id="question_answer_background">'+
'   <div id="question_answer">'+
'       <img src="images/red header.png" style="width:100%; height:100%">'+
'       <span id="quizQuestionNumber"></span><span id="quizQuestion">{{question}}</span>'+
'       {{#if quizResult}}'+
'           <br><b><div id="quizResult"></div>'+
'       </b>{{/if}}'+
'       {{#if options}}'+
/*'       <span id ="quizQuestionNo">Question <span id="quizQuestionNumber"></span></span>'+*/
'       <div id="quizOptions">'+
'           {{#each options}}'+
'           <label for="{{id}}" class="quizOptionsStyle"><input type="radio" style="{{radio_style}}" name="{{optionName}}" value="{{optionValue}}" id="{{id}}" onclick="ubsApp.socketSendOptionId(\'{{id}}\')"/>{{optionValue}}</label>'+
'           {{/each}}'+
'       </div>'+
'       <div id="quizOk"><input type="submit" style="color:green" class=\'quizButtons quizOkButton\' name="{{optionName}}" onclick="ubsApp.socketCheckAnswerAndRenderNextPage(\'{{onClickPage.nextPage}}\',\'{{answer}}\',\'{{optionName}}\', \'{{questionId}}\',\'{{credit.reputationPoints}}\', \'{{startTime}}\', \'{{helpPageName}}\',\'{{entryPoint}}\', \'{{luckScenarioName}}\')" value={{okTitle}}></div>'+
'       {{/if}}'+
'   </div>'+
'   <div id="answerDiv" style="display:none;">'+
'       <span id="answerHeader" class="popupHeaderFontSize"></span><br>'+
'       <span id="answerMessage"></span>'+
'       <div id="quizOk">'+
'           <button id="wrongAnswerOk" style="color:green" class=\'quizButtons quizOkButton\' onclick="ubsApp.socketDisplayNextQuizQuestion(\'{{onClickPage.nextPage}}\')" >{{okTitle}}</button>'+
'       </div>'+
'   </div>'+
'</div>'+
'<img src="{{gameLogo}}" class="quizGameLogoImage">' +
'<div id="quizOkButtons" style="display:flex;width:100%;margin-left:55%">'+
'   <button id="quizDone" style="color:green" disabled class=\'quizButtons quizSubmitButtons\' onclick="ubsApp.doneQuiz()">{{doneTitle}}</button>'+
'   <button id="quizCancel" style="color:red" class=\'quizButtons quizSubmitButtons\' onclick="ubsApp.cancelQuiz(\'{{luckScenarioName}}\')">{{cancelTitle}}</button>'+
'   <button id="quizHelp" class=\'quizButtons quizHelpButtons\' onclick="ubsApp.startHelp(\'{{helpPageName}}\')"></button>'+
'</div>'+
'</div>';

ubsApp.calculatorTemplate = '<script type="text/javascript" src="js/calculator.js"></script>'+
'<link rel="stylesheet" type="text/css" >'+ //href="css/calculator.css"
'<div id="calculator" style="display:none">'+           //remove display None
'   <div id="rateCard"> Rate Card</div>'+
'   <input type="text" id="numberInput">'+
'   <input id="calcButton" type="button" value="7" onclick="addToDisplay(7)">'+
'   <input id="calcButton" type="button" value="8" onclick="addToDisplay(8)">'+
'   <input id="calcButton" type="button" value="9" onclick="addToDisplay(9)">'+
'   <input id="calcButton" type="button" value="/" onclick="addToDisplay(\'/\')">'+
'   <input id="calcButton" type="button" value="4" onclick="addToDisplay(4)">'+
'   <input id="calcButton" type="button" value="5" onclick="addToDisplay(5)">'+
'   <input id="calcButton" type="button" value="6" onclick="addToDisplay(6)">'+
'   <input id="calcButton" type="button" value="*" onclick="addToDisplay(\'*\')">'+
'   <input id="calcButton" type="button" value="1" onclick="addToDisplay(1)">'+
'   <input id="calcButton" type="button" value="2" onclick="addToDisplay(2)">'+
'   <input id="calcButton" type="button" value="3" onclick="addToDisplay(3)">'+
'   <input id="calcButton" type="button" value="+" onclick="addToDisplay(\'+\')">'+
'   <input id="calcButton" type="button" value="C" onclick="addToDisplay(\'C\')">'+
'   <input id="calcButton" type="button" value="0" onclick="addToDisplay(0)">'+
'   <input id="calcButton" type="button" value="=" onclick="addToDisplay(\'=\')">'+
'   <input id="calcButton" type="button" value="-" onclick="addToDisplay(\'-\')">'+
'</div>';
    

// ubsApp.purchaseTemplate='<div style="width:100%;height:100%;">'+

// '       <div style="width:50%;height:100%;float:left; border-right:2px solid black; background-color:white;">'+
// '           <div  class="screenTitle" style=" background-color:#ff6600; ">'+
// '               {{purchase}}'+
// '           </div>'+
// '           <div  style="padding:10px;position: absolute;top: 48%;left:0%;">CURRENT <br>INVENTORY<br> LEVEL</div>'+
// '           <div id="percent" style="{{style}}">{{sliderValue}}%</div>'+
// '           <input type="range" value="{{sliderValue}}" id="mySlider"  oninput="ubsApp.updateInventoryLevel(this.value)">'+
// '           <div id="value" style="{{style}}">Rs. {{inventoryValue}}</div>'+
// '           <div style="position:absolute; bottom:3%;left:14.5%; font-weight:600;">'+
// '               INVENTORY'+
// '           </div>'+
// '       </div>'+
// '       <div id="result" ></div>'+
// '       <button class="purchaseScreenButton" style="position: absolute;top: 50%;left: 46%;" onclick="ubsApp.fillUp() ">CONFIRM>></button>'+
// '       <div style="width:50%;height:100%;float:right;background-color: #ffcc00;">'+
// '           <div style="position:absolute; top:0%;right:0%;padding:10px; background-color:orangered; font-weight:600;">'+
// '               BANK BALANCE: '+'<span id="bankBalanceValue">{{bankBalance}}</span><br>'+
// '               CASH:'+ '<span id="cashValue">{{cash}}</span><br>'+
// '               CREDIT: '+'<span id="creditValue">{{credit}}</span><br>'+
// '               CREDIT LIMIT:'+'<span id="creditLimitValue">{{creditLimit}}</span><br>'+
// '           </div>'+

// '       <button class="purchaseScreenButton" style="position:absolute;bottom:2%;right:10%;" onclick="">HELP</button>'+
// '       <button class="purchaseScreenButton" style="position:absolute;bottom:2%;right:5%;" onclick="ubsApp.pay()">DONE</button>'+
// '       <button class="purchaseScreenButton" style="position:absolute;bottom:2%;right:15%;" onclick="ubsApp.closeCurrentScenario()">NO, THANKS</button>'+
// '       </div>'+
// '       <div style="left:65%;top:45%;position: absolute;" >'+
// '           NEW INVENTORY LEVEL:  <input type="text" id="newInventoryLevelText" style="width: 40px; border: 1px solid black;" readonly="readonly"><br><br>'+
// '           COST: <input type="text" id="newCostText" style="width: 90px; border: 1px solid black;" readonly="readonly"><br><br>'+
// '           <div id="parent1" ">PAY BY: <select style="border:1px solid black" id="pay1" ><option value="cash">CASH</option><option value="cheque">CHEQUE</option><option value="credit">CREDIT</option></select>&nbsp&nbsp AMOUNT:<input type="number" class="enterAmountText" id="amount1" min="0">&nbsp&nbsp<button class="purchaseScreenButton" onclick="ubsApp.addPaymentMode()" style="">Add Mode</button></div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
// '           <div id="parent2" style="display:none;">PAY BY: <select style="border:1px solid black" id="pay2" style="display:none;" ><option value="cash">CASH</option><option value="cheque">CHEQUE</option><option value="credit">CREDIT</option></select> &nbsp&nbsp AMOUNT:<input type="number" class="enterAmountText" min="0"   id="amount2"></div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
// '           <div id="parent3" style="display:none;">PAY BY: <select style="border:1px solid black" id="pay3" style="display:none;" ><option value="cash">CASH</option><option value="cheque">CHEQUE</option><option value="credit">CREDIT</option></select>&nbsp&nbsp AMOUNT:<input type="number" class="enterAmountText" min="0" id="amount3"></div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
// '       </div>'+


// '</div>';

//ubsApp.purchaseTemplate='<div style="width:100%;height:100%;">'+
//
//'       <div  class="purchaseLeftContainer">'+
//'           <div class="iconContainer">'+
//'               <img src="images/buy.png" class="icon">'+
//'           </div>'+
//'           <div  class="purchaseScreenTitle screenTitle">'+
//'               {{purchase}}'+
//'           </div>'+
//'           <div class="currentInventoryTitle">{{current}} <br>{{inventoryTitle}}<br> {{level}}</div>'+
//'           <div id="percent">{{sliderValue}}%</div>'+
//'           <input type="range" value="{{sliderValue}}" id="mySlider"  oninput="ubsApp.updateInventoryLevel(this.value)">'+
//'           <div id="value">Rs. {{inventoryValue}}</div>'+
//'           <div class="purchaseInventoryLabel">'+
//'               {{inventoryTitle}}'+
//'           </div>'+
//'       </div>'+
//'       <div id="result"></div>'+
//'       <div><button class="purchaseScreenButton confirmButton" onclick="ubsApp.fillUp() ">{{confirmTitle}}>></button></div>'+
//'       <div class="purchaseRightContainer">'+
//'           <div style="width:100%;height:40%;">'+
//'               <div class="purchaseTopRightScoreBoard">{{bankBalanceTitle}}: '+'<span id="bankBalanceValue">{{bankBalance}}</span><br>'+
//'               <span>{{cashTitle}}:</span>'+ '<span id="cashValue">{{cash}}</span><br>'+
//'               <span>{{creditTitle}}:</span>'+'<span id="creditValue">{{credit}}</span><br>'+
//'               <span>{{creditLimitTitle}}:</span>'+'<span id="creditLimitValue">{{creditLimit}}</span><br>'+
//'           </div></div>'+
//'       <div class="purchaseInputForm">'+
//'           <div style="margin-left:20%;">'+
//'           <span>{{newInventoryLevelTitle}}:</span> '+
//'           <input type="text" id="newInventoryLevelText"  class="borderB1" readonly="readonly"><br><br>'+
//'           <span>{{costTitle}}: <span><input type="text" id="newCostText" class="borderB1" readonly="readonly"><br><br>'+
//'           <div id="parent1" >'+
//'               {{payByTitle}}: <select class="borderB1" id="pay1" ><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select>&nbsp&nbsp {{amountTitle}}:<input type="number" class="enterAmountText" id="amount1" min="0">&nbsp&nbsp<button class="purchaseScreenButton" onclick="ubsApp.addPaymentMode()" style="">{{addModeTitle}}</button>'+
//'           </div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
//'           <div id="parent2" style="display:none;">'+
//'               {{payByTitle}}: <select class="borderB1" id="pay2"  ><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select> &nbsp&nbsp {{amountTitle}}:<input type="number" class="enterAmountText"  id="amount2">'+
//'           </div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
//'           <div id="parent3" style="display:none;">'+
//'               {{payByTitle}}: <select class="borderB1" id="pay3"  ><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select>&nbsp&nbsp {{amountTitle}}:<input type="number" class="enterAmountText" id="amount3">'+
//'           </div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
//'       </div></div>'+
//'       <div class="purchaseDivBottomThreeButton" >'+
//'           <button class="purchaseScreenButton bottomButton"  onclick="">{{helpTitle}}</button>'+
//'           <button class="purchaseScreenButton bottomButton"  onclick="ubsApp.pay()">{{doneTitle}}</button>'+
//'           <button class="purchaseScreenButton bottomButton"  onclick="ubsApp.closeCurrentScenario(); ubsApp.nextMove()">{{noThanksTitle}}</button>'+
//'       </div>'+
//'</div>'+
//
//
//
//'</div>';

ubsApp.purchaseTemplate = '<div class="container-fluid mainPurchaseDiv">'+
'    <div class="rowPurchase" align="left">'+
'        <div class="columnPurchase">'+
'            <div class="row">'+
'                <div class="purchaseIcon" style="padding-right: 0%;"></div>'+
'                <div style="padding-left: 0%;width:40%">'+
'                    <div class="purchaseTitle">{{purchase}}</div>'+
'                </div>'+
'            </div>'+
'            <div class="purchaseLContainer"><div style="background-color: white;height: 95%;    margin: 3% 3%;overflow: auto;">'+
'                <div class="row">'+
'                    <img src="images/red header.png" class="headerImage">'+
'                </div>'+
'                <br>'+
'                <div class="row">'+
'                    <div class="col-md-6">{{bankBalanceTitle}}</div>'+
'                    <div id="bankBalanceValue" class="col-md-6" style="text-align: right;">{{bankBalance}}</div>'+
'                </div>'+
'                <br>'+
'                <div class="row">'+
'                    <div class="col-md-6">{{cashTitle}}</div>'+
'                    <div id="cashValue" class="col-md-6" style="text-align: right;">{{cash}}</div>'+
'                </div>'+
'                <br>'+
'                <div class="row">'+
'                    <div class="col-md-6">{{creditTitle}}</div>'+
'                    <div id="creditValue" class="col-md-6" style="text-align: right;">{{credit}}</div>'+
'                </div>'+
'                <br>'+
'                <div class="row">'+
'                    <div class="col-md-6">{{creditLimitTitle}}</div>'+
'                    <div id="creditLimitValue" class="col-md-6" style="text-align: right;">{{creditLimit}}</div>'+
'                </div>'+
'            </div></div>'+
'            <div class="row" style="margin-top:15%;">'+
'                <div class="logoImage"></div>'+
'                <div class="col-md-7"></div>'+
'            </div>'+
'        </div>'+
'        <div class="columnPurchase">'+
'            <div class="purchaseMContainer"> <div style="background-color: white;height: 97%;    margin: 3% 3%;overflow: auto;">'+
'                <div class="row">'+
'                    <img src="images/red header.png" class="headerImage">'+
'                </div>'+
'                <p style= "text-align:center;font-weight:600;">{{inventoryTitle}}</p>'+
'                <div class="row" style="height: 60%; overflow:hidden;">'+
'                    <div class="col-md-4" style="margin: auto;margin-left: 1%;">'+
'                        {{current}}<br>{{inventoryTitle}}<br>{{level}}:<span id="percent">{{sliderValue}}</span>%'+
'                    </div>'+
'                    <div class="col-md-4">'+
'                        <input type="range" value="{{sliderValue}}" id="mySlider" oninput="ubsApp.updateInventoryLevel(this.value)">'+
'                    </div>'+
'                    <div id="increaseValue" class="col-md-4" style="padding-left: 0%;margin:auto;display:grid;">'+
'                       <div id="increaseInventory" >'+
'                        <button id="increaseButton" style="width:35%" onclick="ubsApp.increaseInventory()">+</button>'+
'                       </div>'+
'                      <div id="value" class="col-md-14" style="padding-left: 0%;margin:auto;">{{inventoryValue}}</div>'+
'                       <div id="decreaseInventory" >'+
'                        <button id="decreaseButton" style="width:35%" onclick="ubsApp.decreaseInventory()">-</button>'+
'                       </div>'+
'                   </div>'+
'                </div>'+
/*'                <div class="row" style="height:7vmax;">'+
'                    <div class="confirmButton" onclick="ubsApp.fillUp()">{{confirmTitle}}</div>'+
'                </div>'+*/
'            </div>'+
'        </div> </div>'+
'        <div class="columnPurchase">'+
'            <div class="row">'+
'                <div class="col-md-2"></div>'+
'                <div class="col-md-9 purchasePlayerTitle">'+
'                    <span>{{playerTitle}}:</span>'+
'                    <span>{{currentPlayerName}}</span>'+
'                </div>'+
'                <div class="col-md-1"></div>'+
'            </div>'+
'            <div class="purchaseRContainer"><div style="background-color: white;height: 92%;    margin: 3% 3%;overflow: auto;">'+
'                <div class="row">'+
'                    <img src="images/red header.png" class="headerImage">'+
'                </div>'+
'                <div class="row" style="padding: 1%;">'+
'                    <div class="col-md-8">{{newInventoryLevelTitle}}:</div>'+
'                    <div class="col-md-4" style="text-align: right;">'+
//'                        <input type="text" class="borderB1" id="newInventoryLevelText" onChange="ubsApp.updateInventoryLevel(this.value);ubsApp.fillUp()">%'+
'                           <span id="newInventoryLevelText"></span>%'+
'                    </div>'+
'                </div>'+
'                <div class="row" style="padding: 1%;">'+
'                    <div class="col-md-6 col-lg-6">{{inventoryValueTitle}}:</div>'+
'                    <div class="col-md-6 col-lg-6" style="text-align: right;">₹ <span id="updatedInventoryValue"  style="width: 45%;    color: black;" ></span></div>'+
'                </div>'+
'                <div class="row" style="padding: 1%;">'+
'                    <div class="col-md-6 col-lg-6">{{costTitle}}:</div>'+
'                    <div class="col-md-6 col-lg-6" style="text-align: right;">₹ <span  id="newCostText"  style="width: 45%; color: black;" ></span></div>'+
'                </div>'+
'                <div id="parent1" class="row" style="padding: 1%;">'+
'                    <div class="col-md-6 col-lg-6">{{payByTitle}}:</div>'+
'                    <div class="col-md-6 col-lg-6" style="text-align: right;"><select class="borderB1" id="pay1" ><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select><input style="display:none;" type="number" class="enterAmountText" id="amount1" min="0" style="width: 20%;"></div>'+
'                </div>'+
'                <div class="row" style="">'+
'                    <div id="parent2" style="display:none; padding: 1%;">'+
'                        <span style="padding-left: 15px;">{{payByTitle}}:</span><select class="borderB1" id="pay2" style="width: 17%;"><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select>&nbsp;&nbsp;{{amountTitle}}:<input type="number" class="enterAmountText"  id="amount2" style="width: 20%;">'+
'                    </div><br>'+
'                </div>'+
'                <div class="row" style="">'+
'                    <div id="parent3" style="display:none; padding: 1%;">'+
'                        <span style="padding-left: 15px;">{{payByTitle}}:</span><select class="borderB1" id="pay3" style="width: 17%;"><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select>&nbsp;{{amountTitle}}:<input type="number" class="enterAmountText"  id="amount3" style="width: 20%;">'+
'                    </div>'+
'                </div>'+
'                <div class="row" style="display:none;">'+
'                    <div class="purchaseScreenButton" onclick="ubsApp.addPaymentMode()">{{addModeTitle}}</div>'+
'                </div>'+
'            </div></div>'+
'            <div class="row" style="height:20vmax;">'+
'                    <div class="confirmButton mainButtons buyMainButtons" onclick="ubsApp.pay(\'{{startTime}}\',\'{{questionId}}\'); ">{{doneTitle}}</div>'+
'                    <div class="confirmButton mainButtons buyMainButtons" id="target_cancel" onclick="ubsApp.closeCurrentScenario(); {{#if openNextMove }} ubsApp.callServerNextMove(); {{/if}}">{{noThanksTitle}}</div>'+
'                    <div class="helpBtn mainButtons buyMainButtons" onclick="ubsApp.startHelp(\'purchaseHelp\')"></div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</div>';

ubsApp.luckyUnluckyTemplate='<div style="width:100%;height:100%;position:relative;overflow:hidden">'+
'       <img src="images/background.png" style="width:100%;height:100%;">'+
'   {{#if isLuckCategory}}'+
'           <div class="luckScreenTitle" style="color:white">'+
'       {{else}}'+
'            <div class="paymentScreenTitle" style="color:white">'+
'   {{/if}}'+
'            {{scenarioTitle}}'+
'       </div>'+
'           {{#if icon}}<div class="luckIconContainer">'+
'               <img src="images/{{icon}}.png" class="icon" style="">'+
'           </div>{{/if}}'+

'       <div id="luckPlayerNameTitle">'+
'       {{playerTitle}}:<span id="player" style="padding: 1px">{{currentPlayerName}}</span>'+
'       </div>'+

'       <div id="scenarioOutline">' + /* Wrapper div*/

'       <div id="luckHeaderBorderImage">' +
'            <img src="images/red header.png" style="width:100%; height:100%">'+
'       </div>' +

'       <div id="scenario" style="background-color:white; color:black;">'+
'           {{scenario}}<br>'+
'       </div>'+
'       <div id="result"></div>'+
'       <div class="luckYouCanPayContainer">'+
'           <div style="display:inline-block; width:100%;display: flex;flex-direction: row;justify-content: center;">'+

'               {{#if quizRequired}}'+
'                   <div style="display:inline-block; width:33.33%; text-align:center;;float:left">'+
'                {{else}}'+
'                   <div style="width:33.33%; margin:auto; text-align: center;">'+
'               {{/if}}'+
'               {{#if isLuckCategory}}'+
'                  <button class="luckPayButton" onclick="ubsApp.socketPayOrGain(\'{{scenarioName}}\',\'{{questionId}}\')">'+
'                    {{#if negative}}{{payTitle}}{{else}}{{gainTitle}}{{/if}}'+
'                  </button>'+
'                {{else}}'+
'                  <button class="paymentPayButton" onclick="ubsApp.payFromBank(\'{{scenarioName}}\',\'{{questionId}}\')">'+
'                    {{#if negative}}{{payTitle}}{{else}}{{gainTitle}}{{/if}}'+
'                  </button>'+
'               {{/if}}'+
'              </div>'+

'               {{#if quizRequired}}'+
'                  <div style="display:inline-block; width:33.33%; text-align:center;float:left">'+
'                       <button class="takeQuizButton" onclick="ubsApp.socketLuckPaymentQuiz(\'{{scenarioName}}\')">{{takeQuizTitle}}</button>'+
'                  </div>'+
'                   {{#if hasAdvantageCard}}'+
'                       <div style="display:inline-block; width:45%; text-align:right;float:left">'+
'                           <button class="wildCardButton" onclick="ubsApp.useOneAdvantageCard()">{{checkWildCard}}</button>    '+
'                       </div>'+
'                   {{/if}}'+
'               {{/if}}'+
'       </div>'+
'           </div>'+
'       </div>'+
'       <div class="luckHelpIcon">'+
'           <input type="image" style="width:100%;" src="images/help-button.png" onclick="ubsApp.startHelp(\'{{helpPageName}}\')" />'+
'       </div>'+
'       <div class="luckGameIcon">'+
'           <img style="width:100%;"src="{{gameLogo}}">'+
'       </div>'+
'</div>';

ubsApp.payOffTemplate='<div style="width:100%; height:100%; background-color:rgb(105,105,105); ">'+
'                <div class="payOffContainer">'+
'                      <div class="payOffTitle popupHeaderFontSize" align="center">'+
'                           {{title}}'+
'                      </div>'+
'                      <div align="center"><img style="width: 100%;" src="images/red header.png"></div>'+
'                      <div style="    margin-top: 5%;    margin-bottom: 5%;">'+
'                           <center><table style="width:76%;">'+
'                               <tr>'+
'                           <td><span class="payOffSubTitleLeft">'+
'                               {{cashTitle}} '+
'                               <span id="cashValue" >₹ {{cash}}</span>'+
'                           </span></td>'+
'                           <td><span class="payOffSubTitleRight">'+
'                               {{bankBalanceTitle}} '+
'                               <span id="bankBalanceValue">₹ {{bankBalance}}</span>'+
'                           </span></td></tr></table></center>'+
'                      </div>'+
'                      <div style="margin: auto;     width: fit-content;">'+
'                      {{#if #payOff}}'+
'                           <div style="    margin-bottom: 3%;">'+
'                               <span class="payOffSubTitleLeft">{{debtAmountTitle}}:</span>'+
'                                    <span class="payOffDebtAmountValue"> ₹ <span id="debtValue">{{debt}}<span>'+
'                               </span><br>'+
'                           </div>'+
'                      {{else}}{{/if}}'+
'                      <span class="payOffSubTitleLeft">'+
'                           {{#if payOff}}'+
'                               {{amountToPayTitle}} ₹ '+
'                           {{else}}'+
'                               {{amountToTransferTitle}} ₹ '+
'                           {{/if}}'+
'                      </span>'+
'                      <span class="payOffAmountToPayValue">'+
'                           <input type="number" onkeyup="replicatecashText(event)" id="debtPaymentText" class="borderB1">'+
'                      </span>'+
'                      {{#if payOff}}'+
'                           <br><br><span class="payOffSubTitleLeft">'+
'                               {{modeOfPaymentTitle}} ₹ '+
'                           </span>'+
'                      {{/if}}'+
'                      {{#if payOff}}'+
'                           <span class="payOffLeftModeOfPaymentValue">'+
'                               <select class="borderB1" id="payOffDropDown">'+
'                                   <option value="cash">{{cashTitle}}</option>'+
'                                   <option value="cheque">{{chequeTitle}}</option>'+
'                               </select>'+
'                           </span>'+
'                      {{else}}{{/if}}'+
'                      </div> <div class="payOffButtonContainer">'+
'                      <div style="width:35%;" >'+
'                           <button style="color:green;" class="payOffButton" {{#if payOff}}onclick="ubsApp.payDebt(\'{{questionId}}\'); {{#if openNextMove}} ubsApp.callServerNextMove(); {{/if}}"{{/if}} {{#if transfer}}onclick="ubsApp.transferToBank(\'{{questionId}}\'); {{#if openNextMove}} ubsApp.callServerNextMove(); {{/if}}"{{/if}} {{#if withdraw}}onclick="ubsApp.withdrawFromBank(\'{{questionId}}\'); {{#if openNextMove}} ubsApp.callServerNextMove(); {{/if}}"{{/if}}>{{#if payOff}}{{payTitle}}{{/if}} {{#if transfer}}{{transferTitle}}{{/if}} {{#if withdraw}}{{withdrawTitle}}{{/if}}</button>'+
'                      </div>'+
'                      <div style="width:35%;margin-left: 2%;" >'+
'                           <button style="color:red;" class="payOffButton"  onclick="ubsApp.socketCloseCurrentScenario(); {{#if openNextMove}} ubsApp.callServerNextMove(); {{/if}}" >{{cancelTitle}}</button>'+
'                      </div>' +
'</div>'+
'       <div id="result"></div>'+
'                </div>'+
'</div>';


ubsApp.centerScoreBoardTemplate='<div class="centerScoreBoardMainContainer">'+
'   <div style="height: 100%;width:100%;">'+
'   <div class="centerScoreBoardContainer" style="margin:0 auto; ">'+
'                <div class="centerScoreBoardContainerDiv1">'+
'                   {{bankBalanceTitle}}: '+
'                   <span id="bankBalance">{{bankBalanceAmount}}</span>'+
'                   <button class="centerScoreBoardButton" onclick="ubsApp.openWithdrawFromBank()">{{withdrawTitle}}</button>'+
'               </div>'+
'                <div class="centerScoreBoardContainerDiv2">'+
'                   {{cashTitle}}: '+
'                   <span id="cash">{{cashAmount}}</span>'+
'                   <button class="centerScoreBoardButton" onclick="ubsApp.openTransferToBank()">{{transferTitle}}</button>'+
'                </div>'+
'                <div class="centerScoreBoardContainerDiv3">'+
'                   {{debtTitle}}:'+
'                   <span id="debt">{{debtAmount}}</span>'+
'                   <button class="centerScoreBoardButton" onclick="ubsApp.openPayOffScenario()">'+
'                       {{payOffTitle}}'+
'                   </button>'+
'               </div>'+
'   </div>'+
'   <div id="currentChanceDetails">'+
'       <span id"playernametitle">{{playerNameLabel}}:<span id="player" style="padding: 1vw">masbd</span></span>&nbsp;'+
'       <span id="diceValueTitle">{{diceValueLabel}}:<span id="diceval" style="padding: 1vw"></span></span>'+
'   </div>'+
'  </div>'+
'</div>';

//ubsApp.insuranceTemplate = '<div id="decisonInsurance">'+
//'   <div id="insuranceHeaderTitle">'+
//'       <span id="insuranceEmoji"></span>    '+
//'       <span id="insuranceHeading">{{Insurance}}</span>'+
//'   </div>'+
//''+
//'   <div id="insuranceSelection">'+
//'           <div id="insuranceTypesTitle">{{insuranceType}}</div>'+
//'           <div id="typesOfInsurance">'+
//'           <fieldset id="insuranceTypesSelection">'+
//'               <label for="insurance1" class="col-md-3"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium1}}" id="insurance1" name="insuranceTypes">{{insurance1}}</label>'+
//'               <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue1}} id="suminsurance1">'+
//'               <label for="insurance2" class="col-md-3"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium2}}" id="insurance2" name="insuranceTypes">{{insurance2}}</label>'+
//'               <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue2}} id="suminsurance2">'+
//'               <label for="insurance3" class="col-md-4"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium3}}" id="insurance3" name="insuranceTypes">{{insurance3}}</label>'+
//'               <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue3}} id="suminsurance3">'+
//
//'           </fieldset>'+
//'       </div>'+
//'       <div id="insurancePayment" class="row">'+
//'           <label for="annualPremium" class="insuranceValue">{{premium}}</label>'+
//'           <input type="number" id="annualPremium" name="premium" value="0" readonly >'+
//'           <label for="annualPremium" class="insuranceValue">{{sumAssured}}</label>'+
//'           <input type="number" id="sumAssured" name="sum"  value="0" readonly >'+
//'       </div>'+
//'       <div id="modeOfPayment">'+
//'           <span id="modeOfPaymentTitle">{{mode}}</span>'+
//'           <select id="modeOfPaymentOptions">'+
//'             <option value="cash"><span id="cashInsurance">{{cashTitleName}}</span></option>'+
//'             <option value="cheque"><span id="chequeInsurance">{{chequeTitleName}}</span></option>'+
//'           </select>'+
//'       </div>'+
//'           <div id="buy_cancel">'+
//'           <span id="decisionBuy"><button  class=\'insuranceButtons\' onclick="ubsApp.buyInsurance(\'{{page}}\')">{{buy}}</button></span>'+
//'           <span id="decisionCancel"><button  class=\'insuranceButtons\' onclick="ubsApp.nextMove()">{{cancel}}</button></span>'+
//'           </div>'+
//'       </div>'+
//'       '+
//'       <div class="row" id="leftInfo">'+
//'           <div class="col-md-6">'+
//'               {{bankBalanceTitle}}  <br>'+
//'               {{cashTitle}}          <br>'+
//'               {{debtTitle}}          <br>'+
//'           </div>'+
//'           <div class="col-md-1">'+
//'               : <br>'+
//'               : <br>'+
//'               : <br>'+
//'           </div>'+
//'           <div class="col-md-5">'+
//'               <span>₹ {{balance}}</span><br>'+
//'               <span>₹ {{cash}}</span><br>'+
//'               <span>₹ {{debt}}</span><br>'+
//'           </div>'+
//'       </div>'+
//'       <div class="row" id="rightInfo">'+
//'           <div class="col-md-7" >'+
//'               {{inventoryTitle}}         <br>'+
//'               {{invVal}}   <br>'+
//'               {{repPoints}} <br>'+
//'           </div>'+
//'           <div class="col-md-1">'+
//'               : <br>'+
//'               : <br>'+
//'               : <br>'+
//'           </div>'+
//'           <div class="col-md-4">'+
//'               <span id="decisionMakingInv">{{inventory}}%</span><br>'+
//'               <span id="decisionMakingInvValue">{{inventoryValue}}</span><br>'+
//'               <span id="decisionMakingReputation">{{reputationPts}}</span><br>'+
//'           </div>'+
//'       </div>'+
//'</div>';

// ubsApp.insuranceTemplate = '<div id="decisonMaking">'+
// '    <div id="decisionTitle">'+
// '        <span id="decisionEmoji"></span>'+
// '        <span id="decisionHeading">{{Decision}}</span>'+
// '        <span id="playerName">PLAYER: {{currentPlayerName}}</span>'+
// '    </div>'+
// '    <div id="question_answer_decision">'+
// '        <div id="insuranceTypesTitle">{{insuranceType}}</div>'+
// '        <img src="images/red header.png" style="width:100%; height:100%">'+
// '        <div id="insuranceSelection">'+
// '            <div id="typesOfInsurance">'+
// '                <fieldset id="insuranceTypesSelection" style="font-size: 1.5vmax;">'+
// '                    <label for="insurance1" class="col-md-3"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium1}}" id="insurance1" name="insuranceTypes">{{insurance1}}</label>'+
// '                    <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue1}} id="suminsurance1">'+
// '                    <label for="insurance2" class="col-md-3"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium2}}" id="insurance2" name="insuranceTypes">{{insurance2}}</label>'+
// '                    <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue2}} id="suminsurance2">'+
// '                    <label for="insurance3" class="col-md-4"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium3}}" id="insurance3" name="insuranceTypes">{{insurance3}}</label>'+
// '                    <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue3}} id="suminsurance3">'+
// '                </fieldset>'+
// '            </div>'+
// '            <div id="insurancePayment" class="row">'+
// '                <label for="annualPremium" class="insuranceValue">{{premium}}(₹)</label>'+
// '                <input type="number" id="annualPremium" name="premium" value="0" readonly >'+
// '            </div>'+
// '            <div>'+
// '                <label for="annualPremium" class="insuranceValue">{{sumAssured}}(₹)</label>'+
// '                <input type="number" id="sumAssured" name="sum"  value="0" readonly >'+
// '            </div>'+
// '            <br>'+
// '            <div id="modeOfPayment">'+
// '                <span id="modeOfPaymentTitle">{{mode}}</span>'+
// '                <select id="modeOfPaymentOptions">'+
// '                    <option value="cash"><span id="cashInsurance">{{cashTitleName}}</span></option>'+
// '                    <option value="cheque"><span id="chequeInsurance">{{chequeTitleName}}</span></option>'+
// '                    <option value="credit"><span id="creditInsurance">{{creditTitleName}}</span></option>'+
// '                </select>'+
// '            </div>'+
// '            <br>'+
// '            <div id="buy_cancel" style="align:center;">'+
// '                <span id="decisionBuy" class="insuranceButtons" style="color:green; margin-right: 2%;" onclick="ubsApp.buyInsurance(\'{{page}}\')">{{buy}}</span>'+
// '                <span id="decisionCancel" class="insuranceButtons" style="color:red;" onclick="ubsApp.nextMove()">{{cancel}}</span>'+
// '            </div>'+
// '        </div>'+
// '    </div>'+
// '    <div class="row" id="leftInfo">'+
// '        <div class="col-md-12">'+
// '            <div class="row insuranceText">'+
// '                <div class="col-sm-6" style="text-align:left;">{{bankBalanceTitle}}</div>'+
// '                <div class="col-sm-6" style="text-align:right;">{{balance}}</div>'+
// '            </div>'+
// '            <br>'+
// '            <div class="row insuranceText">'+
// '                <div class="col-sm-6" style="text-align:left;">{{cashTitle}}</div>'+
// '                <div class="col-sm-6" style="text-align:right;">{{cash}}</div>'+
// '            </div>'+
// '            <br>'+
// '            <div class="row insuranceText">'+
// '                <div class="col-sm-6" style="text-align:left;">{{debtTitle}}</div>'+
// '                <div class="col-sm-6" style="text-align:right;">{{debt}}</div>'+
// '            </div>'+
// '        </div>'+
// '    </div>'+
// '    <div class="row" id="rightInfo">'+
// '        <div class="col-md-12">'+
// '            <div class="row insuranceText">'+ 
// '                <div class="col-sm-6" style="text-align:left;">{{inventoryTitle}}</div>'+
// '                <div id="decisionMakingInv" class="col-sm-6" style="text-align:right;">{{inventory}}%</div>'+
// '            </div>'+
// '            <br>'+
// '            <div class="row insuranceText">'+
// '                <div class="col-sm-6" style="text-align:left;">{{invVal}}</div>'+
// '                <div id="decisionMakingInvValue" class="col-sm-6" style="text-align:right;">{{inventoryValue}}</div>'+
// '            </div>'+
// '            <br>'+
// '            <div class="row insuranceText">'+
// '                <div class="col-sm-6" style="text-align:left;">{{repPoints}}</div>'+
// '                <div id="decisionMakingReputation" class="col-sm-6" style="text-align:right;">{{reputationPts}}</div>'+
// '            </div>'+
// '            <br>'+
// '            <div id="quizHelp" class="helpBtnInsurance" onclick="ubsApp.startHelp(\'{{helpPageName}}\)"> </div>'+
// '        </div>'+
// '    </div>'+
// '</div>';

ubsApp.insuranceTemplate = '<div id="decisonMaking">'+
'   <div id="decisionTitle">'+
'       <span id="decisionEmoji"></span>    '+
'       <span id="decisionHeading">{{Decision}}</span>'+
'       <span id="playerName">PLAYER: {{currentPlayerName}}</span>'+
'   </div>'+
''+
'<div id="question_answer_decision_border">'+
'   <div id="question_answer_decision">'+
'        <div id="insuranceTypesTitle">{{insuranceType}}</div>'+
'        <img src="images/red header.png" style="width:100%; height:100%">'+
'        <div id="insuranceSelection">'+
'            <div id="typesOfInsurance">'+
'                <fieldset id="insuranceTypesSelection" style="font-size: 1.5vmax;">'+
'                    <label for="insurance1" class="col-md-3"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium1}}" id="insurance1" name="insuranceTypes">{{insurance1}}</label>'+
'                    <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue1}} id="suminsurance1">'+
'                    <label for="insurance2" class="col-md-3"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium2}}" id="insurance2" name="insuranceTypes">{{insurance2}}</label>'+
'                    <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue2}} id="suminsurance2">'+
'                    <label for="insurance3" class="col-md-4"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium3}}" id="insurance3" name="insuranceTypes">{{insurance3}}</label>'+
'                    <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue3}} id="suminsurance3">'+
'                </fieldset>'+
'            </div> <div style="display: inline-block;">'+
'            <div id="insurancePayment" style="width: 45%;float: left;" class="row">'+
'                <label for="annualPremium" class="insuranceValue">{{premium}}(₹)</label>'+
'                <input style="width: 30%;" type="number" id="annualPremium" name="premium" value="0" readonly >'+
'            </div>'+
'            <div style="width: 45%;float: right;margin-top: 2%;">'+
'                <label for="annualPremium" class="insuranceValue">{{sumAssured}}(₹)</label>'+
'                <input style="width: 30%;" type="number" id="sumAssured" name="sum"  value="0" readonly >'+
'            </div> </div>'+
'            <br>'+
'            <div id="modeOfPayment">'+
'                <span id="modeOfPaymentTitle">{{mode}}</span>'+
'                <select id="modeOfPaymentOptions">'+
'                    <option value="cash"><span id="cashInsurance">{{cashTitleName}}</span></option>'+
'                    <option value="cheque"><span id="chequeInsurance">{{chequeTitleName}}</span></option>'+
'                    <option value="credit"><span id="creditInsurance">{{creditTitleName}}</span></option>'+
'                </select>'+
'            </div>'+
'            <br>'+
'            <div id="buy_cancel" style="align:center;">'+
'                <span id="decisionBuy" class="insuranceButtons" style="color:green; margin-right: 2%;" onclick="ubsApp.buyInsurance(\'{{page}}\')">{{buy}}</span>'+
'                <span id="decisionCancel" class="insuranceButtons" style="color:red;" onclick="ubsApp.callServerNextMove()">{{cancel}}</span>'+
'            </div>'+
'        </div>'+
'</div>'+
'</div>'+
'<img src="{{gameLogo}}" class="decisionGameLogoImage">' +
'       <div class="row" id="leftInfo">'+
'           <div class="col-md-10">'+
'               <span id="decisionBankBalance" style="word-spacing: 1.5vmax;display:block">{{bankBalanceTitle}} ₹{{balance}}</span> <br>'+
'               <span id="decisionBankBalance" style="word-spacing: 10vmax;display:block">{{cashTitle}} ₹{{cash}}</span>      <br>'+
'               <span id="decisionBankBalance" style="word-spacing: 10vmax;display:block"">{{debtTitle}} ₹{{debt}}</span>       <br>'+
'           </div>'+
'       </div>'+
'       <div class="row" id="rightInfo" style="position: relative;">'+
'           <div class="col-md-6" >'+
'               <span id="decisionBankBalance" style="word-spacing: 7.5vmax;display:block">{{inventoryTitle}} {{inventory}}%</span> <br>'+
'               <span id="decisionBankBalance" style="word-spacing: 2.5vmax;display:block">{{invVal}} ₹{{inventoryValue}}</span>      <br>'+
'               <span id="decisionBankBalance" style="word-spacing: 2.5vmax;display:block">{{repPoints}} {{reputationPts}}</span>       <br>'+
'           </div>'+
'       <div class="decisionHelpButtons" onclick="ubsApp.startHelp(\'decisionHelp\')" style="position: absolute;right: 10%;bottom: 20%;"></div>'+
'       </div>'+
'</div>';

ubsApp.decisionTemplate = '<div id="decisonMaking">'+
'   <div id="decisionTitle">'+
'       <span id="decisionEmoji"></span>    '+
'       <span id="decisionHeading">{{Decision}}</span>'+
'       <span id="decisionplayerName">PLAYER: {{currentPlayerName}}</span>'+
'   </div>'+
''+
'<div id="question_answer_decision_border">'+
'   <div id="question_answer_decision">'+
'       <img src="images/red header.png" style="width:100%; height:100%">'+
'       <div id="Decision Description">'+
'           {{question}}'+
'       </div>'+
'       {{#if inline}}'+
'       <div id="yes_no">'+
'       {{#each options}}'+
'           <span id="option{{id}}"><button class=\'decisionButtons\' onclick="ubsApp.decisionOptions(\'{{credit.reputationPoints}}\', \'{{credit.bankBalance}}\',\'{{startTime}}\',\'{{questionId}}\', {{#if insurance}}\'{{insurance}}\', \'{{page}}\', {{/if}} {{#if pamphlet}}\'false\', \'undefined\', \'{{pamphlet}}\',{{/if}} {{#if randomProfit}}\'false\', \'undefined\', \'false\',\'{{randomProfit}}\',{{/if}} )">{{optionValue}}</button></span>'+
'       {{/each}}'+
'       </div>'+
'       {{else}}'+
'       {{#each options}}'+
'           <span id="option{{id}}"><button  class=\'inlineDecisionButtons\' onclick="ubsApp.decisionOptions(\'{{credit.reputationPoints}}\', \'{{credit.bankBalance}}\', \'{{startTime}}\',\'{{questionId}}\')">{{optionValue}}</button></span>'+
'       {{/each}}'+
'       {{/if}}'+
'   </div>'+
'</div>'+
'       '+
'<img src="{{gameLogo}}" class="decisionGameLogoImage">' +
'       <div class="row" id="leftInfo">'+
'           <div class="col-md-12" style="width:80%;">'+
'               <span id="decisionBankBalance" style="word-spacing: 0.2vmax;display:block">{{bankBalanceTitle}} ₹{{balance}}</span> <br>'+
'               <span id="decisionBankBalance" style="word-spacing: 8vmax;display:block">{{cashTitle}} ₹{{cash}}</span>      <br>'+
'               <span id="decisionBankBalance" style="word-spacing: 8vmax;display:block"">{{debtTitle}} ₹{{debt}}</span>       <br>'+
'           </div>'+
'       </div>'+
'       <div class="row" id="rightInfo" style="position: relative;">'+
'           <div class="col-md-12" style="width:45%;">'+
'               <span id="decisionBankBalance" style="word-spacing: 7.5vmax;display:block">{{inventoryTitle}} {{inventory}}%</span> <br>'+
'               <span id="decisionBankBalance" style="word-spacing: 2.5vmax;display:block">{{invVal}} ₹{{inventoryValue}}</span>      <br>'+
'               <span id="decisionBankBalance" style="word-spacing: 2.5vmax;display:block">{{repPoints}} {{reputationPts}}</span>       <br>'+
'           </div>'+
'       <div class="decisionHelpButtons" onclick="ubsApp.startHelp(\'decisionHelp\')" style="position: absolute;right: 10%;bottom: 20%;"></div>'+
'       </div>'+
'</div>';

//ubsApp.advantageCardTemplate='<div style="width:100%;height:100%;  background-color:rgb(105,105,105);">'+
//'       <div class="screenTitle" style="background-color:{{background}}; color:{{color}}">'+
//'            {{advantageCardTitle}}'+
//'       </div>'+
//'       <div id="advantageCardScenario" class="borderB1" style="background-color:{{background}}; color:{{color}};">'+
//'           {{reputationPointAvailableTitle}}:<span id="currentReputationPoint">{{currentReputationPoint}}</span>&nbsp ({{conversionTitle}})<br>'+
//'           {{numberToConvertTitle}}: <input type="number" style="width:15%;" class="borderB1" id="convertText"></input> &nbsp <button id="checkButton" onclick="ubsApp.checkDetails()">{{checkTitle}}</button><br><br>'+
//'            {{numberOfAdvantageCardTitle}}: <span id="convertedNumber"></span><br>'+
//'            {{reputationPointBalance}}: <span id="remainingBalance"></span>'+
//'       </div>'+
//'       <div class="advantageCardButtonContainer">'+
//'           <button onclick="ubsApp.covertReputationToWildCard()" class="advantageCardButton">{{convertTitle}}</button>'+
//'           <button onclick="ubsApp.closeCurrentScenario()" class="advantageCardButton" >{{cancelTitle}}</button>'+
//'       </div>'+
//'       <div id="result"></div>'+
//'</div>';

ubsApp.advantageCardTemplate='<div style="{{style}}">'+
                           '    <div style="background-color: white;margin-left:1%;margin-right:1%;position: relative; overflow: auto; max-height: 50vh; ">'+
                           ''+
                           '        <div>'+
                           ''+
                           '            <div style="text-align: center;margin-top:1%" class="popupHeaderFontSize" >{{convertReputationPointsTitle}}</div>'+
                           ''+
                           '        </div>'+
                           ''+
                           '        <div style="padding-bottom:10px;"> <img src="images/red header.png" style="width:100%;">  </div>'+
                           '        '+
                           '        <div style="display: inline-block;width: 100%;font-weight:bold;">'+
                           '            <div style="float: left;width: 50%;     margin-left: 10%;">'+
                           '                <div style="display: inline-block;width: 100%;">'+
                           '                        <div style="float: left;">{{ReputationPoints}}</div>'+
                           '                        <div style="float: right;">{{currentWeekReputationPts}}</div>'+
                           '                </div>'+
                           '                <div style="display: inline-block;width: 100%;">'+
                           '                        <div style="float: left;">{{AdvantageCard}}</div>'+
                           '                        <div style="float: right;">{{currentWeekAdvantageCard}}</div>'+
                           '                </div>'+
                          '                <div style="display: inline-block;width: 100%;">'+
                          '                        <div style="float: left; width: 60%;">{{convertReputationMessage}}</div>'+
                          '                        <div style="float: right;"><input type="number" style="width: 50px;" id="convertText"></input></div>'+
                          '                </div>'+
                           ''+
                           '            </div>'+
                           '        </div>'+
                           ''+
                           ''+
                           '        <div style="display:inline-block;width:100%;">'+
                           '                 <div style="float: left;margin-left: 35%;margin-right: 11px;cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;    padding: 1%; padding-bottom: 2%; color: green;font-weight:bold; width: 16%;text-align: center;" onclick="ubsApp.covertReputationToWildCard()" >{{OK}}</div>'+
                           '                 <div style="cursor:pointer; float: left; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;  padding: 1%; padding-bottom: 2%; color: red;font-weight: bold; width: 15.5%;text-align: center; padding-right: 16%; padding-left: 2%;" onclick="ubsApp.closeCurrentScenario()" >{{CANCEL}}</div>'+
                           '                 <div style="cursor: pointer;     float: right;padding: 3%;width: 13%;    background-size: 100% 100%;background-image: url(images/help-button.png);"  onclick="ubsApp.startHelp(\'salesHelp\')" ></div>'+

                           '        </div>'+
                           '</div>'+
                           '</div>';



ubsApp.popUpTemplate = '<div style="{{style}};{{#if showBorder}}background-image: url(images/redbgcommon.png);{{/if}}" >'+
                       '    <div style="background-color: {{backgroundColor}};position: relative; min-height:10vh;max-height: 70vh;overflow: auto;   ">'+
                       ''+
                       '        <div>'+
                       ''+
                       '            <div style="{{headerStyle}}" class="popupHeaderFontSize">{{header}}</div>'+
                       ''+
                       '        </div>'+
                       ''+
                       '        <div>'+
                       ''+
                       '            <div style="{{messageStyle}}">{{message}}<br></div>'+
                       '            {{#if showImage}}'+
                       '            <div style="text-align: center; height: 23vh;"> <img style="height: 100%;{{imageStyle}}" src="{{imageUrl}}"></img></div>'+
                       '            {{/if}}'+
                       '        </div>'+
                       '        <div style="text-align: center;margin-top: 10px;">'+
                       '            <div style="width: fit-content;width: -moz-max-content;margin: auto;margin-top: 2%;">'+
                       '                {{#each buttons}}'+

                       '                <div id= "{{id}}" style="cursor:pointer;    float: left;margin-right: 10px;background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content; padding: 15px; padding-bottom: 15%; color: red; font-weight:bold" onclick="{{action}}" >{{name}}'+

                       '                </div>'+
                       '                {{/each}}'+
                       '            </div>'+
                       ''+
                       '        </div>'+
                       ''+
                       '    </div>'+
                       '    </div>'+
                       '</div>';


ubsApp.weekSummaryTemplate =  '<div style="{{style}}">'+
                              '    <div style="background-color: white; padding:2px;margin-left:1%;margin-right:1%;position: relative; overflow: auto; min-height:35vh;max-height: 60vh; ">'+
                              ''+
                              '        <div>'+
                              ''+
                              '            <div style="{{headerStyle}}" class="popupHeaderFontSize" >{{header}}</div>'+
                              ''+
                              '        </div>'+
                              ''+
                              '        <div style="padding-bottom:10px;"> <img src="images/red header.png" style="width:100%;">  </div>'+
                              '        '+
                              '        <div style="margin-bottom: 10px;width: fit-content;background-color: #c53f3f;color: white;padding: 3px;font-weight: bold;margin-left: 2%;">{{WeekTitle}} {{weekNumber}}</div>'+
                              '        <div style="display: inline-block;width: 96%;font-weight: bold; margin-left: 2%; margin-right: 2%;">'+
                              '            <div style="float: left;width: 100%;">'+
                              '                <div style="display: inline-block;width: 100%;">'+
                              '                        <div style="float: left;">{{ReputationPoints}}</div>'+
                              '                        <div style="float: right;">{{currentWeekReputationPts}}</div>'+
                              '                </div>'+
                              '                <div style="display: inline-block;width: 100%;">'+
                              '                        <div style="float: left;">{{Cash}}</div>'+
                              '                        <div style="float: right;">{{currentWeekCash}}</div>'+
                              '                </div>'+
                              ''+
                              '                <div style="display: inline-block;width: 100%;">'+
                              '                        <div style="float: left;">{{BankBalance}}</div>'+
                              '                        <div style="float: right;">{{currentWeekBankBalance}}</div>'+
                              '                </div>'+
                              '                <div style="display: inline-block;width: 100%;">'+
                              '                        <div style="float: left;">{{INVENTORYVALUE}}</div>'+
                              '                        <div style="float: right;">{{currentInventoryValue}}</div>'+
                              '                </div>'+
                              ''+
                              '            </div>'+
                              '        </div>'+
                              ''+
                              ''+
                              '        <div style="display:inline-block;margin-top: 10px;width:58%;">'+
                              '            <div style="float:left;margin-left: 2%;background-color: #a6a6e4;padding: 3px;font-weight: bold;max-width: 70%;width:fit-content">{{playerNameTitle}}: {{userName}}</div>'+
                              '            <div style="float:right;"> '+
                              '                 <div style="cursor:pointer; background-image: url(images/buttonMedium.png);background-size: 100% 100%;width: fit-content;margin: auto;    padding: 7px; color: red;font-weight: bold;" onclick="ubsApp.closeCurrentScenario(); ubsApp.callServerNextMove();" >{{Close}}</div>'+
                              '            </div>'+
                              '        </div>'+
                              '</div>'+
                              '</div>';
