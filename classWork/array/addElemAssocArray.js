function addElem(key){
    if(price[key]){
        console.log('Элемент '+ key +' уже существует!');
    }
    else{price.key = val; }
}
let price = {
    'apple': 100,
    'melon': 80
}
addElem('apple');
addElem('banana');
console.log(price);