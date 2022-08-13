var random = Math.random() * 100
var randomFloor = Math.floor(Math.random() * 100)

var gameData = {
  round: 0,
  roundPerClick: 1,
  health1: 100,
  health2: 100,
  dmgPerClick: 3
}

//EQUIPMENT // MAKE READ VALUES FROM THE WEB PAGE
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

// AUTOMATIC FIGHTING
// var mainGameLoop = window.setInterval(function () {
//   fight()
// }, 100)

document.querySelector(".autoFightButton").addEventListener('click', () => {


  // SWORDSMAN LOGIC
  window.setInterval(function () {
    let CtH = Math.floor(Math.random() * 100);
    if (gameData.round >=10){ // swordsman moving across 10 tiles to reach Bowman
    if (CtH < hitChancePlayerOne) {
      gameData.health2 -= sword.swordDmg;
      document.getElementById("health2").style.width = gameData.health2 + "%";
      document.getElementById("health2").animate(redShortPushLeft, twoHundredsMs);
      if (gameData.health2 <= 0) {
        document.location.reload();
      }
      console.log("Swordsman hit " + hitChancePlayerOne + "vs" + CtH);
      document.getElementById("bowman").animate(hit, twoHundredsMs);
    } else {
      console.log("Swordsman miss " + hitChancePlayerOne + "vs" + CtH);
      document.getElementById("bowman").animate(rightDmgAvoided, twoHundredsMs);
    }
  }

  // BOWMAN LOGIC
    if (CtH < hitChancePlayerTwo) {
      gameData.health1 -= bow.bowDmg;
      document.getElementById("health1").style.width = gameData.health1 + "%";
      document.getElementById("health1").animate(redShortPushLeft, twoHundredsMs);
      if (gameData.health1 <= 0) {
        document.location.reload();
      }
      console.log("Bowman hit " + hitChancePlayerTwo + "vs" + CtH);
      document.getElementById("swordsman").animate(hit, twoHundredsMs);
    } else {
      console.log("Bowman miss " + hitChancePlayerTwo + "vs" + CtH);
      document.getElementById("swordsman").animate(leftDmgAvoided, twoHundredsMs);
    }
    // ADD ROUNDS
    roundCount();
  },
    // TIME BETWEEN TURNS
    300)
});

function roundCount() {
  gameData.round += gameData.roundPerClick
  document.getElementById("round").innerHTML = gameData.round;
  document.getElementById("round").style.color = "white";
  document.getElementById("round").style.fontWeight = "bold";
  document.getElementById("round").style.textShadow = "0 0 5px black";
}

// THREAD.SLEEP // USEFUL UTIL
function sleep(seconds) {
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) { }
}

const redShortPushLeft = [
  { transform: 'translate(3px) rotate(3deg)' },
  { background: 'brown' }
]

const leftDmgAvoided = [
  { transform: 'translate(-6px)' },
]

const rightDmgAvoided = [
  { transform: 'translate(6px)' },
]

const hit = [
  { transform: 'translateY(6px)' },
  { background: 'brown' }
]

const twoHundredsMs = {
  duration: 200,
}

const fourHundredsMs = {
  duration: 400,
}

document.querySelector(".fightButton").addEventListener('click', () => {
  gameData.health1 -= gameData.dmgPerClick;
  document.getElementById("health1").innerHTML = gameData.health1;
  // document.getElementById("health1").style.backgroundColor = "blue"; // EXAMPLE
  document.getElementById("health1").style.width = gameData.health1 + "%";
  document.getElementById("health1").animate(redShortPushLeft, twoHundredsMs);
  if (gameData.health1 <= 0) {
    document.location.reload();
  }
  roundCount();
  console.log("manual damage!");
  document.getElementById("swordsman").animate(hit, twoHundredsMs);
});
