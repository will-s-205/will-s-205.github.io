var random = Math.random() * 100
var randomFloor = Math.floor(Math.random() * 100)

var gameData = {
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
  let CtH = Math.floor(Math.random() * 100);
  if (CtH < hitChancePlayerOne) {
    console.log("SWORDSMAN HIT CHANCE: " + hitChancePlayerOne+"vs"+CtH);
    gameData.health2 -= sword.swordDmg;
    document.getElementById("health2").style.width = gameData.health2 + "%";
    document.getElementById("health2").animate(shortPushLeft, twoHundredsMs);
    // IF HEALTH LESS 0 OR LESS THEN RESET PAGE
    if (gameData.health2 <= 0) {
      document.location.reload();
    }
    console.log("Archer got damage!"+gameData.health2);
  } else {
    console.log("Swordsman missed " + hitChancePlayerOne+"vs"+CtH);
  }
  if (CtH < hitChancePlayerTwo) {
    console.log("ARCHER HIT CHANCE: " + hitChancePlayerTwo+"vs"+CtH);
    gameData.health1 -= bow.bowDmg;
    document.getElementById("health1").style.width = gameData.health1 + "%";
    document.getElementById("health1").animate(shortPushLeft, twoHundredsMs);
    // IF HEALTH LESS 0 OR LESS THEN RESET PAGE
    if (gameData.health1 <= 0) {
      document.location.reload();
    }
    console.log("Swordsman got damage!");
  } else {
    console.log("Archer missed " + hitChancePlayerTwo+"vs"+CtH);
  }
});

// THREAD.SLEEP // USEFUL UTIL
function sleep(seconds) {
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) { }
}

// =================================================================================

// EXAMPLE
// const aliceTumbling = [
//   { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
//   { color: '#431236', offset: 0.3 },
//   { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
// ];

// EXAMPLE
// const aliceTiming = {
//   duration: 3000,
//   // iterations: Infinity
// }

// ALICE EXAMPLE
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
// NEWSPAPER EXAMPLE
// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
// var doAnimation = document.getElementById("health1").animate(
//   aliceTumbling,
//   aliceTiming
// )

const shortPushLeft = [
  { transform: 'translate(3px) rotate(3deg)' },
  { background: 'brown' }
]

const twoHundredsMs = {
  duration: 200,
}

document.querySelector(".fightButton").addEventListener('click', () => {
  gameData.health1 -= gameData.dmgPerClick;
  document.getElementById("health1").innerHTML = gameData.health1;
  // document.getElementById("health1").style.backgroundColor = "blue"; // EXAMPLE
  document.getElementById("health1").style.width = gameData.health1 + "%";
  document.getElementById("health1").animate(shortPushLeft, twoHundredsMs);
  if (gameData.health1 <= 0) {
    document.location.reload();
  }
  console.log("damage!");
});

