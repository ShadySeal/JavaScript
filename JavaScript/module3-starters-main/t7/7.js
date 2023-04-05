img = document.getElementById("target");

document.getElementById("trigger").onmouseover = function() {
    img.src = 'img/picB.jpg';
}

document.getElementById("trigger").onmouseout = function() {
    img.src = 'img/picA.jpg';
}