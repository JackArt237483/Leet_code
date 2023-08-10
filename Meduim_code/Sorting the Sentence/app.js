// задача на сортировку предложений - Sorting the Sentence
// задача на то чтобы убрат не нужные индесы мз строки
// и вернут норм сроку

const s = "is2 sentence4 This1 a3"

function sortSentenses(s) {

  const words = s.split(" ")
  const sort = words.sort()
  const removeNum = sort.map(indNum => indNum.slice(0,-1))
  const endArray = removeNum.join(' ')

  return endArray
}

console.log(sortSentenses(s))



/*
 1)У тибя есть функция  у которой есть просто параметр
 s то ест сама строка c которой тебе нужно
 взять и убрать не нужные индексы
 2_const words = s.split(" ") сразу вот здесь ты берешь строку
 разбиваешь на массив который ты потом будешьт использвать
 3___  const indexArr = words.map((word,index) => `${word}${index + 1}`)
 потом ты берешь и создаешь на основе старого массива  новый но уже
 с индесацией каждого индкса в массиве
 (word,index) => `${word}${index + 1}`) то есть вот здесь ты просто
 берешь и при помощи шаблонных строк ${word}${index + 1}
 индексируешь каждое слово по индексу в массиве
 {index + 1} и пишешь вот так чтобы индексы начиналист не с нуля
 а с одного
 4___ const sort = indexArr.sort()вот здесь получается ты просто берешь
 и сортируешь массив по алфавиту потому что
 изначально метод sort все сортирует по алфивиту а значит все слова он возьмет
 и отсортирует по алфавиту
 5__ const removeNum = sort.map(indNum => indNum.slice(0,-1)) вот здесь ты получается
 берешь здесь ты берешь уже полностью отсортированные массив на основе старого
 создаешь новый и sort.map(indNum => indNum.slice(0,-1))
 indNum.slice(0,-1) и излекаешь подстроку с начаоа индекса каждого слова
 и удаляешь послдений индекс то есть индексацию вот этой строки
 6___const endArray = removeNum.join(' ')
   вот ты просто превращаешь массив в строку
  return endArray а здесь ты возращешь просто вот строку
  This1 a3 is2 sentence4 решение эффективно но остаются вот эти строчки так нельзя
  а так классное решение
*/

function restoreSentence(s) {
  const wordsWithIndexes = s.split(' ');
  const wordMap = {};

  wordsWithIndexes.forEach((wordWithIndex) => {
    const match = wordWithIndex.match(/(\D+)(\d+)/);
    if (match) {
      const [, word, index] = match;
      wordMap[index] = word;
    }
  });

  const restoredWords = [];
  for (let i = 1; i <= wordsWithIndexes.length; i++) {
    restoredWords.push(wordMap[i]);
  }

  const restoredSentence = restoredWords.join(' ');
  return restoredSentence;
}

const shuffledSentence = "sentence4 a3 is2 This1";
const originalSentence = restoreSentence(shuffledSentence);
console.log(originalSentence);  
