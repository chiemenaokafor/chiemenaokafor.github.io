$(document).ready(function () {

    // sticky navigation
    $("#profile").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '70px'
    });

});
