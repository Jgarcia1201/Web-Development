// Variables: 
let rows;
let cols; 
let cell = document.createElement("div");
let color = "black"; 

// Selectors: 

const trippy = document.getElementById('toRainbow'); 
const blackButton = document.getElementById('toBlack'); 
const clear = document.getElementById('clear');
const bigBox = document.getElementById("gridBox"); 
let gridPixels = bigBox.querySelectorAll('div'); 
const slider = document.getElementById('slider'); 


// Functions: 

// Making Boxes

function makeGrid(gridSize) {
    let gridArea = gridSize * gridSize; 
        for (c = 1; c <= gridArea; c++) {
            let cell = document.createElement("div"); 
            bigBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 
            bigBox.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; 
            bigBox.insertAdjacentElement('beforeend', cell).className = "grid-item"; 
        } 
    let gridPixels = bigBox.querySelectorAll('div'); 
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', draw)); 
}

// Drawing Black: 

function draw() {
    if (color == 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
    }
    else if (color == 'black') {
        this.style.backgroundColor = "black"; 
    }
}

// Clearing Grid: 

function clearGrid() {  
    gridPixels = bigBox.querySelectorAll('div'); 
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "rgb(102, 101, 101)");
}

// Default Grid: 
makeGrid(30); 

// Event Listeners: 
trippy.addEventListener('click', () => {
    color = "rainbow"; 
    return color; 
}); 

blackButton.addEventListener('click', () => {
    color = "black"; 
    return color; 
})

slider.addEventListener('input', () => {
    let gridPixels = bigBox.querySelectorAll('div'); 
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeGrid(slider.value); 
})



