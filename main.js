canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 150;
greencar_height = 200;

var img_image;

greencar_x = 100;
greencar_y = 100;

background_image = "parkingLot.png";
greencar_image = "car2.png";

function add() {
background_imgTag = new Image();
background_image.onload = uploadBackground;
background_imgTag.src = background_image;

greencar_imgTag = new Image();
greencar_img.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag , 0 , 0 , greencar_width , greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0) {
		greencar_y = greencar_y - 10;

		console.log("When up is pressed, x = " + greencar_x + ", y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y >= 500) {
		greencar_y = greencar_y + 10;

		console.log("When up is pressed, x = " + greencar_x + ", y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
}
}

function left()
{
	if(greencar_y <= 0) {
		greencar_y = greencar_y - 10;

		console.log("When up is pressed, x = " + greencar_x + ", y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
}
}

function right()
{
	if(greencar_y >= 850) {
		greencar_y = greencar_y + 10;

		console.log("When up is pressed, x = " + greencar_x + ", y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
}
}