(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SleepSavor_320x480_atlas_1", frames: [[0,1200,1171,158],[0,1360,1171,158],[0,1520,1171,158],[0,1680,1171,158],[0,1840,1171,158],[993,0,904,598],[0,0,991,600],[993,600,904,598]]},
		{name:"SleepSavor_320x480_atlas_2", frames: [[0,0,1171,158],[0,160,1171,158],[0,320,1171,158],[0,480,1171,158],[322,640,474,62],[0,640,320,169],[1173,372,253,480],[1173,0,383,370],[1750,415,186,123],[1428,415,320,284],[1750,540,238,65],[1558,0,320,413],[1750,607,229,45]]}
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



(lib.CachedBmp_95 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BottomTanSlantedBox = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowType = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Frame1SoMuchMore = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Frame1TanSlantedBox = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Frame2GradientBelowType = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Frame3BookLINKarea = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Frame3GradientBelowType = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Frame1600H = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Frame2600H = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Frame3600H = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.TSLogoWhite = function() {
	this.initialize(ss["SleepSavor_320x480_atlas_2"]);
	this.gotoAndStop(12);
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


(lib.LinkArea = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-119,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LinkArea, new cjs.Rectangle(-119,-32.5,238,65), null);


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
	this.instance.setTransform(-452,-299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image3, new cjs.Rectangle(-452,-299,904,598), null);


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
	this.instance.setTransform(-399.5,-241.85,0.8063,0.8062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image02, new cjs.Rectangle(-399.5,-241.8,799,483.70000000000005), null);


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
	this.instance.setTransform(452,-299,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image01, new cjs.Rectangle(-452,-299,904,598), null);


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
	this.shape.graphics.f("#000000").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Package = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_95();
	this.instance.setTransform(-292.7,-168.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Package, new cjs.Rectangle(-292.7,-168.6,585.5,79), null);


(lib.Luxury = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_94();
	this.instance.setTransform(-292.7,-110.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Luxury, new cjs.Rectangle(-292.7,-110.2,585.5,79), null);


(lib.Frame3SleepSavorPkg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_93();
	this.instance.setTransform(-292.7,-168.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3SleepSavorPkg, new cjs.Rectangle(-292.7,-168.6,585.5,79), null);


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
	this.instance = new lib.CachedBmp_92();
	this.instance.setTransform(-292.7,-168.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame2PkgIncludesText, new cjs.Rectangle(-292.7,-168.6,585.5,79), null);


(lib.Frame1ThanALuxuryExperience = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_91();
	this.instance.setTransform(-292.7,-110.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1ThanALuxuryExperience, new cjs.Rectangle(-292.7,-110.2,585.5,79), null);


(lib.Experience = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_90();
	this.instance.setTransform(-292.7,-110.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Experience, new cjs.Rectangle(-292.7,-110.2,585.5,79), null);


(lib.DiningCredit = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_89();
	this.instance.setTransform(-292.7,-168.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DiningCredit, new cjs.Rectangle(-292.7,-168.6,585.5,79), null);


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
	this.instance = new lib.CachedBmp_88();
	this.instance.setTransform(-292.7,-168.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Accommodations, new cjs.Rectangle(-292.7,-168.6,585.5,79), null);


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
	this.instance = new lib.CachedBmp_87();
	this.instance.setTransform(-292.7,-39.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(-292.7,-39.5,585.5,79), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame2GradientBelowType_1, new cjs.Rectangle(0,0,320,284), null);


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
	this.instance = new lib.CachedBmp_86();
	this.instance.setTransform(-118.55,-42.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BOOKTODAY, new cjs.Rectangle(-118.5,-42.2,237,31.000000000000004), null);


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
	this.instance.setTransform(-160,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3GradientBelowType_1, new cjs.Rectangle(-160,-206.5,320,413), null);


(lib.Frame1TanSlantedBox_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame1TanSlantedBox();
	this.instance.setTransform(-93,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1TanSlantedBox_1, new cjs.Rectangle(-93,-61.5,186,123), null);


// stage content:
(lib.SleepSavor320x480 = function(mode,startPosition,loop,reversed) {
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
	this.button_link.setTransform(160,240);
	new cjs.ButtonHelper(this.button_link, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_link).wait(360));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// TS_Logo_White
	this.instance = new lib.TSLogoWhite();
	this.instance.setTransform(60,415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Bottom_Tan_Slanted_Box
	this.instance_1 = new lib.BottomTanSlantedBox();
	this.instance_1.setTransform(0,311);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_289 = new cjs.Graphics().p("AxxXSIgDomMAocAACIAAIkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_graphics_289,x:144.7542,y:148.975}).wait(71));

	// Shine
	this.instance_2 = new lib.buttonshine_mc();
	this.instance_2.setTransform(-21.4,266.6,0.3707,0.2756,0,0,0,-15.3,11.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).to({regX:-7.2,x:69.65,alpha:0.1992},8).to({regX:12.8,x:161.15,alpha:0.6016},9).to({regX:15.7,x:253,alpha:0.1992},9).to({regX:20.2,regY:4.2,x:344.6,y:130.85,alpha:0},9).to({_off:true},1).wait(35));

	// Frame_3___BOOK_TODAY
	this.instance_3 = new lib.Frame3BOOKTODAY();
	this.instance_3.setTransform(-126.4,273.7,1,1,0,0,0,0,-24.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(264).to({_off:false},0).to({x:160.1,y:272.6},25,cjs.Ease.cubicOut).wait(71));

	// Frame_3___Book_LINK_area
	this.instance_4 = new lib.LinkArea();
	this.instance_4.setTransform(-124.8,272.4,1.0999,0.9538,0,0,0,-1.1,0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(264).to({_off:false},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1,x:161.55,y:272.5},25,cjs.Ease.cubicOut).wait(71));

	// Frame_3___Sleep___Savor_Pkg
	this.instance_5 = new lib.Frame3SleepSavorPkg();
	this.instance_5.setTransform(161.5,168.7,0.4697,0.4711,0,0,0,2.1,-97.1);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(256).to({_off:false},0).to({regY:-96.6,y:191.5,alpha:1},25,cjs.Ease.cubicOut).wait(79));

	// Package
	this.instance_6 = new lib.Package();
	this.instance_6.setTransform(160.95,190.55,0.4697,0.4711,0,0,0,1.1,-127.2);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(252).to({_off:false},0).to({regY:-127,y:213.15,alpha:1},25,cjs.Ease.cubicOut).wait(83));

	// Frame_3___Gradient_Below_Type
	this.instance_7 = new lib.Frame3GradientBelowType_1();
	this.instance_7.setTransform(160,218.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(239).to({_off:false},0).to({alpha:1},13).wait(108));

	// Image_3
	this.instance_8 = new lib.Image3();
	this.instance_8.setTransform(176.7,212.6,0.7068,0.7066,0,0,0,2.7,1.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(239).to({_off:false},0).to({regX:2.8,scaleX:0.7145,scaleY:0.7142,x:178.6,y:209.9,alpha:1},13).to({regX:1.2,regY:0.8,scaleX:0.7777,scaleY:0.7775,x:194,y:187.85},107).wait(1));

	// Dining_Credit
	this.instance_9 = new lib.DiningCredit();
	this.instance_9.setTransform(162.05,168.45,0.4755,0.4758,0,0,0,2.3,-125.9);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(148).to({_off:false},0).to({regY:-126.5,y:133.5,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},80).wait(107));

	// Plus
	this.instance_10 = new lib.Symbol();
	this.instance_10.setTransform(155.2,103,0.0017,0.0127,0,0,0,29.5,-122.4);
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(144).to({_off:false},0).to({regX:29.7,scaleX:0.4753,scaleY:0.4756,x:174.1,y:44.75},25,cjs.Ease.elasticOut).to({_off:true},84).wait(107));

	// Accommodations
	this.instance_11 = new lib.Accommodations();
	this.instance_11.setTransform(157.85,107,0.4755,0.4758,0,0,0,3,-126.5);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(136).to({_off:false},0).to({regY:-126.7,y:72.2,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},92).wait(107));

	// Frame_2___Pkg_Includes_Text
	this.instance_12 = new lib.Frame2PkgIncludesText();
	this.instance_12.setTransform(161.4,120,0.4755,0.4758,0,0,0,2.6,-34.9);
	this.instance_12.alpha = 0;
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(132).to({_off:false},0).to({regY:-35.4,y:85.15,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},96).wait(107));

	// Frame_2___Gradient_Below_Type
	this.instance_13 = new lib.Frame2GradientBelowType_1();
	this.instance_13.setTransform(160,142,1,1,0,0,0,160,142);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(119).to({_off:false},0).to({alpha:1},13).to({_off:true},121).wait(107));

	// Image_2
	this.instance_14 = new lib.Image02();
	this.instance_14.setTransform(231.8,266.9,1.1089,1.1088,0,0,0,0.5,0.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(119).to({_off:false},0).to({scaleX:1.0982,scaleY:1.0981,x:228.1,y:264.45,alpha:1},13).to({regX:0,regY:0,scaleX:1,scaleY:1,x:193.7,y:241.85},120).to({_off:true},1).wait(107));

	// Experience
	this.instance_15 = new lib.Experience();
	this.instance_15.setTransform(154.4,297.2,0.4476,0.4465,0,0,0,4.2,-66.8);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(32).to({_off:false},0).to({y:268.2,alpha:1},24,cjs.Ease.cubicOut).to({_off:true},77).wait(227));

	// Luxury
	this.instance_16 = new lib.Luxury();
	this.instance_16.setTransform(158.6,266.6,0.467,0.4668,0,0,0,1.9,-67);
	this.instance_16.alpha = 0;
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(28).to({_off:false},0).to({y:237.4,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},80).wait(227));

	// Frame_1___Than_A_Luxury_Experience
	this.instance_17 = new lib.Frame1ThanALuxuryExperience();
	this.instance_17.setTransform(158.9,266.65,0.467,0.4668,0,0,0,1.3,-5.5);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(24).to({_off:false},0).to({regY:-6.5,y:237.25,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},84).wait(227));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AhNJoQgOgBgKgJQgQgOgEggQgEgjAKgZQAJgYAYgYQAegcAtgVQAhgPAzgPQARgFAJgBQAPgCALAEQAMADAJAKQAIAJAEAMQAHAYgMAZQgKAUgWARQgNAIgSAJIghAOQgcAMgSAMQgWAPgPATIgNASQgIAKgIAEQgJAGgMAAIgFAAg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AASKqQgvgCgegDQgWgDghgHQgigHgSgGQg6gVgwg6QgOgQgEgMQgEgJgBgJQgHgNgDgVQgEgkAJgZQAJgYAZgXQAegdAsgUQAigQA0gPQAQgFAKgBQAPgCALAEQAMADAIAKQAJAJADANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA5gEQBDgFA2gZQAUgJALgKIAMgMIALgLQAIgGAPgKQAMgHAHgDQANgFATABQAYABAMALQAOAKAFAXQAHAdgJAgQgJAdgVAYQgPAQgZATQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgfAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AAAKqQgwgCgegDQgWgDghgHQgigHgSgGQg7gVgvg6QgOgQgFgMQgDgJgBgJQgIgNgCgVQgEgkAJgZQAJgYAZgXQAdgdAtgUQAigQA0gPQAQgFAKgBQAOgCAMAEQAMADAIAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA4gEQBEgFA2gZQAUgJALgKIAMgMIALgLQAHgFAOgJQgJgPgSgNQgNgLgTgKIgigRQgwgXgbgQQgogXgbgYQghgegVgjQgXgmgEgoQgDgeAJgXQAHgUASgQQAVgSAUACQAMABAJAHQAJAIADAKQADAHAAANIACAWQABAIAGAKIAJASIAOAVQAIAMAJAHQAJAHAMAGIAXALQBXAkBOA1QATAMAMALQARANAKAPQAOAUANAiQAOApAAAcQABAogYAiQgYAjgkAOIgBAAQgMALgRANQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgeAAg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AgJKqQgxgCgdgDQgWgDghgHQgjgHgRgGQg7gVgvg6QgOgQgFgMQgEgJAAgJQgIgNgDgVQgDgkAJgZQAJgYAYgXQAegdAtgUQAigQAzgPQARgFAJgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQADAFACAHQAaAJAlAGQBFAMA4gEQBEgFA2gZQATgJALgKIANgMIALgLQAHgFANgJQgIgPgTgNQgNgLgSgKIgigRQgwgXgbgQQgogXgbgYQgigegUgjQgXgmgEgoIgBgMQgOgTAFgmQAKhgAyg3QASgUAigYQB/hZCIgcQAcgFAPAEQALADAIAHQAJAJAAAKQANABAKAHQAHAFAEAGQAGAFAEAIQAEAJgBAKQAAAKgFAJQgGAIgIAFQgJAGgOABIgZAAIgDAAQhQASg8AgIgOALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBPAjBHAwQAUAMAMALQARANAKAPQAOAUANAiQAOApAAAcQABAogYAiQgYAjglAOIgBAAQgMALgRANQgmAcgrAXQgmAUgcAHQgYAGgeACIgXAAIgeAAg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Ag3KqQgxgCgegDQgVgDgigHQgigHgSgGQg6gVgwg6QgNgQgFgMQgEgJAAgJQgIgNgDgVQgEgkAJgZQAKgYAYgXQAegdAtgUQAhgQA0gPQAQgFAKgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgMAZQgLAUgWARQgMAIgTAJIggAPIgeAOQAEAFACAHQAaAJAlAGQBFAMA5gEQBDgFA2gZQATgJALgKIAMgMIAMgLQAHgFANgJQgJgPgSgNQgNgLgSgKIgigRQgwgXgagQQgogXgdgYQghgegVgjQgXgmgEgoIAAgMQgOgTAEgmQALhgAyg3QARgUAjgYQB+hZCJgcQAUgEAOABQALgKAOAAQAKAAALAEQAGADAMAGIAiATQASALANAKQAiAcAJAhQAGARgBAhQgCAngIAWQgKAagZAaQgcAdgiATQgkAUgmAEQgeAEgagHQgegJgRgVQgJgNgFgRQgEgQABgRQACgeASgjQAHgMAHgMQgTAIgRAJIgOALIguAjQgZAUgQATQgHAIgGAKQAAAJgCAIIgFALIgDALQgBAFACAHIACAMIADAQIACARQAEATANASQAKAPARARIAOAOQBOAjBIAwQATAMAMALQARANAKAPQAOAUANAiQAPApAAAcQAAAogXAiQgYAjglAOIgBAAQgMALgRANQgmAcgsAXQglAUgcAHQgYAGgdACIgYAAIgeAAg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ag3KqQgxgCgegDQgVgDgigHQgigHgSgGQg6gVgwg6QgNgQgFgMQgEgJAAgJQgIgNgDgVQgEgkAJgZQAKgYAYgXQAegdAtgUQAhgQA0gPQAQgFAKgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgMAZQgLAUgWARQgMAIgTAJIggAPIgeAOQAEAFACAHQAaAJAlAGQBFAMA5gEQBDgFA2gZQATgJALgKIAMgMIAMgLQAHgFANgJQgJgPgSgNQgNgLgSgKIgigRQgwgXgagQQgogXgdgYQghgegVgjQgXgmgEgoIAAgMQgOgTAEgmQALhgAyg3QARgUAjgYQB+hZCJgcQAUgEAOABQALgKAOAAQAKAAALAEQAGADAMAGIAiATQASALANAKQAiAcAJAhQAGARgBAhQgCAngIAWQgKAagZAaQgcAdgiATQgkAUgmAEQgeAEgagHQgegJgRgVQgJgNgFgRQgEgQABgRQACgeASgjQAHgMAHgMQgTAIgRAJIgOALIguAjQgZAUgQATQgHAIgGAKQAAAJgCAIIgFALIgDALQgBAFACAHIACAMIADAQIACARQAEATANASQAKAPARARIAOAOQBOAjBIAwQATAMAMALQARANAKAPQAOAUANAiQAPApAAAcQAAAogXAiQgYAjglAOIgBAAQgMALgRANQgmAcgsAXQglAUgcAHQgYAGgdACIgYAAIgeAAgAEyDrQgNgBgLgHQgLgIgFgMQgGgLgBgSIABggIAAgJQADgPATgJQAUgKAYAEQAdAEAOASQAOARgCAaQgCAbgQAQQgKAJgQAFQgPAGgNAAIgDAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Ag3KqQgxgCgegDQgVgDgigHQgigHgSgGQg6gVgwg6QgNgQgFgMQgEgJAAgJQgIgNgDgVQgEgkAJgZQAKgYAYgXQAegdAtgUQAhgQA0gPQAQgFAKgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgMAZQgLAUgWARQgMAIgTAJIggAPIgeAOQAEAFACAHQAaAJAlAGQBFAMA5gEQBDgFA2gZQATgJALgKIAMgMIAMgLQAHgFANgJQgJgPgSgNQgNgLgSgKIgigRQgwgXgagQQgogXgdgYQghgegVgjQgXgmgEgoIAAgMQgOgTAEgmQALhgAyg3QARgUAjgYQB+hZCJgcQAUgEAOABQALgKAOAAQAKAAALAEQAGADAMAGIAiATQASALANAKQAiAcAJAhQAGARgBAhQgCAngIAWQgKAagZAaQgcAdgiATQgkAUgmAEQgeAEgagHQgegJgRgVQgJgNgFgRQgEgQABgRQACgeASgjQAHgMAHgMQgTAIgRAJIgOALIguAjQgZAUgQATQgHAIgGAKQAAAJgCAIIgFALIgDALQgBAFACAHIACAMIADAQIACARQAEATANASQAKAPARARIAOAOQBGAfBBAqQgDgXAFgeIAFgXQAEgNAFgHQADgFAKgGIAPgLIAGgHQAEgFAEgCQACgCAEAAQAFgLAPgHQAUgKAYAEQAdAEAOASQAOARgCAaQgCAbgQAQQgKAJgQAFIgFADIAAAFQAAAOgEAIQgCAGgGAHIgJANIgDAHIgEAHQgJAMgRAFIgNACIAGAIQAOAUANAiQAPApAAAcQAAAogXAiQgYAjglAOIgBAAQgMALgRANQgmAcgsAXQglAUgcAHQgYAGgdACIgYAAIgeAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ah2KqQgxgCgegDQgVgDgigHQgigHgSgGQg6gVgwg6QgNgQgFgMQgEgJAAgJQgIgNgDgVQgEgkAJgZQAJgYAZgXQAegdAtgUQAhgQA0gPQAQgFAKgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgMAZQgLAUgWARQgMAIgTAJIggAPIgeAOQAEAFACAHQAaAJAlAGQBFAMA5gEQBEgFA1gZQATgJALgKIAMgMIAMgLQAGgFAOgJQgJgPgSgNQgNgLgSgKIgjgRQgugXgbgQQgogXgdgYQghgegVgjQgXgmgEgoIgBgMQgNgTAEgmQALhgAyg3QARgUAjgYQB+hZCJgcQAUgEAOABQALgKAOAAQAKAAALAEQAGADAMAGIAiATQASALANAKQAiAcAJAhQAGARgBAhQgCAngIAWQgKAagZAaQgcAdgiATQgkAUgmAEQgeAEgagHQgegJgRgVQgJgNgFgRQgEgQABgRQACgeASgjQAGgMAIgMQgTAIgRAJIgOALIgtAjQgZAUgQATQgHAIgGAKQAAAJgDAIIgEALIgEALQgBAFACAHIADAMIADAQIACARQAEATANASQAKAPARARIANAOQBGAfBBAqQgDgXAFgeIAFgXQAEgNAFgHQADgFAKgGIAPgLIAGgHQAEgFADgCQADgCAEAAQAFgLAPgHQAUgKAYAEQAdAEAOASQAOARgCAaQgCAbgRAQQgJAJgQAFIgFADIAAAFQAAAOgEAIQgCAGgGAHIgJANIgDAHIgEAHQgJAMgRAFIgNACIAGAIQAOAUANAiQAPApAAAcQAAAogXAiQgYAjglAOIgBAAQgMALgRANQgmAcgsAXQglAUgbAHQgYAGgeACIgYAAIgeAAgAGAFPQgFgDgCgEQgEACgFAAQgFABgGgDQgGgDgCgEQgEgHAAgNQAAgRAFgdQAPhgAmh/IAFgOQAEgHAGgDQAFgEAHABQACgHAFgEQAHgFAHABQAIAAAGAGQAEAEABAIIACAAQAJADAEAIQACAFAAAGIgCAMQgWB/gaB0QgEASgEAKQgHAOgLAHQgHAEgHAAIgBAAQgHAAgFgDg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AivKqQgxgCgdgDQgWgDghgHQgjgHgRgGQg7gVgvg6QgOgQgFgMQgEgJAAgJQgIgNgDgVQgDgkAJgZQAJgYAYgXQAegdAtgUQAigQAzgPQARgFAJgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQADAFACAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQATgJALgKIAMgMIALgLQAHgFANgJQgIgPgTgNQgNgLgRgKIgigRQgwgXgbgQQgogXgcgYQghgegVgjQgXgmgEgoIgBgMQgOgTAFgmQAKhgAyg3QASgUAigYQCAhZCHgcQAUgEAOABQALgKAPAAQAJAAALAEQAHADAMAGIAhATQASALANAKQAiAcAKAhQAFARgBAhQgCAngIAWQgJAagaAaQgbAdgiATQglAUgmAEQgeAEgagHQgdgJgRgVQgKgNgFgRQgEgQABgRQACgeATgjQAGgMAIgMQgUAIgRAJIgNALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBFAfBCAqQgDgXAEgeIAFgXQAEgNAFgHQAEgFAJgGIAPgLIAHgHQADgFAEgCQADgCADAAQAFgLAPgHQAVgKAYAEQAcAEAPASQANARgBAaQgCAbgRAQQgKAJgPAFIgGADIAAAFQAAAOgEAIQgCAGgGAHIgIANIgEAHIgEAHQgJAMgRAFIgNACIAHAIQAOAUANAiQAOApAAAcQABAogYAiQgYAjglAOIgBAAQgMALgRANQgmAcgqAXQgmAUgcAHQgYAGgeACIgXAAIgfAAgAFHFPQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgDgEQgEgHAAgNQABgRAEgdQAPhgAmh/IAGgOQAEgHAFgDQAGgEAGABQADgHAFgEQAGgFAIABQAIAAAFAGQAEAEABAIIACAAQAJADAEAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAGgNAIgDQAFgDAGABIADAAQAJAAAGAIQAFAIgCAIQgCAHgIAJIgEAHQgNAYgTAyQgTA0gMAXIgQAbIgIAPQABAFgCAGQgCAJgHANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgEAHQgGAOgMAHQgGAEgHAAIgCAAQgHAAgFgDg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ai6KqQgxgCgegDQgVgDgigHQgigHgSgGQg6gVgwg6QgNgQgFgMQgEgJAAgJQgIgNgDgVQgEgkAJgZQAJgYAZgXQAegdAtgUQAhgQA0gPQAQgFAKgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgNAZQgKAUgWARQgMAIgTAJIggAPIgeAOQAEAFACAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQATgJALgKIALgMIAMgLQAGgFAOgJQgJgPgSgNQgMgLgSgKIgjgRQgvgXgbgQQgogXgdgYQghgegVgjQgXgmgEgoIgBgMQgNgTAEgmQALhgAyg3QARgUAjgYQB/hZCIgcQAUgEAOABQALgKAOAAQAJAAAMAEQAGADAMAGIAiATQASALANAKQAiAcAJAhQAGARgBAhQgCAngIAWQgKAagZAaQgcAdgiATQgkAUgmAEQgeAEgagHQgegJgRgVQgJgNgEgRQgEgQABgRQACgeARgjQAGgMAIgMQgTAIgQAJIgOALIguAjQgZAUgQATQgHAIgGAKQAAAJgDAIIgEALIgEALQgBAFACAHIADAMIADAQIACARQAEATANASQAKAPARARIAOAOQBFAfBBAqQgDgXAFgeIAFgXQAEgNAFgHQADgFAKgGIAPgLIAGgHQAEgFADgCQADgCAEAAQAFgLAOgHQAVgKAYAEQAdAEAOASQAOARgCAaQgCAbgRAQQgJAJgQAFIgFADIAAAFQAAAOgEAIQgCAGgGAHIgJANIgDAHIgEAHQgJAMgRAFIgNACIAGAIQAOAUANAiQAPApAAAcQAAAogXAiQgYAjglAOIgBAAQgMALgRANQgmAcgrAXQglAUgcAHQgYAGgeACIgYAAIgeAAgAHWFjQgGABgHgBQgNgCgGgHQgFgIABgRIAIimIgDAEIgIAPQAAAFgBAGQgCAJgHANQgIAPgJAMIgQAYQgLAOgEALIgFAJIgBACQgDAMgDAHQgHAOgLAHQgHAEgHAAQgHAAgGgDQgFgDgCgEQgEACgFAAQgFABgGgDQgGgDgCgEQgEgHAAgNQAAgRAFgdQAOhgAnh/IAFgOQAEgHAFgDQAGgEAHABQACgHAFgEQAHgFAHABQAIAAAGAGQAEAEABAIIACAAQAJADAEAIQACAFAAAGIgBAKIADgDIAKgNIANgUIARgVIAYgdQAHgNAHgDQAGgDAFABIADAAQAGAAAFADQAFgDAHAAQAKABAFAHQADAFABAHIgBAOIgaE5QgCATgDAKQgDAPgIALQgLANgRADIgIABIgGAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AksKqQgwgCgegDQgWgDghgHQgigHgSgGQg7gVgvg6QgOgQgFgMQgDgJgBgJQgIgNgCgVQgEgkAJgZQAJgYAZgXQAdgdAtgUQAigQA0gPQAQgFAKgBQAOgCAMAEQAMADAIAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQAUgJALgKIAMgMIALgLQAHgFANgJQgIgPgSgNQgNgLgTgKIgigRQgwgXgbgQQgogXgcgYQghgegVgjQgXgmgEgoIgBgMQgOgTAFgmQAKhgAyg3QASgUAigYQCAhZCIgcQAUgEANABQALgKAPAAQAJAAALAEQAHADAMAGIAhATQASALANAKQAiAcAKAhQAFARgBAhQgCAngHAWQgKAagaAaQgbAdgiATQgkAUgmAEQgeAEgagHQgdgJgRgVQgKgNgFgRQgEgQACgRQABgeATgjQAGgMAIgMQgUAIgQAJIgPALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBHAfBBAqQgDgXAFgeIAEgXQAEgNAFgHQAEgFAKgGIAOgLIAGgHQAEgFADgCQADgCADAAQAFgLAPgHQAVgKAYAEQAcAEAPASQANARgBAaQgCAbgRAQQgKAJgPAFIgGADIAAAFQAAAOgEAIQgCAGgFAHIgJANIgDAHIgFAHQgIAMgSAFIgNACIAHAIQAOAUANAiQAOApAAAcQABAogYAiQgYAjgjAOIgBAAQgMALgRANQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgfAAgAFkFjQgFABgHgBQgNgCgGgHQgGgIABgRIAJimIgDAEIgJAPQABAFgCAGQgBAJgIANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgDAHQgHAOgMAHQgGAEgHAAQgIAAgGgDQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgCgEQgFgHAAgNQABgRAEgdQAPhgAnh/IAFgOQAEgHAFgDQAGgEAHABQACgHAFgEQAGgFAIABQAIAAAFAGQAEAEACAIIABAAQAKADADAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAHgNAHgDQAFgDAGABIADAAQAGAAAEADQAFgDAHAAQAJABAEAFIAOgUQAPgTAQgTQAUgWAkgkIAbgaQAQgOAPgHQAOgHAZgGQAWgEAJAKQAHAHgEASQgDAPgIAVIgNAjQgJAagDAdIgCANQgBAHgDAFQgDAGgFAEQgGADgGgBIgIgCIgHgDIgHABIgGAAQgHAAgFgFQgFgEgDgGIgFgLIgBgDQgdAzgbBFQgOAjgkBrQgDAJgDAFIgFAGIgHAXIgDALIgDAKIgFAIIgCAWQgCATgCAKQgDAPgJALQgLANgQADIgJABIgGAAg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AksKqQgwgCgegDQgWgDghgHQgigHgSgGQg7gVgvg6QgOgQgFgMQgDgJgBgJQgIgNgCgVQgEgkAJgZQAJgYAZgXQAdgdAtgUQAigQA0gPQAQgFAKgBQAOgCAMAEQAMADAIAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQAUgJALgKIAMgMIALgLQAHgFANgJQgIgPgSgNQgNgLgTgKIgigRQgwgXgbgQQgogXgcgYQghgegVgjQgXgmgEgoIgBgMQgOgTAFgmQAKhgAyg3QASgUAigYQCAhZCIgcQAUgEANABQALgKAPAAQAJAAALAEQAHADAMAGIAhATQASALANAKQAiAcAKAhQAFARgBAhQgCAngHAWQgKAagaAaQgbAdgiATQgkAUgmAEQgeAEgagHQgdgJgRgVQgKgNgFgRQgEgQACgRQABgeATgjQAGgMAIgMQgUAIgQAJIgPALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBHAfBBAqQgDgXAFgeIAEgXQAEgNAFgHQAEgFAKgGIAOgLIAGgHQAEgFADgCQADgCADAAQAFgLAPgHQAVgKAYAEQAcAEAPASQANARgBAaQgCAbgRAQQgKAJgPAFIgGADIAAAFQAAAOgEAIQgCAGgFAHIgJANIgDAHIgFAHQgIAMgSAFIgNACIAHAIQAOAUANAiQAOApAAAcQABAogYAiQgYAjgjAOIgBAAQgMALgRANQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgfAAgAFkFjQgFABgHgBQgNgCgGgHQgGgIABgRIAJimIgDAEIgJAPQABAFgCAGQgBAJgIANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgDAHQgHAOgMAHQgGAEgHAAQgIAAgGgDQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgCgEQgFgHAAgNQABgRAEgdQAPhgAnh/IAFgOQAEgHAFgDQAGgEAHABQACgHAFgEQAGgFAIABQAIAAAFAGQAEAEACAIIABAAQAKADADAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAHgNAHgDQAFgDAGABIADAAQAGAAAEADQAFgDAHAAQAJABAEAFIAOgUQAPgTAQgTQAUgWAkgkIAbgaQAQgOAPgHQAOgHAZgGQAWgEAJAKQAHAHgEASQgDAPgIAVIgNAjQgJAagDAdIgCANIgCAHQAAADgBAEQgBADgCADQADADACADQADAGgBAFQAAAFgEAIIgKASIgOAWIgSAfIgVAgIgHAMIgHAHIgfBTIgCAFIgBAKIgEAOIgFAMIgDAEIgEAKIgFAIIgFAEIgEABIgBAAIgCABQgMAKgYgIIgLgEIgBAAQgIgCgEgIIgBAFIgFAIIgCAWQgCATgCAKQgDAPgJALQgLANgQADIgJABIgGAAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AksKqQgwgCgegDQgWgDghgHQgigHgSgGQg7gVgvg6QgOgQgFgMQgDgJgBgJQgIgNgCgVQgEgkAJgZQAJgYAZgXQAdgdAtgUQAigQA0gPQAQgFAKgBQAOgCAMAEQAMADAIAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQAUgJALgKIAMgMIALgLQAHgFANgJQgIgPgSgNQgNgLgTgKIgigRQgwgXgbgQQgogXgcgYQghgegVgjQgXgmgEgoIgBgMQgOgTAFgmQAKhgAyg3QASgUAigYQCAhZCIgcQAUgEANABQALgKAPAAQAJAAALAEQAHADAMAGIAhATQASALANAKQAiAcAKAhQAFARgBAhQgCAngHAWQgKAagaAaQgbAdgiATQgkAUgmAEQgeAEgagHQgdgJgRgVQgKgNgFgRQgEgQACgRQABgeATgjQAGgMAIgMQgUAIgQAJIgPALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBHAfBBAqQgDgXAFgeIAEgXQAEgNAFgHQAEgFAKgGIAOgLIAGgHQAEgFADgCQADgCADAAQAFgLAPgHQAVgKAYAEQAcAEAPASQANARgBAaQgCAbgRAQQgKAJgPAFIgGADIAAAFQAAAOgEAIQgCAGgFAHIgJANIgDAHIgFAHQgIAMgSAFIgNACIAHAIQAOAUANAiQAOApAAAcQABAogYAiQgYAjgjAOIgBAAQgMALgRANQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgfAAgAGmJeQgQgBgSgLQgLgIgFgHQgIgMgBgSIABghIgBgVIgCgTIgCgvIABgkQABgSADgLIADgJQgGABgFgBQgFABgHgBQgNgCgGgHQgGgIABgRIAJimIgDAEIgJAPQABAFgCAGQgBAJgIANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgDAHQgHAOgMAHQgGAEgHAAQgIAAgGgDQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgCgEQgFgHAAgNQABgRAEgdQAPhgAnh/IAFgOQAEgHAFgDQAGgEAHABQACgHAFgEQAGgFAIABQAIAAAFAGQAEAEACAIIABAAQAKADADAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAHgNAHgDQAFgDAGABIADAAQAGAAAEADQAFgDAHAAQAJABAEAFIAOgUQAPgTAQgTQAUgWAkgkIAbgaQAQgOAPgHQAOgHAZgGQAWgEAJAKQAHAHgEASQgDAPgIAVIgNAjQgJAagDAdIgCANIgCAHQAAADgBAEQgBADgCADQADADACADQADAGgBAFQAAAFgEAIIgKASIgOAWIgSAfIgVAgIgHAMIgHAHIgfBTIgCAFIgBAKIgEAOIgFAMIgDAEIgBABIAAAIIgEAOIgQAsQgMAfgEAQIgFAbQgBBUADBYIAAAFIABARQAAALgFAGIgEAEIgCACQgFAHgJADQgGACgHAAIgEAAg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AksKqQgwgCgegDQgWgDghgHQgigHgSgGQg7gVgvg6QgOgQgFgMQgDgJgBgJQgIgNgCgVQgEgkAJgZQAJgYAZgXQAdgdAtgUQAigQA0gPQAQgFAKgBQAOgCAMAEQAMADAIAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQAUgJALgKIAMgMIALgLQAHgFANgJQgIgPgSgNQgNgLgTgKIgigRQgwgXgbgQQgogXgcgYQghgegVgjQgXgmgEgoIgBgMQgOgTAFgmQAKhgAyg3QASgUAigYQCAhZCIgcQAUgEANABQALgKAPAAQAJAAALAEQAHADAMAGIAhATQASALANAKQAiAcAKAhQAFARgBAhQgCAngHAWQgKAagaAaQgbAdgiATQgkAUgmAEQgeAEgagHQgdgJgRgVQgKgNgFgRQgEgQACgRQABgeATgjQAGgMAIgMQgUAIgQAJIgPALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBHAfBBAqQgDgXAFgeIAEgXQAEgNAFgHQAEgFAKgGIAOgLIAGgHQAEgFADgCQADgCADAAQAFgLAPgHQAVgKAYAEQAcAEAPASQANARgBAaQgCAbgRAQQgKAJgPAFIgGADIAAAFQAAAOgEAIQgCAGgFAHIgJANIgDAHIgFAHQgIAMgSAFIgNACIAHAIQAOAUANAiQAOApAAAcQABAogYAiQgYAjgjAOIgBAAQgMALgRANQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgfAAgAGmJeQgQgBgSgLQgLgIgFgHQgIgMgBgSIABghIgBgVIgCgTIgCgvIABgkQABgSADgLIADgJQgGABgFgBQgFABgHgBQgNgCgGgHQgGgIABgRIAJimIgDAEIgJAPQABAFgCAGQgBAJgIANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgDAHQgHAOgMAHQgGAEgHAAQgIAAgGgDQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgCgEQgFgHAAgNQABgRAEgdQAPhgAnh/IAFgOQAEgHAFgDQAGgEAHABQACgHAFgEQAGgFAIABQAIAAAFAGQAEAEACAIIABAAQAKADADAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAHgNAHgDQAFgDAGABIADAAQAGAAAEADQAFgDAHAAQAJABAEAFIAOgUQAPgTAQgTQAUgWAkgkIAbgaQAQgOAPgHQAOgHAZgGQAWgEAJAKQAHAHgEASQgDAPgIAVIgNAjQgJAagDAdIgCANIgCAHQAAADgBAEQgBADgCADQADADACADQADAGgBAFQAAAFgEAIIgKASIgOAWIgSAfIgSAcQAEgEAFgBQAJgDAIAGQAIAGAAAKQAAAEgCAFIAAABQAJAHgBALQAAAJgJAOQgSAggOAgIgIASIgFAKIAHABQAGACADAEQAEAFABAGQACAJgIAPQgIANgFAFQgIAIgJADQgKADgKAAQgOAAgJgHQgGgEgEgHIgCAFQgMAfgEAQIgFAbQgBBUADBYIAAAFIABARQAAALgFAGIgEAEIgCACQgFAHgJADQgGACgHAAIgEAAg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AksKqQgwgCgegDQgWgDghgHQgigHgSgGQg7gVgvg6QgOgQgFgMQgDgJgBgJQgIgNgCgVQgEgkAJgZQAJgYAZgXQAdgdAtgUQAigQA0gPQAQgFAKgBQAOgCAMAEQAMADAIAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQAUgJALgKIAMgMIALgLQAHgFANgJQgIgPgSgNQgNgLgTgKIgigRQgwgXgbgQQgogXgcgYQghgegVgjQgXgmgEgoIgBgMQgOgTAFgmQAKhgAyg3QASgUAigYQCAhZCIgcQAUgEANABQALgKAPAAQAJAAALAEQAHADAMAGIAhATQASALANAKQAiAcAKAhQAFARgBAhQgCAngHAWQgKAagaAaQgbAdgiATQgkAUgmAEQgeAEgagHQgdgJgRgVQgKgNgFgRQgEgQACgRQABgeATgjQAGgMAIgMQgUAIgQAJIgPALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBHAfBBAqQgDgXAFgeIAEgXQAEgNAFgHQAEgFAKgGIAOgLIAGgHQAEgFADgCQADgCADAAQAFgLAPgHQAVgKAYAEQAcAEAPASQANARgBAaQgCAbgRAQQgKAJgPAFIgGADIAAAFQAAAOgEAIQgCAGgFAHIgJANIgDAHIgFAHQgIAMgSAFIgNACIAHAIQAOAUANAiQAOApAAAcQABAogYAiQgYAjgjAOIgBAAQgMALgRANQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgfAAgAGmJeQgQgBgSgLQgLgIgFgHQgIgMgBgSIABghIgBgVIgCgTIgCgvIABgkQABgSADgLIADgJQgGABgFgBQgFABgHgBQgNgCgGgHQgGgIABgRIAJimIgDAEIgJAPQABAFgCAGQgBAJgIANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgDAHQgHAOgMAHQgGAEgHAAQgIAAgGgDQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgCgEQgFgHAAgNQABgRAEgdQAPhgAnh/IAFgOQAEgHAFgDQAGgEAHABQACgHAFgEQAGgFAIABQAIAAAFAGQAEAEACAIIABAAQAKADADAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAHgNAHgDQAFgDAGABIADAAQAGAAAEADQAFgDAHAAQAJABAEAFIAOgUQAPgTAQgTQAUgWAkgkIAbgaQAQgOAPgHQAOgHAZgGQAWgEAJAKQAHAHgEASQgDAPgIAVIgNAjQgJAagDAdIgCANIgCAHQAAADgBAEQgBADgCADQADADACADQADAGgBAFQAAAFgEAIIgKASIgOAWIgSAfIgSAcQAEgEAFgBQAJgDAIAGQAIAGAAAKQAAAEgCAFIAAABQAFAFACAFIACgDQAIgJAJAAQAHgBAHAEIADAAQAJgBAHAGQAGAHAAAJQAAAEgDAIQABAEgBAGQgBAFgEAJQgFAIgEAFIAAABQgFATAAAQIAAAQIgBAGIABAFIAGASQACAIABAMQABAJgBAGIgBABIAFACQAFACADAFQADAFAAAGQAAAHgDAEQgFAIgQAEQgUAFgNgCIgLgDIgLgEQgFgEgGgGIgBAAQgCgBgFACQgaALgZgHQgNgEgKgHQgHgGgGgGQgKAcgEAOIgFAbQgBBUADBYIAAAFIABARQAAALgFAGIgEAEIgCACQgFAHgJADQgGACgHAAIgEAAg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AlmKqQgwgCgegDQgWgDghgHQgigHgSgGQg7gVgvg6QgOgQgFgMQgDgJgBgJQgIgNgCgVQgEgkAJgZQAJgYAZgXQAdgdAtgUQAigQA0gPQAQgFAKgBQAOgCAMAEQAMADAIAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQAUgJALgKIAMgMIALgLQAHgFAOgJQgJgPgSgNQgNgLgTgKIgigRQgwgXgbgQQgogXgcgYQghgegVgjQgXgmgEgoIgBgMQgNgTAEgmQAKhgAyg3QASgUAigYQCAhZCIgcQAUgEAOABQALgKAPAAQAJAAALAEQAHADALAGIAhATQASALANAKQAiAcAKAhQAFARgBAhQgCAngHAWQgKAagaAaQgbAdgiATQgjAUgmAEQgfAEgagHQgdgJgRgVQgKgNgFgRQgEgQACgRQABgeATgjQAGgMAIgMQgUAIgQAJIgPALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBHAfBBAqQgDgXAFgeIAEgXQAEgNAFgHQAEgFAKgGIAOgLIAHgHQAEgFADgCQADgCADAAQAFgLAPgHQAUgKAYAEQAcAEAPASQANARgBAaQgCAbgRAQQgKAJgPAFIgGADIAAAFQAAAOgEAIQgCAGgFAHIgJANIgDAHIgFAHQgHAMgSAFIgNACIAHAIQAOAUANAiQANApAAAcQABAogXAiQgYAjgkAOIgBAAQgMALgRANQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgfAAgAFsJeQgQgBgSgLQgLgIgFgHQgIgMgBgSIABghIgBgVIgCgTIgCgvIABgkQABgSADgLIADgJQgGABgFgBQgFABgHgBQgNgCgGgHQgGgIABgRIAJimIgDAEIgJAPQABAFgBAGQgCAJgIANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgDAHQgHAOgMAHQgGAEgHAAQgIAAgGgDQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgCgEQgFgHAAgNQABgRAEgdQAPhgAnh/IAFgOQAEgHAFgDQAGgEAHABQACgHAFgEQAGgFAIABQAIAAAFAGQAEAEACAIIABAAQAKADADAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAHgNAHgDQAFgDAGABIADAAQAGAAAEADQAFgDAIAAQAIABAFAFIANgUQAPgTAQgTQAUgWAkgkIAbgaQAQgOAPgHQAOgHAZgGQAWgEAJAKQAHAHgEASQgDAPgIAVIgNAjQgJAagDAdIgCANIgCAHQAAADgBAEQgBADgCADQADADACADQADAGgBAFQAAAFgEAIIgKASIgOAWIgSAfIgSAcQAEgEAFgBQAJgDAIAGQAIAGAAAKQAAAEgCAFIAAABQAFAFACAFIACgDQAIgJAJAAQAHgBAHAEIADAAQAJgBAHAGIADAFQAKgNAMgKQAWgTAZgEIAJgCIAIgEIAGgFQAGgFAJABQAIABAFAGQAEAHAAAKQAAAGgCALIgDAUQgBAMgDAEIgDAFIgCAGQgCAIgGAGQgHAIgKAFQgMAGgYACIgQABQgLABgGgBIgDAAIgKACQgJACgGgFIgCgBQgFATAAAQIAAAQIgBAGIABAFIAGASQACAIABAMQABAJgBAGIgBABIAFACQAFACADAFQADAFAAAGQAAAHgDAEQgFAIgQAEQgUAFgNgCIgLgDIgLgEQgFgEgGgGIgBAAQgCgBgFACQgaALgZgHQgNgEgKgHQgHgGgGgGQgKAcgEAOIgFAbQgBBUADBYIAAAFIABARQAAALgFAGIgEAEIgCACQgFAHgJADQgGACgHAAIgEAAg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AlmKqQgwgCgegDQgWgDghgHQgigHgSgGQg7gVgvg6QgOgQgFgMQgDgJgBgJQgIgNgCgVQgEgkAJgZQAJgYAZgXQAdgdAtgUQAigQA0gPQAQgFAKgBQAOgCAMAEQAMADAIAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQAEAFABAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQAUgJALgKIAMgMIALgLQAHgFAOgJQgJgPgSgNQgNgLgTgKIgigRQgwgXgbgQQgogXgcgYQghgegVgjQgXgmgEgoIgBgMQgNgTAEgmQAKhgAyg3QASgUAigYQCAhZCIgcQAUgEAOABQALgKAPAAQAJAAALAEQAHADALAGIAhATQASALANAKQAiAcAKAhQAFARgBAhQgCAngHAWQgKAagaAaQgbAdgiATQgjAUgmAEQgfAEgagHQgdgJgRgVQgKgNgFgRQgEgQACgRQABgeATgjQAGgMAIgMQgUAIgQAJIgPALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBHAfBBAqQgDgXAFgeIAEgXQAEgNAFgHQAEgFAKgGIAOgLIAHgHQAEgFADgCQADgCADAAQAFgLAPgHQAUgKAYAEQAcAEAPASQANARgBAaQgCAbgRAQQgKAJgPAFIgGADIAAAFQAAAOgEAIQgCAGgFAHIgJANIgDAHIgFAHQgHAMgSAFIgNACIAHAIQAOAUANAiQANApAAAcQABAogXAiQgYAjgkAOIgBAAQgMALgRANQgnAcgrAXQgmAUgcAHQgXAGgfACIgXAAIgfAAgAFsJeQgQgBgSgLQgLgIgFgHQgIgMgBgSIABghIgBgVIgCgTIgCgvIABgkQABgSADgLIADgJQgGABgFgBQgFABgHgBQgNgCgGgHQgGgIABgRIAJimIgDAEIgJAPQABAFgBAGQgCAJgIANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgDAHQgHAOgMAHQgGAEgHAAQgIAAgGgDQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgCgEQgFgHAAgNQABgRAEgdQAPhgAnh/IAFgOQAEgHAFgDQAGgEAHABQACgHAFgEQAGgFAIABQAIAAAFAGQAEAEACAIIABAAQAKADADAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAHgNAHgDQAFgDAGABIADAAQAGAAAEADQAFgDAIAAQAIABAFAFIANgUQAPgTAQgTQAUgWAkgkIAbgaQAQgOAPgHQAOgHAZgGQAWgEAJAKQAHAHgEASQgDAPgIAVIgNAjQgJAagDAdIgCANIgCAHQAAADgBAEQgBADgCADQADADACADQADAGgBAFQAAAFgEAIIgKASIgOAWIgSAfIgSAcQAEgEAFgBQAJgDAIAGQAIAGAAAKQAAAEgCAFIAAABQAFAFACAFIACgDQAIgJAJAAQAHgBAHAEIADAAQAJgBAHAGIADAFQAKgNAMgKQAWgTAZgEIAJgCIAIgEIAGgFQAGgFAJABQAIABAFAGQAEAHAAAKQAAAGgCALIgDAUQgBAMgDAEIgDAFIgCAGIgDAIQABAFgBAHQgBAHgEAIIgFALQACAEgBAGIgCAMIgEAMIgEAOIgEAOQgIAZgXAOQgWAOgcgCIgBAAQADAFAAAGQAAAHgDAEQgFAIgQAEQgUAFgNgCIgLgDIgLgEQgFgEgGgGIgBAAQgCgBgFACQgaALgZgHQgNgEgKgHQgHgGgGgGQgKAcgEAOIgFAbQgBBUADBYIAAAFIABARQAAALgFAGIgEAEIgCACQgFAHgJADQgGACgHAAIgEAAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AmVKqQgxgCgdgDQgWgDghgHQgjgHgRgGQg7gVgvg6QgOgQgFgMQgEgJAAgJQgIgNgDgVQgEgkAKgZQAJgYAYgXQAegdAtgUQAigQAzgPQARgFAJgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgMAZQgKAUgWARQgNAIgSAJIghAPIgdAOQADAFACAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQATgJALgKIANgMIALgLQAHgFANgJQgIgPgTgNQgNgLgSgKIgigRQgwgXgbgQQgogXgcgYQgigegUgjQgXgmgEgoIgBgMQgOgTAFgmQAKhgAyg3QASgUAigYQCAhZCIgcQAUgEAOABQALgKAPAAQAJAAALAEQAHADAMAGIAhATQARALANAKQAiAcAKAhQAFARgBAhQgCAngIAWQgJAagaAaQgbAdgiATQgkAUgmAEQgeAEgagHQgdgJgRgVQgKgNgFgRQgEgQABgRQACgeATgjQAGgMAIgMQgUAIgRAJIgOALIguAjQgZAUgPATQgIAIgFAKQAAAJgDAIIgFALIgEALQAAAFABAHIADAMIADAQIACARQAEATANASQAKAPASARIANAOQBGAfBBAqQgCgXAEgeIAFgXQAEgNAFgHQAEgFAJgGIAPgLIAHgHQADgFAEgCQADgCADAAQAFgLAPgHQAVgKAYAEQAbAEAPASQANARgBAaQgCAbgRAQQgKAJgOAFIgGADIAAAFQAAAOgEAIQgCAGgGAHIgIANIgEAHIgEAHQgJAMgRAFIgNACIAHAIQAOAUANAiQAOApAAAcQABAogYAiQgYAjglAOIgBAAQgMALgRANQgmAcgrAXQgmAUgcAHQgYAGgeACIgXAAIgfAAgAE8JeQgPgBgSgLQgLgIgFgHQgIgMgBgSIABghIgBgVIgCgTIgCgvIABgkQABgSADgLIADgJQgGABgFgBQgFABgHgBQgNgCgHgHQgFgIABgRIAIimIgDAEIgIAPQABAFgCAGQgCAJgHANQgIAPgIAMIgRAYQgKAOgFALIgEAJIgBACQgDAMgEAHQgGAOgMAHQgGAEgHAAQgIAAgGgDQgFgDgCgEQgEACgEAAQgGABgFgDQgGgDgDgEQgEgHAAgNQABgRAEgdQAPhgAmh/IAGgOQAEgHAFgDQAGgEAGABQADgHAFgEQAGgFAIABQAIAAAFAGQAEAEABAIIACAAQAJADAEAIQACAFAAAGIgBAKIAEgDIAKgNIAMgUIARgVIAZgdQAGgNAIgDQAFgDAGABIADAAQAFAAAFADQAFgDAHAAQAIABAFAFIAOgUQAPgTAQgTQAUgWAkgkIAagaQAQgOAPgHQAPgHAZgGQAWgEAJAKQAGAHgDASQgDAPgJAVIgNAjQgJAagDAdIgBANIgCAHQAAADgBAEQgBADgCADQADADACADQACAGAAAFQgBAFgDAIIgLASIgNAWIgSAfIgSAcQAEgEAFgBQAJgDAIAGQAIAGAAAKQAAAEgCAFIAAABQAFAFACAFIACgDQAIgJAJAAQAHgBAHAEIADAAQAJgBAGAGIAEAFQAKgNAMgKQAWgTAZgEIAJgCIAIgEIAFgFQAHgFAIABIADAAQAcg6AMgiQAFgNAFgFQAGgGAOgFQANgDAHAEQAEACAGAHIAIAMQADAIgDAQIgGAbQgEAPgFALQgEAKgNARQAAAGgDAIIgLAnIgJAgIgBArIgBAOIAAACQABAFAAAHQABAkgIAXIgJAVIgEAJQgBAEgDAEQgEAEgFABQgGACgGgCQgFgBgEgFIgCgDQgFAEgGABQgGABgGgEQgHgDgBgGQgDgGACgHIgBgDQgCgFADgJQgJAKgMAIQgVAOgcgCIgBAAQADAFAAAGQAAAHgDAEQgGAIgPAEQgUAFgOgCIgKgDIgLgEQgGgEgFgGIgBAAQgCgBgFACQgaALgZgHQgNgEgKgHQgIgGgFgGQgKAcgEAOIgGAbQgBBUAEBYIAAAFIABARQAAALgGAGIgDAEIgCACQgGAHgIADQgGACgHAAIgFAAgAKMDBIAAAAIABgCIgBACg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AmzKqQgxgCgegDQgVgDgigHQgigHgSgGQg6gVgwg6QgNgQgFgMQgEgJAAgJQgIgNgDgVQgEgkAJgZQAKgYAYgXQAegdAtgUQAigQAzgPQAQgFAKgBQAPgCALAEQAMADAJAKQAIAJAEANQAHAXgMAZQgLAUgWARQgMAIgTAJIggAPIgeAOQAEAFACAHQAaAJAlAGQBFAMA5gEQBEgFA2gZQATgJALgKIAMgMIAMgLQAHgFANgJQgJgPgSgNQgNgLgSgKIgigRQgwgXgbgQQgogXgdgYQghgegVgjQgXgmgEgoIAAgMQgOgTAEgmQALhgAyg3QARgUAjgYQB/hZCJgcQAUgEAOABQALgKAOAAQAKAAALAEQAGADAMAGIAiATQASALANAKQAhAcAJAhQAGARgBAhQgCAngIAWQgKAagYAaQgcAdgiATQgkAUgmAEQgeAEgagHQgegJgRgVQgJgNgFgRQgEgQABgRQACgeASgjQAHgMAHgMQgTAIgRAJIgOALIguAjQgZAUgQATQgHAIgGAKQAAAJgCAIIgFALIgEALQgBAFACAHIADAMIADAQIACARQAEATANASQAKAPARARIAOAOQBGAfBBAqQgDgXAFgeIAFgXQAEgNAFgHQADgFAKgGIAPgLIAGgHQAEgFAEgCQACgCAEAAQAFgLAPgHQAUgKAYAEQAdAEAOASQANARgCAaQgBAbgQAQQgKAJgQAFIgFADIAAAFQAAAOgEAIQgCAGgGAHIgJANIgDAHIgEAHQgJAMgRAFIgNACIAGAIQAOAUANAiQAPApAAAcQAAAogXAiQgYAjglAOIgBAAQgMALgRANQgmAcgsAXQglAUgcAHQgYAGgeACIgYAAIgeAAgAEeJeQgPgBgSgLQgLgIgGgHQgHgMgBgSIAAghIgBgVIgBgTIgCgvIABgkQABgSADgLIADgJQgGABgFgBQgGABgHgBQgNgCgGgHQgFgIABgRIAIimIgDAEIgIAPQAAAFgBAGQgCAJgHANQgIAPgJAMIgQAYQgKAOgFALIgFAJIgBACQgCAMgEAHQgHAOgLAHQgGAEgIAAQgHAAgGgDQgFgDgCgEQgEACgFAAQgFABgGgDQgFgDgDgEQgEgHAAgNQAAgRAFgdQAPhgAmh/IAFgOQAEgHAGgDQAFgEAHABQACgHAFgEQAHgFAHABQAIAAAGAGQAEAEABAIIACAAQAJADAEAIQACAFAAAGIgBAKIADgDIAKgNIANgUIARgVIAYgdQAHgNAHgDQAGgDAFABIADAAQAGAAAFADQAFgDAHAAQAIABAFAFIAOgUQAOgTARgTQAUgWAkgkIAagaQAQgOAPgHQAPgHAZgGQAWgEAIAKQAHAHgDASQgEAPgIAVIgNAjQgJAagDAdIgBANIgCAHQAAADgCAEQAAADgDADQAEADACADQACAGAAAFQgBAFgDAIIgLASIgNAWIgTAfIgRAcQAEgEAEgBQAKgDAIAGQAHAGAAAKQAAAEgCAFIAAABQAGAFACAFIACgDQAHgJAKAAQAHgBAGAEIAEAAQAIgBAHAGIAEAFQAKgNALgKQAWgTAagEIAJgCIAHgEIAGgFQAGgFAJABIACAAQAdg6AMgiQAFgNAFgFQAFgGAOgFQAOgDAHAEQAEACAGAHIAIAMQADAIgDAQIgGAbIgEANQAEgBADAAQAJgBAJAFQAOAKAHASQAFAOAAAUQAAAbgJAjQAJgCAIAIQAFAFADALQAGAUgBAbQgCAngRAVQgMAQgVAHQgSAHgWAAQgSAAgKgHQgHgEgEgGIgDAHIgEAJQgCAEgDAEQgDAEgGABQgGACgFgCQgGgBgDgFIgCgDQgFAEgGABQgHABgGgEQgGgDgCgGQgCgGABgHIgBgDQgBgFACgJQgIAKgMAIQgWAOgbgCIgBAAQADAFAAAGQAAAHgDAEQgGAIgQAEQgTAFgOgCIgKgDIgMgEQgFgEgGgGIgBAAQgCgBgEACQgaALgZgHQgNgEgLgHQgHgGgFgGQgLAcgEAOIgFAbQgBBUADBYIAAAFIACARQgBALgFAGIgDAEIgCACQgGAHgJADQgGACgGAAIgFAAgAJuDBIAAAAIABgCIgBACg");
	var mask_1_graphics_20 = new cjs.Graphics().p("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");
	var mask_1_graphics_21 = new cjs.Graphics().p("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");
	var mask_1_graphics_22 = new cjs.Graphics().p("AicNbQgJgFgHgKQgGgJgDgSQgFgbAEglIACgNQACgFADgEIgBgIIABgOIABgSIAAgSIACgOIgRAjIgFAHIACAEQABAGgEANQgHAVgNAZQgJARgQAcQgKAPgFAGQgMALgNgCQgGgBgHgEQgFgEgEgHQgFgJgCgRQgDgbAGgvQABgMAEgGIADgDIADgZIADgfIAEgfQADgQAHgYQALgnARgrQADgKAEgFQAFgHAHgCQADgCADAAIAGgEQAGgDAGABQAIACAJALQAKANACAKQACAIgCALQAMgYAJgPQASgeAZgbQAOgPALgJQAQgMALACIAHAEQAEgBAFABQAJADADAJIACAFQAGAFABAGQACAIgEAJIgJAPQgIAOgIARQgGAMgCAKIgEAZIgGAhIgHAhQgEATgCAeIgGAyIAAADQADACADADQAEAFABAIIAAAOQgDArgDATQgEAcgKAPQgGAKgJAGQgKAIgMABIgBAAQgKAAgKgFgAmzH1QgxgCgegDQgVgDgigHQgigHgSgGQg6gWgwg5QgNgQgFgMQgEgJAAgJQgIgNgDgWQgEgjAJgaQAKgYAYgXQAegcAtgVQAigPAzgPQAQgFAKgBQAPgCALADQAMAEAJAJQAIAKAEAMQAHAYgMAYQgLAVgWAQQgMAJgTAJIggAOIgeAOQAEAFACAHQAaAJAlAHQBFALA5gEQBEgEA2gaQATgIALgKIAMgMIAMgLQAHgGANgIQgJgQgSgNQgNgKgSgKIgigRQgwgXgbgQQgogXgdgZQghgdgVgjQgXglgEgoIAAgMQgOgTAEgmQALhiAyg2QARgUAjgYQB/haCJgbQAUgEAOABQALgLAOAAQAKAAALAFQAGACAMAHIAiATQASALANAKQAhAbAJAiQAGARgBAgQgCAngIAWQgKAagYAbQgcAegiATQgkATgmAFQgeAEgagIQgegIgRgVQgJgNgFgRQgEgRABgSQACgeASgiQAHgNAHgMQgTAIgRAKIgOALIguAiQgZAVgQATQgHAJgGAKQAAAIgCAIIgFAMIgEALQgBAEACAIIADALIADARIACARQAEATANASQAKAOARASIAOAMQBGAgBBAqQgDgYAFgdIAFgXQAEgNAFgGQADgGAKgFIAPgLIAGgIQAEgEAEgCQACgCAEAAQAFgLAPgHQAUgKAYADQAdAEAOATQANARgCAaQgBAagQAPQgKAKgQAFIgFACIAAAGQAAANgEAJQgCAFgGAIIgJAMIgDAHIgEAIQgJAMgRAEIgNACIAGAJQAOATANAjQAPApAAAcQAAAngXAjQgYAiglAOIgBABQgMALgRAMQgmAcgsAXQglAVgcAHQgYAGgeACIgYAAIgeAAgAEeGpQgPgBgSgLQgLgIgGgIQgHgLgBgSIAAghIgBgWIgBgTIgCguIABgkQABgTADgKIADgJQgGAAgFAAQgGAAgHAAQgNgCgGgIQgFgHABgSIAIilIgDAFIgIAOQAAAFgBAGQgCAJgHAMQgIAQgJAMIgQAYQgKAOgFALIgFAIIgBADQgCALgEAIQgHAOgLAHQgGADgIABQgHAAgGgEQgFgCgCgEQgEABgFABQgFABgGgDQgFgDgDgEQgEgHAAgNQAAgSAFgcQAPhgAmh/IAFgNQAEgHAGgEQAFgDAHABQACgIAFgEQAHgFAHABQAIAAAGAFQAEAGABAHIACABQAJADAEAHQACAFAAAHIgBAKIADgEIAKgMIANgUIARgWIAYgdQAHgNAHgEQAGgCAFABIADAAQAGAAAFADQAFgDAHAAQAIABAFAEIAOgTQAOgTARgTQAUgWAkglIAagaQAQgNAPgHQAPgHAZgGQAWgEAIAJQAHAIgDASQgEAOgIAWIgNAjQgJAagDAdIgBANIgCAGQAAAEgCAEQAAACgDAEQAEACACAEQACAFAAAGQgBAEgDAIIgLATIgNAXIgTAfIgRAbQAEgEAEAAQAKgDAIAFQAHAHAAAJQAAAFgCAFIAAABQAGAEACAGIACgDQAHgJAKgBQAHAAAGAEIAEgBQAIAAAHAGIAEAEQAKgNALgJQAWgTAagFIAJgCIAHgDIAGgGQAGgFAJABIACABQAdg6AMgjQAFgOAFgEQAFgHAOgEQAOgDAHADQAEACAGAIIAIAMQADAIgDAQIgGAcIgEANQAEgCADAAQAJAAAJAFQAOAJAHASQAFAOAAAVQAAAbgJAjQAJgDAIAJQAFAFADAKQAGATgBAcQgCAngRAVQgMAPgVAHQgSAHgWAAQgSAAgKgGQgHgEgEgGIgDAHIgEAIQgCAFgDADQgDAEgGACQgGACgFgCQgGgCgDgFIgCgCQgFADgGABQgHABgGgDQgGgEgCgGQgCgFABgHIgBgDQgBgFACgJQgIAKgMAIQgWANgbgBIgBAAQADAFAAAGQAAAGgDAFQgGAIgQAEQgTAFgOgDIgKgCIgMgFQgFgDgGgGIgBAAQgCgBgEACQgaAKgZgHQgNgDgLgIQgHgFgFgHQgLAcgEAOIgFAcQgBBUADBYIAAAEIACASQgBAKgFAHIgDADIgCADQgGAHgJADQgGACgGAAIgFAAgAJuALIAAABIABgCIgBABg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AicNbQgJgFgHgKQgGgJgDgSQgFgbAEglIACgNQACgFADgEIgBgIIABgOIABgSIAAgSIACgOIgRAjIgFAHIACAEQABAGgEANQgHAVgNAZQgJARgQAcQgKAPgFAGQgMALgNgCQgGgBgHgEQgFgEgEgHQgFgJgCgRQgDgbAGgvQABgMAEgGIADgDIADgZIADgfIAEgfQADgQAHgYQALgnARgrQADgKAEgFQAFgHAHgCQADgCADAAIAGgEQAGgDAGABQAIACAJALQAKANACAKQACAIgCALQAMgYAJgPQASgeAZgbQAOgPALgJQAQgMALACIAHAEQAEgBAFABQAFACAEAEIAEgEQAPgMAQgUIAagkQAxg9A6gVQANgFAIACQAEAAADADQAOgDAQADQAKADAFADQAIAGABAIQAAAGgEAHIgIAKIgQARIgiAkQgTATgQAPIglAfQgHAGgGADIgCAIQgDANgIAUQgMAggMASQgGAJgGAEQgBAHgGALQgvBOgUBYIgDAOQgDAHgEAFQgEAGgHADIgBAAQgCAmgDARQgEAcgKAPQgGAKgJAGQgKAIgMABIgBAAQgKAAgKgFgAmzH1QgxgCgegDQgVgDgigHQgigHgSgGQg6gWgwg5QgNgQgFgMQgEgJAAgJQgIgNgDgWQgEgjAJgaQAKgYAYgXQAegcAtgVQAigPAzgPQAQgFAKgBQAPgCALADQAMAEAJAJQAIAKAEAMQAHAYgMAYQgLAVgWAQQgMAJgTAJIggAOIgeAOQAEAFACAHQAaAJAlAHQBFALA5gEQBEgEA2gaQATgIALgKIAMgMIAMgLQAHgGANgIQgJgQgSgNQgNgKgSgKIgigRQgwgXgbgQQgogXgdgZQghgdgVgjQgXglgEgoIAAgMQgOgTAEgmQALhiAyg2QARgUAjgYQB/haCJgbQAUgEAOABQALgLAOAAQAKAAALAFQAGACAMAHIAiATQASALANAKQAhAbAJAiQAGARgBAgQgCAngIAWQgKAagYAbQgcAegiATQgkATgmAFQgeAEgagIQgegIgRgVQgJgNgFgRQgEgRABgSQACgeASgiQAHgNAHgMQgTAIgRAKIgOALIguAiQgZAVgQATQgHAJgGAKQAAAIgCAIIgFAMIgEALQgBAEACAIIADALIADARIACARQAEATANASQAKAOARASIAOAMQBGAgBBAqQgDgYAFgdIAFgXQAEgNAFgGQADgGAKgFIAPgLIAGgIQAEgEAEgCQACgCAEAAQAFgLAPgHQAUgKAYADQAdAEAOATQANARgCAaQgBAagQAPQgKAKgQAFIgFACIAAAGQAAANgEAJQgCAFgGAIIgJAMIgDAHIgEAIQgJAMgRAEIgNACIAGAJQAOATANAjQAPApAAAcQAAAngXAjQgYAiglAOIgBABQgMALgRAMQgmAcgsAXQglAVgcAHQgYAGgeACIgYAAIgeAAgAEeGpQgPgBgSgLQgLgIgGgIQgHgLgBgSIAAghIgBgWIgBgTIgCguIABgkQABgTADgKIADgJQgGAAgFAAQgGAAgHAAQgNgCgGgIQgFgHABgSIAIilIgDAFIgIAOQAAAFgBAGQgCAJgHAMQgIAQgJAMIgQAYQgKAOgFALIgFAIIgBADQgCALgEAIQgHAOgLAHQgGADgIABQgHAAgGgEQgFgCgCgEQgEABgFABQgFABgGgDQgFgDgDgEQgEgHAAgNQAAgSAFgcQAPhgAmh/IAFgNQAEgHAGgEQAFgDAHABQACgIAFgEQAHgFAHABQAIAAAGAFQAEAGABAHIACABQAJADAEAHQACAFAAAHIgBAKIADgEIAKgMIANgUIARgWIAYgdQAHgNAHgEQAGgCAFABIADAAQAGAAAFADQAFgDAHAAQAIABAFAEIAOgTQAOgTARgTQAUgWAkglIAagaQAQgNAPgHQAPgHAZgGQAWgEAIAJQAHAIgDASQgEAOgIAWIgNAjQgJAagDAdIgBANIgCAGQAAAEgCAEQAAACgDAEQAEACACAEQACAFAAAGQgBAEgDAIIgLATIgNAXIgTAfIgRAbQAEgEAEAAQAKgDAIAFQAHAHAAAJQAAAFgCAFIAAABQAGAEACAGIACgDQAHgJAKgBQAHAAAGAEIAEgBQAIAAAHAGIAEAEQAKgNALgJQAWgTAagFIAJgCIAHgDIAGgGQAGgFAJABIACABQAdg6AMgjQAFgOAFgEQAFgHAOgEQAOgDAHADQAEACAGAIIAIAMQADAIgDAQIgGAcIgEANQAEgCADAAQAJAAAJAFQAOAJAHASQAFAOAAAVQAAAbgJAjQAJgDAIAJQAFAFADAKQAGATgBAcQgCAngRAVQgMAPgVAHQgSAHgWAAQgSAAgKgGQgHgEgEgGIgDAHIgEAIQgCAFgDADQgDAEgGACQgGACgFgCQgGgCgDgFIgCgCQgFADgGABQgHABgGgDQgGgEgCgGQgCgFABgHIgBgDQgBgFACgJQgIAKgMAIQgWANgbgBIgBAAQADAFAAAGQAAAGgDAFQgGAIgQAEQgTAFgOgDIgKgCIgMgFQgFgDgGgGIgBAAQgCgBgEACQgaAKgZgHQgNgDgLgIQgHgFgFgHQgLAcgEAOIgFAcQgBBUADBYIAAAEIACASQgBAKgFAHIgDADIgCADQgGAHgJADQgGACgGAAIgFAAgAJuALIAAABIABgCIgBABg");
	var mask_1_graphics_24 = new cjs.Graphics().p("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");
	var mask_1_graphics_25 = new cjs.Graphics().p("AgyPUQgOgEgOgSQgPgUgGgUQgGgQgCgVQgCgOAAgWQAAgqAFgbQACgOAEgMIgGgDQgFgDgCgFIgBgDIgBABQgKAIgMABQgKAAgLgFQgJgFgHgKQgGgJgDgSQgFgbAEglIACgNQACgFADgEIgBgJIABgNIABgSIAAgSIACgOIgRAjIgFAHIACAEQABAGgEANQgHAVgNAZQgJARgQAbQgKAQgFAGQgMALgNgCQgGgBgHgEQgFgEgEgHQgFgJgCgRQgDgbAGgvQABgMAEgGIADgDIADgZIADgfIAEgfQADgQAHgYQALgnARgrQADgKAEgFQAFgHAHgDQADgBADAAIAGgEQAGgDAGABQAIACAJALQAKANACAKQACAIgCALQAMgYAJgPQASgeAZgbQAOgPALgJQAQgMALACIAHADQAEAAAFABQAFACAEAEIAEgEQAPgMAQgUIAagkQAxg9A6gVQANgFAIACQAEAAADADQAOgDAQADQAKADAFADQAIAGABAIQAAAGgEAHIgIAKIgEAFQAEAFAAAGQAAAGgEAGIgFAJIADAFQAFAKgHASQgKAZgPAeIgcA2QgQAegKANIgKANIACAGQAAAIgFAKIgFAHIgGAIQgIAKgIATIgOAgQgFAKgGAGQAAAFgCAHIgIAOIgBADIAAAJIgGBiQgBARgGAGIgDADIACAMIABAQQgBAHgCAIIgEAOIgJAjIgIAoQgCAPgCAnQgDAigEAUIgDANIgCANIgBAKQgBAFgCADQgEAIgKADIgIABQgEAAgFgCgAmzF+QgxgBgegDQgVgDgigHQgigHgSgGQg6gWgwg5QgNgQgFgMQgEgKAAgIQgIgNgDgWQgEgjAJgaQAKgYAYgXQAegcAtgVQAigPAzgPQAQgGAKAAQAPgCALADQAMAEAJAJQAIAKAEAMQAHAYgMAYQgLAVgWAQQgMAJgTAJIggAOIgeAOQAEAFACAHQAaAJAlAHQBFALA5gEQBEgEA2gaQATgIALgKIAMgMIAMgLQAHgGANgIQgJgQgSgNQgNgKgSgKIgigRQgwgXgbgQQgogWgdgZQghgdgVgjQgXgmgEgoIAAgMQgOgTAEgmQALhiAyg2QARgUAjgYQB/haCJgbQAUgEAOABQALgLAOAAQAKAAALAFQAGACAMAHIAiATQASALANAKQAhAbAJAiQAGARgBAgQgCAngIAWQgKAagYAbQgcAegiASQgkAUgmAFQgeAEgagIQgegIgRgVQgJgNgFgSQgEgQABgSQACgeASgiQAHgNAHgMQgTAIgRAKIgOALIguAiQgZAUgQAUQgHAJgGAKQAAAIgCAIIgFALIgEAMQgBAEACAIIADALIADARIACARQAEATANASQAKAOARASIAOANQBGAgBBAqQgDgYAFgdIAFgXQAEgOAFgGQADgGAKgFIAPgLIAGgIQAEgEAEgCQACgCAEAAQAFgLAPgHQAUgKAYADQAdAEAOATQANARgCAaQgBAbgQAPQgKAJgQAGIgFACIAAAGQAAANgEAJQgCAFgGAIIgJAMIgDAHIgEAHQgJAMgRAEIgNACIAGAJQAOATANAjQAPApAAAcQAAAngXAjQgYAiglAOIgBABQgMALgRAMQgmAcgsAXQglAVgcAHQgYAGgeABIgYABIgegBgAEeEzQgPgBgSgLQgLgIgGgIQgHgLgBgSIAAghIgBgWIgBgTIgCguIABgkQABgTADgKIADgJQgGAAgFgBQgGABgHgBQgNgBgGgIQgFgHABgSIAIilIgDAFIgIAOQAAAFgBAGQgCAKgHAMQgIAQgJAMIgQAYQgKAOgFALIgFAIIgBADQgCAKgEAIQgHAOgLAHQgGADgIABQgHAAgGgEQgFgCgCgEQgEABgFABQgFABgGgDQgFgDgDgEQgEgHAAgNQAAgRAFgcQAPhhAmh/IAFgNQAEgHAGgEQAFgDAHABQACgIAFgEQAHgGAHABQAIAAAGAGQAEAGABAHIACABQAJADAEAHQACAFAAAHIgBAKIADgEIAKgMIANgUIARgWIAYgdQAHgNAHgEQAGgCAFABIADAAQAGAAAFADQAFgDAHAAQAIAAAFAFIAOgTQAOgTARgTQAUgWAkglIAagaQAQgNAPgHQAPgHAZgGQAWgEAIAJQAHAIgDASQgEAOgIAWIgNAjQgJAagDAdIgBANIgCAGQAAAEgCADQAAADgDAEQAEACACAEQACAFAAAGQgBAEgDAIIgLATIgNAXIgTAfIgRAbQAEgEAEgBQAKgCAIAFQAHAHAAAJQAAAFgCAFIAAABQAGAEACAFIACgCQAHgJAKgBQAHgBAGAFIAEgBQAIAAAHAGIAEAEQAKgNALgJQAWgTAagFIAJgCIAHgDIAGgGQAGgFAJABIACABQAdg6AMgjQAFgOAFgEQAFgHAOgEQAOgDAHADQAEACAGAIIAIAMQADAIgDAQIgGAcIgEANQAEgCADAAQAJAAAJAFQAOAJAHASQAFAOAAAVQAAAbgJAjQAJgDAIAJQAFAFADAKQAGAUgBAcQgCAngRAVQgMAPgVAGQgSAHgWAAQgSAAgKgGQgHgEgEgFIgDAGIgEAIQgCAFgDADQgDAEgGACQgGACgFgCQgGgCgDgFIgCgCQgFADgGABQgHABgGgDQgGgEgCgGQgCgFABgGIgBgDQgBgFACgJQgIAKgMAIQgWAMgbgBIgBAAQADAFAAAGQAAAGgDAFQgGAIgQAEQgTAFgOgDIgKgCIgMgFQgFgDgGgGIgBAAQgCgBgEACQgaAKgZgHQgNgDgLgIQgHgFgFgHQgLAcgEAOIgFAcQgBBUADBYIAAAEIACASQgBAKgFAHIgDADIgCADQgGAHgJADQgGACgGAAIgFAAgAJuhqIAAABIABgDIgBACg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AgyPUQgOgEgOgSQgPgUgGgUQgGgQgCgVQgCgOAAgWQAAgqAFgbQACgOAEgMIgGgDQgFgDgCgFIgBgDIgBABQgKAIgMABQgKAAgLgFQgJgFgHgKQgGgJgDgSQgFgbAEglIACgNQACgFADgEIgBgJIABgNIABgSIAAgSIACgOIgRAjIgFAHIACAEQABAGgEANQgHAVgNAZQgJARgQAbQgKAQgFAGQgMALgNgCQgGgBgHgEQgFgEgEgHQgFgJgCgRQgDgbAGgvQABgMAEgGIADgDIADgZIADgfIAEgfQADgQAHgYQALgnARgrQADgKAEgFQAFgHAHgDQADgBADAAIAGgEQAGgDAGABQAIACAJALQAKANACAKQACAIgCALQAMgYAJgPQASgeAZgbQAOgPALgJQAQgMALACIAHADQAEAAAFABQAFACAEAEIAEgEQAPgMAQgUIAagkQAxg9A6gVQANgFAIACQAEAAADADQAOgDAQADQAKADAFADQAIAGABAIQAAAGgEAHIgIAKIgEAFQAEAFAAAGQAAAGgEAGIgFAJIADAFQAFAKgHASQgKAZgPAeIgcA2QgQAegKANIgKANIACAGQAAAHgDAGIAIAEIAPAGIAIADIAHAEQAKAFAGAMQAEAJACAJQACALgEANQACAKgBALQgBANgEAJQgFAMgLAFQgGACgNABQgSABgIgCQgPgFgJgQQgEAEgEABQgEACgGgCQgFgCgDgFIgBgDIgGALIgBADIAAAJIgGBiQgBARgGAGIgDADIACAMIABAQQgBAHgCAIIgEAOIgJAjIgIAoQgCAPgCAnQgDAigEAUIgDANIgCANIgBAKQgBAFgCADQgEAIgKADIgIABQgEAAgFgCgAmzF+QgxgBgegDQgVgDgigHQgigHgSgGQg6gWgwg5QgNgQgFgMQgEgKAAgIQgIgNgDgWQgEgjAJgaQAKgYAYgXQAegcAtgVQAigPAzgPQAQgGAKAAQAPgCALADQAMAEAJAJQAIAKAEAMQAHAYgMAYQgLAVgWAQQgMAJgTAJIggAOIgeAOQAEAFACAHQAaAJAlAHQBFALA5gEQBEgEA2gaQATgIALgKIAMgMIAMgLQAHgGANgIQgJgQgSgNQgNgKgSgKIgigRQgwgXgbgQQgogWgdgZQghgdgVgjQgXgmgEgoIAAgMQgOgTAEgmQALhiAyg2QARgUAjgYQB/haCJgbQAUgEAOABQALgLAOAAQAKAAALAFQAGACAMAHIAiATQASALANAKQAhAbAJAiQAGARgBAgQgCAngIAWQgKAagYAbQgcAegiASQgkAUgmAFQgeAEgagIQgegIgRgVQgJgNgFgSQgEgQABgSQACgeASgiQAHgNAHgMQgTAIgRAKIgOALIguAiQgZAUgQAUQgHAJgGAKQAAAIgCAIIgFALIgEAMQgBAEACAIIADALIADARIACARQAEATANASQAKAOARASIAOANQBGAgBBAqQgDgYAFgdIAFgXQAEgOAFgGQADgGAKgFIAPgLIAGgIQAEgEAEgCQACgCAEAAQAFgLAPgHQAUgKAYADQAdAEAOATQANARgCAaQgBAbgQAPQgKAJgQAGIgFACIAAAGQAAANgEAJQgCAFgGAIIgJAMIgDAHIgEAHQgJAMgRAEIgNACIAGAJQAOATANAjQAPApAAAcQAAAngXAjQgYAiglAOIgBABQgMALgRAMQgmAcgsAXQglAVgcAHQgYAGgeABIgYABIgegBgAEeEzQgPgBgSgLQgLgIgGgIQgHgLgBgSIAAghIgBgWIgBgTIgCguIABgkQABgTADgKIADgJQgGAAgFgBQgGABgHgBQgNgBgGgIQgFgHABgSIAIilIgDAFIgIAOQAAAFgBAGQgCAKgHAMQgIAQgJAMIgQAYQgKAOgFALIgFAIIgBADQgCAKgEAIQgHAOgLAHQgGADgIABQgHAAgGgEQgFgCgCgEQgEABgFABQgFABgGgDQgFgDgDgEQgEgHAAgNQAAgRAFgcQAPhhAmh/IAFgNQAEgHAGgEQAFgDAHABQACgIAFgEQAHgGAHABQAIAAAGAGQAEAGABAHIACABQAJADAEAHQACAFAAAHIgBAKIADgEIAKgMIANgUIARgWIAYgdQAHgNAHgEQAGgCAFABIADAAQAGAAAFADQAFgDAHAAQAIAAAFAFIAOgTQAOgTARgTQAUgWAkglIAagaQAQgNAPgHQAPgHAZgGQAWgEAIAJQAHAIgDASQgEAOgIAWIgNAjQgJAagDAdIgBANIgCAGQAAAEgCADQAAADgDAEQAEACACAEQACAFAAAGQgBAEgDAIIgLATIgNAXIgTAfIgRAbQAEgEAEgBQAKgCAIAFQAHAHAAAJQAAAFgCAFIAAABQAGAEACAFIACgCQAHgJAKgBQAHgBAGAFIAEgBQAIAAAHAGIAEAEQAKgNALgJQAWgTAagFIAJgCIAHgDIAGgGQAGgFAJABIACABQAdg6AMgjQAFgOAFgEQAFgHAOgEQAOgDAHADQAEACAGAIIAIAMQADAIgDAQIgGAcIgEANQAEgCADAAQAJAAAJAFQAOAJAHASQAFAOAAAVQAAAbgJAjQAJgDAIAJQAFAFADAKQAGAUgBAcQgCAngRAVQgMAPgVAGQgSAHgWAAQgSAAgKgGQgHgEgEgFIgDAGIgEAIQgCAFgDADQgDAEgGACQgGACgFgCQgGgCgDgFIgCgCQgFADgGABQgHABgGgDQgGgEgCgGQgCgFABgGIgBgDQgBgFACgJQgIAKgMAIQgWAMgbgBIgBAAQADAFAAAGQAAAGgDAFQgGAIgQAEQgTAFgOgDIgKgCIgMgFQgFgDgGgGIgBAAQgCgBgEACQgaAKgZgHQgNgDgLgIQgHgFgFgHQgLAcgEAOIgFAcQgBBUADBYIAAAEIACASQgBAKgFAHIgDADIgCADQgGAHgJADQgGACgGAAIgFAAgAJuhqIAAABIABgDIgBACg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AgyPUQgOgEgOgSQgPgUgGgUQgGgQgCgVQgCgOAAgWQAAgqAFgbQACgOAEgMIgGgDQgFgDgCgFIgBgDIgBABQgKAIgMABQgKAAgLgFQgJgFgHgKQgGgJgDgSQgFgbAEglIACgNQACgFADgEIgBgJIABgNIABgSIAAgSIACgOIgRAjIgFAHIACAEQABAGgEANQgHAVgNAZQgJARgQAbQgKAQgFAGQgMALgNgCQgGgBgHgEQgFgEgEgHQgFgJgCgRQgDgbAGgvQABgMAEgGIADgDIADgZIADgfIAEgfQADgQAHgYQALgnARgrQADgKAEgFQAFgHAHgDQADgBADAAIAGgEQAGgDAGABQAIACAJALQAKANACAKQACAIgCALQAMgYAJgPQASgeAZgbQAOgPALgJQAQgMALACIAHADQAEAAAFABQAFACAEAEIAEgEQAPgMAQgUIAagkQAxg9A6gVQANgFAIACQAEAAADADQAOgDAQADQAKADAFADQAIAGABAIQAAAGgEAHIgIAKIgEAFQAEAFAAAGQAAAGgEAGIgFAJIADAFQAFAKgHASQgKAZgPAeIgcA2QgQAegKANIgKANIACAGQAAAHgDAGIAIAEIAPAGIAIADIAHAEQAKAFAGAMQAEAJACAJQACALgEANQACAKgBALQgBANgEAJIgBABQADAEAAAFQAAAEgCAFIgDAJIgGAUQgLAkgoAcQgNAKgKADQgIACgOABQgMABgHgDIgDgBQgCAJgDADIgDADIACAMIABAQQgBAHgCAIIgEAOIgJAjIgIAoQgCAPgCAnQgDAigEAUIgDANIgCANIgBAKQgBAFgCADQgEAIgKADIgIABQgEAAgFgCgAmzF+QgxgBgegDQgVgDgigHQgigHgSgGQg6gWgwg5QgNgQgFgMQgEgKAAgIQgIgNgDgWQgEgjAJgaQAKgYAYgXQAegcAtgVQAigPAzgPQAQgGAKAAQAPgCALADQAMAEAJAJQAIAKAEAMQAHAYgMAYQgLAVgWAQQgMAJgTAJIggAOIgeAOQAEAFACAHQAaAJAlAHQBFALA5gEQBEgEA2gaQATgIALgKIAMgMIAMgLQAHgGANgIQgJgQgSgNQgNgKgSgKIgigRQgwgXgbgQQgogWgdgZQghgdgVgjQgXgmgEgoIAAgMQgOgTAEgmQALhiAyg2QARgUAjgYQB/haCJgbQAUgEAOABQALgLAOAAQAKAAALAFQAGACAMAHIAiATQASALANAKQAhAbAJAiQAGARgBAgQgCAngIAWQgKAagYAbQgcAegiASQgkAUgmAFQgeAEgagIQgegIgRgVQgJgNgFgSQgEgQABgSQACgeASgiQAHgNAHgMQgTAIgRAKIgOALIguAiQgZAUgQAUQgHAJgGAKQAAAIgCAIIgFALIgEAMQgBAEACAIIADALIADARIACARQAEATANASQAKAOARASIAOANQBGAgBBAqQgDgYAFgdIAFgXQAEgOAFgGQADgGAKgFIAPgLIAGgIQAEgEAEgCQACgCAEAAQAFgLAPgHQAUgKAYADQAdAEAOATQANARgCAaQgBAbgQAPQgKAJgQAGIgFACIAAAGQAAANgEAJQgCAFgGAIIgJAMIgDAHIgEAHQgJAMgRAEIgNACIAGAJQAOATANAjQAPApAAAcQAAAngXAjQgYAiglAOIgBABQgMALgRAMQgmAcgsAXQglAVgcAHQgYAGgeABIgYABIgegBgAEeEzQgPgBgSgLQgLgIgGgIQgHgLgBgSIAAghIgBgWIgBgTIgCguIABgkQABgTADgKIADgJQgGAAgFgBQgGABgHgBQgNgBgGgIQgFgHABgSIAIilIgDAFIgIAOQAAAFgBAGQgCAKgHAMQgIAQgJAMIgQAYQgKAOgFALIgFAIIgBADQgCAKgEAIQgHAOgLAHQgGADgIABQgHAAgGgEQgFgCgCgEQgEABgFABQgFABgGgDQgFgDgDgEQgEgHAAgNQAAgRAFgcQAPhhAmh/IAFgNQAEgHAGgEQAFgDAHABQACgIAFgEQAHgGAHABQAIAAAGAGQAEAGABAHIACABQAJADAEAHQACAFAAAHIgBAKIADgEIAKgMIANgUIARgWIAYgdQAHgNAHgEQAGgCAFABIADAAQAGAAAFADQAFgDAHAAQAIAAAFAFIAOgTQAOgTARgTQAUgWAkglIAagaQAQgNAPgHQAPgHAZgGQAWgEAIAJQAHAIgDASQgEAOgIAWIgNAjQgJAagDAdIgBANIgCAGQAAAEgCADQAAADgDAEQAEACACAEQACAFAAAGQgBAEgDAIIgLATIgNAXIgTAfIgRAbQAEgEAEgBQAKgCAIAFQAHAHAAAJQAAAFgCAFIAAABQAGAEACAFIACgCQAHgJAKgBQAHgBAGAFIAEgBQAIAAAHAGIAEAEQAKgNALgJQAWgTAagFIAJgCIAHgDIAGgGQAGgFAJABIACABQAdg6AMgjQAFgOAFgEQAFgHAOgEQAOgDAHADQAEACAGAIIAIAMQADAIgDAQIgGAcIgEANQAEgCADAAQAJAAAJAFQAOAJAHASQAFAOAAAVQAAAbgJAjQAJgDAIAJQAFAFADAKQAGAUgBAcQgCAngRAVQgMAPgVAGQgSAHgWAAQgSAAgKgGQgHgEgEgFIgDAGIgEAIQgCAFgDADQgDAEgGACQgGACgFgCQgGgCgDgFIgCgCQgFADgGABQgHABgGgDQgGgEgCgGQgCgFABgGIgBgDQgBgFACgJQgIAKgMAIQgWAMgbgBIgBAAQADAFAAAGQAAAGgDAFQgGAIgQAEQgTAFgOgDIgKgCIgMgFQgFgDgGgGIgBAAQgCgBgEACQgaAKgZgHQgNgDgLgIQgHgFgFgHQgLAcgEAOIgFAcQgBBUADBYIAAAEIACASQgBAKgFAHIgDADIgCADQgGAHgJADQgGACgGAAIgFAAgAJuhqIAAABIABgDIgBACg");
	var mask_1_graphics_28 = new cjs.Graphics().p("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CAFIAAABQAGAEACAFIACgCQAHgJAKgBQAHgBAGAFIAEgBQAIAAAHAGIAEAEQAKgNALgJQAWgTAagFIAJgCIAHgDIAGgGQAGgFAJABIACABQAdg6AMgjQAFgOAFgEQAFgHAOgEQAOgDAHADQAEACAGAIIAIAMQADAIgDAQIgGAcIgEANQAEgCADAAQAJAAAJAFQAOAJAHASQAFAOAAAVQAAAbgJAjQAJgDAIAJQAFAFADAKQAGAUgBAcQgCAngRAVQgMAPgVAGQgSAHgWAAQgSAAgKgGQgHgEgEgFIgDAGIgEAIQgCAFgDADQgDAEgGACQgGACgFgCQgGgCgDgFIgCgCQgFADgGABQgHABgGgDQgGgEgCgGQgCgFABgGIgBgDQgBgFACgJQgIAKgMAIQgWAMgbgBIgBAAQADAFAAAGQAAAGgDAFQgGAIgQAEQgTAFgOgDIgKgCIgMgFQgFgDgGgGIgBAAQgCgBgEACQgaAKgZgHQgNgDgLgIQgHgFgFgHQgLAcgEAOIgFAcQgBBUADBYIAAAEIACASQgBAKgFAHIgDADIgCADQgGAHgJADQgGACgGAAIgFAAgAJuhqIAAABIABgDIgBACg");
	var mask_1_graphics_29 = new cjs.Graphics().p("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ACAEQACAFAAAGQgBAEgDAIIgLATIgNAXIgTAfIgRAbQAEgEAEgBQAKgCAIAFQAHAHAAAJQAAAFgCAFIAAABQAGAEACAFIACgCQAHgJAKgBQAHgBAGAFIAEgBQAIAAAHAGIAEAEQAKgNALgJQAWgTAagFIAJgCIAHgDIAGgGQAGgFAJABIACABQAdg6AMgjQAFgOAFgEQAFgHAOgEQAOgDAHADQAEACAGAIIAIAMQADAIgDAQIgGAcIgEANQAEgCADAAQAJAAAJAFQAOAJAHASQAFAOAAAVQAAAbgJAjQAJgDAIAJQAFAFADAKQAGAUgBAcQgCAngRAVQgMAPgVAGQgSAHgWAAQgSAAgKgGQgHgEgEgFIgDAGIgEAIQgCAFgDADQgDAEgGACQgGACgFgCQgGgCgDgFIgCgCQgFADgGABQgHABgGgDQgGgEgCgGQgCgFABgGIgBgDQgBgFACgJQgIAKgMAIQgWAMgbgBIgBAAQADAFAAAGQAAAGgDAFQgGAIgQAEQgTAFgOgDIgKgCIgMgFQgFgDgGgGIgBAAQgCgBgEACQgaAKgZgHQgNgDgLgIQgHgFgFgHQgLAcgEAOIgFAcQgBBUADBYIAAAEIACASQgBAKgFAHIgDADIgCADQgGAHgJADQgGACgGAAIgFAAgAJuhqIAAABIABgDIgBACg");
	var mask_1_graphics_30 = new cjs.Graphics().p("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");
	var mask_1_graphics_31 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:16.4557,y:61.6469}).wait(1).to({graphics:mask_1_graphics_2,x:34.9236,y:68.2326}).wait(1).to({graphics:mask_1_graphics_3,x:36.8365,y:68.2326}).wait(1).to({graphics:mask_1_graphics_4,x:37.7538,y:68.2326}).wait(1).to({graphics:mask_1_graphics_5,x:42.3843,y:68.2326}).wait(1).to({graphics:mask_1_graphics_6,x:42.3843,y:68.2326}).wait(1).to({graphics:mask_1_graphics_7,x:42.3843,y:68.2326}).wait(1).to({graphics:mask_1_graphics_8,x:48.6887,y:68.2326}).wait(1).to({graphics:mask_1_graphics_9,x:54.3517,y:68.2326}).wait(1).to({graphics:mask_1_graphics_10,x:55.4904,y:68.2326}).wait(1).to({graphics:mask_1_graphics_11,x:66.8373,y:68.2326}).wait(1).to({graphics:mask_1_graphics_12,x:66.8373,y:68.2326}).wait(1).to({graphics:mask_1_graphics_13,x:66.8373,y:68.2326}).wait(1).to({graphics:mask_1_graphics_14,x:66.8373,y:68.2326}).wait(1).to({graphics:mask_1_graphics_15,x:66.8373,y:68.2326}).wait(1).to({graphics:mask_1_graphics_16,x:72.6351,y:68.2326}).wait(1).to({graphics:mask_1_graphics_17,x:72.6351,y:68.2326}).wait(1).to({graphics:mask_1_graphics_18,x:77.357,y:68.2326}).wait(1).to({graphics:mask_1_graphics_19,x:80.3828,y:68.2326}).wait(1).to({graphics:mask_1_graphics_20,x:80.3828,y:85.4495}).wait(1).to({graphics:mask_1_graphics_21,x:80.3828,y:85.7279}).wait(1).to({graphics:mask_1_graphics_22,x:80.3828,y:86.3665}).wait(1).to({graphics:mask_1_graphics_23,x:80.3828,y:86.3665}).wait(1).to({graphics:mask_1_graphics_24,x:80.3828,y:86.3665}).wait(1).to({graphics:mask_1_graphics_25,x:80.3828,y:98.17}).wait(1).to({graphics:mask_1_graphics_26,x:80.3828,y:98.17}).wait(1).to({graphics:mask_1_graphics_27,x:80.3828,y:98.17}).wait(1).to({graphics:mask_1_graphics_28,x:80.3828,y:98.17}).wait(1).to({graphics:mask_1_graphics_29,x:80.3828,y:98.17}).wait(1).to({graphics:mask_1_graphics_30,x:80.3828,y:98.17}).wait(1).to({graphics:mask_1_graphics_31,x:80.3828,y:98.17}).wait(329));

	// Frame_1___So_Much_More
	this.instance_18 = new lib.Frame1SoMuchMore();
	this.instance_18.setTransform(3.7,46,0.4125,0.4118);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({_off:true},132).wait(227));

	// Frame_1___Tan_Slanted_Box
	this.instance_19 = new lib.Frame1TanSlantedBox_1();
	this.instance_19.setTransform(-98,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:93},24,cjs.Ease.cubicOut).to({_off:true},109).wait(227));

	// Frame_1___Gradient_Below_Type
	this.instance_20 = new lib.Frame1GradientBelowType();

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},133).wait(227));

	// Image_1
	this.instance_21 = new lib.Image01();
	this.instance_21.setTransform(73.85,236.65,0.8174,0.8173,0,0,0,0.6,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:0.2,regY:0.4,scaleX:0.7534,scaleY:0.7532,x:126.35,y:225.5},132).to({_off:true},1).wait(227));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-136.1,194.4,810.4,340.1);
// library properties:
lib.properties = {
	id: 'ED77E92990BA44D69CDB8D94E79B605F',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SleepSavor_320x480_atlas_1.png?1616972302331", id:"SleepSavor_320x480_atlas_1"},
		{src:"images/SleepSavor_320x480_atlas_2.png?1616972302331", id:"SleepSavor_320x480_atlas_2"}
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
an.compositions['ED77E92990BA44D69CDB8D94E79B605F'] = {
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