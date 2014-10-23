'use strict';

var canvas = require('canvas');

function Particule(x, y, w,speed) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.directionX = 'left';
	this.directionY = 'top';
	this.speed = speed || 1;

}

Particule.prototype.render = function render() {
	canvas.ctx.beginPath();
	canvas.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
	canvas.ctx.arc(this.x, this.y, this.w, 0, Math.PI * 2);
	canvas.ctx.fill();
	canvas.ctx.closePath();
}

Particule.prototype.checkDirection = function checkDirection()
{
	if(this.x>canvas.el.width)
	{
		this.directionX = 'left';
	}
	else if (this.x<0)
	{
		this.directionX = "right";
	}
	if(this.y>canvas.el.height)
	{
		this.directionY = 'top';
	}
	else if(this.y<0)
	{
		this.directionY = 'bottom';
	}
}

Particule.prototype.move = function move() {
	var angle = Math.random()*360;
	var dx = this.speed;
	var dy = this.speed;

	if(this.directionX == 'left')
	{
		this.x = this.x - dx;
	}
	else
	{
		this.x = this.x + dx;
	}
	if(this.directionY == 'bottom')
	{
		this.y = this.y + dy;
	}
	else
	{
		this.y = this.y - dy;
	}
}
Particule.prototype.createNode = function createNode(particules) {
	var maxDist = 75;
	for (var i = 0; i < particules.length; i++) {
		var dist = Math.sqrt(Math.pow(this.x - particules[i].x, 2) + Math.pow(this.y - particules[i].y, 2));
		
		if (dist < maxDist) {
			var opacity = dist/(maxDist*1.5);
			canvas.ctx.beginPath();
			canvas.ctx.strokeStyle = "rgba(255, 255, 255,"+opacity+")";
			canvas.ctx.moveTo(this.x, this.y);
			canvas.ctx.lineTo(particules[i].x, particules[i].y)
			canvas.ctx.stroke();
			canvas.ctx.closePath();
		}
	}



}

module.exports = Particule;