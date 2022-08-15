
// Create canvas variable
var canvas = new fabric.canvas(myCanvs)
//Set initial positions for ball and hole images.
ball_x=0
ball_y=0
hole_x=800
hole_y=400

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL(golf-h.png,function(Img))
	hole_obj=(Img)
	hole_obj.scaleToWidth(50)
	hole_obj.scaleToHeight(50)
	hole_obj.set({
		top:hole_y,
		left:hole_x,
	})
	new_image();
}

function new_image()
{ 

if((boll_x==hole_x)&&(boll_y==hole_y))
canvas.remove(ball_obj);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */

		document.getElementById("hd3").innerHTML="You Have Hit The Goal"
		document.getElementById("myCanvas").style.borderColor="red"
	}
	
	function up()
	{
		
		ball_y=ball_y-block_image_height;
			console.log("block_image_height="-block_image_height);
			console.log("When drow arrow key is pressed, x="+ball_x-", Y ="+ball_y )
	}

	function down()
	{
		ball_y=ball_y+block_image_height;
			console.log("block_image_height="+block_image_height);
			console.log("When drow arrow key is pressed, x="+ball_x+", Y ="+ball_y )
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x+block_image_width;
			console.log("block_image_width="+block_image_width);
			console.log("When drow arrow key is pressed, x="+ball_x+", Y ="+ball_y )
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x-block_image_width;
			console.log("block_image_width="-block_image_width);
			console.log("When drow arrow key is pressed, x="+ball_x-", Y ="+ball_y )
		}
	}
	


