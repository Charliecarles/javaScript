window.addEventListener("load", function () {
  document.getElementsById("exec")
  .addEventListener("click", turnRed);
  });


  const parrafo = document.querySelectorAll
  (".container h1, .container h2");

  function turnRed() {
    for (let index = 0; index < parrafo.length; index++) {
      if (parrafo.item(i).style.color =="black") {
        parrafo.item(i).style.color = "red";
      } else {
        parrafo.item(i).style.color = "black";
      }
    }
  }
