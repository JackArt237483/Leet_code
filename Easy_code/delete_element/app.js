//1) Delete element __ удалить элементы

// let nums = [3,2,2,3]
// let val = 3
// тут ты пишешь сам массив nums
// val значение которое надо удалить с nums

//1) способ
//   function removeElement(nums,val) {
//   nums = nums.filter((num) => num !== val)
//   return nums
// }

// let k = removeElement(nums,val)
// console.log(k)
// console.log(k.length)

// 1)создаем функции котоая содержит два аргумента 
// nums сам массив
// val значние массива которое наду удалить 

//2) внутри функции которые мы вызываем массив filter 
//который принимает ()=> колбек функцию которую мы будем использовать 
//для получания каждого элемаента num
//внутри () => принимает аргумет num - это элемет внутри массива 
// и num проверяет ==! самому val то есть 3 
// Если num не равен val то он идет в новый массив 
// а если наоборот будет равен num === val то тогда ничего не идет 

// 3) И результат который мы получили в новый массив мы записываем 
// в новый массив в нашу переменную k
//  console.log(k) в первом случае ты получишь [2,2] значение в массиве 
//  console.log(k.length) во вотором слйчае ты получишь просто 2 то есть это будет длина массива 

// 2) способ

let nums = [3,2,2,3]
let val = 3

function removeElement(nums,val) {
  let k = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }
  return nums
}

const newNums = removeElement(nums,val)
console.log(newNums)
console.log(newNums.length)

// k =  стартует счетчик отличных от нуля 
// затем ты начинаешь при помощи for по массиву пробегаться 


