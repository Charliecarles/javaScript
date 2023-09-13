window.addEventListener("load", function () {
  document.getElementById("exec").addEventListener("click", turnRed);

  const parrafo = document.querySelectorAll(".container h1, .container h2"); //Falta .container h3... etc

  function turnRed() {
    for (let index = 0; index < parrafo.length; index++) {
      if (parrafo.item(index).style.color =="black") {
        parrafo.item(index).style.color = "red";
      } else {
        parrafo.item(index).style.color = "black";
      }
    }
  }

  });



