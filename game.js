
const gameboard=document.getElementById("gameboard");
const width=gameboard.width;
const height=gameboard.height;
const scoretext=document.getElementById("scoreval")
const UNIT=25; //unit be a factor of width and height
let foodX;
let foodY;
let xvel=25;
let yvel=0;
let score=0;

let snake=[
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}
]
window.addEventListener('keydown',keypress)

const context=gameboard.getContext('2d');
startgame();
function startgame(){
    context.fillStyle='#212121';
    context.fillRect(0,0,width,height)//to fill color from(x,y,width,height)
    
//TO DISPLAY FOOD
createfood();
displayfood();//calling functons
drawSnake();
movesnake();
clearboard();
nextick();
}
function clearboard()
{
    context.fillstyle='#212121';
    context.fillRect(0,0,width,height); 
}
function createfood()
{
    foodX=Math.floor(Math.random()*width/UNIT)*UNIT
    foodY=Math.floor(Math.random()*height/UNIT)*UNIT
    

}
function displayfood()
{
    context.fillStyle='red';
    context.fillRect(foodX,foodY,UNIT,UNIT);
}
function drawSnake()
{
context.fillStyle="aqua";
context.strokeStyle="#212121"
snake.forEach((snakepart) => {
    context.fillRect(snakepart.x,snakepart.y,UNIT,UNIT)
    context.strokeRect(snakepart.x,snakepart.y,UNIT,UNIT)
    
});

}
function movesnake()
{
    const head={x:snake[0].x+xvel,
                 y:snake[0].y+yvel}
    snake.unshift(head)
    if(snake[0].x==foodX&&snake[0].y==foodY)
        {
            score+=1;
            scoretext.textContent=score
            createfood();



        }
    else
    
    snake.pop()        
}


function nextick()
{
    setTimeout(()=>{
        clearboard();
        displayfood();
        drawSnake();
        movesnake();
        
        nextick();
        
    },149);

        
} 
//KEY CODES
//LEFT ARROW=37
//UP ARROW=38
//RIGHT ARROW=39
//DOWN ARROW=40
function keypress(event){
 const LEFT=37
 const UP=38
 const RIGHT=39
 const DOWN=40
  switch(true){
    case(event.keyCode==LEFT && xvel!=UNIT):
    xvel=-UNIT;
    yvel=0;
    break;
    case(event.keyCode==RIGHT &&xvel!=-UNIT):
    xvel=UNIT;
    yvel=0;
    break;
    case(event.keyCode==UP && yvel!=UNIT):
    xvel=0;
    yvel=-UNIT;
    break;
    case(event.keyCode==DOWN && yvel!=-UNIT):
    xvel=0;
    yvel=UNIT;
    break;
    


  }

}

