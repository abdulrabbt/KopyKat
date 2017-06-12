console.log("JS Linked!");

// Start of jQuery
jQuery(function() {


    var logicArray = [Math.floor(Math.random() * 4)];
    var userArray = [];
    console.log(logicArray);

    var currentTurn = 1;

    var cells = $(".cell");
    console.log(cells);

    // Populate logic array with a random sequence
    var fillLogic = function() {
        var randomNumber = Math.floor(Math.random() * 4);
        logicArray.push(randomNumber);
    }

    // fillLogic();
    console.log(logicArray);


    // Function to flash a cell back on
    var flashOn = function(el1) {
        $(el1).animate({
            opacity: '0.3'
        }, 100);
    }

    // Flash cell on user click
    var userClick = function() {
        var activeCell = $("#" + event.target.id);
        console.log(activeCell);
        activeCell.animate({ // animate click
            opacity: '1'
        }, 100, function() { setTimeout(flashOn(activeCell)), 50 });
        if (event.target.id == logicArray[logicArray.length - 1]) {
            document.getElementById("rightChime").play(); // PLAY CORRECT CHIME!
            console.log("Chime: correct");
            userArray.push(event.target.id);
            console.log("Clicked: " + event.target.id);
            console.log("User array: " + userArray);
            displaySequenceToTurnCount();
            fillLogic();
        } else {
            console.log("did not match!!");
            document.getElementById("wrongChime").play();
            console.log("Chime: wrong");
            // $("body").css("background-color", "white");
            // window.setTimeout(function(){
            //     $("body").css("background-color", "black");
            // }, 100);
            // $("cells").off("click", userClick());
            // ^^^^^^^ THIS IS NOT WORKING AND WILL CAUSE AN INFINITE LOOP!!

        }

        console.log("logic array: " + logicArray);
    };

    // Applying event listener
    

    function displaySequenceToTurnCount() {
        console.log('logic array', logicArray);
        var c = 0;
        // timeout
        var flashSeq = setInterval(function() {
            var activeCell = $('.cell').eq(logicArray[c]) // returns element with index
            console.log('la c', c);
            activeCell.animate({
                opacity: '1'
            }, 100, function() { setTimeout(flashOn(activeCell)), 10 });
            c++;
            if (c == logicArray.length) {
                clearInterval(flashSeq);
            };


        }, 500);



    }
    displaySequenceToTurnCount();
    cells.on("click", userClick);
    // How long before the next flash, sum off all timeout's and animations have to be less than this value

}); // jQuery End
