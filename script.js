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
            let over = document.querySelector("#container");
            over.innerHTML="";
            let gameOver = document.createElement("div");
            gameOver.id = "popUp";
            over.appendChild(gameOver);
            let mainMsg = document.createElement("h1");
            let scoreMsg = document.createElement("h3")
            mainMsg.innerHTML = "GameOver"
            scoreMsg.innerHTML=`Your Score Is ${score}`
            gameOver.appendChild(mainMsg)
            gameOver.appendChild(scoreMsg)
            
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
