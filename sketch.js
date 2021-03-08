const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;
const Constraint = Matter.Constraint;

var engine, world;

var divisions = []
var plinkos = []

var divisionHeight = 300


var ground

var width = 600

var particle

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


}

function draw(){
    imageMode(CENTER)
    background("black") 

    ground.display()

    rect(600,470,13000,10)

    fill("yellow")

    
    
               
    for(var k=0; k<divisions.length; k++) {
        divisions[k].display()
    }

    for(var x =0; x <plinkos.length; x = x + 1) 
    {
        plinkos[x].display()
    }
     
    // if player presses SPACE, spawn ONE particle. Make sure that we don't already have another particle.
    // If there is a particle, display it.
    // Track the particle till 750

    spawnParticle()

    text("score : " + score,40,40)
    text("press space to spawn the particle and if you want to stop spawning the particles just press any key but not space", 0,460)

   
    
    Engine.update(engine);
}
function spawnParticle()
{
        
            if(keyCode == 32 && particle == null)
            {
                particle = new Particle(random(width/2 - 10,width/2 + 10), 10,10)


            }

               if(particle != null)
                {  
                   particle.display()
                }

                if(particle != null)
                {
                   var pos = particle.body.position;
                   if(pos.y > 750) 
                   {
                       
                        // scoring
                        if(pos.x <= 400)
                        {
                                score += 500
                        }

                        if(pos.x > 400 && pos.x <= 500)
                        {

                            score += 100

                        }

                        if(pos.x > 501 && pos.x <= 800) 
                        {
                            score += 200
                        }

                        particle = null
                    }

                }
                

        // if(particle != null)
        // {
        //     console.log("Pos: " + particle.body.position)
        //     particle.display();

        //     if(particle.body.position.y > 760 && particle.body.position.x < 300)
        //     {
        //         score=score+500;
        //         particle=null;
        //     }
        // }
}

function mousePressed()
{
    // if(gameState !== END)
    // {
    //   count++ 
    //   particle = new Particle(mouseX, 10, 10,10)
    //   text("GAMEOVER",200,200)
      
    // }
    // if(keyDown("r"))
    // {
    //     gameState = "PLAY"
    // }
}
