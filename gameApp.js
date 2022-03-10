
const stage = document.createElement('game'),
//ctx = stage.getContext('2d'),
dialogue = document.querySelector('.splash-screen'),
startBtn = dialogue.querySelector('button')



/*let gun = [], asteroid = [],
    playing = false,
    gameStarted = false,
    speedMultiplier,
    enemySeedFrameInterval,
    score = 0,
    tick = 0,
    laserTick = 0;*/




    function startGame(e) {
        console.log('starting game'); 
    
        dialogue.remove(asteroid);
       animation =true;
        
        gameStarted = true;

        
        
     
        
      }

      startBtn.addEventListener('click', startGame);
              
        speedMultiplier = 6,
      enemySeedFrameInterval = 20;
      
      playing = true;
     
       
    



      



        document.removeEventListener("keydown", jump)
        document.addEventListener("keydown", jump)


//var dino = document.getElementById("dino");
//character ="assets\dino_gun.GIF";
//document.addEventListener("click",jump);

//const element = character(".\assets\dino_gun.GIF")

var dino = document.getElementById("dino");
var asteroid = document.getElementById("asteroid");
function jump(){
    dino.classList.add("animate");
 

    setTimeout(removeJump,500); //300ms = length of animation
    if(dino.classList == "animate"){return;}


};
function removeJump(){
    dino.classList.remove("animate");
}
var asteroid1 = document.getElementById("asteroid1");
function gameOver(){
 let characterTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
 let blockLeft = parseInt(window.getComputedStyle(asteroid1).getPropertyValue("left"));
 if(blockLeft<360 && blockLeft>0 && characterTop>=110){
      asteroid1.style.animation ="none";
      asteroid1.style.display ="none";
     alert("Game Over");
    

 }
}









setInterval(gameOver, 10)
