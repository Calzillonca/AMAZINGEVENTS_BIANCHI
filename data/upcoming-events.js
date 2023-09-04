//Creacion de objeto que tome elementos solo de eventos pasados
const eventosFuturos = data;
eventosFuturos.events = eventosFuturos.events.filter(element => {
  return stringToDate(element.date) > stringToDate(eventosFuturos.currentDate);
});

// Creacion dinamica de tarjetas (index, upcoming, past)
creadorTarjetas(eventosFuturos)

//Creacion dinamica de Checkouts (index, upcoming, past)
creadorCheckouts(eventosFuturos)
