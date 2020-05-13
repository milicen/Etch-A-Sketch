const container = document.querySelector('.container');
// const buttonGenerate = document.querySelector('#generateButton');
// const toggleGridButton = document.querySelector('#toggleGridButton');
// const rainbowButton = document.querySelector('#rainbowButton');
// const pencilButton = document.querySelector('#pencilButton');

function generateCanvas(num){
	container.innerHTML = "";
	container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
	container.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
	for(let i = 0; i < Math.pow(num,2) ; i++){
		const div = document.createElement('div');
		div.setAttribute('id', 'grid');
		div.classList.add("test");
		div.addEventListener('mouseover', function(e){
			div.style.backgroundColor = "black";
		})
		container.appendChild(div);		
	}
}

function randomColor(){
	let color =  Math.floor(Math.random() * Math.floor(255));
	return color;
}

generateButton.addEventListener('click', function(e){
	let size = prompt('Enter canvas size');
	generateCanvas(size);
});

toggleGridButton.addEventListener('click', function(e){
	const divs = document.querySelectorAll('#grid');
	divs.forEach(div => div.classList.toggle('grid-line'));
})

rainbowButton.addEventListener('click', function(e){
	const divs = document.querySelectorAll('#grid');
	divs.forEach(div => div.addEventListener('mouseover', function(e){
		div.style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';	
	}))
})

pencilButton.addEventListener('click', function(e){
	const divs = document.querySelectorAll('#grid');
	divs.forEach(div => div.addEventListener('mouseover', function(e){
		div.style.backgroundColor = "black";	
	}))	
})

eraserButton.addEventListener('click', function(e){
	const divs = document.querySelectorAll('#grid');
	divs.forEach(div => div.addEventListener('mouseover', function(e){
		div.style.backgroundColor = "";	
	}))	
})

// shaderButton.addEventListener('click', function(e){
// 	const divs = document.querySelectorAll('#grid');
// 	divs.forEach(div => div.addEventListener('mouseover', function(e){
// 		div.style.setProperty("--darken","-10%");	
// 	}))		
// })

// preciseButton.addEventListener('click', function(e){
// 	const divs = document.querySelectorAll('#grid');
// 	let mouseDown = 0;
// 	divs.forEach(div => {
// 		div.onmouseDown = function(){
// 			mouseDown = 1;
// 		}
// 		div.onmouseUp = function(){
// 			mouseDown = 0;
// 		}

// 		if(mouseDown == 1){
// 			div.style.backgroundColor = 'black';
// 		}
// 	})	
// })

clearButton.addEventListener('click', function(e){
	const divs = document.querySelectorAll('#grid');
	divs.forEach(div => div.style.backgroundColor = "");
})