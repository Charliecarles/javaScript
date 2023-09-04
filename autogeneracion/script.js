window.addEventListener("DOMContentLoaded", function () {
  //Creo constants pel div main i quotes
  const divmain = document.getElementById("main");
  const divquotes = document.getElementById("quotes");

  //Creo un <h1> pel titol
  let title = document.createElement("h1");
  title.innerText = "Autogeneración de HTML";
  divmain.appendChild(title);

  //Creo un paragraf on apareixeran les quotes
  let parrafomain = document.createElement("p");
  parrafomain.innerText =
    "Al clicar en el siguiente botón aparecerán mis citas favoritas";
  divmain.appendChild(parrafomain);

  //Creo un botó per fer apareixer les quotes
  let boton = this.document.createElement("button");
  boton.innerText = "Next quote";
  divmain.appendChild(boton);

  //Creo array de quotes
  let quotes = [
    "It's difficult to find happiness within oneself, but it is impossible to find it anywhere else. - Arthur Schopenhauer",
    "If I knew where I was going I would already be there. - The Smashing Pumpkins",
    "As you go through life, you've got to see the valleys as well as the peaks. - Neil Young",
    "Crickey! - Steve Irwin",
    "Realize that sleeping on a futon when you're 30 is not the worst thing. You know what's worse, sleeping in a king bed next to a wife you're not really in love with but for some reason you married, and you got a couple of kids, and you got a job you hate. You'll be laying there fantasizing about sleeping on a futon. There's no risk when you go after a dream. There's a tremendous amount of risk to playing it safe — Bill Burr",
  ];

  //Creo una funcio que em tregui una quote a cada click
  let index = 0;
  boton.addEventListener("click", function () {
//Si l'index sigui mes petit que la long. de l'array 
    if (index < quotes.length) {
//Creo un <p> i el penjo de divquotes
      let parrafoQuotes = document.createElement("p");
      divquotes.appendChild(parrafoQuotes);
//Escric una quote amb l'index que li toqui
      parrafoQuotes.innerHTML = quotes[index];
//Sumo 1 a l'index de l'array
      index++;
//Creo una funcio per esborrar el p actual i torna al principi del loop if
      boton.addEventListener("click", function () {
        parrafoQuotes.remove();
      });
      
    }
    
  });
});

/*
Crear (y asociar) un script que al abrir la página html haga lo siguiente:

1. Cree un elemento H1 conteniendo el texto "Autogeneración de HTML" dentro del div "main"
2. Siempre dentro del DIV "main", crear un parrafo y un botón: el parrafo tendrá que contener 
    "Al clicar en el siguiente botón aparecerán mis citas favoritas 
3. Crear un array que contenga por lo menos 6 distintas citas (ejemplo: "Be yourself; everyone else is already taken.― Oscar Wilde")
3. Haced que para cada click en el botón se cree un nuevo parrafo en el DIV "quotes". 
Cada parrafo creado tendrá que mostrar en orden cada una de las citas del array anterior.
*/
