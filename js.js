
var turn=0;
var azul = [];
var rojo = [];
var results;
var maquina = 0;
jugadas = 0;
var tog = document.getElementById('maq');
tog.checked = false



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        results = JSON.parse(this.response);
        console.log(this.response)
    }
};

xhttp.open("GET", "http://127.0.0.1:8887/gatoWins.json", true);
xhttp.send();

function turnAssign(e){
  var elem = document.getElementById(e);
  if(turn==0){
    rojo[rojo.length] = e.replace("cell", "");
    elem.classList.add("rojo");
    (rojo.length >= 3) ? isWinner(rojo):"";
    jugadas++;
    (maquina == 0) ? turn=1 : jugadaMaquina();
  }else{
    azul[azul.length] = e.replace("cell", "");
    elem.classList.add("azul");
    (azul.length >= 3) ? isWinner(azul): "";
    turn=0;
  }
}

function isWinner(clkd){
  win = 0;
  if(results){
    for(var r = 0; r < results.length; r++){
      if(win >= 3) break;
      win = 0;
      for(var c = 0; c < clkd.length; c++){
        if(results[r].includes(clkd[c])){
          win++;
          if(win == 3){
            won();
            break;
        }
      }
        }
        }
      }
  else{
    alert("No available service");
  }
}

function won(){
  document.getElementById("table").classList.add("noMoreClicks");
  //alert("Gana el "+ ((turn == 0) ? "rojo" : "azul"));
  alert("Ganaste!!!");
  location.reload();
}

function contraMaq(e){
  if(e.checked){
    maquina = 1;
    alert("Jugarás con la maquina, te toca primero, eres el rojo");
  }else{
    maquina = 0;
    alert("Jugarás contra tu amigo de a lado");
  }


}

function comenzar(e){
  document.getElementById("rad").classList.add("bye");
  e.classList.add("bye");
  document.getElementById("table").classList.add("hello");

}

function jugadaMaquina(){
  setTimeout(function(){
  var r;
  var click;
  do {
    if(jugadas < 9){
     r = Math.floor((Math.random() * 9) + 1);
     click = document.getElementById('cell'+r);
     style = window.getComputedStyle(click)
     p = style.getPropertyValue("pointer-events");
   }
 } while (p.toString() == "none" || p.toString() == "none");
  document.getElementById('cell'+r).classList.add("azul");
  azul[azul.length] = r;
  (azul.length >= 3) ? isWinner(azul): "";


  console.log(p);
}, 1000);
}
