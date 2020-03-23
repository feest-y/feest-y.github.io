function Count() {
    var a, b, c, d, x1, x2;
    a = parseFloat(document.getElementById('ina').value);
    b = parseFloat(document.getElementById('inb').value);
    c = parseFloat(document.getElementById('inc').value);
    d = (b * b) - 4 * a * c;
    if (d >= 0) {
        x1 = (-b + Math.sqrt(d)) / 2 * a;
        smoke.alert("<p class='tout'>x1 = </p>" + x1);
        if (d > 0) {
            x2 = (-b - Math.sqrt(d)) / 2 * a;
            smoke.alert("<p class='tout'>x2 = </p>" + x2);
        }
    } else {
        smoke.alert("<p class='tout'>Розв'язків не існує !</p>");
    }

}
