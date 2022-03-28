function create_generic_ball(x,y,z, radius,color) {
    // Create a div element representing a "generic" ball:
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = z;  //Math.floor(random_position(10));
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = radius + 'px';    
    div.style.height = radius + 'px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    
    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);
    return div;        
}

function random_color(){
    // random color
    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return color;
}

function random_position(A){
    var pos = A * Math.random();    
    return pos
}

var ball_counter = 0;
const nballs = 10;
var zlevel = 0;
var timer = 100;

var velocityX = 5;
var velocityY = 3;
var positionX = 0;
var positionY = 0;
var reverse = false;
var Xmin = 0;
var Xmax = 300;
var Ymin = 0;
var Ymax = 300;
var Rmax = 150;
var weight = 2;
var depth_counter = 100;


var div = create_generic_ball(random_position(Xmax), random_position(Ymax), Math.floor(random_position(10)), random_position(Rmax), random_color());
var ball = document.getElementById('ball');

// YOUR CODE 
// function ball_painting (){
//   create_generic_ball(random_position(Xmax), random_position(Ymax), Math.floor(random_position(10)), random_position(Rmax), random_color());
// }
// setInterval(ball_painting, 10);

// ----------------
function ball_position() {
  if (reverse) {
    positionX = positionX - velocityX;
    positionY = positionY - velocityY;
  } else {
    positionX = positionX + velocityX;
    positionY = positionY + velocityY;
  }
  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';
  if (positionX >= Xmax || positionY >= Ymax) {
    reverse = !reverse;
    if (positionX >= Xmax) {
      velocityX = 1*velocityX/weight;
    }
    if (positionY >= Ymax) {
      velocityY = 1*velocityY/weight;
    }
    let clr = random_color();
    ball.style.background = clr;
    // create_generic_ball(positionX, positionY, counter, 50*Math.sqrt(velocityX**2 + velocityY**2), clr)
    counter--;
  } else if (positionX <= Xmin || positionY <= Ymin) {
    reverse = !reverse;
    if (positionX <= Xmin) {
      velocityX = weight*velocityX;
    }
    if (positionY <= Ymin) {
      velocityY = weight*velocityY;
    }
    let clr = random_color();
    ball.style.background = clr;
    // create_generic_ball(positionX, positionY, counter, 50*Math.sqrt(velocityX**2 + velocityY**2), clr)
    counter--;
  }
}
setInterval(ball_position, 10);
