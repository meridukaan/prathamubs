
function addToDisplay(clickedButtonVal){
	socket.emit("serverAddToDisplay",{
		clickedButtonVal:clickedButtonVal,
		roomCode: ubsApp.studentArray[playerChance].room,
		description: "Calls server for adding value to calculator"
	});
	switch(clickedButtonVal){
		case 'C':
			document.getElementById('numberInput').value = '';
			break;
		case 'DEL':
			var value = document.getElementById('numberInput').value;
    		document.getElementById('numberInput').value = value.substr(0, value.length - 1);
			break;
		case '=':
			var expression = document.getElementById('numberInput').value;
			document.getElementById('numberInput').value = String(eval(expression));
			break;
		default:
			document.getElementById('numberInput').value += clickedButtonVal;
	}
	
}
socket.on("clientAddToDisplay",function(data){

	clickedButtonVal=data.clickedButtonVal;
	switch(clickedButtonVal){
		case 'C':
			document.getElementById('numberInput').value = '';
			break;
		case 'DEL':
			var value = document.getElementById('numberInput').value;
    		document.getElementById('numberInput').value = value.substr(0, value.length - 1);
			break;
		case '=':
			var expression = document.getElementById('numberInput').value;
			document.getElementById('numberInput').value = String(eval(expression));
			break;
		default:
			document.getElementById('numberInput').value += clickedButtonVal;
	}	

})