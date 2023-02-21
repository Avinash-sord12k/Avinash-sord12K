var c = document.getElementById('banner-canvas');
var cParent = document.getElementsByClassName('content-heading')[0];
var ctx = c.getContext('2d');

var cw = c.width = cParent.offsetWidth;
var ch = c.height = cParent.offsetHeight;
var canvasAlfa = 60;
var population = 10;
var particlePath = 100;

window.onresize = () => {
                        cw = c.width = cParent.offsetWidth;
                        ch = c.height = cParent.offsetHeight;
                        particles.every(replaceParticles);
                        if (window.innerWidth <= 1000) {
                            population = 30;
                            particlePath = 50;
                        }
                        else {
                            population = 30;
                            particlePath = 50;
                        }
                }

var image_wrap = document.getElementById('my-image-wrap');
var radius = image_wrap.offsetWidth - 120;
c.style.backgroundColor = backgroundColor;

function Particle() {
    this.xRel = image_wrap.offsetLeft + image_wrap.offsetWidth/2;
    this.yRel = image_wrap.offsetTop + image_wrap.offsetHeight/2;
    this.x = this.xRel;
    this.y = this.yRel;
    this.color = accentColor;
    this.r = radius + Math.random() * particlePath;
    this.size = 2;
    this.initial_pahse = Math.random() * 2 * Math.PI;
    this.phase = 0;
    this.angular_speed = (Math.random() * 0.01 + 0.01)*100/this.r;
    this.update = () => {
        this.x = this.r * Math.cos(this.initial_pahse + this.phase) + this.xRel;
        this.y = this.r * Math.sin(this.initial_pahse + this.phase) + this.yRel;
        this.phase += this.angular_speed;
    }
    this.draw = () => {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }
}

var particles = [];

function replaceParticles() {
    for (i of particles) {
        i.xRel = image_wrap.offsetLeft + image_wrap.offsetWidth/2;
        i.yRel = image_wrap.offsetTop + image_wrap.offsetHeight/2;
    }
}



function loop () {
    if (isInViewport(image_wrap))
    {ctx.fillStyle = backgroundColor + canvasAlfa;
    ctx.fillRect(0, 0, cw, ch);

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0, 0, 1, 0, 2*Math.PI);
    ctx.fill();

    while (particles.length < population) {
        let new_particle = new Particle();
        particles.push(new_particle);
    }

    for (let i=0; i<particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }}
    // console.log(particles.length, cw, ch, particles[0].x);

    requestAnimationFrame(loop);
}

loop();

