// https://www.reddit.com/r/incremental_games/comments/ahf6nx/how_to_make_an_incremental_game/

// GAME DATA
var gameData = {
  gold: 0, // STARTING GOLD AMOUNT
  goldPerClick: 1, // STARTING AMOUT OF GOLD MINING PER CLICK
  goldPerClickCost: 10 // COST OF PICKAXE UPGRADE
}

// MINE GOLD CLICK ON BUTTON
function mineGold() {
  gameData.gold += gameData.goldPerClick // ADD GOLD EVERY CLICK
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined" // UPDATE COUNT OF GOLD
}

// STORE ITEM PICKAXE
function buyPickaxePerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) // IF ENOUGH MONEY
  {
    gameData.gold -= gameData.goldPerClickCost  // BUY FOR GOLD
    gameData.goldPerClick += 1 // ADD MINING MODIFICATOR FOR MINE GOLD BUTTON
    gameData.goldPerClickCost *= 2 // DOUBLE COST FOR NEXT MINING MODIFICATOR
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined" // UPDATE COUNT OF GOLD
    document.getElementById("perClickUpgrade").innerHTML = // UPDATE PICKAXE STATUS OF THE BUTTON
      "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + // LEVEL OF THE PICKAXE REFLECT AMOUNT OF THE MINED GOLD IN ONE CLICK
      ") Cost: " + gameData.goldPerClickCost + " Gold" // COST OF THE UPGRADE REFLECTING IN A BUTTON TEXT EACH CLICK
  }
}

// AUTOMATICAL MINING
var mainGameLoop = window.setInterval(function () { // LOOP WITH INTERVAL IN MILISECONDS
  mineGold() // MINE GOLD AUTOMATICALLY
    , buyPickaxePerClick() // UPGARDE PICKEAGE AUTOMATICALLY
}, 1000) // EVERY SECOND

// SAVING GAME
var saveGameLoop = window.setInterval(function () { // LOOP WITH INTERVAL IN MILISECONDS
  localStorage.setItem("goldMinerSave", // SET AN ITEM goldMinerSave IN A LOCAL STORAGE
    JSON.stringify(gameData)) // TURNING THE OBJECT INTO THE STRING USING JSON FORMAT
}, 15000) // EVERY 15 SECOND

// LOADING GAME
var savegame = JSON.parse(localStorage.getItem("goldMinerSave")) // PARSING FROM THE PREVIOUSLY SAVED goldMinerSave
if (savegame !== null) { // IF savegame HAVE SOME JSON RECORDS ALREADY
  gameData = savegame, // RETURN gameData OBJECT IN THE savegame STATE. WHICH IS SIMPLY PARSING FROM THE PREVIOUSLY SAVED goldMinerSave
    console.log(savegame), // DISPLAY SAVED DATA IN THE CONSOLE LOG
    document.getElementById("goldMined").innerHTML = savegame.gold + " Gold Mined", // LOAD COUNT OF GOLD
    document.getElementById("perClickUpgrade").innerHTML = // LOAD PICKAXE STATUS OF THE BUTTON
      "Upgrade Pickaxe (Currently Level " + savegame.goldPerClick + // LOAD LEVEL OF THE PICKAXE REFLECT AMOUNT OF THE MINED GOLD IN ONE CLICK
      ") Cost: " + savegame.goldPerClickCost + " Gold" // LOAD COST OF THE UPGRADE REFLECTING IN A BUTTON TEXT EACH CLICK
}