// for mentor. This is my attempt at brute forcing the assignment. I came up pretty short but this is as far as I could get before you looking at the answer code. Ill look at springboards provided answer and see if I can make more sense of the assignment. The below code is sloppy as hell and doesnt work well but I think its a decent attempt

const gameContainer = document.getElementById('game');

const COLORS = [ 'red', 'blue', 'green', 'orange', 'purple', 'red', 'blue', 'green', 'orange', 'purple' ];

let active = 0;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement('div');

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}

// TODO: Implement this function!
function handleCardClick(event) {
	let match = false;
	console.log(event);
	if (active >= 2) {
		return 'gotta wait';
	} else {
		active += 1;
		event.target.style.backgroundColor = event.target.classList.value;
		let tempColor = event.target.style.backgroundColor;
		setTimeout(() => {
			event.target.dataset.flipped = tempColor;
		}, 10);
		for (let div of divArray) {
			if (div.dataset.flipped === tempColor) {
				active = 0;
				clearTimeout(tempArray); //this didnt work to prevent the first click from flipping back
				match = true;
			}
		}
		if (match === true) {
			return 'we matched';
		} else {
			var tempArray = setTimeout(() => {
				console.log('you just clicked', event.target);
				event.target.style.backgroundColor = 'transparent';
				event.target.dataset.flipped = 'none';
				active--;
			}, 2000); // you can use event.target to see which element was clicked
		}
	}
} // setTimeout(turnBack(event), 2000);

// when the DOM loads
createDivsForColors(shuffledColors);
const colorDivs = gameContainer.getElementsByTagName('DIV');
const divArray = [];

for (let div of colorDivs) {
	divArray.push(div);
	// divArray.push(div.innerHTML);
}
