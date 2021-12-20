import Bullet from "./Bullet.js";
import Invaders from "./Invaders.js";
import InvaderB from "./InvaderB.js";
import InvaderC from "./InvaderC.js";
import Barriers from "./Barriers.js";
import Red from "./Red.js";

export default class Ship{
    constructor(Game_Width, Game_Height){
        this.width = 80;
        this.height = 30;

        this.position = {
            x:Game_Width/2,
            y: Game_Height -100
        };

        this.maxSpeed = 5;
        this.speed = 0;
        this.image = new Image();
        this.image.src = "./Assets/Images/Ship.png"

        this.bulletArr = [];
        this.bulletInvader = [];

        this.redGuy = [new Red(-50, 100)];
       
      
        this.invaderArr = [];
        this.invaderBArr = [];
        this.invaderCArr =[];
        this.invaderC2Arr = [];
       
        this.barrierL1 = [];
        this.barrierL2 = [];
        this.barrierL3 = [];
        this.barrierL4 = [];
        this.barrierL5 = [];
        this.barrierL6 = [];
        this.barrierL7 = [];
        this.barrierL8 = [];
        this.barrierL9 = [];

        this.bulletHit = true;
        this.gameOver = false;
        this.lose = false;
        this.win = false;

        this.shipHealth = 3;

        
        
        for(let i = 0; i < 9; i++){
            this.invaderArr.push(new Invaders((Game_Width/7) + (i * 80), 170))
           
        }
        for(let i = 0; i < 9; i++){
            this.invaderBArr.push(new InvaderB((Game_Width/7) + (i * 80), 240))
           
        }
        for(let i = 0; i < 9; i++){
            this.invaderCArr.push(new InvaderB((Game_Width/7) + (i * 80), 310))
           
        }
        for(let i = 0; i < 9; i++){
            this.invaderC2Arr.push(new InvaderC((Game_Width/7) + (i * 80), 380))
           
        }

        for(let i = 0; i < 4; i++){
            this.barrierL1.push(new Barriers((Game_Width/9) + (i * 35), 610))
        }
        for(let i = 0; i < 4; i++){
            this.barrierL2.push(new Barriers((Game_Width/9) + (i * 35), 640))
        }
        for(let i = 0; i < 4; i++){
            if(i === 1 || i === 2){
                this.barrierL3.push(0);
                continue;
            }
            this.barrierL3.push(new Barriers((Game_Width/9) + (i * 35), 670))
        }
        for(let i = 0; i < 4; i++){
            this.barrierL4.push(new Barriers((Game_Width/2.3) + (i * 35), 610))
        }
        for(let i = 0; i < 4; i++){
            this.barrierL5.push(new Barriers((Game_Width/2.3) + (i * 35), 640))
        }
        for(let i = 0; i < 4; i++){
            if(i === 1 || i === 2){
                this.barrierL6.push(0);
                continue;
            }
            this.barrierL6.push(new Barriers((Game_Width/2.3) + (i * 35), 670))
        }
        for(let i = 0; i < 4; i++){
            this.barrierL7.push(new Barriers((Game_Width/1.35) + (i * 35), 610))
        }
        for(let i = 0; i < 4; i++){
            this.barrierL8.push(new Barriers((Game_Width/1.35) + (i * 35), 640))
        }
        for(let i = 0; i < 4; i++){
            if(i === 1 || i === 2){
                this.barrierL9.push(0);
                continue;
            }
            this.barrierL9.push(new Barriers((Game_Width/1.35) + (i * 35), 670))
        }
        this.ivaders = [this.invaderArr, this.invaderBArr, this.invaderCArr, this.invaderC2Arr];
        this.barrier = [[this.barrierL1,this.barrierL2, this.barrierL3], [this.barrierL4,this.barrierL5,this.barrierL6], [this.barrierL7,this.barrierL8,this.barrierL9]];
      
    }
    //Needs Cleaning later Move to separate file 
    /* Ship Controls*/
    moveLeft = () =>{
           
        this.speed = -this.maxSpeed;
       
    }
    stop = () =>{
        this.speed = 0;
    }
    moveRight = () => {
        this.speed = this.maxSpeed;
    }
    /*Border Check for Ship */
    checkWall = (position) =>{
        if(position.x <= -5){
            console.log(position.x);
            position.x =0;
        }else if(position.x >= 950){
            position.x = 950;
            console.log(position.x);
        }
    }
    /*PLayer shoots with SPACE new bullet gets added to array Bullet */
   shoot = () => {
       if(this.bulletHit){
            this.bulletArr.push(new Bullet(this.position.y, this.position.x + 35))
            this.bulletHit = false;
       }
       
   }

   /*Did Bullet hit invader or wall */
   didHit = () =>{
       for(let i = 0; i < this.bulletArr.length; i++){
           if(this.bulletArr[i].position.y === 0){
                this.bulletArr = this.bulletArr.filter((item, index) =>{
                     return index !== i;
            })
            this.bulletHit = true;
            break; 
           }
           break_loop:{
           for(let j = 0; j < this.ivaders.length; j++){    
             
               for(let h = 0; h < this.ivaders[j].length; h++){  
                      
                    if(this.ivaders[j][h].position.x < this.bulletArr[i].position.x + this.bulletArr[i].width
                         && this.ivaders[j][h].width + this.ivaders[j][h].position.x > this.bulletArr[i].position.x
                         && this.ivaders[j][h].position.y < this.bulletArr[i].position.y + this.bulletArr[i].height 
                         && this.ivaders[j][h].height + this.ivaders[j][h].position.y > this.bulletArr[i].position.y){
                            console.log("array", j, "hit: ", h);
                            this.ivaders[j] = this.ivaders[j].filter((item, index) => {
                                return index !== h;
                            })
                            console.log(this.ivaders[j]);

                            this.bulletArr = this.bulletArr.filter((item, index) =>{
                                return index !== i;
                            })

                            this.bulletHit = true;

                     
                     break break_loop;
                    }     
               }
           }
           
        }
        
       

       }
   }
   didHitBarrier = (bullet) =>{
    for(let i = 0; i < bullet.length; i++){
        
        break_loop:{
        for(let j = 0; j < this.barrier.length; j++){    
          
            for(let h = 0; h < this.barrier[j].length; h++){  
                
                for(let k = 0; k < this.barrier[j][h].length; k++){
                   
                   if(this.barrier[j][h][k] !== 0){
                        if(this.barrier[j][h][k].position.x < bullet[i].position.x + bullet[i].width
                         && this.barrier[j][h][k].width + this.barrier[j][h][k].position.x > bullet[i].position.x
                         && this.barrier[j][h][k].position.y < bullet[i].position.y + bullet[i].height 
                         && this.barrier[j][h][k].height + this.barrier[j][h][k].position.y > bullet[i].position.y){
                          
                           if(this.barrier[j][h][k].fullblock){
                                this.barrier[j][h][k].okBlock();
                           }else if(this.barrier[j][h][k].isOK){
                                this.barrier[j][h][k].weakBlock();
                           }else if(this.barrier[j][h][k].isWeak){
                              this.barrier[j][h] = this.barrier[j][h].filter((item, index) =>{
                                    return index !== k;
                                });
                           }
                           if(bullet === this.bulletInvader){
                            this.bulletInvader = bullet.filter((item, index) =>{
                                return index !== i;
                             });
                           }
                           if(bullet === this.bulletArr){
                            this.bulletArr = bullet.filter((item, index) =>{
                                return index !== i;
                             });
                             this.bulletHit = true;
                           }
                         
                         
                             
                            break break_loop;
                        }  
                    }  
                } 
            }
        }
        
     }
     
    

    }
}
   clearInvaderBullets = () =>{
       this.bulletInvader = this.bulletInvader.filter((item) =>{
           return item.position.y !== 1000;
       })
    }
   invaderMove = (arr) =>{
    for(let i = 0; i < arr.length; i++){
         for(let j = 0; j < arr[i].length; j++){
            arr[i][j].position.x += arr[i][j].invaderSpeed;
            
        
            if(parseInt(arr[0][arr[0].length -1].position.x) === 950 || parseInt(arr[0][0].position.x) === 0){
                arr[i][j].position.y += 10
                arr[i][j].invaderSpeed *= -1;
            }

         }
        
    }

   }
   invaderShoot = () => {
       this.ran = Math.random();
       if(Math.floor(this.ran * 100) === 90 && this.ivaders[0].length !== 0){
            this.i = Math.floor(Math.random() * this.ivaders.length);
            this.j = Math.floor(Math.random() * this.ivaders[this.i].length);
           
            if(this.ivaders[this.i].length !== 0)
                this.bulletInvader.push(new Bullet(this.ivaders[this.i][this.j].position.y, this.ivaders[this.i][this.j].position.x))
       }
       this.clearInvaderBullets();
      
   }
   redMove = () =>{
     
            for(let i = 0; i < this.redGuy.length; i++){
                if(parseInt(this.redGuy[i].position.x) === 1000){
                this.redGuy.pop(); 
                setTimeout(() =>{
                    this.redGuy.push(new Red( 0, 100));  
                }, 17000)
                continue;
                
                }
                this.redGuy[i].position.x += this.redGuy[i].invaderSpeed;
            }
    
      
      
   }
   redHitbox = () =>{
    for(let j = 0 ; j < this.bulletArr.length; j++){
        for(let i = 0; i < this.redGuy.length; i++){
                if(this.redGuy[i].position.x < this.bulletArr[j].position.x + this.bulletArr[j].width
                    && this.redGuy[i].width + this.redGuy[i].position.x > this.bulletArr[j].position.x
                    && this.redGuy[i].position.y < this.bulletArr[j].position.y + this.bulletArr[j].height 
                    && this.redGuy[i].height + this.redGuy[i].position.y > this.bulletArr[j].position.y){
                        this.bulletArr = this.bulletArr.filter((item, index) =>{
                            return index !== i;
                        });
                        this.bulletHit = true;
                        this.redGuy.pop();
                        setTimeout(() =>{
                            this.redGuy.push(new Red( 0, 100));  
                        }, 17000)
                        

                    }
                }


         }
   }

   drawArr = (arr, ctx) =>{
    for(let i = 0; i < arr.length; i++){
        for(let j =0; j < arr[i].length; j++){
            if(arr[i][j] === 0)
                continue;
            ctx.drawImage(arr[i][j].image ,arr[i][j].position.x, arr[i][j].position.y, arr[i][j].width, arr[i][j].height);
        }
       
    }
   }
   drawArrBarrier = (arr, ctx) =>{
    for(let i = 0; i < arr.length; i++){
        for(let j =0; j < arr[i].length; j++){
            for(let h = 0; h < arr[i][j].length; h++){
                if(arr[i][j][h] === 0)
                    continue;
            
            
             
                ctx.drawImage(arr[i][j][h].image,arr[i][j][h].position.x, arr[i][j][h].position.y, arr[i][j][h].width, arr[i][j][h].height);

            }
           
        }
       
    }
   }
   /*Game Over Conditions*/

   invaderhitPlayer = () => {
       for(let i = 0; i < this.bulletInvader.length; i++){
        if(this.position.x < this.bulletInvader[i].position.x + this.bulletInvader[i].width
            && this.width + this.position.x > this.bulletInvader[i].position.x
            && this.position.y < this.bulletInvader[i].position.y + this.bulletInvader[i].height 
            && this.height + this.position.y > this.bulletInvader[i].position.y){
               this.bulletInvader = this.bulletInvader.filter((item, index) => {
                   return index !== i;
               })
               

                this.shipHealth--;
                this.gameOver = true;

                break;
                

            }
       }
   } 
   playerWins = () => {
    if(this.ivaders[0].length === 0 && this.ivaders[1].length === 0 && this.ivaders[2].length === 0 ){
        this.gameOver = true;
        this.win = true;
    }
   }

    update = (progress) =>{
            if(!this.gameOver){
        
            this.checkWall(this.position);
            this.position.x += this.speed;

            for(let i = 0; i < this.bulletArr.length; i++){
            
                this.bulletArr[i].position.y -= 5;
            }
            
            for(let i = 0; i < this.bulletInvader.length; i++){
            
                this.bulletInvader[i].position.y += 5;
            }

            this.invaderMove(this.ivaders);
        
            this.didHit();
            this.invaderShoot();
            this.didHitBarrier(this.bulletInvader);
            this.didHitBarrier(this.bulletArr);
            setTimeout(this.redMove, 4000);
            this.redHitbox();
            this.invaderhitPlayer();
            this.playerWins();
    }else{
        if(document.addEventListener("keydown", (event) =>{

            if(event.key === "Enter"){
                
              this.gameOver = false;
              this.lose = false;
            }
        }));
    }
        
        
       
    }
    
    draw = (ctx) => {
        if(!this.gameOver){
        for(let i = 0; i < this.redGuy.length; i++){
            ctx.drawImage(this.redGuy[i].image ,this.redGuy[i].position.x, this.redGuy[i].position.y, this.redGuy[i].width, this.redGuy[i].height);
        }
        for(let j =0; j < this.bulletArr.length; j++){
            ctx.drawImage(this.bulletArr[j].image ,this.bulletArr[j].position.x, this.bulletArr[j].position.y, this.bulletArr[j].width, this.bulletArr[j].height);
        }
        for(let j =0; j < this.bulletInvader.length; j++){
            ctx.drawImage(this.bulletInvader[j].image ,this.bulletInvader[j].position.x, this.bulletInvader[j].position.y, this.bulletInvader[j].width, this.bulletInvader[j].height);
        }
       
        this.drawArr(this.ivaders,ctx);
        this.drawArrBarrier(this.barrier,ctx);
           
        ctx.drawImage(this.image,this.position.x, this.position.y, this.width, this.height)
              
    }else if(this.gameOver && !this.lose ){
        ctx.font = '50px Arial';
        ctx.fillStyle = '#fff'
        ctx.fillText(`You have ${this.shipHealth} lives left`, 320, 700, 1000);
        setTimeout(() =>{
            this.gameOver = false;

        },4000)
    }
    
    
}

    
}






