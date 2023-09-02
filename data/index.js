// Creacion dinamica de tarjetas (index, upcoming, past)
const contenedorTarjetas = document.getElementById('mainTarjetas');

for(let tarjeta of data.events){
  let card = 
  `<div class="card col-12 col-sm-6 col-md-4 col-xl-3" id="tarjeta">
    <img src="${tarjeta.image}" class="card-img-top" alt="${tarjeta.name}">
    <div class="card-body">
      <h5 class="card-title">${tarjeta.name}</h5>
      <p class="card-text">${tarjeta.description}</p>
      <div class="card-footer d-flex justify-content-between">
        <p id="price">Price: $${tarjeta.price}</p>
        <a href="" class="btn btn-primary" id="botonDetalles">Details</a>
      </div>
    </div>
  </div>`;
  contenedorTarjetas.innerHTML += card;
}

//Creacion dinamica de Checkouts (index, upcoming, past)
const contenedorChkout = document.getElementById('checkouts');
let arrayCategory = data.events.map(element => ({
  _id: element._id,
  category: normalizar(element.category)
}));
let arrayListo = capitalizarCategorias(borrarDuplicados(arrayCategory).sort((a, b) => a.category.localeCompare(b.category)));

for(let checkout of arrayListo){
  let chkout =
  `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${checkout._id}" value="option1">
    <label class="form-check-label" for="${checkout._id}">${checkout.category}</label>
  </div>`
  contenedorChkout.innerHTML += chkout;
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

//funcion para capitalizar iniciales de un array de strings
function capitalizarCategorias(array){
  return array.map(element => {
    // Dividir la cadena en palabras
    const words = element.split(' ');
  });
}