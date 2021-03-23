(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SpringIntoFun_768x1024_atlas_1", frames: [[0,0,2002,1199]]},
		{name:"SpringIntoFun_768x1024_atlas_2", frames: [[0,0,1652,1100]]},
		{name:"SpringIntoFun_768x1024_atlas_3", frames: [[0,1102,1042,595],[1044,1102,768,727],[0,0,1540,1100]]},
		{name:"SpringIntoFun_768x1024_atlas_4", frames: [[1050,0,973,480],[0,1434,1171,216],[0,1026,1540,202],[0,1652,1171,216],[0,1230,1540,202],[0,0,523,1024],[525,0,523,1024],[1050,482,768,344]]},
		{name:"SpringIntoFun_768x1024_atlas_5", frames: [[0,0,1171,197],[0,199,1171,197],[1173,235,511,214],[1173,0,511,233],[0,398,342,210],[1686,240,290,280],[1686,0,359,238],[344,398,486,95]]}
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



(lib.CachedBmp_23 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frame1BlackSlantedBox = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frame1FunGraphic = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowType = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Frame2GradientBelowType = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Frame3BookLINKarea = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Frame3GradientBelowType = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image01 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image02 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image03 = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.StaticTanSlantedBox = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.StaticTSLogoWhite = function() {
	this.initialize(ss["SpringIntoFun_768x1024_atlas_5"]);
	this.gotoAndStop(7);
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
	this.instance.setTransform(-1001,-599.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image3, new cjs.Rectangle(-1001,-599.5,2002,1199), null);


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
	this.instance.setTransform(826,-550,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image2, new cjs.Rectangle(-826,-550,1652,1100), null);


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
	this.instance = new lib.Image01();
	this.instance.setTransform(770,-550,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image1, new cjs.Rectangle(-770,-550,1540,1100), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Eg7/BQAMAAAif/MB3/AAAMAAACf/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-512,768,1024);


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
	this.instance = new lib.CachedBmp_23();
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
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-292.7,-137.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1InCentralNY, new cjs.Rectangle(-292.7,-137.2,585.5,98.49999999999999), null);


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
	this.instance = new lib.CachedBmp_21();
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
	this.instance = new lib.CachedBmp_20();
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
	this.instance = new lib.CachedBmp_19();
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
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-160.65,-91.7,0.3085,0.3085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BOOKNOW, new cjs.Rectangle(-160.6,-91.7,321.4,183.60000000000002), null);


(lib.StaticTSLogoWhite_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.StaticTSLogoWhite();
	this.instance.setTransform(-243,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StaticTSLogoWhite_1, new cjs.Rectangle(-243,-47.5,486,95), null);


(lib.StaticTanSlantedBox_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.StaticTanSlantedBox();
	this.instance.setTransform(-384,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StaticTanSlantedBox_1, new cjs.Rectangle(-384,-172,768,344), null);


(lib.Into = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-292.7,-219.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Into, new cjs.Rectangle(-292.7,-219.5,585.5,108), null);


(lib.Frame2GetawayCopy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-384.9,-218.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame2GetawayCopy, new cjs.Rectangle(-384.9,-218,770,101), null);


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
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-292.7,-219.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1SpringInto, new cjs.Rectangle(-292.7,-219.5,585.5,108), null);


(lib.Frame1GradientBelowType_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-261.5,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1GradientBelowType_1, new cjs.Rectangle(-261.5,-512,523,1024), null);


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
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-384.9,-218.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dreams, new cjs.Rectangle(-384.9,-218,770,101), null);


(lib.Frame3GradientBelowType_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame3GradientBelowType();
	this.instance.setTransform(-261.5,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3GradientBelowType_1, new cjs.Rectangle(-261.5,-512,523,1024), null);


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
	this.instance.setTransform(-384,-363.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame2GradientBelowType_1, new cjs.Rectangle(-384,-363.5,768,727), null);


// stage content:
(lib.SpringIntoFun768x1024 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("Eg7/hP/MB3/AAAMAAACf/Mh3/AAAg");
	this.shape.setTransform(384,512);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Button
	this.button_link = new lib.Button();
	this.button_link.name = "button_link";
	this.button_link.setTransform(384,512);
	new cjs.ButtonHelper(this.button_link, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_link).wait(360));

	// Static___TS_Logo_White
	this.instance = new lib.StaticTSLogoWhite_1();
	this.instance.setTransform(387,927.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Static___Tan_Slanted_Box
	this.instance_1 = new lib.StaticTanSlantedBox_1();
	this.instance_1.setTransform(384,852);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// Frame_3___BOOK_NOW
	this.instance_2 = new lib.Frame3BOOKNOW();
	this.instance_2.setTransform(471.6,683.65,1.6208,1.6205,0,0,0,160.2,84);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(254).to({_off:false},0).to({regX:159.7,regY:83.7,scaleX:1,scaleY:1,x:372.3,y:631.6,alpha:1},19,cjs.Ease.cubicOut).wait(87));

	// Frame_3___Book_LINK_area
	this.instance_3 = new lib.Frame3BookLINKarea_1();
	this.instance_3.setTransform(216.35,553.35,1.5544,1.5543,0,0,0,0.7,1.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:216,y:552.45,alpha:1},19,cjs.Ease.cubicOut).wait(87));

	// Frame_3___25_
	this.instance_4 = new lib.Frame325();
	this.instance_4.setTransform(400.6,335.3,0.8235,0.8245,0,0,0,1.8,-24.8);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(241).to({_off:false},0).to({regX:2.6,x:222.15,alpha:1},17,cjs.Ease.cubicOut).wait(102));

	// Up_To
	this.instance_5 = new lib.UpTo();
	this.instance_5.setTransform(-127.4,210.15,0.9998,0.9995,0,0,0,-25.4,-58.3);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(231).to({_off:false},0).to({regX:-25.8,regY:-58.8,scaleX:1,scaleY:1,x:223.15,y:210},23,cjs.Ease.cubicOut).wait(106));

	// Frame_3___Save_Up_To
	this.instance_6 = new lib.Save();
	this.instance_6.setTransform(-117.4,169.15,0.9998,0.9995,0,0,0,-25.4,-15.2);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(227).to({_off:false},0).to({regX:-25.8,regY:-15.8,scaleX:1,scaleY:1,x:227.55,y:168.9},23,cjs.Ease.cubicOut).wait(110));

	// Frame_3___Gradient_Below_Type
	this.instance_7 = new lib.Frame3GradientBelowType_1();
	this.instance_7.setTransform(261.5,512);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({_off:false},0).to({alpha:0.3008},13).wait(133));

	// Image_3
	this.instance_8 = new lib.Image3();
	this.instance_8.setTransform(331.55,390.3,1.1319,1.1319,0,0,0,0.6,0.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(214).to({_off:false},0).to({scaleX:1.1219,scaleY:1.1219,x:328.7,y:392.25,alpha:1},13).to({regX:0.1,regY:0.2,scaleX:1.021,scaleY:1.0209,x:300.7,y:412.15},132).wait(1));

	// Dreams
	this.instance_9 = new lib.Dreams();
	this.instance_9.setTransform(385.45,675.85,1,1,0,0,0,0.1,-167.7);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(135).to({_off:false},0).to({y:581.3,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},93).wait(107));

	// Frame_2___Getaway_Copy
	this.instance_10 = new lib.Frame2GetawayCopy();
	this.instance_10.setTransform(384.3,634.35,1,1,0,0,0,0.1,-126.7);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(131).to({_off:false},0).to({y:539.8,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},97).wait(107));

	// Frame_2___Gradient_Below_Type
	this.instance_11 = new lib.Frame2GradientBelowType_1();
	this.instance_11.setTransform(384,542.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(119).to({_off:false},0).to({alpha:0.3984},12).to({_off:true},122).wait(107));

	// Image_2
	this.instance_12 = new lib.Image2();
	this.instance_12.setTransform(85,360.1,1.0466,1.0464,0,0,0,1.3,0.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).to({regY:0.9,scaleX:1.0388,scaleY:1.0387,x:95.3,y:362.2,alpha:1},12).to({regX:0.5,regY:0.4,scaleX:0.9606,scaleY:0.9606,x:199.1,y:382.55},121).to({_off:true},1).wait(107));

	// NY
	this.instance_13 = new lib.NY();
	this.instance_13.setTransform(344,763.2,0.9031,0.9027,0,0,0,1.9,-86.2);
	this.instance_13.alpha = 0;
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({_off:false},0).to({regY:-85.9,y:695.45,alpha:1},24,cjs.Ease.cubicOut).to({_off:true},79).wait(228));

	// Frame_1___In_Central_NY
	this.instance_14 = new lib.Frame1InCentralNY();
	this.instance_14.setTransform(345.35,726.9,0.9031,0.9027,0,0,0,1.9,-47.8);
	this.instance_14.alpha = 0;
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({regY:-47.9,y:659.1,alpha:1},24,cjs.Ease.cubicOut).to({_off:true},84).wait(228));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("AgoDqQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgZQAHgkAUg6IAPgwQAMglAOgPQAPgRAWgFQAXgGAUAJQAVAIANAUQANATAAAXQAAAKgDAOIgGAYQgEAPgHArQgUCJgVBIQgLAjgNAQQgMAOgQAHQgOAGgOAAIgHgBg");
	var mask_graphics_9 = new cjs.Graphics().p("EABwAvtQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAGgPQgCgKgBgLQgBgUAIgoQAciEATg+QANgmAdhKQAehLAMgmQAIgbAFgMQAKgVANgMQARgQAZgDQAZgDAVAMQAUALAKAYQAKAXgGAXIgDANQgCAHACAFQABAFADAFIAGAKQAIAQgKAkIgRBDQgeB1gUA5QghBfgtBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgUCKgVBIQgLAjgNAQQgMAOgRAHQgNAFgOAAIgIAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EABEAvtQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAIgLQACg8AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQALgfAWgQQAPgKATgCQASgBARAHQAQAGAMAPQAMAOAEASQAEAUgHAkIgPBUQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAFgOAAIgHAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EgAKAvtQgSgCgPgKQgRgKgHgQQgJgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAIgkATg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAaiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAHgPAIgLQACg8AOg6QAMgyAagSIAOgLQADgFACgNQACgjAIgWQAKgfAWgQIAGgEICGmOICEgQIifHSIgOApIhdhcIAAgBIAAABIBdBcIAOgpQAEAVgHAiIgOBUQgNBJgPAlIgVAxIgOAkQgJAUgKAMIACAEIAGAKQAHAQgJAkIgRBDQgfB1gUA5QggBfgtBCIgFAIIAAAIQAAAKgDAOIgGAYQgFAPgGArQgUCKgWBIQgKAjgOAQQgLAOgRAHQgOAFgNAAIgHAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EgBNAvtQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAFgPQgCgKAAgLQgBgUAIgoQAciEATg+QANgmAchKQAehLAMgmQAIgbAFgMQAHgPAIgLQADg8AOg6QAMgyAZgSIAOgLQAEgFABgNQACgjAIgWQALgfAWgQIAGgEIAAABIBdBcIANgpIgNApIhdhcIAAgBICEmJIgBgCQgJgaAJgrQAHgeAUg6QAZhGAPglQAYg7AagsQASgfARgLQARgNAXAAQAWgBASALQATALAJAUQAKAUgDAWQgCAPgJASIgRAeQgeAzglBrIgOAtIgMA0QgJAegPAQIgEADIiPGjQAEAVgHAiIgOBUQgNBJgPAlIgVAxIgOAkQgIAUgLAMIACAEIAGAKQAIAQgKAkIgRBDQgeB1gUA5QghBfgtBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgUCKgVBIQgKAjgNAQQgMAOgRAHQgOAFgNAAIgIAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EgCrAvtQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAGgPQgDgKAAgLQgBgUAIgoQAciEATg+QANgmAdhKQAehLAMgmQAIgbAFgMQAHgPAJgLQACg8ANg6QAMgyAZgSIAOgLQAEgFABgNQACgjAIgWQALgfAWgQIAGgEIAAABIBdBcIAOgpIgOApIhdhcIAAgBICEmJIgBgCQgJgaAJgrQAHgeAUg6QAZhGAPglQAYg7AagsIAHgLQgCgRAEgSQAFgRANgWIAegxQARgcAHgXIAEgSIAGgRIABgCQABgNAGgNQAIgUARgLQARgLAjgIIAogJQAqgJAVAEQAWAEAQASQARARAEAWQADAWgKAWQgLAWgUALQgKAGgQADIgcAGIgRAFIgDAKQgIAZgIAQQgIATgSAeQgVAigHAOIgGAMQACAKgCAMQgCAPgJASIgRAeQgeAzglBrIgOAtIgMA0QgJAegPAQIgEADIiOGjQADAVgHAiIgOBUQgNBJgPAlIgVAxIgOAkQgIAUgLAMIACAEIAGAKQAIAQgKAkIgRBDQgeB1gUA5QghBfgsBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgUCKgVBIQgLAjgNAQQgMAOgRAHQgOAFgNAAIgIAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EgCrAvtQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAGgPQgDgKAAgLQgBgUAIgoQAciEATg+QANgmAdhKQAehLAMgmQAIgbAFgMQAHgPAJgLQACg8ANg6QAMgyAZgSIAOgLQAEgFABgNQACgjAIgWQALgfAWgQIAGgEIAAABIBdBcIAOgpIgOApIhdhcIAAgBICEmJIgBgCQgJgaAJgrQAHgeAUg6QAZhGAPglQAYg7AagsIAHgLQgCgRAEgSQAFgRANgWIAegxQARgcAHgXIAEgSIAGgRIABgCQABgNAGgNQAIgUARgLQARgLAjgIIAogJQAqgJAVAEQAWAEAQASQARARAEAWQADAWgKAWQgLAWgUALQgKAGgQADIgcAGIgRAFIgDAKQgIAZgIAQQgIATgSAeQgVAigHAOIgGAMQACAKgCAMQgCAPgJASIgRAeQgeAzglBrIgOAtIgMA0QgJAegPAQIgEADIiOGjQADAVgHAiIgOBUQgNBJgPAlIgVAxIgOAkQgIAUgLAMIACAEIAGAKQAIAQgKAkIgRBDQgeB1gUA5QghBfgsBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgUCKgVBIQgLAjgNAQQgMAOgRAHQgOAFgNAAIgIAAgAjZOaQgZgJgMgbQgNgaAHgaQAIgaAXgQQAYgRAbABQAIgXAdgOQAPgIAkgHQCFgbBNAAQArABAWALQAZAPAJAeQAJAegOAZQgOAbgmARQgNAGgUAGIgiAJQgxARgZAHQgjALgwAHIhWAKQgXACgMAAQgTAAgPgGg");
	var mask_graphics_15 = new cjs.Graphics().p("EgCrAvtQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAGgPQgDgKAAgLQgBgUAIgoQAciEATg+QANgmAdhKQAehLAMgmQAIgbAFgMQAHgPAJgLQACg8ANg6QAMgyAZgSIAOgLQAEgFABgNQACgjAIgWQALgfAWgQIAGgEIAAABIBdBcIAOgpIgOApIhdhcIAAgBICEmJIgBgCQgJgaAJgrQAHgeAUg6QAZhGAPglQAYg7AagsIAHgLQgCgRAEgSQAFgRANgWIAegxQARgcAHgXIAEgSIAGgRIABgCQABgNAGgNQADgIAFgGQhYAXhqAkQgeAKgPAAIgNgBIgDAHQgOAbgmARQgNAGgUAGIgiAJQgxARgZAHQgjALgwAHIhWAKQgXACgMAAQgTAAgPgGQgZgJgMgbQgNgaAHgaQAIgaAXgQQAYgRAbABQAIgXAdgOQAPgIAkgHQCFgbBNAAQAYAAARAEQAHgRANgLQAPgNAogNQCEgqA3gOQAzgNBogXQAkgJATADQAUACARAOQARANAGATQAHATgEAVQgEAVgOAOQgJAKgNAHQANAGAKALQARARAEAWQADAWgKAWQgLAWgUALQgKAGgQADIgcAGIgRAFIgDAKQgIAZgIAQQgIATgSAeQgVAigHAOIgGAMQACAKgCAMQgCAPgJASIgRAeQgeAzglBrIgOAtIgMA0QgJAegPAQIgEADIiOGjQADAVgHAiIgOBUQgNBJgPAlIgVAxIgOAkQgIAUgLAMIACAEIAGAKQAIAQgKAkIgRBDQgeB1gUA5QghBfgsBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgUCKgVBIQgLAjgNAQQgMAOgRAHQgOAFgNAAIgIAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLWAvtQgSgCgPgKQgQgKgIgQQgJgRgBgXQAAgPADgbIAFgyQAGg2AGgaQAHgkAUg6IAPgwIAGgPQgCgKgBgLQgBgUAIgoQAciEATg+QANgmAdhKQAehLAMgmQAIgbAFgMQAHgPAJgLQACg8AOg6QAMgyAZgSIAOgLQAEgFABgNQACgjAIgWQALgfAWgQIAGgEIAAABIBdBcIAOgpIgOApIhdhcIAAgBICEmJIgBgCQgJgaAJgrQAHgeAUg6QAZhGAPglQAYg7AagsIAHgLQgCgRAEgSQAFgRANgWIAegxQARgcAHgXIAEgSIAGgRIABgCQABgNAGgNQADgIAFgGQhXAXhrAkQgeAKgPAAIgNgBIgDAHQgOAbgmARQgNAGgUAGIgiAJQgxARgZAHQgkALgwAHIhWAKQgXACgMAAQgTAAgPgGQgZgJgMgbQgNgaAHgaQAIgaAXgQQAYgRAbABQAIgXAdgOQAPgIAkgHQCGgbBNAAQAYAAARAEQAHgRANgLQAPgNAogNQCEgqA3gOQAzgNBngXQAkgJATADQAKABAJADIAagHIA9gNQAmgIAWgGIAogKIAogJQAYgFAkgCIA8gFQAngDAjgIIA2gNQAWgEArgFIAbgEIAPgCQAGgJAJgGQAUgPAmgFQASgCAcgBIAugBQAygDBogUQBmgTA1gCQAogBAVAKQATAJALASQAMATgBAUQAAAVgMASQgLATgTAIQgNAGgSADIghACQgvADhZAQQhcARgsADIgsADQgcABgQACIgkAEIgMAAQgFAHgGAFQgSAQggAGIg4AHQgPACgZAGIgnAJQgiAHg8AFQhDAGgbAFQgaAEg3ANIhoAZQgaAHgPACIgNAAIAGAHQARARAEAWQADAWgKAWQgLAWgUALQgKAGgQADIgcAGIgRAFIgDAKQgIAZgIAQQgIATgRAeQgVAigHAOIgGAMQACAKgCAMQgCAPgJASIgRAeQgeAzglBrIgOAtIgMA0QgJAegPAQIgEADIiOGjQADAVgHAiIgOBUQgNBJgPAlIgVAxIgOAkQgIAUgLAMIACAEIAGAKQAIAQgKAkIgRBDQgeB1gUA5QghBfgtBCIgFAIIAAAIQAAAKgDAOIgGAYQgEAPgHArQgUCKgVBIQgLAjgNAQQgMAOgRAHQgNAFgOAAIgIAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EgRaAvtQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAGgPAJgLQACg8AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQALgfAWgQIAGgEIAAABIBdBcIAOgpIgOApIhdhcIAAgBICEmJIAAgCQgKgaAKgrQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQADgIAFgGQhXAXhqAkQgeAKgPAAIgNgBIgDAHQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgRAOgLQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJADIAagHIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA7gFQAngDAjgIIA3gNQAVgEAsgFIAagEIAPgCQAHgJAJgGQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAlgBAVAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgTgBgOgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgFAHgGAFQgSAQgfAGIg4AHQgPACgZAGIgoAJQghAHg9AFQhBAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgLAGgPADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACAKgBAMQgCAPgJASIgSAeQgdAzgmBrIgOAtIgMA0QgIAegQAQIgEADIiOGjQADAVgGAiIgPBUQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAFgOAAIgHAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgRaAvtQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAGgPAJgLQACg8AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAGgSAKgMIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgYAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQADgIAFgGQhXAXhqAkQgeAKgPAAIgNgBIgDAHQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgRAOgLQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJADIAagHIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA7gFQAngDAjgIIA3gNQAVgEAsgFIAagEIAPgCQAHgJAJgGQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAlgBAVAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgTgBgOgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgFAHgGAFQgSAQgfAGIg4AHQgPACgZAGIgoAJQghAHg9AFQhBAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgLAGgPADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACAKgBAMQgCAPgJASIgSAeQgdAzgmBrIgOAtIgMA0QgIAegQAQIgEADIiOGjQADAVgGAiIgPBUQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAFgOAAIgHAAgArgc7IAOgpIgOApIhQhQg");
	var mask_graphics_19 = new cjs.Graphics().p("EgRaAvtQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAGgPAJgLQACg8AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAGgSAKgMIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgYAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQADgIAFgGQhXAXhqAkQgeAKgPAAIgNgBIgDAHQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgRAOgLQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJADIAagHIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA7gFQAngDAjgIIA3gNQAVgEAsgFIAagEIAPgCQAHgJAJgGQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAlgBAVAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgTgBgOgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgFAHgGAFQgSAQgfAGIg4AHQgPACgZAGIgoAJQghAHg9AFQhBAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgLAGgPADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACAKgBAMQgCAPgJASIgSAeQgdAzgmBrIgOAtIgJAmIACAFQANAcgKAyQgGAbgMAkIgRA0IB8gBQAeAAAPACQAYADASALQARAKAMASQALASABAVQABAUgIAUQgIAUgQANQgVASgqALQgxANhaALIhUAMQgQA+gJApQgJAkgIAOQgLATgVAJQgKAEgJACIgDAQQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAFgOAAIgHAAgAsob0IgIgJg");
	var mask_graphics_20 = new cjs.Graphics().p("EgRaAvtQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAGgPAJgLQACg8AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAGgSAKgMIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgYAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQADgIAFgGQhXAXhqAkQgeAKgPAAIgNgBIgDAHQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgRAOgLQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJADIAagHIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA7gFQAngDAjgIIA3gNQAVgEAsgFIAagEIAPgCQAHgJAJgGQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAlgBAVAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgTgBgOgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgFAHgGAFQgSAQgfAGIg4AHQgPACgZAGIgoAJQghAHg9AFQhBAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgLAGgPADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACAKgBAMQgCAPgJASIgSAeQgdAzgmBrIgOAtIgJAmIACAFQANAcgKAyQgGAbgMAkIgRA0IB8gBQAeAAAPACQAYADASALQARAKAMASQALASABAVQABAUgIAUQgIAUgQANQgVASgqALQgxANhaALIhUAMQgQA+gJApQgJAkgIAOQgLATgVAJQgKAEgJACIgDAQQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAFgOAAIgHAAgAsob0IgIgJgAlkfSQgUgIgNgTQgOgSgBgWQAAgVANgkQAfhTAWgyQAghIAkg2IAdgrQASgcAKgXIAMgfQAIgSAJgKQAOgQAVgFQAVgGAUAFQAUAGAOAQQAOARAEAUQAGAhgaAyQgTAogZAoIgrBDQgZApgWA2QgQAlgWA/QgMAngQAQQgOAQgXAFQgJACgIAAQgNAAgNgEg");
	var mask_graphics_21 = new cjs.Graphics().p("EgRaAvtQgSgCgQgKQgQgKgIgQQgIgRgBgXQgBgPADgbIAGgyQAGg2AFgaQAHgkAUg6IAQgwIAFgPQgCgKgBgLQAAgUAIgoQAbiEAUg+QAMgmAehKQAdhLAMgmQAJgbAFgMQAGgPAJgLQACg8AOg6QAMgyAagSIAOgLQADgFABgNQADgjAHgWQAGgSAKgMIgJACIgrAKQgaAGgSABQgfgCgQABIgYAFQgPADgJAAQgUABgSgMQgRgLgJgSQgJgRABgVQABgUAKgSQAPgYAggRQAOgHAtgOQAogMAygSIAggMQAHgDAEgEQAEgEACgLQAEgWABgoQABgrADgTIAJg2IADgeQABgRAFgMQAHgTASgNQASgNAVgCQAVgBATALQASAJAJAQIAEgUQAGgeAUg6QAZhGAPglQAZg7AagsIAHgLQgDgRAFgSQAEgRANgWIAegxQARgcAHgXIAFgSIAGgRIABgCQABgNAFgNQADgIAFgGQhXAXhqAkQgeAKgPAAIgNgBIgDAHQgPAbgmARQgNAGgTAGIgiAJQgxARgZAHQgkALgxAHIhWAKQgXACgMAAQgTAAgOgGQgZgJgNgbQgMgaAHgaQAHgaAYgQQAXgRAbABQAJgXAcgOQAQgIAkgHQCGgbBNAAQAYAAARAEQAGgRAOgLQAOgNAogNQCEgqA4gOQAzgNBogXQAkgJATADQAJABAJADIAagHIA9gNQAmgIAXgGIAogKIAogJQAYgFAjgCIA7gFQAngDAjgIIA3gNQAVgEAsgFIAagEIAPgCQAHgJAJgGQATgPAmgFQATgCAbgBIAugBQAzgDBogUQBlgTA1gCQAlgBAVAIIAIgHQAPgKAWgFQAPgEAagCQBngIEsgUQCegKBFABQAvABAWANQAQAJALARQAKARAAATQABATgKARQgJARgQAKQgQAKgZADQgNABgfgBQhPgCiNAKQj1APiRAOQgYACgNAAQgTgBgOgFQgJAJgMAFQgMAGgTADIghACQgvADhYAQQhcARgsADIgsADQgcABgRACIgjAEIgNAAQgFAHgGAFQgSAQgfAGIg4AHQgPACgZAGIgoAJQghAHg9AFQhBAGgcAFQgaAEg3ANIhoAZQgZAHgQACIgNAAIAHAHQARARADAWQAEAWgLAWQgKAWgUALQgLAGgPADIgcAGIgSAFIgCAKQgIAZgIAQQgJATgSAeQgVAigHAOIgGAMQACAKgBAMQgCAPgJASIgSAeQgdAzgmBrIgOAtIgJAmIACAFQANAcgKAyQgGAbgMAkIgRA0IB8gBQAeAAAPACQAYADASALQARAKAMASQALASABAVQABAUgIAUQgIAUgQANQgVASgqALQgxANhaALIhUAMQgQA+gJApQgJAkgIAOQgLATgVAJQgKAEgJACIgDAQQgMBJgPAlIgVAxIgOAkQgJAUgLAMIADAEIAFAKQAIAQgJAkIgRBDQgfB1gUA5QghBfgsBCIgGAIIABAIQAAAKgDAOIgHAYQgEAPgGArQgVCKgVBIQgKAjgOAQQgLAOgRAHQgOAFgOAAIgHAAgAsob0IgIgJgEgF+Am6QgSgEgOgNQgOgMgHgRQgGgNgBgSIgBggIgCiCQgBhOAIg0QAIg0ADgaIADghQACgUADgNQAFgXAKgPIAAgEQAAgVANgkQAfhTAWgyQAghIAkg2IAdgrQASgcAKgXIAMgfQAIgSAJgKQAOgQAVgFQAVgGAUAFQAUAGAOAQQAOARAEAUQAGAhgaAyQgTAogZAoIgrBDQgZApgWA2QgQAlgWA/QgJAcgLAQQACARgGAfQgTBtgDBLQgDA9AFBeQACApgCARQgEAhgTATQgMANgSAGQgLADgLAAQgIAAgHgBg");
	var mask_graphics_22 = new cjs.Graphics().p("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");
	var mask_graphics_23 = new cjs.Graphics().p("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");
	var mask_graphics_24 = new cjs.Graphics().p("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");
	var mask_graphics_25 = new cjs.Graphics().p("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");
	var mask_graphics_26 = new cjs.Graphics().p("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");
	var mask_graphics_27 = new cjs.Graphics().p("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");
	var mask_graphics_28 = new cjs.Graphics().p("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");
	var mask_graphics_29 = new cjs.Graphics().p("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");
	var mask_graphics_30 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:56.9964,y:587.238}).wait(1).to({graphics:mask_graphics_9,x:41.6579,y:305.3461}).wait(1).to({graphics:mask_graphics_10,x:46.1227,y:305.3461}).wait(1).to({graphics:mask_graphics_11,x:54,y:305.3461}).wait(1).to({graphics:mask_graphics_12,x:60.676,y:305.3461}).wait(1).to({graphics:mask_graphics_13,x:70.0688,y:305.3461}).wait(1).to({graphics:mask_graphics_14,x:70.0688,y:305.3461}).wait(1).to({graphics:mask_graphics_15,x:70.0688,y:305.3461}).wait(1).to({graphics:mask_graphics_16,x:125.551,y:305.3461}).wait(1).to({graphics:mask_graphics_17,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_18,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_19,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_20,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_21,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_22,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_23,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_24,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_25,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_26,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_27,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_28,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_29,x:164.4263,y:305.3461}).wait(1).to({graphics:mask_graphics_30,x:186.3006,y:473.4163}).wait(330));

	// Frame_1___Fun_Graphic
	this.instance_15 = new lib.Frame1FunGraphic_1();
	this.instance_15.setTransform(188.6,478.2);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).to({_off:true},124).wait(228));

	// Frame_1___Black_Slanted_Box
	this.instance_16 = new lib.Frame1BlackSlantedBox_1();
	this.instance_16.setTransform(-176,466.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(8).to({_off:false},0).to({x:171},24,cjs.Ease.cubicOut).to({_off:true},100).wait(228));

	// Into
	this.instance_17 = new lib.Into();
	this.instance_17.setTransform(105,300,1,1,0,0,0,0,-165.5);
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).to({x:355.5},24,cjs.Ease.backOut).wait(332));

	// Frame_1___Spring_Into
	this.instance_18 = new lib.Frame1SpringInto();
	this.instance_18.setTransform(2,255,1,1,0,0,0,0,-121.5);
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:353.3},24,cjs.Ease.backOut).to({_off:true},108).wait(228));

	// Frame_1___Gradient_Below_Type
	this.instance_19 = new lib.Frame1GradientBelowType_1();
	this.instance_19.setTransform(261.5,512);
	this.instance_19.alpha = 0.4492;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},132).wait(228));

	// Image_Frame_1
	this.instance_20 = new lib.Image1();
	this.instance_20.setTransform(352.05,428.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:0.8,regY:0.8,scaleX:0.8955,scaleY:0.8954,x:401.4,y:393.75},131).to({_off:true},1).wait(228));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-418.1,223,1881.9,845.0999999999999);
// library properties:
lib.properties = {
	id: 'F391E5CEF73146EB9030DCA4C72015F7',
	width: 768,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SpringIntoFun_768x1024_atlas_1.png?1616423695282", id:"SpringIntoFun_768x1024_atlas_1"},
		{src:"images/SpringIntoFun_768x1024_atlas_2.png?1616423695282", id:"SpringIntoFun_768x1024_atlas_2"},
		{src:"images/SpringIntoFun_768x1024_atlas_3.png?1616423695282", id:"SpringIntoFun_768x1024_atlas_3"},
		{src:"images/SpringIntoFun_768x1024_atlas_4.png?1616423695282", id:"SpringIntoFun_768x1024_atlas_4"},
		{src:"images/SpringIntoFun_768x1024_atlas_5.png?1616423695282", id:"SpringIntoFun_768x1024_atlas_5"}
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
an.compositions['F391E5CEF73146EB9030DCA4C72015F7'] = {
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