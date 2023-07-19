//1) ЗАДАЧА ПО РЕШЕНИЮ Non-overlapping Intervals
// Неперекрывающиеся интервалы

// const intervals = [[1,2],[2,3],[3,4],[1,3]]//ТУТ У ТЕБЯ МАССИВ КОТОРЫЙ БУДЕТ ПЕРЕДВАТЬСЯ
// // В КАЧЕСТВЕ АРГУМЕНТВ

// function deleteNumber(intervals){// создается функция с аргуметом вроде массива

//   if (!intervals.length) {
//     return 0;
//   }

//   // if(!intervals.length){
//   //   return 0 // здест идет такое условие если в массиве ничего нету то возращется 0
//   // }

//   intervals.sort((a, b) => a[1] - b[1]); // вот тут у тебя просхоит сортировка
//   // по двум значениям и их индкексам  то есть один индекс сравнивается с другим и
//   //сортируется по возрастанию

//   let count = 0 //переменная которая следить за количестом интервалом
//   // которые нужно удалить

//   let end = -Infinity //таким образом эта переменая нам позволяет
//   // отслеживать во время алгоритма не элементы которые не перекрываюся
//   //ВАЖНО ВЕРНИСЬ ПОТОМ К ЭТОМУ МОМЕНТУ !!!!!!!!!!

//  for(let i = 0; i > intervals.length; i++) {
//    if(intervals[i][0] >= end){ // это условие проверяет является ли начало текущего интервала
//     //больше или равно end
//     end = intervals[i][1] // если условие верно
//     //то текущяя точка в интервале обновляется
//    } else{
//       count ++ // count++; - Увеличиваем значение переменной count на 1. Это означает, что мы обнаружили перекрывающийся интервал и должны удалить один из интервалов.
//     }
//    }

//    return count
//  }

//  const num = deleteNumber()
//  console.log(num)



const intervals = [[1,2],[2,3],[3,4],[1,3]];

function deleteNumber(intervals) {
  if (!intervals.length) {
    return 0;
  }

  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let end = -Infinity;

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
    } else {
      count++;
    }
  }

  return count;
}

const num = deleteNumber(intervals);
console.log(num);
