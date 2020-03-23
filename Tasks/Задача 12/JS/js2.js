var a, b, c, r;
a = b = c = 0;
r = "NaN";

function Count() {
    a = document.getElementById('a1').value;
    b = document.getElementById('b1').value;
    c = document.getElementById('c1').value;
    a = parseFloat(a);
    c = parseFloat(c);
    if (b == "+") {
        r = a + c;
    }
    if (b == "-") {
        r = a - c;
    }
    if (b == "*") {
        r = a * c;
    }
    if (b == "/") {
        if (c == 0) {
            r = "NaN";
        } else {
            r = a / c;
        }
    }
    if (b == "%") {
        if (c == 0) {
            r = "NaN";
        } else {
            r = a % c;
        }
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(r);
    r1.setAttribute("value", r);
}
