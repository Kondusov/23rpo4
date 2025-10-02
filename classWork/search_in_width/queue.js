function addElem(arr, val){
    arr.push(val)
    console.log(arr1)
}
function getElem(arr){
    if(arr.length > 0){
    arr.shift()
    console.log(arr)}
}
function get_and_set_Elem(arr, val){
    if(val != undefined){
        arr.push(val)
        console.log(arr)
    }else{
        if(arr.length > 0){
            arr.shift()
            console.log(arr)}
    }
}
let arr1 = [1,2]
get_and_set_Elem(arr1, 3)
get_and_set_Elem(arr1)
get_and_set_Elem(arr1)
// addElem(arr1, 10)
// addElem(arr1, 11)
// getElem(arr1)
// getElem(arr1)
// getElem(arr1)
// getElem(arr1)
// getElem(arr1)