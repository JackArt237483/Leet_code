// Задача на хеш таблицы короче у нас есть какойто пример
// то есть pattern шаблон и сама cтрока

const pattern = "abbf"
const s = "собачий конструктор constructor dog"

function findRightPattern(pattern, s) {

  const patternToWord = {}
  const wordToPattern = {}
  const word = s.split(" ")

  if(pattern.length !== word.length ){
    return false
  }

  for(let i = 0;i < pattern.length;i++){
    const char = pattern[i]
    const words =  word[i]

    if(!patternToWord[char] && !wordToPattern[words]){
      patternToWord[char] = words
      wordToPattern[words] = char
    } else if(patternToWord[char] !== words || wordToPattern[words] !== char){
      return false
    }
  }

  return true
}

console.log(findRightPattern(pattern,s))

/*
1) function findRightPattern(pattern, s) {
} то есть у тебя есть строка которая прнимает просто
шаблонн  const pattern = "abba"
и саму строку const s = "dog cat cat dog"
2) здесь мы создаем две хеш таблицы
  const patternToWord = {}
  в первой у нас будет храниться
  соотвествия мужду паттерном и словами между их строки
  const wordToPattern = {}
  в во втором случай ты просто создаешь разницу между словами
  из строки и патернами
  const word = s.split(" ")
  а здесь ты просто берешь строку и раделяшь и ее на символы
  и у тебя получается массив строки
3)  if(pattern.length !== word.length ){
    return false
  } здесь ты пишешь на крайний случай такую проверку
  у тебя допустим когда ты не знчешь какие данные ты
  получаешь у тебя может строка состоять из 6-10 слов
  и т д поэтому ты пишешь для подстроховки
  (pattern.length !== word.length
    если длина строки паттерн не равна количеству в стироке
    или в массиве word то просто завершай вот эту строку
4) for(let i = 0;i < pattern.length;i++){
    const char = pattern[i]
    const words =  word[i]
  }
 в этом коде ты через for просто пробегаешь по длине
 шаблона и просто
  const char = pattern[i]
  и просто в первом случае записываешь текщий индекс
  паттера то есть буквы
  const words =  word[i]
  и во втором случае ты уже записываеш текущие слово
  и массива word
5)if(!patternToWord[char] && !wordToPattern[words]){
      patternToWord[char] = words
      wordToPattern[words] = char
    } в этой строке идет проверка нет еще соответсвий вот
    этих структур данных (!patternToWord[char] && !wordToPattern[words]
      то есть не найдены ли здесь разница между символом и словом
      и словом и символом
______patternToWord[char] = words
      wordToPattern[words] = char и если сооивествий не найдено
      то мы берем связываем  patternToWord[char] = words
      это структуру данных с символом и словом
      _____ wordToPattern[words] = char и так же связываем
      словом с символом из паттерна
  то ест вкртце создаем ключ свойства
6)ДАЛЬШЕ ТЫ ПРОСТО ДЕЛАЕШЬ ПРОВЕРКУ ЕСЛИ СЛОВА УЖЕ НАЙДЕНЫ И ОНИ ЕСТЬ
В ОБОИХ ХЕШ ТАБЛИЦАХ
    else if(patternToWord[char] !== words || wordToPattern[words] !== char){
      return false
    }ты просто пишешь вот такую проверку если вдруг
    в первом случае patternToWord[char] !== words
    символ и слово может не совпадать
    в вовтром случае wordToPattern[words] !== char
    если слово вместе с символом може не совпадать
    если одно из этих условий не совпадает
    то ты просто возращаш false
7)Если все уловия найдены то просто вернем true

*/


const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    const patternToWord = new Map();
    const wordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!patternToWord.has(char)) {
            patternToWord.set(char, word);
        }

        if (!wordToPattern.has(word)) {
            wordToPattern.set(word, char);
        }

        if (patternToWord.get(char) !== word || wordToPattern.get(word) !== char) {
            return false;
        }
    }

    return true;


    короче разобрать вот это решение 