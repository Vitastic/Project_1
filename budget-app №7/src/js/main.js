let btnStartCalculation = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    dayBudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthSavings = document.getElementsByClassName('monthsavings-value'),
    yearSavings = document.getElementsByClassName('yearsavings-value'),
    inpExpensesItem = document.getElementsByClassName('expenses-item'),
    btn = document.getElementsByTagName('button'), // колекция кнопок
    btnExpenses = (btn[0]),
    btnOptionalExpenses = (btn[1]),
    btnCountBudget = (btn[2]),
    optionalExpensesItem = document.querySelectorAll('.data .optionalexpenses-item'),
    // список полей (NodeList) необязательных расходов 
    chooseIncome = document.querySelector('.data .choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    inpYear = document.querySelector('.result .time-data .year-value'),
    inpMonth = document.querySelector('.result .time-data .month-value'),
    inpDay = document.querySelector('.result .time-data .day-value');




console.log (inpDay);


