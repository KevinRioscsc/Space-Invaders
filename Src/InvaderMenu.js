export default class Menu{
    constructor(GameWidth, GameHeight){
        this.imageLogo = new Image();
        this.imageLogo.src = "../Assets/Images/logo_si.png";
        this.image = new Image();
        this.image.src = '../Assets/Images/InvaderA2.png'
        this.image2 = new Image();
        this.image2.src = '../Assets/Images/InvaderB2.png'
        this.image3 = new Image();
        this.image3.src = '../Assets/Images/InvaderC2.png'
        this.image4 = new Image();
        this.image4.src = '../Assets/Images/RedInvader.png'
        this.height = 50;
        this.width = 50;
        this.position = {
            x:-140,
            y:500
        };
        this.invaderSpeed = 0.5;
        this.txtGrowth = 1;


    }

    update= (progress) =>{
        
        this.position.x += this.invaderSpeed;
        if(this.position.x === 1050 || this.position.x === -300)
            this.invaderSpeed *= -1;

    }
    draw = (ctx) =>{
        ctx.drawImage(this.imageLogo, 150, 80)
        ctx.font = '50px Arial';
        ctx.fillStyle = '#fff'
        ctx.fillText('Press Enter to Start!', 320, 700, 1000);
            ctx.drawImage(this.image, this.position.x,this.position.y, this.height, this.width);
            ctx.drawImage(this.image2, this.position.x + 80,this.position.y, this.height, this.width);
            ctx.drawImage(this.image3, this.position.x + 160,this.position.y, this.height, this.width);
            ctx.drawImage(this.image4, this.position.x + 240,this.position.y, this.height, this.width);
        
      


    }
}