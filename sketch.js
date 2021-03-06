const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;
const Constraint = Matter.Constraint;

var engine, world;

var divisions = []
var plinkos = []
var particles = []

var divisionHeight = 300


var ground

var width = 600

var particles = []

var END = 98
var PLAY = 78

var gameState = PLAY

var score = 0

var count

var particle;

var yellowLine;




function preload() {
}

function setup(){
    createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;


    // yellowLine = createSprite(0,470,2000,10);

    
   

    
    for(var k = 15; k <510 - 10; k = k + 50)
    {
        divisions.push(new Division(k, 800-divisionHeight/2, 10, divisionHeight));
    } 




    for(var x = 40; x<= 460 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,70))
    }

    for(var x = 15; x<= 510 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,110))
    }

    for(var x = 40; x<=460 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,150))
    }

    for(var x = 15; x<= 510 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,190))
    }

    for(var x = 40; x<=460 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,230))
    }

    for(var x = 15; x <=510 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,270))
    }

    for(var x = 40; x <=460 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,310))
    }

    for(var x = 15; x <=510 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,350))
    }
    for(var x = 40; x<=460 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,390))
    }
    for(var x = 15; x<=510 - 10; x=x + 50)
    {
        plinkos.push(new Plinko(x,430))
    }



    ground = new Ground(234,795,450,10)

    // drawSprites()
}

function draw(){
    imageMode(CENTER)
    background("black") 

    ground.display()
    
               
    for(var k=0; k<divisions.length; k++) {
        divisions[k].display()
    }

    for(var x =0; x <plinkos.length; x = x + 1) 
    {
        plinkos[x].display()
    }
    for(var x = 0; x <plinkos.length; x = x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x +1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x + 1)
    {
        plinkos[x].display()
    }


     
    spawnParticle()

    text("score : " + score,40,40)
   
    
    Engine.update(engine);
}
function spawnParticle()
{
  console.log(frameCount)
        if(frameCount%60 ==0)
        {
            console.log("This button is preesed")
            particles.push(new Particle(random(width/2 - 10,width/2 + 10), 10,10));
        }
        for(var j = 0; j<particles.length; j++)
        {
            particles[j].display();
        }


    if(gameState == PLAY)
    {

        yellowLine.display();
        
        if(particle = null)
        {
            particle.display();

            if(particle.body.position.y > 760)
            {
                if(particle.body.position.x < 300)
                {
                    score=score+500;
                    particle=null;
                    if(count>= 5) gameState = "END";
                }
            }
        }

        }
    }    
function mousePressed()
{
    // if(gameState !== END)
    // {
    //   count++ 
    //   particle = new Particle(mouseX, 10, 10,10)
    //   text("GAMEOVER",200,200)
      
    // }
    if(keyDown("r"))
    {
        gameState = "PLAY"
    }
}
