let questions= [{
"question": "1. A can do a work in 15 days and B in 20 days.If they work on it together for 4 days,then the fraction of the work that is left is:" ,
"option1": "A. 1/4",
"option2": "B. 1/10",
"option3": "C. 7/15",                                                                   
"option4": "D. 8/15",  
"answer": "2"
}, {
"question": "2.Name of the screen that recognizes touch input is :",
"option1": "A. Recog screen",
"option2": "B. Point Screen",
"option3": "C. Touch Screen",
"option4": "D. Android Screen",
"answer": "3"
}, {
"question": "3.Grand Central Terminal, Park Avenue, New York is the world's",
"option1": "A. largest railway station",
"option2": "B. highest railway station",
"option3": "C. longest railway station",
"option4": "D. None of the above",
"answer": "1"
}, {
"question": "4.Chief component of first generation computer was",
"option1": "A. Vacuum Tubes and Valves",
"option2": "B. Transistors",
"option3": "C. Integrated Circuits",
"option4": "D. All of above",
"answer": "1"
}, {
"question": "5.Microprocessors as switching devices are for which generation computers",
"option1": "A. First Generation",
"option2": "B. Second Generation",
"option3": "C. Third Generation",
"option4": "D. Fourth Generation",
"answer": "4"
}];
 let quest=document.getElementById("p3"),
    opt1=document.getElementById("p4"),
	opt2=document.getElementById("p5"),
	opt3=document.getElementById("p6"),
	opt4=document.getElementById("p7"),
	result=document.getElementById("p8");
let currentQuestion=0;
let score=0;
let totalQuestion=questions.length;
let h2=document.getElementsByTagName("h2")[0];
let hours=0,minuits=0,seconds=0,t;
function add(){
			seconds++;
			if(seconds>=60){
				seconds=0;
				minuits++;
				
			if(minuits>=60){
			
				minuits=0;
				hours++;
			 }
		    }
			h2.textContent =(hours ? (hours > 9 ? hours : "0" + hours) : "00")+ ":" +
			            (minuits ? (minuits > 9 ? minuits : "0" + minuits): "00")+ ":" +
			            (seconds? (seconds > 9 ? seconds : "0" + seconds) : "00");

			timer();
		}
	function timer() { 
		t= setTimeout(add,1000);
	}
	timer();
function loadQuestion(qIndex){
	let a=questions[qIndex];
	quest.textContent = a["question"];
	opt1.textContent = a["option1"];
	opt2.textContent = a["option2"];
	opt3.textContent = a["option3"];
	opt4.textContent = a["option4"];

}

function loadNextQuestion(){
	let selectedOption=document.querySelector("input[type=radio]:checked");
	if(!selectedOption) {
		alert("select an option");
		return;
	}
	let yourAnswer=selectedOption.value;
	if(questions[currentQuestion].answer==yourAnswer) {
		score+=10;
	}
	selectedOption.checked=false;
	currentQuestion++;
	if(currentQuestion==totalQuestion-1){
		p1.textContent="finish";
	}
	if(currentQuestion==totalQuestion){
		p2.style.display="none";
		p8.style.display='';
		p1.style.display="none";
		p8.textContent= "yourscore is "+score;
		clearTimeout(t);

	}
	if(currentQuestion<totalQuestion){
	loadQuestion(currentQuestion);
	}
}



loadQuestion(currentQuestion);