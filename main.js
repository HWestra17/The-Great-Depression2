function setup() {
    createCanvas(640, 480);
}

function draw() {
   var x = width/2;
    var y = height/2;
    background('#FFFAED');
}

    this.display = function() {
    //earLeft;
    fill('#FF7F50');
    push();
    translate(x-90, y-70);
    rotate(Math.PI / 2);
    ellipse(0,0, 190, 50);
    pop();
    
    //earRight;
    fill('#FF7F50');
    push();
    translate(x+90, y-80);
    rotate(-Math.PI/2);
    ellipse(0,0, 190, 50);
    pop();
    
    //face;
    noStroke();
    fill('#FF7F50');
    ellipse(x,y, 200,200);
    
    //nose;
    fill('#000000');
    ellipse(x,y+30, 50,50);
    
    //eyeLeft;
    fill('#FFFFFF');
    ellipse(x+42, y-26, 74, 74);
   
    //pupilLeft;
    fill('#2E8B57');
    ellipse(x+42, y-26, 40, 40);
    
     //InnerpupilLeft;
    fill('#FF0000');
    ellipse(x+42, y-26, 20, 20);
    
    //eyeRight;
    fill('#FFFFFF');
    ellipse(x-42,y-26,64,64);
    
    //pupilRight;
    fill('#2E8B57');
    ellipse(x-42, y-26, 40, 40);
    
    //InnerpupilRight;
    fill('#FF0000');
    ellipse(x-42, y-26, 20, 20);
    
    //tongue;
    fill('#EE3E36');
    arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
    fill('#EE3E36');
    arc(x+10, y+80, 40, 70, 0, PI+QUARTER_PI, -CHORD);
};
