function akinator() {
    var big, small, buff;
    buff = 10000000000000000;            
    n = 0;
    i = document.getElementById('hnum').value.length;

    buff = buff / 10 ** Math.abs(i - 16);
    small = 0;
    big = buff;
    buff = buff / 2;
    for (let i = 1; i <= 60; i++) {
        if (confirm("Ваше число больше " + buff + " ?")) {
            small = buff;
            buff = (small + big) / 2;
        } else {
            big = buff;
            buff = (big + small) / 2;
        }
        if ((big - small) <= 1.8) {
            buff = Math.round((big + small) / 2);
            if (confirm("Ваше число= " + buff + " ?")) {
                alert("Я угадал ваше число за " + i + " операций");
                break;
            } else {
                alert("Вы сумели обмануть программу!");
                break;
            }
        }
    }
}

