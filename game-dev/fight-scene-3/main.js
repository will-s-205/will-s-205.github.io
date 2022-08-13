var random = Math.random() * 100
var randomFloor = Math.floor(Math.random() * 100)

var gameData = {
  round: 0,
  distance: 10,
  onePerClick: 1,
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
  shieldDef: 20,
  shieldDurability: 100
}

var clothHood = {
  itemDurability: 100,
}

var lightArmor = {
  itemDurability: 100,
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
    if (gameData.round >= 10) { // swordsman moving across 10 tiles to reach Bowman
      if (CtH < hitChancePlayerOne) {
        bowmanGettingHit();
        console.log("Swordsman hit " + hitChancePlayerOne + "vs" + CtH);
      } else {
        console.log("Swordsman miss " + hitChancePlayerOne + "vs" + CtH);
        document.getElementById("bowman").animate(rightDmgAvoided, twoHundredsMs);
      }
    }

    // BOWMAN LOGIC
    if (CtH < hitChancePlayerTwo) {
      if (shield.shieldDurability > 0) { // IF THERE IS A SHIELD THE EXTRACT FROM DURABILITY
        shield.shieldDurability -= bow.bowDmg;
        document.getElementById("playerLeftArmItemDurability").innerHTML = shield.shieldDurability;
        document.getElementById("shield").animate(itemHit, twoHundredsMs);
      } else {
        gameData.health1 -= bow.bowDmg;
        document.getElementById("health1").style.width = gameData.health1 + "%";
        document.getElementById("health1").animate(healthDecreased, twoHundredsMs);

        console.log("Bowman hit " + hitChancePlayerTwo + "vs" + CtH);
        document.getElementById("swordsman").animate(hit, twoHundredsMs);
      }
      if (gameData.health1 <= 0) {
        document.location.reload();
      }
    } else {
      console.log("Bowman miss " + hitChancePlayerTwo + "vs" + CtH);
      document.getElementById("swordsman").animate(leftDmgAvoided, twoHundredsMs);
    }

    roundCount();
    distanceCount();
  },
    // TIME BETWEEN TURNS
    100)
});

function roundCount() {
  gameData.round += gameData.onePerClick
  document.getElementById("round").innerHTML = gameData.round;
  document.getElementById("round").style.color = "white";
  document.getElementById("round").style.fontWeight = "bold";
  document.getElementById("round").style.textShadow = "0 0 5px black";
}

function distanceCount() {
  if (gameData.distance > 0) {
    gameData.distance -= gameData.onePerClick
    document.getElementById("distance").innerHTML = gameData.distance;
    document.getElementById("distance").style.color = "white";
    document.getElementById("distance").style.fontWeight = "bold";
    document.getElementById("distance").style.textShadow = "0 0 5px black";
  }
  else {
    document.getElementById("distance").innerHTML = "MELEE";
  }
}

// THREAD.SLEEP // USEFUL UTIL
function sleep(seconds) {
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) { }
}

const healthDecreased = [
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

const itemHit = [
  { transform: 'translateY(4px)' }
]

const twoHundredsMs = {
  duration: 200,
}

const fourHundredsMs = {
  duration: 400,
}



document.getElementById("swordsman").addEventListener('click', () => {
  if (shield.shieldDurability > 0) {
    shield.shieldDurability -= gameData.dmgPerClick;
    document.getElementById("playerLeftArmItemDurability").innerHTML = shield.shieldDurability;
    document.getElementById("shield").animate(itemHit, twoHundredsMs);
  } else {
    gameData.health1 -= gameData.dmgPerClick;
    document.getElementById("health1").innerHTML = gameData.health1;
    // document.getElementById("health1").style.backgroundColor = "green"; // poison EXAMPLE
    document.getElementById("health1").style.width = gameData.health1 + "%";
    document.getElementById("health1").animate(healthDecreased, twoHundredsMs);
    if (gameData.health1 <= 0) {
      document.location.reload();
    }
    roundCount();
    distanceCount()
    console.log("manual damage!");
    document.getElementById("swordsman").animate(hit, twoHundredsMs);
  }
});

document.getElementById("bowman").addEventListener('click', () => {
  if (clothHood.itemDurability > 0 || lightArmor.itemDurability > 0) {
    let rnd = Math.floor(Math.random() * 100);
    if (rnd <= 80) {
      if (lightArmor.itemDurability > 0) {
        lightArmor.itemDurability -= bow.bowDmg;
        document.getElementById("opponentBodyItemDurability").innerHTML = lightArmor.itemDurability;
        // document.getElementById("shield").animate(hit, twoHundredsMs); // CHANGE ID TO LIGHT ARMOR
      } else {
        gameData.health2 -= bow.bowDmg;
        document.getElementById("health2").innerHTML = gameData.health2;
        // document.getElementById("health2").style.backgroundColor = "green"; // poison EXAMPLE
        document.getElementById("health2").style.width = gameData.health2 + "%";
        document.getElementById("health2").animate(healthDecreased, twoHundredsMs);
        if (gameData.health2 <= 0) {
          document.location.reload();
        }
      }
    } else {
      if (clothHood.itemDurability > 0) {
        clothHood.itemDurability -= gameData.dmgPerClick;
        document.getElementById("opponentHeadItemDurability").innerHTML = clothHood.itemDurability;
        // document.getElementById("shield").animate(hit, twoHundredsMs); // CHANGE ID TO CLOTH HOOD
      } else {
        gameData.health2 -= gameData.dmgPerClick;
        document.getElementById("health2").innerHTML = gameData.health2;
        // document.getElementById("health2").style.backgroundColor = "green"; // poison EXAMPLE
        document.getElementById("health2").style.width = gameData.health2 + "%";
        document.getElementById("health2").animate(healthDecreased, twoHundredsMs);
        if (gameData.health2 <= 0) {
          document.location.reload();
        }
      }
    }
  }
});

document.getElementById("bowman").addEventListener('click', () => {
  bowmanGettingHit();
  roundCount();
  distanceCount()
});

function bowmanGettingHit(){
  let rnd = Math.floor(Math.random() * 100);
  if (rnd <= 50) {
    if (lightArmor.itemDurability > 0) {
      lightArmor.itemDurability -= sword.swordDmg;
      document.getElementById("opponentBodyItemDurability").innerHTML = lightArmor.itemDurability;
      document.getElementById("ligthArmor").animate(itemHit, twoHundredsMs); // CHANGE ID TO LIGHT ARMOR
    } else {
      gameData.health2 -= gameData.dmgPerClick;
      document.getElementById("health2").innerHTML = gameData.health2;
      // document.getElementById("health2").style.backgroundColor = "green"; // poison EXAMPLE
      document.getElementById("health2").style.width = gameData.health2 + "%";
      document.getElementById("health2").animate(healthDecreased, twoHundredsMs);
      document.getElementById("bowman").animate(hit, twoHundredsMs);
      if (gameData.health2 <= 0) {
        document.location.reload();
      }
    }
  } else {
    if (clothHood.itemDurability > 0) {
      clothHood.itemDurability -= sword.swordDmg;
      document.getElementById("opponentHeadItemDurability").innerHTML = clothHood.itemDurability;
      document.getElementById("clothHood").animate(itemHit, twoHundredsMs); // CHANGE ID TO CLOTH HOOD
    } else {
      gameData.health2 -= gameData.dmgPerClick;
      document.getElementById("health2").innerHTML = gameData.health2;
      // document.getElementById("health2").style.backgroundColor = "green"; // poison EXAMPLE
      document.getElementById("health2").style.width = gameData.health2 + "%";
      document.getElementById("health2").animate(healthDecreased, twoHundredsMs);
      document.getElementById("bowman").animate(hit, twoHundredsMs);
      if (gameData.health2 <= 0) {
        document.location.reload();
      }
    }
  }
}