/*
const array = [1,2,3,4,5]

function printArray(){

    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }

}

printArray(array)
*/

function printArray(array, operador){
    for (let i = 0; i < array.length; i++)
        console.log(operador(array[i]))
    }

    printArray([1,2,3,4,5],function(e){
        return e*2
    })