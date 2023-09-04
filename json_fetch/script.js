function details(id) {
    alert(id)
}
const strJson = '{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}'
let objJson = JSON.parse(strJson)
console.log()
//por cada usuario
//objJson.data.forEach(user => {
for (let i = 0; i < objJson.data.length; i++) {
    user = objJson.data[i]
    // Creamos la caja con los datos del usuario
    let cardContentHTML = `
                            <img src="${user.avatar}" class="card-img-top" alt="foto usuario">
                            <div class="card-body">
                                <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                                <p class="card-text">${user.email}</p>
                                <a href="#" class="btn btn-primary" onclick="details(${user.id})">Detalles</a>
                            </div>
                        `
    let card = document.createElement('div');
    card.className = 'card col-4 px-2';
    card.innerHTML = cardContentHTML
    // append card to div "users" 
    document.getElementById('users').appendChild(card);
                            
};