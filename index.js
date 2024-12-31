const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Set Canvas Width and Height to Full Screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Colors array for balls
const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

let ballsArray = [];
let circlesArray = [];

function Balls(x,y) {
    
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.color = colors[Math.round(Math.random() * colors.length)];

    //Speed of moving the balls position
    this.speedX = Math.random() * 3 -1.5;
    this.speedY = Math.random() * 3 -1.5;

    this.update = ()=>{
        //If conditions are used to show a classic effect of balls
        if (this.radius >= 7) {
            this.x += this.speedX * 3;
            this.y += this.speedY * 3;
        }
        if (this.radius <= 6) {
            this.x += this.speedX * 4;
            this.y += this.speedY * 2;
        }
        if (this.radius > 3) {
            this.radius -= .6;
        }
        if (this.radius < 3) {
            this.radius -= .1;
        }
    }

    //Draw to render the balls on the canvas
    this.draw = ()=>{
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        context.fill();
        
    }
}

//Function to render all the balls in the ball array
function renderBalls() {
    for (let i = 0; i < ballsArray.length; i++) {
        ballsArray[i].draw();
        ballsArray[i].update();
        //Slice the ball when ball radius is less then .1
        if (ballsArray[i].radius <= .1) {
            ballsArray.splice(i,1);
            i--;
        }
    }
}

function Circle(x,y) {
    
    this.x = x;
    this.y = y;
    this.radius = 1;
    this.color = `rgba(255,255,255,.3)`;
    //Circle stroke
    this.lineWidth = 2;

    this.update = ()=>{
        //If Condition for classic circle effect
        if (this.radius < 60) {
            this.radius += 10
        }
        if (this.radius > 60) {
            this.radius += 2;
            this.color = `rgba(255,255,255,.1)`;
        }
    }

    this.draw = ()=>{
        context.strokeStyle = this.color;
        context.beginPath();
        context.lineWidth = this.lineWidth;
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        context.stroke();
        
    }
}

//Render function for circles to render all the circles in the circle array
function renderCircles() {
    for (let i = 0; i < circlesArray.length; i++) {
        circlesArray[i].draw();
        circlesArray[i].update();
        if (circlesArray[i].radius >= 100) {
            circlesArray.splice(i,1);
            i--;
        }
    }
}

//Animate Function
function animate() {
    context.fillStyle = `rgba(17 ,17 ,22, 1)`;
    context.fillRect(0,0,canvas.width,canvas.height);
    renderBalls();
    renderCircles();
}


setInterval(() => {
    const mouseX = Math.random() * canvas.width;
    const mouseY = Math.random() * canvas.height;
    circlesArray.push(new Circle(mouseX, mouseY));
    for (let i = 0; i < 20; i++) {
        ballsArray.push(new Balls(mouseX, mouseY));
    }
}, 200); // Adjust the interval (in milliseconds) as needed

const year = new Date(2025, 0, 1).getFullYear();
document.getElementById("newYear").innerHTML = `${year}`;

// Always call the animate function at the bottom of the code!
// animate();
// Call the animate function and requestAnimationFrame
function animateLoop() {
    animate();
    requestAnimationFrame(animateLoop);
}

animateLoop();


// Array of Inspirational New Year Quotes for Innovation and Technology
const quotes = [
    "Innovation is the ability to see change as an opportunity – not a threat. – Steve Jobs",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Don’t wait for the perfect moment, take the moment and make it perfect. – Anonymous",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Great things never come from comfort zones. – Anonymous",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Creativity is intelligence having fun. – Albert Einstein",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. – Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller"
];



// Function to change quotes
function changeQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Change quote every 10 seconds
setInterval(changeQuote, 10000);