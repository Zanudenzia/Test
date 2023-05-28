const goTopBtn = document.querySelector(".go-top");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  // вычисляем положение от верхушки страницы
  const scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    goTopBtn.classList.add("go-top--show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  // пока не вернулись в начало страницы
  if (window.pageYOffset > 0) {
    // скроллим наверх
    window.scrollBy(0, -75); // второй аргумент - скорость
    setTimeout(goTop, 0); // входим в рекурсию
  }
}

let dp = new Date(document.lastModified);
function getWeek(d) {
  var weekNo = Math.ceil(d.getDate() / 7);
  return [d.getFullYear(), weekNo];
}
let result = getWeek(dp);

let day = dp.getDay();
let month = dp.getMonth();
let months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

let text =
  days[day] +
  ", " +
  result[1] +
  " неделя " +
  months[month] +
  " " +
  result[0] +
  "года";

let i,
  elements = document.getElementsByClassName("publication");
for (i = 0; i < elements.length; i += 1) {
  elements[i].insertAdjacentText("afterend", text);
}

let handleChange = (isChecked) => {
  if (isChecked) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark", "");
  }
};

let buttonModal = document.querySelectorAll(".card__add");
let cardModal = document.getElementById("card-modal");

for (let i = 0; i < buttonModal.length; i++) {
  buttonModal[i].addEventListener("click", function () {
    cardModal.classList.add("open");
  });
  document
    .getElementById("card-close-modal")
    .addEventListener("click", function () {
      cardModal.classList.remove("open");
    });
}

document.getElementById("card-button").addEventListener("click", function () {
  alert("Ваш заказ оформлен");
});
