export default class Red{
    constructor(x, y){
        this.image = new Image();
        this.image.src = '../Assets/Images/RedInvader.png'
        this.height = 50;
        this.width = 50;
        this.position = {
            x:x,
            y:y
        };
        this.invaderSpeed = 1;


    }
}