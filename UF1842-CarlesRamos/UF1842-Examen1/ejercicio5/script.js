
document.addEventListener('DOMContentLoaded', function(){

    document.getElementsByTagName("button")
    .item(0)
    .addEventListener("click", deleteDom);
    
function deleteDom(){
    const elements = document.querySelectorAll(".container p, .container h4, .container div");
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index]
            element.remove();
        }
    }
})





