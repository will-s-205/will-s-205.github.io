var gameData = {
    health1: 100,
    health2: 100,
    dmgPerClick: 7
  }

  function fight1() {
    gameData.health1 -= gameData.dmgPerClick
    document.getElementById("health").innerHTML = gameData.health1 + " Health"
  }

  function fight2() {
    gameData.health2 -= gameData.dmgPerClick
    document.getElementById("health2").innerHTML = gameData.health2 + " Health"
  }