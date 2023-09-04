window.addEventListener("DOMContentLoaded", function () {
    const cajaBlanca = document.querySelector("footer div")

    cajaBlanca.addEventListener('click', function(e){
        let nombre = window.prompt("Como te llamas?")
        console.log(nombre)
        while(nombre == ''){
            window.prompt("Como te llamas?")
        }
            window.confirm("Seguro que " + nombre + " es tu nombre?")
        
        document.querySelector("footer div").innerHTML=("Hola " + nombre +"!")
        window.alert("	٩(◕‿◕｡)۶ Hola " + nombre + "! 	٩(◕‿◕｡)۶")
    })

})