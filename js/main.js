console.log("JS Linked!");

// Start of jQuery
jQuery(function() {


            


            var logicArray = [];
            var userArray = [];

            var cells = $(".cell");
            console.log(cells);

            var fillLogic = function() {
                for (var i = 0; i < 10; i++) {
                    var randomNumber = Math.floor(Math.random() * 4);
                    logicArray.push(randomNumber);
                }
            }
            
            fillLogic();
            console.log(logicArray);

            var flashOn = function(el1) {
                $(el1).animate({
                    opacity: '1'
                }, 1000);
            }

            
            var turn = logicArray.length;
            var c = 0;
            var flashSeq = setInterval(function(){
                var activeCell = $('.cell').eq(logicArray[c])
                console.log(logicArray[c]);
                activeCell.animate({
                    opacity: '0'
                }, 100, function(){setTimeout(flashOn(activeCell)), 100});
                if (c === turn){
                    clearInterval(flashSeq);
                };
                c++;

            }, 1500);



            // var flashOn = function(el1) {
            //     console.log('flashing on for ' + el1)
            //     $(el1).addClass('toggle');
            //     setTimeout(function() {
            //         flashOff(el1);
            //     }, 500)
            // }

            


            // var flashSequence = function() {
            //     // for (var i = 0; i < logicArray.length; i++) {
            //         // debugger
            //         var currentIndex = i;
            //         var currentValue = "#" + logicArray[i];
            //         setTimeout(function() {
            //             flashOn($(currentValue));
            //             console.log($(currentValue));
            //         },500 );
            //     // };
            // };

            
            // flashSequence();



    // console.log("JQ Linked!");

    // var lvlOneBoard = $('#boardOne');
    // var counter = 1;

    // var logicInit = Math.ceil(Math.random() * 4);
    // console.log(logicInit);
    // var logicSeq = [logicInit]; // Logic sequence
    // var userSeq = []; // User sequence

    // var dataBase = {    // WORK ON THIS IDEA
    //  logSeq:[1],
    //  userSeqq: [],
    //  function(){

    //  }
    // };



    // var logicBoardOne = [
    //     ["", ""],
    //     ["", ""]
    // ];

    // function flashSequence() {
    //     console.log('flashing cell!');
    //     for (var i = 0; i < logicSeq.length; i++) {
    //         console.log('adding toggle');
    //         console.log('!!!!' + i);
    //         $("#" + logicSeq[i]).addClass("toggle");
    //         var currentIndex = i;
    //         window.setTimeout(function(){
    //             // console.log('this insideofOnClick -> ', $(this));
    //             console.log('removing toggle ' + i);
    //             console.log(logicSeq);
    //             $("#" + logicSeq[i]).removeClass("toggle");
    //             // console.log($(this));
    //         }, 400);

    //     }

    // };




    // function onCellClick(event) {
    //     logicSeq.push(Math.ceil(Math.random() * 4));
    //     console.log('push next part to sequence');
    //     console.log("Logic: " + logicSeq); // LOG CURRENT LOGIC ARRAY
    //     userSeq.push(event.target.id);
    //     console.log("User: " + userSeq); // LOG CURRENT USER ARRAY
    //     // console.table(logicBoardOne); // LOG TABLE
    //     // console.log("clicked!"); // LOG A CLICK
    //     $(this).addClass("toggle"); // not happening, nvm it is...
    //     let that = $(this);
    //     window.setTimeout(function(){
    //         console.log('that insideofOnClick -> ', that);
    //         that.removeClass("toggle");
    //         console.log('removed toggle');
    //         flashSequence();
    //     }, 400);
         

    // }

    // //fucntion setBoard
    // for (var i = 0; i < logicBoardOne.length; i++) {
    //     var lvlOneRow = $("<div>");
    //     lvlOneRow.addClass("row");
    //     lvlOneBoard.append(lvlOneRow);
    //     for (var j = 0; j < logicBoardOne[i].length; j++) {
    //         // var red = Math.floor(Math.random() * 255);
    //         // var green = Math.floor(Math.random() * 255);
    //         // var blue = Math.floor(Math.random() * 255);

    //         var lvlOneCell = $("<div>");
    //         lvlOneCell.addClass("cell");
    //         // lvlOneCell.css("background-color", 'rgb(' + red + ", " + green + ", " + blue + ")" ); // rgb(255, 0, 0)
    //         lvlOneCell.attr("id", +counter);
    //         lvlOneCell.click(onCellClick);
    //         lvlOneBoard.append(lvlOneCell);
    //         counter++;

    //     };

    // };

    // flashSequence();









}); // jQuery End

