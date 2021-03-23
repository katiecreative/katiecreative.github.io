(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SpringIntoFun_1024x768_atlas_1", frames: [[0,904,1349,901],[0,0,1502,902]]},
		{name:"SpringIntoFun_1024x768_atlas_2", frames: [[1044,905,973,480],[0,905,1042,595],[0,1502,1024,403],[1263,0,575,768],[0,0,1261,903]]},
		{name:"SpringIntoFun_1024x768_atlas_3", frames: [[0,770,1171,214],[0,986,1171,197],[0,1185,1171,197],[1052,0,869,214],[1052,216,869,214],[1052,432,869,214],[1173,648,869,214],[1173,1099,511,214],[1173,864,511,233],[1173,1315,342,210],[1686,1104,290,280],[0,0,525,768],[527,0,523,768],[1686,864,359,238],[0,1384,263,206]]}
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



(lib.CachedBmp_13 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BottomTanSlantedBox = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Frame1BlackSlantedBox = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Frame1FunGraphic = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowType = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowTypecopy2 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Frame2GradientBelowType = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Frame3BookLINKarea = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image01 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image02 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image03 = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.TSLogoWhite = function() {
	this.initialize(ss["SpringIntoFun_1024x768_atlas_3"]);
	this.gotoAndStop(14);
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
	this.instance = new lib.Image03();
	this.instance.setTransform(-751,-451);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image3, new cjs.Rectangle(-751,-451,1502,902), null);


(lib.Image2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image02();
	this.instance.setTransform(-674.5,-450.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image2, new cjs.Rectangle(-674.5,-450.5,1349,901), null);


(lib.Image01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image01();
	this.instance.setTransform(606.5,-434.3,0.9619,0.962,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image01_1, new cjs.Rectangle(-606.4,-434.3,1212.9,868.7), null);


(lib.GradientFrame3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame1GradientBelowTypecopy2();
	this.instance.setTransform(-261.5,-384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GradientFrame3, new cjs.Rectangle(-261.5,-384,523,768), null);


(lib.Gradient01 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame1GradientBelowType();
	this.instance.setTransform(-262.5,-384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gradient01, new cjs.Rectangle(-262.5,-384,525,768), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("EhP/g7/MCf/AAAMAAAB3/Mif/AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513,-385,1026,770);


(lib.Frame2GradientBelowType_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame2GradientBelowType();
	this.instance.setTransform(-287.5,-384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame2GradientBelowType_1, new cjs.Rectangle(-287.5,-384,575,768), null);


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
	this.instance.setTransform(-171,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1BlackSlantedBox_1, new cjs.Rectangle(-171,-105,342,210), null);


(lib.Frame1FunGraphic_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame1FunGraphic();
	this.instance.setTransform(-145,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1FunGraphic_1, new cjs.Rectangle(-145,-140,290,280), null);


(lib.Frame1SpringInto = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-292.7,-138.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1SpringInto, new cjs.Rectangle(-292.7,-138.5,585.5,107), null);


(lib.NY = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-292.7,-137.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NY, new cjs.Rectangle(-292.7,-137.2,585.5,98.49999999999999), null);


(lib.Frame1InCentralNY = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-292.7,-137.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1InCentralNY, new cjs.Rectangle(-292.7,-137.2,585.5,98.49999999999999), null);


(lib.The = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-217.9,-234.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.The, new cjs.Rectangle(-217.9,-234.9,434.5,107), null);


(lib.OfYour = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-217.9,-234.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OfYour, new cjs.Rectangle(-217.9,-234.9,434.5,107), null);


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
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-217.9,-234.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Getaway, new cjs.Rectangle(-217.9,-234.9,434.5,107), null);


(lib.Dreams = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-217.9,-234.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dreams, new cjs.Rectangle(-217.9,-234.9,434.5,107), null);


(lib.UpTo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-153.35,-112.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpTo, new cjs.Rectangle(-153.3,-112.2,255.5,107), null);


(lib.Save = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-153.35,-112.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Save, new cjs.Rectangle(-153.3,-112.2,255.5,116.5), null);


(lib.Frame325 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-243.3,-146.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame325, new cjs.Rectangle(-243.3,-146.4,486.5,240), null);


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
	this.instance.setTransform(-179.5,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BookLINKarea_1, new cjs.Rectangle(-179.5,-119,359,238), null);


(lib.Frame3BOOKNOW = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-160.65,-91.7,0.3085,0.3085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BOOKNOW, new cjs.Rectangle(-160.6,-91.7,321.4,183.60000000000002), null);


// stage content:
(lib.SpringIntoFun1024x768 = function(mode,startPosition,loop,reversed) {
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

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("EhP/g7/MCf/AAAMAAAB3/Mif/AAAg");
	this.shape.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Button
	this.button_link = new lib.Button();
	this.button_link.name = "button_link";
	this.button_link.setTransform(512,384);
	new cjs.ButtonHelper(this.button_link, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_link).wait(360));

	// TS_Logo_White
	this.instance = new lib.TSLogoWhite();
	this.instance.setTransform(710,521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Bottom_Tan_Slanted_Box
	this.instance_1 = new lib.BottomTanSlantedBox();
	this.instance_1.setTransform(0,365);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// Frame_3___BOOK_NOW
	this.instance_2 = new lib.Frame3BOOKNOW();
	this.instance_2.setTransform(487.1,527.2,1.6208,1.6205,0,0,0,160.2,84);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(254).to({_off:false},0).to({regX:159.7,regY:83.7,scaleX:1,scaleY:1,x:387.8,y:475.15,alpha:1},19,cjs.Ease.cubicOut).wait(87));

	// Frame_3___Book_LINK_area
	this.instance_3 = new lib.Frame3BookLINKarea_1();
	this.instance_3.setTransform(231.85,396.9,1.5544,1.5543,0,0,0,0.7,1.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:231.5,y:396,alpha:1},19,cjs.Ease.cubicOut).wait(87));

	// Frame_3___25_
	this.instance_4 = new lib.Frame325();
	this.instance_4.setTransform(707,167.5,1,1,0,0,0,0,-26.6);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(241).to({_off:false},0).to({x:473.9,alpha:1},17,cjs.Ease.cubicOut).wait(102));

	// Layer_24
	this.instance_5 = new lib.UpTo();
	this.instance_5.setTransform(-118.1,203.55,0.9998,0.9995,0,0,0,-25.4,-58.3);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(231).to({_off:false},0).to({regX:-25.8,regY:-58.8,scaleX:1,scaleY:1,x:179.15,y:203.4},23,cjs.Ease.cubicOut).wait(106));

	// Frame_3___Save_Up_To
	this.instance_6 = new lib.Save();
	this.instance_6.setTransform(-118.1,155.95,0.9998,0.9995,0,0,0,-25.4,-15.2);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(227).to({_off:false},0).to({regX:-25.8,regY:-15.8,scaleX:1,scaleY:1,x:179.15,y:155.7},23,cjs.Ease.cubicOut).wait(110));

	// Gradient
	this.instance_7 = new lib.GradientFrame3();
	this.instance_7.setTransform(261.5,384);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({_off:false},0).to({alpha:0.5},13).wait(133));

	// Image_3
	this.instance_8 = new lib.Image3();
	this.instance_8.setTransform(370.45,216.25,1.6072,1.6072,0,0,0,0.6,0.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(214).to({_off:false},0).to({scaleX:1.5955,scaleY:1.5954,x:363.75,y:219.3,alpha:1},13).to({regX:0.8,regY:0.8,scaleX:1.4993,scaleY:1.4993,x:308.4,y:244.45},132).wait(1));

	// Dreams
	this.instance_9 = new lib.Dreams();
	this.instance_9.setTransform(307.85,464.2,1,1,0,0,0,-0.8,-181.5);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(137).to({_off:false},0).to({y:378.95,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},91).wait(107));

	// Of_Your
	this.instance_10 = new lib.OfYour();
	this.instance_10.setTransform(307.85,379.6,1,1,0,0,0,-0.8,-181.5);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(135).to({_off:false},0).to({y:294.35,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},93).wait(107));

	// Getaway
	this.instance_11 = new lib.Getaway();
	this.instance_11.setTransform(307.85,295,1,1,0,0,0,-0.8,-181.5);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(133).to({_off:false},0).to({y:209.75,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},95).wait(107));

	// The
	this.instance_12 = new lib.The();
	this.instance_12.setTransform(307.85,210.4,1,1,0,0,0,-0.8,-181.5);
	this.instance_12.alpha = 0;
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(131).to({_off:false},0).to({y:125.15,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},97).wait(107));

	// Frame_2___Gradient_Below_Type
	this.instance_13 = new lib.Frame2GradientBelowType_1();
	this.instance_13.setTransform(287.5,384);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(119).to({_off:false},0).to({alpha:0.5508},12).to({_off:true},122).wait(107));

	// Image_2
	this.instance_14 = new lib.Image2();
	this.instance_14.setTransform(406.6,395.9,1.2943,1.2942,0,0,180,-1.3,1.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(119).to({_off:false},0).to({scaleX:1.2838,scaleY:1.2837,x:410.95,y:396.35,alpha:1},12).to({regX:-2.6,regY:2.6,scaleX:1.1786,scaleY:1.1785,x:455.3,y:400.05},121).to({_off:true},1).wait(107));

	// NY
	this.instance_15 = new lib.NY();
	this.instance_15.setTransform(373.85,613.55,1,1,0,0,0,0,-88);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(27).to({_off:false},0).to({y:538.55,alpha:1},24,cjs.Ease.cubicOut).to({_off:true},81).wait(228));

	// Frame_1___In_Central_NY
	this.instance_16 = new lib.Frame1InCentralNY();
	this.instance_16.setTransform(375.3,573.15,1,1,0,0,0,0,-50.1);
	this.instance_16.alpha = 0;
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(22).to({_off:false},0).to({y:498.15,alpha:1},24,cjs.Ease.cubicOut).to({_off:true},86).wait(228));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("AgoDqQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgZQAHgkAUg6IAPgwQAMglAOgPQAPgRAWgFQAXgGAUAJQAVAIANAUQANATAAAXQAAAKgDAOIgGAYQgEAPgHArQgUCJgVBIQgLAjgNAQQgMAOgQAHQgOAGgOAAIgHgBg");
	var mask_graphics_5 = new cjs.Graphics().p("Ah2HzQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAGgPQgCgKgBgLQgBgUAIgoQAciDATg+QANgmAdhKQAdhLAMgmQAIgbAFgMQAKgVANgMQARgQAZgDQAZgDAVAMQAUALAKAYQAKAXgGAXIgDANQgCAHACAFQABAFADAFIAGAKQAIAQgKAkIgRBDQgeB1gUA5QghBegtBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgTCKgVBIQgLAjgNAQQgMAOgRAHQgNAGgOAAIgIgBg");
	var mask_graphics_6 = new cjs.Graphics().p("AiiKLQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg9QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAHgKQACg9AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQALgfAWgQQAPgKATgCQASgBARAHQAQAGAMAPQAMAOAEASQAEAUgHAkIgPBUQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB0gUA5QghBfgrBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBg");
	var mask_graphics_7 = new cjs.Graphics().p("AjxNXQgSgCgPgKQgQgLgIgQQgJgQgBgYQAAgPADgbIAFgxQAGg2AGgaQAHgkAUg7IAPgwIAFgPQgCgJAAgLQgBgVAIgoQAciDATg/QANgmAdhKQAehJAMgmQAIgcAFgLQAHgQAIgKQACg9APg5QAMgzAZgRIAOgLQAEgGABgNQACgjAHgWQALgeAWgQIAGgEICFmOICEgRIifHTIgNApIhdhdIAAAAIAAAAIBdBdIANgpQAEAUgHAjIgOBTQgNBJgPAlIgVAxIgOAlQgJAUgKALIACAFIAGAKQAIAPgKAjIgRBEQgeB1gTA4QghBfgtBDIgFAHIAAAIQAAALgDAOIgGAYQgEAPgHAqQgUCLgVBIQgLAjgNAQQgMANgRAHQgOAGgOAAIgHAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Ak0QgQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAGgPQgDgKAAgLQgBgUAIgoQAciEATg+QANgmAdhKQAehLAMgmQAIgbAFgMQAHgPAJgLQACg8AOg5QAMgyAZgSIAOgLQAEgFABgNQACgjAIgWQALgfAWgQIAGgEIAAABIBcBcIAOgpIgOApIhchcIAAgBICDmJIgBgCQgJgaAJgrQAHgeAUg6QAZhGAPglQAYg7AagsQASgfARgLQARgNAXAAQAWgBASALQATALAJAUQAKAUgDAWQgCAPgJASIgRAeQgeAzglBrIgOAtIgMA0QgJAegPAQIgEADIiOGjQADAVgHAiIgOBUQgNBIgPAlIgVAxIgOAkQgHAUgLAMIACAEIAGAKQAHAQgJAkIgRBDQgeB1gUA5QghBfgtBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgUCKgVBIQgLAjgNAQQgMAOgRAHQgOAGgNAAIgIgBg");
	var mask_graphics_9 = new cjs.Graphics().p("AmSShQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAGgPQgDgKAAgLQgBgUAIgoQAciEATg+QANgmAdhKQAehLAMgmQAIgbAFgMQAHgPAJgLQACg8AOg6QAMgyAZgSIAOgLQAEgFABgMQACgjAIgWQALgfAWgQIAGgEIAAABIBdBcIAOgpIgOApIhdhcIAAgBICDmJIgBgCQgJgaAJgrQAHgeAUg6QAZhGAPglQAYg7AagsIAHgLQgCgRAEgSQAFgRANgWIAegxQARgcAHgXIAEgSIAGgRIABgCQABgNAGgNQAIgUARgLQARgLAjgIIAogJQAqgJAVAEQAWAEAQASQARARAEAWQADAWgKAWQgLAWgUALQgKAGgQADIgcAGIgRAFIgDAKQgIAZgIAQQgIATgSAeQgVAigHAOIgGAMQACAKgCAMQgCAPgJASIgRAeQgeAzglBrIgOAtIgMA0QgJAegPAQIgEADIiNGjQADAVgHAiIgOBTQgNBJgPAlIgVAxIgOAkQgIAUgLAMIACAEIAGAKQAIAQgKAkIgRBDQgeB1gUA5QghBfgtBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgUCKgVBIQgLAjgNAQQgMAOgRAHQgNAGgOAAIgIgBg");
	var mask_graphics_10 = new cjs.Graphics().p("AmFShQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAGgPAJgLQACg8AOg6QAMgyAagSIAOgLQADgFABgMQADgjAHgWQALgfAWgQIAGgEIAAABIBdBcIANgpIgNApIhdhcIAAgBICDmJIAAgCQgKgaAKgrQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQAJgUARgLQAQgLAjgIIApgJQApgJAVAEQAWAEARASQARARADAWQAEAWgLAWQgKAWgUALQgLAGgPADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACAKgBAMQgCAPgJASIgSAeQgdAzgmBrIgOAtIgMA0QgIAegQAQIgEADIiOGjQADAVgFAiIgPBTQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBgAmzuxQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQArABAVALQAZAPAIAeQAJAegMAZQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGg");
	var mask_graphics_11 = new cjs.Graphics().p("AmFTkQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAGgPAJgKQACg9AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQALgeAWgQIAGgDIAAAAIBdBbIANgoIgNAoIhdhbIAAAAICDmKIAAgCQgKgaAKgrQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQADgHAFgHQhXAXhqAkQgeAKgPAAIgMAAIgDAGQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAXAAASAEQAGgQAOgMQAOgNAngNQCEgqA4gOQAzgNBogXQAkgJATADQAUACARAOQAQANAHATQAHATgFAVQgEAVgOAOQgJAKgMAHQAMAGALALQARARADAWQAEAWgLAWQgKAWgUALQgLAGgPADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACALgBALQgCAPgJASIgSAeQgdAzgmBrIgOAtIgMA0QgIAegQAQIgEAEIiOGiQADAUgFAiIgPBUQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBg");
	var mask_graphics_12 = new cjs.Graphics().p("AuwVAQgSgCgQgKQgQgLgIgQQgIgQgBgYQgBgPADgbIAGgxQAGg2AFgaQAHgkAUg7IAQgwIAFgPQgCgJgBgLQAAgVAIgoQAbiDAUg/QAMgmAehKQAdhKAMgmQAJgcAFgLQAGgQAJgKQACg9AOg5QAMgzAagRIAOgLQADgGABgNQADgjAHgWQALgeAWgQIAGgEIAAAAIBdBdIAOgpIgOApIhdhdIAAAAICEmJIAAgBQgKgaAKgsQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgRQAEgSANgWIAegwQARgdAHgWIAFgSIAGgRIABgDQABgNAFgMQAEgIAEgGQhXAWhqAlQgeAKgPAAIgNgBIgDAGQgPAcgmARQgNAGgTAFIgiAKQgxARgZAHQgkAKgxAHIhWAKQgXADgMAAQgTgBgOgFQgZgKgNgaQgMgaAHgaQAHgaAYgRQAXgQAbABQAJgYAcgOQAQgIAkgHQCGgbBNAAQAYABARADQAGgQAOgLQAOgNAogOQCEgpA4gOQAzgNBogXQAkgJATACQAJABAJAEIAagIIA9gNQAlgHAXgGIAogLIAogJQAYgEAjgDIA8gEQAngDAjgIIA3gNQAVgEAsgGIAagEIAPgBQAHgJAJgHQATgPAmgEQATgDAbAAIAugCQAzgCBogUQBlgUA1gCQApgBAVAKQASAJAMATQALASAAAVQAAAVgMASQgMASgTAJQgMAGgTACIghADQgvAChYARQhcARgsADIgsACQgcABgRACIgjAEIgNABQgEAGgHAGQgSAPgfAHIg4AHQgPACgZAGIgoAJQghAHg9AFQhCAGgcAEQgaAFg3ANIhnAZQgZAGgQACIgNABIAHAGQARARADAXQAEAWgLAVQgKAWgUALQgLAGgPAEIgcAGIgSAEIgCAKQgIAZgIARQgJASgSAeQgVAigHAOIgGAMQACALgBALQgCAPgJASIgSAfQgdAzgmBrIgOAsIgMA0QgIAegQAQIgEAEIiOGiQADAUgGAjIgPBTQgMBJgPAlIgVAxIgOAlQgJAUgLALIADAFIAFAKQAIAQgJAjIgRBEQgfB1gUA4QghBfgsBDIgGAHIABAIQAAALgDAOIgHAYQgEAPgGAqQgVCLgVBIQgKAjgOAQQgLANgRAHQgOAGgOAAIgHAAg");
	var mask_graphics_13 = new cjs.Graphics().p("A01VcQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAIgKQACg9AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQALgfAWgQIAGgDIAAAAIBdBcIAOgoIgOAoIhdhcIAAAAICEmJIAAgCQgKgaAKgrQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQAEgHAEgHQhXAXhqAkQgeAKgPAAIgNAAIgDAGQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgQAOgMQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJAEIAagIIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA8gFQAngDAjgIIA3gNQAVgEArgFIAagEIAPgBQAHgJAJgHQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAmgBAUAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgSgBgPgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgEAHgHAFQgSAQgfAGIg4AHQgPACgYAGIgoAJQghAHg9AFQhCAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgKAGgQADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACALgBALQgCAPgJASIgSAeQgdAzgmBrIgOAtIgMA0QgIAegQAQIgDAEIiPGiQAEAUgHAiIgPBUQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBg");
	var mask_graphics_14 = new cjs.Graphics().p("A01VcQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAIgKQACg9AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAHgRAJgNIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgXAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQAEgHAEgHQhXAXhqAkQgeAKgPAAIgNAAIgDAGQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgQAOgMQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJAEIAagIIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA8gFQAngDAjgIIA3gNQAVgEArgFIAagEIAPgBQAHgJAJgHQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAmgBAUAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgSgBgPgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgEAHgHAFQgSAQgfAGIg4AHQgPACgYAGIgoAJQghAHg9AFQhCAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgKAGgQADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACALgBALQgCAPgJASIgSAeQgdAzgmBrIgOAtIgMA0QgIAegQAQIgDAEIiPGiQAEAUgHAiIgPBUQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBgAu7CqIAOgoIgOAoIhQhPg");
	var mask_graphics_15 = new cjs.Graphics().p("A01VcQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAIgKQACg9AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAHgRAJgNIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgXAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQAEgHAEgHQhXAXhqAkQgeAKgPAAIgNAAIgDAGQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgQAOgMQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJAEIAagIIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA8gFQAngDAjgIIA3gNQAVgEArgFIAagEIAPgBQAHgJAJgHQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAmgBAUAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgSgBgPgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgEAHgHAFQgSAQgfAGIg4AHQgPACgYAGIgoAJQghAHg9AFQhCAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgKAGgQADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACALgBALQgCAPgJASIgSAeQgdAzgmBrIgOAtIgJAmIACAFQANAcgKAyQgGAbgMAkIgRA0IB8gBQAeAAAPACQAYADASALQARAKAMASQALASABAVQABAUgIAUQgIAUgQAMQgVASgqALQgxANhaALIhUAMQgQA+gJApQgJAkgIAOQgLATgVAJQgJAFgKABIgDAQQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBgAwDBjIgIgIg");
	var mask_graphics_16 = new cjs.Graphics().p("A01VcQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAIgKQACg9AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAHgRAJgNIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgXAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQAEgHAEgHQhXAXhqAkQgeAKgPAAIgNAAIgDAGQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgQAOgMQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJAEIAagIIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA8gFQAngDAjgIIA3gNQAVgEArgFIAagEIAPgBQAHgJAJgHQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAmgBAUAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgSgBgPgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgEAHgHAFQgSAQgfAGIg4AHQgPACgYAGIgoAJQghAHg9AFQhCAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgKAGgQADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACALgBALQgCAPgJASIgSAeQgdAzgmBrIgOAtIgJAmIACAFQANAcgKAyQgGAbgMAkIgRA0IB8gBQAeAAAPACQAYADASALQARAKAMASQALASABAVQABAUgIAUQgIAUgQAMQgVASgqALQgxANhaALIhUAMQgQA+gJApQgJAkgIAOQgLATgVAJQgJAFgKABIgDAQQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBgAwDBjIgIgIgAo/FBQgUgIgNgTQgOgSgBgWQAAgVANgkQAfhTAWgyQAghHAkg2IAdgrQASgcAKgXIAMgfQAIgSAJgKQAOgQAVgFQAVgGAUAFQAUAGAOAQQAOARAEAUQAGAhgaAyQgTAogZAoIgrBCQgZApgWA2QgQAlgWA/QgMAngQAQQgOAQgXAFQgIACgJAAQgNAAgNgEg");
	var mask_graphics_17 = new cjs.Graphics().p("A01VcQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAIgKQACg9AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAHgRAJgNIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgXAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQAEgHAEgHQhXAXhqAkQgeAKgPAAIgNAAIgDAGQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgQAOgMQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJAEIAagIIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA8gFQAngDAjgIIA3gNQAVgEArgFIAagEIAPgBQAHgJAJgHQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAmgBAUAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgSgBgPgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgEAHgHAFQgSAQgfAGIg4AHQgPACgYAGIgoAJQghAHg9AFQhCAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgKAGgQADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACALgBALQgCAPgJASIgSAeQgdAzgmBrIgOAtIgJAmIACAFQANAcgKAyQgGAbgMAkIgRA0IB8gBQAeAAAPACQAYADASALQARAKAMASQALASABAVQABAUgIAUQgIAUgQAMQgVASgqALQgxANhaALIhUAMQgQA+gJApQgJAkgIAOQgLATgVAJQgJAFgKABIgDAQQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBgAwDBjIgIgIgApZMpQgSgEgOgNQgOgMgHgRQgGgNgBgSIgBggIgCiCQgBhOAIg0QAIg0ADgaIADghQACgUADgNQAGgWAKgQIgBgEQAAgVANgkQAfhTAWgyQAghHAkg2IAdgrQASgcAKgXIAMgfQAIgSAJgKQAOgQAVgFQAVgGAUAFQAUAGAOAQQAOARAEAUQAGAhgaAyQgTAogZAoIgrBCQgZApgWA2QgQAlgWA/QgJAcgKARQABAQgGAfQgTBtgDBLQgDA9AFBeQACApgCARQgEAhgTATQgMANgSAGQgLADgLAAQgHAAgIgBg");
	var mask_graphics_18 = new cjs.Graphics().p("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");
	var mask_graphics_19 = new cjs.Graphics().p("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");
	var mask_graphics_20 = new cjs.Graphics().p("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");
	var mask_graphics_21 = new cjs.Graphics().p("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");
	var mask_graphics_22 = new cjs.Graphics().p("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");
	var mask_graphics_23 = new cjs.Graphics().p("A01VcQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAIgKQACg9AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAHgRAJgNIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgXAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQAEgHAEgHQhXAXhqAkQgeAKgPAAIgNAAIgDAGQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgQAOgMQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJAEIAagIIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA8gFQAngDAjgIIA3gNQAVgEArgFIAagEIAPgBQAHgJAJgHQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAmgBAUAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgSgBgPgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgEAHgHAFQgSAQgfAGIg4AHQgPACgYAGIgoAJQghAHg9AFQhCAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgKAGgQADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACALgBALQgCAPgJASIgSAeQgdAzgmBrIgOAtIgJAmIACAFQANAcgKAyQgGAbgMAkIgRA0IB8gBQAeAAAPACQAYADASALQARAKAMASQALASABAVQABAUgIAUQgIAUgQAMQgVASgqALQgxANhaALIhUAMQgQA+gJApQgJAkgIAOQgLATgVAJQgJAFgKABIgDAQQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAGgOAAIgHgBgAwDBjIgIgIgAj2NWQgbAAgPgGQgigOgQg8QgJgkgHg1IgKhZIgCgQQgGAIgIAFQgFAMgGAHQgFAHgHAEIgHAUQgNAhgOAYQgMAUgLAJQgQANgWAAIgOgBQgFAegRARQgMANgSAGQgTAGgSgEQgSgEgOgNQgOgMgHgRQgGgNgBgSIgBggIgCiCQgBhOAIg0QAIg0ADgaIADghQACgUADgNQAGgWAKgQIgBgEQAAgVANgkQAfhTAWgyQAghHAkg2IAdgrQASgcAKgXIAMgfQAIgSAJgKQAOgQAVgFQAVgGAUAFQAUAGAOAQQAOARAEAUQAGAhgaAyQgTAogZAoIgrBCQgZApgWA2QgQAlgWA/QgJAcgKARQABAQgGAfQgTBtgDBLIgBAWIADgKQALgeAMgNIABgCIAHghQALgzAMgxIALhOQAKhBANgxQAKglAJgbQAJgeANgNQAHgHAJgFQAGgIAGgHQALgKAQgEQAPgEAOAEQAPADAMAKIAGAGQAKgTALgRQAUggAUgKQAcgOAcAMQAcANANAcQAKAUgBAeQAAATgGAiIgwEXIgNBQQgCAWgDAKIAAADQABALgBALQAJgOAPgIQAPgIAQgBQAMAAAKAEIAAgBQAVhTALggIAfhKQAKgaAFgJQAJgUAMgKIABgOQADgNAIgPIAQgbQALgTALgYQAVguAMggQAJgYAGgJQALgPASgHQATgHATAEQASAEAOAOQAOAPADASQACAQgFAUQgDALgJAXIgEAJQAPgEAQAEQAUAFANAOQANAOADAUQADAVgIARQgEAJgIAKQADAIAAAIQAAARgHATQgFAMgMAVQgQAcgJANIgPAUQgJAMgIAIQgNAMgUACIgBADIgfBWQgSAxgTAiQgXAogbAKQgPAFgQgDQgLAqgVAQQgOAKgRACQgKACgKgCIgEAGQgHAKgQAQQgLAPgMAVQgTAlgIAKQgRAZgYAJQgMAFgaAAIgKAAg");
	var mask_graphics_24 = new cjs.Graphics().p("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");
	var mask_graphics_25 = new cjs.Graphics().p("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");
	var mask_graphics_26 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:61.3964,y:420.038}).wait(1).to({graphics:mask_graphics_5,x:69.1543,y:393.5161}).wait(1).to({graphics:mask_graphics_6,x:73.6192,y:378.3078}).wait(1).to({graphics:mask_graphics_7,x:81.4964,y:357.9961}).wait(1).to({graphics:mask_graphics_8,x:88.1725,y:337.8419}).wait(1).to({graphics:mask_graphics_9,x:97.5652,y:324.9345}).wait(1).to({graphics:mask_graphics_10,x:96.3431,y:324.9345}).wait(1).to({graphics:mask_graphics_11,x:96.3431,y:318.2189}).wait(1).to({graphics:mask_graphics_12,x:151.8254,y:309.0915}).wait(1).to({graphics:mask_graphics_13,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_14,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_15,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_16,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_17,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_18,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_19,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_20,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_21,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_22,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_23,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_24,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_25,x:190.7006,y:306.2163}).wait(1).to({graphics:mask_graphics_26,x:190.7006,y:306.2163}).wait(334));

	// Frame_1___Fun_Graphic
	this.instance_17 = new lib.Frame1FunGraphic_1();
	this.instance_17.setTransform(193,311);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).to({_off:true},128).wait(228));

	// Frame_1___Black_Slanted_Box
	this.instance_18 = new lib.Frame1BlackSlantedBox_1();
	this.instance_18.setTransform(-176,304);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).to({x:171},24,cjs.Ease.cubicOut).to({_off:true},104).wait(228));

	// Frame_1___Spring_Into
	this.instance_19 = new lib.Frame1SpringInto();
	this.instance_19.setTransform(-165,114.7,1,1,0,0,0,0,-85);
	this.instance_19.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:344.3},24,cjs.Ease.backOut).to({_off:true},108).wait(228));

	// Frame_1___Gradient_Below_Type
	this.instance_20 = new lib.Gradient01();
	this.instance_20.setTransform(262.5,384);
	this.instance_20.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},132).wait(228));

	// Image_Frame_1
	this.instance_21 = new lib.Image01_1();
	this.instance_21.setTransform(514.65,357.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:0.6,regY:0.4,scaleX:0.9473,scaleY:0.9473,x:575,y:315.95},131).to({_off:true},1).wait(228));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-325.5,-125.5,1902,1102.7);
// library properties:
lib.properties = {
	id: 'BEFD808FB66D425B977AE917191BD908',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SpringIntoFun_1024x768_atlas_1.png?1616381496403", id:"SpringIntoFun_1024x768_atlas_1"},
		{src:"images/SpringIntoFun_1024x768_atlas_2.png?1616381496403", id:"SpringIntoFun_1024x768_atlas_2"},
		{src:"images/SpringIntoFun_1024x768_atlas_3.png?1616381496404", id:"SpringIntoFun_1024x768_atlas_3"}
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
an.compositions['BEFD808FB66D425B977AE917191BD908'] = {
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