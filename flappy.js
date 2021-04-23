let obstacle = document.getElementById("obstacle")
let obstacle2 = document.getElementById("obstacle2")
let player = document.getElementById("player")
let jumping = 0;
let gravity = 1.5;
let score = 0;
let playerX = 10;
let playerY = 100;

document.addEventListener("keydown", jumpUp);