var gameData = {
  health1: 100,
  health2: 100,
  dmgPerClick: 30
}

// EXAMPLE
const aliceTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
  { color: '#431236', offset: 0.3 },
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];

// EXAMPLE
const aliceTiming = {
  duration: 3000,
  // iterations: Infinity
}

// EXAMPLE
var doAnimation = document.getElementById("health1").animate(
  aliceTumbling,
  aliceTiming
)

function fight1() {
  gameData.health1 -= gameData.dmgPerClick;
  document.getElementById("health1").innerHTML = gameData.health1;
  // document.getElementById("health1").style.backgroundColor = "blue"; // EXAMPLE
  document.getElementById("health1").style.width = gameData.health1 + "%";
  document.getElementById("health1").animate(
    [{ transform: 'translate(3px) rotate(3deg)' },],
    { duration: 100 }
  );

  if (gameData.health1 <= 0) {
    document.location.reload();
  }
  console.log("damage!");
}

function fight2() {
  gameData.health2 -= gameData.dmgPerClick
  document.getElementById("health2").innerHTML = gameData.health2 + " Health"
}

  // ADD LISTENER FOR fight1()
  // ON CLICK REDUCE HP