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
    let timer = document.querySelector("#timer");
    let runTime = 11;
    var timeUp = setInterval(function () {

        if (runTime > 0) {
            runTime--;
            timer.textContent = runTime;
            
        }
        else{
            clearInterval(timeUp)
        }

    }, 1000);
}
function hitBtn(){
    let randomVal = Math.floor(Math.random()*10);
    document.querySelector("#hitBox").textContent = randomVal;

}



hitBtn()
ranVal()
timer()