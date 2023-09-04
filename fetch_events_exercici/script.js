function details(id) {
    alert(id)
}


fetch("https://f97d27e9-f75d-4bb9-b34c-abf8ffa5461d.mock.pstmn.io/g2/events/")
    .then(result => result.json())

    .then(objJson => {
        console.log(objJson)
        //por cada usuario
        //objJson.data.forEach(user => {
        for (let i = 0; i < objJson.length; i++) {
            esdeveniment = objJson[i]
            //console.log(esdeveniment)
            // Creamos la caja con los datos del usuario
            let cardContentHTML = `
                            <img src="${esdeveniment.img}" class="card-img-left" alt="foto evento">
                            <div class="card-body">
                                <h5 class="card-title">${esdeveniment.eventName} ${esdeveniment.eventType}</h5>
                                <p class="card-text">${esdeveniment.description}</p>
                                <a href="#" class="btn btn-primary" onclick="details(${esdeveniment.eventID})">Detalles</a>
                            </div>
                        `
            let card = document.createElement('div');
            card.className = 'card col-4 px-2';
            card.innerHTML = cardContentHTML
            // append card to div "esdeveniments" 
            document.getElementById('esdeveniments').appendChild(card);
        };
    })