function Count() {
    var value, a, b, c;
    value = parseInt(document.getElementById('in').value);
    a = Math.trunc(value / 100);;
    b = Math.trunc(value / 10) % 10;
    c = value % 10;
    if ((a + b + c) % 5 == 0) {
        smoke.alert("<p class='tout'>Сумма цифр кратна 5-ти</p>");
    } else if ((a + b + c) % 5 != 0) {
        smoke.alert("<p class='tout'>Сумма цифр некратна 5-ти</p>");
    } else {
        smoke.alert("<p class='tout'>Error</p>");
    }
}
