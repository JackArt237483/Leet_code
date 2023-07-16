function createStringName() {
   return function(args) {
     return args = "Artem is the best"
   }
}
const f = createStringName()
console.log(f())

// 1) анонимная функция как можно вызвать
const f = function (a,b) {
  const letter = a + b
  return letter
}
console.log(f(2,6))

// 2)функция которую ты можешь вызвать просто через functiom
 function f(a,b,c) {
  const sum = a + b * c
  return sum
}
console.log(f(2,3,5))

//3) Функция котоая вызывается через переменную const Immediately Invoked Function Expression (IIFE)
// вкратце функция быстрого вызова
const result = (
  function name(a,b) {
    const sum = a + " " + b
    return sum
  }
)("Berter","Artem")
console.log(result)

//4) Функция котоая может вызывается внутри функции
//Functions Within Functions
function nam() {
  function f(a,b){
    const text = a + " " + b
    return text
  }
  return f
}

const f = nam()
console.log(f("Artem","IS THE ARTEM"))



//5)Функция подъема-Hosting function вызываем самц функции до ее результата
function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7










