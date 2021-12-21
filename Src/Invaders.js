export default class Invaders{
    constructor(x, y){
        this.image = new Image();
        this.image.src = '../Assets/Images/InvaderA1.png'
        this.height = 50;
        this.width = 50;
        this.position = {
            x:x,
            y:y
        };
        this.invaderSpeed = 0.5;


    }
}