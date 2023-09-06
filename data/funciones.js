// Creacion dinamica de tarjetas (index, upcoming-events, past-events)
function creadorTarjetas(objeto){ 
  const contenedorTarjetas = document.getElementById('mainTarjetas');
  contenedorTarjetas.innerHTML = ``;
  if(objeto.length == 0){
    contenedorTarjetas.innerHTML = '<h2>No related events found<h2>'
    return;
  }
  for(let tarjeta of objeto){
    let card = 
    `<div class="card col-12 col-sm-6 col-md-4 col-xl-3" id="tarjeta">
      <img src="${tarjeta.image}" class="card-img-top" alt="${tarjeta.name}">
      <div class="card-body">
        <h5 class="card-title">${tarjeta.name}</h5>
        <p class="card-text">${tarjeta.description}</p>
        <div class="card-footer d-flex justify-content-between">
          <p id="price">Price: $${tarjeta.price}</p>
          <a href="details.html?_id=${tarjeta._id}" class="btn btn-primary" id="botonDetalles">Details</a>
        </div>
      </div>
    </div>`;
  contenedorTarjetas.innerHTML += card;
  }
}

//Creacion dinamica de Checkouts (index, upcoming-events, past-events)
function creadorCheckouts(objeto){
  const contenedorChkout = document.getElementById('checkouts');
  let arrayCategory = objeto.events.map(element => ({
    _id: element._id,
    category: normalizar(element.category)
  }));
  let arrayListo = borrarDuplicados(arrayCategory).sort((a, b) => a.category.localeCompare(b.category));
  for(let checkout of arrayListo){
    let chkout =
    `<div class="form-check form-check-inline" id="chk">
      <input class="form-check-input" type="checkbox" id="${checkout._id}" value="${checkout.category}">
      <label class="form-check-label" for="${checkout._id}">${checkout.category}</label>
    </div>`
    contenedorChkout.innerHTML += chkout;
  }
  return ;
}

//Creacion de barra de busqueda
function crearBuscador(){
  const contenedorBuscador = document.getElementById('contendorSearch')
  let card = 
    `<div class="container-fluid justify-content-end">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Find your event!!" aria-label="Search" value="" id="buscador">
      </form>
    </div>`;
  contenedorBuscador.innerHTML = card;
}

//funcion para quitar espacios y sacar mayusculas
function normalizar(array){
  return array.toLowerCase().trim();
}

//funcion para eliminar elementos duplicados (debe usarse despues de normalizar())
function borrarDuplicados(array){
  let categorias = new Set();
  let arrayMuestra = [];
  array.forEach(element => {
    if(!categorias.has(element.category)){
      categorias.add(element.category)
      arrayMuestra.push(element)
    }
  });
  return arrayMuestra;
}

//tranformacion de string a Date
function stringToDate(fecha){
  let diaActual = new Date(fecha);
  return diaActual;
}

function filtrarPorTexto(array, texto){
  let arrayFiltrado = array.filter(elemento => elemento.name.trim().toLowerCase().includes(texto.trim().toLowerCase())); 
  return arrayFiltrado;
}

function filtrarPorCheckbox(arrayEventos){
  let checkboxes = Array.from(document.getElementsByClassName('form-check-input'))
  let checkboxesActivos = checkboxes.filter(elemento => elemento.checked)
  let valores = checkboxesActivos.map(elemento => elemento.value)
  if(valores.length == 0){
    return arrayEventos;
  }
  let arregloFiltrado = arrayEventos.filter(element => valores.includes(normalizar(element.category)))
  return arregloFiltrado;
  
}

function todosLosFiltros(arrayEventos){
  let filtro1 = filtrarPorCheckbox(arrayEventos)
  let filtro2 = filtrarPorTexto(filtro1, buscador.value);
  creadorTarjetas(filtro2);
}


