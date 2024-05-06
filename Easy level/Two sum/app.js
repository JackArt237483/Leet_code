//1) найди два числа в массиве и получили число TWO SUM
const nums = [2,3,5,6]
const target = 11
// функция с двумя аргументами перебор при помощи двух циклов
function getRightNum(nums,target) {
  for(let i = 0; i < nums.length; i++){ //внешний цикл с обходом по массиву
    for(let j = i + 1;j < nums.length; j++){ // так же здесь проход по массиву со следущего элемента
       if(nums[i] + nums[j] === target){ // здесь сравнивает текущий и следующий элемент в массивве
          return [i, j] // если два числа нашлись то возращается два индеса с этими числами
       }
    }
  }
  return null //если ничего не будет то просто возращет null
}
const res = getRightNum(nums,target)
console.log(res)

//2)Так сначала левый указатель потом правый
const num = [7,1,2,5,3]
const tar = 12
//функция для перебора массива
function twoNum(num,tar) {
   num.sort((a,b)=> a - b) // сортировка по возрастанию
   let left = 0 // начальная точка массива то есть в начале
   let right = num.length - 1 // здесь конец массива
   while(left < right){
       const sum = num[left] + num[right]
       // здесь складывается два значения то есть первая и последнее
       if(sum === tar){ // сравниваются два значения если да то все возращается если нет то уходит
           return[num[left],num[right]]
       } else if (sum < target){
           left ++
       } else{
           right ++
       }
   }
   return null
}

const get = twoNum(num,tar)
console.log(get)
