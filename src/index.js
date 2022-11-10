console.log("harley")

const title = document.getElementById("film-title")
const runTime = document.getElementById("run-Time")
const showTime = document.getElementById("show-time")
const description = document.getElementById("film-info")

async function request() {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    console.log(res)
    res.forEach((films) => createElemenet('img'),
        img.src = poster.image,
        filmlist.appendChild(img),

   
    



    
   
