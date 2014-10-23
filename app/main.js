console.log('Main');

var canvas = require('canvas');
var buildPattern = require('buildPattern');
var Particule = require('particule');
var particulesPattern = [];
var particules = [];

init();

function init() {
	for (var i = 0; i < 1000; i++) {
		var particule = new Particule(Math.random() * canvas.width, Math.random() * canvas.height, Math.random()*2,Math.random()*2);
		particules.push(particule);
	}

	for (var i = 0, ln = buildPattern.particulesPositions.length; i < ln; i++) {

		var particule = new Particule(buildPattern.particulesPositions[i].x, buildPattern.particulesPositions[i].y, Math.random() * 5, 10);
		particulesPattern.push(particule);
	}

	animate();
}


function animate() {
	canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0, ln = particulesPattern.length; i < ln; i++) {
		//particulesPattern[i].render();

	}
	for (var i = 0; i < 1000; i++) {
		particules[i].checkDirection();
		particules[i].move();
		particules[i].createNode(particulesPattern);
		//particules2[i].render();

	}

	requestAnimationFrame(animate);
}

