const container = document.getElementById('container');
const etch = document.getElementById('etch');
const btn = document.getElementById('btn');
const start = () =>{

    btn.addEventListener('click', (event) => {
        value = prompt("Please enter what grid size(?x?) do you want");
        //return gridSum = value * value;
    });
    //Creates 256 divs
    const createDiv = (num) =>{
        for(let i = 0; i < num; i++){
            let div = document.createElement("div");
            div.className = "sketch";
            etch.appendChild(div);
            //etch.style.setProperty('grid-template-columns', 'repeat(' + value + ', 3rem)');
        }
    };
    createDiv(256);
}
start();
