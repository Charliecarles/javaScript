/*aaa*/

document.addEventListener('DOMContentLoaded', function(){

    document.getElementsByTagName("button")
    .item(0)
    .addEventListener("click", change);
    


const parrafos = document.querySelectorAll(".container p, h4, .container div");


function change(){
    for(let i=0; i < parrafos.length; i++){
        if(parrafos.item(i).style.display == "block" || parrafos.item(i).style.display == ""){
            parrafos.item(i).style.display = "none"
        } else{
            parrafos.item(i).style.display = "block"
        }
    }
}

})





