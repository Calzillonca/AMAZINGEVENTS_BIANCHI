//capturar info de la tarjeta clickeada, para poder reemplazar por informacion polar mas abajo


const contenedorTarjetas = document.getElementById('tarjetaDetails');
  let card = 
  `<div class="container">
    <div class="card">
      <div class="row g-0">
        <div class="col-6">
          <img src="Recursos_Amazing_Events_Task_1/costume_party.jpg" class="img-fluid w-100 h-100 rounded-start" alt="imagen">
        </div>
        <div class="col-6">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
contenedorTarjetas.innerHTML += card;