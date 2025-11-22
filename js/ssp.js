
const compm = document.getElementById("compm");
compm.textContent = "Computer motion:"
const buttons = document.getElementById("btn");
    const stbtn = document.createElement("button");
        stbtn.textContent = "Stone";
        stbtn.classList.add("btn");
    const scbtn = document.createElement("button");
        scbtn.textContent = "Scissors";
        scbtn.classList.add("btn");
    const ppbtn = document.createElement("button");
        ppbtn.textContent = "Paper";
        ppbtn.classList.add("btn");
buttons.appendChild(stbtn);
buttons.appendChild(scbtn);
buttons.appendChild(ppbtn);
const comp = document.getElementById("comp");
    const phrase1 = document.createElement("span");
        phrase1.textContent = "Computer:"
        comp.appendChild(phrase1);
    let score1 = document.createElement("span");
        score1.textContent = " 0";
        comp.appendChild(score1);
const player = document.getElementById("hum");
    const phrase2 = document.createElement("span");
        phrase2.textContent = "Player:"
        player.appendChild(phrase2);
    let score2 = document.createElement("span");
        score2.textContent = " 0";
        player.appendChild(score2);
const win = document.getElementById("win");
win.textContent = "" 
let humanScore = 0;
let computerScore = 0;
function computerMotion(max) {
    let y=Math.floor(Math.random()*max)
    console.log(y);
    if (y==0) return "stone";
    if(y==1) return "scissors";
    if(y==2) return "paper";      //Функция для рандомного выбора компьютером
}
function playRound(hs) {
    const cs=computerMotion(3);
    compm.textContent = "Computer motion:" + " " + cs;
    if(hs==cs) {return "draw"};
    if(hs=="stone"&&cs=="scissors") {return "hs"};
    if(hs=="scissors"&&cs=="paper") {return "hs"};
    if(hs=="paper"&&cs=="stone") {return "hs"};
    if(cs=="stone"&&hs=="scissors") {return "cs"};
    if(cs=="scissors"&&hs=="paper") {return "cs"};
    if(cs=="paper"&&hs=="stone") {return "cs"};
}
function winl(humScore,compScore) {
    if (humScore>compScore) win.textContent = "You win!";
    else win.textContent = "You lose!";
}
function playGame(hs) {        //Игра не закончится пока кто-то не наберёт 3 очка
    const result = playRound(hs);
    if(result=="hs") {humanScore+=1;score2.textContent=`${humanScore}`};
    if(result=="cs") {computerScore+=1;score1.textContent=`${computerScore}`};
    if (humanScore>=3||computerScore>=3) winl(humanScore,computerScore);
}
function handChoice(value) {
    return value.toLowerCase();
}
stbtn.addEventListener("click", () => playGame(stbtn.textContent.toLowerCase()))
scbtn.addEventListener("click", () => playGame(scbtn.textContent.toLowerCase()))
ppbtn.addEventListener("click", () => playGame(ppbtn.textContent.toLowerCase()))
const div = document.getElementById("reset");
const reset = document.createElement("button");
reset.textContent = "Reset";
reset.addEventListener("click", () => {
    win.textContent = "";
    humanScore=0;
    computerScore=0;
    score1.textContent = " 0";
    score2.textContent = " 0";
    compm.textContent = "Computer motion:"
})
div.appendChild(reset);