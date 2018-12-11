var fox;
var feed = [];
var numFood = 10;

var a = [1,2,3];

function setup() {
    rectMode(CENTER);
    createCanvas(1024, 768);
    fox = new Fox();

    for (var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0, 255, 0);
    fox.display();

    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    fox.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;

    this.display = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Fox() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;

    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };

    this.eat = function () {
        for (var i = feed.length - 1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
            }
        }
    };

    this.display = function() {
        x = mouseX;
        y = mouseY;
        noStroke();
        
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
}