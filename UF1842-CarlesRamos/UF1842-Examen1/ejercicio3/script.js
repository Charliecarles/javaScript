

const boton = document.getElementsByTagName("button").item(0)


    fetch("https://reqres.in/api/users")
    .then(result => result.json())

    .then(objJson => {
        console.log(objJson)
        
        //por cada usuario
        //objJson.data.forEach(user => {
        for (let i = 0; i < objJson.length; i++) {
            persona = objJson[i]
            //console.log(esdeveniment)
            // Creamos la caja con los datos del usuario
            let cardContentHTML = `
                            <div>
                            <p>"${persona.first_name} ,${persona.last_name}"</p>
                            <p>"${persona.email}</p>
                            </div>
                        `
            let info = document.createElement('div')
            info.innerHTML = cardContentHTML

            document.getElementById("users").appendChild(info);
        };
    })



