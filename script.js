const eyeballs = document.querySelectorAll(".eyeball");
function move(item) {
    for (var i = 0; i < eyeballs.length; i++) {
        var rectX = eyeballs[i].offsetLeft + 35;
        var rectY = eyeballs[i].offsetTop + 35;
        var x = (item.pageX - rectX) / 10 + "px"; 
        var y = (item.pageY - rectY) / 10 + "px"; 
        eyeballs[i].style.transform = "translate(" + x + "," + y + ")";
    }
}