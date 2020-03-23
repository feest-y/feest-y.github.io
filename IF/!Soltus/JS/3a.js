function Count() {
    var x, y;
    x = parseInt(document.getElementById('in').value);
    if (x > 5) {
        y = 5 * x;
    } else {
        y = x + 5;
    }
    smoke.alert("<pre class='tout'>y = </pre>" + y);
}
