// Make one animated circle

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

// c.beginPath();
// c.arc(100, 75, 50, 0, 2 * Math.PI);
// c.strokeStyle = 'blue'
// c.stroke()

// set x and y coordinates
let x = 100
let y = 100
let radius = 75
//set x velocity
let dx = 2
//set y velocity
let dy = 2

// Make a sliding circle
function animate(){
    requestAnimationFrame(animate)
    
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.strokeStyle = 'blue'
    c.stroke()

    x+=dx
}
//animate()




// Move circle to right

function animate1(){
        requestAnimationFrame(animate1)
        c.clearRect(0, 0, innerWidth, innerHeight)
    
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.strokeStyle = 'blue'
        c.stroke()
    
        x+=dx
    }

//animate1()





// Animate in different directions and bounce off window sides

function animate2(){
    requestAnimationFrame(animate2)
    c.clearRect(0, 0, innerWidth, innerHeight)

    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.strokeStyle = 'blue'
    c.stroke()

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx
    }
    if (y + radius > innerHeight || y - radius < 0){
        dy = -dy
    }
    x+=dx
    y+=dy
}

//animate2()

