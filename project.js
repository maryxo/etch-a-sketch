const buttons = document.querySelectorAll('buttons');
const screen = document.querySelector('.gridContainer');
let pixel = '';

const drawGrid = (size) => {
    for(i = 0; i < size ** 2; i++) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = '#f7f4f4';
    screen.appendChild(pixel);
    }
    screen.style.gridTemplateColumns = `repeat(${size}, auto)`;
    screen.style.gridTemplateRows = `repeat(${size}, auto)`;
}

drawGrid(16)

//ColorPicker button
const colorPickerBtn = document.getElementById('colorPicker')

colorPickerBtn.addEventListener('input', () => {
    let value = document.getElementById('resize').value;
    let cell = screen.children;
    for (let i = 0; i < value*value; i++) {
       cell[i].addEventListener('mouseover', (events) => {
           events.target.style.background = colorPickerBtn.value
       }) 
    }
})

//Black Button
const blackModeBtn = document.getElementById('black');

blackModeBtn.addEventListener('click', () => {
    let value = document.getElementById('resize').value;
    let cell = screen.children;
    for (let i = 0; i < value*value; i++) {
        cell[i].addEventListener('mouseover', (events) => {
            events.target.style.background = 'black';
        })
    }
})

//Rainbow Button
function rainbowColors() {
    let letters = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

const rgb = document.querySelector('#rainbow');

rgb.addEventListener('click', () => {
    let value = document.getElementById('resize').value;
    let cell = screen.children;
    for (let i = 0; i < value * value; i++) {
        cell[i].addEventListener('mouseover', (events) => {
            events.target.style.background = rainbowColors()
        })
    }
})

//Erase Button
const eraserBtn = document.getElementById('erase');

eraserBtn.addEventListener('click', () => {
    let value = document.getElementById('resize').value;
    let cell = screen.children;
    for (let i = 0; i < value*value; i++) {
        cell[i].addEventListener('mouseover', (events) => {
            events.target.style.background = '#f7f4f4';
        })
    }
})

//Reset button
const resetBtn = document.getElementById('reset');

function reset() {
    let gridPixels = screen.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.background = '#f7f4f4')
}

reset()

resetBtn.addEventListener('click', reset);

//Resize input

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const slider = document.querySelector('#resize');
const screenVal = document.querySelector('.value');
slider.addEventListener('input', () => {
    let val = document.getElementById('resize').value;
    screenVal.textContent = val;
    removeAllChildNodes(screen);
    screen.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`)
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event) {
            event.target.style.background = 'black'
        })
        screen.appendChild(div);   
    }
    
})
