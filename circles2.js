const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

//Create circle object to form multiple circles

function Circle(x, y, dx, dy, radius){
    // Give x and y values
    this.x = x    //set circle's x to whatever value is passed through
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius


    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.strokeStyle = 'blue'
        c.stroke()
    }
    
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }
}

// let circle = new Circle(200, 200, 3, 3, 30) // Example of how to instantiate Javascript circle object


const circleArray = []

//Create 100 circles
for (let i = 0; i < 100; i++){
    let radius = 30
    let x = Math.random() * (innerWidth - radius * 2) + radius // limit values to prevent circle radii from getting caught in sides of screen
                                                                //subtract diameter from window Width to prevent getting caugt on right side
                                                                // add radius to prevent getting caught on left side
    let y = Math.random() * (innerHeight -radius * 2) + radius
    let dx = (Math.random() -0.5)  
    let dy = (Math.random() -0.5) 
    circleArray.push(new Circle(x, y, dx, dy, radius)) // instantiate Javascript circle object
}

//Animate 

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)


    // Animate
    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update()
    }
    
}

animate()