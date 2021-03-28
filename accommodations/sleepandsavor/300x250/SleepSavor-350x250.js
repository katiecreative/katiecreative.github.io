(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SleepSavor_350x250_atlas_1", frames: [[0,192,1350,190],[0,576,1171,190],[0,384,1350,190],[0,768,1171,190],[0,0,1351,190],[1353,0,241,112],[1352,444,300,117],[1566,114,149,104],[1173,576,378,365],[1596,0,135,85],[1352,192,212,250],[1353,114,85,67]]},
		{name:"SleepSavor_350x250_atlas_2", frames: [[0,1200,1351,190],[0,1392,1351,190],[0,1584,1351,190],[0,1776,1351,190],[993,0,904,598],[0,0,991,600],[993,600,904,598]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_77 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BottomTanBox = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Frame1BlackSlantedBox = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Frame1SoMuchMore = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Frame3BookLINKarea = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Frame1600H = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frame2600H = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Frame3600H = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Gradientbelowtype = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.TSLogoWhite = function() {
	this.initialize(ss["SleepSavor_350x250_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Gradientbelowtype();
	this.instance.setTransform(-106,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shadow, new cjs.Rectangle(-106,-125,212,250), null);


(lib.buttonshine_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0.749)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.357,0.51,0.651,1],-20.5,0,20.6,0).s().p("AjMIKIAAwUIGZAAIAAQUg");
	this.shape.setTransform(0.1651,0.2595,5.1824,3.315,0,26.2207,-153.7794);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonshine_mc, new cjs.Rectangle(-171.8,-202.1,343.9,404.79999999999995), null);


(lib.Image3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Frame3600H();
	this.instance.setTransform(-238.5,-157.75,0.5276,0.5277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image3, new cjs.Rectangle(-238.5,-157.7,477,315.5), null);


(lib.Image02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Frame2600H();
	this.instance.setTransform(-279,-168.9,0.563,0.5631);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image02, new cjs.Rectangle(-279,-168.9,558,337.9), null);


(lib.Image1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Frame1600H();
	this.instance.setTransform(-211.5,-141,0.4684,0.4684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image1, new cjs.Rectangle(-211.5,-141,423.5,280.1), null);


(lib.Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Frame1BlackSlantedBox_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Frame1BlackSlantedBox();
	this.instance.setTransform(-74.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1BlackSlantedBox_1, new cjs.Rectangle(-74.5,-52,149,104), null);


(lib.TurningStone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_77();
	this.instance.setTransform(-337.45,-192.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TurningStone, new cjs.Rectangle(-337.4,-192.5,675,95), null);


(lib.Resort = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_76();
	this.instance.setTransform(-339.35,-203.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Resort, new cjs.Rectangle(-339.3,-203.3,675.5,95.00000000000001), null);


(lib.Getaway = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(-292.7,-136.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Getaway, new cjs.Rectangle(-292.7,-136.8,585.5,95.00000000000001), null);


(lib.Frame3ExperienceTurningStone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_74();
	this.instance.setTransform(-337.45,-192.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3ExperienceTurningStone, new cjs.Rectangle(-337.4,-192.5,675,95), null);


(lib.Frame2PkgIncludesText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_73();
	this.instance.setTransform(-339.35,-203.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame2PkgIncludesText, new cjs.Rectangle(-339.3,-203.3,675.5,95.00000000000001), null);


(lib.Frame1ThanAGetaway = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_72();
	this.instance.setTransform(-292.7,-136.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1ThanAGetaway, new cjs.Rectangle(-292.7,-136.8,585.5,95.00000000000001), null);


(lib.Credit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(-339.35,-203.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Credit, new cjs.Rectangle(-339.3,-203.3,675.5,95.00000000000001), null);


(lib.Accommodations = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(-339.35,-203.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Accommodations, new cjs.Rectangle(-339.3,-203.3,675.5,95.00000000000001), null);


(lib.Symbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-337.7,-47.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(-337.7,-47.4,675.5,95), null);


(lib.Frame3BookLINKarea_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Frame3BookLINKarea();
	this.instance.setTransform(-67.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BookLINKarea_1, new cjs.Rectangle(-67.5,-42.5,135,85), null);


(lib.Frame3BOOKTODAY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_68();
	this.instance.setTransform(-60.2,-33.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BOOKTODAY, new cjs.Rectangle(-60.2,-33.9,120.5,56), null);


(lib.Image01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Frame1600H();
	this.instance.setTransform(194.25,-125.15,0.44,0.4309,0,0,180);

	this.instance_1 = new lib.Image1();
	this.instance_1.setTransform(122.15,-74.9,0.3867,0.3788,0,0,180,-1.2,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image01, new cjs.Rectangle(-203.5,-132.4,407,264.9), null);


// stage content:
(lib.SleepSavor350x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,359];
	// timeline functions:
	this.frame_0 = function() {
		this.button_link.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.google.com", "_blank");
		}
	}
	this.frame_359 = function() {
		if(!this.alreadyExecuted){
		
		this.alreadyExecuted=true;
		
		this.loopNum=1;
		
		} else {
		
		this.loopNum++;
		
		if(this.loopNum==3){
		
		this.stop();
		
		}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(359).call(this.frame_359).wait(1));

	// Button
	this.button_link = new lib.Button();
	this.button_link.name = "button_link";
	this.button_link.setTransform(150,125);
	new cjs.ButtonHelper(this.button_link, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_link).wait(360));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// TS_Logo_White
	this.instance = new lib.TSLogoWhite();
	this.instance.setTransform(202,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Bottom_Tan_Box
	this.instance_1 = new lib.BottomTanBox();
	this.instance_1.setTransform(0,133);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_289 = new cjs.Graphics().p("AqLFgIgBrAIUYAEIgDK9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_graphics_289,x:84.9,y:135.3}).wait(71));

	// Shine
	this.instance_2 = new lib.buttonshine_mc();
	this.instance_2.setTransform(-68.2,138.15,0.4509,0.3331,0,0,0,-13.8,8.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).to({regX:-4.1,x:25.15,alpha:0.1992},8).to({regX:11.4,x:81.5,alpha:0.6016},9).to({regX:14.4,x:121.5,alpha:0.1992},9).to({regX:16.9,x:222.6,alpha:0},9).to({_off:true},1).wait(35));

	// Frame_3___BOOK_TODAY
	this.instance_3 = new lib.Frame3BOOKTODAY();
	this.instance_3.setTransform(-73.6,136.75,1,1,0,0,0,0,-5.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(265).to({_off:false},0).to({regX:0.2,x:85.2},24,cjs.Ease.cubicOut).wait(71));

	// Frame_3___Book_LINK_area
	this.instance_4 = new lib.Frame3BookLINKarea_1();
	this.instance_4.setTransform(-80.95,138.5,1.0815,1,0,0,0,-1.8,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(265).to({_off:false},0).wait(1).to({regX:0,x:-60.1772},0).wait(1).to({scaleX:1.0814,x:-41.8624},0).wait(1).to({x:-24.5466},0).wait(1).to({x:-8.6323},0).wait(1).to({x:5.6417},0).wait(1).to({x:18.2112},0).wait(1).to({x:29.1439},0).wait(1).to({x:38.5822},0).wait(1).to({x:46.697},0).wait(1).to({x:53.6587},0).wait(1).to({x:59.6238},0).wait(1).to({x:64.7291},0).wait(1).to({x:69.0916},0).wait(1).to({x:72.8103},0).wait(1).to({x:75.9684},0).wait(1).to({x:78.6361},0).wait(1).to({x:80.8724},0).wait(1).to({x:82.7274},0).wait(1).to({x:84.2435},0).wait(1).to({x:85.457},0).wait(1).to({x:86.3993},0).wait(1).to({x:87.0971},0).wait(1).to({x:87.5739},0).wait(1).to({regX:-1.8,x:85.9},0).wait(71));

	// Frame_3___Experience_Turning_Stone
	this.instance_5 = new lib.Frame3ExperienceTurningStone();
	this.instance_5.setTransform(132.7,30.25,0.3333,0.3332,0,0,0,4.7,-102.5);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(256).to({_off:false},0).to({regY:-103.7,y:58.3,alpha:1},25,cjs.Ease.cubicOut).wait(79));

	// Turning_Stone
	this.instance_6 = new lib.TurningStone();
	this.instance_6.setTransform(132.7,45.5,0.3333,0.3332,0,0,0,4.7,-139.7);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(252).to({_off:false},0).to({regY:-140.5,y:73.65,alpha:1},25,cjs.Ease.cubicOut).wait(83));

	// Gradient_below_type_copy_copy
	this.instance_7 = new lib.Shadow();
	this.instance_7.setTransform(106,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(239).to({_off:false},0).to({alpha:1},13).wait(108));

	// Image_3
	this.instance_8 = new lib.Image3();
	this.instance_8.setTransform(201.35,103.5,0.8657,0.8659,0,0,0,0.4,0.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(239).to({_off:false},0).to({regY:0.4,scaleX:0.8802,scaleY:0.8804,y:103.55,alpha:1},13).to({regY:0.2,scaleX:1.0544,scaleY:1.0543,x:196.35,y:112.95},107).wait(1));

	// Credit
	this.instance_9 = new lib.Credit();
	this.instance_9.setTransform(34.3,155.7,0.3334,0.3324,0,0,0,-0.5,-152.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(173).to({_off:false},0).to({regX:0.1,x:131.25},25,cjs.Ease.cubicOut).to({_off:true},55).wait(107));

	// Resort
	this.instance_10 = new lib.Resort();
	this.instance_10.setTransform(-25.05,130.8,0.3334,0.3324,0,0,0,-0.6,-152.6);
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(165).to({_off:false},0).to({regX:0.3,x:131.15},25,cjs.Ease.cubicOut).to({_off:true},63).wait(107));

	// Plus
	this.instance_11 = new lib.Symbol();
	this.instance_11.setTransform(24.85,101.75,0.0015,0.0105,0,0,0,0,-147.2);
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(157).to({_off:false},0).to({regX:2.4,regY:-149.3,scaleX:0.3353,scaleY:0.3342,x:25.65,y:53.4},25,cjs.Ease.elasticOut).to({_off:true},71).wait(107));

	// Accomodations
	this.instance_12 = new lib.Accommodations();
	this.instance_12.setTransform(-97.85,80.9,0.3334,0.3324,0,0,0,-3.8,-153.3);
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(140).to({_off:false},0).to({regX:0.1,x:131.25},25,cjs.Ease.cubicOut).to({_off:true},88).wait(107));

	// Frame_2___Pkg_Includes_Text
	this.instance_13 = new lib.Frame2PkgIncludesText();
	this.instance_13.setTransform(-10,105.85,0.3334,0.3324,0,0,0,-0.6,-2.7);
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(132).to({_off:false},0).to({regX:0.3,x:131.15},25,cjs.Ease.cubicOut).to({_off:true},96).wait(107));

	// Gradient_below_type_copy
	this.instance_14 = new lib.Shadow();
	this.instance_14.setTransform(106,125);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(119).to({_off:false},0).to({alpha:1},13).to({_off:true},121).wait(107));

	// Image_02
	this.instance_15 = new lib.Image02();
	this.instance_15.setTransform(191.65,102.25,0.88,0.8798,0,0,0,0.9,1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(119).to({_off:false},0).to({regX:1,scaleX:0.8917,scaleY:0.8915,x:195.6,y:101.85,alpha:1},13).to({regX:0,regY:0,scaleX:1,scaleY:1,x:231.7,y:98},120).to({_off:true},1).wait(107));

	// Getaway
	this.instance_16 = new lib.Getaway();
	this.instance_16.setTransform(117.7,196.6,0.328,0.3279,0,0,0,8,-79.9);
	this.instance_16.alpha = 0;
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(28).to({_off:false},0).to({regY:-81,y:171.75,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},80).wait(227));

	// Frame_1___Than_A_Getaway
	this.instance_17 = new lib.Frame1ThanAGetaway();
	this.instance_17.setTransform(117.7,171.8,0.328,0.3279,0,0,0,8,-80.8);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(24).to({_off:false},0).to({regY:-80.5,y:147.2,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},84).wait(227));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AhDFzQgLgBgIgHQgNgLgDgZQgDgcAHgVQAIgTATgSQAYgXAkgQQAagNAqgMQANgEAIgBQAMgBAIADQAKADAHAHQAHAIADAKQAFATgKATQgIARgRANQgLAHgOAHIgaALQgXAKgOAJQgSAMgMAPIgKAOQgHAIgGAEQgIAFgJAAIgEgBg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AAJGoQgmgBgYgDIgsgIQgbgFgOgGQgvgQgnguQgKgNgEgJQgDgIgBgHQgGgKgCgSQgDgcAHgUQAHgTAUgTQAYgWAkgRQAbgMAqgMQANgEAHgBQAMgCAJADQAKADAHAIQAGAHADAKQAGATgKAUQgIAQgSANQgKAHgOAHIgbALIgXAMQADAEABAFQAVAHAeAFQA3AKAtgDQA2gEArgUQAQgHAJgIIAKgJIAJgJIASgNQAJgGAGgCQALgEAPAAQATABAKAJQALAIAEASQAGAYgHAZQgIAXgRATQgLANgVAPQgfAWgjATQgeAQgWAFQgTAFgYACIgTAAIgZAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AgFGoQgngBgYgDIgsgIQgbgFgPgGQgvgQgmguQgKgNgEgJQgEgIAAgHQgGgKgCgSQgDgcAHgUQAHgTAUgTQAYgWAkgRQAbgMApgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAGATgKAUQgIAQgSANQgKAHgPAHIgaALIgXAMQADAEABAFQAVAHAeAFQA3AKAsgDQA3gEArgUQAQgHAJgIIAJgJIAKgJIAQgMQgHgMgPgKQgKgIgPgJIgbgNQgmgTgWgMQgggSgWgUQgbgYgRgcQgSgegDgfQgDgYAHgSQAHgQAOgNQAQgOARABQAJABAIAGQAIAGACAIQACAGAAAKIABARQABAHAEAIIAIAOIALARQAHAIAHAGQAHAFAKAGIASAIQBFAdA/AqQAQAKAJAJQAOAKAIAMQALAPAKAcQAMAhAAAWQAAAggTAbQgTAcgdALIgBAAQgKAJgNAKQgfAWgjATQgeAQgXAFQgSAFgZACIgSAAIgYAAg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AgMGoQgngBgYgDIgtgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIAAgHQgHgKgCgSQgDgcAIgUQAHgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAFATgKAUQgIAQgRANQgKAHgPAHIgaALIgYAMQADAEACAFQAUAHAeAFQA3AKAtgDQA3gEArgUQAPgHAJgIIAKgJIAJgJIARgMQgIgMgOgKQgLgIgOgJIgcgNQgmgTgVgMQgggSgWgUQgbgYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBmhIBtgWQAXgEAMADQAJACAGAHQAHAGABAJQAKAAAIAGQAFAEAEAFQAFAEACAGQAEAHgBAIQAAAIgEAHQgFAHgHAEQgHAEgLABIgUABIgCAAQhBANgvAaIgMAJIgkAbQgVARgMAPIgKAPQAAAHgDAHIgDAIIgDAJQgBAEABAGIADAJIACANIACAOQADAPAKAPQAIAKAOAOIALALQA/AcA6AmQAPAKAKAJQANAKAJAMQALAPAKAcQALAhABAWQAAAggTAbQgTAcgeALIAAAAQgKAJgOAKQgeAWgjATQgeAQgXAFQgTAFgYACIgTAAIgXAAg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AgyGoQgmgBgYgDIgtgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIAAgHQgHgKgCgSQgDgcAIgUQAHgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAFATgKAUQgIAQgRANQgKAHgPAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA2gEArgUQAPgHAJgIIAKgJIAJgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgVgMQgggSgWgUQgbgYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBmhIBtgWQARgDALABQAJgIALAAQAIAAAIADIAQAIIAaAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgUAVQgXAYgbAPQgdAQgfADQgYADgVgGQgXgGgOgRQgIgKgDgOQgEgNABgPQACgXAOgcIAMgUQgPAHgOAHIgMAJIgkAbQgVARgMAPIgLAPQABAHgCAHIgEAIIgDAJQAAAEABAGIADAJIACANIACAOQACAPAKAPQAIAKAOAOIALALQA/AcA5AmQAQAKAKAJQANAKAIAMQAMAPAKAcQALAhABAWQAAAggTAbQgTAcgeALIAAAAQgKAJgOAKQgfAWgiATQgfAQgWAFQgTAFgXACIgTAAIgZAAg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AgyGoQgmgBgYgDIgtgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIAAgHQgHgKgCgSQgDgcAIgUQAHgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAFATgKAUQgIAQgRANQgKAHgPAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA2gEArgUQAPgHAJgIIAKgJIAJgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgVgMQgggSgWgUQgbgYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBmhIBtgWQARgDALABQAJgIALAAQAIAAAIADIAQAIIAaAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgUAVQgXAYgbAPQgdAQgfADQgYADgVgGQgXgGgOgRQgIgKgDgOQgEgNABgPQACgXAOgcIAMgUQgPAHgOAHIgMAJIgkAbQgVARgMAPIgLAPQABAHgCAHIgEAIIgDAJQAAAEABAGIADAJIACANIACAOQACAPAKAPQAIAKAOAOIALALQA/AcA5AmQAQAKAKAJQANAKAIAMQAMAPAKAcQALAhABAWQAAAggTAbQgTAcgeALIAAAAQgKAJgOAKQgfAWgiATQgfAQgWAFQgTAFgXACIgTAAIgZAAgADwBDQgKAAgJgGQgJgGgEgKQgFgJAAgOIAAgYIAAgIQACgMAQgHQAQgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFQgMAEgKAAIgDAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AgyGoQgmgBgYgDIgtgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIAAgHQgHgKgCgSQgDgcAIgUQAHgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAFATgKAUQgIAQgRANQgKAHgPAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA2gEArgUQAPgHAJgIIAKgJIAJgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgVgMQgggSgWgUQgbgYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBmhIBtgWQARgDALABQAJgIALAAQAIAAAIADIAQAIIAaAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgUAVQgXAYgbAPQgdAQgfADQgYADgVgGQgXgGgOgRQgIgKgDgOQgEgNABgPQACgXAOgcIAMgUQgPAHgOAHIgMAJIgkAbQgVARgMAPIgLAPQABAHgCAHIgEAIIgDAJQAAAEABAGIADAJIACANIACAOQACAPAKAPQAIAKAOAOIALALQA4AZA1AhQgDgSAEgYIAEgSQADgLAEgFQADgEAIgFIALgIIAGgGIAGgFIAFgCQAEgIAMgGQAQgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFIgFABIAAAFQAAALgCAHQgCAEgEAGIgHAKIgDAGIgEAFQgHAKgOAEIgKABIAFAHQAMAPAKAcQALAhABAWQAAAggTAbQgTAcgeALIAAAAQgKAJgOAKQgfAWgiATQgfAQgWAFQgTAFgXACIgTAAIgZAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AhkGoQgngBgYgDIgsgIQgbgFgPgGQgvgQgmguQgKgNgEgJQgEgIAAgHQgGgKgCgSQgDgcAHgUQAHgTAUgTQAYgWAkgRQAbgMApgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAGATgKAUQgIAQgSANQgKAHgPAHIgaALIgXAMQADAEABAFQAVAHAeAFQA3AKAtgDQA3gEAqgUQAQgHAJgIIAJgJIAKgJIAQgMQgHgMgPgKQgKgIgPgJIgbgNQglgTgWgMQgggSgXgUQgbgYgQgcQgTgegDgfIgBgJQgLgPAEgfQAJhOAngrQAPgQAbgTQBlhIBugWQAQgDALABQAJgIAMAAQAHAAAJADIAPAIIAbAPQAOAIALAIQAbAWAHAbQAFAOgBAZQgBAggHARQgIAVgUAVQgWAYgcAPQgdAQgeADQgYADgVgGQgYgGgNgRQgIgKgEgOQgDgNABgPQACgXAOgcIALgUQgPAHgOAHIgLAJIgkAbQgUARgNAPIgKAPQAAAHgCAHIgEAIIgDAJQgBAEACAGIACAJIACANIACAOQADAPALAPQAIAKAOAOIAKALQA4AZA0AhQgCgSAEgYIAEgSQADgLADgFQAEgEAHgFIAMgIIAFgGIAGgFIAFgCQAEgIAMgGQAQgIAUADQAXADALAPQALANgBAUQgCAWgNAMQgIAHgMAFIgFABIAAAFQAAALgDAHQgCAEgEAGIgHAKIgDAGIgDAFQgHAKgOAEIgKABIAFAHQALAPAKAcQAMAhAAAWQAAAggTAbQgTAcgdALIgBAAQgKAJgNAKQgfAWgjATQgeAQgWAFQgSAFgZACIgSAAIgZAAgAEuCTQgDgCgCgEQgDACgEAAQgFABgEgCQgEgCgDgEQgDgFAAgLQABgOADgXQAMhMAfhlIAEgLQADgGAFgCQAEgDAFABQADgHADgDQAFgEAHABQAGAAAEAFQAEAEAAAGIACAAQAIACACAHQACAEAAAFIgBAJQgSBlgVBcQgDAPgDAHQgFAMgKAFQgFADgGAAIAAAAQgGAAgFgCg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AiSGoQgmgBgYgDIgtgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIAAgHQgHgKgCgSQgDgcAIgUQAHgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAFATgKAUQgIAQgRANQgLAHgOAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA3gEArgUQAPgHAJgIIAJgJIAJgJIAQgMQgHgMgOgKQgKgIgPgJIgbgNQgmgTgWgMQgggSgWgUQgbgYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBnhIBsgWQARgDALABQAJgIALAAQAIAAAIADIAQAIIAaAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgVAVQgWAYgbAPQgdAQgfADQgYADgVgGQgXgGgOgRQgIgKgDgOQgDgNABgPQACgXANgcIAMgUQgPAHgNAHIgMAJIgkAbQgVARgMAPIgLAPQABAHgDAHIgEAIIgDAJQAAAEABAGIADAJIACANIACAOQADAPAKAPQAIAKAOAOIALALQA3AZA1AhQgDgSAEgYIAEgSQADgLAEgFQADgEAIgFIALgIIAGgGIAGgFIAFgCQADgIANgGQAQgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFIgFABIAAAFQAAALgCAHQgCAEgEAGIgHAKIgDAGIgEAFQgHAKgOAEIgKABIAFAHQAMAPAKAcQALAhABAWQAAAggTAbQgTAcgeALIAAAAQgKAJgOAKQgfAWghATQgfAQgWAFQgTAFgYACIgTAAIgZAAgAEBCTQgEgCgCgEQgDACgDAAQgFABgEgCQgFgCgCgEQgDgFAAgLQAAgOAEgXQAMhMAehlIAFgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAGABQAHAAAEAFQADAEABAGIACAAQAHACADAHQACAEgBAFIAAAIIADgDIAIgKIAKgQIANgRIAUgYQAGgKAFgDQAEgCAFABIACAAQAIAAAEAGQAFAGgCAIQgBAEgHAIIgDAFQgLAUgPAoQgPAqgKASIgMAVIgHALQABAEgBAFQgCAIgGAKIgNAVIgOAUQgHALgEAJIgEAHIgBABQgCAKgDAFQgFAMgJAFQgFADgGAAIgBAAQgGAAgEgCg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AibGoQgngBgYgDIgsgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIgBgHQgGgKgCgSQgDgcAHgUQAIgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQALgCAJADQAKADAHAIQAHAHADAKQAFATgKAUQgIAQgSANQgKAHgOAHIgbALIgXAMQADAEABAFQAVAHAeAFQA3AKAugDQA3gEArgUQAPgHAJgIIAKgJIAIgJIAQgMQgHgMgNgKQgLgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgagYgRgcQgSgegEgfIAAgJQgLgPADgfQAJhOAogrQAOgQAbgTQBnhIBsgWQAQgDALABQAJgIAMAAQAHAAAJADIAPAIIAbAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggHARQgHAVgVAVQgWAYgbAPQgdAQgfADQgYADgVgGQgXgGgOgRQgHgKgDgOQgEgNABgPQACgXANgcIAMgUQgQAHgNAHIgLAJIglAbQgUARgMAPIgLAPQABAHgDAHIgEAIIgDAJQAAAEABAGIACAJIACANIACAOQAEAPAKAPQAIAKAOAOIALALQA4AZA0AhQgDgSAEgYIAEgSQADgLAEgFQADgEAIgFIALgIIAFgGIAGgFIAGgCQADgIAMgGQARgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFIgFABIAAAFQAAALgDAHQgBAEgFAGIgHAKIgDAGIgDAFQgHAKgOAEIgKABIAFAHQAMAPAKAcQALAhAAAWQABAggTAbQgTAcgeALIAAAAQgKAJgOAKQgfAWgiATQgeAQgWAFQgTAFgYACIgTAAIgZAAgAFzCjQgEABgFgBQgLgBgFgHQgEgGABgNIAGiFIgCAEIgHALQABAEgBAFQgCAIgGAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgCAKgDAFQgFAMgJAFQgGADgFAAQgGABgFgDQgEgCgCgEQgDACgEAAQgEABgFgCQgEgCgCgEQgDgFAAgLQAAgOADgXQAMhMAfhlIAEgLQADgGAFgCQAFgDAFABQACgHAEgDQAFgEAGABQAHAAAEAFQADAEABAGIABAAQAIACADAHQABAEAAAFIAAAIIACgDIAJgKIAKgQIANgRIAUgYQAFgKAGgDQAEgCAFABIACAAQAFAAAEADQAEgDAFAAQAIAAAEAGQADAEABAGIgBALIgVD6IgDAXQgDAMgHAIQgJALgNACIgHABIgFAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Aj2GoQgngBgYgDIgsgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIgBgHQgGgKgCgSQgDgcAHgUQAIgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAIADQAKADAHAIQAHAHADAKQAFATgKAUQgIAQgSANQgKAHgOAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA3gEArgUQAPgHAJgIIAKgJIAJgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgagYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBnhIBtgWQAQgDAMABQAHgIAMAAQAHAAAJADIAPAIIAbAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgVAVQgWAYgbAPQgdAQgeADQgYADgVgGQgXgGgOgRQgIgKgDgOQgEgNABgPQACgXAOgcIAMgUQgQAHgNAHIgMAJIglAbQgUARgMAPIgLAPQABAHgDAHIgEAIIgDAJQAAAEABAGIADAJIACANIABAOQAEAPAKAPQAIAKAOAOIALALQA4AZA1AhQgDgSAEgYIAEgSQADgLAEgFQADgEAIgFIALgIIAGgGIAEgFIAGgCQADgIAMgGQARgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFIgFABIAAAFQAAALgCAHQgCAEgFAGIgHAKIgCAGIgEAFQgHAKgOAEIgKABIAFAHQAMAPAKAcQALAhAAAWQABAggTAbQgTAcgdALIAAAAQgKAJgOAKQgfAWgjATQgeAQgWAFQgTAFgYACIgTAAIgZAAgAEYCjQgEABgFgBQgLgBgFgHQgEgGABgNIAGiFIgCAEIgHALQABAEgBAFQgCAIgGAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgCAKgDAFQgFAMgJAFQgFADgGAAQgGABgFgDQgEgCgCgEQgDACgEAAQgEABgEgCQgFgCgCgEQgDgFAAgLQAAgOAEgXQALhMAfhlIAFgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAGABQAHAAAEAFQADAEABAGIABAAQAIACADAHQACAEgBAFIAAAIIADgDIAIgKIAKgQIANgRIAUgYQAFgKAGgDQAEgCAFABIACAAQAFAAAEADQAEgDAFAAQAHAAAEAFIALgQIAZgeIAtgvIAVgVQANgLAMgFQALgGAUgEQASgEAHAIQAFAGgCAOQgDAMgGARIgLAcQgHAVgDAXIgBAKIgDAKQgCAEgFADQgEADgFAAIgGgDIgGgCIgGAAIgFABQgFAAgEgEQgEgDgDgFIgEgJIgBgDQgXAqgWA3QgLAcgdBVIgEAKIgFAGIgFARIgCAJIgDAJIgEAGIgBASIgDAXQgDAMgHAIQgJALgNACIgHABIgFAAg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Aj2GoQgngBgYgDIgsgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIgBgHQgGgKgCgSQgDgcAHgUQAIgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAIADQAKADAHAIQAHAHADAKQAFATgKAUQgIAQgSANQgKAHgOAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA3gEArgUQAPgHAJgIIAKgJIAJgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgagYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBnhIBtgWQAQgDAMABQAHgIAMAAQAHAAAJADIAPAIIAbAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgVAVQgWAYgbAPQgdAQgeADQgYADgVgGQgXgGgOgRQgIgKgDgOQgEgNABgPQACgXAOgcIAMgUQgQAHgNAHIgMAJIglAbQgUARgMAPIgLAPQABAHgDAHIgEAIIgDAJQAAAEABAGIADAJIACANIABAOQAEAPAKAPQAIAKAOAOIALALQA4AZA1AhQgDgSAEgYIAEgSQADgLAEgFQADgEAIgFIALgIIAGgGIAEgFIAGgCQADgIAMgGQARgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFIgFABIAAAFQAAALgCAHQgCAEgFAGIgHAKIgCAGIgEAFQgHAKgOAEIgKABIAFAHQAMAPAKAcQALAhAAAWQABAggTAbQgTAcgdALIAAAAQgKAJgOAKQgfAWgjATQgeAQgWAFQgTAFgYACIgTAAIgZAAgAEYCjQgEABgFgBQgLgBgFgHQgEgGABgNIAGiFIgCAEIgHALQABAEgBAFQgCAIgGAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgCAKgDAFQgFAMgJAFQgFADgGAAQgGABgFgDQgEgCgCgEQgDACgEAAQgEABgEgCQgFgCgCgEQgDgFAAgLQAAgOAEgXQALhMAfhlIAFgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAGABQAHAAAEAFQADAEABAGIABAAQAIACADAHQACAEgBAFIAAAIIADgDIAIgKIAKgQIANgRIAUgYQAFgKAGgDQAEgCAFABIACAAQAFAAAEADQAEgDAFAAQAHAAAEAFIALgQIAZgeIAtgvIAVgVQANgLAMgFQALgGAUgEQASgEAHAIQAFAGgCAOQgDAMgGARIgLAcQgHAVgDAXIgBAKIgBAFIgBAGIgDAFIAEAFQACAEAAAFQAAADgDAGIgJAQIgKASIgPAYIgRAaIgFAJIgGAGIgZBBIgBAEIgCAIIgDALIgDAKIgDADIgDAIIgEAGIgEADIgDABIgBABIgCABQgJAHgUgGIgIgDIgBgBQgGgBgEgGIgBAEIgEAGIgBASIgDAXQgDAMgHAIQgJALgNACIgHABIgFAAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Aj2GoQgngBgYgDIgsgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIgBgHQgGgKgCgSQgDgcAHgUQAIgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAIADQAKADAHAIQAHAHADAKQAFATgKAUQgIAQgSANQgKAHgOAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA3gEArgUQAPgHAJgIIAKgJIAJgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgagYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBnhIBtgWQAQgDAMABQAHgIAMAAQAHAAAJADIAPAIIAbAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgVAVQgWAYgbAPQgdAQgeADQgYADgVgGQgXgGgOgRQgIgKgDgOQgEgNABgPQACgXAOgcIAMgUQgQAHgNAHIgMAJIglAbQgUARgMAPIgLAPQABAHgDAHIgEAIIgDAJQAAAEABAGIADAJIACANIABAOQAEAPAKAPQAIAKAOAOIALALQA4AZA1AhQgDgSAEgYIAEgSQADgLAEgFQADgEAIgFIALgIIAGgGIAEgFIAGgCQADgIAMgGQARgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFIgFABIAAAFQAAALgCAHQgCAEgFAGIgHAKIgCAGIgEAFQgHAKgOAEIgKABIAFAHQAMAPAKAcQALAhAAAWQABAggTAbQgTAcgdALIAAAAQgKAJgOAKQgfAWgjATQgeAQgWAFQgTAFgYACIgTAAIgZAAgAFNFsQgNgBgOgJQgJgHgEgGQgGgJgBgOIAAgaIAAgSIgBgPIgCglIABgdQABgOACgJIACgHQgFABgEgBQgEABgFgBQgLgBgFgHQgEgGABgNIAGiFIgCAEIgHALQABAEgBAFQgCAIgGAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgCAKgDAFQgFAMgJAFQgFADgGAAQgGABgFgDQgEgCgCgEQgDACgEAAQgEABgEgCQgFgCgCgEQgDgFAAgLQAAgOAEgXQALhMAfhlIAFgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAGABQAHAAAEAFQADAEABAGIABAAQAIACADAHQACAEgBAFIAAAIIADgDIAIgKIAKgQIANgRIAUgYQAFgKAGgDQAEgCAFABIACAAQAFAAAEADQAEgDAFAAQAHAAAEAFIALgQIAZgeIAtgvIAVgVQANgLAMgFQALgGAUgEQASgEAHAIQAFAGgCAOQgDAMgGARIgLAcQgHAVgDAXIgBAKIgBAFIgBAGIgDAFIAEAFQACAEAAAFQAAADgDAGIgJAQIgKASIgPAYIgRAaIgFAJIgGAGIgZBBIgBAEIgCAIIgDALIgDAKIgDADIAAABIAAAGIgEAMIgNAiQgJAZgEANIgEAWQgBBDADBGIAAAEIABANQAAAJgEAFIgDADIgCACQgEAFgHADQgGACgGAAIgCAAg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Aj2GoQgngBgYgDIgsgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIgBgHQgGgKgCgSQgDgcAHgUQAIgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAIADQAKADAHAIQAHAHADAKQAFATgKAUQgIAQgSANQgKAHgOAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA3gEArgUQAPgHAJgIIAKgJIAJgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgagYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBnhIBtgWQAQgDAMABQAHgIAMAAQAHAAAJADIAPAIIAbAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgVAVQgWAYgbAPQgdAQgeADQgYADgVgGQgXgGgOgRQgIgKgDgOQgEgNABgPQACgXAOgcIAMgUQgQAHgNAHIgMAJIglAbQgUARgMAPIgLAPQABAHgDAHIgEAIIgDAJQAAAEABAGIADAJIACANIABAOQAEAPAKAPQAIAKAOAOIALALQA4AZA1AhQgDgSAEgYIAEgSQADgLAEgFQADgEAIgFIALgIIAGgGIAEgFIAGgCQADgIAMgGQARgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFIgFABIAAAFQAAALgCAHQgCAEgFAGIgHAKIgCAGIgEAFQgHAKgOAEIgKABIAFAHQAMAPAKAcQALAhAAAWQABAggTAbQgTAcgdALIAAAAQgKAJgOAKQgfAWgjATQgeAQgWAFQgTAFgYACIgTAAIgZAAgAFNFsQgNgBgOgJQgJgHgEgGQgGgJgBgOIAAgaIAAgSIgBgPIgCglIABgdQABgOACgJIACgHQgFABgEgBQgEABgFgBQgLgBgFgHQgEgGABgNIAGiFIgCAEIgHALQABAEgBAFQgCAIgGAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgCAKgDAFQgFAMgJAFQgFADgGAAQgGABgFgDQgEgCgCgEQgDACgEAAQgEABgEgCQgFgCgCgEQgDgFAAgLQAAgOAEgXQALhMAfhlIAFgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAGABQAHAAAEAFQADAEABAGIABAAQAIACADAHQACAEgBAFIAAAIIADgDIAIgKIAKgQIANgRIAUgYQAFgKAGgDQAEgCAFABIACAAQAFAAAEADQAEgDAFAAQAHAAAEAFIALgQIAZgeIAtgvIAVgVQANgLAMgFQALgGAUgEQASgEAHAIQAFAGgCAOQgDAMgGARIgLAcQgHAVgDAXIgBAKIgBAFIgBAGIgDAFIAEAFQACAEAAAFQAAADgDAGIgJAQIgKASIgPAYIgOAWQADgDADgBQAIgCAHAFQAGAFAAAIIgCAHIAAABIAAAAQAHAFAAAJQgBAHgGALQgPAZgLAaIgHAOIgEAIIAGAAQAFACADAEQADADAAAFQABAHgGAMQgGALgEAEQgGAGgIACQgIADgIAAQgLAAgHgGQgFgDgDgGIgCAEQgJAZgEANIgEAWQgBBDADBGIAAAEIABANQAAAJgEAFIgDADIgCACQgEAFgHADQgGACgGAAIgCAAg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Aj2GoQgngBgYgDIgsgIQgbgFgOgGQgvgQgmguQgLgNgEgJQgDgIgBgHQgGgKgCgSQgDgcAHgUQAIgTATgTQAYgWAkgRQAbgMAqgMQANgEAIgBQAMgCAIADQAKADAHAIQAHAHADAKQAFATgKAUQgIAQgSANQgKAHgOAHIgaALIgYAMQADAEABAFQAVAHAeAFQA3AKAugDQA3gEArgUQAPgHAJgIIAKgJIAJgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgagYgRgcQgSgegEgfIAAgJQgLgPAEgfQAIhOAogrQAOgQAbgTQBnhIBtgWQAQgDAMABQAHgIAMAAQAHAAAJADIAPAIIAbAPQAPAIAKAIQAbAWAIAbQAEAOgBAZQgBAggGARQgIAVgVAVQgWAYgbAPQgdAQgeADQgYADgVgGQgXgGgOgRQgIgKgDgOQgEgNABgPQACgXAOgcIAMgUQgQAHgNAHIgMAJIglAbQgUARgMAPIgLAPQABAHgDAHIgEAIIgDAJQAAAEABAGIADAJIACANIABAOQAEAPAKAPQAIAKAOAOIALALQA4AZA1AhQgDgSAEgYIAEgSQADgLAEgFQADgEAIgFIALgIIAGgGIAEgFIAGgCQADgIAMgGQARgIATADQAXADAMAPQAKANgBAUQgBAWgOAMQgHAHgNAFIgFABIAAAFQAAALgCAHQgCAEgFAGIgHAKIgCAGIgEAFQgHAKgOAEIgKABIAFAHQAMAPAKAcQALAhAAAWQABAggTAbQgTAcgdALIAAAAQgKAJgOAKQgfAWgjATQgeAQgWAFQgTAFgYACIgTAAIgZAAgAFNFsQgNgBgOgJQgJgHgEgGQgGgJgBgOIAAgaIAAgSIgBgPIgCglIABgdQABgOACgJIACgHQgFABgEgBQgEABgFgBQgLgBgFgHQgEgGABgNIAGiFIgCAEIgHALQABAEgBAFQgCAIgGAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgCAKgDAFQgFAMgJAFQgFADgGAAQgGABgFgDQgEgCgCgEQgDACgEAAQgEABgEgCQgFgCgCgEQgDgFAAgLQAAgOAEgXQALhMAfhlIAFgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAGABQAHAAAEAFQADAEABAGIABAAQAIACADAHQACAEgBAFIAAAIIADgDIAIgKIAKgQIANgRIAUgYQAFgKAGgDQAEgCAFABIACAAQAFAAAEADQAEgDAFAAQAHAAAEAFIALgQIAZgeIAtgvIAVgVQANgLAMgFQALgGAUgEQASgEAHAIQAFAGgCAOQgDAMgGARIgLAcQgHAVgDAXIgBAKIgBAFIgBAGIgDAFIAEAFQACAEAAAFQAAADgDAGIgJAQIgKASIgPAYIgOAWQADgDADgBQAIgCAHAFQAGAFAAAIIgCAHIAAABIAAAAQAEADACAFIABgCQAHgIAHAAQAGgBAFAEIADgBQAHAAAFAFQAGAFgBAHQAAAEgCAGQABADgBADQgBAFgDAHIgHAKIAAABQgFAPABANIAAANIgBAFIABAEIAEAOIADAQQABAHgBAEIgBACIAEABQAEACADAEQACAEAAAFQAAAFgCAEQgFAGgMADQgQAEgLgCIgIgCIgJgDQgFgDgEgFIgBAAIgGABQgVAIgTgFQgLgDgIgGQgGgEgEgGQgJAWgDAMIgEAWQgBBDADBGIAAAEIABANQAAAJgEAFIgDADIgCACQgEAFgHADQgGACgGAAIgCAAg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkkGoQgngBgYgDIgsgIQgbgFgPgGQgvgQgmguQgLgNgDgJQgEgIAAgHQgGgKgCgSQgEgcAIgUQAHgTAUgTQAYgWAkgRQAbgMApgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAGATgKAUQgIAQgSANQgKAHgPAHIgaALIgXAMQACAEACAFQAUAHAeAFQA4AKAtgDQA3gEArgUQAQgHAJgIIAJgJIAJgJIARgMQgHgMgPgKQgKgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgbgYgRgcQgSgegDgfIgBgJQgLgPAEgfQAIhOAogrQAOgQAcgTQBmhIBugWQAQgDALABQAJgIAMAAQAHAAAJADIAOAIIAaAPQAPAIAKAIQAcAWAHAbQAEAOAAAZQgCAggGARQgIAVgUAVQgWAYgcAPQgcAQgeADQgYADgVgGQgYgGgNgRQgIgKgEgOQgDgNABgPQABgXAPgcIALgUQgPAHgOAHIgLAJIglAbQgUARgNAPIgKAPQAAAHgCAHIgEAIIgDAJQgBAEACAGIACAJIACANIACAOQADAPALAPQAIAKAOAOIAKALQA5AZA0AhQgCgSAEgYIAEgSQACgLAEgFQAEgEAHgFIAMgIIAFgGIAGgFIAFgCQAEgIAMgGQAQgIATADQAXADALAPQALANgBAUQgCAWgNAMQgIAHgMAFIgFABIAAAFQAAALgDAHQgCAEgEAGIgHAKIgCAGIgEAFQgGAKgOAEIgLABIAGAHQALAPAKAcQALAhAAAWQAAAggSAbQgTAcgdALIgBAAQgKAJgNAKQgfAWgjATQgeAQgXAFQgTAFgYACIgTAAIgYAAgAEeFsQgMgBgOgJQgJgHgFgGQgGgJgBgOIABgaIgBgSIgBgPIgCglIABgdQABgOACgJIADgHQgFABgEgBQgFABgFgBQgLgBgEgHQgFgGABgNIAGiFIgCAEIgGALQAAAEgBAFQgCAIgFAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgDAKgCAFQgGAMgJAFQgFADgGAAQgGABgFgDQgDgCgCgEQgEACgDAAQgFABgEgCQgEgCgDgEQgDgFAAgLQABgOADgXQAMhMAfhlIAEgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAHABQAGAAAEAFQADAEABAGIACAAQAIACACAHQACAEAAAFIgBAIIADgDIAIgKIAKgQIAOgRIATgYQAGgKAGgDQAEgCAEABIADAAQAFAAADADQAEgDAGAAQAHAAADAFIALgQIAZgeIAtgvIAVgVQANgLAMgFQAMgGAUgEQASgEAGAIQAGAGgDAOQgCAMgHARIgLAcQgHAVgCAXIgBAKIgCAFIgBAGIgCAFIAEAFQACAEgBAFQAAADgDAGIgIAQIgLASIgPAYIgOAWQADgDAEgBQAIgCAGAFQAGAFAAAIIgBAHIgBABIABAAQAEADABAFIACgCQAGgIAIAAQAFgBAGAEIACgBQAHAAAGAFIACAEQAJgLAJgIQARgPAVgEIAHgBIAGgDIAFgEQAFgEAHABQAHABADAEQAEAGAAAIIgCAOIgDAQQAAAJgCADIgDAEIgBAFQgCAFgFAFQgGAHgHAEQgKAEgTACIgNABIgNAAIgEAAIgHACQgHABgGgEIgBgBQgEAPAAANIAAANIgBAFIABAEIAFAOIACAQQABAHgBAEIAAACIADABQAFACACAEQADAEAAAFQAAAFgDAEQgEAGgNADQgQAEgLgCIgIgCIgJgDQgEgDgFgFIgBAAIgFABQgVAIgUgFQgKgDgJgGQgGgEgEgGQgIAWgDAMIgFAWQAABDACBGIAAAEIACANQgBAJgEAFIgDADIgBACQgFAFgHADQgFACgGAAIgDAAg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkkGoQgngBgYgDIgsgIQgbgFgPgGQgvgQgmguQgLgNgDgJQgEgIAAgHQgGgKgCgSQgEgcAIgUQAHgTAUgTQAYgWAkgRQAbgMApgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAGATgKAUQgIAQgSANQgKAHgPAHIgaALIgXAMQACAEACAFQAUAHAeAFQA4AKAtgDQA3gEArgUQAQgHAJgIIAJgJIAJgJIARgMQgHgMgPgKQgKgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgbgYgRgcQgSgegDgfIgBgJQgLgPAEgfQAIhOAogrQAOgQAcgTQBmhIBugWQAQgDALABQAJgIAMAAQAHAAAJADIAOAIIAaAPQAPAIAKAIQAcAWAHAbQAEAOAAAZQgCAggGARQgIAVgUAVQgWAYgcAPQgcAQgeADQgYADgVgGQgYgGgNgRQgIgKgEgOQgDgNABgPQABgXAPgcIALgUQgPAHgOAHIgLAJIglAbQgUARgNAPIgKAPQAAAHgCAHIgEAIIgDAJQgBAEACAGIACAJIACANIACAOQADAPALAPQAIAKAOAOIAKALQA5AZA0AhQgCgSAEgYIAEgSQACgLAEgFQAEgEAHgFIAMgIIAFgGIAGgFIAFgCQAEgIAMgGQAQgIATADQAXADALAPQALANgBAUQgCAWgNAMQgIAHgMAFIgFABIAAAFQAAALgDAHQgCAEgEAGIgHAKIgCAGIgEAFQgGAKgOAEIgLABIAGAHQALAPAKAcQALAhAAAWQAAAggSAbQgTAcgdALIgBAAQgKAJgNAKQgfAWgjATQgeAQgXAFQgTAFgYACIgTAAIgYAAgAEeFsQgMgBgOgJQgJgHgFgGQgGgJgBgOIABgaIgBgSIgBgPIgCglIABgdQABgOACgJIADgHQgFABgEgBQgFABgFgBQgLgBgEgHQgFgGABgNIAGiFIgCAEIgGALQAAAEgBAFQgCAIgFAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgDAKgCAFQgGAMgJAFQgFADgGAAQgGABgFgDQgDgCgCgEQgEACgDAAQgFABgEgCQgEgCgDgEQgDgFAAgLQABgOADgXQAMhMAfhlIAEgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAHABQAGAAAEAFQADAEABAGIACAAQAIACACAHQACAEAAAFIgBAIIADgDIAIgKIAKgQIAOgRIATgYQAGgKAGgDQAEgCAEABIADAAQAFAAADADQAEgDAGAAQAHAAADAFIALgQIAZgeIAtgvIAVgVQANgLAMgFQAMgGAUgEQASgEAGAIQAGAGgDAOQgCAMgHARIgLAcQgHAVgCAXIgBAKIgCAFIgBAGIgCAFIAEAFQACAEgBAFQAAADgDAGIgIAQIgLASIgPAYIgOAWQADgDAEgBQAIgCAGAFQAGAFAAAIIgBAHIgBABIABAAQAEADABAFIACgCQAGgIAIAAQAFgBAGAEIACgBQAHAAAGAFIACAEQAJgLAJgIQARgPAVgEIAHgBIAGgDIAFgEQAFgEAHABQAHABADAEQAEAGAAAIIgCAOIgDAQQAAAJgCADIgDAEIgBAFIgDAFQABAFgBAFIgEAMIgDAIIAAAJIgCAJIgDAKIgDALIgDALQgHAUgSALQgSALgWgBIAAAAQACAEAAAFQAAAFgDAEQgEAGgNADQgQAEgLgCIgIgCIgJgDQgEgDgFgFIgBAAIgFABQgVAIgUgFQgKgDgJgGQgGgEgEgGQgIAWgDAMIgFAWQAABDACBGIAAAEIACANQgBAJgEAFIgDADIgBACQgFAFgHADQgFACgGAAIgDAAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AlKGoQgngBgYgDIgsgIQgbgFgPgGQgvgQgmguQgKgNgEgJQgEgIAAgHQgGgKgCgSQgDgcAHgUQAHgTAUgTQAYgWAkgRQAbgMApgMQANgEAIgBQAMgCAJADQAKADAGAIQAHAHADAKQAGATgKAUQgIAQgSANQgKAHgPAHIgaALIgXAMQADAEABAFQAVAHAeAFQA3AKAugDQA2gEArgUQAQgHAJgIIAJgJIAKgJIAQgMQgHgMgOgKQgLgIgPgJIgbgNQgmgTgWgMQgggSgXgUQgbgYgQgcQgTgegDgfIgBgJQgLgPAEgfQAJhOAngrQAPgQAbgTQBmhIBugWQAQgDALABQAJgIAMAAQAHAAAJADIAPAIIAbAPQANAIALAIQAbAWAHAbQAFAOgBAZQgBAggHARQgIAVgUAVQgVAYgcAPQgdAQgeADQgYADgVgGQgYgGgNgRQgIgKgEgOQgDgNABgPQACgXAOgcIALgUQgPAHgOAHIgLAJIglAbQgUARgMAPIgLAPQAAAHgCAHIgEAIIgDAJQAAAEABAGIACAJIACANIACAOQADAPALAPQAIAKAOAOIAKALQA5AZA0AhQgCgSAEgYIAEgSQADgLAEgFQADgEAHgFIAMgIIAFgGIAGgFIAFgCQAEgIAMgGQARgIATADQAXADAKAPQALANgBAUQgBAWgOAMQgHAHgMAFIgFABIAAAFQAAALgDAHQgBAEgFAGIgHAKIgDAGIgDAFQgHAKgOAEIgKABIAFAHQALAPAKAcQAMAhAAAWQAAAggTAbQgTAcgdALIgBAAQgKAJgNAKQgfAWgjATQgeAQgWAFQgTAFgYACIgTAAIgZAAgAD4FsQgMgBgOgJQgJgHgEgGQgGgJgBgOIAAgaIgBgSIgBgPIgCglIABgdQABgOACgJIADgHQgFABgEgBQgEABgGgBQgKgBgFgHQgFgGABgNIAHiFIgDAEIgGALQAAAEgBAFQgCAIgFAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgCAKgDAFQgFAMgKAFQgFADgGAAQgGABgFgDQgDgCgCgEQgDACgEAAQgFABgEgCQgEgCgCgEQgEgFAAgLQABgOADgXQAMhMAfhlIAEgLQADgGAFgCQAEgDAFABQADgHAEgDQAEgEAHABQAGAAAEAFQAEAEABAGIABAAQAIACADAHQABAEAAAFIgBAIIADgDIAIgKIAKgQIAOgRIATgYQAGgKAGgDQAEgCAEABIADAAQAFAAADADQAEgDAGAAQAHAAAEAFIALgQIAYgeIAtgvIAWgVQAMgLAMgFQAMgGAUgEQASgEAHAIQAFAGgDAOQgCAMgHARIgKAcQgIAVgCAXIgBAKIgCAFIgBAGIgCAFIAEAFQACAEAAAFQgBADgDAGIgIAQIgLASIgPAYIgOAWQAEgDADgBQAIgCAGAFQAGAFAAAIIgBAHIAAABIAAAAQAEADABAFIACgCQAGgIAIAAQAGgBAFAEIACgBQAHAAAGAFIADAEQAIgLAJgIQASgPAUgEIAHgBIAGgDIAFgEQAFgEAHABIACAAQAXguAKgcQADgLAEgEQAFgFALgDQALgDAFADQAEACAFAGIAGAKQACAGgCAMIgFAWQgDANgEAJQgEAHgKAOIgCALIgJAfIgHAaIgBAhIgBALIAAACQABADAAAHQABAcgHASIgHARIgDAHIgEAGQgDAEgEABQgFABgEgBQgEgBgEgEIgBgCQgEADgFAAQgFABgFgDQgFgDgBgEQgCgEABgGIgBgDQgBgEACgHQgHAJgJAFQgSALgWgBIAAAAQACAEAAAFQAAAFgDAEQgEAGgNADQgQAEgKgCIgJgCIgJgDQgEgDgFgFIAAAAIgGABQgVAIgUgFQgKgDgIgGQgGgEgFgGQgIAWgDAMIgEAWQgBBDADBGIAAAEIABANQgBAJgEAFIgDADIgBACQgFAFgHADQgFACgGAAIgDAAgAIGAhIAAABIAAgCIAAABgAINADIAAAAIABAAg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AliGoQgngBgYgDIgsgIQgbgFgPgGQgvgQgmguQgLgNgEgJQgDgIAAgHQgGgKgCgSQgEgcAIgUQAHgTAUgTQAYgWAkgRQAbgMApgMQANgEAIgBQAMgCAJADQAJADAHAIQAHAHADAKQAFATgJAUQgIAQgSANQgKAHgPAHIgaALIgYAMQADAEACAFQAUAHAeAFQA4AKAtgDQA3gEArgUQAQgHAJgIIAJgJIAJgJIARgMQgHgMgPgKQgKgIgPgJIgbgNQgngTgVgMQgggSgXgUQgbgYgRgcQgSgegDgfIgBgJQgLgPAEgfQAIhOAogrQAOgQAcgTQBmhIBtgWQARgDALABQAJgIALAAQAIAAAJADIAPAIIAaAPQAPAIAKAIQAaAWAIAbQAEAOAAAZQgCAggGARQgIAVgTAVQgWAYgcAPQgdAQgeADQgYADgWgGQgXgGgNgRQgIgKgEgOQgDgNABgPQABgXAPgcIALgUQgPAHgOAHIgMAJIgkAbQgUARgNAPIgKAPQAAAHgCAHIgEAIIgDAJQgBAEACAGIACAJIACANIACAOQADAPALAPQAIAKAOAOIAKALQA5AZA0AhQgCgSAEgYIAEgSQACgLAEgFQADgEAIgFIAMgIIAFgGIAGgFIAFgCQAEgIAMgGQAQgIAUADQAWADAMAPQALANgBAUQgCAWgNAMQgIAHgMAFIgFABIAAAFQAAALgDAHQgCAEgEAGIgHAKIgDAGIgEAFQgHAKgNAEIgLABIAGAHQALAPAKAcQAMAhAAAWQAAAggTAbQgTAcgdALIgBAAQgKAJgNAKQgfAWgjATQgeAQgXAFQgTAFgYACIgTAAIgYAAgADgFsQgMgBgOgJQgJgHgFgGQgGgJgBgOIABgaIgBgSIgBgPIgCglIABgdQABgOACgJIADgHQgFABgEgBQgFABgFgBQgLgBgFgHQgEgGABgNIAGiFIgCAEIgGALQAAAEgBAFQgCAIgFAKIgNAVIgOAUQgIALgEAJIgDAHIgBABQgDAKgCAFQgGAMgJAFQgFADgGAAQgGABgFgDQgDgCgCgEQgEACgDAAQgFABgEgCQgEgCgDgEQgDgFAAgLQAAgOAEgXQAMhMAfhlIAEgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAGABQAHAAAEAFQADAEABAGIACAAQAHACADAHQACAEAAAFIgBAIIADgDIAIgKIAKgQIAOgRIATgYQAGgKAFgDQAFgCAEABIADAAQAEAAAEADQAEgDAGAAQAGAAAEAFIALgQIAZgeIAtgvIAVgVQANgLAMgFQAMgGAUgEQASgEAGAIQAGAGgDAOQgCAMgHARIgLAcQgHAVgCAXIgCAKIgBAFIgBAGIgCAFIAEAFQACAEgBAFQAAADgDAGIgIAQIgLASIgPAYIgOAWQADgDAEgBQAIgCAGAFQAGAFAAAIIgBAHIgBABIABAAQAEADABAFIACgCQAGgIAIAAQAFgBAFAEIADgBQAHAAAGAFIACAEQAIgLAKgIQARgPAVgEIAHgBIAGgDIAFgEQAFgEAHABIABAAQAXguAKgcQAEgLAEgEQAFgFALgDQAKgDAGADQADACAFAGIAHAKQACAGgCAMIgFAWIgDALIAGgBQAGgBAHAFQAMAHAFAOQAFAMAAAQQAAAWgIAaQAIAAAGAFQAEAEACAJQAFAPgBAXQgCAfgNAQQgKAMgQAGQgPAGgSAAQgOAAgIgFQgFgDgEgFIgCAFIgDAHIgEAGQgDAEgEABQgFABgEgBQgFgBgDgEIgCgCQgEADgEAAQgFABgFgDQgFgDgCgEQgBgEABgGIgBgDQgBgEACgHQgHAJgKAFQgRALgWgBIgBAAQADAEAAAFQAAAFgDAEQgEAGgNADQgQAEgLgCIgIgCIgJgDQgFgDgEgFIgBAAIgFABQgVAIgUgFQgKgDgJgGQgGgEgEgGQgIAWgDAMIgFAWQAABDACBGIAAAEIABANQAAAJgEAFIgDADIgBACQgFAFgHADQgFACgHAAIgCAAgAHtAhIABABIAAgCIgBABgAH1ADIAAAAIAAAAg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjgIxQgJAAgGgDQgJgFgEgOQgDgKAAgPIgBgZQgBgKACgEQABgEAEgDIAEgDIAEghIADgZIADgYIAIggQAJggANgiQADgIADgDQAEgGAFgCIAFgBIAFgEQAFgCAFABQAGABAIAJQAHAKACAJQACAJgEAPQgOA/gRA6IgDAJQAEABAEADQADADACAFQABAFgCAJIgEAdIgEAdQgDANgFAGQgFAIgKAEQgJADgLAAIgBAAgAliEeQgngBgYgDIgsgHQgbgGgPgFQgvgRgmgtQgLgNgEgKQgDgHAAgHQgGgLgCgRQgEgcAIgUQAHgTAUgTQAYgXAkgQQAbgMApgMQANgEAIgBQAMgBAJADQAJADAHAIQAHAGADAKQAFATgJATQgIARgSANQgKAHgPAHIgaALIgYALQADAFACAFQAUAHAeAFQA4AJAtgDQA3gDArgUQAQgIAJgIIAJgJIAJgJIARgLQgHgMgPgLQgKgIgPgIIgbgNQgngTgVgLQgggTgXgUQgbgXgRgcQgSgegDggIgBgKQgLgPAEgeQAIhOAogsQAOgQAcgSQBmhIBtgWQARgDALABQAJgJALAAQAIAAAJAEIAPAHIAaAPQAPAJAKAIQAaAWAIAaQAEAOAAAaQgCAfgGASQgIAVgTAVQgWAYgcAOQgdAQgeAEQgYADgWgGQgXgHgNgQQgIgLgEgOQgDgNABgOQABgYAPgcIALgTQgPAGgOAIIgMAJIgkAbQgUARgNAPIgKAPQAAAGgCAHIgEAJIgDAJQgBAEACAFIACAKIACANIACANQADAPALAPQAIAMAOAOIAKAKQA5AZA0AiQgCgTAEgXIAEgSQACgLAEgGQADgEAIgFIAMgIIAFgGIAGgFIAFgCQAEgJAMgFQAQgIAUADQAWADAMAPQALANgBAVQgCAVgNANQgIAHgMAEIgFACIAAAFQAAALgDAGQgCAFgEAGIgHAKIgDAFIgEAGQgHAKgNADIgLACIAGAGQALAPAKAcQAMAhAAAWQAAAfgTAcQgTAbgdAMIgBAAQgKAJgNAKQgfAWgjASQgeAQgXAGQgTAFgYABIgTABIgYgBgADgDiQgMgBgOgJQgJgGgFgGQgGgJgBgPIABgaIgBgRIgBgPIgCglIABgdQABgPACgIIADgHQgFAAgEgBQgFABgFAAQgLgBgFgHQgEgGABgNIAGiEIgCAEIgGALQAAAEgBAFQgCAIgFAJIgNAWIgOATQgIAMgEAIIgDAHIgBACQgDAJgCAGQgGALgJAFQgFADgGAAQgGAAgFgCQgDgDgCgDQgEACgDAAQgFABgEgDQgEgCgDgCQgDgGAAgLQAAgNAEgXQAMhNAfhlIAEgLQADgGAEgCQAFgDAFABQACgHAEgDQAFgEAGAAQAHABAEAEQADAEABAHIACAAQAHACADAHQACADAAAGIgBAIIADgDIAIgKIAKgQIAOgSIATgXQAGgKAFgDQAFgCAEABIADAAQAEAAAEACQAEgCAGAAQAGAAAEAEIALgPIAZgeIAtgwIAVgUQANgLAMgGQAMgFAUgFQASgDAGAIQAGAGgDAOQgCALgHASIgLAcQgHAUgCAXIgCALIgBAFIgBAGIgCAFIAEAFQACAEgBAEQAAAEgDAGIgIAPIgLASIgPAZIgOAWQADgDAEgBQAIgCAGAFQAGAFAAAHIgBAIIgBAAIABABQAEADABAEIACgCQAGgHAIAAQAFgBAFADIADAAQAHAAAGAFIACADQAIgKAKgIQARgPAVgEIAHgBIAGgDIAFgEQAFgEAHAAIABABQAXgvAKgbQAEgLAEgEQAFgFALgDQAKgDAGADQADABAFAHIAHAJQACAGgCANIgFAWIgDAKIAGgBQAGAAAHAEQAMAIAFAOQAFALAAARQAAAWgIAbQAIgCAGAHQAEAEACAIQAFAQgBAWQgCAggNAQQgKAMgQAGQgPAGgSgBQgOAAgIgFQgFgDgEgFIgCAGIgDAHIgEAGQgDADgEABQgFABgEgBQgFgBgDgDIgCgDQgEADgEABQgFABgFgDQgFgDgCgEQgBgFABgGIgBgCQgBgEACgHQgHAIgKAGQgRALgWgBIgBAAQADAEAAAEQAAAFgDADQgEAHgNADQgQAEgLgCIgIgCIgJgEQgFgCgEgFIgBgBIgFACQgVAIgUgGQgKgCgJgFQgGgFgEgFQgIAVgDALIgFAXQAABDACBGIAAADIABAOQAAAIgEAGIgDADIgBACQgFAFgHACQgFACgHAAIgCAAgAHthnIABAAIAAgCIgBACgAH1iFIAAAAIAAAAg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjvIwQgLgFgGgJQgGgHgBgMQgCgIABgNIADgkIAFgkQABgMADgEQADgEAEgCIAFgBIABgGIADgYIAIggQAJggANgiQADgIADgEQAEgGAFgCIAFgBIAFgDQAFgCAFABQAGABAIAJQAHAKACAJQABAFgBAJIARgfQAOgYAUgVQALgMAJgHQANgKAJACIAGACIAHABQAHACADAHQACAGgCAIQgCAFgFAIIgSAgIgOAWIgOAUIgPAYQgaArgPAcIgQAgIgFAJQABAFgBAIQgGAkgLAcQgHARgHAIQgLANgOACIgDAAQgJAAgJgEgAliEcQgngBgYgDIgsgIQgbgFgPgFQgvgRgmguQgLgNgEgJQgDgIAAgHQgGgKgCgRQgEgcAIgVQAHgTAUgSQAYgXAkgQQAbgMApgMQANgEAIgBQAMgBAJADQAJADAHAHQAHAHADAJQAFATgJAUQgIAQgSANQgKAHgPAHIgaAMIgYALQADAEACAFQAUAIAeAFQA4AJAtgDQA3gEArgUQAQgHAJgIIAJgJIAJgJIARgMQgHgLgPgLQgKgIgPgIIgbgOQgngSgVgMQgggSgXgUQgbgXgRgcQgSgfgDggIgBgJQgLgPAEgfQAIhNAogsQAOgQAcgTQBmhHBtgWQARgDALAAQAJgIALAAQAIAAAJADIAPAIIAaAPQAPAJAKAIQAaAWAIAaQAEAOAAAaQgCAfgGASQgIAUgTAWQgWAXgcAPQgdAQgeAEQgYADgWgGQgXgHgNgRQgIgKgEgOQgDgNABgOQABgYAPgcIALgTQgPAGgOAIIgMAIIgkAcQgUAQgNAQIgKAPQAAAGgCAHIgEAJIgDAJQgBAEACAFIACAJIACAOIACANQADAPALAPQAIAMAOANIAKALQA5AZA0AiQgCgTAEgXIAEgTQACgLAEgFQADgEAIgFIAMgIIAFgGIAGgFIAFgCQAEgJAMgGQAQgHAUACQAWAEAMAOQALAOgBAVQgCAVgNANQgIAHgMAEIgFACIAAAEQAAALgDAHQgCAFgEAFIgHAKIgDAGIgEAGQgHAJgNAEIgLACIAGAFQALAQAKAcQAMAgAAAXQAAAfgTAcQgTAbgdALIgBABQgKAJgNAJQgfAXgjASQgeAQgXAGQgTAFgYABIgTAAIgYAAgADgDgQgMgBgOgJQgJgGgFgGQgGgJgBgPIABgaIgBgRIgBgPIgCgmIABgcQABgPACgIIADgIQgFABgEgBQgFABgFgBQgLgBgFgGQgEgGABgNIAGiEIgCADIgGAMQAAAEgBAEQgCAIgFAKIgNAWIgOATQgIALgEAJIgDAHIgBACQgDAJgCAGQgGALgJAFQgFADgGAAQgGAAgFgDQgDgCgCgDQgEACgDAAQgFAAgEgCQgEgCgDgDQgDgFAAgLQAAgNAEgXQAMhNAfhlIAEgLQADgGAEgDQAFgDAFABQACgGAEgDQAFgEAGAAQAHAAAEAFQADAEABAGIACABQAHACADAGQACAEAAAFIgBAIIADgDIAIgJIAKgQIAOgSIATgXQAGgKAFgDQAFgCAEAAIADAAQAEAAAEADQAEgDAGABQAGAAAEAEIALgQIAZgeIAtgvIAVgVQANgKAMgGQAMgGAUgEQASgDAGAHQAGAHgDANQgCAMgHARIgLAcQgHAVgCAXIgCAKIgBAGIgBAGIgCAEIAEAFQACAFgBAEQAAAEgDAGIgIAPIgLASIgPAZIgOAWQADgDAEgBQAIgCAGAEQAGAFAAAIIgBAIIgBAAIABAAQAEAEABAEIACgCQAGgHAIgBQAFAAAFADIADAAQAHgBAGAFIACAEQAIgLAKgHQARgPAVgEIAHgCIAGgCIAFgFQAFgEAHABIABAAQAXguAKgcQAEgKAEgEQAFgGALgDQAKgCAGADQADABAFAGIAHAKQACAGgCANIgFAWIgDAKIAGgBQAGAAAHAEQAMAHAFAPQAFALAAAQQAAAWgIAcQAIgCAGAGQAEAFACAIQAFAQgBAWQgCAfgNARQgKAMgQAGQgPAFgSAAQgOAAgIgFQgFgDgEgFIgCAFIgDAHIgEAHQgDADgEABQgFACgEgCQgFgBgDgEIgCgCQgEADgEABQgFAAgFgCQgFgDgCgFQgBgEABgGIgBgCQgBgEACgHQgHAIgKAGQgRALgWgBIgBAAQADADAAAFQAAAFgDADQgEAGgNAEQgQAEgLgCIgIgCIgJgEQgFgDgEgFIgBAAIgFABQgVAIgUgFQgKgDgJgFQgGgEgEgFQgIAVgDALIgFAWQAABDACBGIAAAEIABAOQAAAIgEAFIgDADIgBACQgFAGgHACQgFACgHAAIgCAAgAHthpIABAAIAAgCIgBACgAH1iHIAAAAIAAAAg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AiCI1QgIgEgFgHQgFgIgCgOQgEgWADgeIACgKQABgEACgDIAAgHIABgLIAAgOIAAgOIACgLIgOAbIgDAGIAAADQACAGgEAJQgFARgLAUIgUAkQgHAMgFAFQgJAIgLgBQgFgBgFgDQgEgDgDgFQgEgIgCgOQgCgVAEgmQABgJADgEIADgDIACgUIADgZIADgZIAIgfQAJggANgiQADgIADgEQAEgGAFgCIAFgBIAFgDQAFgCAFABQAGABAIAJQAHAKACAIQABAGgBAJIARgfQAOgYAUgVQALgMAJgIQANgJAJACIAGACIAHABQAHACADAHIABAFQAFADABAFQABAGgDAIIgHAMQgHALgGANQgFAKgCAIIgDAUIgFAaIgFAbQgDAOgCAZIgEAnIgBADIAFAEQADAEABAGIAAALQgCAjgCAPQgEAWgIAMQgFAIgHAFQgIAGgJABIgCAAQgIAAgHgEgAliEXQgngBgYgDIgsgIQgbgFgPgFQgvgRgmguQgLgNgEgJQgDgIAAgHQgGgKgCgRQgEgcAIgVQAHgTAUgSQAYgXAkgQQAbgMApgMQANgEAIgBQAMgBAJADQAJADAHAHQAHAIADAIQAFATgJAUQgIAQgSANQgKAHgPAHIgaAMIgYALQADAEACAFQAUAIAeAFQA4AJAtgDQA3gEArgUQAQgHAJgIIAJgJIAJgJIARgMQgHgMgPgKQgKgIgPgIIgbgOQgngRgVgNQgggSgXgUQgbgXgRgcQgSgfgDggIgBgJQgLgPAEgfQAIhNAogsQAOgQAcgTQBmhHBtgWQARgEALABQAJgIALAAQAIAAAJADIAPAIIAaAPQAPAJAKAIQAaAVAIAbQAEAOAAAaQgCAfgGARQgIAVgTAWQgWAXgcAPQgdAQgeAEQgYADgWgGQgXgHgNgRQgIgKgEgOQgDgNABgOQABgYAPgcIALgTQgPAGgOAIIgMAIIgkAcQgUAQgNAPIgKAQQAAAGgCAHIgEAJIgDAJQgBAEACAFIACAJIACAOIACANQADAPALAPQAIAMAOANIAKALQA5AZA0AiQgCgTAEgYIAEgSQACgLAEgFQADgEAIgFIAMgIIAFgGIAGgFIAFgCQAEgJAMgGQAQgHAUACQAWADAMAPQALAOgBAVQgCAVgNANQgIAHgMAEIgFACIAAAEQAAALgDAHQgCAFgEAFIgHAKIgDAGIgEAGQgHAJgNAEIgLACIAGAGQALAPAKAcQAMAgAAAXQAAAfgTAcQgTAbgdALIgBABQgKAIgNAKQgfAXgjASQgeAQgXAGQgTAFgYABIgTAAIgYAAgADgDbQgMgBgOgJQgJgGgFgGQgGgJgBgPIABgaIgBgRIgBgPIgCgmIABgcQABgPACgIIADgIQgFABgEgBQgFABgFgBQgLgBgFgGQgEgGABgNIAGiFIgCAEIgGAMQAAAEgBAEQgCAIgFAKIgNAWIgOATQgIALgEAJIgDAHIgBACQgDAJgCAGQgGALgJAFQgFADgGAAQgGAAgFgDQgDgCgCgCQgEABgDABQgFAAgEgCQgEgCgDgEQgDgFAAgLQAAgOAEgWQAMhNAfhlIAEgLQADgGAEgDQAFgDAFABQACgGAEgEQAFgDAGAAQAHAAAEAFQADAEABAGIACABQAHACADAGQACAEAAAFIgBAIIADgDIAIgJIAKgQIAOgSIATgXQAGgKAFgDQAFgCAEAAIADAAQAEAAAEADQAEgDAGAAQAGABAEAEIALgQIAZgeIAtgvIAVgVQANgKAMgGQAMgGAUgEQASgDAGAHQAGAGgDAOQgCAMgHARIgLAcQgHAVgCAXIgCAKIgBAGIgBAGIgCAEIAEAFQACAEgBAFQAAAEgDAGIgIAPIgLASIgPAZIgOAWQADgDAEgBQAIgCAGAEQAGAFAAAIIgBAHIgBABIABAAQAEAEABAEIACgCQAGgHAIgBQAFAAAFADIADAAQAHgBAGAFIACAEQAIgLAKgHQARgPAVgEIAHgCIAGgDIAFgEQAFgEAHABIABAAQAXguAKgcQAEgLAEgDQAFgGALgDQAKgCAGACQADACAFAGIAHAKQACAGgCAMIgFAXIgDAKIAGgBQAGAAAHAEQAMAHAFAPQAFALAAAQQAAAWgIAcQAIgCAGAGQAEAFACAIQAFAQgBAWQgCAfgNARQgKAMgQAGQgPAFgSAAQgOAAgIgFQgFgDgEgFIgCAFIgDAHIgEAHQgDADgEABQgFABgEgBQgFgBgDgEIgCgCQgEADgEABQgFAAgFgCQgFgDgCgFQgBgEABgGIgBgCQgBgEACgHQgHAIgKAGQgRALgWgBIgBAAQADADAAAFQAAAFgDAEQgEAFgNADQgQAFgLgCIgIgDIgJgDQgFgDgEgEIgBAAIgFABQgVAHgUgEQgKgDgJgGQgGgEgEgFQgIAVgDALIgFAWQAABDACBGIAAAEIABAOQAAAIgEAFIgDADIgBACQgFAFgHADQgFACgHAAIgCAAgAHthuIABAAIAAgCIgBACgAH1iMIAAAAIAAgBg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AiCI1QgIgEgFgHQgFgIgCgOQgEgWADgeIACgKQABgEACgDIAAgHIABgLIAAgOIAAgOIACgLIgOAbIgDAGIAAADQACAGgEAJQgFARgLAUIgUAkQgHAMgFAFQgJAIgLgBQgFgBgFgDQgEgDgDgFQgEgIgCgOQgCgVAEgmQABgJADgEIADgDIACgUIADgZIADgZIAIgfQAJggANgiQADgIADgEQAEgGAFgCIAFgBIAFgDQAFgCAFABQAGABAIAJQAHAKACAIQABAGgBAJIARgfQAOgYAUgVQALgMAJgIQANgJAJACIAGACIAHABQAEABADADIAEgCQALgKANgQIAVgdQAngwAvgSQAKgDAHABIAFADQALgDANADQAIACAEADQAHAEAAAHQABAEgDAGIgHAIIgNANIgbAdIgdAbIgdAZQgGAFgFACIgBAGQgDALgGAQQgKAZgJAPQgEAHgGADQAAAGgGAIQglA+gQBHIgDALQgCAGgDAEQgDAFgGACIAAAAQgCAegCAOQgEAWgIAMQgFAIgHAFQgIAGgJABIgCAAQgIAAgHgEgAliEXQgngBgYgDIgsgIQgbgFgPgFQgvgRgmguQgLgNgEgJQgDgIAAgHQgGgKgCgRQgEgcAIgVQAHgTAUgSQAYgXAkgQQAbgMApgMQANgEAIgBQAMgBAJADQAJADAHAHQAHAIADAIQAFATgJAUQgIAQgSANQgKAHgPAHIgaAMIgYALQADAEACAFQAUAIAeAFQA4AJAtgDQA3gEArgUQAQgHAJgIIAJgJIAJgJIARgMQgHgMgPgKQgKgIgPgIIgbgOQgngRgVgNQgggSgXgUQgbgXgRgcQgSgfgDggIgBgJQgLgPAEgfQAIhNAogsQAOgQAcgTQBmhHBtgWQARgEALABQAJgIALAAQAIAAAJADIAPAIIAaAPQAPAJAKAIQAaAVAIAbQAEAOAAAaQgCAfgGARQgIAVgTAWQgWAXgcAPQgdAQgeAEQgYADgWgGQgXgHgNgRQgIgKgEgOQgDgNABgOQABgYAPgcIALgTQgPAGgOAIIgMAIIgkAcQgUAQgNAPIgKAQQAAAGgCAHIgEAJIgDAJQgBAEACAFIACAJIACAOIACANQADAPALAPQAIAMAOANIAKALQA5AZA0AiQgCgTAEgYIAEgSQACgLAEgFQADgEAIgFIAMgIIAFgGIAGgFIAFgCQAEgJAMgGQAQgHAUACQAWADAMAPQALAOgBAVQgCAVgNANQgIAHgMAEIgFACIAAAEQAAALgDAHQgCAFgEAFIgHAKIgDAGIgEAGQgHAJgNAEIgLACIAGAGQALAPAKAcQAMAgAAAXQAAAfgTAcQgTAbgdALIgBABQgKAIgNAKQgfAXgjASQgeAQgXAGQgTAFgYABIgTAAIgYAAgADgDbQgMgBgOgJQgJgGgFgGQgGgJgBgPIABgaIgBgRIgBgPIgCgmIABgcQABgPACgIIADgIQgFABgEgBQgFABgFgBQgLgBgFgGQgEgGABgNIAGiFIgCAEIgGAMQAAAEgBAEQgCAIgFAKIgNAWIgOATQgIALgEAJIgDAHIgBACQgDAJgCAGQgGALgJAFQgFADgGAAQgGAAgFgDQgDgCgCgCQgEABgDABQgFAAgEgCQgEgCgDgEQgDgFAAgLQAAgOAEgWQAMhNAfhlIAEgLQADgGAEgDQAFgDAFABQACgGAEgEQAFgDAGAAQAHAAAEAFQADAEABAGIACABQAHACADAGQACAEAAAFIgBAIIADgDIAIgJIAKgQIAOgSIATgXQAGgKAFgDQAFgCAEAAIADAAQAEAAAEADQAEgDAGAAQAGABAEAEIALgQIAZgeIAtgvIAVgVQANgKAMgGQAMgGAUgEQASgDAGAHQAGAGgDAOQgCAMgHARIgLAcQgHAVgCAXIgCAKIgBAGIgBAGIgCAEIAEAFQACAEgBAFQAAAEgDAGIgIAPIgLASIgPAZIgOAWQADgDAEgBQAIgCAGAEQAGAFAAAIIgBAHIgBABIABAAQAEAEABAEIACgCQAGgHAIgBQAFAAAFADIADAAQAHgBAGAFIACAEQAIgLAKgHQARgPAVgEIAHgCIAGgDIAFgEQAFgEAHABIABAAQAXguAKgcQAEgLAEgDQAFgGALgDQAKgCAGACQADACAFAGIAHAKQACAGgCAMIgFAXIgDAKIAGgBQAGAAAHAEQAMAHAFAPQAFALAAAQQAAAWgIAcQAIgCAGAGQAEAFACAIQAFAQgBAWQgCAfgNARQgKAMgQAGQgPAFgSAAQgOAAgIgFQgFgDgEgFIgCAFIgDAHIgEAHQgDADgEABQgFABgEgBQgFgBgDgEIgCgCQgEADgEABQgFAAgFgCQgFgDgCgFQgBgEABgGIgBgCQgBgEACgHQgHAIgKAGQgRALgWgBIgBAAQADADAAAFQAAAFgDAEQgEAFgNADQgQAFgLgCIgIgDIgJgDQgFgDgEgEIgBAAIgFABQgVAHgUgEQgKgDgJgGQgGgEgEgFQgIAVgDALIgFAWQAABDACBGIAAAEIABAOQAAAIgEAFIgDADIgBACQgFAFgHADQgFACgHAAIgCAAgAHthuIABAAIAAgCIgBACgAH1iMIAAAAIAAgBg");
	var mask_1_graphics_24 = new cjs.Graphics().p("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");
	var mask_1_graphics_25 = new cjs.Graphics().p("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");
	var mask_1_graphics_26 = new cjs.Graphics().p("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");
	var mask_1_graphics_27 = new cjs.Graphics().p("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");
	var mask_1_graphics_28 = new cjs.Graphics().p("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");
	var mask_1_graphics_29 = new cjs.Graphics().p("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");
	var mask_1_graphics_30 = new cjs.Graphics().p("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IgBAGIgBAFIgCAFIAEAFQACAEgBAFQAAADgDAHIgIAPIgLASIgPAZIgOAVQADgDAEgBQAIgCAGAFQAGAFAAAIIgBAHIgBABIABAAQAEADABAFIACgCQAGgIAIAAQAFgBAFAEIADAAQAHgBAGAFIACAEQAIgLAKgIQARgOAVgEIAHgCIAGgDIAFgEQAFgEAHABIABAAQAXguAKgcQAEgLAEgEQAFgFALgDQAKgDAGADQADACAFAGIAHAKQACAGgCAMIgFAXIgDAKIAGgBQAGAAAHAEQAMAHAFAPQAFALAAAQQAAAWgIAbQAIgBAGAGQAEAEACAJQAFAQgBAWQgCAfgNAQQgKANgQAGQgPAFgSAAQgOAAgIgFQgFgDgEgFIgCAFIgDAHIgEAHQgDADgEABQgFABgEgBQgFgBgDgEIgCgCQgEADgEAAQgFABgFgDQgFgCgCgFQgBgEABgGIgBgDQgBgEACgHQgHAJgKAFQgRALgWgBIgBAAQADAEAAAFQAAAFgDAEQgEAGgNADQgQAEgLgCIgIgCIgJgDQgFgDgEgFIgBAAIgFABQgVAIgUgFQgKgDgJgGQgGgEgEgGQgIAWgDAMIgFAWQAABCACBGIAAAEIABANQAAAJgEAFIgDADIgBACQgFAFgHADQgFACgHAAIgCAAgAHtjNIABABIAAgCIgBABgAH1jrIAAAAIAAAAg");
	var mask_1_graphics_31 = new cjs.Graphics().p("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RIgLAcQgHAVgCAXIgCAKIgBAGIgBAFIgCAFIAEAFQACAEgBAFQAAADgDAHIgIAPIgLASIgPAZIgOAVQADgDAEgBQAIgCAGAFQAGAFAAAIIgBAHIgBABIABAAQAEADABAFIACgCQAGgIAIAAQAFgBAFAEIADAAQAHgBAGAFIACAEQAIgLAKgIQARgOAVgEIAHgCIAGgDIAFgEQAFgEAHABIABAAQAXguAKgcQAEgLAEgEQAFgFALgDQAKgDAGADQADACAFAGIAHAKQACAGgCAMIgFAXIgDAKIAGgBQAGAAAHAEQAMAHAFAPQAFALAAAQQAAAWgIAbQAIgBAGAGQAEAEACAJQAFAQgBAWQgCAfgNAQQgKANgQAGQgPAFgSAAQgOAAgIgFQgFgDgEgFIgCAFIgDAHIgEAHQgDADgEABQgFABgEgBQgFgBgDgEIgCgCQgEADgEAAQgFABgFgDQgFgCgCgFQgBgEABgGIgBgDQgBgEACgHQgHAJgKAFQgRALgWgBIgBAAQADAEAAAFQAAAFgDAEQgEAGgNADQgQAEgLgCIgIgCIgJgDQgFgDgEgFIgBAAIgFABQgVAIgUgFQgKgDgJgGQgGgEgEgGQgIAWgDAMIgFAWQAABCACBGIAAAEIABANQAAAJgEAFIgDADIgBACQgFAFgHADQgFACgHAAIgCAAgAHtjNIABABIAAgCIgBABgAH1jrIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:12.6572,y:37.1546}).wait(1).to({graphics:mask_1_graphics_2,x:27.4752,y:42.4086}).wait(1).to({graphics:mask_1_graphics_3,x:29.0031,y:42.4086}).wait(1).to({graphics:mask_1_graphics_4,x:29.7421,y:42.4086}).wait(1).to({graphics:mask_1_graphics_5,x:33.4491,y:42.4086}).wait(1).to({graphics:mask_1_graphics_6,x:33.4491,y:42.4086}).wait(1).to({graphics:mask_1_graphics_7,x:33.4491,y:42.4086}).wait(1).to({graphics:mask_1_graphics_8,x:38.4991,y:42.4086}).wait(1).to({graphics:mask_1_graphics_9,x:43.0499,y:42.4086}).wait(1).to({graphics:mask_1_graphics_10,x:43.963,y:42.4086}).wait(1).to({graphics:mask_1_graphics_11,x:53.0579,y:42.4086}).wait(1).to({graphics:mask_1_graphics_12,x:53.0579,y:42.4086}).wait(1).to({graphics:mask_1_graphics_13,x:53.0579,y:42.4086}).wait(1).to({graphics:mask_1_graphics_14,x:53.0579,y:42.4086}).wait(1).to({graphics:mask_1_graphics_15,x:53.0579,y:42.4086}).wait(1).to({graphics:mask_1_graphics_16,x:57.7129,y:42.4086}).wait(1).to({graphics:mask_1_graphics_17,x:57.7129,y:42.4086}).wait(1).to({graphics:mask_1_graphics_18,x:61.4929,y:42.4086}).wait(1).to({graphics:mask_1_graphics_19,x:63.9197,y:42.4086}).wait(1).to({graphics:mask_1_graphics_20,x:63.9197,y:56.139}).wait(1).to({graphics:mask_1_graphics_21,x:63.9197,y:56.3686}).wait(1).to({graphics:mask_1_graphics_22,x:63.9197,y:56.8741}).wait(1).to({graphics:mask_1_graphics_23,x:63.9197,y:56.8741}).wait(1).to({graphics:mask_1_graphics_24,x:63.9197,y:56.8741}).wait(1).to({graphics:mask_1_graphics_25,x:63.9197,y:66.2958}).wait(1).to({graphics:mask_1_graphics_26,x:63.9197,y:66.2958}).wait(1).to({graphics:mask_1_graphics_27,x:63.9197,y:66.2958}).wait(1).to({graphics:mask_1_graphics_28,x:63.9197,y:66.2958}).wait(1).to({graphics:mask_1_graphics_29,x:63.9197,y:66.2958}).wait(1).to({graphics:mask_1_graphics_30,x:63.9197,y:66.2958}).wait(1).to({graphics:mask_1_graphics_31,x:63.9197,y:66.2958}).wait(329));

	// Frame_1___So_Much_More
	this.instance_18 = new lib.Frame1SoMuchMore();
	this.instance_18.setTransform(3.15,13.35,0.3309,0.3286);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({_off:true},132).wait(227));

	// Frame_1___Black_Slanted_Box
	this.instance_19 = new lib.Frame1BlackSlantedBox_1();
	this.instance_19.setTransform(-82,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:74.5},23,cjs.Ease.cubicOut).wait(337));

	// Gradient_below_type
	this.instance_20 = new lib.Gradientbelowtype();

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},133).wait(227));

	// Image_1
	this.instance_21 = new lib.Image01();
	this.instance_21.setTransform(141.4,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:0.2,regY:0.2,scaleX:1.1621,scaleY:1.1622,x:143.75,y:95.25},132).to({_off:true},1).wait(227));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,53.4,580.4,225.70000000000002);
// library properties:
lib.properties = {
	id: 'FD30C5FE7BA7484EA937FA5DCCE55553',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SleepSavor_350x250_atlas_1.png?1616970233845", id:"SleepSavor_350x250_atlas_1"},
		{src:"images/SleepSavor_350x250_atlas_2.png?1616970233846", id:"SleepSavor_350x250_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FD30C5FE7BA7484EA937FA5DCCE55553'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;