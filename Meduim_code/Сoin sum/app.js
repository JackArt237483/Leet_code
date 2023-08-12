// Задача чтобы взять сложить все числа в массиве

function reducedArray(nums, fn, init) {
  let val = init;

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
}

// Пример использования
const nums = [1, 2, 3, 4, 5];
const fn = (acc, num) => acc + num;
const init = 0;

const result = reducedArray(nums, fn, init);
console.log(result); // Выведет 15 (1 + 2 + 3 + 4 + 5)


/*
1)
const arr = [1,2,3,4,5]
  первый это аргумент  это массив
const num = 0
  второй это знаяения в котрого у тебя
  начнется итерация массива
const fn = (acc, num) => acc + num
  а это функия которая у тебя все будет
  все будет складывать
function sumArr(arr, num, fn) {

}злесь ппросто у тебя есть функция
которавя принимает трм аргумента

2) let num = init это переменная котрорая
будет отвеяать за стартовое значепние
по итерацци цикла

3) for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  //здесь мы просто пробегаемяс по массиву и его длине и плюс
  вырабатываем функции акумулирования
  val = fn(val, nums[i]);
  то есть вот фнкция у нас просто берет и сумтрует з3начение
  fn(val, nums[i]);
  val первый аргумент котрый будет все товои значения
  суммировать
  nums[i] а это текущих индекс массива
  return val; а здесь ты просто возращаешь сам массив
*/