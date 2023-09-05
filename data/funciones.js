// Creacion dinamica de tarjetas (index, upcoming, past)
function creadorTarjetas(objeto){
  const contenedorTarjetas = document.getElementById('mainTarjetas');
  for(let tarjeta of objeto.events){
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
  return contenedorTarjetas;
}

//Creacion dinamica de Checkouts (index, upcoming, past)
function creadorCheckouts(objeto){
  const contenedorChkout = document.getElementById('checkouts');
  let arrayCategory = objeto.events.map(element => ({
    _id: element._id,
    category: normalizar(element.category)
  }));
  let arrayListo = borrarDuplicados(arrayCategory).sort((a, b) => a.category.localeCompare(b.category));
  for(let checkout of arrayListo){
    let chkout =
    `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="${checkout._id}" value="option1">
      <label class="form-check-label" for="${checkout._id}">${checkout.category}</label>
    </div>`
    contenedorChkout.innerHTML += chkout;
  }
  return contenedorChkout;
}

//funcion para quitar espacios y sacar mayusculas
function normalizar(array){
  return array.toLowerCase().trim();
}

//funcion para eliminar elementos duplicados (debe usarse posterior a normalizar())
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

// Creacion dinamica de tarjetas para details.html




//funcion para capitalizar iniciales de un array de strings
// function capitalizarCategorias(array){
//   return array.map(element => {
//     // Dividir la cadena en palabras
//     const words = element.split(' ');
//   });
// }