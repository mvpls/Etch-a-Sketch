const body = document.body;
const container = document.createElement("div");
body.appendChild(container);
container.classList.add("container");

let red = Math.floor(Math.random()* 256);
let green = Math.floor(Math.random()* 256);
let blue = Math.floor(Math.random()* 256);
let redOut = Math.floor(Math.random()* 256);
let greenOut = Math.floor(Math.random()* 256);
let blueOut = Math.floor(Math.random()* 256);


function createDiv(){
    const div = document.createElement("div");
    div.classList.add("row")
    container.appendChild(div)
    for (i=0;i<16;i++){
        const column = document.createElement("div");
        column.classList.add("column");
        div.appendChild(column);
    }
    
}

function createColumn(){
    const div = document.createElement("div");
    div.classList.add("column")
    div.appendChild(div)
}

for (j=0;j<16;j++){
    createDiv();
}


let columns = document.querySelectorAll(".column")

columns.forEach(columns=>{
    columns.addEventListener('mouseover',()=>{
    columns.style.backgroundColor = `rgb(${red},${green},${blue})`;
})})

columns.forEach(columns=>{
    columns.addEventListener('mouseout',()=>{
    columns.style.backgroundColor = `rgb(${redOut},${greenOut},${blueOut})`;
})})


// columns.addEventListener('mouseout',()=>{
//     columns.style.backgroundColor = '';
// })
// Gets input for user
// let sizeOfGrid;
// document.getElementById("mySubmit").onclick = function(){
//     sizeOfGrid = document.getElementById("myText").value;
// }