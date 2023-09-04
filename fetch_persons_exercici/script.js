function details(id) {
    alert(id)
}
fetch("https://reqres.in/api/users")
    .then(result => result.json())
    .then(objJson => {
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
    })