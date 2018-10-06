class Generator
{
	constructor(xc, yc, mult)
	{
		this.center = {
			x: xc,
			y: yc
		};
		this.mod = (width / SIZE / 2) - 2;
		this.angle = 0;
		this.speed = 0.1;
		this.mult = mult
		this.prec = {};
	}

	draw()
	{
		strokeWeight(0.1);
		stroke(150, 150, 0);
		line(0, this.getY(), height, this.getY());
		line(this.getX(), 0, this.getX(), width);

		if (!this.prec.x)
		{
			point(this.getX(), this.getY());
		}
		else
		{
			c2.stroke(255);
			c2.line(this.prec.x, this.prec.y, this.getX(), this.getY())
			stroke(0, 0, 255);
			strokeWeight(4);
			point(this.getX(), this.getY());
		}

		this.prec.x = this.getX();
		this.prec.y = this.getY();
	}

	update()
	{
		this.angle -= this.speed * (this.mult / (1 / speedIndex));
		this.teta = this.speed * (this.mult) * 10;
	}

	select()
	{
		return;
	}

	getX()
	{
		//x=mod(cos(angle))
		return this.center.x + (this.mod * cos(this.angle));
	}

	getY()
	{
		//x=mod(sen(angle))
		return this.center.y + (this.mod * sin(this.angle));
	}



}