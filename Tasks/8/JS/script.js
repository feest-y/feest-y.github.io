var eur, usd, rub, summ, result;
result = parseFloat(prompt("Гроші", summ));

eur = 26.95;
usd = 24.53;
rub = 0.37;
summ = result;
document.write("<p>", "UAH= ", summ, " ₴", "</p>");
summ = result / eur;
document.write("<p>", "EUR= ", summ, " €", "</p>");
summ = result / usd;
document.write("<p>", "USD= ", summ, " $", "</p>");
summ = result / rub;
document.write("<p>", "RUB= ", summ, " ₽", "</p>");
