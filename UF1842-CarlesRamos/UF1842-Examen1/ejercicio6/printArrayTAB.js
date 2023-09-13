/* ------------------- SOLUCIO MEVA (cada element de l'array en paragrafs separats)----------------

document.addEventListener("DOMContentLoaded", function () {
  const cats = ["Chonky", "Princess", "Mr. Mittens", "Hobbes", "Kiki",
   "Bigotis", "Cueta", "Xiclet", "Pinxo", "Cargolet"];

  function printArrayTAB(arr) {
    for (let index = 0; index < arr.length; index++) {
      const arrSingle = arr[index];
      // console.log(cat[index])

      let cardContentHTML = `
        <p id="parrafo">${arrSingle}</p>
    `;
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = cardContentHTML;
      document.getElementById("textArray").appendChild(card);
    }
  }

  printArrayTAB(cats);
});
*/

//---------------------------SOLUCIO CHAT GPT-------------------------------------

document.addEventListener("DOMContentLoaded", function(){
  const cats = ["Chonky", "Princess", "Mr. Mittens", "Hobbes"];

  let catLine = ''; // Initialize an empty string to store cat names with tabs

  for (let index = 0; index < cats.length; index++) {
      const cat = cats[index];

      // Append the current cat name and a tab character to the catLine string
      catLine += cat + '\t';
  }

  // Create a single paragraph with the catLine content
  let cardContentHTML = `<p id="parrafo">${catLine}</p>`;

  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = cardContentHTML;
  document.getElementById("textArray").appendChild(card);
});

