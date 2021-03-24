(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SleepSavor_768x1024_atlas_1", frames: [[0,0,1171,158],[0,160,1171,158],[1173,0,383,370],[1558,0,452,298],[0,320,603,131],[1558,300,486,95]]},
		{name:"SleepSavor_768x1024_atlas_2", frames: [[770,390,1171,158],[770,550,1171,158],[770,710,1171,158],[0,1612,1120,285],[770,870,1171,158],[770,1030,1171,158],[770,1190,1171,158],[770,1350,1171,158],[1122,0,768,388],[0,0,538,1024],[0,1026,768,584]]},
		{name:"SleepSavor_768x1024_atlas_3", frames: [[0,1201,768,767],[0,0,1800,1199]]},
		{name:"SleepSavor_768x1024_atlas_4", frames: [[0,0,1800,1199]]},
		{name:"SleepSavor_768x1024_atlas_5", frames: [[0,0,1980,1200]]}
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



(lib.CachedBmp_20 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BottomTanSlantedBox = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowType = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Frame1SoMuchMore = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Frame1TanSlantedBox = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Frame2GradientBelowTypecopy = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Frame3GradientBelowType = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Frame3ReserveLINKarea = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frame11200Hjpg = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Frame21200H = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Frame31200H = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.TSLogoWhite = function() {
	this.initialize(ss["SleepSavor_768x1024_atlas_1"]);
	this.gotoAndStop(5);
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
	this.instance = new lib.Frame31200H();
	this.instance.setTransform(-900,-599.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image3, new cjs.Rectangle(-900,-599.5,1800,1199), null);


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
	this.instance = new lib.Frame21200H();
	this.instance.setTransform(-990,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image2, new cjs.Rectangle(-990,-600,1980,1200), null);


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
	this.instance = new lib.Frame11200Hjpg();
	this.instance.setTransform(900,-599.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-900,-599.5,1800,1199);


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
	this.shape.graphics.f("#000000").s().p("Eg7/BQAMAAAif/MB3/AAAMAAACf/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-512,768,1024);


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
	this.instance = new lib.CachedBmp_20();
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
	this.instance = new lib.CachedBmp_19();
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
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-292.7,-168.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3SleepSavorPkg, new cjs.Rectangle(-292.7,-168.6,585.5,79), null);


(lib.Frame3RESERVETODAY = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-280.1,-54.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3RESERVETODAY, new cjs.Rectangle(-280.1,-54.9,560,142.5), null);


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
	this.instance = new lib.CachedBmp_16();
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
	this.instance = new lib.CachedBmp_15();
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
	this.instance = new lib.CachedBmp_14();
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
	this.instance = new lib.CachedBmp_13();
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
	this.instance = new lib.CachedBmp_12();
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-292.7,-39.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(-292.7,-39.5,585.5,79), null);


(lib.Frame3ReserveLINKarea_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame3ReserveLINKarea();
	this.instance.setTransform(-301.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3ReserveLINKarea_1, new cjs.Rectangle(-301.5,-65.5,603,131), null);


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
	this.instance.setTransform(-384,-383.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3GradientBelowType_1, new cjs.Rectangle(-384,-383.5,768,767), null);


(lib.Frame2GradientBelowTypecopy_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame2GradientBelowTypecopy();
	this.instance.setTransform(-384,-292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame2GradientBelowTypecopy_1, new cjs.Rectangle(-384,-292,768,584), null);


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
	this.instance.setTransform(-269,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1GradientBelowType_1, new cjs.Rectangle(-269,-512,538,1024), null);


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
	this.instance.setTransform(-226,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1TanSlantedBox_1, new cjs.Rectangle(-226,-149,452,298), null);


// stage content:
(lib.SleepSavor768x1024 = function(mode,startPosition,loop,reversed) {
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
	this.button_link.setTransform(384,512);
	new cjs.ButtonHelper(this.button_link, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_link).wait(360));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).p("Eg7/hP/MB3/AAAMAAACf/Mh3/AAAg");
	this.shape.setTransform(384,512);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// TS_Logo_White
	this.instance = new lib.TSLogoWhite();
	this.instance.setTransform(144,880);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Bottom_Tan_Slanted_Box
	this.instance_1 = new lib.BottomTanSlantedBox();
	this.instance_1.setTransform(0,636);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_289 = new cjs.Graphics().p("EgtZgIdMBatgABIAGQ8MhaxAABg");
	var mask_graphics_324 = new cjs.Graphics().p("EgtZgIdMBatgABIAGQ8MhaxAABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_graphics_289,x:384.575,y:595.425}).wait(35).to({graphics:mask_graphics_324,x:384.575,y:595.425}).wait(36));

	// Shine
	this.instance_2 = new lib.buttonshine_mc();
	this.instance_2.setTransform(49.45,596.85,0.7034,0.5215,0,0,0,-10.5,4.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).to({regX:-6.2,x:222.35,alpha:0.1992},8).to({regX:7.8,x:395.75,alpha:0.6016},9).to({regX:9.9,x:569.5,alpha:0.1992},9).to({regX:14.5,x:743.1,y:340.5,alpha:0},9).to({_off:true},1).wait(35));

	// Frame_3___RESERVE_TODAY
	this.instance_3 = new lib.Frame3RESERVETODAY();
	this.instance_3.setTransform(-306.35,630.3,1,1,0,0,0,0,16.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(264).to({_off:false},0).to({x:388.65},25,cjs.Ease.cubicOut).wait(71));

	// Frame_3___Reserve_LINK_area
	this.instance_4 = new lib.Frame3ReserveLINKarea_1();
	this.instance_4.setTransform(-306.5,600.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(264).to({_off:false},0).to({x:388.5},25,cjs.Ease.cubicOut).wait(71));

	// Frame_3___Sleep___Savor_Pkg
	this.instance_5 = new lib.Frame3SleepSavorPkg();
	this.instance_5.setTransform(384.3,401.95,1,1,0,0,0,0,-98.7);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(256).to({_off:false},0).to({y:450,alpha:1},25,cjs.Ease.cubicOut).wait(79));

	// Package
	this.instance_6 = new lib.Package();
	this.instance_6.setTransform(386.1,433.15,1,1,0,0,0,0,-129.2);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(252).to({_off:false},0).to({y:481.2,alpha:1},25,cjs.Ease.cubicOut).wait(83));

	// Frame_3___Gradient_Below_Type
	this.instance_7 = new lib.Frame3GradientBelowType_1();
	this.instance_7.setTransform(384,438.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(239).to({_off:false},0).to({alpha:1},13).wait(108));

	// Image_3
	this.instance_8 = new lib.Image3();
	this.instance_8.setTransform(395.5,435.7,0.8299,0.8297,0,0,0,2.6,2.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(239).to({_off:false},0).to({regX:2.5,scaleX:0.8338,scaleY:0.8336,x:400.65,y:430.1,alpha:1},13).to({regX:1.4,regY:1.4,scaleX:0.8661,scaleY:0.866,x:443.35,y:384.15},107).wait(1));

	// Dining_Credit
	this.instance_9 = new lib.DiningCredit();
	this.instance_9.setTransform(386,366,1,1,0,0,0,0,-129.2);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(148).to({_off:false},0).to({y:293.05,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},80).wait(107));

	// Plus
	this.instance_10 = new lib.Symbol();
	this.instance_10.setTransform(376.05,231.25,0.0017,0.0126,0,0,0,0,-126.5);
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(144).to({_off:false},0).to({regY:-129.2,scaleX:1,scaleY:1,x:376.45,y:104},25,cjs.Ease.elasticOut).to({_off:true},84).wait(107));

	// Accommodations
	this.instance_11 = new lib.Accommodations();
	this.instance_11.setTransform(376.45,244.5,1,1,0,0,0,0,-129.2);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(136).to({_off:false},0).to({y:171.55,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},92).wait(107));

	// Frame_2___Pkg_Includes_Text
	this.instance_12 = new lib.Frame2PkgIncludesText();
	this.instance_12.setTransform(384.3,274.05,1,1,0,0,0,0,-37.6);
	this.instance_12.alpha = 0;
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(132).to({_off:false},0).to({y:201.1,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},96).wait(107));

	// Frame_2___Gradient_Below_Type_copy
	this.instance_13 = new lib.Frame2GradientBelowTypecopy_1();
	this.instance_13.setTransform(384,292);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(119).to({_off:false},0).to({alpha:1},13).to({_off:true},121).wait(107));

	// Image_2
	this.instance_14 = new lib.Image2();
	this.instance_14.setTransform(419.8,522.25,0.8697,0.8697,0,0,0,0.7,0.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(119).to({_off:false},0).to({regX:0.8,scaleX:0.8611,scaleY:0.8611,x:419.9,y:517.15,alpha:1},13).to({regX:1.4,regY:1.3,scaleX:0.7818,scaleY:0.7818,x:419.7,y:470.05},120).to({_off:true},1).wait(107));

	// Experience
	this.instance_15 = new lib.Experience();
	this.instance_15.setTransform(360.8,631.55,1,1,0,0,0,0,-70.8);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(32).to({_off:false},0).to({y:569.6,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},76).wait(227));

	// Luxury
	this.instance_16 = new lib.Luxury();
	this.instance_16.setTransform(360.65,569.6,1,1,0,0,0,0,-70.8);
	this.instance_16.alpha = 0;
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(28).to({_off:false},0).to({y:507.65,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},80).wait(227));

	// Frame_1___Than_A_Luxury_Experience
	this.instance_17 = new lib.Frame1ThanALuxuryExperience();
	this.instance_17.setTransform(361.3,569.45,1,1,0,0,0,0,-9.8);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(24).to({_off:false},0).to({y:507.5,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},84).wait(227));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AiXTRQgjgDgZgWQglghgJhNQgKhWAXg+QAVg6A8g4QBIhFBsgyQBSgmB9glQAngMAYgDQAkgEAbAJQAdAJAVAXQAUAXAJAdQARA6geA8QgYAyg2AnQgeAWgsAVIhQAjQhDAdgsAcQg5AlgiAtIggArQgUAYgSAMQgYAPgdAAIgKgBg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ABQVwQh0gDhJgJQg0gHhRgQQhSgRgsgQQiOgzhziLQgggngMgdQgKgXgBgVQgTgggGg0QgKhWAXg+QAVg6A8g4QBIhFBtgyQBSgmB9glQAngMAYgDQAkgEAbAJQAdAJAVAXQAUAXAJAdQARA6geA8QgYAyg2AnQgeAWgsAVIhQAjQgnARggARQAJANAEAPQA/AXBaAPQCnAcCJgJQCmgLCCg9QAvgWAbgYQAKgJATgTQASgTAKgIQASgQAkgXQAdgSASgHQAggMAuABQA5AEAfAZQAgAaANA3QASBHgXBMQgVBIg0A6QgkAng+AtQhdBEhpA4QhbAxhEARQg5APhJAEIg5ACIhLgCg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AAiVwQh1gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCJgJQClgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhig4hDg8QhRhHgzhVQg3hdgKhhQgIhHAWg4QATgyArgmQAxgsAyAEQAbACAYASQAXASAJAbQAGARAAAgQABAlADANQAEAWAMAYQAHAOARAcQAWAkALAPQAVAcAUASQAVARAfAQQAQAIAoARQDRBZC9B/QAvAfAdAaQAoAhAaAjQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThaAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg5ACIhKgCg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AAMVwQh1gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCJgJQClgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhig4hDg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBSg6QE1jaFLhCQBDgOAmAKQAbAHATATQAUAUACAZQAeABAaATQAQALAKAPQAPANAIATQALAWgCAYQgBAYgNAVQgNAVgVAMQgWANgiAEQgNABgvAAIgHAAQjCApiQBQIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQC/BVCuB1QAvAfAdAaQAoAhAaAjQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThaAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg5ACIhKgCg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhjVwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQCkgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhhg4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE0jaFLhCQAxgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhJAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQC/BVCuB1QAvAfAdAaQAoAhAaAjQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThaAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg4ACIhKgCg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhjVwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQCkgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhhg4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE0jaFLhCQAxgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhJAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQC/BVCuB1QAvAfAdAaQAoAhAaAjQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThaAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg4ACIhKgCgAMKEzQgfgCgbgSQgagSgOgcQgOgcgBgsIABhMQAAgSABgFQAGgkAugWQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOQgmAOgdAAIgJgBg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhjVwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQCkgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhhg4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE0jaFLhCQAxgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhJAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQCrBNCeBmQgHg5AMhIIAMg3QAIghAMgRQAKgMAXgPQAagRAJgJIAQgSQAJgKAJgFQAHgFAIgBQAMgaAkgRQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOIgOAFIAAAOQAAAhgJAVQgFANgNASIgVAeIgJASQgGAKgFAHQgVAdgpALQgPAEgRABIARAVQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThaAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg4ACIhKgCg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Aj8VwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQClgLCBg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQhzg4hBgmQhig4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE0jaFLhCQAxgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhJAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg8AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjApAqIAgAgQCrBNCeBmQgHg5AMhIIAMg3QAIghAMgRQAKgMAXgPQAagRAJgJIAQgSQAJgKAJgFQAHgFAIgBQAMgaAkgRQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOIgOAFIAAAOQAAAhgJAVQgFANgNASIgVAeIgJASQgGAKgFAHQgVAdgpALQgPAEgRABIARAVQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThaAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg4APhJAEIg5ACIhKgCgAPGImQgLgHgGgKQgJAFgLABQgOACgNgHQgNgGgHgMQgKgPAAgiQABgpALhFQAkjqBdk0QAHgWAGgLQAJgSANgIQAOgIAQADQAHgUALgKQAPgMATABQAUABAMAOQAKAMADAUIAFABQAXAGAIAUQAFALAAAQQAAAKgDATQg3E1g+EZQgJAsgKAWQgRAkgcAQQgPAJgSABIgCAAQgRAAgOgIg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AmGVwQh1gDhJgJQg0gHhRgQQhSgRgsgQQiOgzhziLQgggngMgdQgKgXgBgVQgTgggGg0QgKhWAXg+QAVg6A8g4QBIhFBtgyQBSgmB9glQAngMAYgDQAkgEAbAJQAdAJAVAXQAUAXAJAdQARA6geA8QgYAyg2AnQgeAWgsAVIhQAjQgnARggARQAJANAEAPQA/AXBaAPQCnAcCKgJQCmgLCCg9QAugWAbgYQAKgJATgTQASgTAKgIQARgPAggVQgVgkgsggQgggZgsgYQgcgQg2gaQhzg4hCgmQhhg4hFg8QhRhHgyhVQg4hdgKhhIgBgdQghgtALhdQAZjsB5iFQArgwBSg6QE2jaFJhCQAygKAhACQAbgZAjAAQAXAAAaAKQAQAHAeAQIBQAuQAtAaAfAZQBSBCAXBRQANAqgCBOQgEBggUA1QgXA/g+BBQhDBIhTAuQhXAwhcALQhJAKhAgTQhHgUgogzQgZgggLgqQgKgoADgrQAFhIAshVQAQgfASgcQguATgqAYIgjAaIhtBTQg9AygmAvQgSAWgNAYQAAAUgHAUIgMAbQgHAQgCALQgBAMAEARIAHAcQADAOADAbIAGAoQAKAtAfAuQAZAjAqAqIAgAgQCqBNCeBmQgHg5ALhIIAMg3QAJghAMgRQAJgMAXgPQAbgRAIgJIAQgSQAKgKAIgFQAIgFAIgBQALgaAlgRQAxgXA7AIQBFAJAjAtQAgApgDA/QgEBBgpAnQgYAVglAOIgPAFIAAAOQAAAhgIAVQgFANgOASIgVAeIgJASQgFAKgFAHQgVAdgqALQgOAEgRABIAQAVQAiAvAfBVQAjBjAABEQABBgg5BUQg6BThZAiIgCABQgeAbgpAeQhdBEhpA4QhaAxhEARQg5APhJAEIg5ACIhLgCgAM9ImQgLgHgGgKQgKAFgLABQgOACgNgHQgNgGgHgMQgJgPAAgiQABgpAKhFQAkjqBdk0QAHgWAGgLQAJgSAOgIQAOgIAQADQAGgUAMgKQAOgMAUABQAUABAMAOQAKAMADAUIAEABQAXAGAJAUQAFALgBAQIgCAZIAJgKQAPgQAJgMQALgQATghQAOgVAcghIA7hHQARgfARgJQAMgGAOACIAIAAQAWABAOASQANATgFAWQgEAPgVAXIgIAQQghA8gtB6QgvB9gdA4IglBDIgUAiQABANgDAOQgFAYgRAdQgUAmgUAdIgpA6QgYAjgMAbIgKAVIgDAFQgHAcgIARQgQAkgcAQQgQAJgRABIgCAAQgRAAgOgIg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AmhVwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQClgLCCg9QAvgWAbgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgrgYQgcgQg2gaQh0g4hBgmQhig4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE1jaFKhCQAxgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhJAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgiAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQCqBNCeBmQgHg5AMhIIAMg3QAIghAMgRQAKgMAXgPQAagRAJgJIAQgSQAJgKAJgFQAHgFAIgBQAMgaAkgRQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOIgOAFIAAAOQAAAhgJAVQgFANgNASIgVAeIgJASQgGAKgFAHQgVAdgpALQgPAEgRABIARAVQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThaAiIgBABQgeAbgpAeQhdBEhqA4QhaAxhEARQg5APhJAEIg5ACIhKgCgASXJWQgOADgQgCQgggEgPgTQgNgSADgrQAMjiAHixIgHAMIgUAiQACANgDAOQgGAYgRAdQgUAmgTAdIgqA6QgYAjgMAbIgKAVIgCAFQgHAcgIARQgRAkgcAQQgPAJgSABQgSAAgPgIQgLgHgGgKQgJAFgLABQgOACgNgHQgNgGgHgMQgKgPAAgiQABgpALhFQAkjqBdk0QAHgWAGgLQAJgSANgIQAOgIAQADQAHgUALgKQAPgMATABQAUABAMAOQAKAMADAUIAFABQAXAGAIAUQAFALAAAQIgCAZIAIgKQAQgQAJgMQALgQATghQANgVAcghIA7hHQARgfARgJQANgGAOACIAHAAQAPAAALAIQAMgIARABQAYABAMASQAIALACASQABAMgCAUIhBL7QgEAugGAYQgJAmgTAYQgbAhgoAIQgLADgJAAQgIAAgHgCg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Aq0VwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQClgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhig4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE1jaFLhCQAwgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhIAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQCrBNCeBmQgHg5AMhIIAMg3QAIghAMgRQAKgMAXgPQAZgRAJgJIAQgSQAJgKAJgFQAHgFAIgBQAMgaAkgRQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOIgOAFIAAAOQAAAhgJAVQgFANgNASIgVAeIgJASQgGAKgFAHQgVAdgpALQgPAEgRABIARAVQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThZAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg5ACIhKgCgAOEJWQgOADgQgCQgggEgPgTQgNgSADgrQAMjiAHixIgHAMIgUAiQACANgDAOQgGAYgRAdQgUAmgTAdIgqA6QgYAjgMAbIgKAVIgCAFQgHAcgIARQgRAkgcAQQgPAJgSABQgSAAgPgIQgLgHgGgKQgJAFgLABQgOACgNgHQgNgGgHgMQgKgPAAgiQABgpALhFQAkjqBdk0QAHgWAGgLQAJgSANgIQAOgIAQADQAHgUALgKQAPgMATABQAUABAMAOQAKAMADAUIAFABQAXAGAIAUQAFALAAAQIgCAZIAIgKQAQgQAJgMQALgQATghQANgVAcghIA7hHQARgfARgJQANgGAOACIAHAAQAPAAALAIQAMgIARABQAUABAMAMQAQgYARgYQAjguAogtQAwg2BXhZQAqgrAXgUQAmghAlgRQAjgRA9gNQA1gLAVAXQAQATgIArQgHAjgUA0IghBWQgWA/gHBGIgDAfQgDARgGAMQgHAPgOAJQgOAJgOgCQgGgBgNgGQgMgGgHAAQgGgBgKABIgQACQgOAAgNgLQgMgKgIgPIgMgcIgDgIQhHB+hBCoQghBWhYEDQgHAVgHAMQgGAJgHAHQgLAhgGAVIgGAbQgEAPgFALQgEALgHAIIgEA1QgEAugGAYQgJAmgTAYQgbAhgoAIQgLADgJAAQgIAAgHgCg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Aq0VwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQClgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhig4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE1jaFLhCQAwgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhIAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQCrBNCeBmQgHg5AMhIIAMg3QAIghAMgRQAKgMAXgPQAZgRAJgJIAQgSQAJgKAJgFQAHgFAIgBQAMgaAkgRQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOIgOAFIAAAOQAAAhgJAVQgFANgNASIgVAeIgJASQgGAKgFAHQgVAdgpALQgPAEgRABIARAVQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThZAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg5ACIhKgCgAOEJWQgOADgQgCQgggEgPgTQgNgSADgrQAMjiAHixIgHAMIgUAiQACANgDAOQgGAYgRAdQgUAmgTAdIgqA6QgYAjgMAbIgKAVIgCAFQgHAcgIARQgRAkgcAQQgPAJgSABQgSAAgPgIQgLgHgGgKQgJAFgLABQgOACgNgHQgNgGgHgMQgKgPAAgiQABgpALhFQAkjqBdk0QAHgWAGgLQAJgSANgIQAOgIAQADQAHgUALgKQAPgMATABQAUABAMAOQAKAMADAUIAFABQAXAGAIAUQAFALAAAQIgCAZIAIgKQAQgQAJgMQALgQATghQANgVAcghIA7hHQARgfARgJQANgGAOACIAHAAQAPAAALAIQAMgIARABQAUABAMAMQAQgYARgYQAjguAogtQAwg2BXhZQAqgrAXgUQAmghAlgRQAjgRA9gNQA1gLAVAXQAQATgIArQgHAjgUA0IghBWQgWA/gHBGIgDAfIgEARQgBAJgDAIQgCAHgFAIQAIAGAEAJQAGANgBANQAAALgJATQgHAOgTAhIggA3QgWAmgXAlIgyBNQgMAWgFAHQgIALgJAGQghBcgpBtIgFALIgFAZIgJAiQgHAXgEAHIgIAKQgFAPgFAJQgFALgHAHQgFAFgHAEIgJAEIgDABIgEADQgeAXg7gTQgPgFgKgGIgDAAQgSgFgKgTIgFANQgEALgHAIIgEA1QgEAugGAYQgJAmgTAYQgbAhgoAIQgLADgJAAQgIAAgHgCg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Aq0VwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQClgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhig4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE1jaFLhCQAwgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhIAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQCrBNCeBmQgHg5AMhIIAMg3QAIghAMgRQAKgMAXgPQAZgRAJgJIAQgSQAJgKAJgFQAHgFAIgBQAMgaAkgRQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOIgOAFIAAAOQAAAhgJAVQgFANgNASIgVAeIgJASQgGAKgFAHQgVAdgpALQgPAEgRABIARAVQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThZAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg5ACIhKgCgAQhS5QglgCgqgcQgbgTgNgSQgTgbgCgtIABhPQAAgXgDgeIgDguQgFhMAAgmQAAgnACgwQADgtAHgZQADgMAEgKQgOACgMgDQgOADgQgCQgggEgPgTQgNgSADgrQAMjiAHixIgHAMIgUAiQACANgDAOQgGAYgRAdQgUAmgTAdIgqA6QgYAjgMAbIgKAVIgCAFQgHAcgIARQgRAkgcAQQgPAJgSABQgSAAgPgIQgLgHgGgKQgJAFgLABQgOACgNgHQgNgGgHgMQgKgPAAgiQABgpALhFQAkjqBdk0QAHgWAGgLQAJgSANgIQAOgIAQADQAHgUALgKQAPgMATABQAUABAMAOQAKAMADAUIAFABQAXAGAIAUQAFALAAAQIgCAZIAIgKQAQgQAJgMQALgQATghQANgVAcghIA7hHQARgfARgJQANgGAOACIAHAAQAPAAALAIQAMgIARABQAUABAMAMQAQgYARgYQAjguAogtQAwg2BXhZQAqgrAXgUQAmghAlgRQAjgRA9gNQA1gLAVAXQAQATgIArQgHAjgUA0IghBWQgWA/gHBGIgDAfIgEARQgBAJgDAIQgCAHgFAIQAIAGAEAJQAGANgBANQAAALgJATQgHAOgTAhIggA3QgWAmgXAlIgyBNQgMAWgFAHQgIALgJAGQghBcgpBtIgFALIgFAZIgJAiQgHAXgEAHIgIAKIgBADIAAARQgCAOgIAVIgoBqQgdBMgJAlQgIAegFAmQgDDMAIDVIABAMQADAbAAAOQgBAagNAQQgEAFgFAEIgEAGQgOAQgVAIQgRAGgSAAIgIgBg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Aq0VwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQClgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhig4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE1jaFLhCQAwgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhIAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQCrBNCeBmQgHg5AMhIIAMg3QAIghAMgRQAKgMAXgPQAZgRAJgJIAQgSQAJgKAJgFQAHgFAIgBQAMgaAkgRQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOIgOAFIAAAOQAAAhgJAVQgFANgNASIgVAeIgJASQgGAKgFAHQgVAdgpALQgPAEgRABIARAVQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThZAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg5ACIhKgCgAQhS5QglgCgqgcQgbgTgNgSQgTgbgCgtIABhPQAAgXgDgeIgDguQgFhMAAgmQAAgnACgwQADgtAHgZQADgMAEgKQgOACgMgDQgOADgQgCQgggEgPgTQgNgSADgrQAMjiAHixIgHAMIgUAiQACANgDAOQgGAYgRAdQgUAmgTAdIgqA6QgYAjgMAbIgKAVIgCAFQgHAcgIARQgRAkgcAQQgPAJgSABQgSAAgPgIQgLgHgGgKQgJAFgLABQgOACgNgHQgNgGgHgMQgKgPAAgiQABgpALhFQAkjqBdk0QAHgWAGgLQAJgSANgIQAOgIAQADQAHgUALgKQAPgMATABQAUABAMAOQAKAMADAUIAFABQAXAGAIAUQAFALAAAQIgCAZIAIgKQAQgQAJgMQALgQATghQANgVAcghIA7hHQARgfARgJQANgGAOACIAHAAQAPAAALAIQAMgIARABQAUABAMAMQAQgYARgYQAjguAogtQAwg2BXhZQAqgrAXgUQAmghAlgRQAjgRA9gNQA1gLAVAXQAQATgIArQgHAjgUA0IghBWQgWA/gHBGIgDAfIgEARQgBAJgDAIQgCAHgFAIQAIAGAEAJQAGANgBANQAAALgJATQgHAOgTAhIggA3QgWAmgXAlIgrBCQAKgJALgDQAXgGATAOQATAPAAAYQAAAKgFAMIAAABIABABQAUARgBAbQgBAVgUAiQgtBNgiBPQgNAggGALIgNAYQAJgBAJADQAOAEAJAMQAKALACAPQADAWgUAkQgSAggNANQgRARgYAJQgXAIgZgBQghgBgWgPQgPgLgKgSIgFANQgdBMgJAlQgIAegFAmQgDDMAIDVIABAMQADAbAAAOQgBAagNAQQgEAFgFAEIgEAGQgOAQgVAIQgRAGgSAAIgIgBg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Aq0VwQh2gDhIgJQg0gHhSgQQhSgRgrgQQiOgzh0iLQgggngMgdQgJgXgBgVQgTgggHg0QgJhWAWg+QAWg6A7g4QBJhFBtgyQBRgmB+glQAngMAYgDQAkgEAbAJQAcAJAVAXQAVAXAJAdQAQA6gdA8QgZAyg1AnQgfAWgsAVIhPAjQgoARgfARQAJANAEAPQA+AXBbAPQCnAcCKgJQClgLCCg9QAvgWAcgYQAKgJASgTQASgTAKgIQARgPAhgVQgWgkgrggQghgZgsgYQgcgQg2gaQh0g4hBgmQhig4hEg8QhRhHgzhVQg3hdgKhhIgCgdQghgtALhdQAajsB4iFQArgwBTg6QE1jaFLhCQAwgKAiACQAbgZAjAAQAWAAAbAKQAQAHAeAQIBQAuQAsAaAfAZQBSBCAYBRQAMAqgCBOQgEBggTA1QgYA/g9BBQhDBIhTAuQhYAwhcALQhIAKhAgTQhHgUgogzQgYgggLgqQgLgoADgrQAGhIArhVQAQgfATgcQgvATgpAYIgjAaIhvBTQg9AyglAvQgSAWgOAYQABAUgIAUIgLAbQgIAQgBALQgCAMAEARIAHAcQADAOADAbIAGAoQAKAtAgAuQAYAjAqAqIAgAgQCrBNCeBmQgHg5AMhIIAMg3QAIghAMgRQAKgMAXgPQAZgRAJgJIAQgSQAJgKAJgFQAHgFAIgBQAMgaAkgRQAygXA7AIQBEAJAjAtQAhApgEA/QgEBBgpAnQgXAVgmAOIgOAFIAAAOQAAAhgJAVQgFANgNASIgVAeIgJASQgGAKgFAHQgVAdgpALQgPAEgRABIARAVQAiAvAeBVQAjBjABBEQABBgg6BUQg5BThZAiIgBABQgeAbgpAeQhdBEhqA4QhbAxhEARQg5APhJAEIg5ACIhKgCgAQhS5QglgCgqgcQgbgTgNgSQgTgbgCgtIABhPQAAgXgDgeIgDguQgFhMAAgmQAAgnACgwQADgtAHgZQADgMAEgKQgOACgMgDQgOADgQgCQgggEgPgTQgNgSADgrQAMjiAHixIgHAMIgUAiQACANgDAOQgGAYgRAdQgUAmgTAdIgqA6QgYAjgMAbIgKAVIgCAFQgHAcgIARQgRAkgcAQQgPAJgSABQgSAAgPgIQgLgHgGgKQgJAFgLABQgOACgNgHQgNgGgHgMQgKgPAAgiQABgpALhFQAkjqBdk0QAHgWAGgLQAJgSANgIQAOgIAQADQAHgUALgKQAPgMATABQAUABAMAOQAKAMADAUIAFABQAXAGAIAUQAFALAAAQIgCAZIAIgKQAQgQAJgMQALgQATghQANgVAcghIA7hHQARgfARgJQANgGAOACIAHAAQAPAAALAIQAMgIARABQAUABAMAMQAQgYARgYQAjguAogtQAwg2BXhZQAqgrAXgUQAmghAlgRQAjgRA9gNQA1gLAVAXQAQATgIArQgHAjgUA0IghBWQgWA/gHBGIgDAfIgEARQgBAJgDAIQgCAHgFAIQAIAGAEAJQAGANgBANQAAALgJATQgHAOgTAhIggA3QgWAmgXAlIgrBCQAKgJALgDQAXgGATAOQATAPAAAYQAAAKgFAMIAAABIABABQAMAKAEAOIAFgHQATgVAXgBQARgCAQAKIAIgBQAVgCARAQQAQAQgBAVQAAALgIATQADAKgCAMQgCANgLAWQgLATgKAMIAAACQgNAvAAAoIABAmIgCAPIACAMIAOArQAFATADAeQADAWgEANIgBAEIAKADQAOAHAIAMQAHAMAAAPQAAAPgIAMQgNATgnAKQgwAMgggGQgKgBgPgFQgRgFgLgGQgNgIgOgPIgCgBQgFgBgMAFQg/AYg8gQQgfgIgZgTQgSgNgNgQQgZBDgJAiQgIAegFAmQgDDMAIDVIABAMQADAbAAAOQgBAagNAQQgEAFgFAEIgEAGQgOAQgVAIQgRAGgSAAIgIgBg");
	var mask_1_graphics_16 = new cjs.Graphics().p("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");
	var mask_1_graphics_17 = new cjs.Graphics().p("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");
	var mask_1_graphics_18 = new cjs.Graphics().p("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");
	var mask_1_graphics_19 = new cjs.Graphics().p("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");
	var mask_1_graphics_20 = new cjs.Graphics().p("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");
	var mask_1_graphics_21 = new cjs.Graphics().p("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");
	var mask_1_graphics_22 = new cjs.Graphics().p("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");
	var mask_1_graphics_23 = new cjs.Graphics().p("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");
	var mask_1_graphics_24 = new cjs.Graphics().p("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");
	var mask_1_graphics_25 = new cjs.Graphics().p("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");
	var mask_1_graphics_26 = new cjs.Graphics().p("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");
	var mask_1_graphics_27 = new cjs.Graphics().p("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");
	var mask_1_graphics_28 = new cjs.Graphics().p("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");
	var mask_1_graphics_29 = new cjs.Graphics().p("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");
	var mask_1_graphics_30 = new cjs.Graphics().p("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");
	var mask_1_graphics_31 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:43.4959,y:123.372}).wait(1).to({graphics:mask_1_graphics_2,x:88.2828,y:139.3625}).wait(1).to({graphics:mask_1_graphics_3,x:92.9009,y:139.3625}).wait(1).to({graphics:mask_1_graphics_4,x:95.1344,y:139.3625}).wait(1).to({graphics:mask_1_graphics_5,x:106.3388,y:139.3625}).wait(1).to({graphics:mask_1_graphics_6,x:106.3388,y:139.3625}).wait(1).to({graphics:mask_1_graphics_7,x:106.3388,y:139.3625}).wait(1).to({graphics:mask_1_graphics_8,x:121.6023,y:139.3625}).wait(1).to({graphics:mask_1_graphics_9,x:135.3568,y:139.3625}).wait(1).to({graphics:mask_1_graphics_10,x:138.1167,y:139.3625}).wait(1).to({graphics:mask_1_graphics_11,x:165.6056,y:139.3625}).wait(1).to({graphics:mask_1_graphics_12,x:165.6056,y:139.3625}).wait(1).to({graphics:mask_1_graphics_13,x:165.6056,y:139.3625}).wait(1).to({graphics:mask_1_graphics_14,x:165.6056,y:139.3625}).wait(1).to({graphics:mask_1_graphics_15,x:165.6056,y:139.3625}).wait(1).to({graphics:mask_1_graphics_16,x:179.675,y:139.3625}).wait(1).to({graphics:mask_1_graphics_17,x:179.675,y:139.3625}).wait(1).to({graphics:mask_1_graphics_18,x:191.1,y:139.3625}).wait(1).to({graphics:mask_1_graphics_19,x:198.435,y:139.3625}).wait(1).to({graphics:mask_1_graphics_20,x:198.435,y:181.1511}).wait(1).to({graphics:mask_1_graphics_21,x:198.435,y:181.85}).wait(1).to({graphics:mask_1_graphics_22,x:198.435,y:183.3883}).wait(1).to({graphics:mask_1_graphics_23,x:198.435,y:183.3883}).wait(1).to({graphics:mask_1_graphics_24,x:198.435,y:183.3883}).wait(1).to({graphics:mask_1_graphics_25,x:198.435,y:212.0635}).wait(1).to({graphics:mask_1_graphics_26,x:198.435,y:212.0635}).wait(1).to({graphics:mask_1_graphics_27,x:198.435,y:212.0635}).wait(1).to({graphics:mask_1_graphics_28,x:198.435,y:212.0635}).wait(1).to({graphics:mask_1_graphics_29,x:198.435,y:212.0635}).wait(1).to({graphics:mask_1_graphics_30,x:198.435,y:212.0635}).wait(1).to({graphics:mask_1_graphics_31,x:198.435,y:212.0635}).wait(329));

	// Frame_1___So_Much_More
	this.instance_18 = new lib.Frame1SoMuchMore();
	this.instance_18.setTransform(18,59);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({_off:true},132).wait(227));

	// Frame_1___Tan_Slanted_Box
	this.instance_19 = new lib.Frame1TanSlantedBox_1();
	this.instance_19.setTransform(-233,222);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:226},24,cjs.Ease.cubicOut).to({_off:true},109).wait(227));

	// Frame_1___Gradient_Below_Type
	this.instance_20 = new lib.Frame1GradientBelowType_1();
	this.instance_20.setTransform(269,512);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},133).wait(227));

	// Image_1
	this.instance_21 = new lib.Image1();
	this.instance_21.setTransform(204.75,462.7,0.7683,0.7682,0,0,0,1.6,2.8);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:1.1,regY:1.1,scaleX:0.8261,scaleY:0.826,x:276.6,y:462.3},132).to({_off:true},1).wait(227));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-224,375.6,1504.2,667.9999999999999);
// library properties:
lib.properties = {
	id: '25480985BBC54EECABDEDCBB3F4975A5',
	width: 768,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SleepSavor_768x1024_atlas_1.png?1616619531037", id:"SleepSavor_768x1024_atlas_1"},
		{src:"images/SleepSavor_768x1024_atlas_2.png?1616619531037", id:"SleepSavor_768x1024_atlas_2"},
		{src:"images/SleepSavor_768x1024_atlas_3.png?1616619531037", id:"SleepSavor_768x1024_atlas_3"},
		{src:"images/SleepSavor_768x1024_atlas_4.png?1616619531038", id:"SleepSavor_768x1024_atlas_4"},
		{src:"images/SleepSavor_768x1024_atlas_5.png?1616619531038", id:"SleepSavor_768x1024_atlas_5"}
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
an.compositions['25480985BBC54EECABDEDCBB3F4975A5'] = {
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