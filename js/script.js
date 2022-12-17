import { calCalc } from "./helpers.js";

// тут в переменные мы записали наши кнопки.
const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit");
// получаем в переменную нашу форму и все данные которые в ней есть.
// подробнее можно посмотреть тут https://learn.javascript.ru/form-elements
const caloriesForm = document.forms.counter;
// span с калориями
const normalCal = document.querySelector(".normal_cal");
const weigthDown = document.querySelector(".weigthDown");
const weigthUp = document.querySelector(".weigthUp");

// вешаем событие щелчка по кнопки внутри пример функции
resetButton.addEventListener("click", (event) => {
    inputFieldset.forEach(el => {
        el.value = 0;
    });
    caloriesForm.gender[0].checked = true;
    caloriesForm.activity[0].checked = true;
    submitButton.disabled = true;
    document.querySelector(".printResultDispNone").style.display = 'none';
    // нужно чтобы страница после нажатия не обновлялась
    event.preventDefault();
});

submitButton.addEventListener("click", (event) => {
    document.querySelector(".printResultDispNone").style.display = 'block';
    let calcContent = calCalc(caloriesForm );
    calcContent = calcContent * document.querySelector('input[name="activity"]:checked').value;
    normalCal.textContent = Math.floor(calcContent);
    weigthDown.textContent = Math.floor(calcContent - (calcContent * 0.15));
    weigthUp.textContent = Math.floor(calcContent + (calcContent * 0.15));

    // нужно чтобы страница после нажатия не обновлялась
    event.preventDefault();
});

// my solution ******************************************************************************
const inputFieldsetArrey = caloriesForm.elements.parametrs; // получаем значения из области input
const inputFieldset = document.querySelectorAll(".parametr");
inputFieldset.forEach(el => {
    el.addEventListener("blur", function () { // событие для активации кнопки submit
        let inputValues = inputFieldsetArrey.elements;
        inputValues = Array.prototype.slice.call( inputValues ); // получаем массив input-ов
        inputValues = inputValues.map(input => input.value); // получаем массив значений
        if (inputValues.includes("0") || inputValues.includes('')) {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }
    })
});

