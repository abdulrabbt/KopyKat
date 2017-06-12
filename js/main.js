console.log("JS Linked!");

// Start of jQuery
jQuery(function() {


    var logicArray = [Math.floor(Math.random() * 4)];
    var userArray = [];

    var score = 0;

    var cells = $(".cell");

    // -----------------------> INSTRUCTIONS MODAL <------------------------- //

    // var modalButton = $(".modalButton");

    // modalButton.on("click", function(){
    //     var how = $("<div>");
    //     how.addClass("modalClass");
    //     how.text("Text");
    //     how.css("display", "none");

    //     var close = $("button");
    //     close.text("close");
    //     close.on("click", function(){
    //         how.hide();
    //     });

    //     how.append(close);
    //     container.append(how);
    // })






    // ------------------------> START OF EASY MODE <------------------------ //
    $("#easy").one("click", function() {
            $("#medium").hide();
            $("#hard").hide();

            $('<p>Get Ready...</p>').css("color", "white").css("font-family", "font-family: 'Inconsolata', monospace;").appendTo('#getReady');

            setTimeout(function() {
                $("#getReady").hide()
            }, 1000);

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

                // Retry button
                var retryButton = $("button");
                retryButton.text("Retry");
                retryButton.click(function() {
                    location.reload(true);
                });

            }

            // SHOW CURRENT SCORE
            var showScore = function() {
                score++;
                console.log("Score: " + score);
                $(".scoreNumber").empty();
                $(".scoreNumber").append(score)
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
                setTimeout(function() {
                    displaySequenceToTurnCount()
                }, 500);
                showScore();

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
            setTimeout(function() {
                displaySequenceToTurnCount()
            }, 1000);
            cells.on("click", userClick);
        }) // END OF EASY MODE


    // ------------------------> START OF MEDIUM MODE <------------------------ //
    $("#medium").one("click", function() {

            $('<p>Get Ready...</p>').css("color", "white").css("font-family", "font-family: 'Inconsolata', monospace;").appendTo('#getReady');

            setTimeout(function() {
                $("#getReady").hide()
            }, 1500);

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
                }, 50);
            }

            // Check for wrong answer
            var wrongAnswer = function() {
                document.getElementById("wrongChime").play(); // play wrong chime
                console.log("Chime: wrong");
                $("body").css("background-color", "white");
                window.setTimeout(function() {
                    $("body").css("background-color", "black");
                }, 50);

                // Retry button
                var retryButton = $("button");
                retryButton.text("Retry");
                retryButton.click(function() {
                    location.reload(true);
                });
            }

            // SHOW CURRENT SCORE
            var showScore = function() {
                score++;
                console.log("Score: " + score);
                $(".scoreNumber").empty();
                $(".scoreNumber").append(score)
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
                setTimeout(function() {
                    displaySequenceToTurnCount()
                }, 500);
                showScore();

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

                }, 400);
                // How long before the next flash, sum off all timeout's and animations have to be less than this value



            }
            setTimeout(function() {
                displaySequenceToTurnCount()
            }, 1500);
            cells.on("click", userClick);
        }) // END OF MEDIUM MODE


    // ------------------------> START OF HARD MODE <------------------------ //

    $("#hard").one("click", function() {


            $('<p>Get Ready...</p>').css("color", "white").css("font-family", "font-family: 'Inconsolata', monospace;").appendTo('#getReady');

            setTimeout(function() {
                $("#getReady").hide()
            }, 1500);




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

                el1.css('background-image', "none");
            }

            // Check for wrong answer
            var wrongAnswer = function() {
                document.getElementById("wrongChime").play(); // play wrong chime
                console.log("Chime: wrong");
                $("body").css("background-color", "white");
                $("body").css('background-image', "url(' ./images/felix_face.png ')");
                $("body").css('background-size', "cover");
                $("body").css('background-repeat', "no-repeat");
                window.setTimeout(function() {
                    $("body").css("background-color", "black");
                    $("body").css('background-image', "none");
                    $("body").css('background-repeat', "no-repeat");
                    $("body").css('background-size', "cover");
                }, 100);

                // Retry button
                var retryButton = $("button");
                retryButton.text("Retry");
                retryButton.click(function() {
                    location.reload(true); // Forced reload
                });
            }

            // SHOW CURRENT SCORE
            var showScore = function() {
                score++;
                console.log("Score: " + score);
                $(".scoreNumber").empty();
                $(".scoreNumber").append(score)
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
                setTimeout(function() {
                    displaySequenceToTurnCount()
                }, 500);
                showScore();
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
                    activeCell.css('background-image', "url(' ./images/felix_face.png ')");
                    activeCell.css('background-size', "cover");
                    activeCell.css('background-repeat', "no-repeat");
                    c++;
                    if (c == logicArray.length) {
                        clearInterval(flashSeq);
                    };

                }, 200);
                // How long before the next flash, sum off all timeout's and animations have to be less than this value



            }
            setTimeout(function() {
                displaySequenceToTurnCount()
            }, 1500);
            cells.on("click", userClick);
        }) // END OF HARD MODE

}); // jQuery End
