console.log("JS Linked!");

// Start of jQuery
jQuery(function() {


    var logicArray = [Math.floor(Math.random() * 4)];
    var userArray = [];

    var currentTurn = 1;

    var cells = $(".cell");
    // console.log(cells);

    // Populate logic array with a random sequence
    var fillLogic = function() {
        var randomNumber = Math.floor(Math.random() * 4);
        logicArray.push(randomNumber);
    }

    // fillLogic();


    // Function to flash a cell back on
    var flashOn = function(el1) {
        $(el1).animate({
            opacity: '0.3'
        }, 100);
    }

    var wrongAnswer = function() {
        document.getElementById("wrongChime").play(); // play wrong chime
        console.log("Chime: wrong");
        $("body").css("background-color", "white");
        window.setTimeout(function() {
            $("body").css("background-color", "black");
        }, 100);
    }


    var checkSeq = function() {
        console.log('checking sequence')
        var checkCounter = 0;
        console.log('logic array is ' + logicArray);
        console.log('user array is: ' + userArray)
        for (var i = 0; i < logicArray.length; i++) {
            if (userArray[i] !== logicArray[i]) {
                console.log('WRONG')
                return wrongAnswer();
                // alert("they dont match!");
            } else {

            }
        }
        console.error('resetting userArray')
        document.getElementById("rightChime").play(); // PLAY CORRECT CHIME!
        userArray = [];
        fillLogic();
        displaySequenceToTurnCount();
        // console.log("logic array: " + logicArray);

    }



    // Flash cell on user click

    var userClick = function() {
        var activeCell = $("#" + event.target.id);
        // console.log(activeCell);
        activeCell.animate({ // animate click
            opacity: '1'
        }, 100, function() { setTimeout(flashOn(activeCell)), 50 });
        userArray.push(parseInt(event.target.id)); 




        if (userArray.length == logicArray.length) {
            console.log('array lengths match')

            checkSeq();


            // console.log("Chime: correct");
            // console.log("Clicked: " + event.target.id);
            // console.log("User array: " + userArray);

        } 


    };

    


    function displaySequenceToTurnCount() {
        // console.log('logic array', logicArray);
        var c = 0;
        // timeout
        var flashSeq = setInterval(function() {
            var activeCell = $('.cell').eq(logicArray[c]) // returns element with index
            activeCell.animate({
                opacity: '1'
            }, 100, function() { setTimeout(flashOn(activeCell)), 10 });
            c++;
            if (c == logicArray.length) {
                clearInterval(flashSeq);
            };


        }, 500);
        // How long before the next flash, sum off all timeout's and animations have to be less than this value



    }
    displaySequenceToTurnCount();
    cells.on("click", userClick);

}); // jQuery End
