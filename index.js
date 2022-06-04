var cuadros=document.getElementsByClassName('cuadros');
var turno=document.getElementById('Turno');
var turnoj1=true;

for(var i=0; i<cuadros.length; i++){
  cuadros[i].addEventListener("click", clickeado);
}

function clickeado() {
  if(turnoj1){
    turno.innerHTML="Turno del jugador 2";
  }
  else{
    turno.innerHTML="Turno del jugador 1";
  }
  turnoj1 = !turnoj1;
}
