const music = new Audio('https://matthieuskrzypczak.fr/sound/jungle.mp3');                     // Variable contenant la musique jungle
const musicStone = new Audio('https://matthieuskrzypczak.fr/sound/stone.mp3')
const musicPaper = new Audio('https://matthieuskrzypczak.fr/sound/paper.mp3');
const musicScissors = new Audio('https://matthieuskrzypczak.fr/sound/scissors.mp3');
const musicWin = new Audio('https://matthieuskrzypczak.fr/sound/win.mp3');
const musicLoose = new Audio('https://matthieuskrzypczak.fr/sound/loose.mp3');
const musicEquality = new Audio('https://matthieuskrzypczak.fr/sound/equality.mp3');
const eventRock = document.getElementById('rock');
const eventPaper = document.getElementById('paper');
const eventScissors = document.getElementById('scissors');
const computerRock = document.getElementById('game__computer__rock');
const computerPaper = document.getElementById('game__computer__paper');
const computerScissors = document.getElementById('game__computer__scissors');
const soundOn = document.getElementById('soundOn');                 
const soundOff = document.getElementById('soundOff');
const equalityResult = document.getElementById('game__top__equality');
const winResult = document.getElementById('game__top__win');
const looseResult = document.getElementById('game__top__loose');
const letsplay = document.getElementById('game__top__letsplay');
const computerResult = document.getElementById('game__computer__result');
const eventMoai = document.getElementById('game__computer__moai');
const rockPaperScissors = [
    "rock",
    "paper",
    "scissors"
];               
let sound = "tagada";
let playerChoise = "none";
let result = "none";

// Adversaire
function computer() {
    const rand = randomPFC();
    computerResult.style.display = "block";
    if (rand === "rock") {
        createRock();
    }
    else if (rand === "paper") {
        createPaper();
    }
    else if (rand === "scissors") {
        createScissors();
    }


    if (playerChoise === rand ) {
        equalityDisplay();
        result = "equality";
    }
    else if ((playerChoise === "rock" && rand === "scissors") || (playerChoise === "scissors" && rand === "paper") || (playerChoise === "paper") && (rand === "rock")) {
        winDisplay();
        result = "win";
    }
    else {
        looseDisplay();
        result = "loose";
    }
    return rand;
}

// Creation Pierre
function createRock(){
    computerScissors.style.display = "none"
    computerPaper.style.display = "none"
    computerRock.style.display = "block"
}

// Creation Feuille
function createPaper(){
    computerScissors.style.display = "none"
    computerRock.style.display = "none"
    computerPaper.style.display = "block"
}

// Creation Ciseaux
function createScissors(){
    computerRock.style.display = "none"
    computerPaper.style.display = "none"
    computerScissors.style.display = "block"
}


function looseDisplay() {
    if (sound === "ok"){
        letsplay.style.display = "none";
        equalityResult.style.display = "none";
        looseResult.style.display = "block";
        winResult.style.display = "none";
        computerResult.style.backgroundColor = "greenyellow";
        // musicLoose.play();
    }
    letsplay.style.display = "none";
    equalityResult.style.display = "none";
    looseResult.style.display = "block";
    winResult.style.display = "none";
    computerResult.style.backgroundColor = "greenyellow";    
}

function winDisplay() {

    if (sound === "ok"){
        // musicWin.play();
        letsplay.style.display = "none";
        equalityResult.style.display = "none";
        looseResult.style.display = "none";
        winResult.style.display = "block";
        computerResult.style.backgroundColor = "red";  
    }
    letsplay.style.display = "none";
    equalityResult.style.display = "none";
    looseResult.style.display = "none";
    winResult.style.display = "block";
    computerResult.style.backgroundColor = "red";  

}

function equalityDisplay() {
    if (sound === "ok"){
        // musicEquality.play();
        letsplay.style.display = "none";
        equalityResult.style.display = "block";
        looseResult.style.display = "none";
        winResult.style.display = "none";
        computerResult.style.backgroundColor = "blue";  
    }
    letsplay.style.display = "none";
    equalityResult.style.display = "block";
    looseResult.style.display = "none";
    winResult.style.display = "none";
    computerResult.style.backgroundColor = "blue";  
}

// Display Sound
function eventDisplaySound() {
    soundOn.addEventListener('click', handleClickSoundOn);
    soundOff.addEventListener('click', handleClickSoundOff);

}

function handleClickSoundOn() {
    if (sound === "ok") {
        sound = "no";
        iconNoSound();
    } else if (sound != "ok") {
    sound = "ok";
    iconSound();  
    }
}    


function handleClickSoundOff() {
    if (sound === "ok") {
        sound = "no";
        iconNoSound();
    } else if (sound != "ok") {
    sound = "ok";
    iconSound();       
    }
}

// Affiche l'icone son activé et enlève l'icone son désactivé
function iconSound() {
    soundOff.style.display = "none";
    soundOn.style.display = "block";    
}

// Affiche l'icone son désactivé et enlève l'icone son activé
function iconNoSound() {
    soundOn.style.display = "none";
    soundOff.style.display = "block";
    music.pause();
    music.currentTime = 0;
}

// Evenement Moai
function eventMoaiMusic() {
    eventMoai.addEventListener('click', handleEventMoai);
}

function handleEventMoai() {
    if (sound === "ok") {
    music.play();
    }

}


// background color Pierre
function backgroundRock() {
    if (result === "win") {
        eventRock.style.backgroundColor = "greenyellow";

    }
    else if (result === "loose") {
        eventRock.style.backgroundColor = "red";

    }
    else if (result === "equality") {
        eventRock.style.backgroundColor = "blue";

    }
}

// background color feuille
function backgroundPaper() {
    if (result === "win") {
        eventPaper.style.backgroundColor = "greenyellow";

    }
    else if (result === "loose") {
        eventPaper.style.backgroundColor = "red";

    }
    else if (result === "equality") {
        eventPaper.style.backgroundColor = "blue";

    }
}

// background color Ciseaux
function backgroundScissors() {
    if (result === "win") {
        eventScissors.style.backgroundColor = "greenyellow";

    }
    else if (result === "loose") {
        eventScissors.style.backgroundColor = "red";

    }
    else if (result === "equality") {
        eventScissors.style.backgroundColor = "blue";

    }
}

// Reset color
function resetColor() {
    eventScissors.style.backgroundColor = "";
    eventPaper.style.backgroundColor = "";
    eventRock.style.backgroundColor = "";
}

// Select Pierre
function selectRock() {
     if (sound === "ok"){
        playerChoise = "rock";
        musicStone.play()
        computer();
        backgroundRock()       
    }
    playerChoise = "rock";
    computer();
    backgroundRock()

}

// Select Feuille
function selectPaper() {
    if (sound === "ok"){
        playerChoise = "paper";
        musicPaper.play();
        computer();
        backgroundPaper()
    }
    playerChoise = "paper";
    computer();
    backgroundPaper()
}

// Select Cisceaux
function selectScissors() {
    if (sound === "ok"){
        playerChoise = "scissors";
        musicScissors.play();
        computer();
        backgroundScissors()
    }
    playerChoise = "scissors";
    computer();
    backgroundScissors()
}

// Enlève le bouton Start et fait apparaitre le plateau de jeux
function startGame() {
    const startButon = document.getElementById('startGame');
    startButon.style.display = "none";
    const openGame = document.getElementById('game');
    openGame.style.display = "block";
    eventMoaiMusic();
}

// Fonction d'évènement sur le choix du joueur
function gamePlayer() {
    eventRock.addEventListener('click', handleClickRock);
    eventPaper.addEventListener('click', handleClickPaper);
    eventScissors.addEventListener('click', handleClickScissors);
}

function handleClickRock() {
    resetColor();
    selectRock();
}

function handleClickPaper() {
    resetColor();
    selectPaper();
}

function handleClickScissors() {
    resetColor();
    selectScissors();
}


// Fonction d'évènement du popup qui demande si on souhaite le son
function playWithSound() {
    const eventWithSound = document.querySelector('.popup-sound__with');
    const eventWithoutSound = document.querySelector('.popup-sound__without');
    eventWithSound.addEventListener('click', handleClickWithSound);
    eventWithoutSound.addEventListener('click', handleClickWithoutSound);
}

// Fonction qui est appelé au click si on souhaite le son
function handleClickWithSound() {
    sound = "ok";
    startGameButon();
    iconSound();
}

// Fonction qui est appelé au click si on ne souhaite pas le son
function handleClickWithoutSound() {
    sound = "no";
    startGameButon();
    iconNoSound();
}

// Fonction d'évènement sur le bouton Start
function clickStart() {
    const eventStart = document.getElementById('music');
    eventStart.addEventListener('click', handleClickStart);
}

// Fonction qui est appelé au click du bouton start, Active ou non la musique
function handleClickStart() {
    if (sound === "ok"){
        startGame();
    }
    startGame();    
}

// Fonction qui enlève la fenêtre "popup" qui demande si on souhaite le son et fait apparaitre le bouton Start
function startGameButon () {
    const closePopupSound = document.getElementById('popup-sound');
    closePopupSound.style.display = "none";
    const startButon = document.getElementById('startGame');
    startButon.style.display = "block";
}

// Génère l'action de l'adversaire Pierre/Feuille/Ciseaux
function randomPFC() {
    let randGame = rockPaperScissors[(Math.random() * rockPaperScissors.length) |0];
    return randGame;
}


eventDisplaySound();
clickStart();
playWithSound();
gamePlayer();
