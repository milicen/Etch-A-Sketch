const container = document.querySelector('.container');
const buttonGenerate = document.querySelector('button');
const divs = [];

function generateGrid(num){
	let size = (500/num).toFixed(4) + "px"; 
	for(let i = 0; i < (num*num) ; i++){
		
			const div = document.createElement('div');
			div.setAttribute('id','grid')
			div.style.cssFloat = "left";
			div.style.backgroundColor = "lightgrey";
			div.style.width = size;
			div.style.height = size;
			div.addEventListener('mouseenter', () => div.style.backgroundColor = "grey");
			container.appendChild(div);
		
	}
}

function test(num){
	container.innerHTML = "";
	container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
	container.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
	for(let i = 0; i < Math.pow(num,2) ; i++){
		const div = document.createElement('div');
		div.classList.add("test");
		div.classList.add("grid-line");
		divs.push(div);
		container.appendChild(div);		
	}
}

buttonGenerate.addEventListener('click', function(e){
	let size = prompt('Enter canvas size');
	test(size);
});