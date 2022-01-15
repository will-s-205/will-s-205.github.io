var random = Math.random() * 100
var randomFloor = Math.floor(Math.random() * 100)

var gameData = {
  health1: 100,
  health2: 100,
  dmgPerClick: 3
}

function fight1() {
  gameData.health1 -= gameData.dmgPerClick
  document.getElementById("health").innerHTML = gameData.health1 + " Health"
}

function fight2() {
  gameData.health2 -= gameData.dmgPerClick
  document.getElementById("health2").innerHTML = gameData.health2 + " Health"
}

// AUTOMATIC FIGHTING
// var mainGameLoop = window.setInterval(function () {
//   if (Math.random() * 100 < 50) {
//     fight1();
//   } 
//   else {fight2()}
// }, 1000)

// NEW FIGHTING LOGIC

//EQUIPMENT
var playerOne = {
  accuracy: 70,
  defense: 20
}
var playerTwo = {
  accuracy: 70,
  defense: 50
}
var sword = {
  swordAcc: 20,
  swordDmg: 10
}
var bow = {
  bowAcc: 5,
  bowDmg: 5
}
var shield = {
  shieldDef: 20
}

// ACCURACY CALCULATIONS
var hitChancePlayerOne = (playerOne.accuracy + sword.swordAcc - playerTwo.defense)
var hitChancePlayerTwo = (playerTwo.accuracy + bow.bowAcc - playerOne.defense - shield.shieldDef)

// FIGHT FLOW
function fight() {
  if (Math.random() * 100 < hitChancePlayerOne) {
    console.log("SWORDSMAN HIT CHANCE: " + hitChancePlayerOne);
    gameData.health2 -= sword.swordDmg;
    document.getElementById("health2").innerHTML = gameData.health2 + " Health";

    // HEALTH BAR
    document.getElementById("healthbar1")
      .style.width = gameData.health1 + "%"
  }
  if (Math.random() * 100 < hitChancePlayerTwo) {
    console.log("ARCHER HIT CHANCE: " + hitChancePlayerTwo);
    gameData.health1 -= bow.bowDmg;
    document.getElementById("health").innerHTML = gameData.health1 + " Health";
  }
}// MAKE HIT OR MISS CONSOLE.LOG AND HIT CHANCE IN THE BRACKET()!!!!!

// AUTOMATIC FIGHTING
var mainGameLoop = window.setInterval(function () {
  fight()
}, 100)

// THREAD.SLEEP
function sleep(seconds) {
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) { }
}