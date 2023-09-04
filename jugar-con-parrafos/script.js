
//Executa la funcio quan ja s'ha carregat la pagina:  window.addEventListener('load', function(){
//executa la funció quan es carrega el DOM (Ni objectes ni fitxers .js ...)


//HIDE PARAGRAPHS WITH QUERY SELECTOR (only inside main div)
document.addEventListener('DOMContentLoaded', function(){
    
    const parrafos = document.querySelectorAll("div p")
    
        for(let index = 0; index < parrafos.length; index ++) {
            const element = parrafos[index];
            element.addEventListener('click', function(e){
                e.target.style.display='none'
            })
        }
})




/* HIDE ALL PARAGRAPHS 
document.addEventListener('DOMContentLoaded', function(){
    
    const parrafos = document.getElementsByTagName("p")
    
        for(let index = 0; index < parrafos.length; index ++) {
            const element = parrafos[index];
            element.addEventListener('click', function(e){
                e.target.style.display='none'


            })
        }
})
*/


/*
function hide(el){
    el.style.display = 'none'
}
*/