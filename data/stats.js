function stats(objeto){
  let tableBigAssistance = [];
  let tableLowAssistance = [];
  let tableBigCapacity = [];
  let eventos = objeto.events;
  const tabla1 = document.getElementById("tabla1");
  const tabla2 = document.getElementById("tabla2");
  const tabla3 = document.getElementById("tabla3");

  tabla1.innerHTML = 
  `<tr>
    <td>Events with highest % of assistance</td>
    <td>Events with lowest % of assistance</td>
    <td>Events with larger capacity</td>
  </tr>`;

  tabla2.innerHTML =
  `<tr>
    <td>Categories</td>
    <td>Revenues</td>
    <td>Percentage of assistance</td>
  </tr>`;

  tabla3.innerHTML =
  `<tr>
    <td>Categories</td>
    <td>Revenues</td>
    <td>Percentage of assistance</td>
  </tr>`;

  //genera porcentajes de eventos pasados y futuros, y mantiene el nombre del evento
  let porcentajeEventos = filtrarPorcentaje(eventos)
  porcentajeEventos.sort((a,b) => a.percentage - b.percentage);

  let n = 5
  tableBigAssistance = porcentajeEventos.slice(-n).reverse();
  tableLowAssistance = porcentajeEventos.slice(0,n);
  tableBigCapacity = eventos.sort((a,b) => a.capacity - b.capacity).reverse().slice(0,n)
  
  let html1 = ``
  for (let i = 0; i<n; i++){
    html1 += `<tr>
              <td><b>${tableBigAssistance[i].name}</b> with <b>${tableBigAssistance[i].percentage}%</b></td>
              <td><b>${tableLowAssistance[i].name}</b> with <b>${tableLowAssistance[i].percentage}%</b></td>
              <td><b>${tableBigCapacity[i].name}</b> with <b>${tableBigCapacity[i].capacity}</b> of capacity</td>
            </tr>`;
  }
  tabla1.innerHTML += html1;


  let futuros = [];
  let eventosFuturos = {...objeto};
  futuros = eventosFuturos.events.filter(element => {
    return stringToDate(element.date) > stringToDate(eventosFuturos.currentDate);
  });

  let pasados = [];
  let eventosPasados = {...objeto};
  pasados = eventosPasados.events.filter(element => {
    return stringToDate(element.date) < stringToDate(eventosPasados.currentDate);
  });

  pasados.sort((a,b) => a.category.localeCompare(b.category))
  futuros.sort((a,b) => a.category.localeCompare(b.category))
  
  let categoriasFuturo = [... new Set(futuros.map(element => element.category))]
  categoriasFuturo.forEach(categoria => {
    let fila = {
      categorias: categoria,
      gananciasTotales: 0,
      percentAssist: 0
    }

    let totalGanancias = 0;
    futuros.filter(element => element.category == categoria).forEach(element => totalGanancias += calculoGanancias(element.estimate,element.price))
    fila.gananciasTotales = totalGanancias;

    let totalAsistencia = 0;
    let totalCapacidad = 0;
    futuros.filter(element => element.category == categoria).forEach(element => (totalAsistencia += element.estimate) && (totalCapacidad += element.capacity))
    fila.percentAssist = porcentaje(totalAsistencia, totalCapacidad);

    let html2 = ``
    html2 +=`<tr>
              <td><b>${fila.categorias}</b></td>
              <td>$${fila.gananciasTotales}</td>
              <td>${fila.percentAssist}%</td>                
            </tr>`
    tabla2.innerHTML += html2;
  });

  let categoriasPasado = [... new Set(pasados.map(element => element.category))]
  
  categoriasPasado.forEach(categoria => {
    let fila = {
      categorias: categoria,
      gananciasTotales: 0,
      percentAssist: 0
    }

    let totalGanancias = 0;
    pasados.filter(element => element.category == categoria).forEach(element => totalGanancias += calculoGanancias(element.assistance,element.price))
    fila.gananciasTotales = totalGanancias;

    let totalAsistencia = 0;
    let totalCapacidad = 0;
    pasados.filter(element => element.category == categoria).forEach(element => (totalAsistencia += element.assistance) && (totalCapacidad += element.capacity))
    fila.percentAssist = porcentaje(totalAsistencia, totalCapacidad);

    let html3 = ``
    html3 +=`<tr>
              <td><b>${fila.categorias}</b></td>
              <td>$${fila.gananciasTotales}</td>
              <td>${fila.percentAssist}%</td>                
            </tr>`
    tabla3.innerHTML += html3;
  });
  
  
  



  // futuros.sort((a,b) => a.category.localeCompare(b.category))
  // pasados.sort((a,b) => a.category.localeCompare(b.category))

  // console.log(futuros);
  // console.log(pasados);


  function filtrarPorcentaje(eventos){
    let arrayPorcentaje = eventos.map(evento =>{
      if(evento.assistance){
        return {
          name: evento.name,
          percentage: porcentaje(evento.assistance, evento.capacity)
        }
      }else{
        return {
          name: evento.name,
          percentage: porcentaje(evento.estimate, evento.capacity)
        }
      }
    });
    return arrayPorcentaje;
  }

  function porcentaje(cantPersonas, capacidad){
    return (cantPersonas/capacidad*100).toFixed(2);
  }
  
  function calculoGanancias(cantPersonas, precioEntrada){
    return cantPersonas*precioEntrada;
  }
}

