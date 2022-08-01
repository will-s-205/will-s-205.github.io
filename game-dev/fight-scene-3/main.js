var gameData = {
    health1: 100,
    health2: 100,
    dmgPerClick: 3
  }
  
  function fight1() {
    gameData.health1 -= gameData.dmgPerClick;
    document.getElementById("health1").innerHTML = gameData.health1;
    document.getElementById("health1").style.width = gameData.health1 + "%"; // document.getElementById("attack").style.width = health + "px";
    // document. location. reload();
    console.log("damage!");
  }
  
  function fight2() {
    gameData.health2 -= gameData.dmgPerClick
    document.getElementById("health2").innerHTML = gameData.health2 + " Health"
  }

  // ADD LISTENER FOR fight1()
  // ON CLICK REDUCE HP