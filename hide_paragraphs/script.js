


window.addEventListener('click',function(){
    document.getElementsByTagName("button").item(0)
   .addEventListener('click', hidePs)
})

window.addEventListener('click',function(){
    document.getElementsByTagName("button").item(0)
   .addEventListener('click', showPs)
})


const parrafo = document.getElementsByTagName("p")
function hidePs(){
for(let i = 0; i<parrafo.length; i++){
  parrafo.item(i).style.display='none';
}
}

function showPs(){
for(let i = 0; i<parrafo.length; i++){
  parrafo.item(i).style.display='block';
}
}