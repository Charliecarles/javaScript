window.addEventListener("load", function () {
  document.getElementById("butt").addEventListener("click", hidePs);
});

const parrafo = document.getElementsByTagName("p");

function hidePs() {
  for (let i = 0; i < parrafo.length; i++) {
    if (parrafo.item(i).style.display == "none") {
      parrafo.item(i).style.display = "block";
    } else {
      parrafo.item(i).style.display = "none";
    }
  }
}
