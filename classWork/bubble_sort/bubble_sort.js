const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Если текущий элемент больше следующего
      if (arr[j] > arr[j + 1]) {
        // Меняем их местами с помощью деструктуризации
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const myArray = [33, 245, 1, 15, 122, 5, 65, 90];
console.log(bubbleSort(myArray)); // Вывод: [1, 5, 15, 33, 65, 90, 122, 245]