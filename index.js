import Ship from "./space_invade.js";
import input from "./input.js";
import InvaderMenu from "./InvaderMenu.js";

const canvas = document.querySelector('canvas');



canvas.width = 1000;
canvas.height = 880;

let startGame = false;

canvas.style.background = 'black';


const ctx = canvas.getContext("2d");


const audio = new Audio();
audio.src = "./Assets/Audio/BetterMenu.mp3";
if(document.addEventListener("keydown", (event) =>{

    if(event.key === "Enter"){
        
        startGame = true;
    }
}));


let lastRender = 0;

let ship = new Ship(canvas.width, canvas.height);
let menu = new InvaderMenu(canvas.width, canvas.height);


new input(ship);

const loop = (timestamp) => {
    let progress = timestamp - lastRender;
    lastRender = timestamp;
    ctx.clearRect(0,0, 1000, 900);
    if(!startGame){
        audio.play();
        
        menu.update(progress);
        menu.draw(ctx);
        
    }
    if(ship.win){
        ctx.font = '50px Arial';
        ctx.fillStyle = '#fff'
        ctx.fillText('You Win', 320, 700, 1000);
    }
    if(startGame){
        ship.update(progress);
        ship.draw(ctx);

    }
    
 
    lastRender = timestamp;
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop);