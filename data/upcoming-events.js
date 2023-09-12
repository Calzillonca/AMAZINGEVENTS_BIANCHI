const contenedorTarjetas = document.getElementById('mainTarjetas');
crearBuscador()
const buscador = document.getElementById('buscador')

function upcomingEvents(objeto){
  //Creacion de objeto que tome elementos solo de eventos futuros
  let eventosFuturos = objeto;
  eventosFuturos.events = eventosFuturos.events.filter(element => {
    return stringToDate(element.date) > stringToDate(eventosFuturos.currentDate);
  });
  let eventosFuturosBi = eventosFuturos.events;

  creadorTarjetas(eventosFuturosBi)

  creadorCheckouts(eventosFuturos)
  const checkbox = Array.from(document.getElementsByClassName('form-check-input'))

  buscador.addEventListener('input', () =>{
    todosLosFiltros(eventosFuturosBi)
  })


  checkbox.forEach(element => {
    element.addEventListener('change', ()=>{
      todosLosFiltros(eventosFuturosBi)
    })
  });
  
}





