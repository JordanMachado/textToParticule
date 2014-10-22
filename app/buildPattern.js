var canvas = require('canvas');

canvas.ctx.beginPath();
canvas.ctx.fillStyle = 'rgb(255,255,255)';
canvas.ctx.font = '250pt Calibri';
canvas.ctx.textAlign = 'center';
canvas.ctx.fillText("Particules", canvas.el.width / 2, canvas.el.height / 2);
canvas.ctx.closePath();


var imageData = canvas.ctx.getImageData(0, 0, canvas.el.width, canvas.el.height);
var data = imageData.data;
canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);



for (var y = 0; y < canvas.el.height; y++) {
	// loop through each column
	for (var x = 0; x < canvas.el.width; x++) {
		var red = data[((canvas.el.width * y) + x) * 4];
		var green = data[((canvas.el.width * y) + x) * 4 + 1];
		var blue = data[((canvas.el.width * y) + x) * 4 + 2];
		var alpha = data[((canvas.el.width * y) + x) * 4 + 3];

			if(red != 0 && Math.random()>0.98)
				circle(x,y,Math.random()*5);
		
	}
}


function circle(x,y,radius) {
	canvas.ctx.beginPath();
	canvas.ctx.arc(x+Math.random()*5, y+Math.random()*2, radius, 0, 2 * Math.PI, false);
	canvas.ctx.strokeStyle = 'rgb(6,66,75)';		
	canvas.ctx.stroke();
	canvas.ctx.closePath();
}