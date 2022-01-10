// https://www.reddit.com/r/incremental_games/comments/ahf6nx/how_to_make_an_incremental_game/

// GAME DATA
var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10
}

// MINE GOLD CLICK ON BUTTON
function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

// STORE ITEM PICKAXE
function buyPickaxePerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML =
      "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick +
      ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

// AUTOMATICAL MINING
var mainGameLoop = window.setInterval(function () {
  mineGold(), buyPickaxePerClick()
}, 1000)

// SAVING GAME
var saveGameLoop = window.setInterval(function () {
  localStorage.setItem("goldMinerSave",
    JSON.stringify(gameData))
}, 15000)

// LOADING GAME
var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame,
    console.log(savegame),
    document.getElementById("goldMined").innerHTML = savegame.gold + " Gold Mined",
    document.getElementById("perClickUpgrade").innerHTML =
    "Upgrade Pickaxe (Currently Level " + savegame.goldPerClick +
    ") Cost: " + savegame.goldPerClickCost + " Gold"
}