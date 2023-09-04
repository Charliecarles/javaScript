window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("footer div").addEventListener("click", countClicks);
});

let click = 0;

function countClicks() {
  const element = document.querySelector("footer div");
  //console.log(element.innerText)
  element.innerText = ++ click; // sumo 1 i retorno el valor 
}
