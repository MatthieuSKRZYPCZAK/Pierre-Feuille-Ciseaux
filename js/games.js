const app = {
    // DECLARATION DES VARIABLES
    music: new Audio('https://matthieuskrzypczak.fr/shifumi/sound/jungle.mp3'),                     // Variable contenant la musique jungle
    musicStone: new Audio('https://matthieuskrzypczak.fr/shifumi/sound/stone.mp3'),
    musicPaper: new Audio('https://matthieuskrzypczak.fr/shifumi/sound/paper.mp3'),
    musicScissors: new Audio('https://matthieuskrzypczak.fr/shifumi/sound/scissors.mp3'),
    eventRock: document.getElementById('rock'),
    eventPaper: document.getElementById('paper'),
    eventScissors: document.getElementById('scissors'),
    computerRock: document.getElementById('game__computer__rock'),
    computerPaper: document.getElementById('game__computer__paper'),
    computerScissors: document.getElementById('game__computer__scissors'),
    soundOn: document.getElementById('soundOn'),                 
    soundOff: document.getElementById('soundOff'),
    equalityResult: document.getElementById('game__top__equality'),
    winResult: document.getElementById('game__top__win'),
    looseResult: document.getElementById('game__top__loose'),
    letsplay: document.getElementById('game__top__letsplay'),
    computerResult: document.getElementById('game__computer__result'),
    eventMoai: document.getElementById('game__computer__moai'),
    rockPaperScissors: [
        'rock',
        'paper',
        'scissors'
    ],   
    sound: "tagada",
    playerChoise: "none",
    result: "none",  
    
    //Lance les fonctions utiles au lancement du jeux
    init: function() {
        app.eventDisplaySound();
        app.clickStart();
        app.playWithSound();
        app.gamePlayer();
    },

    // Enlève le bouton Start et fait apparaitre le plateau de jeux
    startGame: function() {
        const startButon = document.getElementById('startGame');
        startButon.style.display = "none";
        const openGame = document.getElementById('game');
        openGame.style.display = "block";
        app.eventMoaiMusic();
    },

    // Fonction d'évènement sur le bouton Start
    clickStart: function() {
        const eventStart = document.getElementById('music');
        eventStart.addEventListener('click', app.handleClickStart);
    },

    // Fonction qui est appelé au click du bouton start, Active ou non la musique
    handleClickStart: function() {
        if (app.sound === "ok"){
            app.startGame();
        }
        app.startGame();    
    },

    // Fonction qui enlève la fenêtre "popup" qui demande si on souhaite le son et fait apparaitre le bouton Start
    startGameButon: function() {
        const closePopupSound = document.getElementById('popup-sound');
        closePopupSound.style.display = "none";
        const startButon = document.getElementById('startGame');
        startButon.style.display = "block";
    },

    // Génère l'action de l'adversaire Pierre/Feuille/Ciseaux
    randomPFC: function() {
        let randGame = app.rockPaperScissors[(Math.random() * app.rockPaperScissors.length) |0];
        return randGame;
    },

    // Fonction d'évènement du popup qui demande si on souhaite le son
    playWithSound: function() {
        const eventWithSound = document.querySelector('.popup-sound__with');
        const eventWithoutSound = document.querySelector('.popup-sound__without');
        eventWithSound.addEventListener('click', app.handleClickWithSound);
        eventWithoutSound.addEventListener('click', app.handleClickWithoutSound);
    },

    // Fonction qui est appelé au click si on souhaite le son
    handleClickWithSound: function() {
        app.sound = "ok";
        app.startGameButon();
        app.iconSound();
    },

    // Fonction qui est appelé au click si on ne souhaite pas le son
    handleClickWithoutSound: function() {
        app.sound = "no";
        app.startGameButon();
        app.iconNoSound();
    },
    // Display Sound
    eventDisplaySound: function() {
        app.soundOn.addEventListener('click', app.handleClickSoundOn);
        app.soundOff.addEventListener('click', app.handleClickSoundOff);

    },

    handleClickSoundOn: function() {
        if (app.sound === "ok") {
            app.sound = "no";
            app.iconNoSound();
        } else if (app.sound != "ok") {
        app.sound = "ok";
        app.iconSound();  
        }
    },    


    handleClickSoundOff: function() {
        if (app.sound === "ok") {
            app.sound = "no";
            iconNoSound();
        } else if (app.sound != "ok") {
        app.sound = "ok";
        app.iconSound();       
        }
    },

    // Affiche l'icone son activé et enlève l'icone son désactivé
    iconSound: function() {
        app.soundOff.style.display = "none";
        app.soundOn.style.display = "block";    
    },

    // Affiche l'icone son désactivé et enlève l'icone son activé
    iconNoSound: function() {
        app.soundOn.style.display = "none";
        app.soundOff.style.display = "block";
        app.music.pause();
        app.music.currentTime = 0;
    },

    // Fonction d'évènement sur le choix du joueur
    gamePlayer: function() {
        app.eventRock.addEventListener('click', app.handleClickRock);
        app.eventPaper.addEventListener('click', app.handleClickPaper);
        app.eventScissors.addEventListener('click', app.handleClickScissors);
    },
    // Evenement Moai
    eventMoaiMusic: function() {
        app.eventMoai.addEventListener('click', app.handleEventMoai);
    },

    handleEventMoai: function() {
        if (app.sound === "ok") {
        app.music.play();
        }
    },   

    handleClickRock: function() {
        app.resetColor();
        app.selectRock();
    },

    handleClickPaper: function() {
        app.resetColor();
        app.selectPaper();
    },

    handleClickScissors: function() {
        app.resetColor();
        app.selectScissors();
    },

    // ADVERSAIRE
    computer: function () {
        const rand = app.randomPFC();
        app.computerResult.style.display = "block";
        if (rand === "rock") {
            app.createRock();
        }
        else if (rand === "paper") {
            app.createPaper();
        }
        else if (rand === "scissors") {
            app.createScissors();
        }   
        if (app.playerChoise === rand ) {
            app.equalityDisplay();
            app.result = "equality";
        }
        else if ((app.playerChoise === "rock" && rand === "scissors") || (app.playerChoise === "scissors" && rand === "paper") || (app.playerChoise === "paper") && (rand === "rock")) {
            app.winDisplay();
            app.result = "win";
        }
        else {
            app.looseDisplay();
            app.result = "loose";
        }
        return rand;
    },

    // Creation Pierre
    createRock: function () {
        app.computerScissors.style.display = "none"
        app.computerPaper.style.display = "none"
        app.computerRock.style.display = "block"
    },

    // Creation Feuille
    createPaper: function () {
        app.computerScissors.style.display = "none"
        app.computerRock.style.display = "none"
        app.computerPaper.style.display = "block"
    },

    // Creation Ciseaux
    createScissors: function () {
        app.computerRock.style.display = "none"
        app.computerPaper.style.display = "none"
        app.computerScissors.style.display = "block"
    },

    // Select Pierre
    selectRock: function() {
        if (app.sound === "ok"){
        app.playerChoise = "rock";
        app.musicStone.play()
        app.computer();
        app.backgroundRock()       
        }
    app.playerChoise = "rock";
    app.computer();
    app.backgroundRock()

    },

    // Select Feuille
    selectPaper: function() {
    if (app.sound === "ok"){
        app.playerChoise = "paper";
        app.musicPaper.play();
        app.computer();
        app.backgroundPaper()
    }
    app.playerChoise = "paper";
    app.computer();
    app.backgroundPaper();
    },

    // Select Cisceaux
    selectScissors: function() {
    if (app.sound === "ok"){
        app.playerChoise = "scissors";
        app.musicScissors.play();
        app.computer();
        app.backgroundScissors();
    }
    app.playerChoise = "scissors";
    app.computer();
    app.backgroundScissors()
    },

    looseDisplay: function() {
        if (app.sound === "ok"){
            app.letsplay.style.display = "none";
            app.equalityResult.style.display = "none";
            app.looseResult.style.display = "block";
            app.winResult.style.display = "none";
            app.computerResult.style.backgroundColor = "greenyellow";
        }
        app.letsplay.style.display = "none";
        app.equalityResult.style.display = "none";
        app.looseResult.style.display = "block";
        app.winResult.style.display = "none";
        app.computerResult.style.backgroundColor = "greenyellow";    
    },
    
    winDisplay: function() {
    
        if (app.sound === "ok"){
            app.letsplay.style.display = "none";
            app.equalityResult.style.display = "none";
            app.looseResult.style.display = "none";
            app.winResult.style.display = "block";
            app.computerResult.style.backgroundColor = "red"; 
        }
        app.letsplay.style.display = "none";
        app.equalityResult.style.display = "none";
        app.looseResult.style.display = "none";
        app.winResult.style.display = "block";
        app.computerResult.style.backgroundColor = "red";  
    
    },
    
    equalityDisplay: function() {
        if (app.sound === "ok"){
            app.letsplay.style.display = "none";
            app.equalityResult.style.display = "block";
            app.looseResult.style.display = "none";
            app.winResult.style.display = "none";
            app.computerResult.style.backgroundColor = "blue";  
        }
        app.letsplay.style.display = "none";
        app.equalityResult.style.display = "block";
        app.looseResult.style.display = "none";
        app.winResult.style.display = "none";
        app.computerResult.style.backgroundColor = "blue";  
    },

    // background color Pierre
    backgroundRock: function() {
        if (app.result === "win") {
            app.eventRock.style.backgroundColor = "greenyellow";

        }
        else if (app.result === "loose") {
           app.eventRock.style.backgroundColor = "red";

        }
        else if (app.result === "equality") {
            app.eventRock.style.backgroundColor = "blue";

        }
    },

    // background color feuille
    backgroundPaper: function() {
        if (app.result === "win") {
            app.eventPaper.style.backgroundColor = "greenyellow";
        }
        else if (app.result === "loose") {
            app.eventPaper.style.backgroundColor = "red";
        }
        else if (app.result === "equality") {
            app.eventPaper.style.backgroundColor = "blue";
        }
    },

    // background color Ciseaux
    backgroundScissors: function() {
        if (app.result === "win") {
            app.eventScissors.style.backgroundColor = "greenyellow";

        }
        else if (app.result === "loose") {
            app.eventScissors.style.backgroundColor = "red";

        }
        else if (app.result === "equality") {
            app.eventScissors.style.backgroundColor = "blue";

        }
    },

    // Reset color
    resetColor: function() {
        app.eventScissors.style.backgroundColor = "";
        app.eventPaper.style.backgroundColor = "";
        app.eventRock.style.backgroundColor = "";
    },

};

// Lance le jeux
app.init();
