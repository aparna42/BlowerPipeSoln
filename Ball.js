class Ball {
	constructor(x, y, r) {
		var options = {
			//Changed restitution and removed the other properties
			restitution: 0.8
		}
		this.x = x;
		this.y = y;
		this.r = r
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	show() {
		let pos = this.body.position;
		//Added push, pop, translate and rotate which are required in this method
		push();
		translate(pos.x, pos.y);
		rotate(this.body.angle);
		ellipseMode(RADIUS);
		ellipse(0,0, this.r, this.r);
		pop();
	}
}