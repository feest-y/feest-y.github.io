function Count() {
    var value, res;
    value = parseInt(document.getElementById('in').value);
    if (value >= 20 && value < 125 && value > 0) {
        smoke.alert("<pre class='tout'>Ви нам підходите</pre>");
    } else if (value < 20 && value < 125 && value > 0) {
        smoke.alert("<pre class='tout'>Ви занадто молоді</pre>");
    } else {
        smoke.alert("<pre class='tout'>Error, unexpected value</pre>");
    }
}
