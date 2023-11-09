var turn = true;   // true is X's turn -- false for O's
var x_win = false; // if x wins = true
var o_win = false; // if o wins = true
var btnID = "";    // stores a buttons ID from the mouseover attribute in html

// stores the ammount of times someone won
// and the ammount of ties
var x_win_count = 0; 
var o_win_count = 0;
var tie_count = 0;



// onclick function to call in html
function onClick_FUNC() {
	
	// check if already won
	if (x_win === true || o_win === true) 
		{return;}
	
	// check if box has a character in it
	let innerLength = document.getElementById(btnID).innerHTML.length;
	if (innerLength !== 0) 
		{return;}
	
	// display character in box based on turn 
	// change title to reflect turn
	if (turn === true) {
		display_X_FUNC();
		turn = false;
		
		document.getElementById('toPlay').innerHTML = "O to play"; 
	} else if (turn === false) {
		display_O_FUNC();
		turn = true;
		
		document.getElementById('toPlay').innerHTML = "X to play"; 
	} else {console.log("input invalid :::: edgecase catch");}
	
	// call check for win condition
	win_check_FUNC();
	
	// change counter
	if (x_win === true) {
		x_win_count = x_win_count + 1;
		document.getElementById('x-win-count').innerHTML = x_win_count;
	}
	else if (o_win === true) {
		o_win_count = o_win_count + 1;
		document.getElementById('o-win-count').innerHTML = o_win_count;
	}
	
} // end onClick_FUNC()



			/*
			  ===============================
			  =SUPPLEMENTARY FUNCTIONS START=
			  ===============================
			*/
			
// display functions to display a letter in clicked box
function display_O_FUNC() {document.getElementById(btnID).innerHTML = "O";}
function display_X_FUNC() {document.getElementById(btnID).innerHTML = "X";}

// call to display who wins
function display_O_win_FUNC() {document.querySelector('#toPlay').innerHTML = "O wins";}
function display_X_win_FUNC() {document.querySelector('#toPlay').innerHTML = "X wins";}

function clear_FUNC() {
	
	console.clear();
	
	// put all elements with the class 'button' in an array
	// and clear styles applied to them
	var boxes = document.getElementsByClassName('box');
	[].slice.call(boxes).forEach(function (boxes) {
		boxes.innerHTML = "";
		boxes.style.cssText = `
			background-color: null; 
			color: null;`;
	})
	
	// reset turn and win conditions
	turn = true;
	x_win = false;
	o_win = false;
	document.getElementById('toPlay').innerHTML = "X to play";
} // end clear_FUNC()




function win_check_FUNC() {
	// get values of all 1-length buttons
	let win_AA="", win_AB="", win_AC="",
		win_BA="", win_BB="", win_BC="",
		win_CA="", win_CB="", win_CC="";
		
	win_AA = document.getElementById('AA').innerHTML;
	win_AB = document.getElementById('AB').innerHTML;
	win_AC = document.getElementById('AC').innerHTML;
	
	win_BA = document.getElementById('BA').innerHTML;
	win_BB = document.getElementById('BB').innerHTML;
	win_BC = document.getElementById('BC').innerHTML;
	
	win_CA = document.getElementById('CA').innerHTML;
	win_CB = document.getElementById('CB').innerHTML;
	win_CC = document.getElementById('CC').innerHTML;
	
	// check if win condition is already met
	if (x_win === true || o_win === true) 
		{console.log('win condition already met'); 
		return;}
	
	// check for row win case
	if (win_AA!=="" && win_AB!=="" && win_AC!=="") {
		console.log("AA-row win condition attempt");
		
		if (win_AA==win_AB && win_AB==win_AC) {
			switch (win_AA) {
				case "X": 
					console.log("X wins");
					display_X_win_FUNC();
					x_win = true;
					break;
					
				case "O":
					console.log("O wins");
					display_O_win_FUNC();
					o_win = true;
					break;
			}
			document.getElementById('AA').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('AB').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('AC').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			
			return;
		}
	} // end AA-row win case
	
	
	if (win_BA!=="" && win_BB!=="" && win_BC!=="") {
		console.log("BA-row win condition attempt");
		
		if (win_BA==win_BB && win_BB==win_BC) {
			switch (win_BA) {
				case "X": 
					console.log("X wins");
					display_X_win_FUNC();
					x_win = true;
					break;
					
				case "O":
					console.log("O wins");
					display_O_win_FUNC();
					o_win = true;
					break;
			}
			document.getElementById('BA').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('BB').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('BC').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			
			return;
		}
	} // end BA-row win case
	
	if (win_CA!=="" && win_CB!=="" && win_CC!=="") {
		console.log("CA-row win condition attempt");
		
		if (win_CA==win_CB && win_CB==win_CC) {
			switch (win_CA) {
				case "X": 
					console.log("X wins");
					display_X_win_FUNC();
					x_win = true;
					break;
					
				case "O":
					console.log("O wins");
					display_O_win_FUNC();
					o_win = true;
					break;
			}
			document.getElementById('CA').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('CB').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('CC').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			
			return;
		}
	} // end CA-row win case
	// end row win case check
	
	// column win case check 
	if (win_AA!=="" && win_BA!=="" && win_CA!=="") {
		console.log("AA-column win condition attempt");
		
		if (win_AA==win_BA && win_BA==win_CA) {
			switch (win_AA) {
				case "X": 
					console.log("X wins");
					display_X_win_FUNC();
					x_win = true;
					break;
					
				case "O":
					console.log("O wins");
					display_O_win_FUNC();
					o_win = true;
					break;
			}
			document.getElementById('AA').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('BA').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('CA').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			
			return;
		}
	} // end AA-col win case
	
	if (win_AB!=="" && win_BB!=="" && win_CB!=="") {
		console.log("AB-column win condition attempt");
		
		if (win_AB==win_BB && win_BB==win_CB) {
			switch (win_AB) {
				case "X": 
					console.log("X wins");
					display_X_win_FUNC();
					x_win = true;
					break;
					
				case "O":
					console.log("O wins");
					display_O_win_FUNC();
					o_win = true;
					break;
			}
			document.getElementById('AB').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('BB').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('CB').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			
			return;
		}
	} // end AB-col win case
	
	if (win_AC!=="" && win_BC!=="" && win_CC!=="") {
		console.log("AC-column win condition attempt");
		
		if (win_AC==win_BC && win_BC==win_CC) {
			switch (win_AC) {
				case "X": 
					console.log("X wins");
					display_X_win_FUNC();
					x_win = true;
					break;
					
				case "O":
					console.log("O wins");
					display_O_win_FUNC();
					o_win = true;
					break;
			}
			document.getElementById('AC').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('BC').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('CC').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			
			return;
		}
	} // end AC-col win case
	// end column win case check
	
	// diagonal win-case check
	// L-R check
	if (win_AA!=="" && win_BB!=="" && win_CC!=="") {
		console.log("L-R Diag win condition attempt");
		
		if (win_AA==win_BB && win_BB==win_CC) {
			switch (win_AA) {
				case "X": 
					console.log("X wins");
					display_X_win_FUNC();
					x_win = true;
					break;
					
				case "O":
					console.log("O wins");
					display_O_win_FUNC();
					o_win = true;
					break;
			}
			document.getElementById('AA').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('BB').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('CC').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			
			return;
		}
	} // end L-R diagonal win case
	// R-L check
	if (win_AC!=="" && win_BB!=="" && win_CA!=="") {
		console.log("R-L diag win condition attempt");
		
		if (win_AC==win_BB && win_BB==win_CA) {
			switch (win_AC) {
				case "X": 
					console.log("X wins");
					display_X_win_FUNC();
					x_win = true;
					break;
					
				case "O":
					console.log("O wins");
					display_O_win_FUNC();
					o_win = true;
					break;
			}
			document.getElementById('AC').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('BB').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			document.getElementById('CA').style.cssText = `
				background-color: lightgrey; 
				color: grey;`;
			
			return;
		}
	} // end L-R diagonal win case
	
	// tie case
	if (win_AA!=="" && win_AB!=="" && win_AC!=="" && 
		win_BA!=="" && win_BB!=="" && win_BC!=="" &&
		win_CA!=="" && win_CB!=="" && win_CC!=="") {
			if (x_win === false && o_win === false) {
				console.log("tie"); 
				
				// displays 'tie' in the title
				// incriment the tie count by one and display it
				document.getElementById('toPlay').innerHTML = "Tie";
				document.getElementById('ties').innerHTML = ++tie_count;
				
				}
		}
} // end win_check_FUNC()