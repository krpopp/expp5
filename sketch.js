let sketch = function (p) {

    var cars = [];
    var bg;

    var carXPos = [];
    var carYPos = [];

    var lastMouseX = 0;
    var lastMouseY = 0;

    var currentAngle = 35;

    var startX = 1600;

    p.preload = function(){
      bg = p.loadImage("assets/bg.png");
      cars[0] = p.loadImage("assets/car-1.png");
      cars[1] = p.loadImage("assets/car-2.png");
      cars[2] = p.loadImage("assets/car-3.png");
      cars[3] = p.loadImage("assets/car-4.png");
      cars[4] = p.loadImage("assets/car-5.png");
      cars[5] = p.loadImage("assets/car-6.png");
      cars[6] = p.loadImage("assets/car-7.png");
      cars[7] = p.loadImage("assets/car-8.png");
      p.setupCars();
    }

    p.setup = function () {
       p.createCanvas(1600, 1068);
       p.angleMode(p.DEGREES);
    };

    p.draw = function () {
       p.image(bg, 0, 0);
       p.drawCars();
       //p.moveAngle();
       //lastMouseX = 0;
    };

    p.keyPressed = function () {
       
    };

    p.mousePressed = function(){
        lastMouseX = 0;
    }

    p.mouseDragged = function(){
        //lastMouseX = p.mouseX;
        var moveAmt;
        if(lastMouseX > 0 || lastMouseX < 0){
            moveAmt = lastMouseX - p.mouseX;
            //console.log(moveAmt);
            for(var i = 0; i < cars.length; i++){
                //console.log("was " + carXPos[i]);
                carXPos[i] =  carXPos[i] - moveAmt;
                //console.log("is now " + carXPos[i]);
            }
        } 
        lastMouseX = p.mouseX;
    }

    p.setupCars = function(){
        for(var i = 0; i < cars.length; i++){
            carXPos[i] = startX + (i * 30);
            carYPos[i] = -115;
        }
    }

    p.moveAngle = function(){
        if(carXPos[0] < p.width/2){
            currentAngle = 0;
        }
    }

    p.drawCars = function(){
        p.rotate(currentAngle);
        for(var i = 0; i < cars.length; i++){
            p.image(cars[i], carXPos[i], carYPos[i]);
        }
    }

}