'use strict';
 
 let money = +prompt('Ваш месячный доход?', '12000');
 console.log(money);
 let income = 'фриланс';
 let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
 console.log(addExpenses);

 let deposit = confirm('Есть ли у вас депозит в банке?');
 console.log(deposit);

 let expenses1 = prompt('Введите обязательную статью расходов?');
 console.log(confirm(expenses1));
 let amount1 = +prompt('Во сколько это обойдется?', '1000');
 console.log(confirm(amount1));
 let expenses2 = prompt('Введите обязательную статью расходов?');
 console.log(confirm(expenses2)); 
 let amount2 = +prompt('Во сколько это обойдется?', '1000');
 console.log(confirm(amount2));

 let budgetMonth = money-(amount1+amount2);
 console.log('Бюджет на месяц: ' + budgetMonth);

 let mission = 200000;
 let period = Math.ceil(mission/budgetMonth);
 console.log('Цель будет достигнута за ' + period + ' месяцев');

 let budgetDay = budgetMonth/30;  
 console.log('Бюджет на день: ' + Math.floor(budgetDay));  

  if (budgetDay > 1200){
     console.log('У вас высокий уровень дохода');
 } else if (budgetDay >= 600 || budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
 } else if (budgetDay >= 0 || budgetDay < 600) {
     console.log('К сожалению ваш уровень дохода ниже среднего');
 } else {
     console.log('Что то пошло не так');
 }  