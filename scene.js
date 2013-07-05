var stage = new Kinetic.Stage({
  container: 'scene',
  width: 1200,
  height: 500
});

var layer = new Kinetic.Layer();

// Landscape
var sky = new Kinetic.Rect({
  width: 1203,
  height: 300,
  fill: '#BBEBFD',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var sun = new Kinetic.Circle({
  x: 1100,
  y: 80,
  radius: 30,
  fill: '#FFDB66',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var field = new Kinetic.Rect({
  y: 300,
  width: 1203,
  height: 300,
  fill: '#C7E2BC',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var windWave = new Kinetic.Polygon({
  points: [
    0, 305,
    400, 495,
    420, 495,
    20, 305
  ],
  fill: '#CDE3BC',
  shadowColor: '#CDE3BC',
  shadowBlur: 10,
  shadowOffset: 5,
  shadowOpacity: 0.8
});

var waves = new Array();
waves[0] = windWave;
waves[1] = windWave.clone().move(100, 0);
waves[2] = windWave.clone().move(200, 0);
waves[3] = windWave.clone().move(300, 0);
waves[4] = windWave.clone().move(400, 0);
waves[5] = windWave.clone().move(500, 0);
waves[6] = windWave.clone().move(600, 0);
waves[7] = windWave.clone().move(700, 0);
waves[8] = windWave.clone().move(800, 0);
waves[9] = windWave.clone().move(900, 0);
waves[10] = windWave.clone().move(1000, 0);
waves[11] = windWave.clone().move(1100, 0);
waves[12] = windWave.clone().move(1200, 0);
waves[13] = windWave.clone().move(-100, 0);
waves[14] = windWave.clone().move(-200, 0);
waves[15] = windWave.clone().move(-300, 0);

var rightHill = new Kinetic.Blob({
  points: [{
    x: 600,
    y: 400
  }, {
    x: 950,
    y: 250
  }, {
    x: 1300,
    y: 400
  }],
  fill: '#75AA60',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var leftHill = new Kinetic.Blob({
  points: [{
    x: -100,
    y: 400
  }, {
    x: 350,
    y: 230
  }, {
    x: 700,
    y: 400
  }],
  fill: '#75AA60',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

layer.add(sky);
layer.add(sun);
layer.add(rightHill);
layer.add(leftHill);
layer.add(field);


var windLayer = new Kinetic.Layer();
for (var i = 0; i < waves.length; i++) {
  windLayer.add(waves[i]);
}





// Wind Turbines
var leftTurbineBase = new Kinetic.Rect({
  x: 100,
  y: 210,
  width: 8,
  height: 100,
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var leftTurbineAxle = new Kinetic.Circle({
  x: leftTurbineBase.getX() + 4,
  y: leftTurbineBase.getY(),
  radius: 6,
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var firstLeftTurbineBlade = new Kinetic.Polygon({
  points: [
    leftTurbineAxle.getX()    , leftTurbineAxle.getY(), // Bottom
    leftTurbineAxle.getX() - 3, leftTurbineAxle.getY() - 10,
    leftTurbineAxle.getX() - 2, leftTurbineAxle.getY() - 40, // Top
    leftTurbineAxle.getX()    , leftTurbineAxle.getY() - 40, // Top
    leftTurbineAxle.getX() + 3, leftTurbineAxle.getY() - 10
  ],
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3,
  x: leftTurbineAxle.getX(),
  y: leftTurbineAxle.getY(),
  offset: [leftTurbineAxle.getX(), leftTurbineAxle.getY()]
});
var secondLeftTurbineBlade = firstLeftTurbineBlade.clone().rotate((2 * Math.PI) / 3);
var thirdLeftTurbineBlade = firstLeftTurbineBlade.clone().rotate((4 * Math.PI) / 3);

// middle Wind Turbine
var middleTurbineBase = new Kinetic.Rect({
  x: 200,
  y: 215,
  width: 8,
  height: 100,
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var middleTurbineAxle = new Kinetic.Circle({
  x: middleTurbineBase.getX() + 5,
  y: middleTurbineBase.getY(),
  radius: 6,
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var firstMiddleTurbineBlade = new Kinetic.Polygon({
  points: [
    middleTurbineAxle.getX()    , middleTurbineAxle.getY(), // Bottom
    middleTurbineAxle.getX() - 3, middleTurbineAxle.getY() - 10,
    middleTurbineAxle.getX() - 2, middleTurbineAxle.getY() - 40, // Top
    middleTurbineAxle.getX()    , middleTurbineAxle.getY() - 40, // Top
    middleTurbineAxle.getX() + 3, middleTurbineAxle.getY() - 10
  ],
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3,
  x: middleTurbineAxle.getX(),
  y: middleTurbineAxle.getY(),
  offset: [middleTurbineAxle.getX(), middleTurbineAxle.getY()]
}).rotate(Math.PI / 5);
var secondMiddleTurbineBlade = firstMiddleTurbineBlade.clone().rotate((2 * Math.PI) / 3);
var thirdMiddleTurbineBlade = firstMiddleTurbineBlade.clone().rotate((4 * Math.PI) / 3);

var rightTurbineBase = new Kinetic.Rect({
  x: 300,
  y: 210,
  width: 8,
  height: 100,
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var rightTurbineAxle = new Kinetic.Circle({
  x: rightTurbineBase.getX() + 5,
  y: rightTurbineBase.getY(),
  radius: 6,
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3
});

var firstRightTurbineBlade = new Kinetic.Polygon({
  points: [
    rightTurbineAxle.getX()    , rightTurbineAxle.getY(), // Bottom
    rightTurbineAxle.getX() - 3, rightTurbineAxle.getY() - 10,
    rightTurbineAxle.getX() - 2, rightTurbineAxle.getY() - 40, // Top
    rightTurbineAxle.getX()    , rightTurbineAxle.getY() - 40, // Top
    rightTurbineAxle.getX() + 3, rightTurbineAxle.getY() - 10
  ],
  fill: '#C5C5C5',
  stroke: '#FFFFFF',
  strokeWidth: 3,
  x: rightTurbineAxle.getX(),
  y: rightTurbineAxle.getY(),
  offset: [rightTurbineAxle.getX(), rightTurbineAxle.getY()]
}).rotate(Math.PI / 3);
var secondRightTurbineBlade = firstRightTurbineBlade.clone().rotate((2 * Math.PI) / 3);
var thirdRightTurbineBlade = firstRightTurbineBlade.clone().rotate((4 * Math.PI) / 3);

var turbineLayer = new Kinetic.Layer();

turbineLayer.add(leftTurbineBase);
turbineLayer.add(firstLeftTurbineBlade);
turbineLayer.add(secondLeftTurbineBlade);
turbineLayer.add(thirdLeftTurbineBlade);
turbineLayer.add(leftTurbineAxle);

turbineLayer.add(rightTurbineBase);
turbineLayer.add(firstRightTurbineBlade);
turbineLayer.add(secondRightTurbineBlade);
turbineLayer.add(thirdRightTurbineBlade);
turbineLayer.add(rightTurbineAxle);

turbineLayer.add(middleTurbineBase);
turbineLayer.add(firstMiddleTurbineBlade);
turbineLayer.add(secondMiddleTurbineBlade);
turbineLayer.add(thirdMiddleTurbineBlade);
turbineLayer.add(middleTurbineAxle);




// Pylons
var pylon = new Kinetic.Line({
  points: [
    800, 350, // Base
    810, 300,
    820, 130,
    825, 120,
    835, 120,
    840, 130,
    850, 300,
    860, 350,
    830, 300,
    800, 350,
    810, 300,
    850, 300,
    810, 270,
    845, 250,
    815, 230,
    845, 210,
    817, 190,
    843, 170,
    820, 150,
    840, 130,
    880, 150,
    780, 150,
    820, 130,
    817, 190,
    780, 210,
    880, 210,
    845, 190
  ],
  stroke: '#A2A2A2',
  strokeWidth: 5,
  lineJoin: 'round'
});
var pylonOutline = pylon.clone({
  stroke: '#FFFFFF',
  strokeWidth: 11
});

var secondPylon = pylon.clone({
  position: [500, 120],
  scale: 0.6
});
var secondPylonOutline = secondPylon.clone({
  stroke: '#FFFFFF',
  strokeWidth: 11
});

var thirdPylon = pylon.clone({
  position: [820, 170],
  scale: 0.4
});
var thirdPylonOutline = thirdPylon.clone({
  stroke: '#FFFFFF',
  strokeWidth: 11
});

var pylonLayer = new Kinetic.Layer();

pylonLayer.add(pylonOutline);
pylonLayer.add(pylon);
pylonLayer.add(secondPylonOutline);
pylonLayer.add(secondPylon);
pylonLayer.add(thirdPylonOutline);
pylonLayer.add(thirdPylon);

// Add the layer to the stage
stage.add(layer);
stage.add(windLayer);
stage.add(turbineLayer);
stage.add(pylonLayer);


var wind = new Kinetic.Animation(function(frame) {
  for (var i = 0; i < waves.length; i++) {
    waves[i].move(-1, 0);
    if (waves[i].getX() < -400) {
      waves[i].move(1600, 0);
    }
  };
}, windLayer);

wind.start();


// Wind Turbine Animations
var angularSpeed = Math.PI / 2;
var rotation = new Kinetic.Animation(function(frame) {
  var angleDiff = frame.timeDiff * angularSpeed / 1000;
  firstLeftTurbineBlade.rotate(angleDiff);
  secondLeftTurbineBlade.rotate(angleDiff);
  thirdLeftTurbineBlade.rotate(angleDiff);

  firstMiddleTurbineBlade.rotate(angleDiff);
  secondMiddleTurbineBlade.rotate(angleDiff);
  thirdMiddleTurbineBlade.rotate(angleDiff);

  firstRightTurbineBlade.rotate(angleDiff);
  secondRightTurbineBlade.rotate(angleDiff);
  thirdRightTurbineBlade.rotate(angleDiff);
}, turbineLayer);

rotation.start();

