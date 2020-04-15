'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();





let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", '');
            let b = prompt("Во сколько обойдется?", '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appDate.expenses[a] = b;
            } else {
                i = i - 1;
            }

        }
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
                for (let i = 0; i < 3; i++) {
                    let a = prompt("Статья необязательных расходов?", '');
                    let b = prompt("Во сколько обойдется?", '');

                    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                        a != '' && b != '' && a.length < 50) {

                        appDate.optionalExpenses[a] = b;
                    } else {
                        i = i - 1;
                    }

                }
        },

    chooseIncome: function () {
                let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

                while ( (typeof (items)) !== 'string' || items == null || items == '') {
                    items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
                }

                appDate.income = items.split(', ');
                appDate.income.push(prompt("Может что-то еще?", ''));
                appDate.income.sort();
                
                appDate.income.forEach(function(item, i) {
                    console.log ("Способы дополнительного зароботка: ")
                    console.log( i + 1 + ") " + item  );
                  });

            }

   
};

for (let key in appDate) {
    /* ... делать что-то с obj[key] ... */
    console.log ("Наша программа включает в себя данные: " + appDate[key]);
  }