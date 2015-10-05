
(function() {

var canvas = document.getElementById("theCanvas"),
	context = canvas.getContext("2d");


var spriteObject = {
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 64,
  sourceHeight: 64,
  width: 64,
  height: 64,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  gravity: 3.8,
 

  centerX: function()
  {
    return this.x + (this.width / 2);
  },
  centerY: function()
  {
    return this.y + (this.height / 2);
  },
  halfWidth: function()
  {
    return this.width / 2;
  },
  halfHeight: function()
  {
    return this.height / 2;
  }
};

var startGame = false,
	gameOver = false,
	upPressed = false,
	startAgain = false,
	canFlap = true,
	score = 0;
	
var pipeArray = [];	

var background = Object.create(spriteObject);
background.x = 0;
background.y = 0;
background.width = 550;
background.height = 500;

var backgroundImage = new Image();
backgroundImage.src = "assets/backgroundNerd.png";

var bird = Object.create(spriteObject);
bird.x = 230;
bird.y = 240;
bird.width = 50;
bird.height = 50;

var birdImage = new Image();
birdImage.src = "assets/nerd.png";

var ground = Object.create(spriteObject);
ground.x = 0;
ground.y = 450;
ground.width = 550;
ground.height = 50;

groundImage = new Image();
groundImage.src = "assets/ground.png";

var pipeBottom1 = Object.create(spriteObject);
pipeBottom1.x = 500;
pipeBottom1.y = 300;
pipeBottom1.width = 100;
pipeBottom1.height = 400;
pipeBottom1.vx = -8;
pipeArray.push(pipeBottom1);

var pipeBottom1Image = new Image();
pipeBottom1Image.src = "assets/pipeU.png";


var pipeBottom2 = Object.create(spriteObject);
pipeBottom2.x = 1000;
pipeBottom2.y = 350;
pipeBottom2.width = 100;
pipeBottom2.height = 400;
pipeBottom2.vx = -8;
pipeArray.push(pipeBottom2);

var pipeBottom3 = Object.create(spriteObject);
pipeBottom3.x = 1500;
pipeBottom3.y = 320;
pipeBottom3.width = 100;
pipeBottom3.height = 400;
pipeBottom3.vx = -8;
pipeArray.push(pipeBottom3);

//PIPE TOP

var pipeTop1 = Object.create(spriteObject);
pipeTop1.x = 500;
pipeTop1.y;
pipeTop1.width = 100;
pipeTop1.height = 400;
pipeTop1.vx = -8;
pipeArray.push(pipeTop1);

var pipeTop1Image = new Image();
pipeTop1Image.src = "assets/pipeD.png";

var pipeTop2 = Object.create(spriteObject);
pipeTop2.x = 1000;
pipeTop2.y;
pipeTop2.width = 100;
pipeTop2.height = 400;
pipeTop2.vx = -8;
pipeArray.push(pipeTop2);

var pipeTop3 = Object.create(spriteObject);
pipeTop3.x = 1500;
pipeTop3.y;
pipeTop3.width = 100;
pipeTop3.height = 400;
pipeTop3.vx = -8;
pipeArray.push(pipeTop3);

window.addEventListener("keydown",onKeyDown,false);
window.addEventListener("keyup",onKeyUp,false);
canvas.style.cursor = "none";

function onKeyDown(event) {

	if (event.keyCode === 38) {
		if (canFlap && gameOver === false) {
			bird.y += -50;
			startGame = true;
			canFlap = false;
		}
	}
	if(gameOver === true) {
		window.location.reload();		
	}
}

function onKeyUp(event) {

	if(event.keyCode === 38 && gameOver === false) {
		bird.y += 0;
		canFlap = true;
	}
}

function render() {
	
	context.drawImage(backgroundImage,background.x,background.y,background.width,background.height);
	context.drawImage(groundImage,ground.x,ground.y,ground.width,ground.height);
	context.drawImage(birdImage,bird.x,bird.y,bird.width,bird.height);
	context.drawImage(pipeBottom1Image,pipeBottom1.x,pipeBottom1.y,pipeBottom1.width,pipeBottom1.height);
	context.drawImage(pipeBottom1Image,pipeBottom2.x,pipeBottom2.y,pipeBottom2.width,pipeBottom2.height);
	context.drawImage(pipeBottom1Image,pipeBottom3.x,pipeBottom3.y,pipeBottom3.width,pipeBottom3.height);
	
	pipeTop1.y = pipeBottom1.y - 530;
	pipeTop2.y = pipeBottom2.y - 530;
	pipeTop3.y = pipeBottom3.y - 530;

	context.drawImage(pipeTop1Image,pipeTop1.x,pipeTop1.y,pipeTop1.width,pipeTop1.height);
	context.drawImage(pipeTop1Image,pipeTop2.x,pipeTop2.y,pipeTop2.width,pipeTop2.height);
	context.drawImage(pipeTop1Image,pipeTop3.x,pipeTop3.y,pipeTop3.width,pipeTop3.height);
}

function updateScore() {
	
	if (bird.x > pipeBottom1.x + pipeBottom1.width && bird.x < pipeBottom1.x + pipeBottom1.width + 10 ) {
		score++;
	}
	if (bird.x > pipeBottom2.x + pipeBottom2.width && bird.x < pipeBottom2.x + pipeBottom2.width + 10) {
		score++;
	}
	if( bird.x > pipeBottom3.x + pipeBottom3.width && bird.x < pipeBottom3.x + pipeBottom3.width + 10) {
		score++;
	}
}

function respawnPipes() {

	if (pipeTop1.x < -100) {
		pipeTop1.x = 1300;
		pipeTop1.y = 300 + Math.random() * 100;
	}
	if (pipeTop2.x < -100) {
		pipeTop2.x = 1300;
		pipeTop2.y = 300 + Math.random() * 100;
	}
	if (pipeTop3.x < -100) {
		pipeTop3.x = 1300;
		pipeTop3.y = 300 + Math.random() * 100;
	}

	if (pipeBottom1.x < -100) {
		pipeBottom1.x = 1300;
		pipeBottom1.y = 300 + Math.random() * 150;
	}
	if (pipeBottom2.x < -100) {
		pipeBottom2.x = 1300;
		pipeBottom2.y = 300 + Math.random() * 150;
	}
	if (pipeBottom3.x < -100) {
		pipeBottom3.x = 1300;
		pipeBottom3.y = 300 + Math.random() * 150;
	}
}

function updateText() {

	if (startGame === true && gameOver === false) {
		
		pipeTop1.x += pipeTop1.vx;
		pipeTop2.x += pipeTop2.vx;
		pipeTop3.x += pipeTop3.vx;

		pipeBottom1.x += pipeBottom1.vx;
		pipeBottom2.x += pipeBottom2.vx;
		pipeBottom3.x += pipeBottom3.vx;

		bird.y += bird.gravity;

		context.fillStyle = "black";
		context.font = "bold 24pt Arial";
		context.fillText("SCORE: " + score,300,30);	
	}


	if (startGame === false && gameOver === false) {
		
		context.fillStyle = "black";
		context.font = "bold 32pt Arial";
		context.fillText("FLAPPY NERD!",134,50);

		context.font = "bold 20pt Arial";
		context.fillText("PRESS THE UP KEY TO FLAP",80,140);
		context.fillText("AVOID THE PIPES!",150,180);

		context.font = "bold 20pt Arial";
		context.fillText("PRESS THE UP KEY TO FLAP",80,140);
		context.fillText("AVOID THE PIPES!",150,180);

		context.fillStyle = "#ff233d";
		context.fillText("ART BY WILL BLANTON",130,340);
		context.fillText("CODE BY BEN SAVAGE",140,380);
	}

	if (gameOver === true) {
		
		context.fillStyle = "black";
		context.font = "bold 32pt Arial";
		context.fillText("GAME OVER!",145,100);

		context.font = "bold 20pt Arial";
		context.fillText("PRESS THE UP KEY TO RESTART",60,400);
	}
}

function constrainPlayer() {
	
	if (bird.y < 0) {
		bird.y = 0;
	}
		
	if (bird.y > canvas.height - bird.height) {
		bird.y = canvas.height - bird.height;
	}
}	

function checkCollision(obj1,obj2) {
	  
	var vx = obj1.centerX() - obj2.centerX(),
		vy = obj1.centerY() - obj2.centerY(),
		combinedHalfWidths = obj1.halfWidth() + obj2.halfWidth(),
		combinedHalfHeights = obj1.halfHeight() + obj2.halfHeight();
		  
	 if (Math.abs(vx) < combinedHalfWidths) {
		if (Math.abs(vy) < combinedHalfHeights) {
			gameOver = true;
			startGame = false;
		}
	}   
}

main();

function main()  {

	window.setTimeout(main,33);
	context.clearRect(0,0,canvas.width,canvas.height);
	
	render();
	updateScore();
	updateText();
	respawnPipes();
	constrainPlayer();
	

	for (var i = 0; i < pipeArray.length; i++) {
		checkCollision(bird,pipeArray[i]);
	}
 }

})();