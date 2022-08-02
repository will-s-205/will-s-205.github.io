var gameData = {
  health1: 100,
  health2: 100,
  dmgPerClick: 3
}

var item = document.getElementById("fighterCardId");


function fight1() {
  gameData.health1 -= gameData.dmgPerClick;
  document.getElementById("health1").innerHTML = gameData.health1;
  document.getElementById("health1").style.width = gameData.health1 + "%"; // document.getElementById("attack").style.width = health + "px";
  // document.getElementById("fighterCardId").style.animationName('shake');
  item.animate(
    [
      { transform: 'translate(3px) rotate(3deg)' },
    ],
    {
      duration: 100
    }
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