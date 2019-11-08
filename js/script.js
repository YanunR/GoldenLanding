$(document).ready(function() {
    $('#Services_info>ul>li>img').mouseenter(function() {
        $(this).fadeOut(500, function() {
            $(this).attr("src", this.src.slice(0, -4) + "_black.png");
            $(this).fadeIn(500);
        });
    })

    $('#Services_info>ul>li>img').mouseleave(function() {
        $(this).fadeOut(500, function() {
            $(this).attr("src", this.src.slice(0, -10) + ".png");
            $(this).fadeIn(500);
        });
    })




});