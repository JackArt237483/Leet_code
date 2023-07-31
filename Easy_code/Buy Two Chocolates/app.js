// Задача чтобы найти все варианты покупуи шокопдки
// чтобы твоим деньги не ушли в минус Купите две шоколадки - Buy Two Chocolates

const prices = [1,2,3]
const money = 4

function getRightMoney(prices, money) {
  let minCoast = Infinity;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const totalCost = prices[i] + prices[j];
      console.log(`Checking prices[${i}] + prices[${j}] = ${totalCost}`);

      if (totalCost <= money && money - totalCost < minCoast) {
        minCoast = money - totalCost;
      }
    }
  }
  return money - minCoast;
}

const result = getRightMoney(prices, money);
console.log(result);



/*
Купите две шоколадки - Buy Two Chocolates
1)пока для начала у тебя есть функция
2)которая принимает два аргумента prices-массив в котором есть цены на
разные шокроладки в магазе и money = те деьньги котрое у тебя есть
3)let diffientChocolate = money в этой переменой мы помещаем количество наших денег
то есть эта перемнная будет хранить разнику твоих бабок и цену тех шоколдок которые ты купишь
4) for(let i = 0; i < prices.length; i++){
    for(let j = i + 1; j < prices.length; j++){
    }
  } вопрос что здесь происходит а тут при помощи двух вложенных for
  ты пере6ераешь все возможные варианты шоколадок которые ты можешь купить на
  свои деньньги
5) const totalCost = prices[i] + prices[j] в этой переменной хранится уже текущая
сумма двух шоколадок которые ты можешь купить
prices[i] + prices[j]
  ____prices[i]  это текущее значение первой шоколадки
  ____prices[j]  это текущее значение второй шоколадки\
6)    if (totalCost <= money && money - totalCost < minCoast) {
        minCoast = money - totalCost;
      }
    }
  }
  return money - minCoast;
  во всем в этом коде просто проверяется разница между ценами и затем
  просто возращается минимальная разница между ценами шоколадок и твоих денег
*/


