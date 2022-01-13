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

var playerOne = {
  accuracy: 70
}

var playerTwo = {
  defense: 50
}

var random = Math.random() * 100
var hitChance = (playerOne.accuracy - playerTwo.defense)

function fight() {
  console.log(Math.random() * 100);
  console.log("HIT CHANCE: "+hitChance);
  if (Math.random() * 100 < hitChance){
    gameData.health2 -= gameData.dmgPerClick;
    document.getElementById("health2").innerHTML = gameData.health2 + " Health";
  }
}

// AUTOMATIC FIGHTING
var mainGameLoop = window.setInterval(function () {
  fight()
}, 1000)