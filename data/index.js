const contenedorTarjetas = document.getElementById('mainTarjetas');
crearBuscador()
const buscador = document.getElementById('buscador')

function index(objeto){
  console.log(objeto);
  let eventosActuales = objeto;
  let eventosActualesBi = eventosActuales.events;

  
  creadorTarjetas(eventosActualesBi)

  creadorCheckouts(eventosActuales)
  const checkbox = Array.from(document.getElementsByClassName('form-check-input'))

  buscador.addEventListener('input', () =>{
    todosLosFiltros(eventosActualesBi)
  })


  checkbox.forEach(element => {
    element.addEventListener('change', ()=>{
      todosLosFiltros(eventosActualesBi)
    })
  });
  console.log(eventosActuales)
}

