function Count() {
    var n, res;
    n = document.getElementById('n').value;
    n = parseInt(n);
    res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i; // factorial = factorial * i;
        console.log(i);
    }

    console.log(res);
   // result.setAttribute("value", res);
    document.getElementById("par").innerHTML = res;
}
