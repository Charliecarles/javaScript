window.addEventListener('load',function (){
   const div= document.getElementById("main")
   
   let title
   for(let i = 1; i<=10; i++ ){
      title = document.createElement("h1")
      title.innerText = "Title" + i
      div.appendChild(title)
   }
   title = document.createElement("h1")
   title.innerText = "Title"
   div.appendChild(title)

})


//QUERY SELECTORS

window.addEventListener('load',function (){
   const div= document.querySelector("#main")
   
   let title
   for(let i = 1; i<=10; i++ ){
      title = document.createElement("h1")
      title.innerText = "Title" + i
      div.appendChild(title)
   }
   title = document.createElement("h1")
   title.innerText = "Title"
   div.appendChild(title)

   const titles = document.querySelectorAll("h1")
   titles.item(3).innerText="Changed!"

})