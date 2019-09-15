
let circleArray = [];

let mouse = {
    x: undefined,
    y: undefined
}

function init(){
	for(let i = 0; i < 800; i++){
		let c = new Particle(Math.random()*width,Math.random()*height,3.5);
		circleArray.push(c);
	}
}

window.addEventListener('mousemove' , () => {
	cnv.canvas.height = window.innerHeight;
	cnv.canvas.width = window.innerWidth;

	height = window.innerHeight;
	width = window.innerWidth;
});

init();

console.log(cnv);


noStroke();

function draw(){

	background(255,255,255,1);
	
	for(let c of circleArray){
	 	c.show();
	 	c.update();
	 }
}

function animate(){
    draw();
    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
});

animate();