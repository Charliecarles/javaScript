window.addEventListener("DOMContentLoaded", function(){

    const commonElements = [];
    
    function arrayCommon (array1, array2){
        for (let index = 0; index < array1.length; index++) {
            const element = array1[index];
            if (array2.includes(element)) {
                commonElements.push(element)
            }else{
            console.log("No way! Both parameters must be arrays")
             }
        }
        console.log(commonElements)
    }
arrayCommon([1,22,32,42,52],[1,3,4,5]);
})

