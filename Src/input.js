export default class input{
    constructor(ship){
        document.addEventListener("keydown", (event) =>{
           
            switch(event.key){
                case 'ArrowLeft':
                    ship.moveLeft();
                    break;
                case 'ArrowRight':
                    ship.moveRight();
                    break;
                default :
                    ship.shoot();
                    break;
               
            }
        })

        document.addEventListener('keyup', (event) => {
            switch(event.key){
                case 'ArrowLeft':
                    ship.stop();
                    break;
                case 'ArrowRight':
                    ship.stop();
                    break;
                
            }
        })
    }

}