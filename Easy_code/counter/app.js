
let n = 2

function f(n) {

  function inc() {
    return n++
  }
  return inc
}

const increment = f(n)

console.log(increment())