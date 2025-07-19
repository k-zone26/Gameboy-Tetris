// Configuring size of game grid spaces
const gridSize = 30; 

// Variable Declaration
let movingPieces;
let landedPieces = [];
let lineFades = [];
let gridHandlers = [];

let currentScore = 0;
let currentLevel = 0;
let linesCleared = 0;

let ticks = 0;
let updateEvery = 15;
let updateEveryCurrent = 15;
let fallSpeed = gridSize * 0.5;
let pauseGame = false;
let gameOver = false;

// Configuring the game wall boundaries
const gameWallRight = 150;
const gameWallLeft = 450;

// Configuring the game piece colours
const pieceColours = [
    '#ff0000',
    '#fffb00',
    '#49ff00',
    '#00ffe0',
    '#0013ff',
    '#ff00d1',
    '#ff8f00',
];

// Beginning game setup
function initialiseGame() {
    createCanvas(600, 540);

    // Generate falling pieces
    movingPieces = new playPiece ();
    movingPieces.resetPiece();

    //Configure game font
    textFont('Ubuntu');
}

function draw() {
   // Configure game screen colours
   const colourDark = '#0d0d0d';
   const colourLight = '#304040';
   const colourBackground = '#e1eeb0';

   // Set background colour
   background(colourBackground);

   // Draw right side game information
   fill(25);
   noStroke();
   rect(gameWallRight, 0, 150, height);

   // Draw left side game information
   rect(0, 0, gameWallLeft, height);

   // Draw the score counter
   fill(colourBackground);
   rect(450, 80, 150, 70);

   // Draw the next piece indicator
   rect(460, 405, 130, 130, 5, 5);

   //Draw the level counter
   rect(460, 210, 130, 60, 5, 5);

   // Draw the lines rectangle
   rect(460, 280, 130, 60, 5, 5);

   // Draw the score lines
   fill(colourLight);
   rect(450, 85, 150, 20);
   rect(450, 110, 150, 4);
   rect(450, 140, 150, 4);

   // Draw the score counter
   fill(colourBackground);
   rect(460, 60, 130, 35, 5, 5);

   // Draw score counter inner rectangle
   strokeWeight(3);
   noFill();
   stroke(colourLight);
   rect(465, 65, 120, 25, 5, 5);

   // Draw next piece indicator inner rectangle
   stroke(colourLight);
   rect(465, 410, 120, 120, 5, 5);
    
}