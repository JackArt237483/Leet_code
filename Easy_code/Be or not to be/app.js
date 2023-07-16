//1) Способ с проверкой и теста вариантом
// Cходятся те ключи с обьектом или нет 
function expect(val) {
  return {
    toBe: function(otherVal){
      if(val === otherVal) {
        return true
      } else {
        throw new Error("Not Equal")
      }
    },
    notTobe: function (otherVAL) {
      if(val !== otherVAL) {
        return true
      } else {
        throw new Error("Equal");
      }
    }
  }
}

const f = expect("52").notTobe("5")
const d = expect("Artem").notTobe("Artem")
console.log(f)