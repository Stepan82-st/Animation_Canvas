
var canvas = document.getElementById('canvas'),
stage = new createjs.Stage(canvas),

flower = "flower"+ parseInt(Math.random()*12+1) +".png",
img = new createjs.Bitmap(flower);
img.x = -100;
img.y = 5;
img.regX = 49;
img.regY = 49;
stage.addChild(img);

var text1 = new createjs.Text("FLOWER", "bold 100px Arial", "#447");
text1.x = 50;
text1.y = 140;
text1.skewX = 30;
stage.addChild(text1);

var text2 = new createjs.Text(flower, "bold 70px Arial", "#297");
text2.regX = text2.getMetrics().width/2;
text2.regY = 35;
text2.x = 400;
text2.y = 70;
text2.scaleX = 0;
text2.scaleY = 0;
stage.addChild(text2);

/* img.addEventListener("click", handleClick);
function handleClick(e) {
	
} */

TweenMax.to(text1, 0.7, {skewX: "-=60", x: 300, ease: Power1.easeInOut, yoyo: true, repeat: -1});

TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(60);
stage.update();

TweenLite.ticker.addEventListener("tick", update);

var tl = new TimelineMax({repeat : -1});

tl.to(text2, 1.2, { rotation : "+=1800", scaleX:1,scaleY:1, ease: Back.easeOut.config(0.5) });
tl.to(text2, 1, { alpha:0, scaleX:5,scaleY:5, y:"+=30", ease: Power2.easeIn});
tl.to(img, 0.4, { y: 120, ease: Power2.easeIn }); 
tl.to(img, 0.4, { y: 10, ease: Power2.easeOut }); 
tl.to(img, 0.4, { y: 120, ease: Power2.easeIn }); 
tl.to(img, 0.3, { y: 30, ease: Power2.easeOut }); 
tl.to(img, 0.3, { y: 120, ease: Power2.easeIn }); 
tl.to(img, 0.3, { y: 60, ease: Power2.easeOut }); 
tl.to(img, 0.3, { y: 120, ease: Power2.easeIn }); 
tl.to(img, 0.2, { y: 80, ease: Power2.easeOut }); 
tl.to(img, 0.2, { y: 120, ease: Power2.easeIn }); 
tl.to(img, 0.1, { y: 100, ease: Power2.easeOut }); 
tl.to(img, 0.1, { y: 120, ease: Power2.easeIn }); 
tl.to(img, 0.1, { y: 110, ease: Power2.easeOut }); 
tl.to(img, 0.1, { y: 120, ease: Power2.easeIn }); 
tl.to(img, 2.9, { rotation : "+=720", x : 850, ease: Power0.easeNone }, "-=2.3");
tl.add(function () {
	text2.text = img.image.src = "flower" + parseInt(Math.random() * 12 + 1) + ".png";
	text2.regX = text2.getMetrics().width/2;
})

var chart = new createjs.Shape();
stage.addChild(chart);

var dataChart = {
	y1 : 121,
	y2 : 121,
	y3 : 121,
	y4 : 121,
	y5 : 121,
	y6 : 121,
	y7 : 121,
	y8 : 121,
	y9 : 121,
	y10 : 121,
	y11 : 121,
	y12 : 121,
	y13 : 121,
	y14 : 121,
	y15 : 121,
	y16 : 121,
	y17 : 121,
	y18 : 121,
	y19 : 121,
	y20 : 121,
	y21 : 121
}

var endDataChart = {};

endDataChart.onComplete = function () {

	for (y in dataChart) {
		endDataChart[y] = parseInt(5 + Math.random() * 237)
	};

	TweenMax.to(dataChart, 1, endDataChart);
};

TweenMax.to(dataChart, 1, endDataChart);

function update() {
	chart.graphics.clear()
	.beginStroke("rgba(180,0,0,0.5)")
	.setStrokeStyle(8)
	
	.moveTo(0, dataChart.y1)
	.lineTo(40, dataChart.y2)
	.lineTo(80, dataChart.y3)
	.lineTo(120, dataChart.y4)
	.lineTo(160, dataChart.y5)
	.lineTo(200, dataChart.y6)
	.lineTo(240, dataChart.y7)
	.lineTo(280, dataChart.y8)
	.lineTo(320, dataChart.y9)
	.lineTo(360, dataChart.y10)
	.lineTo(400, dataChart.y11)
	.lineTo(440, dataChart.y12)
	.lineTo(480, dataChart.y13)
	.lineTo(520, dataChart.y14)
	.lineTo(560, dataChart.y15)
	.lineTo(600, dataChart.y16)
	.lineTo(640, dataChart.y17)
	.lineTo(680, dataChart.y18)
	.lineTo(720, dataChart.y19)
	.lineTo(760, dataChart.y20)
	.lineTo(800, dataChart.y21)
	
	.endStroke();
}




