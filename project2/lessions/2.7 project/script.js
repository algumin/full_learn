'use strict'

let money = prompt("Ваш бютжет на месяц?",'');
let time = prompt("Введите дату в формате YYYY-MM-DD",'YYYY-MM-DD');
let a1 = prompt("Введите обязательную статью расходов в этом месяце",'');
let a2 = prompt("Во сколько обойдется?",'');
let a3 = prompt("Введите обязательную статью расходов в этом месяце",'');
let a4 = prompt("Во сколько обойдется?",'');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

