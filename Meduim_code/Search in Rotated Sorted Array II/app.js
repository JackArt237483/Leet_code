// зполучется задача нужно найти целое чтсло в перевернутом массиве
// где часть его элементов будут в конце и в начале находиттся

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return true;
      }

      // Если левая половина отсортирована
      if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target < nums[mid]) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else {
          // Если правая половина отсортирована
          if (nums[mid] < target && target <= nums[right]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }

  return false;
}

const values1 = [2, 5, 6, 0, 0, 1, 2];
const target1 = 0;
console.log(search(values1, target1)); // Вывод: true



 /*
 1)У тебя есть функция с перевернутым массивом
 и target число котрое тебе нужно найти
 2)let left = 0 вот этот указатель будет слева
 те есть сначала индекса массива
   let right = nums.length - 1
   вот этот указатель будет с конца массива
   nums.length - 1 где указатель -1 это укзатель
   конечного индекса массива
  тут устанавливаетяс два указателя один слева
  другой спарва

 */