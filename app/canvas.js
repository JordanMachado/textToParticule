var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.globalCompositeOperation = 'lighter';
document.body.appendChild(canvas);

console.log('canvas');
module.exports = 
{
	el:canvas,
	ctx:ctx,
	width:canvas.width,
	height:canvas.height
};