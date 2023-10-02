const canvas =document.getElementById("game")
const ctx= canvas.getContext("2d")
canvas.width=1000;
canvas.height=500;




const jumpHeight=350;
const playerWidth=100
const playerHeight= 120
const groundWidth=2400
const groundHeight=24
const groundSpeed=0.5;
const cactusHeight=105;
const cactusWIdth=51
const maxCactusLength=1800;
const minCactusLength=1000;



let walkAnim=35;
let x=0
let y= 1000
let z=1000
let previousTime=null

let jumpPressed=false;
let jumpLength=350 
let gameOver=false
let rise=false;
let pressed=false;
let score=0;

function start()
{
    const fontSize = 50 ;
    ctx.font = `${fontSize}px MinecraftFont, sans-serif`; 
    ctx.fillStyle = "grey";
    ctx.fillText("PRESS ENTER TO START ", canvas.width / 4.5,canvas.height / 2 );
    
      //document.removeEventListener("keypress")
      //drawPlayer()
      //drawGround()
    
}
// function spacebarHandler(event) {
//     if (event.code === "Enter") {
//         gameOver=false;
//         console.log("tes")
//       pressed=true
//       clearScreen()
//       drawPlayer()
//       updateGround()
//       gameloop();
    
//     }
//   }
//   document.addEventListener("keypress", spacebarHandler);
start();
// function spacebarHandler(event) {
//     if (event.key === " ") {
//         console.log("tes")
//       pressed=true
//       requestAnimationFrame(gameloop)
//       document.removeEventListener("keypress",spacebarHandler)
//     }
//   }
  
//   document.addEventListener("keypress", spacebarHandler);

function jumppressed(event)
{
    if (event.key === " ") {
        jumpPressed=true;
        //requestAnimationFrame(gameloop)
      }
}
document.addEventListener("keypress", jumppressed);
  


 function jump ()
{
    if(jumpLength<=0)
    {
        jumpPressed=false;
        jumpLength=jumpHeight;
    }
    if(jumpLength>=175)
    {
        ctx.drawImage(tempImage,50,jumpLength ,playerWidth,playerHeight)
    }
    else 
    {
        ctx.drawImage(tempImage,50,350-jumpLength ,playerWidth,playerHeight)
    }
    jumpLength-=4;
    console.log("test1")
    gameOver=isCollide()
}


let playerImage =new Image();
playerImage.src="assets/dino-stationary.png"
let tempImage=new Image();
tempImage=playerImage;

playerImage.onload=function(){
    console.log("hii")                 
    ctx.drawImage(playerImage,50,400 ,playerWidth,playerHeight)
    //requestAnimationFrame(gameloop)
}

let player1=new Image()
player1.src="assets/dino-run-0.png"


let player2=new Image()
player2.src="assets/dino-run-1.png"


const ground =new Image();
ground.src="assets/ground.png"

const cactus=new Image();
cactus.src="assets/cactus.png"


function clearScreen()
{
    if(!gameOver)
    
    {
        score+=1;
        console.log(score)
        ctx.fillStyle="white"
        ctx.fillRect(0,0,canvas.width,canvas.height)
        // requestAnimationFrame(gameloop)
    }

}
function clearScreenForGameOver()
{
    ctx.fillStyle="white"
    ctx.fillRect(0,0,canvas.width,canvas.height)
}
 function isCollide()
 {
    if(y<=120 && jumpLength+90 > 340){
        gameOver=true;
        return true;
    }
    if(z<=120  && jumpLength+90 > 340)
    {
        gameOver=true;
        return true;
    }
     
 }
ground.onload=function(){

    ctx.drawImage(ground,0,435,groundWidth,groundHeight)
    
}
function drawPlayer()
{
    ctx.drawImage(playerImage,50,350    ,playerWidth,playerHeight)   
      
}


function drawGround()
{
    ctx.drawImage(ground,0,435,groundWidth,groundHeight)
}


function updateGround()
{
    ctx.drawImage(ground,x,435,groundWidth,groundHeight)
    x-=3;
    if(x<=-1400)x=0
    requestAnimationFrame(gameloop)
}



function updatePlayer()
{
    if(walkAnim<=0)
    {
        playerImage=player1;
        [player1,player2]=[player2,player1];
        walkAnim=35;
    }
    else 
    {
        walkAnim-=1;
    }
    //requestAnimationFrame(gameloop)
}


function addCactus()
{
    ctx.drawImage(cactus,1000,360,cactusWIdth,cactusHeight);
}
function updateCactus1()
{
    ctx.drawImage(cactus,y,360,cactusWIdth,cactusHeight);
    y-=3;
    if(y<-10)
    y=Math.floor(Math.random()*(maxCactusLength-minCactusLength+1)+minCactusLength)
}

function updateCactus2()
{
    ctx.drawImage(cactus,z,360,cactusWIdth,cactusHeight);
    z-=3;
    if(z<-10)
    z=Math.floor(Math.random()*(3000-2000+1)+2200)
}

function showGameOver()
{
    // cancelAnimationFrame(id);
    pressed=false;
    const fontSize = 40 ;
    ctx.font = `${fontSize}px MinecraftFont, sans-serif`; 
    ctx.fillStyle = "grey";
    const x = canvas.width / 3;
    const y = canvas.height / 1.5;
    ctx.fillText("GAME OVER your score is: \n"+`${score}`, x, y);
    score=0
    //clearScreenForGameOver()
    start()
    
}
// function setupGameReset()
// {
//     setTimeout(()=>{
//         window.addEventListener("keyup",reset,{once: true})
//     },1000)
// }
// function reset(){
//     gameloop()
//     gameOver=false
// }
let i=0;

function gameloop() 
{
    if(!gameOver)
    {

        if(jumpPressed)
        {
         clearScreen()
         updateGround()
         updateCactus1()
         updateCactus2()
         jump()
         
        } 
        else{
            clearScreen()
            drawPlayer();
            updatePlayer();
            updateCactus1()
            updateCactus2()
            updateGround()
        }
    }
    //isCollide()
    if(!gameOver && isCollide())
    {
        gameOver=true;
        
    }
    if(gameOver){
        showGameOver()
    }
}
if(pressed)
requestAnimationFrame(gameloop)




function spacebarHandler(event) {
    if (event.code === "Enter") {
        gameOver=false;
        console.log("tes")
      pressed=true
      y=1000
      z=2000
      clearScreen()
      drawPlayer()
      updateGround()
      gameloop();
    
    }
  }
  document.addEventListener("keypress", spacebarHandler);