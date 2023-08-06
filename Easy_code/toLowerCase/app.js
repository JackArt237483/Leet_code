// Задача на методы UpperCase to loverCase


// Первый вариант решения
const s = "HELLOOW ARTEM"

function findRightIndex(s) {

 let result = ""

 for(let i = 0;i <= s.length; i++) {

  const char = s.charAt(i)

  if (char === char.toUpperCase()) {
    result += char.toLowerCase();
  } else {
    result += char;
  }
}

 return result

}

console.log(`This is new upper case string ${findRightIndex(s)}`)

// 2)Вариает решения

const st = "HelLoW sTrINg"

function getNewStr(st) {
  return st.split('').map(char => (char === char.toUpperCase() ? char.toLowerCase() : char)).join('')
}

const result = getNewStr(st)
console.log(result)


/*Здесь у тебя происходит такая штука ты берешь стрроку
  1)st.split('') просто разделяешь по символьно
  и у тебя получается массив
  2).map(char => (char === char.toUpperCase() ? char.toLowerCase() : char))
  затем ты просто ты на просто проходишь проверку если у тебя будут только
  верхний регистр то ты все превращаешь в нижний регистр иначе просто добовляяешь
  их в переменную
  3).join('') а затем ты просто преврящаешь строку из массива
*/



/*
  1) У тебя есть просто функция в которой
  содеежится аргумент cтрока

  const s = "Hellow Artem"
  function findRightIndex(s) {
  }
  2)const result = "" создается строка
  где у тебя будет храниться строка уже готовая
  3) for(let i = 0;i <= s.length; i++) {
    и пишем цикл в котором будет преобразование
    из нижнего регистра в верхний регистр
  }
  4)const char = s.charAt(i)в этой переменной
  у тебя будет храниться все символы во время
  прохождения по строке вкратце все вот эти символы
  будут туда записываться
  5) if(char === char.toUpperCase()){
      result += char.toLoverCase()
  } else {
    result += char
  } тут у тебя идет проверка если
  char === char.toUpperCase() действительно
  ли у тебя символы  в переменной char равны
  заглавным буквам верхнему регистру
  ______если да то  result += char.toLoverCase()
  то ты их просто переводишь в нижний регистр
   else {
    result += char
  } если  они равны нижнему регистру то просто присваивай к переменной
  result
6)Но затем ты возращаешь уже готовый return result
*/