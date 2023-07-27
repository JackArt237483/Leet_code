//1) Задача для на сортировку имен по возрасту -- Sort people


const names = ["Alice", "Bob", "Eve"];
const heights = [165, 180, 170];

function sortNameByHeight(names,height) {
  const people = []
  for(let i = 0;i < names.length; i++){
    people.push({name: names[i], height: height[i]})
  }

  people.sort((a,b) => b.height - a.height )

  const sortPeople = people.map(person => person.name)

  return sortPeople
}

const result = sortNameByHeight(names,heights)
console.log(result)


/*1)Cначала ты создаешь просто функции обычную
  2)Эта функция принимает два масива один с именами
  3)Другой с росном людей
  4)Просто создаем отсортированный массив people
  5)Где у нас будет уже отсортированный массив
  6)и в нем будут  индексы в с обьектами
  7)for(let i = 0;i < names.length; i++)
  8)ВКРАТЦЕ ТЫ ПРОСТО ПРОБЕГАЕШЬ ПО ДВУМ МАССИВАМ
  9)ПРИ ПОМОЩИ for цикла и затем на каждой итерации
  10)Ты будешь добовлять обьеьект в массив people
    const name = names[i]
    const height = height[i]
    const persons = {name: name, height:height}
    people.push(persons)
    подробная запись как происходит добавление
    элементов в массив people
  11) people.sort((a,b) => b.height - a.height )
  12) просто запомни в этом условии происходит
  13) сортирвка по убыванию то есть болшие числа
  14) будут спередм а меньшые наоборот меньше
  15)const sortPeople = people.map(person => person.name)
  17)Эта запись гласит что ты сортируешь  уже новый
  18)массив без роста  а только именна
  19)и у ьебя на выходе получается новый массив
  20)people
*/