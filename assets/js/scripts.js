// ====== APIS - fetch ======

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
//         .then((respuesta) => {
//             return respuesta.json()
//         })

//         .then((datos) => {
//             console.log(datos.provincias);
//             let listadoProvincias = document.getElementById('listadoProvincias');
//             let formProvincias = document.getElementById('formProvincias');
//             datos.provincias.forEach((provincia) => {
//                 listadoProvincias.innerHTML += `<li>${provincia.id} -- ${provincia.nombre} </li>`;
//                 formProvincias.innerHTML += `<option value="${provincia.id}">${provincia.nombre}</option>`;
//             })
//         })

//     fetch('https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json')
//         .then((reply) => {
//             return reply.json()
//         })

//         .then((data) => {
//             console.log(data.regiones);
//             let listadoRegiones = document.getElementById('listadoRegiones');
//             let formRegiones = document.getElementById('formRegiones')
//             data.regiones.forEach((region) => {
//                 listadoRegiones.innerHTML += `<li>${region.region}</li>`;
//                 formRegiones.innerHTML += `<option value="${region.region}">${region.region}</option>`;
//             })
//         })
// })

// ====== API async ======

async function buscarProvincias() {
    try {
        let provinciasJson = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')

        let datos = await provinciasJson.json();
        let listadoProvincias = document.getElementById('listadoProvincias');
        let formProvincias = document.getElementById('formProvincias');

        datos.provincias.forEach((provincia) => {
            listadoProvincias.innerHTML += `<li>${provincia.id} -- ${provincia.nombre} </li>`;
            formProvincias.innerHTML += `<option value="${provincia.id}">${provincia.nombre}</option>`;
        });
    }
    catch (error) {
        console.log('¡Ha ocurrido un error! ' + error.message);
    }
};

async function buscarRegiones() {
    try {
        let regionesJson = await fetch('https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json')

        let data = await regionesJson.json();
        let listadoRegiones = document.getElementById('listadoRegiones');
        let formRegiones = document.getElementById('formRegiones')
        data.regiones.forEach((region) => {
            listadoRegiones.innerHTML += `<li>${region.region}</li>`;
            formRegiones.innerHTML += `<option value="${region.region}">${region.region}</option>`;
        })
    }
    catch (error) {
        console.log('¡Ha ocurrido un error! ' + error.message);
    }
};

buscarProvincias();
buscarRegiones();

// ====== API Async Await ======

async function usuarios(){
    try {
        let usuariosJson = await fetch('https://randomuser.me/api/?results=8');
        console.log(usuariosJson);

        let usuarios = await usuariosJson.json();
        console.log(usuarios.results);

        let listado = document.querySelector('.listado');

        usuarios.results.forEach((usuario) => {
            listado.innerHTML += `
            <article class="col-12 col-md-6 col-lg-3">
            <img src="${usuario.picture.large}" alt="${usuario.name.first}">
            <h5>${usuario.name.first} ${usuario.name.last}</h5>
        </article>
            `;
        })
        
    } catch (error) {
        console.log('¡Ha ocurrido un error!');
        
    }
}

usuarios();