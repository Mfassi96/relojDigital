function reloj() {
  let fecha = new Date();
  let horas = document.getElementById("horas");
  let minutos = document.getElementById("minutos");
  let seg = document.getElementById("seg");

  let elementoDia = document.getElementById("dia");
  let elementoMes = document.getElementById("mes");
  let elementoAnio = document.getElementById("anio");

  //escribiendo en el HTML los nuevos valores
  horas.innerHTML = fecha.getHours() + ":";
  minutos.innerHTML = fecha.getMinutes() + ":";
  seg.innerHTML = fecha.getSeconds();

  let dia = fecha.getDay();
  let numDia = fecha.getDate();
  let mes = fecha.getMonth();

  const dias = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  switch (dia) {
    case 0:
      elementoDia.innerHTML = dias[0] + " " + numDia + " / ";
      break;
    case 1:
      elementoDia.innerHTML = dias[1] + " " + numDia + " / ";
      break;
    case 2:
      elementoDia.innerHTML = dias[2] + " " + numDia + " / ";
      break;

    case 3:
      elementoDia.innerHTML = dias[3] + " " + numDia + " / ";
      break;

    case 4:
      elementoDia.innerHTML = dias[4] + " " + numDia + " / ";
      break;

    case 5:
      elementoDia.innerHTML = dias[5] + " " + numDia + " / ";
      break;

    case 6:
      elementoDia.innerHTML = dias[6] + " " + numDia + " / ";
      break;

    case 7:
      elementoDia.innerHTML = dias[7] + " " + numDia + " / ";
      break;
  }

  switch (mes) {
    case 0:
      elementoMes.innerHTML = meses[0] + " / ";
      break;

    case 1:
      elementoMes.innerHTML = meses[1] + " / ";
      break;

    case 2:
      elementoMes.innerHTML = meses[2] + " / ";
      break;

    case 3:
      elementoMes.innerHTML = meses[3] + " / ";
      break;

    case 4:
      elementoMes.innerHTML = meses[4] + " / ";
      break;

    case 5:
      elementoMes.innerHTML = meses[5] + " / ";
      break;

    case 6:
      elementoMes.innerHTML = meses[6] + " / ";
      break;

    case 7:
      elementoMes.innerHTML = meses[7] + " / ";
      break;

    case 8:
      elementoMes.innerHTML = meses[8] + " / ";
      break;

    case 9:
      elementoMes.innerHTML = meses[9] + " / ";
      break;

    case 10:
      elementoMes.innerHTML = meses[10] + " / ";
      break;

    case 11:
      elementoMes.innerHTML = meses[11] + " / ";
      break;
  }

  elementoAnio.innerHTML = fecha.getFullYear();
}

function establecerBorde() {
  let reloj = document.getElementById("hora");
  reloj.classList.add("ponerBorde");
}

function sacarBorde() {
  let reloj = document.getElementById("hora");
  reloj.classList.remove("ponerBorde");
}

setInterval(reloj, 1000);
setInterval(establecerBorde, 1000);
setInterval(sacarBorde, 2000);
