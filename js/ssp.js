function computerMotion(max) {
    let y=Math.floor(Math.random()*max)
    if (y==0) return "stone";
    if(y==1) return "scissors";
    if(y==2) return "paper";      //Функция для рандомного выбора компьютером
}
function humanMotion() {
    let h=prompt("stone or scissors or paper?"," ");
    h=h.toLowerCase();
    if (h=="stone") return "stone";
    if (h=="scissors") return "scissors";
    if (h=="paper") return "paper";   //Функция для выбора игрока
}
function playRound() {
    const hs=humanMotion();
    const cs=computerMotion(3);
    if(hs==cs) {alert("Draw, bro!");return "draw"};
    if(hs=="stone"&&cs=="scissors") {alert("YOOO, take it easy, you win!");
        return "hs"};
    if(hs=="scissors"&&cs=="paper") {alert("YOOO, take it easy, you win!");
        return "hs"};
    if(hs=="paper"&&cs=="stone") {alert("YOOO, take it easy, you win!");
        return "hs"};
    if(cs=="stone"&&hs=="scissors") {alert("HAHAHA, computer more intelligent!");
        return "cs"};
    if(cs=="scissors"&&hs=="paper") {alert("HAHAHA, computer more intelligent!");
        return "cs"};
    if(cs=="paper"&&hs=="stone") {alert("HAHAHA, computer more intelligent!");
        return "cs"};
}
function playGame() {
    let humanScore=0;
    let computerScore=0;
    while(humanScore<3&&computerScore<3) {          //Игра не закончится пока кто-то не наберёт 3 очка
        let result = playRound();
        if(result=="hs") humanScore+=1;
        if(result=="cs") computerScore+=1;
    };                                              
    if(humanScore>computerScore) alert("YOU WIN!");
    if(computerScore>humanScore) alert("YOU LOSE!");
}

function start() {
    let p = prompt("START? Yes or No?"," ");
    p=p.toLowerCase();
    if (p=="yes") {playGame();start()}
    else start();
}
start()