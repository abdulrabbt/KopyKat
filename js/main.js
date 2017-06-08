console.log("JS Linked!");

// Start of jQuery
jQuery(function() {

	console.log("JQ Linked!");

	var lvlOneBoard = $('#boardOne');
	console.log(lvlOneBoard);
	var counter = 1;

	var logicSeq = []; // Logic sequence
	var userSeq = []; // User sequence

	// var dataBase = {    // WORK ON THIS IDEA
	// 	logSeq:[1],
	// 	userSeqq: [],
	// 	function(){
			
	// 	}
	// };



	var logicBoardOne = [
        ["", ""],
        ["", ""]
    ];






    for (var i = 0; i < logicBoardOne.length; i++){
    	var lvlOneRow = $("<div>");
    	lvlOneRow.addClass("row");
    	lvlOneBoard.append(lvlOneRow);
    	for (var j = 0; j < logicBoardOne[i].length; j++){
    		var red = Math.floor(Math.random()*255);
			var green = Math.floor(Math.random()*255);
			var blue = Math.floor(Math.random()*255);

    		var lvlOneCell = $("<div>");
    		lvlOneCell.addClass("cell");
    		// lvlOneCell.css("background-color", 'rgb(' + red + ", " + green + ", " + blue + ")" ); // rgb(255, 0, 0)
    		lvlOneCell.attr("id", + counter);
    		lvlOneCell.click(function(event){
    			logicSeq.push(Math.ceil(Math.random()*4));
    			console.log("Logic: " + logicSeq) ; // LOG CURRENT LOGIC ARRAY
    			userSeq.push(event.target.id);
    			console.log("User: " + userSeq); // LOG CURRENT USER ARRAY
    			// console.table(logicBoardOne); // LOG TABLE
    			// console.log("clicked!"); // LOG A CLICK
    			$(this).addClass("toggle"); // not happening
    			let that = $(this);
    		 	window.setTimeout( () => {
    		 		console.log('this insideofOnClick -> ',$(this));
    				$(this).removeClass("toggle");
    		 		console.log('removed toggle');
    		 		console.log($(this));
    			},500);
    		});
    		lvlOneBoard.append(lvlOneCell);





    		counter++;

    	};

    };

    


});