function Count() {
    var a, b, c, min;
    a = parseFloat(document.getElementById('ina').value);
    b = parseFloat(document.getElementById('inb').value);
    c = parseFloat(document.getElementById('inc').value);
    min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    smoke.alert("<p class='tout'>min = </p>" + min);
}
