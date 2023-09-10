const contenedorTarjetas = document.getElementById('mainTarjetas');
crearBuscador()
const buscador = document.getElementById('buscador')

function pastEvents(objeto){
  //Creacion de objeto que tome elementos solo de eventos pasados
  let eventosPasados = objeto;
  eventosPasados.events = eventosPasados.events.filter(element => {
    return stringToDate(element.date) < stringToDate(eventosPasados.currentDate);
  });
  let eventosPasadosBi = eventosPasados.events;

  creadorTarjetas(eventosPasadosBi)

  creadorCheckouts(eventosPasados)
  const checkbox = Array.from(document.getElementsByClassName('form-check-input'))

  buscador.addEventListener('input', () =>{
    todosLosFiltros(eventosPasadosBi)
  })


  checkbox.forEach(element => {
    element.addEventListener('change', ()=>{
      todosLosFiltros(eventosPasadosBi)
    })
  });

}
