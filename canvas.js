const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

//Make rectangles

// c.fillStyle = 'rgba(255, 0, 0, 1.0)'
// c.fillRect(0, 0, canvas.width, canvas.height)

// c.fillStyle = 'rgba(0, 255, 0, 1.0)'
// c.fillRect(500, 500, 500, 100)


// console.log(canvas)

// Make circles

var x = 50,
    y = 50,
    radius = 15,
    speed = 3;

function circle(){
c.beginPath();
c.arc(x, y, radius, 0, 2 * Math.PI);
c.strokeStyle = 'blue'
c.stroke()
c.fillStyle = 'blue'
c.fill()
}

var circleArray = []

function draw() {
    //c.clearRect(0, 0, canvas.width, canvas.height);
    
    circle();
    circleArray.push(circle)

    requestAnimationFrame(draw);
}

draw();

window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case 'ArrowUp':
            if (y > radius) y -= speed;
            break;
        case 'ArrowDown':
            if (y < canvas.height - radius) y += speed;
            break;
        case 'ArrowLeft':
            if (x > radius) x -= speed;
            break;
        case 'ArrowRight':
            if (x < canvas.width - radius) x += speed;
            if (circleArray.length > 100){
                //debugger
                // Find way to clear end of snake
                circleArray[0].globalCompositeOperation = 'destination-out'
                circleArray.shift()
            }
            break;
    }
});