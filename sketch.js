const SIZE = 10;
const speedIndex = 0.1;

var txtx, txty, txtf, link;

var grid = [];
var c2;

function setup()
{
	createCanvas(400, 400);
	c2 = createGraphics(800, 800);
	initGrid();
	txtx = createP();
	txty = createP();
	txtf = createP();
	link = createA("https://www.desmos.com/calculator/tti5dasmc4", "Test here", "_blank");
}

function draw()
{
	background(0);
	image(c2, 0, 0, 400, 400);
	drawGrid();

}

function drawGrid()
{
	for (var k of grid)
	{
		for (var o of k)
		{
			if (o instanceof Generator)
			{
				o.draw();
				o.update();
				o.select();
			}
		}
	}
}

function initGrid()
{
	for (var x = 0; x < SIZE; x++)
	{
		grid.push([]);
		for (var y = 0; y < SIZE; y++)
		{
			if (x + y !== 0)
			{
				if (x === 0)
				{
					grid[x].push(new Generator((width / SIZE) * (x + 1) - ((width / SIZE) / 2), (height / SIZE) * (y + 1) - (height / SIZE) / 2, y))
				}
				else
				if (y === 0)
				{
					grid[x].push(new Generator((width / SIZE) * (x + 1) - ((width / SIZE) / 2), (height / SIZE) * (y + 1) - (height / SIZE) / 2, x))
				}
				else
				{
					grid[x].push(new Derivate(grid[x][0], grid[0][y], (width / SIZE) * (x + 1) - ((width / SIZE) / 2), (height / SIZE) * (y + 1) - (height / SIZE) / 2))
				}
			}
			else
			{
				//[0][0] empty grid
				grid[x].push(0);
			}
		}
	}
}