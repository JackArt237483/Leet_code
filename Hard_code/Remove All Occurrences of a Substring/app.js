// Задача на  Remove All Occurrences of a Substring__Удалите все вхождения подстроки

const s = "Hellow Artem"
const part = "low"


function findAndDeleteIndex(s,part) {
  let index = s.indexOf(part)
  while (index !== -1) {
    s = s.replace(part,'')
    index = s.indexOf(part)
  }

  return s
}

console.log(findAndDeleteIndex(s,part))

/*
 1)Для начала у тебя есть просто обычная функция
 которая принимает два аргумента
 s - саму строку  и  part - и построку которую нужно
 найти с самой строке взять и удалить
 2) let index = s.indexOf(part) в кратце в этой переменной
 будет храниться первое вхождение в подстроку
 3) while (index !== -1) {
    здесь у тебя идет проверка есть ли одно вхожление строки
    part вкрaтце тот элемент который нам нужно удалить
  }
 4)  s = s.replace(part,'') здесь ты просто обращаешься к переменной
 s это у тебя просто строка и ты replace(part,'') при помощи вот
 этой записи заменяешь подстроку с строку на ' 'пустую сроку
 где part это элемент который тебе нужно удалить
 а "" это то на что ты заменяешь это удаленное слово
 5) index = s.indexOf(part) в этой записи у тебя проверяется повтроное
 вхождение строки то есть когда цикл уже удалил уже подстроку в строке
 здесь s.indexOf(part) здесь у тебя ищется вхождение если его не
 но метод камбекает -1 и цикл завершается и возращается строка новая
*/

const str = "Artem the best"

function askdf(str){
  str.trim()

  const words = str.split(" ")

  if(words.length === 0){
    return 0
  }

  return words[words.length - 1].length
}

console.log(askdf(str))