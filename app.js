const container = document.getElementById('container');
const etch = document.getElementById('etch');

//Creates 256 divs
const createDiv = (num) =>{
    for(let i = 0; i <= num; i++){
        let div = document.createElement("div");
        div.className = "sketch";
        etch.appendChild(div);
        console.log([i]);
    }
};
createDiv(256);