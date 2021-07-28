'use strict'

let money = prompt("Ваш бютжет на месяц?",'');
let time = prompt("Введите дату в формате YYYY-MM-DD",'YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 1; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",'');
    let b = prompt("Во сколько обойдется?",'');

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
    
};

appData.moneyPerDay = appData.budget / 30;
alert("щоденний бютжет: " + appData.moneyPerDay / 30);

if (appData.moneyPerDay < 100) {
    console.log("Минимальний уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Високий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
