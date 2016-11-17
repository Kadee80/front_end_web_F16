// this is where we will write our animation js
console.log("here");
//grab the soccer ball image/element for animation
var sb = document.getElementById("sb");

//tweenmax object TO method to abimate over 3 seconds and change its position
//TweenMax.to(sb, 3, {left:800, top:300} );

TweenMax.to(sb, 3, 
	{
		x: 800,
 		y: -500, 
 		rotation: 720,
 		scale: 0.5,
 		ease: Elastic.easeOut
 	}, 0.5);

TweenMax.staggerTo(".bball", 1, 
	{
		y:500, 
		rotation: 360, 
		delay:1,
		ease: Bounce.easeOut
	},0.5 );

TweenMax.to(".bball, #sb", 1, 
	{
		opacity:0,
		delay: 8,
		onComplete: imDone

	} );

function imDone(){
	alert("I'm Done!");
};












