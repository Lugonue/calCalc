export const calCalc = (caloriesForm) => { // расчет калорий исходя из физ параметров
    let inputValues = document.querySelector(".parametrs").elements;
    inputValues = Array.prototype.slice.call( inputValues ); // получаем массив input-ов
    inputValues = inputValues.map(input => input.value); 
    const age = inputValues[0];
    const growth = inputValues[1];
    const weigth = inputValues[2];
    if (caloriesForm.gender[1].checked) {
        return (10 * weigth) + (6,25 * growth) - (5 * age) - 161;
    } else {
        return (10 * weigth) + (6,25 * growth) - (5 * age) + 5;
    }
};
