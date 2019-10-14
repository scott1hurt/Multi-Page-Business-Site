//This function makes sure that none of the JS code inside runs until after the HTML document is fully loaded

$(document).ready(function() {
    //Create a selector using jQuery
    $("p").css("background-color", "green"); //Target all paragraph elements, and change their background color CSS to green.

    //We can use jQuery selectors to target all elements with a specific class, to target elements with a specific ID, all elements of a specific type, etc

    $("button").click(function() {
        alert("Button clicked!");
    });
    $("#header").hide();
    $("#header").fadeIn("slow");

    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});

//Another way to write the document ready function
$(function() {

});