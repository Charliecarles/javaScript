//MAKE TEXT BOLD WITH BUTTON
window.addEventListener("load", function () {
  document
    .getElementsByTagName("button")
    .item(0)
    .addEventListener("click", makeBold);
});

const parrafos = document.getElementsByClassName("test");
const bttn = document.getElementsByTagName("button").item(0); //També podem tractar la const com un array: document.getElementsByTagName("button")[0]

function makeBold() {
  for (let i = 0; i < parrafos.length; i++) {
    if (parrafos.item(i).style.fontWeight == "bold") {
      parrafos.item(i).style.fontWeight = "normal";
    } else {
      parrafos.item(i).style.fontWeight = "bold";
    }
  }
}

/*
    //TURN GREEN ONCE (it works)

    document.addEventListener('DOMContentLoaded', function(){
    
      const parrafos = document.getElementsByTagName("p")


    for(let i= 0; i < parrafos.length; i++){
      const element = parrafos[i];
      element.addEventListener('click', function(e){
        e.target.style.color = 'green'
      })
    }

  })
*/

window.addEventListener("DOMContentLoaded", function () {

  const ps = this.document.getElementsByTagName("p");
  
  for (let index = 0; index < ps.length; index++) {
    ps[index].addEventListener("click", function (e) {
      if (e.target.style.color == "green")
        e.target.style.color = "";
      else 
        e.target.style.color == "green";
    });
  }
});
