function Count() {
    var value;
    value = parseInt(document.getElementById('in').value);
    if (isNaN(value)) {
        smoke.alert("<p class='tout'>Введите число !</p>");
    } else if (value % 2 == 0) {
        smoke.alert("<p class='tout'>Число парне !</p>");
    } else if (value % 2 != 0) {
        smoke.alert("<p class='tout'>Число непарне !</p>");
    } else {
        smoke.alert("<p class='tout'>Error</p>");
    }
}
