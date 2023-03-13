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

    var carYMove = [];

    var carPhase = [];

    var anglePhase = 0;

    var beginX = [];
    var beginY = [];
    var endX = [];
    var endY = [];
    var distX = [];
    var distY = [];
    var exponent = 4;
    var step = [];
    var pct = [];

    p.preload = function () {
        bg = p.loadImage("assets/bg.png");
        cars[0] = p.loadImage("assets/car-1.png");
        //   cars[1] = p.loadImage("assets/car-2.png");
        //   cars[2] = p.loadImage("assets/car-3.png");
        //   cars[3] = p.loadImage("assets/car-4.png");
        //   cars[4] = p.loadImage("assets/car-5.png");
        //   cars[5] = p.loadImage("assets/car-6.png");
        //   cars[6] = p.loadImage("assets/car-7.png");
        //   cars[7] = p.loadImage("assets/car-8.png");
        for (var i = 0; i < cars.length; i++) {
            //console.log(i);
            currentAngle[i] = 36;
            carPhase[i] = 0;
            carYMove[i] = 0.73;
            translateAmtX[i] = p.width / 2;
            translateAmtY[i] = p.height / 2;
        }
        p.setupCars();
    }

    p.setup = function () {
        p.createCanvas(1600, 1068);
        p.angleMode(p.DEGREES);
    };

    p.draw = function () {
        p.image(bg, 0, 0);
        p.moveAngle();
        p.drawCars();
        //lastMouseX = 0;
    };

    p.keyPressed = function () {

    };

    p.mousePressed = function () {
        lastMouseX = 0;
    }

    p.mouseDragged = function () {
        //lastMouseX = p.mouseX;
        // var moveAmt;
        // if(lastMouseX > 0 || lastMouseX < 0){
        //     moveAmt = lastMouseX - p.mouseX;
        //     for(var i = 0; i < cars.length; i++){
        //         carXPos[i] =  carXPos[i] - moveAmt;
        //         carYPos[i] = carYPos[i] - (moveAmt * carYMove[i]);
        //     }
        // } 
        // lastMouseX = p.mouseX;
        // for(var i = 0; i < cars.length; i++){
        //     pct[i] += step[i];
        //     if(pct[i] < 1.0){
        //         carXPos[i] = beginX[i] + pct[i] * distX[i];
        //         carYPos[i] = beginY[i] + p.pow(pct[i], exponent) * distY[i];
        //     }
        // }
    }

    p.setupCars = function () {
        for (var i = 0; i < cars.length; i++) {
            carXPos[i] = 1440 + (i * 30);
            carYPos[i] = 900 + (i * 30);
            // carXPos[i] = 100;
            // carYPos[i] = 800;
            beginX[i] = carXPos[i];
            beginY[i] = carYPos[i];
            endX[i] = 100;
            endY[i] = 890;
            distX[i] = endX[i] - beginX[i];
            distY[i] = endY[i] - beginY[i];
            step[i] = 0.01;
            pct[i] = 0.0;
        }
    }

    p.moveAngle = function () {
        // for(var i = 0; i < cars.length; i++){
        //     if(carXPos[i] < 800 && carXPos[i] >= 790){
        //         carYMove[i] = 0.6;
        //     } else if(carXPos[i] < 790 && carXPos[i] >= 780){
        //         carYMove[i] = 0.5;
        //     } else if(carXPos[i] < 780 && carXPos[i] >= 770){
        //         carYMove[i] = 0.4;
        //     } else if(carXPos[i] < 770 && carXPos[i] >= 760){
        //         carYMove[i] = 0.3;
        //     } else if(carXPos[i] < 760 && carXPos[i] >= 750){
        //         carYMove[i] = 0.2;
        //     } else if(carXPos[i] < 750 && carXPos[i] >= 740){
        //         carYMove[i] = 0.1;
        //     } else if(carXPos[i] < 740 && carXPos[i] >= 730){
        //         carYMove[i] = -0.1;
        //     } else if(carXPos[i] < 730 && carXPos[i] >= 720){
        //         carYMove[i] = -0.2;
        //     } else if(carXPos[i] < 500){
        //         carYMove[i] = -1;
        //     }
        // }
    }

    p.drawCars = function () {
        for (var i = 0; i < cars.length; i++) {
            p.push();
            p.translate(carXPos[i], carYPos[i]);
            p.rotate(currentAngle[i]);
            p.image(cars[i], 0, 0);
            p.pop();
        }
    }

}