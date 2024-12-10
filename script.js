var randomVal = 0;
var score = 0;
var runTime = 6;
var timeUp;

function ranVal() {
    let rep = "";
    let ranNum = Math.floor(Math.random() * 10)
    for (let i = 1; i <= 120; i++) {
        ranNum = Math.floor(Math.random() * 10)
        rep += `<h3 id="numbers">${ranNum}</h3>`
    }
    document.querySelector("#mainSection").innerHTML = rep;
}

function timer() {
    var runTime = 60;
    timeUp = setInterval(function () {
        if (runTime > 0) {
            runTime--;
            document.querySelector("#timer").textContent = runTime;   
        }
        else{
            clearInterval(timeUp);
            document.querySelector("#mainSection").innerHTML = `<h1>Game Over </h2>`
            document.querySelector("#mainSection").style.fontColor = "black"
        }
    }, 1000);
}
function hitBtn(){
    randomVal = Math.floor(Math.random()*10);
    document.querySelector("#hitBox").textContent = randomVal;
}
function incScore (){
    score+=5;
    document.querySelector("#incScore").textContent = score;
}

document.querySelector("#mainSection").addEventListener("click",function(detail){
    let match = Number(detail.target.innerHTML);
    if (randomVal === match){
        incScore();
        ranVal();
        hitBtn()   
    }   
})
timer()
hitBtn()
ranVal()
