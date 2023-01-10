const container = document.getElementById('container');
let etch = document.getElementById('etch');
const btn = document.getElementById('btn');

btn.addEventListener('click', start);
function start(){
        etch.textContent = "";
        let value = prompt("Please enter what grid size(?x?) do you want");
        let gridSum = value * value;
        //return gridSum = value * value;
    
    //Creates 256 divs
        for(let i = 0; i < gridSum; i++){
            let divRow = document.createElement("div");
            divRow.className = "divR";
            etch.appendChild(divRow);
        };
    };


