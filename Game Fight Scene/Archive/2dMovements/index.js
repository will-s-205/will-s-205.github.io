var ctx = document.getElementById("ctx").getContext("2d"); 
ctx.font = '30px Arial';

//window size
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
 
//player
var x = 50;
var spdX = 30;
var y = 40;
var spdY = 5;
var player = 'P';
 
//enemy
var enemy_x = 150;
var enemy_spdX = 10;
var enemy_y = 350;
var enemy_spdY = 15;
var enemy_name = 'E';
 
 
setInterval(update,40);
 
function update(){
	////////player////////
	x += spdX;
	y += spdY;
	ctx.fillText(player,x,y);
	if(x < 0 || x > WIDTH){
		console.log(message);
		spdX = -spdX;}
	if(y < 0 || y > HEIGHT){
		console.log(message);
		spdY = -spdY;}
	////////player////////
	////////enemy////////
	enemy_x += enemy_spdX;
	enemy_y += enemy_spdY;
	ctx.fillText(enemy_name,enemy_x,enemy_y);
	if(enemy_x < 0 || enemy_x > WIDTH){
		console.log(message);
		enemy_spdX = -enemy_spdX;}
	if(enemy_y < 0 || enemy_y > HEIGHT){
		console.log(message);
		enemy_spdY = -enemy_spdY;}
	////////enemy////////
}