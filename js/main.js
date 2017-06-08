console.log("JS Linked!");

// Start of jQuery
jQuery(function() {

    console.log("JQ Linked!");

    var lvlOneBoard = $('#boardOne');
    var counter = 1;

    var logicInit = Math.ceil(Math.random() * 4);
    console.log(logicInit);
    var logicSeq = [logicInit]; // Logic sequence
    var userSeq = []; // User sequence

    // var dataBase = {    // WORK ON THIS IDEA
    //  logSeq:[1],
    //  userSeqq: [],
    //  function(){

    //  }
    // };



    var logicBoardOne = [
        ["", ""],
        ["", ""]
    ];

    function flashNewCell() {
        for (var i = 0; i < logicSeq.length; i++) {
            $("#" + logicSeq[i]).addClass("toggle");
            window.setTimeout(() => {
                console.log('this insideofOnClick -> ', $(this));
                $("#" + logicSeq[0]).removeClass("toggle");
                console.log('removed toggle');
                console.log($(this));
            }, 400);

        }

    };




    function onCellClick(event) {
        logicSeq.push(Math.ceil(Math.random() * 4));
        console.log("Logic: " + logicSeq); // LOG CURRENT LOGIC ARRAY
        userSeq.push(event.target.id);
        console.log("User: " + userSeq); // LOG CURRENT USER ARRAY
        // console.table(logicBoardOne); // LOG TABLE
        // console.log("clicked!"); // LOG A CLICK
        $(this).addClass("toggle"); // not happening, nvm it is...
        let that = $(this);
        window.setTimeout(() => {
            console.log('this insideofOnClick -> ', $(this));
            $(this).removeClass("toggle");
            console.log('removed toggle');
            console.log($(this));
            flashNewCell();
        }, 400);
        

    }

    //fucntion setBoard
    for (var i = 0; i < logicBoardOne.length; i++) {
        var lvlOneRow = $("<div>");
        lvlOneRow.addClass("row");
        lvlOneBoard.append(lvlOneRow);
        for (var j = 0; j < logicBoardOne[i].length; j++) {
            // var red = Math.floor(Math.random() * 255);
            // var green = Math.floor(Math.random() * 255);
            // var blue = Math.floor(Math.random() * 255);

            var lvlOneCell = $("<div>");
            lvlOneCell.addClass("cell");
            // lvlOneCell.css("background-color", 'rgb(' + red + ", " + green + ", " + blue + ")" ); // rgb(255, 0, 0)
            lvlOneCell.attr("id", +counter);
            flashNewCell();
            lvlOneCell.click(onCellClick);
            lvlOneBoard.append(lvlOneCell);
            counter++;

        };

    };









}); // jQuery End

