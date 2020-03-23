function Count() {
    var x, y;
    x = parseInt(document.getElementById('in').value);
    if (x < -3) {
        y = ((7 * (x*x))-1)/(2*x+6);
    } else {
        y = 4*(x*x)-5;
    }
    smoke.alert("<p class='tout'>y = </p>" + y);
}
