//let colors = ['#0069BA','#00457A','#00213B','#008EFA','#007FE0'];

//let colors = ['#FF4567', '#F5AEC3' , '#FF4F98', '#F582BF', '#FEDEF3'];

//let colors = ['#F685AB', '#FF937D', '#F5DB78', '#98DDDE', '#4EC3E0'];

let colors = ['#990000','#e0474c','#72a6ca','#f1f0ee','	#aaaaaa'];

class Particle{

	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.radius = r;
		this.minRadius = r;
		this.maxRadius = r* (Math.random()*4 + 8);

		this.dx = Math.random()*2;
		this.dy = Math.random()*2;

		this.color = colors[Math.floor(Math.random()*colors.length)];
	}
	

	show(){
		fill(this.color);
		circle(this.x, this.y, this.radius);
	}

	update(){

		if(this.x + this.radius > width || this.x - this.radius < 0){
			this.dx *= -1;
		}

		if(this.y + this.radius > height || this.y - this.radius < 0){
			this.dy *= -1;
		}
		
		this.x += this.dx;
		this.y += this.dy;

		let dist = Math.sqrt(Math.abs(Math.pow(this.x - mouse.x, 2) - Math.pow(this.y - mouse.y , 2)));
		let xDist = this.x - mouse.x;
		let yDist = this.y - mouse.y;
		
		if(xDist < 50 && xDist > -50 && yDist < 50 && yDist > -50){
			if(this.radius < this.maxRadius){
				this.radius += 1.4;
			}
		}else{
			if(this.radius > this.minRadius){
				this.radius -= 1.4;
			}
			
		}
	}
}