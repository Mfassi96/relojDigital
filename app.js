


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
  let numDia=fecha.getDate()
  let mes = fecha.getMonth();

  const dias = [
    "Dom",
    "Lun",
    "Mar",
    "Mier",
    "Jue",
    "Vie",
    "Sab",
  ];
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

  if (dia == 0) {
    elementoDia.innerHTML = dias[0] + " "+numDia+" / ";
  } else if (dia == 1) {
    elementoDia.innerHTML = dias[1] + " "+numDia+" / ";
  } else if (dia == 2) {
    elementoDia.innerHTML = dias[2] + " "+numDia+" / ";
  } else if (dia == 3) {
    elementoDia.innerHTML = dias[1] + " "+numDia+" / ";
  } else if (dia == 4) {
    elementoDia.innerHTML = dias[4] + " "+numDia+" / ";
  } else if (dia == 5) {
    elementoDia.innerHTML = dias[5] + " "+numDia+" / ";
  } else if (dia == 6) {
    elementoDia.innerHTML = dias[6] + " "+numDia+" / ";
  }

  if (mes == 0) {
    elementoMes.innerHTML = meses[0] + " / ";
  } else if (mes == 1) {
    elementoMes.innerHTML = meses[1] + " / ";
  } else if (mes == 2) {
    elementoMes.innerHTML = meses[2] + " / ";
  } else if (mes == 3) {
    elementoMes.innerHTML = meses[1] + " / ";
  } else if (mes == 4) {
    elementoMes.innerHTML = meses[4] + " / ";
  } else if (mes == 5) {
    elementoMes.innerHTML = meses[5] + " / ";
  } else if (mes == 6) {
    elementoMes.innerHTML = meses[6] + " / ";
  } else if (mes == 7) {
    elementoMes.innerHTML = meses[7] + " / ";
  } else if (mes == 8) {
    elementoMes.innerHTML = meses[8] + " / ";
  } else if (mes == 9) {
    elementoMes.innerHTML = meses[9] + " / ";
  } else if (mes == 10) {
    elementoMes.innerHTML = meses[10] + " / ";
  } else if (mes == 11) {
    elementoMes.innerHTML = meses[11] + " / ";
  }

  elementoAnio.innerHTML=fecha.getFullYear()


}

function establecerBorde(){
    let reloj=document.getElementById('hora');
    reloj.classList.add('ponerBorde')
}

function sacarBorde(){
    let reloj=document.getElementById('hora');
    reloj.classList.remove('ponerBorde')
}


setInterval(reloj, 1000);
setInterval(establecerBorde, 1000);
setInterval(sacarBorde, 2000);

