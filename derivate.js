class Derivate extends Generator
{
	constructor(genX, genY, xc, yc, mult)
	{
		super(xc, yc, mult);
		this.generators = {
			x: genX,
			y: genY
		}
	}

	getX()
	{
		return this.generators.x.getX();
	}

	getY()
	{
		return this.generators.y.getY();
	}

	update()
	{
		this.tetaX = this.generators.x.teta;
		this.tetaY = this.generators.y.teta;
		return;
	}

	select()
	{
		if (mouseIsPressed)
		{
			if (mouseX > this.center.x - (width / SIZE / 2) && mouseX < this.center.x + (width / SIZE / 2) &&
				mouseY > this.center.y - (height / SIZE / 2) && mouseY < this.center.y + (height / SIZE / 2))
			{
				txtx.html("teta x = " + floor(this.tetaX));
				txty.html("teta y = " + floor(this.tetaY));
				txtf.html("(A cos(" + floor(this.tetaX) + "t), A sin(" + floor(this.tetaY) + "t))");
			}
		}
	}
}