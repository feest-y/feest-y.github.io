 jQuery('document').ready(function () {
     jQuery('button').on('click', function () {
         b.remove();
         var r, name, old, url, ok1, good1, bad1;
         ok1 = "Not Bad!";
         good1 = "Genious!";
         bad1 = "Practice more!";
         var good = "https://uainfo.org/static/files/gallery_uploads/images/01_genius_child.jpg";
         var ok = "https://cs8.pikabu.ru/post_img/2017/02/14/12/1487103912128595331.jpg";
         var bad = "https://dynamo.kiev.ua/media/postphoto/111dynamo.kiev.ua111_746.jpg";
         name = prompt("Як тебе звати ?");
         alert("Приємно познайомитися, " + name + " !");
         old = parseInt(prompt("Скільки тобі років," + name + " ?"));
         if (old >= 18 && old > 0 && old < 100) {
             alert("Ого, ти вже дорослий," + " це багато!");
         } else if (old < 18 && old > 0 && old < 100) {
             alert("Хм, " + old + ", ну майже 18)");
         } else {
             alert("Нажаль я тебе не розумію( , схоже що ти написав нісенітницю");
         }
         if (old >= 16) {
             alert("Так, як тобі вже є 16, ти напевно багато знаєш про космос !");
             alert("Давай перевіримо !");
         } else {
             alert("Давай спробуємо проти тест про космос.");
         }
         var a1, a2, a3, a4, a5, a6, a7, a8, result;
         result = 0;
         //2
         a1 = prompt("Як з грецької перекладається слово космос (κόσμος) ? " + "\n1) Зірка" + "\n2) Мир" + "\n3) Простір");
         //1
         a2 = prompt("Як звали першу тварину, виведене на орбіту Землі?" + "\n1) Лайка" + "\n2) Білка" + "\n3) Зірочка");
         //1
         a3 = prompt("В яких одиницях вимірюють відстань між близькими галактиками?" + "\n1) Мегапарсеки" + "\n2) млн. кілометрів" + "\n3) Календарні роки");
         //1
         a4 = prompt("Хто запропонував геліоцентричну систему будови сонячної системи?" + "\n1) Микола Коперник" + "\n2) Галилео Галилей " + "\n3) Джордано Бруно");
         //2
         a5 = prompt("Корабель, на якому полетів Юрій Гагарін називався" + "\n1) Схід" + "\n2) Восток" + "\n3) Вісник");
         //2
         a6 = prompt("Де раніше працював глава Об'єднаної ракетно-космічної корпорації Ігор Комаров?" + "\n1) ГАЗПРОМ" + "\n2) АВТОВАЗ" + "\n3) Уралвагонзавод");
         //2
         a7 = prompt("Перша відкрита і описана комета була:" + "\n1) комета Энке" + "\n2) комета Галлея" + "\n3) комета Фая");
         //2
         a8 = prompt("Як називається наша галактика?" + "\n1) Набу" + "\n2) Магеланова хмара" + "\n3) Чумацький шлях");
         if (a1 == 2) {
             result++;
         }
         if (a2 == 1) {
             result++;
         }
         if (a3 == 1) {
             result++;
         }
         if (a4 == 1) {
             result++;
         }
         if (a5 == 2) {
             result++;
         }
         if (a6 == 2) {
             result++;
         }
         if (a7 == 2) {
             result++;
         }
         if (a8 == 2) {
             result++;
         }
         if (result >= 7) {
             r = good1;
             url = good;
         } else if (result >= 4) {
             r = ok1;
             url = ok;
         } else {
             r = bad1;
             url = bad;
         }
         if (result % 1 > 0) {
             result = (12 / 8 * result).toFixed(1);
         } else {
             result = (12 / 8 * result);
         }
         alert("Ваша оцінка: " + result + " з 12-ти можливих!");
         cl.innerHTML = r;
         res.setAttribute("src", url);

     });
 });
 //         document.write("<img id=\"res\" src=\"" + url + "\">");
