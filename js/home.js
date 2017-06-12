console.log("JS Linked!");

// Start of jQuery
jQuery(function() {



    var button = $('#modalButton');
    var modal = $('.modal')[0];
    var close = $('.close')[0];
    console.log(button);
    console.log(modal);
    console.log(close);


    button.on("click", function(){
        modal.style.display = "block";
        console.log("Opening model");
    })

    close.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };
    }

}); // jQuery End
