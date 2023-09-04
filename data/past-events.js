//Creacion de objeto que tome elementos solo de eventos pasados
const eventosPasados = data;
eventosPasados.events = eventosPasados.events.filter(element => {
  return stringToDate(element.date) < stringToDate(eventosPasados.currentDate);
});

// Creacion dinamica de tarjetas (index, upcoming, past)
creadorTarjetas(eventosPasados)

//Creacion dinamica de Checkouts (index, upcoming, past)
creadorCheckouts(eventosPasados)
