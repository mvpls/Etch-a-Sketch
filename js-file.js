//Initial set up//
const body = document.body;
const container = document.createElement("div");
body.appendChild(container);
container.classList.add("container");
for (j=0;j<16;j++){
    createDiv();
}

function createDiv(){
    const div = document.createElement("div");
    div.classList.add("row","originalGrid")
    container.appendChild(div)
    for (i=0;i<16;i++){
        const column = document.createElement("div");
        column.classList.add("column");
        div.appendChild(column);
        column.style.padding = '60px';
    }
    
}

//Button Logic //

let userDesiredSizeOfGrid;
document.querySelector("button").addEventListener('click', function(){
    let userDesiredSizeOfGrid = prompt ("Please insert desired size of gird (MAX 100!)")
        console.log (userDesiredSizeOfGrid);
    if ((userDesiredSizeOfGrid>100) || (userDesiredSizeOfGrid<1)){
        alert("VALUE IS NOT ACCEPTED BRO");
    }
    removeOriginalGrid();
    for(let i=0;i<userDesiredSizeOfGrid;i++){
        createDivAfterButtonIsClicked(userDesiredSizeOfGrid);
        rgbGenerator();
    }
    
    
})

// Generates random RGB colors

function getRedColor(){
    let red = Math.floor(Math.random()* 256);
    return red;

}

function getGreenColor(){
    let green = Math.floor(Math.random()* 256);
    return green;

}

function getBlueColor(){
    let blue = Math.floor(Math.random()* 256);
    return blue;

}

function createDivAfterButtonIsClicked(userInput){
    const div = document.createElement("div");
    div.classList.add("row", "originalGrid")
    container.appendChild(div)
    let newPadding = 960/userInput
    for (let j=0;j<userInput;j++){
        const column = document.createElement("div");
        column.classList.add("column");
        div.appendChild(column);
        column.style.padding = `${newPadding}px`;
    }
    
}

function removeOriginalGrid(){
    let removeOriginalGrid=document.querySelectorAll(".originalGrid");
    removeOriginalGrid.forEach(removeOriginalGrid=>{
        removeOriginalGrid.remove();
    })
    
}

function rgbGenerator(){
    let columns = document.querySelectorAll(".column")

    columns.forEach(columns=>{
        let red = getRedColor();
        let green = getGreenColor();
        let blue = getBlueColor();
        columns.addEventListener('mouseover',()=>{
        columns.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })})
    
    columns.forEach(columns=>{
        let red = getRedColor();
        let green = getGreenColor();
        let blue = getBlueColor();
        columns.addEventListener('mouseout',()=>{
        columns.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })})    
}

rgbGenerator();