const eventsJson = [
    {
        eventID: 1,
        eventName: "Graffiti",
        eventType: "Arte Urbano",
        description: "TV Boy realizará un mural en defensa de los ataques homófobos ocurridos en el mes de Junio",
        img: "./img/Graffitti.jpeg",
        location: "Carrer Sant Pere més Baix, 70, 08003, Barcelona",
        locationHtml: "https://goo.gl/maps/BeF9NBvyn8jmjHvM7",
        startingDate: "12/08/2023",
        finishingDate: "12/08/2023",
        startingTime: "19:00",
        finishingTime: "22:00"
    },
    {
        eventID: 2,
        eventName: "Exposició Parc Ciutadella",
        eventType: "Cultural",
        description: "Exposición de obras de diferentes artistas vinculadas al constante cambio de la cultura",
        img: "./img/Exposicio.jpg",
        location: "Passeig de Picasso, 21, 08003, Barcelona",
        locationHtml: "https://goo.gl/maps/rqxjMRnSX2uufEFG8",
        startingDate: "10/08/2023",
        finishingDate: "13/08/2023",
        startingTime: "10:00",
        finishingTime: "20:00"
    },
    {
        eventID: 3,
        eventName: "Llums BCN",
        eventType: "Art",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "./img/Llums.png",
        location: "Poblenou, 08018, Barcelona",
        locationHtml: "https://goo.gl/maps/oFo1ft8AueihjdZR6",
        startingDate: "03/02/2023",
        finishingDate: "05/02/2023",
        startingTime: "18:00",
        finishingTime: "23:00"
    },
    {
        eventID: 4,
        eventName: "La danza toma la calle",
        eventType: "Danza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "./img/dansa.png",
        location: "Plaza Orfila, 08030, Barcelona",
        locationHtml: "https://goo.gl/maps/kkxYhubvdsLjJDAv7",
        startingDate: "29/09/2023",
        finishingDate: "29/09/2023",
        startingTime: "17:00",
        finishingTime: "19:00"
    },
    {
        eventID: 5,
        eventName: "Concierto Tarmac",
        eventType: "Rock",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./img/rock.jpg",
        location: "Plaça de Sant Pere, 1 08003, Barcelona",
        locationHtml: "https://goo.gl/maps/UMaML2HW7xMUdePn9",
        startingDate: "01/08/2023",
        finishingDate: "01/08/2023",
        startingTime: "22:00",
        finishingTime: "23:59"
    },
    {
        eventID: 6,
        eventName: "Teatre a la fresca",
        eventType: "Comedia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./img/teatre.jpg",
        location: "Plaça del Nen de la Rutlla, sn, 08041, Barcelona",
        locationHtml: "https://goo.gl/maps/SDZMEerc1PDU4ckF9",
        startingDate: "25/07/2023",
        finishingDate: "25/07/2023",
        startingTime: "21:00",
        finishingTime: "23:00"
    }
]

console.log(JSON.stringify(eventsJson))

function details(id){
    alert(id)
}


document.addEventListener('DOMContentLoaded', function(){
    eventsJson.forEach(event => {

        let cardContentHTML =
        `<div class="row">        
            <div class="col-md-4">
                <img src = "${event.img}" class="img-fluid rounded-start" alt="photo event">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">${event.eventName} - ${event.eventType}</h3>
                    <p class="card-text">${event.description}</p>
                    <a href=${event.locationHtml} target="_blank">${event.location}</a>
                    <p class="card-text"><small class="text-body-secondary">Date: ${event.startingDate} - ${event.finishingDate} Hour: ${event.startingTime} - ${event.finishingTime}</small></p>
                    <a href='#' class="btn btn-primary" onclick="details(${event.eventID})">Details</a>
                </div>
            </div>
        </div>`              
        

        let card= document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = cardContentHTML;

        document.getElementById('events').appendChild(card);
    })
})