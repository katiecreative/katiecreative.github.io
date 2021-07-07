(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"GolfShortSwing_320x480_atlas_1", frames: [[0,0,2000,1142]]},
		{name:"GolfShortSwing_320x480_atlas_2", frames: [[1153,0,614,115],[0,0,1151,67],[322,69,506,83],[1065,117,282,45],[0,69,320,177],[1349,117,119,81],[1769,0,204,205],[830,69,233,79],[830,150,123,96]]},
		{name:"GolfShortSwing_320x480_atlas_3", frames: [[622,829,1151,350],[0,1864,1151,131],[622,1181,1151,242],[1475,1425,320,442],[1153,1425,320,466],[0,0,620,930],[0,932,620,930],[622,0,620,827],[1244,0,620,826]]}
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



(lib.CachedBmp_29 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BarunderTagline = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BottomTanSlantedBox = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowTypecopy = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowTypecopy2 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frame3BookLINKarea = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Photo1 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Photo2 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Photo3 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Photo4 = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.SoMuchMore = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.TSLogoWhite = function() {
	this.initialize(ss["GolfShortSwing_320x480_atlas_2"]);
	this.gotoAndStop(8);
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


(lib.Photo4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Photo4();
	this.instance.setTransform(-310,-413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Photo4_1, new cjs.Rectangle(-310,-413,620,826), null);


(lib.Photo3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Photo3();
	this.instance.setTransform(-266.5,-355.45,0.8597,0.8597);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Photo3_1, new cjs.Rectangle(-266.5,-355.4,533,710.9), null);


(lib.Photo2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Photo2();
	this.instance.setTransform(-310,-465);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Photo2_1, new cjs.Rectangle(-310,-465,620,930), null);


(lib.Photo1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Photo1();
	this.instance.setTransform(-183.5,-275.25,0.5919,0.5919);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Photo1_1, new cjs.Rectangle(-183.5,-275.2,367,550.5), null);


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
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(-57.2,-36.55,0.0572,0.0572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BOOKNOW, new cjs.Rectangle(-57.2,-36.5,114.5,65.3), null);


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
	this.instance.setTransform(-59.5,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BookLINKarea_1, new cjs.Rectangle(-59.5,-40.5,119,81), null);


(lib.TEEOFFTODAY = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-155.75,-27.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEEOFFTODAY, new cjs.Rectangle(-155.7,-27.8,307,57.5), null);


(lib.ShortSwing = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(-287.75,-296.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ShortSwing, new cjs.Rectangle(-287.7,-296.6,575.5,33.5), null);


(lib.One = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(-287.75,-296.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.One, new cjs.Rectangle(-287.7,-296.6,575.5,175.00000000000003), null);


(lib.Frame310Rounds = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-287.75,-296.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame310Rounds, new cjs.Rectangle(-287.7,-296.6,575.5,65.50000000000003), null);


(lib.Championship = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_24();
	this.instance.setTransform(-287.75,-296.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Championship, new cjs.Rectangle(-287.7,-296.6,575.5,121.00000000000003), null);


(lib.Frame1GradientBelowTypecopy_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame1GradientBelowTypecopy();
	this.instance.setTransform(-160,-221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1GradientBelowTypecopy_1, new cjs.Rectangle(-160,-221,320,442), null);


(lib.Layer3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Layer3();
	this.instance.setTransform(-102,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Layer3_1, new cjs.Rectangle(-102,-102.5,204,205), null);


(lib.THANTEETIMES = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-138.55,-20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.THANTEETIMES, new cjs.Rectangle(-138.5,-20,253,41.5), null);


(lib.BarunderTagline_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BarunderTagline();
	this.instance.setTransform(-141,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BarunderTagline_1, new cjs.Rectangle(-141,-22.5,282,45), null);


// stage content:
(lib.GolfShortSwing320x480 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [359];
	// timeline functions:
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
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Frame_3___BOOK_NOW
	this.instance = new lib.Frame3BOOKNOW();
	this.instance.setTransform(93.8,281.05,8.7336,8.733,0,0,0,0,-3.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(289).to({_off:false},0).to({scaleX:1,scaleY:1,y:311.2,alpha:1},18,cjs.Ease.quintOut).wait(53));

	// Frame_3___Book_LINK_area
	this.instance_1 = new lib.Frame3BookLINKarea_1();
	this.instance_1.setTransform(96.5,312.5,8.4034,8.4031);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(289).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},18,cjs.Ease.quintOut).wait(53));

	// TS_Logo_White
	this.instance_2 = new lib.TSLogoWhite();
	this.instance_2.setTransform(175,367);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(360));

	// Bottom_Tan_Slanted_Box
	this.instance_3 = new lib.BottomTanSlantedBox();
	this.instance_3.setTransform(0,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(360));

	// TEE_OFF_TODAY_
	this.instance_4 = new lib.TEEOFFTODAY();
	this.instance_4.setTransform(159.95,25,1,1,0,0,0,-2.4,-3);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(269).to({_off:false},0).to({y:62,alpha:1},24,cjs.Ease.cubicOut).wait(67));

	// Photo_4
	this.instance_5 = new lib.Photo4_1();
	this.instance_5.setTransform(140.9,200.8,0.658,0.6582,0,0,0,2,2.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(257).to({_off:false},0).to({regX:2.1,regY:2.9,scaleX:0.6698,scaleY:0.6699,x:147.9,y:205.55,alpha:1},12).to({regX:1,regY:1.1,scaleX:0.7202,scaleY:0.7203,x:181.6,y:235.45},90).wait(1));

	// Short_Swing
	this.instance_6 = new lib.ShortSwing();
	this.instance_6.setTransform(474.75,352.05,1,1,0,0,0,0,-180.6);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(199).to({_off:false},0).to({x:157.2},25,cjs.Ease.cubicOut).to({_off:true},46).wait(90));

	// One
	this.instance_7 = new lib.One();
	this.instance_7.setTransform(-38.1,185.95,1,1,0,0,0,0,-180.6);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(199).to({_off:false},0).to({x:157.2},25,cjs.Ease.cubicOut).to({_off:true},46).wait(90));

	// Championship
	this.instance_8 = new lib.Championship();
	this.instance_8.setTransform(474.75,154.85,1,1,0,0,0,0,-180.6);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(179).to({_off:false},0).to({x:157.2},25,cjs.Ease.cubicOut).to({_off:true},66).wait(90));

	// Frame_3___10_Rounds
	this.instance_9 = new lib.Frame310Rounds();
	this.instance_9.setTransform(-38.25,171.9,1,1,0,0,0,0,-163.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(179).to({_off:false},0).to({x:157.05},25,cjs.Ease.cubicOut).to({_off:true},66).wait(90));

	// Frame_1___Gradient_Below_Type_copy
	this.instance_10 = new lib.Frame1GradientBelowTypecopy_1();
	this.instance_10.setTransform(160,259);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(167).to({_off:false},0).to({alpha:1},12).to({_off:true},91).wait(90));

	// Photo_3
	this.instance_11 = new lib.Photo3_1();
	this.instance_11.setTransform(170.85,209.55,0.9072,0.9073,0,0,0,0.5,0.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(167).to({_off:false},0).to({scaleX:0.9031,scaleY:0.9032,x:165.9,y:203.65,alpha:1},12).to({regX:0.4,regY:0.2,scaleX:0.8726,scaleY:0.8729,x:128.75,y:159.4},90).to({_off:true},1).wait(90));

	// Shine_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_125 = new cjs.Graphics().p("AlSTpQkVkVAAmGQAAmHEVkTQEVkVGGAAQGIAAEUEVQEVETAAGHQAAGGkVEVQkUEUmIAAQmGAAkVkUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(125).to({graphics:mask_graphics_125,x:127.4345,y:153.3122}).wait(235));

	// Shine
	this.instance_12 = new lib.buttonshine_mc();
	this.instance_12.setTransform(63.25,290.25,0.3435,0.8071,0,-29.2163,-29.1154,-11.9,15.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(125).to({_off:false},0).to({regX:-6.3,regY:15,skewX:-29.2174,skewY:-29.1204,x:127.85,y:253.95,alpha:0.1992},8).to({regX:10,regY:14.7,skewX:-29.2163,skewY:-29.1154,x:178.6,y:225.65,alpha:0.6016},8).to({regX:15.5,regY:15.1,x:233.75,y:195.05,alpha:0.1992},8).to({regX:17.6,regY:15.5,x:291.45,y:163.05,alpha:0},8).to({_off:true},23).wait(180));

	// Layer_3
	this.instance_13 = new lib.Layer3_1();
	this.instance_13.setTransform(165,218.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(101).to({_off:false},0).to({alpha:1},24).to({_off:true},55).wait(180));

	// Photo_2
	this.instance_14 = new lib.Photo2_1();
	this.instance_14.setTransform(219.25,284.3,1.087,1.087,0,0,0,1.2,1.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(89).to({_off:false},0).to({scaleX:1.0754,scaleY:1.0754,x:220.4,y:284.25,alpha:1},12).to({regX:0,regY:0,scaleX:1,scaleY:1,x:228,y:284.1},78).to({_off:true},1).wait(180));

	// THAN_TEE_TIMES
	this.instance_15 = new lib.THANTEETIMES();
	this.instance_15.setTransform(153.55,275.9,1,1,0,0,0,-7.5,-2.1);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({_off:false},0).to({y:240.55,alpha:1},26,cjs.Ease.cubicOut).to({_off:true},47).wait(258));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("ADtMJQgKgEgKgKQgJgKgEgNQgEgKAAgNQABgQAGgKQADgJAKgKQAfgiAkgLIAMgEIAOgEIATgJQAMgDAIADQAFACADAFQAEAGABAGQAAAKgLAMQgLANgbAUQgaAUgKAMQAIAAAJgDIAQgIIAYgNIACgBQANgLAFgGIAFgHIAGgGQAIgEADgEQAFgDADgIQAGgLAEgNIAIgSQAGgKAJgCQAFgCAHACQAGACAEAFQAEAGAAAJQAAAGgDALQgHAZgLAQQgFAJgNANIgWAXIgIAHQgJAHgOAIIgYAQQgLAHgGACIgJACIgPAIQgIAEgIACQgLAEgJAAQgIAAgIgDg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ADqMJQgLgEgJgKQgKgKgEgNQgEgKAAgNQABgQAGgKQAEgJAJgKQAggiAjgLIANgEIANgEIATgJQAMgDAIADQAGACADAFQADAGABAGQAAAKgLAMQgLANgaAUQgaAUgLAMQAIAAAJgDIAQgIIAYgNIACgBQANgLAFgGIAFgHIAGgGQAIgEAEgEQAEgDAEgIQAFgLAFgNIAGgOIgBgCIgBgJIgBgJQgBgLgHgEQgDgCgJAAQgqAAgVADQgTACgXAIIgqAPQggALgRAIQgQAIgUANIgiAWQgKAGgHADQgJADgJgCQgIgCgFgHQgFgHAAgHQAAgLAJgJQAHgHAMgIQBKgsA+gXQBNgcBHABQAcAAAOAIQAQAHAKAQQAJAQACASQABAMgDAKQgBAGgEAEIgCAPQgIAZgKAQQgGAJgMANIgXAXIgIAHQgJAHgOAIIgYAQQgLAHgGACIgJACIgOAIQgJAEgIACQgKAEgKAAQgIAAgHgDg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ACANsQgbgJgkgVQgngZgUgLIgagPQgPgKgIgLQgKgOgDgUQgCgOAAgYIAAgZQACgOADgLQAEgJAGgKIAOgSQAYgfALgNQASgUATgKQAJgHAJgCIAGgIQAHgHAMgIQBKgsA+gXQBNgcBHABQAcAAAOAIQAQAHAKAQQAJAQACASQABAMgDAKQgBAGgEAEIgCAPQgIAZgKAQQgGAJgMANIgXAXIgIAHQgJAHgOAIIgYAQQgLAHgGACIgJACIgOAIQgJAEgIACQgUAHgPgGQgLgEgJgKQgKgKgEgNQgEgKAAgNQABgQAGgKQAEgJAJgKQAggiAjgLIANgEIANgEIATgJQAMgDAIADQAGACADAFQADAGABAGQAAAKgLAMQgLANgaAUQgaAUgLAMQAIAAAJgDIAQgIIAYgNIACgBQANgLAFgGIAFgHIAGgGQAIgEAEgEQAEgDAEgIQAFgLAFgNIAGgOIgBgCIgBgJIgBgJQgBgLgHgEQgDgCgJAAQgqAAgVADQgTACgXAIIgqAPQggALgRAIQgQAIgUANIgiAWQgJAGgHACIgEAHQgEAEgGAEIgNAGQgPAJgOAPQgJAJgPAUQgNARgEAMQgFALAAAQQgBAJACATQABAOADAFQACAFAGAEIAMAHQAKAFAzAgQAlAWAaAJIAPAFQAIAEAEAFQAHAHgBALQAAAKgIAGQgHAGgLAAQgJAAgMgEg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ADYP5QgHgBgGgGQgFgFgCgJQgBgIAEgHQADgFAFgFIAKgIQAZgUATgbIAJgKIADgEIABgMIAAgRQAAgKgCgHQgCgLgOgTQgOgTgJgIQgGgGgMgHIgWgMQgOgHgHgGQgOgJgFgKQgLACgOgFQgbgJgkgWQgngYgUgLIgagQQgPgJgIgLQgKgOgDgVQgCgNAAgYIAAgaQACgOADgKQAEgKAGgKIAOgSQAYgfALgMQASgUATgLQAJgGAJgCIAGgJQAHgHAMgHQBKgtA+gWQBNgcBHAAQAcABAOAHQAQAIAKAQQAJAPACATQABAMgDAJQgBAGgEAFIgCAOQgIAagKAQQgGAJgMANIgXAXIgIAHQgJAHgOAHIgYAQQgLAHgGACIgJACIgOAIQgJAFgIACQgUAGgPgFQgLgFgJgJQgKgLgEgNQgEgJAAgNQABgQAGgLQAEgJAJgKQAggiAjgLIANgDIANgFIATgIQAMgEAIAEQAGACADAFQADAFABAGQAAALgLAMQgLAMgaAUQgaAUgLAMQAIABAJgEIAQgHIAYgNIACgCQANgLAFgGIAFgGIAGgGQAIgFAEgDQAEgEAEgIQAFgLAFgMIAGgPIgBgBIgBgJIgBgJQgBgLgHgFQgDgCgJAAQgqAAgVADQgTADgXAHIgqAPQggALgRAJQgQAHgUANIgiAWQgJAGgHADIgEAGQgEAFgGAEIgNAGQgPAIgOAQQgJAJgPAUQgNARgEALQgFAMAAAPQgBAKACATQABANADAGQACAFAGAEIAMAGQAKAFAzAgQAlAXAaAJIAPAFQAIADAEAFIACACIAGAAQAHABAIAGIANAKQALAIAXALQAWAMAQASQAKALAQAZQALAQAFAKQAEAKACANIABAXQABARgCAJQgDAMgHAGQAAAFgCAEQgDAGgFAHQgSAZgPANIgbAZQgJAHgFACQgEACgEAAIgHgBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhZQeIgSgBQgKgCgGgFQgKgHgBgMQAAgGACgGQADgFAEgDQAGgEAIgBIAOgBQBDADAtgEQA9gGAwgSIA5gaQAJgFAFgBIAFgBIAHgIIAKgIQAZgVATgaIAJgLIADgDIABgMIAAgSQAAgJgCgHQgCgLgOgTQgOgTgJgJQgGgFgMgHIgWgNQgOgHgHgFQgOgKgFgJQgLABgOgFQgbgJgkgVQgngZgUgLIgagPQgPgKgIgLQgKgOgDgUQgCgOAAgYIAAgZQACgOADgLQAEgJAGgKIAOgSQAYgfALgNQASgUATgKQAJgHAJgCIAGgIQAHgHAMgIQBKgsA+gXQBNgcBHABQAcAAAOAIQAQAHAKAQQAJAQACASQABAMgDAKQgBAGgEAEIgCAPQgIAZgKAQQgGAJgMANIgXAXIgIAHQgJAHgOAIIgYAQQgLAHgGACIgJACIgOAIQgJAEgIACQgUAHgPgGQgLgEgJgKQgKgKgEgNQgEgKAAgNQABgQAGgKQAEgJAJgKQAggiAjgLIANgEIANgEIATgJQAMgDAIADQAGACADAFQADAGABAGQAAAKgLAMQgLANgaAUQgaAUgLAMQAIAAAJgDIAQgIIAYgNIACgBQANgLAFgGIAFgHIAGgGQAIgEAEgEQAEgDAEgIQAFgLAFgNIAGgOIgBgCIgBgJIgBgJQgBgLgHgEQgDgCgJAAQgqAAgVADQgTACgXAIIgqAPQggALgRAIQgQAIgUANIgiAWQgJAGgHACIgEAHQgEAEgGAEIgNAGQgPAJgOAPQgJAJgPAUQgNARgEAMQgFALAAAQQgBAJACATQABAOADAFQACAFAGAEIAMAHQAKAFAzAgQAlAWAaAJIAPAFQAIAEAEAFIACACIAGAAQAHABAIAFIANALQALAIAXALQAWALAQATQAKALAQAYQALAQAFALQAEAJACANIABAXQABARgCAJQgDAMgHAGQAAAFgCAFQgDAGgFAHQgSAYgPAOIgbAZQgJAHgFACIgFABIAAABQgFAGgJAFIgRAHIgbAMQg1AbhIAJQguAGhLAAIgLAAg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhZQeIgSgBQgKgCgGgFIgDgCQgKADgQgDQgbgEglgVQgagOgLgMQgNgNgJgYQgLgZABgSQABgnAvgqQA2gvBMgfQAVgIAMAEQAJAEAEAKQAFAKgFAJQgEAIgKAGIgSAIQhGAZg1A2QgPAPgCAMQgCAJAFAMQAJAZAaARQAVANAgAFIAMADQAHACAFADIAEACIADAAIAOgBQBDADAtgEQA9gGAwgSIA5gaQAJgFAFgBIAFgBIAHgIIAKgIQAZgVATgaIAJgLIADgDIABgMIAAgSQAAgJgCgHQgCgLgOgTQgOgTgJgJQgGgFgMgHIgWgNQgOgHgHgFQgOgKgFgJQgLABgOgFQgbgJgkgVQgngZgUgLIgagPQgPgKgIgLQgKgOgDgUQgCgOAAgYIAAgZQACgOADgLQAEgJAGgKIAOgSQAYgfALgNQASgUATgKQAJgHAJgCIAGgIQAHgHAMgIQBKgsA+gXQBNgcBHABQAcAAAOAIQAQAHAKAQQAJAQACASQABAMgDAKQgBAGgEAEIgCAPQgIAZgKAQQgGAJgMANIgXAXIgIAHQgJAHgOAIIgYAQQgLAHgGACIgJACIgOAIQgJAEgIACQgUAHgPgGQgLgEgJgKQgKgKgEgNQgEgKAAgNQABgQAGgKQAEgJAJgKQAggiAjgLIANgEIANgEIATgJQAMgDAIADQAGACADAFQADAGABAGQAAAKgLAMQgLANgaAUQgaAUgLAMQAIAAAJgDIAQgIIAYgNIACgBQANgLAFgGIAFgHIAGgGQAIgEAEgEQAEgDAEgIQAFgLAFgNIAGgOIgBgCIgBgJIgBgJQgBgLgHgEQgDgCgJAAQgqAAgVADQgTACgXAIIgqAPQggALgRAIQgQAIgUANIgiAWQgJAGgHACIgEAHQgEAEgGAEIgNAGQgPAJgOAPQgJAJgPAUQgNARgEAMQgFALAAAQQgBAJACATQABAOADAFQACAFAGAEIAMAHQAKAFAzAgQAlAWAaAJIAPAFQAIAEAEAFIACACIAGAAQAHABAIAFIANALQALAIAXALQAWALAQATQAKALAQAYQALAQAFALQAEAJACANIABAXQABARgCAJQgDAMgHAGQAAAFgCAFQgDAGgFAHQgSAYgPAOIgbAZQgJAHgFACIgFABIAAABQgFAGgJAFIgRAHIgbAMQg1AbhIAJQguAGhLAAIgLAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhZQeIgSgBQgKgCgGgFIgDgCQgKADgQgDQgbgEglgVQgagOgLgMQgNgNgJgYQgLgZABgSQABgnAvgqQA2gvBMgfQAVgIAMAEQAJAEAEAKQAFAKgFAJQgEAIgKAGIgSAIQhGAZg1A2QgPAPgCAMQgCAJAFAMQAJAZAaARQAVANAgAFIAMADQAHACAFADIAEACIADAAIAOgBQBDADAtgEQA9gGAwgSIA5gaQAJgFAFgBIAFgBIAHgIIAKgIQAZgVATgaIAJgLIADgDIABgMIAAgSQAAgJgCgHQgCgLgOgTQgOgTgJgJQgGgFgMgHIgWgNQgOgHgHgFQgOgKgFgJQgLABgOgFQgbgJgkgVQgngZgUgLIgagPQgPgKgIgLQgKgOgDgUQgCgOAAgYIAAgZQACgOADgLQAEgJAGgKIAOgSQAYgfALgNQASgUATgKQAJgHAJgCIAGgIQAHgHAMgIQBKgsA+gXQBNgcBHABQAcAAAOAIQAQAHAKAQQAJAQACASQABAMgDAKQgBAGgEAEIgCAPQgIAZgKAQQgGAJgMANIgXAXIgIAHQgJAHgOAIIgYAQQgLAHgGACIgJACIgOAIQgJAEgIACQgUAHgPgGQgLgEgJgKQgKgKgEgNQgEgKAAgNQABgQAGgKQAEgJAJgKQAggiAjgLIANgEIANgEIATgJQAMgDAIADQAGACADAFQADAGABAGQAAAKgLAMQgLANgaAUQgaAUgLAMQAIAAAJgDIAQgIIAYgNIACgBQANgLAFgGIAFgHIAGgGQAIgEAEgEQAEgDAEgIQAFgLAFgNIAGgOIgBgCIgBgJIgBgJQgBgLgHgEQgDgCgJAAQgqAAgVADQgTACgXAIIgqAPQggALgRAIQgQAIgUANIgiAWQgJAGgHACIgEAHQgEAEgGAEIgNAGQgPAJgOAPQgJAJgPAUQgNARgEAMQgFALAAAQQgBAJACATQABAOADAFQACAFAGAEIAMAHQAKAFAzAgQAlAWAaAJIAPAFQAIAEAEAFIACACIAGAAQAHABAIAFIANALQALAIAXALQAWALAQATQAKALAQAYQALAQAFALQAEAJACANIABAXQABARgCAJQgDAMgHAGQAAAFgCAFQgDAGgFAHQgSAYgPAOIgbAZQgJAHgFACIgFABIAAABQgFAGgJAFIgRAHIgbAMQg1AbhIAJQguAGhLAAIgLAAgAFRKTQgHgBgGgGQgFgGgCgHQgDgLADgTQADgRAFgKQAGgPALgGQAIgFAKAAQAJAAAIAEQAGADADAEQADAFACAHIABANQAJABAEAHQAGAGgBAIQgBAJgLAKQgRASgRAFQgGACgIABIgHABIgGgBg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AhZQeIgSgBQgKgCgGgFIgDgCQgKADgQgDQgbgEglgVQgagOgLgMQgNgNgJgYQgLgZABgSQABgnAvgqQA2gvBMgfQAVgIAMAEQAJAEAEAKQAFAKgFAJQgEAIgKAGIgSAIQhGAZg1A2QgPAPgCAMQgCAJAFAMQAJAZAaARQAVANAgAFIAMADQAHACAFADIAEACIADAAIAOgBQBDADAtgEQA9gGAwgSIA5gaQAJgFAFgBIAFgBIAHgIIAKgIQAZgVATgaIAJgLIADgDIABgMIAAgSQAAgJgCgHQgCgLgOgTQgOgTgJgJQgGgFgMgHIgWgNQgOgHgHgFQgOgKgFgJQgLABgOgFQgbgJgkgVQgngZgUgLIgagPQgPgKgIgLQgKgOgDgUQgCgOAAgYIAAgZQACgOADgLQAEgJAGgKIAOgSQAYgfALgNQASgUATgKQAJgHAJgCIAGgIQAHgHAMgIQBKgsA+gXQBNgcBHABQAcAAAOAIQAQAHAKAQQAJAQACASQABAMgDAKQgBAGgEAEIgCAPQgIAZgKAQQgGAJgMANIgXAXIgIAHQgJAHgOAIIgYAQQgLAHgGACIgJACIgOAIQgJAEgIACQgUAHgPgGQgLgEgJgKQgKgKgEgNQgEgKAAgNQABgQAGgKQAEgJAJgKQAggiAjgLIANgEIANgEIATgJQAMgDAIADQAGACADAFQADAGABAGQAAAKgLAMQgLANgaAUQgaAUgLAMQAIAAAJgDIAQgIIAYgNIACgBQANgLAFgGIAFgHIAGgGQAIgEAEgEQAEgDAEgIQAFgLAFgNIAGgOIgBgCIgBgJIgBgJQgBgLgHgEQgDgCgJAAQgqAAgVADQgTACgXAIIgqAPQggALgRAIQgQAIgUANIgiAWQgJAGgHACIgEAHQgEAEgGAEIgNAGQgPAJgOAPQgJAJgPAUQgNARgEAMQgFALAAAQQgBAJACATQABAOADAFQACAFAGAEIAMAHQAKAFAzAgQAlAWAaAJIAPAFQAIAEAEAFIACACIAGAAQAHABAIAFIANALQALAIAXALQAWALAQATQAKALAQAYQALAQAFALQAEAJACANIABAXQABARgCAJQgDAMgHAGQAAAFgCAFQgDAGgFAHQgSAYgPAOIgbAZQgJAHgFACIgFABIAAABQgFAGgJAFIgRAHIgbAMQg1AbhIAJQguAGhLAAIgLAAgAExLeQgFgBgFgEIgJgIQgJgKgDgGQgHgMADgYQABgSAEgRIAFgVIAJgVQAGgLAFgFQAGgFALgDQAMgEAHABIAGgEQAIgFAKAAQAJAAAIAEQAGADADAEQADAFACAHIABANQAJABAEAHQAGAGgBAIQgBAJgLAKQgPAQgPAGQABAJgGAMQgLAXgSAVQgHAHgGAEQgGADgGAAIgEAAgAEzKgQgCAMAEAGQAOgOAHgTIAAAAIgGgFQgFgGgCgHIgBgNQgGARgDAdg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjBQeIgRgBQgKgCgHgFIgDgCQgKADgQgDQgagEglgVQgagOgMgMQgMgNgKgYQgKgZAAgSQACgnAugqQA3gvBLgfQAVgIAMAEQAKAEAEAKQAEAKgEAJQgEAIgKAGIgSAIQhHAZg1A2QgOAPgCAMQgCAJAEAMQAKAZAaARQAVANAfAFIANADQAHACAFADIADACIADAAIAPgBQBCADAvgEQA8gGAwgSIA4gaQAJgFAFgBIAGgBIAGgIIAKgIQAagVATgaIAIgLIAEgDIAAgMIABgSQAAgJgCgHQgDgLgOgTQgNgTgKgJQgGgFgLgHIgWgNQgOgHgIgFQgNgKgGgJQgKABgPgFQgZgJgkgVQgogZgUgLIgbgPQgOgKgJgLQgJgOgEgUQgCgOAAgYIABgZQABgOAEgLQADgJAHgKIANgSQAYgfAMgNQATgUASgKQAKgHAJgCIAGgIQAGgHANgIQBIgsA+gXQBNgcBHABQAcAAAPAIQAPAHALAQQAJAQACASQABAMgDAKQgCAGgDAEIgDAPQgHAZgLAQQgGAJgMANIgXAXIgHAHQgJAHgOAIIgYAQQgLAHgHACIgJACIgOAIQgJAEgHACQgUAHgQgGQgLgEgJgKQgJgKgEgNQgEgKAAgNQAAgQAGgKQAEgJAKgKQAfgiAjgLIANgEIANgEIATgJQAMgDAJADQAFACADAFQAEAGAAAGQAAAKgKAMQgLANgbAUQgaAUgKAMQAIAAAJgDIAPgIIAZgNIACgBQANgLAEgGIAGgHIAFgGQAJgEADgEQAEgDAEgIQAGgLAEgNIAGgOIAAgCIgBgJIgBgJQgBgLgHgEQgEgCgJAAQgpAAgVADQgTACgYAIIgpAPQggALgRAIQgQAIgUANIgjAWQgIAGgGACIgEAHQgEAEgHAEIgMAGQgPAJgPAPQgIAJgQAUQgNARgFAMQgEALgBAQQAAAJABATQACAOADAFQADAFAGAEIALAHQAKAFAzAgQAkAWAaAJIAPAFQAIAEAFAFIACACIAFAAQAHABAIAFIAOALQAKAIAYALQAVALARATQAJALARAYQALAQAFALQADAJACANIACAXQAAARgCAJQgCAMgIAGQAAAFgCAFQgCAGgGAHQgSAYgOAOIgcAZQgIAHgFACIgFABIgBABQgEAGgJAFIgSAHIgaAMQg2AbhHAJQgvAGhKAAIgMAAgAHYL1QgHgDgEgKQgCgGAAgLQgChOAWhhIAGgbIACgKQABgGAEgDQAHgGARADQgDgRADgIQACgHAFgEQAGgFAGABQAFAAAFAEQAEAEACAGQADAHgBAPQgBAjgEAQQgCAOgIAVIgMAiQgFARgFAmQgFAlgGATQgEAOgHAHQgEAFgGACIgGABIgGgCgADJLeQgFgBgFgEIgJgIQgJgKgDgGQgGgMACgYQACgSADgRIAGgVIAJgVQAFgLAGgFQAFgFALgDQANgEAHABIAGgEQAIgFAJAAQAKAAAIAEQAGADADAEQADAFABAHIACANQAIABAFAHQAFAGgBAIQgBAJgKAKQgQAQgOAGQABAJgGAMQgLAXgSAVQgHAHgGAEQgHADgGAAIgEAAgADMKgQgCAMAEAGQANgOAHgTIABAAIgGgFQgFgGgDgHIgBgNQgFARgDAdg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AkKQeIgRgBQgKgCgHgFIgDgCQgKADgQgDQgagEglgVQgagOgMgMQgMgNgKgYQgKgZAAgSQACgnAugqQA3gvBLgfQAVgIAMAEQAKAEAEAKQAEAKgEAJQgEAIgKAGIgSAIQhHAZg1A2QgOAPgCAMQgCAJAEAMQAKAZAaARQAVANAfAFIANADQAHACAFADIADACIADAAIAPgBQBCADAvgEQA8gGAxgSIA3gaQAJgFAFgBIAGgBIAGgIIAKgIQAagVATgaIAIgLIAEgDIAAgMIABgSQAAgJgCgHQgDgLgOgTQgNgTgKgJQgGgFgLgHIgWgNQgOgHgHgFQgNgKgGgJQgKABgPgFQgagJgkgVQgogZgUgLIgbgPQgOgKgJgLQgJgOgEgUQgCgOAAgYIABgZQABgOAEgLQADgJAHgKIANgSQAYgfAMgNQATgUASgKQAKgHAJgCIAGgIQAGgHANgIQBJgsA9gXQBNgcBHABQAcAAAPAIQAPAHALAQQAJAQACASQABAMgDAKQgCAGgDAEIgDAPQgHAZgLAQQgGAJgMANIgXAXIgHAHQgJAHgOAIIgYAQQgLAHgHACIgJACIgOAIQgJAEgHACQgUAHgQgGQgLgEgJgKQgJgKgEgNQgEgKAAgNQAAgQAGgKQAEgJAKgKQAfgiAjgLIANgEIANgEIATgJQAMgDAJADQAFACADAFQAEAGAAAGQAAAKgKAMQgLANgbAUQgaAUgKAMQAIAAAJgDIAPgIIAZgNIACgBQANgLAEgGIAGgHIAFgGQAJgEADgEQAEgDAEgIQAGgLAEgNIAGgOIAAgCIgBgJIgBgJQgBgLgHgEQgEgCgJAAQgpAAgVADQgTACgYAIIgpAPQggALgRAIQgPAIgUANIgjAWQgJAGgGACIgEAHQgEAEgHAEIgMAGQgPAJgPAPQgIAJgQAUQgNARgFAMQgEALgBAQQAAAJABATQACAOADAFQADAFAGAEIALAHQAKAFAzAgQAlAWAaAJIAPAFQAIAEAFAFIACACIAEAAQAHABAIAFIAOALQAKAIAYALQAVALARATQAJALARAYQALAQAFALQADAJACANIACAXQAAARgCAJQgCAMgIAGQAAAFgCAFQgCAGgGAHQgSAYgOAOIgcAZQgIAHgFACIgFABIgBABQgEAGgJAFIgSAHIgZAMQg2AbhIAJQgvAGhKAAIgMAAgAGPL1QgHgDgEgKQgCgGAAgLQgChOAWhhIAGgbIACgKQABgGAEgDQAHgGARADQgDgRADgIQACgHAFgEQAGgFAGABQAFAAAFAEQAEAEACAGQADAHgBAPQgBAbgCAQIAHgKIAngyIgCgHQgBgHAEgFIAHgHQAEgFAFgKQAIgQALgQQAEgHAEgDQAFgFAGgBQAFAAAFACQAFgIAFgDQAFgDAFgBQAGAAAFADQAFACACAHQABAFgBAGQgCAHgJANIg5BLQgjAugUAdQgRAWgIAPQgMAVgEAUIgDANQgDAIgEAEQgEADgFABQgFAggGASQgEAOgHAHQgEAFgGACIgGABIgGgCgACALeQgFgBgFgEIgJgIQgJgKgDgGQgGgMACgYQACgSADgRIAGgVIAJgVQAFgLAGgFQAFgFALgDQANgEAHABIAGgEQAIgFAJAAQAKAAAIAEQAGADADAEQADAFABAHIACANQAIABAFAHQAFAGgBAIQgBAJgKAKQgQAQgOAGQABAJgGAMQgLAXgSAVQgHAHgGAEQgHADgGAAIgEAAgACDKgQgCAMAEAGQANgOAHgTIABAAIgGgFQgFgGgDgHIgBgNQgFARgDAdg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AkKQeIgRgBQgKgCgHgFIgDgCQgKADgQgDQgagEglgVQgagOgMgMQgMgNgKgYQgKgZAAgSQACgnAugqQA3gvBLgfQAVgIAMAEQAKAEAEAKQAEAKgEAJQgEAIgKAGIgSAIQhHAZg1A2QgOAPgCAMQgCAJAEAMQAKAZAaARQAVANAfAFIANADQAHACAFADIADACIADAAIAPgBQBCADAvgEQA8gGAxgSIA3gaQAJgFAFgBIAGgBIAGgIIAKgIQAagVATgaIAIgLIAEgDIAAgMIABgSQAAgJgCgHQgDgLgOgTQgNgTgKgJQgGgFgLgHIgWgNQgOgHgHgFQgNgKgGgJQgKABgPgFQgagJgkgVQgogZgUgLIgbgPQgOgKgJgLQgJgOgEgUQgCgOAAgYIABgZQABgOAEgLQADgJAHgKIANgSQAYgfAMgNQATgUASgKQAKgHAJgCIAGgIQAGgHANgIQBJgsA9gXQBNgcBHABQAcAAAPAIQAPAHALAQQAJAQACASQABAMgDAKQgCAGgDAEIgDAPQgHAZgLAQQgGAJgMANIgXAXIgHAHQgJAHgOAIIgYAQQgLAHgHACIgJACIgOAIQgJAEgHACQgUAHgQgGQgLgEgJgKQgJgKgEgNQgEgKAAgNQAAgQAGgKQAEgJAKgKQAfgiAjgLIANgEIANgEIATgJQAMgDAJADQAFACADAFQAEAGAAAGQAAAKgKAMQgLANgbAUQgaAUgKAMQAIAAAJgDIAPgIIAZgNIACgBQANgLAEgGIAGgHIAFgGQAJgEADgEQAEgDAEgIQAGgLAEgNIAGgOIAAgCIgBgJIgBgJQgBgLgHgEQgEgCgJAAQgpAAgVADQgTACgYAIIgpAPQggALgRAIQgPAIgUANIgjAWQgJAGgGACIgEAHQgEAEgHAEIgMAGQgPAJgPAPQgIAJgQAUQgNARgFAMQgEALgBAQQAAAJABATQACAOADAFQADAFAGAEIALAHQAKAFAzAgQAlAWAaAJIAPAFQAIAEAFAFIACACIAEAAQAHABAIAFIAOALQAKAIAYALQAVALARATQAJALARAYQALAQAFALQADAJACANIACAXQAAARgCAJQgCAMgIAGQAAAFgCAFQgCAGgGAHQgSAYgOAOIgcAZQgIAHgFACIgFABIgBABQgEAGgJAFIgSAHIgZAMQg2AbhIAJQgvAGhKAAIgMAAgAIWMWQgIgCgEgLQgCgGAAgMQgChTABgpQAAgyAFgqIgVAeQgRAWgIAPQgMAVgEAUIgDANQgDAIgEAEQgEADgFABQgFAggGASQgEAOgHAHQgEAFgGACQgHABgFgCQgHgDgEgKQgCgGAAgLQgChOAWhhIAGgbIACgKQABgGAEgDQAHgGARADQgDgRADgIQACgHAFgEQAGgFAGABQAFAAAFAEQAEAEACAGQADAHgBAPQgBAbgCAQIAHgKIAngyIgCgHQgBgHAEgFIAHgHQAEgFAFgKQAIgQALgQQAEgHAEgDQAFgFAGgBQAFAAAFACQAFgIAFgDQAFgDAFgBQAGAAAFADQAFACACAHQABAFgBAGQgCAHgJANIgPATQAFAFAAAGQABAFgBAHIgEANQgBAIgBATQgDBKgPBJIgLAzQgGAfgDAVQgCARgEAHQgDAGgGADQgFACgEAAIgDAAgACALeQgFgBgFgEIgJgIQgJgKgDgGQgGgMACgYQACgSADgRIAGgVIAJgVQAFgLAGgFQAFgFALgDQANgEAHABIAGgEQAIgFAJAAQAKAAAIAEQAGADADAEQADAFABAHIACANQAIABAFAHQAFAGgBAIQgBAJgKAKQgQAQgOAGQABAJgGAMQgLAXgSAVQgHAHgGAEQgHADgGAAIgEAAgACDKgQgCAMAEAGQANgOAHgTIABAAIgGgFQgFgGgDgHIgBgNQgFARgDAdg");
	var mask_1_graphics_12 = new cjs.Graphics().p("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");
	var mask_1_graphics_13 = new cjs.Graphics().p("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");
	var mask_1_graphics_14 = new cjs.Graphics().p("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");
	var mask_1_graphics_15 = new cjs.Graphics().p("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");
	var mask_1_graphics_16 = new cjs.Graphics().p("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");
	var mask_1_graphics_17 = new cjs.Graphics().p("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");
	var mask_1_graphics_18 = new cjs.Graphics().p("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MADgDQAEgDAFgCQAGgBAEACQAFACADAEQAEAEAAAFQABAGgCAGIgGALIgLAWIAEAEQAEAGAAAJIAAAEIAHgNIAHgPQAEgIAGgDQAFgCAFAAQAFABAEACQAEADACAFQACAEgBAFQAAAFgEAJIgCALIgGBBQAFAAAFAEQAEAEACAFQACAFAAAHIAAALIAAALQAAAGgCAFQgEAMgMAEIgGACQgDACgBACQgBABAAAGQAAAHgFAGQgFAFgHABIgCAAQgGAAgFgFgAggLeQgFgBgFgEIgJgIQgJgKgDgGQgHgMADgYQABgSAEgRIAFgVIAJgVQAGgLAFgFQAGgFALgDQAMgEAHABIAFgEQAIgFAKAAQAJAAAIAEQAGADADAEQADAFACAHIABANQAJABAEAHQAGAGgBAIQgBAJgLAKQgPAQgPAGQABAJgGAMQgLAXgRAVQgHAHgGAEQgGADgGAAIgEAAgAgeKgQgCAMAEAGQAOgOAHgTIAAAAIgGgFQgFgGgCgHIgBgNQgGARgDAdgAKxJ0QgGgBgEgGQgEgFAAgHQAAgFADgHQAHgPAIgOIAHgKQAHgIAKgGQAPgJATgDQAMgCAIADQAMADAEAKQADAJgFAIQgFAIgKABIgHgBIgHgBQgEAAgJADIgKAFIgHAJQgHAMgDAIIgCAGIgDAHQgDAFgGACIgJACIgEgBg");
	var mask_1_graphics_19 = new cjs.Graphics().p("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MADgDQAEgDAFgCQAGgBAEACQAFACADAEQAEAEAAAFQABAGgCAGIgGALIgLAWIAEAEQAEAGAAAJIAAAEIAHgNIAHgPQAEgIAGgDQAFgCAFAAQAFABAEACQAEADACAFQACAEgBAFQAAAFgEAJIgCALIgGBBQAFAAAFAEIACABIADgRQAEgWAAgLQAAgMABgDQABgGAFgDIABgBIADgJQAHgPAIgOIAHgKQAHgIAKgGQAPgJATgDQAMgCAIADQAMADAEAKQADAJgFAIQgFAIgKABIgHgBIgHgBQgEAAgJADIgKAFIgHAJQgHAMgDAIIgCAGIgDAHQgCAEgFACIAAADQAAAZgFAaIANgOQAHgIADgIIADgIIAFgIQAHgHAJABQAKACAEAJQAFALgJASQgJAQgKALQgJALgQALQgFAFgHADQgGACgMAAQgJgBgGgDIgBgBIAAABQAAAGgCAFQgEAMgMAEIgGACQgDACgBACQgBABAAAGQAAAHgFAGQgFAFgHABIgCAAQgGAAgFgFgAggLeQgFgBgFgEIgJgIQgJgKgDgGQgHgMADgYQABgSAEgRIAFgVIAJgVQAGgLAFgFQAGgFALgDQAMgEAHABIAFgEQAIgFAKAAQAJAAAIAEQAGADADAEQADAFACAHIABANQAJABAEAHQAGAGgBAIQgBAJgLAKQgPAQgPAGQABAJgGAMQgLAXgRAVQgHAHgGAEQgGADgGAAIgEAAgAgeKgQgCAMAEAGQAOgOAHgTIAAAAIgGgFQgFgGgCgHIgBgNQgGARgDAdg");
	var mask_1_graphics_20 = new cjs.Graphics().p("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MADgDQAEgDAFgCQAGgBAEACQAFACADAEQAEAEAAAFQABAGgCAGIgGALIgLAWIAEAEQAEAGAAAJIAAAEIAHgNIAHgPQAEgIAGgDQAFgCAFAAQAFABAEACQAEADACAFQACAEgBAFQAAAFgEAJIgCALIgGBBQAFAAAFAEIACABIADgRQAEgWAAgLQAAgMABgDQABgGAFgDIABgBIADgJQAHgPAIgOIAHgKQAHgIAKgGQAPgJATgDQAMgCAIADQAMADAEAKQADAJgFAIQgFAIgKABIgHgBIgHgBQgEAAgJADIgKAFIgHAJQgHAMgDAIIgCAGIgDAHQgCAEgFACIAAADQAAAZgFAaIANgOQAHgIADgIIADgIIAFgIQAHgHAJABQAKACAEAJQAFALgJASQgJAQgKALQgJALgQALQgFAFgHADQgGACgMAAQgJgBgGgDIgBgBIAAABQAAAGgCAFQgEAMgMAEIgGACQgDACgBACQgBABAAAGQAAAHgFAGQgFAFgHABIgBAAQgHAAgFgFgALJL5QgJgCgDgIQgDgIAEgOQAgh8A5i6QAEgNAGgEQAFgEAIABQAHABAFAFQAEAGgBAJQAAAGgDAKIguCWQgZBWgRBDIgDAKQgCAFgDADQgFAFgHAAIgFgBgAhKLeQgFgBgFgEIgJgIQgJgKgDgGQgHgMADgYQABgSAEgRIAFgVIAJgVQAGgLAFgFQAGgFALgDQAMgEAHABIAGgEQAIgFAKAAQAJAAAIAEQAFADADAEQADAFACAHIABANQAJABAEAHQAGAGgBAIQgBAJgLAKQgPAQgOAGQABAJgGAMQgLAXgSAVQgHAHgGAEQgGADgGAAIgEAAgAhIKgQgCAMAEAGQAOgOAHgTIAAAAIgGgFQgFgGgCgHIgBgNQgGARgDAdg");
	var mask_1_graphics_21 = new cjs.Graphics().p("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");
	var mask_1_graphics_22 = new cjs.Graphics().p("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");
	var mask_1_graphics_23 = new cjs.Graphics().p("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");
	var mask_1_graphics_24 = new cjs.Graphics().p("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");
	var mask_1_graphics_25 = new cjs.Graphics().p("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");
	var mask_1_graphics_26 = new cjs.Graphics().p("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");
	var mask_1_graphics_27 = new cjs.Graphics().p("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ACQgBABAAAGQAAAHgFAGQgFAFgHABIgBAAQgHAAgFgFgAF9L5QgJgCgDgIQgDgIAEgOQAgh8A5i6QAEgNAGgEQAFgEAIABQAHABAFAFQAEAGgBAJQAAAGgDAKIgYBQIADgFQAGgHAHgEQAJgEAIABQAEABAFADIAJAGIAKAIQAFAEACAGQADAJgGAHQgDAEgDACIAAABIgEAkQgCATgEAPQAFgHAJAAIAFABIAFAAQAFgBAIgEQAHgCAIAEQAHADACAHQADAHgCAJQgCAGgFAJIgLAVQgHALgIAHQgGAGgQALQgMAIgFACQgLAFgJgDQgJgEgFgLQgEgIAAgNIgBgKIgDgKQgCgKAAgNIADgSIgQAkQgTArgHAYIgEAMQgDAGgEADQgFAEgHgBIAAABQgCAFgDADQgFAFgHAAIgFgBgAHnI3IgFAOIACgCIAEgFIACgHIAAgJIgDAJgAmWLeQgFgBgFgEIgJgIQgJgKgDgGQgHgMADgYQABgSAEgRIAFgVIAJgVQAGgLAFgFQAGgFALgDQAMgEAHABIAGgEQAIgFAKAAQAJAAAIAEQAGADADAEQADAFACAHIABANQAJABAEAHQAGAGgBAIQgBAJgLAKQgPAQgPAGQABAJgGAMQgLAXgSAVQgHAHgGAEQgGADgGAAIgEAAgAmUKgQgCAMAEAGQAOgOAHgTIAAAAIgGgFQgFgGgCgHIgBgNQgGARgDAdg");
	var mask_1_graphics_28 = new cjs.Graphics().p("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DgIIAFgIQAHgHAJABQAKACAEAJQAFALgJASQgJAQgKALQgJALgQALQgFAFgHADQgGACgMAAQgJgBgGgDIgBgBIAAABQAAAGgCAFQgEAMgMAEIgGACQgDACgBACQgBABAAAGQAAAHgFAGQgFAFgHABIgBAAQgHAAgFgFgAF9L5QgJgCgDgIQgDgIAEgOQAgh8A5i6QAEgNAGgEQAFgEAIABQAHABAFAFQAEAGgBAJQAAAGgDAKIgYBQIADgFQAGgHAHgEQAJgEAIABQAEABAFADIAJAGIAKAIQAFAEACAGQADAJgGAHQgDAEgDACIAAABIgEAkQgCATgEAPQAFgHAJAAIAFABIAFAAQAFgBAIgEQAHgCAIAEQAHADACAHQADAHgCAJQgCAGgFAJIgLAVQgHALgIAHQgGAGgQALQgMAIgFACQgLAFgJgDQgJgEgFgLQgEgIAAgNIgBgKIgDgKQgCgKAAgNIADgSIgQAkQgTArgHAYIgEAMQgDAGgEADQgFAEgHgBIAAABQgCAFgDADQgFAFgHAAIgFgBgAHnI3IgFAOIACgCIAEgFIACgHIAAgJIgDAJgAmWLeQgFgBgFgEIgJgIQgJgKgDgGQgHgMADgYQABgSAEgRIAFgVIAJgVQAGgLAFgFQAGgFALgDQAMgEAHABIAGgEQAIgFAKAAQAJAAAIAEQAGADADAEQADAFACAHIABANQAJABAEAHQAGAGgBAIQgBAJgLAKQgPAQgPAGQABAJgGAMQgLAXgSAVQgHAHgGAEQgGADgGAAIgEAAgAmUKgQgCAMAEAGQAOgOAHgTIAAAAIgGgFQgFgGgCgHIgBgNQgGARgDAdg");
	var mask_1_graphics_29 = new cjs.Graphics().p("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");
	var mask_1_graphics_30 = new cjs.Graphics().p("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");
	var mask_1_graphics_31 = new cjs.Graphics().p("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");
	var mask_1_graphics_32 = new cjs.Graphics().p("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");
	var mask_1_graphics_33 = new cjs.Graphics().p("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");
	var mask_1_graphics_34 = new cjs.Graphics().p("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");
	var mask_1_graphics_35 = new cjs.Graphics().p("AuKQeIgSgBQgKgCgGgFIgDgCQgKADgQgDQgbgEglgVQgagOgLgMQgNgNgJgYQgLgZABgSQABgnAvgqQA2gvBMgfQAVgIAMAEQAJAEAEAKQAFAKgFAJQgEAIgKAGIgSAIQhGAZg1A2QgPAPgCAMQgCAJAFAMQAJAZAaARQAVANAgAFIAMADQAHACAFADIAEACIADAAIAOgBQBDADAugEQA9gGAwgSIA5gaQAJgFAFgBIAFgBIAHgIIAKgIQAZgVATgaIAJgLIADgDIABgMIAAgSQAAgJgCgHQgCgLgOgTQgOgTgJgJQgGgFgMgHIgWgNQgOgHgHgFQgOgKgFgJQgLABgOgFQgbgJgkgVQgngZgUgLIgbgPQgPgKgIgLQgKgOgDgUQgCgOAAgYIAAgZQACgOADgLQAEgJAGgKIAOgSQAYgfAMgNQASgUATgKQAJgHAJgCIAGgIQAHgHAMgIQBKgsA+gXQBNgcBHABQAcAAAOAIQAQAHAKAQQAJAQACASQABAMgDAKQgBAGgEAEIgCAPQgIAZgKAQQgGAJgMANIgXAXIgIAHQgJAHgOAIIgYAQQgLAHgGACIgJACIgOAIQgJAEgIACQgUAHgPgGQgLgEgJgKQgKgKgEgNQgEgKAAgNQABgQAGgKQAEgJAJgKQAggiAjgLIANgEIANgEIATgJQAMgDAIADQAGACADAFQADAGABAGQAAAKgLAMQgLANgaAUQgaAUgLAMQAIAAAJgDIAQgIIAYgNIACgBQANgLAFgGIAFgHIAGgGQAIgEAEgEQAEgDAEgIQAFgLAFgNIAGgOIgBgCIgBgJIgBgJQgBgLgHgEQgDgCgJAAQgqAAgVADQgTACgXAIIgqAPQggALgRAIQgQAIgUANIgiAWQgJAGgHACIgEAHQgEAEgGAEIgNAGQgPAJgOAPQgJAJgPAUQgNARgFAMQgFALAAAQQgBAJACATQABAOADAFQADAFAGAEIAMAHQAKAFAzAgQAlAWAaAJIAPAFQAIAEAEAFIACACIAGAAQAHABAIAFIANALQALAIAXALQAWALAQATQAKALAQAYQALAQAFALQAEAJACANIABAXQABARgCAJQgDAMgHAGQAAAFgCAFQgDAGgFAHQgSAYgPAOIgbAZQgJAHgFACIgFABIAAABQgFAGgJAFIgRAHIgbAMQg1AbhIAJQgwAGhKAAIgLAAgANZQTQgLgBgHgQQgSglgFg0QgCgfACg+IACggQACgUAIguQADgRAHgGQAEgDAEgCIAFAAQAAgMADgLQACgMAJgZQAYhBAOgeIANgcIAMgcQAEgNAFgGIADgNIAHgYIAHgYIAZg4QARgjACgXQgDACgHAIQgGAHgEACIgBAAQgBAHgGAJIgeArQgRAYgLATIgVAkQgTAjgJAVQgPAfgJAbQgGARgCAPIgDALQgDAHgDADQgGAGgJgBIgDgBIgDAVQgGAxgBApQAAANgCAHQgDAKgHAGIgHAEIgHACIgHAEIgIACQgIABgFgIQgGgHAAgIQAAgHADgKIAFgPIAFgSIAFgSIAFgOQACgEACgLIAfjFQgkA0gfA4QgXArgNAgIgGANQgEAHgFACIgHABIgJAwQgDAMgDAFQgFAKgJACQgJACgGgGQgGgFgCgNQgDgTgBgYIACgqQABgOACgGQADgFAEgCQAEgDAFAAQAEAAABgBQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAXhmIAJgsQACgJACgFQACgGAFgEQAFgEAIABQAHABAFAFQAHAJgFAVIgNA2IgKArQAthWBEhdIAJgLQAGgFAGgBQAIgBAGAGQAHAGAAAIQgBAHgIALIgFAHQAEACACAEQACAEAAAHIgBAMIgDARQAJgPAOgTIBUh2QAFgHADgDQADgDADgBQABgIAJgLQAWgZAcgRQAJgGAHgBQAKgCAHAFQAIAFACANQADAQgEAQQgCALgJAVIg/CXQADAEAAAHQABAJgGAFIgGAEIgGAEQgCACgBAEIgCAGQgCAJgGALIgJATQgGANgIAXQgSA4gOBJQgDAOgDAGIgCAEIgBACIgEAKQgIAWgGAeIgHA3IgDAfQgBARACANQABAOAFAVIAIAiQADARgDAJQgCAGgGAEQgEAEgFAAIgCgBgAgVQFQgKgEgHgSQgLgZgEgOQgEgTgBgdQAAgtAMg3QAIgkATg+QABgGADgEIAAgIQABgMAIgHIAEgDIADgEQADgEACgIQAFgTABgHIABgQIABgQQACgkAUgeIALgQQAGgJACgHIACgQQABgKADgFQAEgKALgJIABgHQABgLAIgVIAUgyQAMgcANgVIAIgNQAEgIgBgHQgPAMgKARIgFALQgDAGgEACQgDACgDABIAAAAQgCAGgGAIQg1BLgVAlQglBBgOA5QgCAMgCAFQgEAIgGAEIgFACIgFAcIgLAzQgHAfgDAVQgBARgEAHQgEAGgFADQgHADgFgBQgJgCgEgLQgBgGgBgMQgChTABgpQABgyAFgqIgWAeQgQAWgIAPQgMAVgEAUIgEANQgDAIgEAEQgEADgFABQgFAggFASQgEAOgHAHQgFAFgGACQgGABgFgCQgIgDgDgKQgCgGgBgLQgChOAXhhIAFgbIACgKQACgGADgDQAHgGARADQgCgRADgIQACgHAFgEQAFgFAGABQAGAAAEAEQAEAEACAGQADAHAAAPQgBAbgDAQIAHgKIAngyIgCgHQAAgHADgFIAHgHQAEgFAGgKQAIgQALgQQAEgHAEgDQAFgFAGgBQAFAAAEACQAGgIAFgDQAEgDAGgBQAGAAAFADQAFACABAHQACAFgBAGQgCAHgKANIgOATQAEAFABAGQABAFgCAHIgDANQgCAHAAAPQAQglAcgtIA3hRQAGgIAEgEQAEgEAEgCIACgFQAEgMARgUQARgTALgHIALgFIALgGIAHgEIAIgDQAGgCAGACQAGACAEAFQAEAFAAAGQABAHgDAFIgDAEIgCAEQgBACAAAIQABAIgFARIgQA5QgKAfgNAXIgMAUIgIAOQADAEAAAHQAAAJgEAIQgDAIgMARQgLAOgDAKIgEAPIgDAPIgHATIgIATQgMAZgKAkQgGAUgLArQgCAIgDAEQgCAFgEADQgBAPgFAUIgIAjQgJAsgCBEQAAAVABANQABATAFAOIACALQABAGgBAEQgBAIgHAEQgEADgFAAIgGgBgARZMVQgFgBgDgDQgGgEgDgKQgFgOABgPQgNgCgHgNQgFgJgBgPQgFgmAQgvQAHgUAIgKQAEgFAAgDIABgCIgBAAQgCABgCAFQgHALgSAVQgSAUgIAMIgGAKQgFAFgEACIgBABQgDAHgHAHIgIAHIgGAIIgGALQgGAMgNAMQgIAHgHACQgFABgGgCQgGgCgEgFQgHgHgDgOQgDgLABgLQABgGADgNIAEgPIAJgYIADgNIADgNQAGgPAIgHQAGgFAHAAIACAAIAAgBQADgHAGgIIAMgMQAMgMAKgBQAEAAAFADQAEACADAEQADAEAAAFQAAAFgCAFQAHAFADAIQAJgMAFgIIADgFIgBgGQgCgMADgNQACgMAHgLQAOgVAZgLQALgEAIABQAMAAAGAIQAGAIgBALQgBAIgGALQgMAWgSAQIgFAGQAFAAAFADQAGADADAGQAEAFAAAHQAAAHgDAGIgCAFIgCAFIAAAHIAAASIAAAZIAAgBQgBgJAFgKIAHgNQAHgJABgDIADgLQAGghAPgOQAJgJANgEQANgEANACQAQAEAHALQAJANgFARQgEAMgOAPQgMAMgNAIQgMAHgHgBIgEAAIgDACIgEAFIgEAFIgDAHIgDAHIgDAEQAAAFgCAJQgFAXAEAXQAIACAKgHQAFgEAIgKQAVgcAPgbQAIgNAGgDQAFgDAFABQAFABAEADQADADACAEQACAFAAAFQgBAGgHAMIgQAYIgPAYIgJALQgMAPgJAGQgMAIgNACQgQADgMgFQgLgEgFgIIABAIIACALQACAGgBAFQgBAEgCAEQgDAEgFACQgDACgEAAIgCAAgAPKKgIAIgIIABgBIgDgCIgCgCIgEANgASwI+IgCADIgEAIQABAAAAAAQAAAAABgBQAAAAABAAQABgBAAgBIAGgGIAGgGIgCAAQgFAAgDAEgACAMJQgGgFgBgHIAAgIQAAgFgBgDIgDgEIgDgDQgDgFgBgJIAAgHQgEAJgIAEQgIAEgLAAQgMgBgFgGQgEgFAAgLQgBgKACgRIACgbIABgVIAEgQQAOgpALgUIALgUQAFgMADgDQAEgDAFgCQAGgBAEACQAFACADAEQAEAEAAAFQABAGgCAGIgGALIgLAWIAEAEQAEAGAAAJIAAAEIAHgNIAHgPQAEgIAGgDQAFgCAFAAQAFABAEACQAEADACAFQACAEgBAFQAAAFgEAJIgCALIgGBBQAFAAAFAEIACABIADgRQAEgWAAgLQAAgMABgDQABgGAFgDIABgBIADgJQAHgPAIgOIAHgKQAHgIAKgGQAPgJATgDQAMgCAIADQAMADAEAKQADAJgFAIQgFAIgKABIgHgBIgHgBQgEAAgJADIgKAFIgHAJQgHAMgDAIIgCAGIgDAHQgCAEgFACIAAADQAAAZgFAaIANgOQAHgIADgIIADgIIAFgIQAHgHAJABQAKACAEAJQAFALgJASQgJAQgKALQgJALgQALQgFAFgHADQgGACgMAAQgJgBgGgDIgBgBIAAABQAAAGgCAFQgEAMgMAEIgGACQgDACgBACQgBABAAAGQAAAHgFAGQgFAFgHABIgCAAQgGAAgFgFgAEUL5QgJgCgDgIQgDgIAEgOQAgh8A5i6QAEgNAGgEQAFgEAIABQAHABAFAFQAEAGgBAJQAAAGgDAKIgYBQIADgFQAGgHAHgEQAJgEAIABQAEABAFADIAJAGIAKAIQAFAEACAGQADAJgGAHQgDAEgDACIAAABIgEAkQgCATgEAPQAFgHAJAAIAFABIAFAAQAFgBAIgEQAHgCAIAEQAHADACAHQADAHgCAJQgCAGgFAJIgLAVQgHALgIAHQgGAGgQALQgMAIgFACQgLAFgJgDQgJgEgFgLQgEgIAAgNIgBgKIgDgKQgCgKAAgNIADgSIgQAkQgTArgHAYIgEAMQgDAGgEADQgFAEgHgBIAAABQgCAFgDADQgFAFgHAAIgFgBgAF+I3IgFAOIACgCIAEgFIACgHIAAgJIgDAJgAn/LeQgFgBgFgEIgJgIQgJgKgDgGQgHgMADgYQABgSAEgRIAFgVIAJgVQAGgLAFgFQAGgFALgDQAMgEAHABIAGgEQAIgFAKAAQAJAAAIAEQAGADADAEQADAFACAHIABANQAJABAEAHQAGAGgBAIQgBAJgLAKQgPAQgPAGQABAJgGAMQgLAXgSAVQgHAHgGAEQgGADgGAAIgEAAgAn9KgQgCAMAEAGQAOgOAHgTIAAAAIgGgFQgFgGgCgHIgBgNQgGARgDAdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:44.6,y:78.001}).wait(1).to({graphics:mask_1_graphics_2,x:44.9625,y:78.001}).wait(1).to({graphics:mask_1_graphics_3,x:44.9625,y:88.0151}).wait(1).to({graphics:mask_1_graphics_4,x:44.9625,y:101.79}).wait(1).to({graphics:mask_1_graphics_5,x:44.9625,y:105.4018}).wait(1).to({graphics:mask_1_graphics_6,x:44.9625,y:105.4018}).wait(1).to({graphics:mask_1_graphics_7,x:44.9625,y:105.4018}).wait(1).to({graphics:mask_1_graphics_8,x:44.9625,y:105.4018}).wait(1).to({graphics:mask_1_graphics_9,x:55.3286,y:105.4018}).wait(1).to({graphics:mask_1_graphics_10,x:62.645,y:105.4018}).wait(1).to({graphics:mask_1_graphics_11,x:62.645,y:105.4018}).wait(1).to({graphics:mask_1_graphics_12,x:68.39,y:105.4018}).wait(1).to({graphics:mask_1_graphics_13,x:72.9036,y:105.4018}).wait(1).to({graphics:mask_1_graphics_14,x:72.9036,y:105.4018}).wait(1).to({graphics:mask_1_graphics_15,x:72.9036,y:105.4018}).wait(1).to({graphics:mask_1_graphics_16,x:72.9036,y:105.4018}).wait(1).to({graphics:mask_1_graphics_17,x:72.9036,y:105.4018}).wait(1).to({graphics:mask_1_graphics_18,x:78.7971,y:105.4018}).wait(1).to({graphics:mask_1_graphics_19,x:78.7971,y:105.4018}).wait(1).to({graphics:mask_1_graphics_20,x:82.9528,y:105.4018}).wait(1).to({graphics:mask_1_graphics_21,x:85.0395,y:105.4018}).wait(1).to({graphics:mask_1_graphics_22,x:87.1694,y:105.4018}).wait(1).to({graphics:mask_1_graphics_23,x:98.888,y:105.4018}).wait(1).to({graphics:mask_1_graphics_24,x:105.3767,y:105.4018}).wait(1).to({graphics:mask_1_graphics_25,x:105.3767,y:105.4018}).wait(1).to({graphics:mask_1_graphics_26,x:112.2015,y:105.4018}).wait(1).to({graphics:mask_1_graphics_27,x:116.1521,y:105.4018}).wait(1).to({graphics:mask_1_graphics_28,x:116.1521,y:105.4018}).wait(1).to({graphics:mask_1_graphics_29,x:116.1521,y:105.4018}).wait(1).to({graphics:mask_1_graphics_30,x:116.1521,y:105.4018}).wait(1).to({graphics:mask_1_graphics_31,x:116.1521,y:105.4018}).wait(1).to({graphics:mask_1_graphics_32,x:121.1891,y:105.4018}).wait(1).to({graphics:mask_1_graphics_33,x:121.1891,y:105.4018}).wait(1).to({graphics:mask_1_graphics_34,x:125.8793,y:105.4018}).wait(1).to({graphics:mask_1_graphics_35,x:126.68,y:105.4018}).wait(325));

	// So_Much_More
	this.instance_16 = new lib.SoMuchMore();
	this.instance_16.setTransform(18,131);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({_off:true},101).wait(258));

	// Bar_under_Tagline
	this.instance_17 = new lib.BarunderTagline_1();
	this.instance_17.setTransform(-142.6,166.75,0.9999,1.0013,0,0,0,0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:0,regY:0,scaleX:1,scaleY:1,x:141,y:166.5},23).to({_off:true},79).wait(258));

	// Frame_1___Gradient_Below_Type_copy_2
	this.instance_18 = new lib.Frame1GradientBelowTypecopy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},102).wait(258));

	// Photo_1
	this.instance_19 = new lib.Photo1_1();
	this.instance_19.setTransform(160.35,194.45,0.8718,0.872,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:0,regY:0,scaleX:1,scaleY:1,x:183.5,y:187.75},101).to({_off:true},1).wait(258));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-245.7,17.6,1037.7,770.9);
// library properties:
lib.properties = {
	id: 'AD6DDD04E5BE4AC7B65B13568D9578B2',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/GolfShortSwing_320x480_atlas_1.png?1625677124902", id:"GolfShortSwing_320x480_atlas_1"},
		{src:"images/GolfShortSwing_320x480_atlas_2.png?1625677124902", id:"GolfShortSwing_320x480_atlas_2"},
		{src:"images/GolfShortSwing_320x480_atlas_3.png?1625677124903", id:"GolfShortSwing_320x480_atlas_3"}
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
an.compositions['AD6DDD04E5BE4AC7B65B13568D9578B2'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;