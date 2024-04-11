//desde aquí llamamos a la api
const apiUrl= 'http://localhost:3000/rutinas';


const llamarApi= async()=>{
const response= await fetch(apiUrl);
const data= await response.json();
console.log(data)
let tabla= document.getElementById('rutinas')
data.forEach(e=>{
let cards=`
<div class="card">
            <p>${e.nombre}</p>
            <p>${e.series}</p>
            <p>${e.repeticiones}</p>
            <p>${e.descanso}</p>
            </div>
`
tabla.innerHTML+=cards;
})

};

llamarApi() 


// let cards=`
// <tr>
// <td>${e.id}</td>
// <td>${e.nombre}</td>
// <td>${e.series}</td>
// <td>${e.repeticiones}</td>
// <td>${e.descanso}</td>
// </tr>
// `