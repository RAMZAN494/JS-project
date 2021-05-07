var numSqures = 6;
var colors = [];
var colors = generateColors(numSqures);
var pickedColor;
var squres = document.querySelectorAll(".square");
var span = document.querySelector("span");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var btn = document.querySelector("button");
var easybtn = document.querySelector("#easybtn");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){

	modeButton();
	squareMode();
	reset();
}
function squareMode(){
	 for (var i = 0; i < squres.length; i++) {
	 squres[i].addEventListener("click", function(){     
           var clickedColor = (this.style.background);
		 if (clickedColor === pickedColor) {
			message.textContent = "Correct!";
			btn.textContent = "Play Again";
			colorChange(pickedColor);
			h1.style.background = clickedColor;
		 }else{
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
   })
 }
}

function modeButton(){
	for (var i = 0; i < modeBtn.length; i++) {
	modeBtn[i].addEventListener("click", function(){
	modeBtn[0].classList.remove("hard");
	modeBtn[1].classList.remove("hard");
	this.classList.add("hard");

	/*====Turnery Operation In javaScript====*/
	this.textContent === "Easy" ? numSqures = 3: numSqures = 6;
	   reset();
	})
  }
}

function reset(){
	colors = generateColors(numSqures);
	pickedColor = pickcolor();
	span.textContent = pickedColor;
	btn.textContent = "New Color";
	message.textContent = "";
	for (var i = 0; i < squres.length; i++) {
		if (colors[i]) {
			squres[i].style.display = "block"; 
			squres[i].style.background = colors[i];
		}else{
			squres[i].style.display = "none"; 
		}
		
	}
	h1.style.background = "steelblue";
}

/*easybtn.addEventListener("click",function() {
	hardbtn.classList.remove("hard");
	easybtn.classList.add("hard");
	numSqures = 3
    colors = generateColors(numSqures);
    pickedColor = pickcolor();
    span.textContent = pickedColor;
    for (var i = 0; i < squres.length; i++) {
    	if (colors[i]) {
    		squres[i].style.background = colors[i];
    	}else{
    		squres[i].style.display = "none";
    	}
    }
})
var hardbtn = document.querySelector("#hardbtn");
hardbtn.addEventListener("click",function() {
	hardbtn.classList.add("hard");
	easybtn.classList.remove("hard");
	numSqures = 6;
	colors = generateColors(numSqures);
    pickedColor = pickcolor();
    span.textContent = pickedColor;
    for (var i = 0; i < squres.length; i++) {
    	squres[i].style.background = colors[i]; 	
    	squres[i].style.display = "block";
    	
    }
})*/
btn.addEventListener("click" ,function(){
	reset();
})

function colorChange(color) {

	for (var i = 0; i < squres.length; i++) {
		squres[i].style.background = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num){

	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);

	var green = Math.floor(Math.random() * 256);

	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", "  +  green + ", " + blue + ")";
}