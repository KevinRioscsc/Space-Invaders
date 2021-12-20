export default class Barriers{
    constructor(x, y){
        
        this.image = new Image();
       this.image.src  = './Assets/Images/FullBlock.png';
        this.fullblock = true;
        this.isOK = false;
        this.isWeak = false;
        this.height = 35;
        this.width = 35;
        this.position = {
            x:x,
            y:y
        };
        
     


    }
    
    okBlock = () =>{
        this.image.src = './Assets/Images/OkBlock.png';
        this.fullblock= false;
       this.isOK = true;
      
      
    }
    weakBlock =() =>{
        this.image.src = './Assets/Images/WeakBlock.png'
        this.isOK = false;
        this.isWeak = true;
       
    }
}