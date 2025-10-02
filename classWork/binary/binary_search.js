function binarySearch(arr, target) {
  let left = 0; // Левая граница поиска (индекс первого элемента)
  let right = arr.length - 1; // Правая граница поиска (индекс последнего элемента)

  while (left <= right) {
    // Находим середину массива
    const middle = Math.floor((left + right) / 2);

    // Получаем значение среднего элемента
    const middleValue = arr[middle];

    // Если средний элемент равен искомому значению, возвращаем его индекс
    if (middleValue === target) {
      return middle;
    }

    // Если искомое значение больше среднего, то оно находится в правой половине
    if (target > middleValue) {
      left = middle + 1; // Сдвигаем левую границу
    } else {
      // Иначе, искомое значение меньше среднего и находится в левой половине
      right = middle - 1; // Сдвигаем правую границу
    }
  }

  // Если цикл завершился, а значение не найдено, возвращаем -1
  return -1;
}

// Пример использования:
const sortedArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const targetValue = 30;

const index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
  console.log(`Значение ${targetValue} найдено по индексу: ${index}`); // Выведет: Значение 30 найдено по индексу: 5
} else {
  console.log(`Значение ${targetValue} не найдено в массиве`);
}

const anotherTarget = 100;
const anotherIndex = binarySearch(sortedArray, anotherTarget);
if (anotherIndex !== -1) {
  console.log(`Значение ${anotherTarget} найдено по индексу: ${anotherIndex}`);
} else {
  console.log(`Значение ${anotherTarget} не найдено в массиве`); // Выведет: Значение 100 не найдено в массиве
}