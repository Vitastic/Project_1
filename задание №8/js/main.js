let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    // список полей (NodeList) необязательных расходов 
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');




let money, time;


startBtn.addEventListener('click', function() {   
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    } 
    appDate.budget = money;
    appDate.timeData = time; 
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
   
  
});


expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("Все верно!");
            appDate.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});


optionalExpensesBtn.addEventListener('click', function() {

    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appDate.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i] + ' ';
    }

});



let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
      
    },



    detectDayBudget: function () {
        appDate.moneyPerDay = (appDate.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appDate.moneyPerDay);
    },

    detectLevel: function () {
        if (appDate.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            console.log("Средний уровень достатка")
        } else if (appDate.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка")
        } else {
            console.log("Произошла ошибка!!!")
        }
    },

    checkSevings: function () {
        if (appDate.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                procent = +prompt("Под какой процент накопления?");

            appDate.monthIncome = save / 100 / 12 * procent;
            alert("Доход в месяц с вашего депозита: " + appDate.monthIncome);
        }
    },

    chooseOptExpenses: function () {
        
    },

    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

        while ((typeof (items)) !== 'string' || items == null || items == '') {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        }

        appDate.income = items.split(', ');
        appDate.income.push(prompt("Может что-то еще?", ''));
        appDate.income.sort();

        appDate.income.forEach(function (item, i) {
            console.log("Способы дополнительного зароботка: ")
            console.log(i + 1 + ") " + item);
        });

    }


};

