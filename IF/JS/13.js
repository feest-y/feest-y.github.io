function Count() {
    var a, b, c, min;
    a = parseFloat(document.getElementById('ina').value);
    b = parseFloat(document.getElementById('inb').value);
    c = parseFloat(document.getElementById('inc').value);
    max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (((a + b) >= max) && ((c + b) >= max) && ((a + c) >= max)) {
        smoke.alert("<p class='tout'>Трикутник існує !</p>");
    } else {
        smoke.alert("<p class='tout'>Трикутник неіснує !</p>");
    }
}
