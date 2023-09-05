//capturar informacion de la tarjeta
const queryString = location.search;
const parametros = new URLSearchParams(queryString);
const id = parametros.get("_id");
const evento = data.events.find(idEvento => idEvento._id == id);

//capturar info de la tarjeta clickeada, para poder reemplazar por informacion polar mas abajo
const contenedorTarjetas = document.getElementById('tarjetaDetails');
contenedorTarjetas.innerHTML = 
  `<div class="container">
    <div class="card">
      <div class="row g-0">
        <div class="col-6">
          <img src="${evento.image}" class="img-fluid w-100 h-100 rounded-start" alt="${evento.name}">
        </div>
        <div class="col-6">
          <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <p class="card-text">Category: ${evento.category}</p>
            <p class="card-text">Date: ${evento.date}</p>
            <p class="card-text">Capacity: ${evento.capacity}</p>
            <p class="card-text">Estimate: ${evento.estimate}</p>
            <p class="card-text">Assistance: ${evento.assistance}</p>
            <p class="card-text">Place: ${evento.place}</p>
            <p class="card-text">Price: ${evento.price}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;