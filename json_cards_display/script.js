document.addEventListener("DOMContentLoaded", function () {
  //Crear constant amb la string Json
  const personsJson =
    '[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}]';
  //Transformar la constant en objecte js
  const persons = JSON.parse(personsJson);
  //console.log(persons);

  //-------------------------------------------------------

  //Crear constants dels elements bootstrap
  const container = document.getElementById("container1");
  const row = document.getElementById("row1");

  for (index = 0; index < persons.length; index++) {
    //Crear elements dins la card
    /*
const cardColumn = document.createElement("div")
row.appendChild(cardColumn);
*/

    const card = document.createElement("div");
    row.appendChild(card);
    card.className = "col-sm-3";

    const cardBody = document.createElement("div");
    card.appendChild(cardBody);

    const pic = document.createElement("img");
    cardBody.appendChild(pic);
    pic.src = persons[index].avatar;

    const nombre = document.createElement("h5");
    cardBody.appendChild(nombre);
    nombre.innerText =
      persons[index].first_name + " " + persons[index].last_name;

    const email = document.createElement("p");
    cardBody.appendChild(email);
    email.innerHTML = persons[index].email;
  }
});
