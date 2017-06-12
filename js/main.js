console.log("JS Linked!");

// Start of jQuery
jQuery(function() {


    var logicArray = [Math.floor(Math.random() * 4)];
    var userArray = [];

    var score = 0;

    var cells = $(".cell");





    // ------------------------> START OF EASY MODE <------------------------ //
    $("#easy").one("click", function() {
            $("#medium").hide();
            $("#hard").hide();

            var startEasy = function() {}
                // Populate logic array with a random sequence
            var fillLogic = function() {
                var randomNumber = Math.floor(Math.random() * 4);
                logicArray.push(randomNumber);
            }


            // Function to flash a cell back on
            var flashOn = function(el1) {
                $(el1).animate({
                    opacity: '0.3'
                }, 100);
            }

            // Check for wrong answer
            var wrongAnswer = function() {
                document.getElementById("wrongChime").play(); // play wrong chime
                console.log("Chime: wrong");
                $("body").css("background-color", "white");
                window.setTimeout(function() {
                    $("body").css("background-color", "black");
                }, 100);
            }

            // SHOW CURRENT SCORE
            var showScore = function() {
                score++;
                console.log("Score: " + score);
                $(".scoreNumber").empty();
                $(".scoreNumber").append(score)
            }

            // SHOW HIGH SCORE 
            var showHighScore = function() {
                
                if (score > highScore) {
                    var highScore = score;
                }
                $(".highScoreNumber").empty();
                $(".highScoreNumber").append(highScore);

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
                    } else {

                    }
                }
                console.error('resetting userArray')
                document.getElementById("rightChime").play(); // PLAY CORRECT CHIME!
                userArray = [];
                fillLogic();
                displaySequenceToTurnCount();
                showScore();
                showHighScore();



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
                    console.log('array lengths match');
                    checkSeq();
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

                }, 600);
                // How long before the next flash, sum off all timeout's and animations have to be less than this value



            }
            displaySequenceToTurnCount();
            cells.on("click", userClick);
        }) // END OF EASY MODE


    // ------------------------> START OF MEDIUM MODE <------------------------ //
    $("#medium").one("click", function() {
            $("#easy").hide();
            $("#hard").hide();

            var startEasy = function() {}
                // Populate logic array with a random sequence
            var fillLogic = function() {
                var randomNumber = Math.floor(Math.random() * 4);
                logicArray.push(randomNumber);
            }


            // Function to flash a cell back on
            var flashOn = function(el1) {
                $(el1).animate({
                    opacity: '0.3'
                }, 100);
            }

            // Check for wrong answer
            var wrongAnswer = function() {
                document.getElementById("wrongChime").play(); // play wrong chime
                console.log("Chime: wrong");
                $("body").css("background-color", "white");
                window.setTimeout(function() {
                    $("body").css("background-color", "black");
                }, 100);
            }

            // SHOW CURRENT SCORE
            var showScore = function() {
                score++;
                console.log("Score: " + score);
                $(".scoreNumber").empty();
                $(".scoreNumber").append(score)
            }

            // SHOW HIGH SCORE 
            var showHighScore = function() {
                var highScore = 0;
                if (score > highScore) {
                    highScore = score;
                }
                $(".highScoreNumber").empty();
                $(".highScoreNumber").append(highScore);

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
                    } else {

                    }
                }
                console.error('resetting userArray')
                document.getElementById("rightChime").play(); // PLAY CORRECT CHIME!
                userArray = [];
                fillLogic();
                displaySequenceToTurnCount();
                showScore();
                showHighScore();

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
                    console.log('array lengths match');
                    checkSeq();
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

                }, 400);
                // How long before the next flash, sum off all timeout's and animations have to be less than this value



            }
            displaySequenceToTurnCount();
            cells.on("click", userClick);
        }) // END OF MEDIUM MODE


    // ------------------------> START OF HARD MODE <------------------------ //

    $("#hard").one("click", function() {

            cells.css("backgroundColor", "white")
            $("#easy").hide();
            $("#medium").hide();

            var startEasy = function() {}
                // Populate logic array with a random sequence
            var fillLogic = function() {
                var randomNumber = Math.floor(Math.random() * 4);
                logicArray.push(randomNumber);
            }


            // Function to flash a cell back on
            var flashOn = function(el1) {
                $(el1).animate({
                    opacity: '0.3'
                }, 50);
            }

            // Check for wrong answer
            var wrongAnswer = function() {
                document.getElementById("wrongChime").play(); // play wrong chime
                console.log("Chime: wrong");
                $("body").css("background-color", "white");
                window.setTimeout(function() {
                    $("body").css("background-color", "black");
                }, 100);
            }

            // SHOW CURRENT SCORE
            var showScore = function() {
                score++;
                console.log("Score: " + score);
                $(".scoreNumber").empty();
                $(".scoreNumber").append(score)
            }

            // SHOW HIGH SCORE 
            var showHighScore = function() {
                var highScore = 0;
                if (score > highScore) {
                    highScore = score;
                }
                $(".highScoreNumber").empty();
                $(".highScoreNumber").append(highScore);

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
                    } else {

                    }
                }
                console.error('resetting userArray')
                document.getElementById("rightChime").play(); // PLAY CORRECT CHIME!
                userArray = [];
                fillLogic();
                displaySequenceToTurnCount();
                showScore();
                showHighScore();
            }



            // Flash cell on user click

            var userClick = function() {
                var activeCell = $("#" + event.target.id);
                // console.log(activeCell);
                activeCell.animate({ // animate click
                    opacity: '1'
                }, 50, function() { setTimeout(flashOn(activeCell)), 50 });
                userArray.push(parseInt(event.target.id));

                if (userArray.length == logicArray.length) {
                    console.log('array lengths match');
                    checkSeq();
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

                }, 200);
                // How long before the next flash, sum off all timeout's and animations have to be less than this value



            }
            displaySequenceToTurnCount();
            cells.on("click", userClick);
        }) // END OF HARD MODE

}); // jQuery End
