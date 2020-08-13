var rollingDiceConfig = {};
rollingDiceConfig.currentRandomDiceOne=5; //intial value of the dice


function pointRoll() {
  var elDiceOne       = document.getElementById('dice1');
  var diceValueOne   = 6;//Math.floor((Math.random() * 6) + 1);
  var audioElement = document.getElementById('rollIt');
  ubsApp.raiseAudioEvent(audioElement, 'rollingDice');
  
  hitScoreAPI();
  
  
  while(diceValueOne==rollingDiceConfig.currentRandomDiceOne){
    diceValueOne   = Math.floor((Math.random() * 6) + 1);
  }


  rollingDiceConfig.currentRandomDiceOne=diceValueOne;
  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceValueOne === i) {
      elDiceOne.classList.add('show-' + i);
    }

  }
  return diceValueOne;
}

function hitScoreAPI(){
  console.log("Ajax call to the API");
  var dataObject=getDataObject();
  var data=JSON.parse(JSON.stringify(dataObject));  
  console.log(data);
  $.ajax({
    type: 'post',
    url: 'http://www.rpi.prathamskills.org/api/pushdatapradigi/post',
    data: data,
    dataType: 'jsonp',
    //username: "_",
    //password: "_",
    traditional: true,
    success: function (data) {
        console.log("Successfully received the data from the server");
        console.log(data);
    }
  });
}
//Generate Data Object based on the attributes to send to API
function getDataObject(){
  var tempObject={name:"John", age:"30", city:"New York"};
  return tempObject;
}

