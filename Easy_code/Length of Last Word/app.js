//Задача на поиск последнего длинны слова в строке на английском =  Length of Last Wordconst s = "  Artem the best  "

const s = "Artem Kaka Hellow"

function findLastLengthWorld(s) {
  s = s.trim()

  const words = s.split(" ")

  if(words.length === 0){
    return 0
  }

  return words[words.length - 1].length
}

const result = findLastLengthWorld(s)
console.log(result)





/*
1)Вообщем задача найти длинну последнего слова
2)Пока у тебя просто есть строка рандомная
3)И функция которая принимает эту строку в качестве аргумента
4)s = s.trim() вот эта запись гласит я удалю пробелы с конца
5)и с начала.Потом ты разделяешь по пробелам слова чтобы
6)то что метод split разделит const word = s.split(" ")
7)Чтобы эти слова превратились в массив.И они преаратились в массив
8) if(words.length === 0){
    return 0
  } вот эта запись гласит я проверю есть ли в массиве
9)какие либо слова или пробелы.Если они есть то я верну
10)0 то есть все функция выполнила свое действие
11)words[words.length - 1].length эта запись гласит
12)то есть здесь обращаемся к самой переменной words
13)это строка которая мы разделили при помощи split(" ")
14)words.length это длина массива а  words.length - 1
15)а здесь уже идет обращение к  самому последнему элеенту
16).length это длина строки
*/