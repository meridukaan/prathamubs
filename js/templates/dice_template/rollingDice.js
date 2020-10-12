var rollingDiceConfig = {};
rollingDiceConfig.currentRandomDiceOne=5; //intial value of the dice


function pointRoll(diceValue) 
{
    var rollingDiceValue = diceValue;
    if(!rollingDiceValue)
    {
      rollingDiceValue   = Math.floor((Math.random() * 6) + 1);
      while(rollingDiceValue==rollingDiceConfig.currentRandomDiceOne)
      {
          rollingDiceValue   = Math.floor((Math.random() * 6) + 1);
      }
    }
    
    socket.emit('rollDiceEvent', {description: "RollDiceEvent", diceValue : rollingDiceValue, roomCode : ubsApp.studentArray[0].room});
      return rollingDiceValue;
}
  
socket.on('replicateRollDice', function(data)
{
  var diceValue = data.diceValue;
  var elDiceOne = document.getElementById('dice1');
  var audioElement = document.getElementById('rollIt');
  ubsApp.raiseAudioEvent(audioElement, 'rollingDice');

  rollingDiceConfig.currentRandomDiceOne=diceValue;
  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceValue === i) {
      elDiceOne.classList.add('show-' + i);
    }

  }
  return diceValue;
})

