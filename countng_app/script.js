// vars for increment() 
let countElement = document.getElementById("count__element");
let count = 0;

// vars for changeHeader()
let headerJS = document.getElementById("header");
let greeting = 'Hi';

// vars for save()
let savedOutput = document.getElementById("previous_saves");
let savedOutputArray = [];
let savedTotal = document.getElementById("total_saves");


function increment() {
	count++;
	countElement.innerText = count;
}


function changeHeader() {
	let change = prompt("Enter your name");
	headerJS.innerText = greeting + ', ' + change;
}


function save() {
	// outputs each entry
	savedOutput.textContent += " - " + count;
	
	// saves entry to array
	savedOutputArray.push(count);

	// sums up and outputs entries
	let total = savedOutputArray.reduce((sum, current) =>sum + current, 0);
	savedTotal.textContent = total;
	
	// starts the process from zero for new entry
	count = 0;
	countElement.textContent = count;
}


