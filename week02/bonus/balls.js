function create_generic_ball() { // x, y, radius, color) {
    var x = random_position(Xmax);
    var y = random_position(Ymax);
    var radius = random_position(Rmax);
    var color = random_color();

    // Create a div element representing a "generic" ball:
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = Math.floor(random_position(10));
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
var Xmax = 500;
var Ymax = 500;
var Rmax = 150;
const nballs = 10;
var zlevel = 0;
var timer = 100;

// setInterval(create_generic_ball, timer);

// while (ball_counter < nballs){

    create_generic_ball(random_position(Xmax), random_position(Ymax), random_position(Rmax), random_color())
//     ball_counter++;
// }

var ball = document.getElementById('ball');

var velocityX = 5;
var velocityY = 3;
var positionX = 0;
var positionY = 0;
var reverse = false;
var Xmin = 0;
var Xmax = 300;
var Ymin = 0;
var Ymax = 300;


// YOUR CODE 
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
  } else if (positionX <= Xmin || positionY <= Ymin) {
    reverse = !reverse;
  }
}

setInterval(ball_position, 100);
