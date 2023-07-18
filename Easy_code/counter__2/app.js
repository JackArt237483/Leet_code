// 1) Counter 2
function resertNumber(init) {
  let counter = init;

  function increment() {
    counter++;
    return counter;
  }

  function decrement() {
    counter--;
    return counter;
  }

  function reset() {
    counter = init;
    return counter;
  }

  return {
    increment,
    decrement,
    reset
  };
}


const func = resertNumber(6)

console.log(func.decrement())
console.log(func.increment())
console.log(func.reset())