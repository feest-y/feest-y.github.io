var r, b, o;
if (confirm("Ви чоловік ?")) {
    r = parseFloat(prompt("Твій зріст", r));
    b = parseFloat(prompt("Твій вік", b));
    o = 50 + (r - 150) * 0.52 + (b - 21) / 4;
} else {
    r = parseFloat(prompt("Твій зріст", r));
    b = parseFloat(prompt("Твій вік", b));
    o = 50 + (r - 150) * 0.75 + (b - 21) / 5;
}
o *= 100;
o = parseInt(o);
o /= 100;
document.write("<p>", "Оптимальна вага - ", o, "kg;",
    "</p>");
