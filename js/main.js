console.log("JS Linked!");

// Start of jQuery
jQuery(function() {

	console.log("JQ Linked!");

	var lvlOneBoard = $('#boardOne');
	console.log(lvlOneBoard);
	var counter = 1;

	var logicBoardOne = [
        ["", ""],
        ["", ""]
    ];


    for (var i = 0; i < logicBoardOne.length; i++){
    	var lvlOneRow = $("<div>");
    	lvlOneRow.addClass("row");
    	lvlOneBoard.append(lvlOneRow);
    	for (var j = 0; j < logicBoardOne[i].length; j++){
    		var lvlOneCell = $("<div>");
    		lvlOneCell.addClass("cell");
    		lvlOneCell.attr("id", "box" + counter);
    		lvlOneBoard.append(lvlOneCell)



    		counter++;

    	};

    };

    


});