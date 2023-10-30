var timer = 60;
var hitrun = 0;
var score = 0;


function decscore(){
  score -=5
  document.querySelector("#scor").textContent = score
}


function incscore(){
score +=10
document.querySelector("#scor").textContent = score
}
function bubble() {
    var clutter = " ";
  for (var i = 1; i <= 372; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function timerun() {
  var tran = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(tran);
      document.querySelector("#pbtm").innerHTML = `<h1>Your Score: ${score}</h1>`;
    }
  }, 1000);
}

function hitclick() {
  hitrun = Math.floor(Math.random()*10);
  document.querySelector("#hitt").textContent = hitrun;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clcknum = Number(dets.target.textContent)
    console.log(clcknum)
    if(clcknum === hitrun){
        incscore();
        bubble();
        hitclick();
    }
    
})

bubble();
timerun();
hitclick();
