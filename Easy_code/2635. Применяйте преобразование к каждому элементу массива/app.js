// Apply Transform Over Each Element in Array 2635. Применить преобразование к каждому элементу массива

const arr = [10,20,30]

const fn = (n) => n + 1

function goFromArray(arr,fn) {
   const result = []

   for(let i = 0;i < arr.length;i++){
      result.push(fn(arr[i],i))
   }

   return result
}

console.log(goFromArray(arr,fn))

/*
1)Просто запомни у тебя есть функция котоая принимает
сам массив и функции callback которая булдет проходиться по массиву
  function goFromArray(arr,fn) {
  }
const fn = (n) => n + 1 это изначпльная функция котоая на каждой интераци массива делает +1
к тому индекму к которому for идет

2)const result = [] дальше ты записываешь просто переменную где у тебя
будет записываться весь результат
    for(let i = 0;i < arr.length;i++){
     и дальше ты просто начинаешь пробегаться по массиву это легче
     легкого
   }
3)   result.push(fn(arr[i])) вот эта запись гласит добавь мне в массив
числа увелисенные на + ____fn(arr[i]) и здесь + ты вызваешь функцию которая
делает + 1 на каждой итерации массива
*/
