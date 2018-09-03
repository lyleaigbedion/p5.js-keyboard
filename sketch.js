function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	
}

// there was a keyboard event
function keyPressed(){

	// gives random points in the window.
	var x = random(width);
	var y = random(height);

	//random color
	var r = random(255);
	var g = random(255);
	var b = random(255);

	noStroke();
	fill(r,g,b);

	//user presses up
	if(keyCode == UP_ARROW) {
		rect (x,y,100,100);
	}
	// user presses down
	if(keyCode == DOWN_ARROW) {
		ellipse(x,y,100,100);	
	}

	// use '' for characters. use "" for strings
	if(key =='A'){
		background(random(255));
	}

	//outputs to the console great for debugging
	// keyCode is numerical rep of the keys
	// key
	console.log(key);
}