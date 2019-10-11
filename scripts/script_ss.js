
var userChoice = ["nil", "nil", "nil", "nil", "nil", "nil"];
var rightChoice = ["A", "A", "B", "C", "B", "D"];
var correctChoice = [];
var questions = document.getElementsByClassName("questionNumber");
var optionSet = document.getElementsByClassName("choice");
var timerLight = document.getElementById("timerLight");

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

recordChoice(1);
function recordChoice(n){
	var optionSet = document.getElementsByClassName("no" + n + "option");
	var chosen = document.getElementById("chosen" + n);
	var questionNo = document.getElementsByClassName("selector");
	var choiceSet = document.getElementsByClassName("no" + n + "choice");
	var val = "false";
	for (var i = 0; i < optionSet.length; i++) {
		optionSet[i].addEventListener('click', function(){
			for (var i = 0; i < choiceSet.length; i++) {
				choiceSet[i].style.backgroundColor = "rgba(255,255,255,0)";
			}
			setTimeout(function(){
			    questionNo[n-1].style.background= "green";
		    }, 1000);
			if(optionSet[0].checked){
				userChoice[n-1] = "A";
				setTimeout(function(){
					chosen.style.background = "linear-gradient(90deg, rgba(0, 255, 0), rgba(0, 205, 0), rgba(0, 225, 0))";
					chosen.textContent = "Your answer has been saved Successfully";
				}, 1000);
				choiceSet[0].style.backgroundColor = "green";
			} else if(optionSet[1].checked){
				userChoice[n-1] = "B";
				setTimeout(function(){
					chosen.style.background = "linear-gradient(90deg, rgba(0, 255, 0), rgba(0, 205, 0), rgba(0, 225, 0))";
					chosen.textContent = "Your answer has been saved Successfully";
				}, 1000);
				choiceSet[1].style.backgroundColor = "green";
			} else if(optionSet[2].checked){
				userChoice[n-1] = "C";
				setTimeout(function(){
					chosen.style.background = "linear-gradient(90deg, rgba(0, 255, 0), rgba(0, 205, 0), rgba(0, 225, 0))";
					chosen.textContent = "Your answer has been saved Successfully";
				}, 1000);
				choiceSet[2].style.backgroundColor = "green";
			} else if(optionSet[3].checked){
				userChoice[n-1] = "D";
				setTimeout(function(){
					chosen.style.background = "linear-gradient(90deg, rgba(0, 255, 0), rgba(0, 205, 0), rgba(0, 225, 0))";
					chosen.textContent = "Your answer has been saved Successfully";
				}, 1000);
				choiceSet[3].style.backgroundColor = "green";
			} else{
				userChoice[n-1] = "unanswered";
				chosen.textContent = userChoice[n-1];
			}
		});
	}

}
var selection = document.getElementsByClassName("selector");
for (var i = 0; i < selection.length; i++) {
	scrollToQuestion(i+1);
}
function scrollToQuestion(n){
	var question = document.getElementById("question" + n);
	var questionSelector = document.getElementById("ques" + n);
	var questionN = document.getElementsByClassName("questionNumber");
	
	questionSelector.addEventListener('click', function(){
		for (var i = 0; i < questionN.length; i++) {
			questionN[i].style.display = "none";
		}
		question.style.display = "block";
	});
}

let timer = document.getElementById("timer");
let initialTime = 3;
let initialTimeneg= initialTime - 1;
timer.innerHTML = initialTime + ":" + "00";

startCountdown();
var r = "true";
var g = "true";
function startCountdown(){
	var presentTime = timer.innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond((timeArray[1] - 1));

	if(s==59){
		m=m-1;
	}
	if (m<0) {
		m = "a";
		s = "n";
		endExam();
	}
	if (m < 10 && m>0 && r == "true"){
		m = "0" + m;
		r = "false";
	}
	if (m<=2){
		timer.style.color = "red";
		timer.style.animation = "blinker 1s linear infinite";
	}
	timer.innerHTML = m + ":" + s;
	setTimeout(startCountdown, 1000);
}

function checkSecond(s){
	if (s < 10 && s>0){
		s = "0" + s;
	}
	if (s<0){
		s = 59;
	}
	return s;
}
// function endExamQuery(){
// 	var endQuery = confirm("Do you want to End this Exam ?");
// 	if(endQuery==true){
// 		endExam();
// 		return true;
// 	}else{
// 	}
// }
var percentageScore;
var rightlyAnsweredQuestions = [];
var unansweredQuestions = [];
var wronglyAnsweredQuestions = [];
var perc = document.getElementById("percentageScore");
var endExamView = document.getElementById("examTally");
var correctAnsas = document.getElementById("correctTally");
var wrongAnsas = document.getElementById("wrongTally");
var unAnsad = document.getElementById("unansweredTally");

function endExam(){
	for (var i = 0; i < questions.length; i++) {
		if(userChoice[i] == rightChoice[i]){
			rightlyAnsweredQuestions.push(i);
		}else if(userChoice[i] == "nil"){
			unansweredQuestions.push(i);
		}else{
			wronglyAnsweredQuestions.push(i);
		}
	}
	percentageScore = Math.floor((rightlyAnsweredQuestions.length/rightChoice.length)*100);
	perc.textContent = percentageScore;
	correctAnsas.textContent = "CORRECT: " + rightlyAnsweredQuestions.length;
	wrongAnsas.textContent = "WRONG: " + wronglyAnsweredQuestions.length;
	unAnsad.textContent = "NO ANSWER: " + unansweredQuestions.length;
	endExamView.style.display = "block";
	timer.style.display = "none";
}

// CANVAS ANIMATION
// CANVAS ANIMATION
// CANVAS ANIMATION
// CANVAS ANIMATION
// CANVAS ANIMATION
// CANVAS ANIMATION
// CANVAS ANIMATION
// CANVAS ANIMATION
var canvas = document.getElementById("examTallyCanvas");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function degToRad(degree){
	return degree*Math.PI/180;
}
function randomIntFromRange(min, max){
	return Math.floor(Math.random()*(max-min +1) + min)
}

var ballnumber = 40;

var starBound = width/22;
var colorArray = [
'rgba(0, 0, 0, .07)',
'rgba(10, 10, 10, .07)',
'rgba(20, 20, 20, .07)',
'rgba(30, 30, 30, .07)',
'rgba(40, 40, 40, .07)'
];
var ballcolor='blue';
var balldx = (Math.random()-0.5)*2/5;
var balldy = (Math.random()-0.5)*2/5;

function Ball(x, y, dx, dy, r, wid, ballcolor){
	//variables
	this.x = x;
	this.y = y;
	this.r = r;
	this.dx = dx;
	this.dy = dy;
	this.xxbound = x+starBound;
	this.yybound = y+starBound;
	this.xbound = x-starBound;
	this.ybound = y-starBound;
	this.width = wid;
	this.ballcolor = ballcolor;

//	this.rad = Math.random*Math.PI*2;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, degToRad(360), false);
		c.fillStyle = this.ballcolor;
		c.strokeStyle = this.ballcolor;
		c.lineWidth = this.width;
		c.stroke();
		c.fill();
	}
	this.update = function(){
		//WorldBounds
		if (this.x +this.r>this.xxbound || this.x-this.r<this.xbound || this.x +this.r>window.innerWidth
			|| this.x-this.r<0 ){
			this.dx = -this.dx;
		}
		if (this.y +this.r>this.yybound || this.y-this.r<this.ybound || this.y +this.r>window.innerHeight 
			|| this.y-this.r<0){
			this.dy = -this.dy;
		}

	
		this.x += this.dx ;
		this.y += this.dy;

		this.draw();
	}
}

var ballArray;
function init(){
	ballArray = [];
	for (var i=0; i<ballnumber; i++){
		// var minr = 12;
		// var maxr = 15;
		// var minrX;
		// var minrY;
		// var maxrX;
		// var maxrY;
		// if(window.outerWidth <= 500){
		// 	minrX = Math.min(window.innerWidth , minr*2);
		//     minrY = Math.min(window.innerHeight , minr*2);
		// 	maxrX = Math.min(window.innerWidth , maxr*2);
		//     maxrY = Math.min(window.innerHeight , maxr*2);
		// }else if(window.outerWidth > 500 && window.outerWidth<=1050){
		// 	minrX = Math.min(window.innerWidth , minr*1.2);
		//     minrY = Math.min(window.innerHeight , minr*1.2);
		// 	maxrX = Math.min(window.innerWidth , maxr*1.2);
		//     maxrY = Math.min(window.innerHeight , maxr*1.2);
		// }else if(window.outerWidth > 1050 && window.outerWidth<=1650){
		// 	minrX = Math.min(window.innerWidth , minr*1.5);
		//     minrY = Math.min(window.innerHeight , minr*1.5);
		// 	maxrX = Math.min(window.innerWidth , maxr*1.5);
		//     maxrY = Math.min(window.innerHeight , maxr*1.5);
		// }else if(window.outerWidth > 1650 && window.outerWidth<=2000){
		// 	minrX = Math.min(window.innerWidth , minr*2);
		//     minrY = Math.min(window.innerHeight , minr*2);
		// 	maxrX = Math.min(window.innerWidth , maxr*2);
		//     maxrY = Math.min(window.innerHeight , maxr*2);
		// }else{
		// 	minrX = Math.min(window.innerWidth , minr*3);
		//     minrY = Math.min(window.innerHeight , minr*3);
		// 	maxrX = Math.min(window.innerWidth , maxr*3);
		//     maxrY = Math.min(window.innerHeight , maxr*3);
		// }
		// minr = Math.min(minrX, minrY);
		// maxr = Math.min(maxrX, maxrY);
		// var wid = minr;
		var wid = 12;
		var r = randomIntFromRange(12, 15);
		var x = Math.floor(Math.random()*(window.innerWidth - r*2) + r);
		var y = Math.floor(Math.random()*(window.innerHeight - r*2) + r);
		var dx = (Math.random()-0.5)*2/5;
		var dy = (Math.random()-0.5)*2/5;
		var ballcolor = colorArray[Math.floor((Math.random()-0.5)*colorArray.length)];
		ballArray.push(new Ball(x, y, dx, dy, r, wid, ballcolor));
	}
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, window.innerWidth, window.innerHeight);

	for (var i=0; i<ballArray.length; i++){
		ballArray[i].update();
	}
}

init();
animate();


















































































