var health = 20;
// var maxHP = 150;
// var percent = health / maxHP * 100;

function fight() {
    document.getElementById("attack")
    // .style.color = "white"
    .style.width = health + "px"
    ;
    console.log("damage!");
    // console.log(this);
}



// ==============================================
// var fills = document.getElementById("attack");

// var health = 20;
// var maxHP = 50;

// function renderFills(){
    
//     var percent = health / maxHP * 100;

//     fills.forEach(fill => {
//         fill.style.width = percent + "%";
//     });
// }

// renderFills();