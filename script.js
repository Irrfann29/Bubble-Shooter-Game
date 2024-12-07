let rep = "";
let ranNum = Math.floor(Math.random() * 10)
for (let i = 1 ; i<= 120 ; i++){
    ranNum = Math.floor(Math.random() * 10)
    rep += `<h3 id="numbers">${ranNum}</h3>`
}
document.querySelector("#mainSection").innerHTML = rep ;