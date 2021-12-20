export default class Bullet{
    constructor(gameY, gameX){
        this.height = 30;
        this.width =  10 ;

        this.image = new Image();
        this.image.src = './Assets/Images/Bullet.png'

       this.position = {
           x: gameX,
           y: gameY
       }
       this.maxBulletSpeed = 10;

       this.hit = false;
       
    }

}