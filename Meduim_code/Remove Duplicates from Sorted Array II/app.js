// 1)Remove Duplicates from Sorted Array II - Удалить дубликаты из отсортированного массива II

const nums = [1,1,1,2,2,3]

function removeDublicate(nums) {
  if(nums.length >= 2) {
    return nums.length
  }

  let unicNumber = 2

  for(let i = 2; i < nums.length; i++) {
     if(nums[i] !== nums[unicNumber - 2]) {
       nums[unicNumber] = nums[i]
       unicNumber ++
     }
  }
  return unicNumber
}

const resultLength =removeDublicate(nums);
console.log("Конечная длина:", resultLength);
console.log(nums.splice(0, resultLength))

//1)Происходит проверка длинны масива то есть это означает
//что или в массиве нету дубликатов или всего два элемента
//то в таком случае нету удалять дубликаты и в таком случае 
//у нас функция возращает саму длину массива.Короче это проверка
// сработает только если у нас в массиве будет два элемента или 
// вобще ничего

//2)Сначала мы создаем новую переменую с уникальным индексом  
// 2 потому что у нас уже есть 2 уникальных элементов в массиве
// и в нее будем записывать уникальные элементы массива.И в дальнейшем
// будем unicNumber записывать уникальные элементы из массива.
//Начиная с значения 2 для writeIndex, мы гарантируем,
// что первые два элемента (индексы 0 и 1) уже заполнены уникальными значениями

//3)Мы начинает пробегаться по массиву с третьего элемента так как уже считается 
//что первый два элемена уникальны.
//Потом идет проверка текущих элеметов массива и предыдущих элементов массива
//являютяся ли отличным от предыдущих двух уникальных элементов 
// nums[unicNumber] = nums[i] потом мы берем и записываем текущее значение в массиве
// nums[unicNumber] в эту переменную.Если текущий элемент nums[i] не
// является дубликатом предыдущих двух уникальных элементов, то мы записываем его на позицию 
// nums[unicNumber]. unicNumber ++ Затем, мы увеличиваем значение unicNumber на 1, 
//чтобы указать на следующую позицию, куда можно записать следующий уникальный элемент.
//Это позволяет постепенно собирать только уникальные элементы в начале массива nums, сохраняя порядок их появления.
