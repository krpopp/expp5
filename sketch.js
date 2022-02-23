let sketch = function (p) {

    var cars = [];
    var bg;

    var carXPos = [];
    var carYPos = [];

    var lastMouseX = 0;
    var lastMouseY = 0;

    var currentAngle = [];

    var startX = 1600;

    var translateAmtX = [];
    var translateAmtY = [];

    var carPhase =[];

    var anglePhase = 0;    

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
      for(var i = 0; i < cars.length; i++){
          //console.log(i);
          currentAngle[i] = 34;
          carPhase[i] = 0;
          translateAmtX[i] = p.width/2;
          translateAmtY[i] = p.height/2;
      }
      p.setupCars();
    }

    p.setup = function () {
       p.createCanvas(1600, 1068);

       translateAmtX = 0;
       translateAmtY = 0;

       p.angleMode(p.DEGREES);
       p.imageMode(p.CENTER);
    };

    p.draw = function () {
       p.image(bg, bg.width/2, bg.height/2);
       p.drawCars();
       p.moveAngle();
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
            //carXPos[i] = startX + (i * 30);
            carXPos[i] = 1600 + (i * 30);
            //console.log(carXPos[i]);
            //carYPos[i] = -115;
            carYPos[i] = -100;
        }
    }

    p.moveAngle = function(){
        for(var i = 0; i < carXPos.length; i++){
            //console.log("oi");
            if(carXPos[i] < 800 && carPhase[i] == 0){
                //console.log("hit point");
                carXPos[i] += 50;
                carYPos[i] += 50;
                currentAngle[i] = 32;
                carPhase[i] = 1;
            }
        }
        // if(carXPos[0] < p.width/2){
        //     translateAmtX = translateAmtX - 10;
        //     translateAmtY = translateAmtY - 10;
        //     currentAngle = 30;
        // }
    }

    p.drawCars = function(){

        for(var i = 0; i < cars.length; i++){
            //p.translate(carXPos[i], carYPos[i]);
            p.resetMatrix();
            p.rotate(currentAngle[i]);
            p.image(cars[i], carXPos[i], carYPos[i]);
        }
    }

}