function addElemHashTable(arr, key, val){
    if(arr[key]) console.log('Такой ключ уже существует');
    else{arr[key] = val}
    return arr;
}
let arr1 = {
    'apple': 100,
    'melon': 400,
    'banana': 700,
}
let arr2 = {
    'lemon': 200,
    'melon': 400,
    'banana': 700,
}
addElemHashTable(arr1, 'poteta', 40);
addElemHashTable(arr1, 'salate', 540);
addElemHashTable(arr1, 'poteta', 40);