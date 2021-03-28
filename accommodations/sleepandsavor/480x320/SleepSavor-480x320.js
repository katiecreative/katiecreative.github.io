(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SleepSavor_480x320_atlas_1", frames: [[0,192,1350,190],[0,576,1171,190],[0,384,1350,190],[0,768,1171,190],[0,0,1351,190],[1644,170,302,136],[1353,0,480,168],[1644,415,298,77],[1173,576,351,320],[1644,308,267,105],[1352,192,290,320],[1835,0,168,108],[1913,308,121,93]]},
		{name:"SleepSavor_480x320_atlas_2", frames: [[0,1200,1351,190],[0,1392,1351,190],[0,1584,1351,190],[0,1776,1351,190],[993,0,904,598],[0,0,991,600],[993,600,904,598]]}
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



(lib.CachedBmp_105 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BottomTanSlantedBox = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Frame1BlackSlantedBox = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowType = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Frame1SoMuchMore = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Frame2GradientBelowType = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Frame3BookLINKarea = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Frame1600H = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frame2600H = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Frame3600H = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.TSLogoWhite = function() {
	this.initialize(ss["SleepSavor_480x320_atlas_1"]);
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
	this.instance.setTransform(-495.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image02, new cjs.Rectangle(-495.5,-300,991,600), null);


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
	this.instance.setTransform(303.5,-200.75,0.6715,0.6714,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image01, new cjs.Rectangle(-303.5,-200.7,607,401.5), null);


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
	this.shape.graphics.f("#000000").s().p("EglfAZAMAAAgx/MBK/AAAMAAAAx/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-160,480,320);


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

}).prototype = getMCSymbolPrototype(lib.Frame2GradientBelowType_1, new cjs.Rectangle(0,0,290,320), null);


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
	this.instance = new lib.CachedBmp_105();
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
	this.instance = new lib.CachedBmp_104();
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
	this.instance = new lib.CachedBmp_103();
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
	this.instance = new lib.CachedBmp_102();
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
	this.instance = new lib.CachedBmp_101();
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
	this.instance = new lib.CachedBmp_100();
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
	this.instance = new lib.CachedBmp_99();
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
	this.instance = new lib.CachedBmp_98();
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
	this.instance = new lib.CachedBmp_97();
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
	this.instance.setTransform(-84,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BookLINKarea_1, new cjs.Rectangle(-84,-54,168,108), null);


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
	this.instance = new lib.CachedBmp_96();
	this.instance.setTransform(-75.4,-45.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BOOKTODAY, new cjs.Rectangle(-75.4,-45.3,151,68), null);


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
	this.instance.setTransform(-149,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1BlackSlantedBox_1, new cjs.Rectangle(-149,-38.5,298,77), null);


// stage content:
(lib.SleepSavor480x320 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EglfgY/MBK/AAAMAAAAx/MhK/AAAg");
	this.shape.setTransform(240,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Button
	this.button_link = new lib.Button();
	this.button_link.name = "button_link";
	this.button_link.setTransform(240,160);
	new cjs.ButtonHelper(this.button_link, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_link).wait(360));

	// TS_Logo_White
	this.instance = new lib.TSLogoWhite();
	this.instance.setTransform(343,211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Bottom_Tan_Slanted_Box
	this.instance_1 = new lib.BottomTanSlantedBox();
	this.instance_1.setTransform(0,152);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_289 = new cjs.Graphics().p("AssGsIAAtXIZZACIgBNVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_graphics_289,x:109.525,y:175.95}).wait(71));

	// Shine
	this.instance_2 = new lib.buttonshine_mc();
	this.instance_2.setTransform(-24.8,175.55,0.2844,0.2109,0,0,0,-13.3,12.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).to({regX:-5.9,regY:5.4,scaleX:0.5993,scaleY:0.4443,x:28.45,y:176.65,alpha:0.1992},8).to({regX:8.1,x:99.1,alpha:0.6016},9).to({regX:10.3,x:169.15,alpha:0.1992},9).to({regX:15.2,x:288.1,alpha:0},9).to({_off:true},1).wait(35));

	// Frame_3___BOOK_TODAY
	this.instance_3 = new lib.Frame3BOOKTODAY();
	this.instance_3.setTransform(-102.55,177.9,0.9999,0.9996,0,0,0,0.5,-9.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(264).to({_off:false},0).to({regX:0,regY:-9.7,scaleX:1,scaleY:1,x:110,y:177.7},25,cjs.Ease.cubicOut).wait(71));

	// Frame_3___Book_LINK_area
	this.instance_4 = new lib.Frame3BookLINKarea_1();
	this.instance_4.setTransform(-99.05,181.25,1.1147,0.9996,0,0,0,-0.6,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(264).to({_off:false},0).to({regX:1.3,regY:0,scaleX:1.1148,scaleY:1,x:115.65,y:181},25,cjs.Ease.cubicOut).wait(71));

	// Frame_3___Experience_Turning_Stone
	this.instance_5 = new lib.Frame3ExperienceTurningStone();
	this.instance_5.setTransform(194.15,36.85,0.4963,0.4967,0,0,0,1.9,-106.3);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(256).to({_off:false},0).to({regY:-106.2,y:79,alpha:1},25,cjs.Ease.cubicOut).wait(79));

	// Turning_Stone
	this.instance_6 = new lib.TurningStone();
	this.instance_6.setTransform(194.15,57,0.4963,0.4967,0,0,0,1.9,-143.8);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(252).to({_off:false},0).to({regY:-144.1,y:98.9,alpha:1},25,cjs.Ease.cubicOut).wait(83));

	// Image_3
	this.instance_7 = new lib.Image3();
	this.instance_7.setTransform(292.1,199.8,0.7245,0.7245,0,0,0,0.8,0.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(239).to({_off:false},0).to({regY:0.9,scaleX:0.7331,scaleY:0.7332,x:295.8,y:197.45,alpha:1},13).to({regX:0.7,regY:0.8,scaleX:0.7234,scaleY:0.7234,x:325.75,y:182.65},107).wait(1));

	// Credit
	this.instance_8 = new lib.Credit();
	this.instance_8.setTransform(52.45,206.35,0.4902,0.4865,0,0,0,2.6,-150.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(173).to({_off:false},0).to({regX:4.3,x:195.25},25,cjs.Ease.cubicOut).to({_off:true},55).wait(107));

	// Resort
	this.instance_9 = new lib.Resort();
	this.instance_9.setTransform(-35.1,166.7,0.4902,0.4865,0,0,0,-7.9,-151);
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(165).to({_off:false},0).to({regX:4,x:195.1},25,cjs.Ease.cubicOut).to({_off:true},63).wait(107));

	// Plus
	this.instance_10 = new lib.Symbol();
	this.instance_10.setTransform(37.3,124.4,0.0015,0.0105,0,0,0,0,-147.2);
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(157).to({_off:false},0).to({regX:1.6,regY:-147.1,scaleX:0.4931,scaleY:0.4893,x:38.1,y:53.95},24,cjs.Ease.elasticOut).to({_off:true},72).wait(107));

	// Accomodations
	this.instance_11 = new lib.Accommodations();
	this.instance_11.setTransform(-142.8,88.65,0.4896,0.4855,0,0,0,-8.1,-151.7);
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(140).to({_off:false},0).to({regX:4.3,x:194.6},25,cjs.Ease.cubicOut).to({_off:true},88).wait(107));

	// Frame_2___Pkg_Includes_Text
	this.instance_12 = new lib.Frame2PkgIncludesText();
	this.instance_12.setTransform(-12.85,123.5,0.4902,0.4865,0,0,0,-6.8,-0.9);
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(132).to({_off:false},0).to({regX:4,x:195.1},25,cjs.Ease.cubicOut).to({_off:true},96).wait(107));

	// Frame_2___Gradient_Below_Type
	this.instance_13 = new lib.Frame2GradientBelowType_1();
	this.instance_13.setTransform(145,160,1,1,0,0,0,145,160);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(119).to({_off:false},0).to({alpha:1},13).to({_off:true},121).wait(107));

	// Layer_2
	this.instance_14 = new lib.Image02();
	this.instance_14.setTransform(293.5,129,0.7416,0.7415,0,0,0,1.3,1.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(119).to({_off:false},0).to({regX:1.4,scaleX:0.7345,scaleY:0.7344,x:296.7,y:128.55,alpha:1},13).to({regX:0.7,regY:0.9,scaleX:0.669,scaleY:0.669,x:325.45,y:124.95},120).to({_off:true},1).wait(107));

	// Getaway
	this.instance_15 = new lib.Getaway();
	this.instance_15.setTransform(182.3,234.1,0.4851,0.4856,0,0,0,2.7,-86.4);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(28).to({_off:false},0).to({regY:-87.1,y:197.35,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},80).wait(227));

	// Frame_1___Than_A_Getaway
	this.instance_16 = new lib.Frame1ThanAGetaway();
	this.instance_16.setTransform(182.3,194.5,0.4851,0.4856,0,0,0,2.7,-87.3);
	this.instance_16.alpha = 0;
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({regY:-86.7,y:158.1,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},84).wait(227));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("ACwE3QgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQANAAAHAMQAHALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAagUALgNQAYgbAFgjQgngCgggaQgQgNgEgMQgGgMACgUQACgQAIgGQAGgGAOABIAVAFQAIABAWABQAUACAKACQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgJATgUAUQgLAMgaAVIg5AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACIgDAAQgNAAgLgNg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Ah4FLQgNgEgEgOQgDgKACgPQAFgfAYgfQASgYAfgbQAdgZAdgWQAGgFADgEQACgEADgKQAGgNAXgMQAbgOA2gWIBngnQAcgJASgEQAYgGATACIACgCQAGgGAOACIAVAEQAIABAWABQAUACAKADQAYAIARAaQAUAhABAxQABAbgKANQgGAIgMAEQgKACgJgGQgJAUgUATQgLAMgaAVIg5AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgIQgEAGgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgPAOgOQAKgIATgLIBhg6QARgKAJAAQANAAAHAMQAHALgEAKQgDAHgHAGIgPAJIhIAqQAKAEAHAIQAFgKAPgBIAMgBIALgBQALgCAQgNQAagUALgNQAYgbAFgjQgegCgagQQgKAEgSADQhyASh0BIQgcAQgTAQIgbAZIgaAYIghAbQgVAQgLANIgJAIQgFAGgFADQgIAGgJAAIgGgBg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AEBJFQgHgCgEgGQgFgFgBgHQAAgIADgHQgFADgFAAQgNACgLgIQgLgHgBgLQAAgIAGgKIALgQQANgVgBgbQgBgagOgWQgMgSgZgUQgigbgggNIgcgJIgdgJQgzgQgqggQgsghgegrQgRgagGgVQgGgWADgkQABgMACgIIABgNQAFgfAYgeQASgXAfgcQAdgZAdgWQAGgFADgEQACgEADgKQAGgNAXgMQAbgOA2gVIBngnQAcgKASgEQAYgHATACIACgCQAGgGAOACIAVAEQAIABAWACQAUABAKAEQAYAIARAbQAUAhABAwQABAbgKAOQgGAIgMADQgKACgJgGQgJAUgUATQgLAMgaAVIg5AuQgHAGgDAEIgDAHIgDAHQgGALgOACQgNABgIgIQgEAGgHACQgHADgGgBQgIgDgEAAIgHABIgHACQgOACgNgPQgHgHgEgMQgEgHgFgVQgFgUACgMQADgPAOgOQAKgIATgLIBhg6QARgKAJAAQANABAHALQAHALgEALQgDAGgHAHIgPAIIhIAqQAKAEAHAIQAFgJAPgCIAMAAIALgBQALgDAQgNQAagTALgNQAYgcAFgjQgegBgagQQgKADgSADQhyATh0BHQgcARgTAQIgbAYIgaAYIghAbQgUAPgLALQAHACAFAHQAEAEADAIIAFANQAFAMAPAWQAQAWALAMQALAMATAOIAjAVICKBNIAhAVQASAMANANQAMANAMAUQAaAoABAeQACAUgJAVQAGAAAFADQAHAEADAHQADAGAAAJQABAGgBAGQgCAMgJANQgLARgSAQQgJAJgIACIgHABIgIgCg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjJKPQgJgBgGgDQgJgHgBgMQAAgLAJgIQAGgFAKgCIADgBIgBgHQABgLAGgHIAIgGIAGgGQAHgIADgDQAIgGAUABIBCADQAYACANgCQAXgBAZgLQARgHAdgPICNhJQABgHAEgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgdgJQgzgQgqggQgsghgegrQgRgagGgVQgGgWADgkQABgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAGgFADgEQACgEADgKQAGgNAXgNQAbgNA2gWIBngnQAcgKASgEQAYgGATACIACgCQAGgGAOABIAVAFQAIABAWABQAUACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgJATgUAUQgLAMgaAVIg5AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQANAAAHAMQAHALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAagUALgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh0BIQgcAQgTAQIgbAZIgaAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAFAOQAFALAPAXQAQAWALALQALANATANIAjAVICKBOIAhAVQASAMANAMQAMAOAMATQAaApABAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgTAAQgdABg+gBQg7AAggABIgGAAIgKgBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjJKPQgJgBgGgDQgFgEgCgGIgXgDQgZgDgMgDQgUgFgQgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgaAOQgOAIggAQQgNAHgBAIQgBAFAGAKIASAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACANgCQAXgBAZgLQARgHAdgPICNhJQABgHAEgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgdgJQgzgQgqggQgsghgegrQgRgagGgVQgGgWADgkQABgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAGgFADgEQACgEADgKQAGgNAXgNQAbgNA2gWIBngnQAcgKASgEQAYgGATACIACgCQAGgGAOABIAVAFQAIABAWABQAUACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgJATgUAUQgLAMgaAVIg5AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQANAAAHAMQAHALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAagUALgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh0BIQgcAQgTAQIgbAZIgaAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAFAOQAFALAPAXQAQAWALALQALANATANIAjAVICKBOIAhAVQASAMANAMQAMAOAMATQAaApABAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgTAAQgdABg+gBQg7AAggABIgGAAIgKgBg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjJKPQgJgBgGgDQgFgEgCgGIgXgDQgZgDgMgDQgUgFgQgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgaAOQgOAIggAQQgNAHgBAIQgBAFAGAKIASAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACANgCQAXgBAZgLQARgHAdgPICNhJQABgHAEgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgdgJQgzgQgqggQgsghgegrQgRgagGgVQgGgWADgkQABgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAGgFADgEQACgEADgKQAGgNAXgNQAbgNA2gWIBngnQAcgKASgEQAYgGATACIACgCQAGgGAOABIAVAFQAIABAWABQAUACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgJATgUAUQgLAMgaAVIg5AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQANAAAHAMQAHALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAagUALgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh0BIQgcAQgTAQIgbAZIgaAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAFAOQAFALAPAXQAQAWALALQALANATANIAjAVICKBOIAhAVQASAMANAMQAMAOAMATQAaApABAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgTAAQgdABg+gBQg7AAggABIgGAAIgKgBgAFGCnQgGgCgIgHQgGgGgCgGQgDgGAAgJQAAgaANgYIAHgMQAGgKAFgGQAHgIAIgBQAFgBAGABQAFACAEAFQADADABAGQABAFgBAGQgBAEgFAGIgMAQQgFAKgCAIQAEgCAKgIIATgPQAMgKAJAAQAFgBAGAEQAEACADAEQADAFAAAFQABAGgDAFQgCAFgHAFIgMAIIgLAKIgLAKQgOAKgTAHQgIACgFAAIgEAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjJKPQgJgBgGgDQgFgEgCgGIgXgDQgZgDgMgDQgUgFgQgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgaAOQgOAIggAQQgNAHgBAIQgBAFAGAKIASAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACANgCQAXgBAZgLQARgHAdgPICNhJQABgHAEgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgdgJQgzgQgqggQgsghgegrQgRgagGgVQgGgWADgkQABgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAGgFADgEQACgEADgKQAGgNAXgNQAbgNA2gWIBngnQAcgKASgEQAYgGATACIACgCQAGgGAOABIAVAFQAIABAWABQAUACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgJATgUAUQgLAMgaAVIg5AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQANAAAHAMQAHALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAagUALgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh0BIQgcAQgTAQIgbAZIgaAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAFAOQAFALAPAXQAQAWALALQALANATANIAjAVICKBOIAhAVQASAMANAMQAMAOAMATQAaApABAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgTAAQgdABg+gBQg7AAggABIgGAAIgKgBgAEHDuQgEgDgCgGQgCgFABgFQABgFADgFQADgEAFgCIAHgCIAIgCQAEgCAEgFIAGgJIARgYIgCgBQgGgGgCgGQgDgGAAgJQAAgaANgYIAHgMQAGgKAFgGQAHgIAIgBQAFgBAGABQAFACAEAFIACABQAHgEAIADQAKACAEALQACAFgBALIABAAQAFgBAGAEQAEACADAEQADAFAAAFQABAGgDAFQgCAFgHAFIgMAIIgLAKIgJAIIgGAGIgPATIgOAVIgQAVQgIAMgIAHQgLAIgOACIgGAAQgKAAgHgEgAFhBhQgFAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjJKPQgJgBgGgDQgFgEgCgGIgXgDQgZgDgMgDQgUgFgQgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgaAOQgOAIggAQQgNAHgBAIQgBAFAGAKIASAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACANgCQAXgBAZgLQARgHAdgPICNhJQABgHAEgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgdgJQgzgQgqggQgsghgegrQgRgagGgVQgGgWADgkQABgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAGgFADgEQACgEADgKQAGgNAXgNQAbgNA2gWIBngnQAcgKASgEQAYgGATACIACgCQAGgGAOABIAVAFQAIABAWABQAUACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgJATgUAUQgLAMgaAVIg5AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQANAAAHAMQAHALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAagUALgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh0BIQgcAQgTAQIgbAZIgaAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAFAOQAFALAPAXQAQAWALALQALANATANIAjAVICKBOIAhAVQASAMANAMQAMAOAMATQAaApABAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgTAAQgdABg+gBQg7AAggABIgGAAIgKgBgAEHDuIgEgGIgDgBQgGgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAjgmQAMgNAJgBQAIgBAHAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAIADQAKACAEALQACAFgBALIABAAQAFgBAGAEQAEACADAEQADAFAAAFQABAGgDAFQgCAFgHAFIgMAIIgLAKIgJAIIgGAGIgPATIgOAVIgQAVQgIAMgIAHQgLAIgOACIgGAAQgKAAgHgEgAErCcQgDAHgDAOIgDAIIgCAHIAAADIADgDIAGgJIARgYIgCgBQgGgGgCgGIAAAAIgFAKgAFhBhQgFAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AkCKPQgJgBgGgDQgFgEgDgGIgWgDQgZgDgMgDQgVgFgPgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAYgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAIACQAJABAFAHQAGAIAAAIQAAANgLATQgXAogxAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIATAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAcgPICMhJQABgHAFgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgdgJQgygQgsggQgrghgegrQgRgagGgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFADgEQACgEADgKQAFgNAYgNQAZgNA3gWIBngnQAcgKASgEQAXgGAUACIACgCQAGgGAOABIAVAFQAIABAWABQATACALADQAYAJAQAaQAVAhABAxQABAbgKANQgGAIgMADQgLADgIgGQgKATgTAUQgMAMgZAVIg6AvQgGAGgDAEIgEAHIgDAHQgFALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QAQgKAKAAQANAAAGAMQAIALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh0BIQgcAQgSAQIgbAZIgbAYIghAbQgUAPgMAMQAIACAFAGQADAFAEAGIAFAOQAFALAPAXQAQAWALALQALANAUANIAiAVICJBOIAiAVQASAMAMAMQANAOAMATQAZApACAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgCAHQgCAMgIANQgIANgPANQACALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgUAGgZABQgCAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAG8EwQgJgBgFgGQgFgFAAgKIABgQIAIgxIAMhGQAIgnAJgeIAJgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAJAEACAIQABAFgBANIgHAjIgJAqIgKAhIgLAgQgKAhgIA0IgNBXQgDAQgGAGQgFAFgJAAIgBAAgADODuIgEgGIgDgBQgGgDgEgHQgCgEAAgGIABgMIABgWQAAgkAMgcQANggAjgmQAMgNAIgBQAJgBAHAFQAGAEADAGQADAAADABQAGACAEAFIACABQAGgEAJADQAKACAEALQACAFgBALIABAAQAFgBAGAEQAEACADAEQADAFAAAFQABAGgDAFQgCAFgHAFIgMAIIgLAKIgKAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgOACIgGAAQgLAAgGgEgADyCcQgDAHgDAOIgDAIIgCAHIAAADIADgDIAFgJIASgYIgCgBQgGgGgCgGIAAAAIgFAKgAEoBhQgFAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AlaKPQgIgBgHgDQgFgEgCgGIgWgDQgagDgMgDQgUgFgQgIQgZgMgagcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAKAGAAAKQAxgeBRgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgZAOQgOAIggAQQgNAHgCAIQgBAFAGAKIASAcQALAOANAIQALAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACAOgCQAWgBAbgLQARgHAcgPICMhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgYgUQghgcgggMIgdgJIgdgJQgzgQgrggQgrghgegrQgSgagGgVQgGgWADgkQABgLACgIIABgNQAGgfAXgfQASgYAfgbQAdgZAegWQAGgFADgEQACgEAEgKQAFgNAXgNQAbgNA2gWIBngnQAbgKASgEQAYgGATACIACgCQAHgGANABIAVAFQAIABAXABQATACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgDAEIgDAHIgDAHQgGALgNABQgOACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAKAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhJAqQAKADAHAJQAGgKAOgBIAMgBIAMgBQALgCAQgNQAZgUALgNQAYgbAGgjQgfgCgagQQgKADgSAEQhyAShzBIQgbAQgUAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAGAOQAFALAPAXQAPAWALALQAMANATANIAjAVICJBOIAhAVQASAMANAMQANAOALATQAaApABAeQACAUgIAUQAFABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgNALQgdAYgqAWQgaAOgyAWQgfAOgRAEQgVAGgYABQgDAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAFkEwQgJgBgFgGQgEgFgBgKIACgQIAHgxIAMhGQAIgnAKgeIAJgbIAHgbQADgLADgVQAEgWADgLQAEgVAMgFQAHgEAJAEQAJAEACAIQACAFgCANIgHAjIgJAqIAAACQAkgrAZgsQAJgOACgJQABgOACgFQACgGAEgGIAKgLIAOgTIAOgTQAOgQAPAAQAFAAAGADIAKAEIAKADQAFABADADQAHAIgDALQgCAIgJAIQgHAHgSANQgQALgIAIQgHAIgLASIgyBQIgWAoIgJAWIgIAXQgEALgPAcQgNAYgFAPQgFANgDAFQgEAJgIADQgFADgFgBIgJA0QgDAQgGAGQgFAFgIAAIgCAAgAB2DuIgEgGIgCgBQgHgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAkgmQALgNAJgBQAJgBAGAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAJADQAJACAEALQACAFgBALIACAAQAFgBAFAEQAEACADAEQADAFABAFQAAAGgCAFQgDAFgHAFIgMAIIgLAKIgJAIIgFAGIgQATIgOAVIgQAVQgHAMgJAHQgLAIgOACIgGAAQgKAAgHgEgACaCcQgDAHgDAOIgCAIIgCAHIgBADIADgDIAGgJIARgYIgCgBQgFgGgDgGIAAAAIgFAKgADRBhQgGAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AlaKPQgIgBgHgDQgFgEgCgGIgWgDQgagDgMgDQgUgFgQgIQgZgMgagcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAKAGAAAKQAxgeBRgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgZAOQgOAIggAQQgNAHgCAIQgBAFAGAKIASAcQALAOANAIQALAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACAOgCQAWgBAbgLQARgHAcgPICMhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgYgUQghgcgggMIgdgJIgdgJQgzgQgrggQgrghgegrQgSgagGgVQgGgWADgkQABgLACgIIABgNQAGgfAXgfQASgYAfgbQAdgZAegWQAGgFADgEQACgEAEgKQAFgNAXgNQAbgNA2gWIBngnQAbgKASgEQAYgGATACIACgCQAHgGANABIAVAFQAIABAXABQATACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgDAEIgDAHIgDAHQgGALgNABQgOACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAKAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhJAqQAKADAHAJQAGgKAOgBIAMgBIAMgBQALgCAQgNQAZgUALgNQAYgbAGgjQgfgCgagQQgKADgSAEQhyAShzBIQgbAQgUAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAGAOQAFALAPAXQAPAWALALQAMANATANIAjAVICJBOIAhAVQASAMANAMQANAOALATQAaApABAeQACAUgIAUQAFABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgNALQgdAYgqAWQgaAOgyAWQgfAOgRAEQgVAGgYABQgDAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAH6FJQgHgBgFgFQgFgGgBgIIAAgQQAHhkARhJIAGgcIAGgcIADgeQACgKAEgPIAHgXQAEgPAGgbIgFAGIgyBQIgWAoIgJAWIgIAXQgEALgPAcQgNAYgFAPQgFANgDAFQgEAJgIADQgFADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgEgFgBgKIACgQIAHgxIAMhGQAIgnAKgeIAJgbIAHgbQADgLADgVQAEgWADgLQAEgVAMgFQAHgEAJAEQAJAEACAIQACAFgCANIgHAjIgJAqIAAACQAkgrAZgsQAJgOACgJQABgOACgFQACgGAEgGIAKgLIAOgTIAOgTQAOgQAPAAQAFAAAGADIAKAEIAKADQAFABADADQAHAIgDALQgCAIgJAIIgIAIIgKA0IgRBVQgKAvgLAmQAHABAFAGQAFAGABAHQABAHgCAIIgEAPQgWBCgOBDIgFAQQgDAIgFAEQgFADgGAAIgDAAgAB2DuIgEgGIgCgBQgHgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAkgmQALgNAJgBQAJgBAGAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAJADQAJACAEALQACAFgBALIACAAQAFgBAFAEQAEACADAEQADAFABAFQAAAGgCAFQgDAFgHAFIgMAIIgLAKIgJAIIgFAGIgQATIgOAVIgQAVQgHAMgJAHQgLAIgOACIgGAAQgKAAgHgEgACaCcQgDAHgDAOIgCAIIgCAHIgBADIADgDIAGgJIARgYIgCgBQgFgGgDgGIAAAAIgFAKgADRBhQgGAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AnhKPQgJgBgGgDQgFgEgDgGIgWgDQgZgDgMgDQgUgFgQgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAYgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAJACQAIABAFAHQAGAIAAAIQAAANgLATQgXAogxAiQgSAOgaAOQgOAIggAQQgNAHgBAIQgBAFAGAKIASAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACANgCQAXgBAagLQARgHAdgPICMhJQACgHAEgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgrggQgsghgegrQgRgagGgVQgGgWACgkQACgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFADgEQACgEADgKQAFgNAYgNQAagNA3gWIBngnQAcgKASgEQAWgGAUACIACgCQAGgGAOABIAVAFQAIABAWABQATACALADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgKATgTAUQgLAMgaAVIg6AvQgGAGgDAEIgDAHIgEAHQgFALgNABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBgg5QARgKAJAAQANAAAGAMQAIALgEAKQgDAHgHAGIgPAJIhHAqQAKADAHAJQAFgKAOgBIAMgBIALgBQALgCAQgNQAagUALgNQAYgbAFgjQgegCgagQQgKADgSAEQhxASh0BIQgcAQgTAQIgbAZIgbAYIghAbQgUAPgMAMQAIACAFAGQADAFAEAGIAFAOQAFALAPAXQAQAWALALQAMANATANIAjAVICJBOIAiAVQASAMAMAMQANAOALATQAZApACAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgDAMgIANQgIANgOANQABALgGAMQgFAJgNALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAFzFJQgIgBgEgFQgFgGgCgIIAAgQQAIhkARhJIAGgcIAGgcIADgeQACgKAEgPIAHgXQAEgPAFgbIgEAGIgyBQIgWAoIgJAWIgIAXQgFALgPAcQgMAYgGAPQgEANgDAFQgFAJgHADQgFADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgFgFAAgKIABgQIAIgxIAMhGQAIgnAJgeIAJgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAJAEACAIQABAFgBANIgHAjIgJAqIAAACQAjgrAagsQAIgOACgJQABgOADgFQACgGAEgGIAKgLIAOgTIANgTQAOgQAPAAQAFAAAHADIAKAEIAKADQAFABADADQAHAIgDALQgCAIgKAIIgHAIIgKA0IgNBEIAFgOIAJgWQAGgOALgSIAUggIAXgpQAIgOAPgdQAgg5AZgeQAlguAsgTQAagNAPAKIAIAFIAGAAIAHAAQAIACAFAGQAFAHgCAIQgCAJgIAHQgGAEgLAGIhCAeQgQAHgGAEQgMAGgIAHQgGAGgHAKIgKARIhLCCQgTAigJATQgFALgJAWIgNAiIgVAtIgJAOIgEAFIACAGQABAHgCAIIgFAPQgVBCgOBDIgFAQQgDAIgGAEQgFADgFAAIgDAAgAgQDuIgEgGIgDgBQgGgDgDgHQgDgEAAgGIABgMIABgWQABgkALgcQANggAigmQAMgNAIgBQAJgBAHAFQAGAEADAGQADAAADABQAGACAEAFIACABQAGgEAJADQAKACAEALQACAFgBALIABAAQAFgBAGAEQAEACADAEQADAFAAAFQABAGgDAFQgCAFgHAFIgMAIIgLAKIgJAIIgGAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgOACIgGAAQgJAAgHgEgAATCcQgDAHgDAOIgDAIIgCAHIAAADIADgDIAGgJIARgYIgCgBQgGgGgCgGIAAAAIgFAKgABJBhQgFAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AnkKPQgIgBgGgDQgFgEgDgGIgWgDQgZgDgNgDQgUgFgPgIQgagMgZgcQgcgdgQgjQgQgmABglQACghAQgfQAPgeAZgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAOgIAJACQAIABAGAHQAFAIAAAIQABANgMATQgXAogwAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIATADQAMADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAEgIIAMgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgSgagFgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFACgEQADgEADgKQAFgNAXgNQAbgNA3gWIBngnQAbgKASgEQAXgGAUACIABgCQAHgGANABIAWAFQAIABAWABQATACAKADQAZAJAQAaQAVAhABAxQAAAbgJANQgHAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgCAEIgEAHIgDAHQgGALgMABQgNACgJgJQgDAHgHACQgHACgGgBQgJgCgEAAIgGABIgHACQgPACgMgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBgg5QAQgKAKAAQAMAAAHAMQAHALgDAKQgDAHgIAGIgOAJIhHAqQAKADAHAJQAFgKAOgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAXgbAGgjQgegCgagQQgLADgSAEQhwASh1BIQgbAQgTAQIgcAZIgaAYIghAbQgUAPgMAMQAHACAGAGQADAFADAGIAGAOQAFALAPAXQAQAWAKALQAMANATANIAjAVICKBOIAiAVQASAMAMAMQANAOALATQAZApACAeQABAUgIAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgGAJgMALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgDADQgJAGgVAAQgcABg+gBQg8AAgfABIgHAAIgKgBgAFxFJQgIgBgEgFQgFgGgCgIIAAgQQAHhkARhJIAHgcIAFgcIAEgeQABgKAFgPIAHgXQAEgPAFgbIgFAGIgyBQIgVAoIgJAWIgIAXQgFALgPAcQgMAYgGAPQgEANgDAFQgFAJgIADQgEADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgFgFgBgKIACgQIAIgxIAMhGQAHgnAKgeIAJgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAIAEACAIQACAFgCANIgGAjIgJAqIgBACQAkgrAagsQAIgOACgJQABgOACgFQACgGAFgGIAKgLIAOgTIANgTQAOgQAPAAQAFAAAGADIALAEIAJADQAGABADADQAHAIgEALQgCAIgJAIIgIAIIgJA0IgNBEIAFgOIAIgWQAHgOALgSIAUggIAXgpQAIgOAPgdQAfg5AZgeQAlguAsgTQAbgNAPAKIAIAFIAGAAIAHAAIAFACQAEABAEAEQAFAEACAHQACALgFAQQgGATgOAUQgLAPgSAUQgHAHgGAEQgHAGgJgBQgEATgPAfQgRAjgFAPIgIAbIgHAaIgKAXIgKAWQgKAXgSAyIgFANQgEAGgEAEQgJAFgKgEQgKgEgCgJQgDgJAGgPQAYg/AMgcIAOggIAHgWIAFgWQAFgPAKgVIAQgiQAQglAJgkIgLAHQgNAGgHAHQgGAGgHAKIgKARIhLCCQgUAigIATQgGALgIAWIgNAiIgVAtIgJAOIgEAFIABAGQABAHgCAIIgEAPQgWBCgNBDIgFAQQgDAIgGAEQgFADgFAAIgDAAgAgSDuIgEgGIgDgBQgHgDgDgHQgCgEAAgGIABgMIABgWQAAgkAMgcQAMggAjgmQALgNAJgBQAJgBAHAFQAGAEACAGQAEAAADABQAFACAEAFIACABQAHgEAJADQAKACADALQACAFgBALIACAAQAFgBAFAEQAFACACAEQAEAFAAAFQABAGgDAFQgDAFgGAFIgNAIIgKAKIgKAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgPACIgEAAQgLAAgGgEgAARCcQgDAHgDAOIgDAIIgCAHIgBADIAEgDIAFgJIARgYIgBgBQgGgGgDgGIAAAAIgEAKgABHBhQgGAKgBAIIABAAQAEgKADgIg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AnkKPQgIgBgGgDQgFgEgDgGIgWgDQgZgDgNgDQgUgFgPgIQgagMgZgcQgcgdgQgjQgQgmABglQACghAQgfQAPgeAZgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAOgIAJACQAIABAGAHQAFAIAAAIQABANgMATQgXAogwAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIATADQAMADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAEgIIAMgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgSgagFgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFACgEQADgEADgKQAFgNAXgNQAbgNA3gWIBngnQAbgKASgEQAXgGAUACIABgCQAHgGANABIAWAFQAIABAWABQATACAKADQAZAJAQAaQAVAhABAxQAAAbgJANQgHAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgCAEIgEAHIgDAHQgGALgMABQgNACgJgJQgDAHgHACQgHACgGgBQgJgCgEAAIgGABIgHACQgPACgMgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBgg5QAQgKAKAAQAMAAAHAMQAHALgDAKQgDAHgIAGIgOAJIhHAqQAKADAHAJQAFgKAOgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAXgbAGgjQgegCgagQQgLADgSAEQhwASh1BIQgbAQgTAQIgcAZIgaAYIghAbQgUAPgMAMQAHACAGAGQADAFADAGIAGAOQAFALAPAXQAQAWAKALQAMANATANIAjAVICKBOIAiAVQASAMAMAMQANAOALATQAZApACAeQABAUgIAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgGAJgMALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgDADQgJAGgVAAQgcABg+gBQg8AAgfABIgHAAIgKgBgAHgJmQgNgCgKgTQgRgfgIgZQgLgfAAgdQAAgTAIgkQAPhMAJgoQAQg/ATgxQAMgdAZg2IAHgMIABAAIgBgDQgDgJAGgPQAYg/AMgcIAOggIAHgWIAFgWQAFgPAKgVIAQgiQAQglAJgkIgLAHQgNAGgHAHQgGAGgHAKIgKARIhLCCQgUAigIATQgGALgIAWIgNAiIgVAtIgJAOIgEAFIABAGQABAHgCAIIgEAPQgWBCgNBDIgFAQQgDAIgGAEQgGAEgHgBQgIgBgEgFQgFgGgCgIIAAgQQAHhkARhJIAHgcIAFgcIAEgeQABgKAFgPIAHgXQAEgPAFgbIgFAGIgyBQIgVAoIgJAWIgIAXQgFALgPAcQgMAYgGAPQgEANgDAFQgFAJgIADQgEADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgFgFgBgKIACgQIAIgxIAMhGQAHgnAKgeIAJgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAIAEACAIQACAFgCANIgGAjIgJAqIgBACQAkgrAagsQAIgOACgJQABgOACgFQACgGAFgGIAKgLIAOgTIANgTQAOgQAPAAQAFAAAGADIALAEIAJADQAGABADADQAHAIgEALQgCAIgJAIIgIAIIgJA0IgNBEIAFgOIAIgWQAHgOALgSIAUggIAXgpQAIgOAPgdQAfg5AZgeQAlguAsgTQAbgNAPAKIAIAFIAGAAIAHAAIAFACQAEABAEAEQAFAEACAHQACALgFAQQgGATgOAUQgLAPgSAUQgHAHgGAEQgHAGgJgBQgEATgPAfQgRAjgFAPIgIAbIgHAaIgKAXIgKAWQgKAXgSAyIgFANIgDAFQACAFgCAIQgBAHgFAKIgOAbIgFARIAAAOQADAogLAwQgHAfgSA3QAGAEACAKIgBARQgDAdAAAnIAABFQAAAUgBALQgCATgHAMQgDAIgGAFQgHAGgHAAIgBAAgAgSDuIgEgGIgDgBQgHgDgDgHQgCgEAAgGIABgMIABgWQAAgkAMgcQAMggAjgmQALgNAJgBQAJgBAHAFQAGAEACAGQAEAAADABQAFACAEAFIACABQAHgEAJADQAKACADALQACAFgBALIACAAQAFgBAFAEQAFACACAEQAEAFAAAFQABAGgDAFQgDAFgGAFIgNAIIgKAKIgKAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgPACIgEAAQgLAAgGgEgAARCcQgDAHgDAOIgDAIIgCAHIgBADIAEgDIAFgJIARgYIgBgBQgGgGgDgGIAAAAIgEAKgABHBhQgGAKgBAIIABAAQAEgKADgIg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AnkKPQgIgBgGgDQgFgEgDgGIgWgDQgZgDgNgDQgUgFgPgIQgagMgZgcQgcgdgQgjQgQgmABglQACghAQgfQAPgeAZgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAOgIAJACQAIABAGAHQAFAIAAAIQABANgMATQgXAogwAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIATADQAMADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAEgIIAMgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgSgagFgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFACgEQADgEADgKQAFgNAXgNQAbgNA3gWIBngnQAbgKASgEQAXgGAUACIABgCQAHgGANABIAWAFQAIABAWABQATACAKADQAZAJAQAaQAVAhABAxQAAAbgJANQgHAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgCAEIgEAHIgDAHQgGALgMABQgNACgJgJQgDAHgHACQgHACgGgBQgJgCgEAAIgGABIgHACQgPACgMgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBgg5QAQgKAKAAQAMAAAHAMQAHALgDAKQgDAHgIAGIgOAJIhHAqQAKADAHAJQAFgKAOgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAXgbAGgjQgegCgagQQgLADgSAEQhwASh1BIQgbAQgTAQIgcAZIgaAYIghAbQgUAPgMAMQAHACAGAGQADAFADAGIAGAOQAFALAPAXQAQAWAKALQAMANATANIAjAVICKBOIAiAVQASAMAMAMQANAOALATQAZApACAeQABAUgIAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgGAJgMALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgDADQgJAGgVAAQgcABg+gBQg8AAgfABIgHAAIgKgBgAHgJmQgNgCgKgTQgRgfgIgZQgLgfAAgdQAAgTAIgkQAPhMAJgoQAQg/ATgxQAMgdAZg2IAHgMIABAAIgBgDQgDgJAGgPQAYg/AMgcIAOggIAHgWIAFgWQAFgPAKgVIAQgiQAQglAJgkIgLAHQgNAGgHAHQgGAGgHAKIgKARIhLCCQgUAigIATQgGALgIAWIgNAiIgVAtIgJAOIgEAFIABAGQABAHgCAIIgEAPQgWBCgNBDIgFAQQgDAIgGAEQgGAEgHgBQgIgBgEgFQgFgGgCgIIAAgQQAHhkARhJIAHgcIAFgcIAEgeQABgKAFgPIAHgXQAEgPAFgbIgFAGIgyBQIgVAoIgJAWIgIAXQgFALgPAcQgMAYgGAPQgEANgDAFQgFAJgIADQgEADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgFgFgBgKIACgQIAIgxIAMhGQAHgnAKgeIAJgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAIAEACAIQACAFgCANIgGAjIgJAqIgBACQAkgrAagsQAIgOACgJQABgOACgFQACgGAFgGIAKgLIAOgTIANgTQAOgQAPAAQAFAAAGADIALAEIAJADQAGABADADQAHAIgEALQgCAIgJAIIgIAIIgJA0IgNBEIAFgOIAIgWQAHgOALgSIAUggIAXgpQAIgOAPgdQAfg5AZgeQAlguAsgTQAbgNAPAKIAIAFIAGAAIAHAAIAFACQAEABAEAEQAFAEACAHQACALgFAQQgGATgOAUQgLAPgSAUQgHAHgGAEQgHAGgJgBQgEATgPAfQgRAjgFAPIgIAbIgHAaIgKAXIgKAWQgKAXgSAyIgFANIgDAFQACAFgCAIQgBAHgFAKIgOAbIgFARIAAAOQADAogLAwQgHAfgSA3QAGAEACAKIgBARQgDAdAAAnIAABFQAAAUgBALQgCATgHAMQgDAIgGAFQgHAGgHAAIgBAAgAI4ELQgFgEgCgIIgBgPIgCgiIgBgeQACgeAPgkQAKgWAXgnIAQgZQALgTALgCQAIgCAIAGQAHAGAAAJQABAIgIAOIgaAqQgPAZgIATIgIASQgFATAAAbIADAvQABAPgFAIQgEAHgKABIgEAAQgHAAgFgFgAgSDuIgEgGIgDgBQgHgDgDgHQgCgEAAgGIABgMIABgWQAAgkAMgcQAMggAjgmQALgNAJgBQAJgBAHAFQAGAEACAGQAEAAADABQAFACAEAFIACABQAHgEAJADQAKACADALQACAFgBALIACAAQAFgBAFAEQAFACACAEQAEAFAAAFQABAGgDAFQgDAFgGAFIgNAIIgKAKIgKAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgPACIgEAAQgLAAgGgEgAARCcQgDAHgDAOIgDAIIgCAHIgBADIAEgDIAFgJIARgYIgBgBQgGgGgDgGIAAAAIgEAKgABHBhQgGAKgBAIIABAAQAEgKADgIg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AnkKPQgIgBgGgDQgFgEgDgGIgWgDQgZgDgNgDQgUgFgPgIQgagMgZgcQgcgdgQgjQgQgmABglQACghAQgfQAPgeAZgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAOgIAJACQAIABAGAHQAFAIAAAIQABANgMATQgXAogwAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIATADQAMADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAEgIIAMgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgSgagFgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFACgEQADgEADgKQAFgNAXgNQAbgNA3gWIBngnQAbgKASgEQAXgGAUACIABgCQAHgGANABIAWAFQAIABAWABQATACAKADQAZAJAQAaQAVAhABAxQAAAbgJANQgHAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgCAEIgEAHIgDAHQgGALgMABQgNACgJgJQgDAHgHACQgHACgGgBQgJgCgEAAIgGABIgHACQgPACgMgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBgg5QAQgKAKAAQAMAAAHAMQAHALgDAKQgDAHgIAGIgOAJIhHAqQAKADAHAJQAFgKAOgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAXgbAGgjQgegCgagQQgLADgSAEQhwASh1BIQgbAQgTAQIgcAZIgaAYIghAbQgUAPgMAMQAHACAGAGQADAFADAGIAGAOQAFALAPAXQAQAWAKALQAMANATANIAjAVICKBOIAiAVQASAMAMAMQANAOALATQAZApACAeQABAUgIAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgGAJgMALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgDADQgJAGgVAAQgcABg+gBQg8AAgfABIgHAAIgKgBgAHgJmQgNgCgKgTQgRgfgIgZQgLgfAAgdQAAgTAIgkQAPhMAJgoQAQg/ATgxQAMgdAZg2IAHgMIABAAIgBgDQgDgJAGgPQAYg/AMgcIAOggIAHgWIAFgWQAFgPAKgVIAQgiQAQglAJgkIgLAHQgNAGgHAHQgGAGgHAKIgKARIhLCCQgUAigIATQgGALgIAWIgNAiIgVAtIgJAOIgEAFIABAGQABAHgCAIIgEAPQgWBCgNBDIgFAQQgDAIgGAEQgGAEgHgBQgIgBgEgFQgFgGgCgIIAAgQQAHhkARhJIAHgcIAFgcIAEgeQABgKAFgPIAHgXQAEgPAFgbIgFAGIgyBQIgVAoIgJAWIgIAXQgFALgPAcQgMAYgGAPQgEANgDAFQgFAJgIADQgEADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgFgFgBgKIACgQIAIgxIAMhGQAHgnAKgeIAJgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAIAEACAIQACAFgCANIgGAjIgJAqIgBACQAkgrAagsQAIgOACgJQABgOACgFQACgGAFgGIAKgLIAOgTIANgTQAOgQAPAAQAFAAAGADIALAEIAJADQAGABADADQAHAIgEALQgCAIgJAIIgIAIIgJA0IgNBEIAFgOIAIgWQAHgOALgSIAUggIAXgpQAIgOAPgdQAfg5AZgeQAlguAsgTQAbgNAPAKIAIAFIAGAAIAHAAIAFACQAEABAEAEQAFAEACAHQACALgFAQQgGATgOAUQgLAPgSAUQgHAHgGAEQgHAGgJgBQgEATgPAfQgRAjgFAPIgIAbIgHAaIgKAXIgKAWQgKAXgSAyIgFANIgDAFQACAFgCAIQgBAHgFAKIgOAbIgFARIAAAOQADAogLAwQgHAfgSA3QAGAEACAKIgBARQgDAdAAAnIAABFQAAAUgBALQgCATgHAMQgDAIgGAFQgHAGgHAAIgBAAgAI4ELQgFgEgCgIIgBgPIgCgiIgBgeQACgeAPgkQAKgWAXgnIAQgZQALgTALgCQAIgCAIAGQAHAGAAAJQABAIgIAOIgaAqQgPAZgIATIgIASQgFATAAAbIABADQAnhGAhhKIAHgOQAFgHAHgDQAHgDAIADQAIADAEAHQAEAJgEARIgIAeIgJAeQgDAOgCADQgEAKgJAAIgFAAIgEABQgDABgDAFIgMAWQgRAfgIASQgFAKgDAFQgGAIgHACQgFABgEAAQgBAFgCADQgEAHgKABIgEAAQgHAAgFgFgAgSDuIgEgGIgDgBQgHgDgDgHQgCgEAAgGIABgMIABgWQAAgkAMgcQAMggAjgmQALgNAJgBQAJgBAHAFQAGAEACAGQAEAAADABQAFACAEAFIACABQAHgEAJADQAKACADALQACAFgBALIACAAQAFgBAFAEQAFACACAEQAEAFAAAFQABAGgDAFQgDAFgGAFIgNAIIgKAKIgKAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgPACIgEAAQgLAAgGgEgAARCcQgDAHgDAOIgDAIIgCAHIgBADIAEgDIAFgJIARgYIgBgBQgGgGgDgGIAAAAIgEAKgABHBhQgGAKgBAIIABAAQAEgKADgIg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AnkKPQgIgBgGgDQgFgEgDgGIgWgDQgZgDgNgDQgUgFgPgIQgagMgZgcQgcgdgQgjQgQgmABglQACghAQgfQAPgeAZgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAOgIAJACQAIABAGAHQAFAIAAAIQABANgMATQgXAogwAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIATADQAMADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAEgIIAMgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgSgagFgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFACgEQADgEADgKQAFgNAXgNQAbgNA3gWIBngnQAbgKASgEQAXgGAUACIABgCQAHgGANABIAWAFQAIABAWABQATACAKADQAZAJAQAaQAVAhABAxQAAAbgJANQgHAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgCAEIgEAHIgDAHQgGALgMABQgNACgJgJQgDAHgHACQgHACgGgBQgJgCgEAAIgGABIgHACQgPACgMgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBgg5QAQgKAKAAQAMAAAHAMQAHALgDAKQgDAHgIAGIgOAJIhHAqQAKADAHAJQAFgKAOgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAXgbAGgjQgegCgagQQgLADgSAEQhwASh1BIQgbAQgTAQIgcAZIgaAYIghAbQgUAPgMAMQAHACAGAGQADAFADAGIAGAOQAFALAPAXQAQAWAKALQAMANATANIAjAVICKBOIAiAVQASAMAMAMQANAOALATQAZApACAeQABAUgIAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgGAJgMALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgDADQgJAGgVAAQgcABg+gBQg8AAgfABIgHAAIgKgBgAHgJmQgNgCgKgTQgRgfgIgZQgLgfAAgdQAAgTAIgkQAPhMAJgoQAQg/ATgxQAMgdAZg2IAHgMIABAAIgBgDQgDgJAGgPQAYg/AMgcIAOggIAHgWIAFgWQAFgPAKgVIAQgiQAQglAJgkIgLAHQgNAGgHAHQgGAGgHAKIgKARIhLCCQgUAigIATQgGALgIAWIgNAiIgVAtIgJAOIgEAFIABAGQABAHgCAIIgEAPQgWBCgNBDIgFAQQgDAIgGAEQgGAEgHgBQgIgBgEgFQgFgGgCgIIAAgQQAHhkARhJIAHgcIAFgcIAEgeQABgKAFgPIAHgXQAEgPAFgbIgFAGIgyBQIgVAoIgJAWIgIAXQgFALgPAcQgMAYgGAPQgEANgDAFQgFAJgIADQgEADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgFgFgBgKIACgQIAIgxIAMhGQAHgnAKgeIAJgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAIAEACAIQACAFgCANIgGAjIgJAqIgBACQAkgrAagsQAIgOACgJQABgOACgFQACgGAFgGIAKgLIAOgTIANgTQAOgQAPAAQAFAAAGADIALAEIAJADQAGABADADQAHAIgEALQgCAIgJAIIgIAIIgJA0IgNBEIAFgOIAIgWQAHgOALgSIAUggIAXgpQAIgOAPgdQAfg5AZgeQAlguAsgTQAbgNAPAKIAIAFIAGAAIAHAAIAFACQAEABAEAEQAFAEACAHQACALgFAQQgGATgOAUQgLAPgSAUQgHAHgGAEQgHAGgJgBQgEATgPAfQgRAjgFAPIgIAbIgHAaIgKAXIgKAWQgKAXgSAyIgFANIgDAFQACAFgCAIQgBAHgFAKIgOAbIgFARIAAAOQADAogLAwQgHAfgSA3QAGAEACAKIgBARQgDAdAAAnIAABFQAAAUgBALQgCATgHAMQgDAIgGAFQgHAGgHAAIgBAAgAKGESQgGgGAAgQQAAgaACgMIABgJIgMAZQgFAKgDAFQgGAIgHACQgFABgEAAQgBAFgCADQgEAHgKABQgKACgGgHQgFgEgCgIIgBgPIgCgiIgBgeQACgeAPgkQAKgWAXgnIAQgZQALgTALgCQAIgCAIAGQAHAGAAAJQABAIgIAOIgaAqQgPAZgIATIgIASQgFATAAAbIABADQAnhGAhhKIAHgOQAFgHAHgDQAHgDAIADQAIADAEAHQAEAJgEARIgIAeIgJAeQgDAOgCADQgCAFgDACQADAEACAGQABAHgDAGQAGABAHAEQAFADADAGQADAEABAKIADAMQAEATgGAIIgFAHIgEAJQgFAMgIAFQgKAIgUABQgQAAgGgHgAgSDuIgEgGIgDgBQgHgDgDgHQgCgEAAgGIABgMIABgWQAAgkAMgcQAMggAjgmQALgNAJgBQAJgBAHAFQAGAEACAGQAEAAADABQAFACAEAFIACABQAHgEAJADQAKACADALQACAFgBALIACAAQAFgBAFAEQAFACACAEQAEAFAAAFQABAGgDAFQgDAFgGAFIgNAIIgKAKIgKAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgPACIgEAAQgLAAgGgEgAARCcQgDAHgDAOIgDAIIgCAHIgBADIAEgDIAFgJIARgYIgBgBQgGgGgDgGIAAAAIgEAKgABHBhQgGAKgBAIIABAAQAEgKADgIg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AoYKPQgIgBgHgDQgFgEgCgGIgXgDQgZgDgMgDQgUgFgQgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgaAOQgOAIggAQQgMAHgCAIQgBAFAGAKIASAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACANgCQAXgBAagLQARgHAdgPICNhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgZgUQgigcgggMIgcgJIgdgJQgzgQgrggQgsghgegrQgRgagGgVQgGgWADgkQABgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFADgEQACgEADgKQAGgNAXgNQAbgNA2gWIBngnQAcgKASgEQAYgGATACIACgCQAGgGANABIAVAFQAIABAWABQAUACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgJATgTAUQgMAMgaAVIg4AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIAMgBQAKgCAPgNQAagUALgNQAYgbAFgjQgegCgagQQgKADgRAEQhyASh0BIQgcAQgTAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAFAOQAGALAOAXQAQAWALALQAMANATANIAjAVICKBOIAhAVQASAMANAMQAMAOAMATQAaApABAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgOALQgcAYgqAWQgbAOgyAWQgfAOgRAEQgVAGgYABQgDAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAGrJmQgMgCgKgTQgRgfgIgZQgMgfAAgdQABgTAHgkQAPhMAKgoQAPg/AUgxQALgdAZg2IAHgMIABAAIgBgDQgCgJAFgPQAYg/AMgcIAPggIAGgWIAGgWQAEgPAKgVIAQgiQARglAJgkIgMAHQgMAGgIAHQgGAGgGAKIgLARIhLCCQgTAigIATQgGALgIAWIgOAiIgVAtIgJAOIgEAFIACAGQABAHgCAIIgEAPQgWBCgOBDIgFAQQgDAIgFAEQgHAEgHgBQgIgBgEgFQgFgGgBgIIAAgQQAHhkARhJIAGgcIAGgcIADgeQACgKAEgPIAHgXQAEgPAFgbIgEAGIgyBQIgWAoIgJAWIgIAXQgFALgPAcQgMAYgGAPQgEANgDAFQgEAJgIADQgFADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgFgFAAgKIABgQIAIgxIAMhGQAIgnAKgeIAIgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAJAEACAIQABAFgBANIgHAjIgJAqIAAACQAjgrAagsQAIgOADgJQABgOACgFQACgGAEgGIAKgLIAOgTIANgTQAOgQAPAAQAGAAAGADIAKAEIAKADQAFABADADQAHAIgDALQgCAIgKAIIgHAIIgKA0IgNBEIAGgOIAIgWQAGgOALgSIAUggIAXgpQAIgOAPgdQAgg5AZgeQAlguAsgTQAagNAPAKIAIAFIAGAAIAHAAIAFACQAEABAFAEQAFAEABAHQADALgFAQQgHATgOAUQgLAPgRAUQgIAHgFAEQgIAGgIgBQgFATgPAfQgQAjgGAPIgHAbIgHAaIgKAXIgLAWQgJAXgTAyIgFANIgDAFQACAFgBAIQgCAHgFAKIgNAbIgGARIABAOQACAogLAwQgGAfgTA3QAGAEACAKIAAARQgEAdAAAnIAABFQABAUgCALQgCATgGAMQgEAIgGAFQgHAGgHAAIgBAAgAJRESQgFgGgBgQQABgaABgMIACgJIgNAZQgEAKgEAFQgGAIgHACQgEABgFAAQAAAFgCADQgFAHgKABQgKACgGgHQgEgEgCgIIgCgPIgCgiIgBgeQACgeAPgkQAKgWAXgnIAQgZQALgTALgCQAJgCAHAGQAIAGAAAJQAAAIgIAOIgaAqQgOAZgIATIgIASQgGATABAbIAAADQAnhGAhhKIAIgOQAFgHAHgDQAHgDAIADQAIADADAHQAFAJgFARIgIAeIgJAeQgCAOgCADQgCAFgDACQADAEABAGQACAHgDAGQAGABAGAEQAFADAEAGQACAEABAKIADAMQAEATgGAIIgFAHIgEAJQgEAMgJAFQgKAIgTABQgQAAgHgHgAhHDuIgEgGIgDgBQgGgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAjgmQAMgNAJgBQAHgBAHAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAIADQAKACAEALQACAFgBALIABAAQAGgBAFAEQAEACADAEQADAFABAFQAAAGgDAFQgCAFgHAFIgMAIIgLAKIgJAIIgFAGIgQATIgOAVIgPAVQgIAMgIAHQgLAIgOACIgGAAQgKAAgHgEgAgjCcQgDAHgDAOIgDAIIgCAHIAAADIADgDIAGgJIARgYIgCgBQgGgGgCgGIAAAAIgFAKgAASBhQgFAKgCAIIABAAQAFgKACgIgAKqCLQgFgCgDgEQgEgFgBgFQgCgKAKgRIAUgjIAKgQQAQgXAZgJQANgEANABQAOABALAHQAJAFADAGQAEAGgBAGQgBAHgDAFQgEAFgHACQgHACgGgDIgHgEQgEgCgDgBQgEAAgHACQgMAFgIALIgGAKIgFAKIgHANIgIAMIgFALQgDAGgDADQgFAEgGAAIgEABIgHgBg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AoYKPQgIgBgHgDQgFgEgCgGIgXgDQgZgDgMgDQgUgFgQgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgaAOQgOAIggAQQgMAHgCAIQgBAFAGAKIASAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACANgCQAXgBAagLQARgHAdgPICNhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgZgUQgigcgggMIgcgJIgdgJQgzgQgrggQgsghgegrQgRgagGgVQgGgWADgkQABgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFADgEQACgEADgKQAGgNAXgNQAbgNA2gWIBngnQAcgKASgEQAYgGATACIACgCQAGgGANABIAVAFQAIABAWABQAUACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgJATgTAUQgMAMgaAVIg4AvQgHAGgDAEIgDAHIgDAHQgGALgOABQgNACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIAMgBQAKgCAPgNQAagUALgNQAYgbAFgjQgegCgagQQgKADgRAEQhyASh0BIQgcAQgTAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAFAOQAGALAOAXQAQAWALALQAMANATANIAjAVICKBOIAhAVQASAMANAMQAMAOAMATQAaApABAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgOALQgcAYgqAWQgbAOgyAWQgfAOgRAEQgVAGgYABQgDAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAGrJmQgMgCgKgTQgRgfgIgZQgMgfAAgdQABgTAHgkQAPhMAKgoQAPg/AUgxQALgdAZg2IAHgMIABAAIgBgDQgCgJAFgPQAYg/AMgcIAPggIAGgWIAGgWQAEgPAKgVIAQgiQARglAJgkIgMAHQgMAGgIAHQgGAGgGAKIgLARIhLCCQgTAigIATQgGALgIAWIgOAiIgVAtIgJAOIgEAFIACAGQABAHgCAIIgEAPQgWBCgOBDIgFAQQgDAIgFAEQgHAEgHgBQgIgBgEgFQgFgGgBgIIAAgQQAHhkARhJIAGgcIAGgcIADgeQACgKAEgPIAHgXQAEgPAFgbIgEAGIgyBQIgWAoIgJAWIgIAXQgFALgPAcQgMAYgGAPQgEANgDAFQgEAJgIADQgFADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgFgFAAgKIABgQIAIgxIAMhGQAIgnAKgeIAIgbIAIgbQADgLADgVQADgWADgLQAFgVAMgFQAHgEAJAEQAJAEACAIQABAFgBANIgHAjIgJAqIAAACQAjgrAagsQAIgOADgJQABgOACgFQACgGAEgGIAKgLIAOgTIANgTQAOgQAPAAQAGAAAGADIAKAEIAKADQAFABADADQAHAIgDALQgCAIgKAIIgHAIIgKA0IgNBEIAGgOIAIgWQAGgOALgSIAUggIAXgpQAIgOAPgdQAgg5AZgeQAlguAsgTQAagNAPAKIAIAFIAGAAIAHAAIAFACQAEABAFAEQAFAEABAHQADALgFAQQgHATgOAUQgLAPgRAUQgIAHgFAEQgIAGgIgBQgFATgPAfQgQAjgGAPIgHAbIgHAaIgKAXIgLAWQgJAXgTAyIgFANIgDAFQACAFgBAIQgCAHgFAKIgNAbIgGARIABAOQACAogLAwQgGAfgTA3QAGAEACAKIAAARQgEAdAAAnIAABFQABAUgCALQgCATgGAMQgEAIgGAFQgHAGgHAAIgBAAgAJRESQgFgGgBgQQABgaABgMIACgJIgNAZQgEAKgEAFQgGAIgHACQgEABgFAAQAAAFgCADQgFAHgKABQgKACgGgHQgEgEgCgIIgCgPIgCgiIgBgeQACgeAPgkQAKgWAXgnIAQgZQALgTALgCQAJgCAHAGQAIAGAAAJQAAAIgIAOIgaAqQgOAZgIATIgIASQgGATABAbIAAADQAnhGAhhKIAIgOQAFgHAHgDQAHgDAIADQAIADADAHQAFAJgFARIgIAeIgJAeQgCAOgCADQgCAFgDACQADAEABAGQACAHgDAGQAGABAFADQAAgYAIgRQAEgIAEgEIAAAAQgCgKAKgRIAUgjIAKgQQAQgXAZgJQANgEANABQAOABALAHQAJAFADAGQAEAGgBAGQgBAHgDAFQgEAFgHACQgHACgGgDIgHgEQgEgCgDgBQgEAAgHACQgMAFgIALIgGAKIgFAKIgHANIgIAMIgFALQgCAGgEADQABADgBAEIgEALQgHATAEAZIAFgKIAEgLQACgHAHgLIAOgWQAMgSALgDQAGgCAHADQAGACAEAFQAFAJgBAQQgEAkgVAoQgGALgFAEQgIAHgJgCIgGgCIgFADIgKAIQgGADgHgBQgHAAgGgDQgHgEgGgIIgEAGIgEAJQgEAMgJAFQgKAIgTABQgQAAgHgHgAhHDuIgEgGIgDgBQgGgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAjgmQAMgNAJgBQAHgBAHAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAIADQAKACAEALQACAFgBALIABAAQAGgBAFAEQAEACADAEQADAFABAFQAAAGgDAFQgCAFgHAFIgMAIIgLAKIgJAIIgFAGIgQATIgOAVIgPAVQgIAMgIAHQgLAIgOACIgGAAQgKAAgHgEgAgjCcQgDAHgDAOIgDAIIgCAHIAAADIADgDIAGgJIARgYIgCgBQgGgGgCgGIAAAAIgFAKgAASBhQgFAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ApJKPQgJgBgGgDQgFgEgDgGIgWgDQgZgDgMgDQgUgFgQgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAYgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAJACQAIABAFAHQAGAIAAAIQAAANgLATQgXAogxAiQgSAOgaAOQgOAIggAQQgNAHgBAIQgBAFAGAKIASAcQALAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACANgCQAXgBAagLQARgHAdgPICNhJQABgHAEgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgrggQgsghgegrQgRgagGgVQgGgWACgkQACgLACgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFADgEQACgEADgKQAFgNAYgNQAbgNA2gWIBngnQAcgKASgEQAYgGATACIACgCQAGgGAOABIAVAFQAIABAVABQATACALADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgMADQgKADgJgGQgKATgTAUQgLAMgZAVIg6AvQgGAGgDAEIgDAHIgEAHQgFALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAJAAQANAAAGAMQAIALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAagUALgNQAXgbAFgjQgdgCgagQQgKADgSAEQhyASh0BIQgcAQgTAQIgbAZIgbAYIghAbQgUAPgMAMQAIACAFAGQADAFAEAGIAFAOQAFALAPAXQAQAWALALQAMANATANIAjAVICJBOIAiAVQASAMAMAMQANAOAMATQAaApABAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAF6JmQgMgCgKgTQgRgfgJgZQgLgfAAgdQABgTAHgkQAP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");
	var mask_1_graphics_21 = new cjs.Graphics().p("ApfKPQgIgBgHgDQgFgEgCgGIgWgDQgagDgMgDQgUgFgQgIQgZgMgagcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAJgBAJAGQAKAGAAAKQAxgeBRgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgZAOQgOAIggAQQgNAHgCAIQgBAFAGAKIASAcQALAOANAIQALAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACAOgCQAWgBAbgLQARgHAcgPICNhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgYgUQgigcgggMIgdgJIgdgJQgzgQgrggQgsghgdgrQgSgagGgVQgGgWADgkQABgLACgIIABgNQAGgfAXgfQASgYAfgbQAdgZAegWQAGgFADgEQACgEAEgKQAFgNAXgNQAbgNA2gWIBognQAbgKASgEQAYgGATACIACgCQAHgGANABIAVAFQAIABAXABQASACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgLADQgLADgJgGQgJATgSAUQgMAMgZAVIg6AvQgHAGgDAEIgDAHIgDAHQgGALgNABQgOACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QARgKAKAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhJAqQAKADAHAJQAGgKAOgBIAMgBIAMgBQALgCAQgNQAZgUALgNQAYgbAGgjQgfgCgagQQgKADgSAEQhyASh0BIQgbAQgUAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAGAOQAFALAPAXQAPAWALALQAMANATANIAjAVICKBOIAhAVQASAMANAMQANAOALATQAaApABAeQACAUgIAUQAFABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgJANQgIANgOANQABALgGAMQgFAJgNALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAFkJmQgMgCgKgTQgRgfgIgZQgMgfAAgdQABgTAIgkQAOhMAKgoQAPg/AUgxQALgdAag2IAGgMIABAAIgBgDQgCgJAFgPQAYg/ANgcIAOggIAGgWIAGgWQAEgPAKgVIAQgiQARglAJgkIgMAHQgMAGgHAHQgHAGgGAKIgLARIhKCCQgUAigIATQgGALgIAWIgOAiIgVAtIgJAOIgEAFIACAGQABAHgCAIIgEAPQgWBCgOBDIgFAQQgDAIgFAEQgHAEgHgBQgHgBgFgFQgFgGgBgIIAAgQQAHhkARhJIAGgcIAGgcIADgeQACgKAEgPIAHgXQAEgPAGgbIgFAGIgyBQIgWAoIgJAWIgIAXQgEALgPAcQgNAYgFAPQgFANgDAFQgEAJgIADQgFADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgEgFgBgKIACgQIAHgxIAMhGQAIgnAKgeIAJgbIAHgbQADgLADgVQAEgWADgLQAEgVAMgFQAHgEAJAEQAJAEACAIQACAFgCANIgHAjIgJAqIAAACQAkgrAZgsQAJgOACgJQABgOACgFQACgGAEgGIAKgLIAOgTIAOgTQAOgQAPAAQAFAAAGADIAKAEIAKADQAFABADADQAHAIgDALQgCAIgJAIIgIAIIgKA0IgNBEIAGgOIAIgWQAGgOAMgSIATggIAXgpQAJgOAPgdQAfg5AZgeQAlguAsgTQAagNAQAKIAHAFIAHAAIAGAAIAFACQAFABAEAEQAFAEABAHQADALgFAQQgHATgOAUQgLAPgRAUQgHAHgGAEQgIAGgIgBQgFATgPAfQgQAjgFAPIgIAbIgHAaIgKAXIgKAWQgKAXgTAyIgEANIgEAFQACAFgBAIQgCAHgFAKIgNAbIgGARIABAOQACAogLAwQgGAfgTA3QAGAEACAKIAAARQgEAdAAAnIAABFQABAUgCALQgCATgGAMQgEAIgGAFQgHAGgHAAIgBAAgALBEaQgHAAgFgFQgFgFgBgHQgCgJADgSQAMhAAohrQArh3ANgzQAEgQAFgGQAEgGAFgDQAFgCAGABQAGAAAFAGQAEAFABAGQACAJgEARQgNAugeBVIAMgWQAJgQAHgIQAJgMALgHQAOgJANAEQAGADAEAHQAEAHAAAHQABAHgEAHQgEAHgGACIgHABIgHADQgCABgFAGQgMAUgPAbIgYAxQgSAkgIAUQgNAfgHAaIgDAMQgCAHgEAEQgHAGgKgBIgCADQgCAHgGAEQgFAEgGAAIgCAAgAIKESQgFgGAAgQQAAgaABgMIACgJIgNAZQgEAKgEAFQgGAIgHACQgEABgFAAQAAAFgCADQgFAHgKABQgJACgHgHQgEgEgCgIIgCgPIgCgiIAAgeQABgeAQgkQAJgWAYgnIAQgZQAKgTALgCQAJgCAHAGQAIAGAAAJQABAIgJAOIgaAqQgOAZgIATIgIASQgGATABAbIAAADQAnhGAhhKIAIgOQAFgHAHgDQAHgDAIADQAIADAEAHQAEAJgEARIgJAeIgIAeQgDAOgCADQgCAFgDACQADAEABAGQACAHgDAGQAGABAFADQAAgYAIgRQAEgIAEgEIAAAAQgBgKAJgRIAVgjIAJgQQAQgXAZgJQANgEANABQAOABALAHQAJAFAEAGQADAGgBAGQAAAHgEAFQgEAFgHACQgHACgGgDIgGgEQgFgCgDgBQgEAAgGACQgNAFgIALIgGAKIgEAKIgIANIgHAMIgGALQgCAGgEADQABADgBAEIgEALQgHATAEAZIAFgKIAEgLQACgHAIgLIANgWQAMgSALgDQAGgCAHADQAGACAEAFQAGAJgCAQQgEAkgVAoQgGALgFAEQgIAHgJgCIgGgCIgFADIgKAIQgGADgHgBQgHAAgGgDQgHgEgFgIIgFAGIgEAJQgEAMgJAFQgJAIgUABQgQAAgHgHgAiODuIgEgGIgCgBQgHgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAkgmQALgNAJgBQAJgBAGAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAJADQAJACAEALQACAFgBALIACAAQAEgBAFAEQAEACADAEQADAFABAFQAAAGgCAFQgDAFgHAFIgLAIIgLAKIgJAIIgFAGIgQATIgOAVIgQAVQgHAMgJAHQgLAIgOACIgGAAQgKAAgHgEgAhqCcQgDAHgDAOIgCAIIgCAHIgBADIADgDIAGgJIARgYIgCgBQgFgGgDgGIAAAAIgFAKgAgzBhQgGAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Ap2KPQgIgBgGgDQgGgEgCgGIgWgDQgagDgMgDQgUgFgQgIQgZgMgagcQgcgdgPgjQgRgmACglQACghAQgfQAPgeAZgZQARgRAPgCQAKgBAIAGQAKAGAAAKQAxgeBRgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgZAOQgOAIggAQQgNAHgCAIQgBAFAGAKIASAcQALAOANAIQALAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACAOgCQAWgBAbgLQARgHAcgPICNhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgYgUQgigcgggMIgdgJIgdgJQgzgQgrggQgrghgegrQgSgagGgVQgGgWADgkQABgLACgIIABgNQAGgfAXgfQASgYAfgbQAdgZAegWQAGgFADgEQADgEADgKQAFgNAXgNQAbgNA3gWIBngnQAbgKASgEQAYgGATACIACgCQAHgGANABIAVAFQAJABAWABQATACAKADQAXAJARAaQAUAhACAxQAAAbgKANQgGAIgLADQgLADgJgGQgIATgTAUQgMAMgZAVIg6AvQgHAGgDAEIgDAHIgDAHQgGALgNABQgOACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgGACQgPACgNgPQgHgIgEgLQgEgHgEgVQgGgVACgMQAEgQANgNQAKgIATgMIBhg5QARgKAKAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhJAqQAKADAHAJQAGgKAPgBIALgBIAMgBQALgCAQgNQAZgUALgNQAYgbAGgjQgfgCgagQQgKADgSAEQhyASh0BIQgbAQgUAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAGAOQAFALAPAXQAPAWALALQAMANATANIAjAVICKBOIAhAVQASAMANAMQANAOAMATQAZApABAeQACAUgIAUQAFABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgIANQgJANgOANQABALgGAMQgFAJgNALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgDADQgKAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAFNJmQgMgCgKgTQgRgfgIgZQgMgfAAgdQABgTAIgkQAOhMAKgoQAPg/AUgxQALgdAag2IAGgMIABAAIgBgDQgCgJAFgPQAYg/ANgcIAOggIAGgWIAGgWQAFgPAJgVIAQgiQARglAJgkIgMAHQgMAGgHAHQgHAGgGAKIgLARIhKCCQgUAigIATQgGALgIAWIgOAiIgVAtIgJAOIgEAFIACAGQABAHgCAIIgEAPQgWBCgOBDIgEAQQgEAIgFAEQgGAEgIgBQgHgBgFgFQgFgGgBgIIAAgQQAHhkARhJIAGgcIAGgcIADgeQACgKAEgPIAHgXQAFgPAFgbIgFAGIgyBQIgWAoIgIAWIgJAXQgEALgPAcQgNAYgFAPQgFANgDAFQgEAJgIADQgFADgFgBIgJA0QgDAQgGAGQgGAFgJAAQgJgBgFgGQgEgFgBgKIACgQIAHgxIAMhGQAIgnAKgeIAJgbIAHgbQADgLADgVQAEgWADgLQAEgVAMgFQAHgEAJAEQAJAEACAIQACAFgCANIgHAjIgIAqIgBACQAkgrAZgsQAJgOACgJQABgOACgFQACgGAFgGIAJgLIAOgTIAOgTQAOgQAPAAQAFAAAGADIAKAEIAKADQAFABADADQAIAIgEALQgCAIgJAIIgIAIIgJA0IgOBEIAGgOIAIgWQAGgOAMgSIATggIAXgpQAJgOAPgdQAfg5AZgeQAlguAsgTQAagNAQAKIAHAFIAHAAIAGAAIAFACQAFABAEAEQAFAEABAHQADALgFAQQgHATgOAUQgLAPgRAUQgHAHgGAEQgIAGgIgBQgFATgPAfQgQAjgFAPIgIAbIgHAaIgKAXIgKAWQgKAXgTAyIgEANIgEAFQADAFgCAIQgCAHgFAKIgNAbIgGARIABAOQACAogLAwQgGAfgTA3QAGAEACAKIAAARQgEAdAAAnIAABFQABAUgCALQgCATgGAMQgEAIgGAFQgGAGgIAAIgBAAgAKrEaQgIAAgFgFQgFgFgBgHQgCgJADgSQAMhAAohrQArh3ANgzQAEgQAFgGQAEgGAFgDQAGgCAFABQAGAAAFAGQAEAFABAGQACAJgEARQgNAugeBVIAMgWQAJgQAHgIQAJgMALgHQAOgJANAEQAGADAEAHQAEAHAAAHQABAFgBADIADAFQAEAJgEANQgEASgPAZQgLAQgCAKIgBANIAAANQAAAOgFAYIAjgzQAIgNAIgDQAIgEAKAEQAJAFACAJQADAJgGAOQgHASgMAaQgOAggLAOQgMAQgRAKQgRAJgNgDQgPgDgIgSQgEgKgBgUIgBgjQAAgZAEgQIABgBQgSAjgIATQgNAfgGAaIgEAMQgCAHgEAEQgGAGgLgBIgCADQgCAHgGAEQgFAEgGAAIgBAAgAHzESQgFgGAAgQQAAgaABgMIACgJIgNAZQgEAKgEAFQgGAIgHACQgEABgFAAQAAAFgCADQgFAHgKABQgJACgHgHQgEgEgCgIIgCgPIgCgiIAAgeQABgeAQgkQAJgWAYgnIAQgZQALgTAKgCQAJgCAHAGQAIAGAAAJQABAIgJAOIgZAqQgPAZgIATIgIASQgGATABAbIAAADQAnhGAhhKIAIgOQAFgHAHgDQAHgDAIADQAIADAEAHQAEAJgEARIgJAeIgIAeQgDAOgCADQgCAFgDACQADAEABAGQACAHgDAGQAGABAFADQAAgYAIgRQAEgIAEgEIAAAAQgBgKAJgRIAVgjIAJgQQAQgXAZgJQANgEANABQAOABALAHQAJAFAEAGQADAGgBAGQAAAHgEAFQgEAFgHACQgGACgHgDIgGgEQgFgCgDgBQgEAAgGACQgNAFgIALIgGAKIgEAKIgIANIgHAMIgGALQgCAGgEADQABADgBAEIgEALQgHATAEAZIAFgKIAEgLQACgHAIgLIANgWQAMgSALgDQAGgCAHADQAGACAEAFQAGAJgCAQQgEAkgVAoQgGALgFAEQgIAHgJgCIgGgCIgFADIgKAIQgGADgHgBQgHAAgFgDQgIgEgFgIIgEAGIgFAJQgEAMgJAFQgJAIgUABQgQAAgHgHgAilDuIgEgGIgCgBQgHgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAkgmQALgNAJgBQAJgBAGAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAJADQAJACAEALQACAFgBALIACAAQAFgBAFAEQAFACACAEQADAFABAFQAAAGgCAFQgDAFgHAFIgMAIIgLAKIgJAIIgFAGIgQATIgOAVIgQAVQgHAMgJAHQgLAIgOACIgGAAQgKAAgHgEgAiBCcQgDAHgDAOIgCAIIgCAHIgBADIADgDIAGgJIARgYIgCgBQgFgGgDgGIAAAAIgFAKgAhKBhQgGAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_23 = new cjs.Graphics().p("ArJKPQgIgBgGgDQgFgEgDgGIgWgDQgZgDgNgDQgUgFgPgIQgagMgZgcQgcgdgQgjQgQgmABglQACghAQgfQAPgeAZgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAOgIAJACQAJABAFAHQAFAIAAAIQABANgLATQgYAogwAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIATADQAMADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAEgIIAMgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgSgagFgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFACgEQADgEADgKQAFgNAXgNQAbgNA3gWIBngnQAbgKASgEQAYgGAUACIABgCQAHgGANABIAWAFQAIABAWABQATACAKADQAZAJAQAaQAVAhABAxQAAAbgJANQgHAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgCAEIgEAHIgDAHQgFALgOABQgNACgJgJQgDAHgHACQgHACgGgBQgJgCgEAAIgGABIgHACQgPACgMgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QAQgKAKAAQAMAAAHAMQAHALgDAKQgDAHgIAGIgOAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAXgbAGgjQgegCgagQQgLADgSAEQhxASh1BIQgbAQgTAQIgbAZIgbAYIghAbQgUAPgMAMQAHACAGAGQADAFADAGIAGAOQAFALAPAXQAQAWAKALQAMANATANIAjAVICKBOIAiAVQASAMAMAMQANAOAMATQAZApACAeQABAUgIAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgGAJgNALQgdAYgqAWQgaAOgzAWQgeAOgSAEQgVAGgYABQgCAFgEADQgJAGgVAAQgcABg+gBQg8AAgfABIgHAAIgKgBgAD7JmQgNgCgKgTQgRgfgIgZQgLgfAAgdQAAgTAIgkQAP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");
	var mask_1_graphics_24 = new cjs.Graphics().p("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");
	var mask_1_graphics_25 = new cjs.Graphics().p("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");
	var mask_1_graphics_26 = new cjs.Graphics().p("AunKPQgJgBgGgDQgFgEgDgGIgWgDQgZgDgMgDQgVgFgPgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAYgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAIACQAJABAFAHQAGAIAAAIQAAANgLATQgYAogwAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAFgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgRgagGgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFADgEQACgEADgKQAFgNAYgNQAagNA3gWIBngnQAcgKASgEQAXgGAUACIACgCQAGgGAOABIAVAFQAIABAWABQATACALADQAYAJAQAaQAVAhABAxQABAbgKANQgGAIgMADQgLADgIgGQgKATgTAUQgMAMgZAVIg6AvQgGAGgDAEIgEAHIgDAHQgFALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgFAAIgGABIgHACQgOACgNgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QAQgKAKAAQANAAAGAMQAIALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh1BIQgbAQgTAQIgbAZIgbAYIghAbQgUAPgMAMQAIACAFAGQADAFADAGIAGAOQAFALAPAXQAQAWALALQALANAUANIAjAVICJBOIAiAVQASAMAMAMQANAOAMATQAZApACAeQABAUgIAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAAcJmQgNgCgJgTQgQgfgJgZQgLgfAAgdQABgTAHgkQAP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DAFQgEAFgIACQgGACgGgDIgHgEQgEgCgEgBQgEAAgGACQgMAFgIALIgGAKIgFAKIgIANIgHAMIgFALQgDAGgEADQABADgBAEIgDALQgHATAEAZIAFgKIADgLQADgHAHgLIAOgWQAMgSALgDQAGgCAHADQAGACAEAFQAFAJgBAQQgEAkgWAoQgFALgFAEQgJAHgIgCIgGgCIgFADIgLAIQgFADgIgBQgGAAgGgDQgIgEgFgIIgEAGIgEAJQgFAMgIAFQgKAIgTABQgQAAgHgHgAnWDuIgEgGIgDgBQgGgDgEgHQgCgEAAgGIABgMIABgWQAAgkAMgcQANggAjgmQAMgNAIgBQAJgBAHAFQAGAEADAGQADAAADABQAFACAFAFIACABQAGgEAJADQAKACAEALQACAFgBALIABAAQAFgBAFAEQAFACADAEQADAFAAAFQABAGgDAFQgCAFgHAFIgMAIIgLAKIgKAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgOACIgGAAQgLAAgGgEgAmyCcQgDAHgDAOIgDAIIgCAHIAAADIADgDIAFgJIARgYIgBgBQgGgGgCgGIAAAAIgFAKgAl8BhQgFAKgCAIIABAAQAFgKACgIg");
	var mask_1_graphics_27 = new cjs.Graphics().p("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gEARIgIAeIgJAeQgDAOgCADQgCAFgDACQADAEACAGQABAHgDAGQAGABAGADQAAgYAIgRQADgIAFgEIAAAAQgCgKAKgRIAUgjIAKgQQAQgXAYgJQANgEAOABQAOABALAHQAIAFAEAGQAEAGgCAGQAAAHgEAFQgEAFgHACQgGACgGgDIgHgEQgEgCgEgBQgEAAgGACQgNAFgHALIgGAKIgFAKIgIANIgHAMIgFALQgDAGgEADQABADgBAEIgEALQgHATAEAZIAGgKIADgLQADgHAHgLIANgWQANgSALgDQAGgCAGADQAHACADAFQAGAJgCAQQgDAkgWAoQgGALgFAEQgIAHgIgCIgGgCIgGADIgKAIQgGADgHgBQgGAAgGgDQgIgEgFgIIgEAGIgEAJQgFAMgIAFQgKAIgUABQgQAAgGgHgAnXDuIgEgGIgDgBQgHgDgDgHQgCgEAAgGIABgMIABgWQAAgkALgcQANggAkgmQALgNAJgBQAJgBAHAFQAGAEACAGQADAAAEABQAFACAEAFIACABQAHgEAJADQAKACADALQACAFgBALIACAAQAFgBAFAEQAFACACAEQAEAFAAAFQABAGgDAFQgDAFgGAFIgNAIIgLAKIgJAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgPACIgGAAQgKAAgGgEgAmzCcQgDAHgDAOIgDAIIgCAHIgBADIAEgDIAFgJIARgYIgBgBQgGgGgDgGIAAAAIgEAKgAl9BhQgGAKgBAIIABAAQAEgKACgIg");
	var mask_1_graphics_28 = new cjs.Graphics().p("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");
	var mask_1_graphics_29 = new cjs.Graphics().p("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");
	var mask_1_graphics_30 = new cjs.Graphics().p("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");
	var mask_1_graphics_31 = new cjs.Graphics().p("AvSKPQgJgBgGgDQgFgEgDgGIgWgDQgZgDgMgDQgVgFgPgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAYgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAIACQAJABAFAHQAGAIAAAIQAAANgLATQgXAogxAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAFgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgRgagGgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFADgEQACgEADgKQAFgNAYgNQAagNA3gWIBngnQAcgKASgEQAXgGAUACIACgCQAGgGAOABIAVAFQAIABAWABQATACALADQAYAJAQAaQAVAhABAxQABAbgKANQgGAIgMADQgLADgIgGQgKATgTAUQgMAMgZAVIg6AvQgGAGgDAEIgEAHIgDAHQgFALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QAQgKAKAAQANAAAGAMQAIALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh1BIQgbAQgTAQIgbAZIgbAYIghAbQgUAPgMAMQAIACAFAGQADAFADAGIAGAOQAFALAPAXQAQAWALALQALANAUANIAjAVICJBOIAiAVQASAMAMAMQANAOAMATQAZApACAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAgOJmQgNgCgJgTQgRgfgJgZQgLgfAAgdQABgTAHgkQAP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AQAAAFgCADQgFAHgKABQgKACgGgHQgFgEgCgIIgBgPIgCgiIgBgeQACgeAPgkQAKgWAXgnIAQgZQALgTALgCQAJgCAHAGQAIAGAAAJQAAAIgIAOIgaAqQgOAZgJATIgHASQgGATABAbIAAADQAnhGAhhKIAIgOQAFgHAGgDQAIgDAHADQAJADADAHQAEAJgEARIgIAeIgJAeQgCAOgCADQgDAFgDACQADAEACAGQACAHgEAGQAHABAFADQAAgYAIgRQAEgIAEgEIAAAAQgCgKAKgRIAUgjIAKgQQAQgXAZgJQANgEANABQAOABALAHQAJAFADAGQAEAGgBAGQgBAHgDAFQgEAFgIACQgGACgGgDIgHgEQgEgCgEgBQgEAAgGACQgMAFgIALIgGAKIgFAKIgIANIgHAMIgFALQgCAGgFADQABADgBAEIgDALQgHATAEAZIAFgKIADgLQADgHAHgLIAOgWQAMgSALgDQAGgCAHADQAGACAEAFQAFAJgBAQQgEAkgWAoQgFALgFAEQgJAHgIgCIgGgCIgFADIgLAIQgFADgHgBQgHAAgGgDQgIgEgFgIIgEAGIgEAJQgFAMgIAFQgKAIgTABQgQAAgHgHgAoBDuIgEgGIgDgBQgGgDgEgHQgCgEAAgGIABgMIABgWQAAgkAMgcQANggAjgmQAMgNAIgBQAJgBAHAFQAGAEADAGQADAAADABQAGACAEAFIACABQAGgEAJADQAKACAEALQACAFgBALIABAAQAFgBAFAEQAFACADAEQADAFAAAFQABAGgDAFQgCAFgHAFIgMAIIgLAKIgKAIIgFAGIgPATIgPAVIgPAVQgIAMgIAHQgLAIgOACIgGAAQgLAAgGgEgAndCcQgDAHgDAOIgDAIIgCAHIAAADIADgDIAFgJIASgYIgCgBQgGgGgCgGIAAAAIgFAKgAmnBhQgFAKgCAIIABAAQAFgKACgIgAPnDfQgMgGgFgPQgDgLACgSQAAgYACgQQAEgVAIgQQAGgNANgQQAcgiAagEQAHgBAGABQACgDAEgDQAGgDAFAAQAGAAAGADQAFAEACAFQADAFAAALIAAAKIABgBIAKgIQAHgGAFgHQAEgEAAgEIgBgHQgBgEADgHIADgKIAHgUQAFgKAKgNIAUgVQALgMAHgDQAHgEAKAAQAMAAAGAFQAGAFADAJQACAHgBAJQgDAYgUAYIgSAUIgTATQgaAegOAOQgLALgJACIAAAGQAAAIgIAJIgVAUQgNANgGAHIgMASQgMARgOANQgNAMgKAEQgIAEgHAAQgHAAgGgEgAQGB8QgDAIgCAOQgCATAAAJQALgLAKgPQgGgEgDgHQgDgGAAgMIAAgBIgCAGg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AvSKPQgJgBgGgDQgFgEgDgGIgWgDQgZgDgMgDQgVgFgPgIQgagMgZgcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAYgZQASgRAPgCQAJgBAJAGQAJAGAAAKQAxgeBSgpQAPgIAIACQAJABAFAHQAGAIAAAIQAAANgLATQgXAogxAiQgTAOgZAOQgOAIggAQQgNAHgBAIQgBAFAFAKIASAcQAMAOAMAIQAMAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAHAAIBDADQAYACANgCQAXgBAagLQARgHAdgPICMhJQABgHAFgIIALgPQANgVgBgbQgBgagOgWQgMgSgZgUQgigcgggMIgcgJIgegJQgygQgsggQgrghgegrQgRgagGgVQgGgWACgkQABgLADgIIABgNQAFgfAYgfQASgYAfgbQAdgZAdgWQAHgFADgEQACgEADgKQAFgNAYgNQAagNA3gWIBngnQAcgKASgEQAXgGAUACIACgCQAGgGAOABIAVAFQAIABAWABQATACALADQAYAJAQAaQAVAhABAxQABAbgKANQgGAIgMADQgLADgIgGQgKATgTAUQgMAMgZAVIg6AvQgGAGgDAEIgEAHIgDAHQgFALgOABQgNACgIgJQgEAHgHACQgHACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgFgLQgDgHgFgVQgFgVACgMQADgQAOgNQAKgIATgMIBhg5QAQgKAKAAQANAAAGAMQAIALgEAKQgDAHgHAGIgPAJIhIAqQAKADAHAJQAFgKAPgBIAMgBIALgBQALgCAQgNQAZgUAMgNQAYgbAFgjQgegCgagQQgKADgSAEQhyASh1BIQgbAQgTAQIgbAZIgbAYIghAbQgUAPgMAMQAIACAFAGQADAFADAGIAGAOQAFALAPAXQAQAWALALQALANAUANIAjAVICJBOIAiAVQASAMAMAMQANAOAMATQAZApACAeQACAUgJAUQAGABAFACQAHAFADAGQADAGAAAJQAAAGgBAHQgCAMgIANQgIANgPANQACALgGAMQgFAJgOALQgdAYgpAWQgbAOgyAWQgfAOgRAEQgVAGgZABQgCAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAgOJmQgNgCgJgTQgRgfgJgZQgLgfAAgdQABgTAHgkQAP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");
	var mask_1_graphics_33 = new cjs.Graphics().p("AwIKPQgIgBgGgDQgGgEgCgGIgWgDQgagDgMgDQgUgFgQgIQgZgMgagcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAKgBAIAGQAKAGAAAKQAxgeBRgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgZAOQgOAIggAQQgNAHgCAIQgBAFAGAKIASAcQALAOANAIQALAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACAOgCQAWgBAbgLQARgHAcgPICNhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgYgUQgigcgggMIgdgJIgdgJQgzgQgrggQgrghgegrQgSgagGgVQgGgWADgkQABgLACgIIABgNQAGgfAXgfQASgYAfgbQAdgZAegWQAGgFADgEQACgEAEgKQAFgNAXgNQAbgNA2gWIBognQAbgKASgEQAYgGATACIACgCQAHgGANABIAVAFQAIABAXABQATACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgDAEIgDAHIgDAHQgGALgNABQgOACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgEgVQgGgVACgMQAEgQANgNQAKgIATgMIBhg5QARgKAKAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhJAqQAKADAHAJQAGgKAPgBIALgBIAMgBQALgCAQgNQAZgUALgNQAYgbAGgjQgfgCgagQQgKADgSAEQhyASh0BIQgbAQgUAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAGAOQAFALAPAXQAPAWALALQAMANATANIAjAVICKBOIAhAVQASAMANAMQANAOAMATQAZApABAeQACAUgIAUQAFABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgIANQgJANgOANQABALgGAMQgFAJgNALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAhEJmQgMgCgKgTQgRgfgIgZQgMgfAAgdQABgTAIgkQAO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");
	var mask_1_graphics_34 = new cjs.Graphics().p("AwIKPQgIgBgGgDQgGgEgCgGIgWgDQgagDgMgDQgUgFgQgIQgZgMgagcQgcgdgPgjQgRgmACglQACghAPgfQAQgeAZgZQARgRAPgCQAKgBAIAGQAKAGAAAKQAxgeBRgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgZAOQgOAIggAQQgNAHgCAIQgBAFAGAKIASAcQALAOANAIQALAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACAOgCQAWgBAbgLQARgHAcgPICNhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgYgUQgigcgggMIgdgJIgdgJQgzgQgrggQgrghgegrQgSgagGgVQgGgWADgkQABgLACgIIABgNQAGgfAXgfQASgYAfgbQAdgZAegWQAGgFADgEQACgEAEgKQAFgNAXgNQAbgNA2gWIBognQAbgKASgEQAYgGATACIACgCQAHgGANABIAVAFQAIABAXABQATACAKADQAYAJARAaQAUAhABAxQABAbgKANQgGAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgDAEIgDAHIgDAHQgGALgNABQgOACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgHACQgOACgNgPQgHgIgEgLQgEgHgEgVQgGgVACgMQAEgQANgNQAKgIATgMIBhg5QARgKAKAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhJAqQAKADAHAJQAGgKAPgBIALgBIAMgBQALgCAQgNQAZgUALgNQAYgbAGgjQgfgCgagQQgKADgSAEQhyASh0BIQgbAQgUAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAGAOQAFALAPAXQAPAWALALQAMANATANIAjAVICKBOIAiAVQARAMANAMQANAOAMATQAZApABAeQACAUgIAUQAFABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgIANQgJANgOANQABALgFAMQgGAJgNALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgEADQgJAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAhEJmQgMgCgKgTQgRgfgIgZQgMgfAAgdQABgTAIgkQAO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QgEABgFAAQAAAFgCADQgFAHgKABQgJACgHgHQgEgEgCgIIgCgPIgCgiIAAgeQABgeAQgkQAJgWAYgnIAQgZQAKgTALgCQAJgCAHAGQAIAGAAAJQABAIgJAOIgZAqQgPAZgIATIgIASQgGATABAbIAAADQAnhGAhhKIAIgOQAFgHAHgDQAHgDAIADQAIADAEAHQAEAJgEARIgJAeIgIAeQgDAOgCADIgFAHQADAEABAGQACAHgDAGQAGABAFADQAAgYAIgRQAEgIAEgEIAAAAQgBgKAJgRIAVgjIAJgQQAQgXAZgJQANgEANABQAOABALAHQAJAFAEAGQADAGgBAGQAAAHgEAFQgEAFgHACQgHACgGgDIgGgEQgFgCgDgBQgEAAgGACQgNAFgIALIgGAKIgEAKIgIANIgHAMIgGALQgCAGgEADQABADgBAEIgEALQgHATAEAZQADgFACgFIAEgLQACgHAIgLIAOgWQALgSALgDQAGgCAHADQAGACAEAFQAGAJgCAQQgEAkgVAoQgGALgFAEQgIAHgJgCIgGgCIgFADIgKAIQgGADgHgBQgHAAgFgDQgIgEgFgIIgFAGIgEAJQgEAMgJAFQgJAIgUABQgQAAgHgHgAScEFQgGAEgHABQgHAAgGgEQgGgGgCgLIgJAFQgNAEgKgEQgKgGgEgSQgDgLgBgNQAAgGgCgCIgDgCIgEgCQgKgGABgTQABgcAPgoIAEgKQgJAHgHACIAAAGQAAAIgIAJIgUAUIgUAUIgMASQgLARgPANQgMAMgLAEQgPAHgMgHQgNgGgFgPQgDgLACgSQAAgYADgQQADgVAIgQQAHgNAMgQQAcgiAagEQAHgBAGABQADgDAEgDQAFgDAGAAQAGAAAFADQAFAEADAFQACAFAAALIAAAKIABgBIALgIQAGgGAFgHQAEgEAAgEIAAgHQgBgEACgHIAEgKIAGgUQAFgKAKgNIAUgVQALgMAHgDQAIgEAJAAQAMAAAHAFQAGAFACAJQACAHgBAJQgDAYgTAYIgPARIAHADQAEADACAGQACAGgBAGIgDALIgEALQgEAMgCASIADgDQAFgDAJgDIAEgBIACgHQACgLAEgIQADgHAHgKQAMgQAKgJQANgMAOgFQAMgFAMAAQALABAGAEQALAFADASQAEAVgJASQgGAMgNAKIgZASQgKAHgGABQgKAEgHgEIgEgCIgDABIAAAEQgCAsgQAsIgCAGIACAGIAIAMQAJgJAGgCQAJgFAJABQALADAEAJQAEAKgFAIQgDAGgKAHQgWAQgQACIgHAAQgNAAgGgIgAPQB8QgDAIgBAOQgDATAAAJQAMgLAJgPQgGgEgDgHQgCgGgBgMIAAgBIgCAGgATrAqQgFAEgGAJIgEAEQAEgBAFgEIAHgHIADgCIACgGgAo3DuIgEgGIgCgBQgHgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAkgmQALgNAJgBQAJgBAGAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAJADQAJACAEALQACAFgBALIACAAQAFgBAFAEQAFACACAEQADAFABAFQAAAGgCAFQgDAFgHAFIgMAIIgLAKIgJAIIgFAGIgQATIgOAVIgQAVQgHAMgJAHQgLAIgOACIgGAAQgKAAgHgEgAoTCcQgDAHgDAOIgCAIIgCAHIgBADIADgDIAGgJIARgYIgCgBQgFgGgDgGIAAAAIgFAKgAnkBzIABAAQAFgJACgJIAAAAQgGAKgCAIg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AwSKPQgIgBgGgDQgGgEgCgGIgWgDQgagDgMgDQgUgFgQgIQgZgMgagcQgcgdgPgjQgRgmACglQACghAQgfQAPgeAZgZQARgRAPgCQAKgBAIAGQAKAGAAAKQAxgeBRgpQAPgIAJACQAIABAGAHQAFAIAAAIQAAANgLATQgXAogxAiQgSAOgZAOQgOAIggAQQgNAHgCAIQgBAFAGAKIASAcQALAOANAIQALAJAbAIQAgALARADIAUADQALADAFAHIAAABQAGgBAIAAIBCADQAYACAOgCQAWgBAbgLQARgHAcgPICNhJQABgHAEgIIALgPQAOgVgBgbQgCgagOgWQgMgSgYgUQgigcgggMIgdgJIgdgJQgzgQgrggQgrghgegrQgSgagGgVQgGgWADgkQABgLACgIIABgNQAGgfAXgfQASgYAfgbQAdgZAegWQAGgFADgEQADgEADgKQAFgNAXgNQAbgNA3gWIBngnQAbgKASgEQAYgGATACIACgCQAHgGANABIAVAFQAJABAWABQATACAKADQAYAJARAaQAUAhACAxQAAAbgKANQgGAIgLADQgLADgJgGQgJATgTAUQgMAMgZAVIg6AvQgHAGgDAEIgDAHIgDAHQgGALgNABQgOACgIgJQgEAHgGACQgIACgGgBQgIgCgEAAIgHABIgGACQgPACgNgPQgHgIgEgLQgEgHgEgVQgGgVACgMQAEgQANgNQAKgIATgMIBhg5QARgKAKAAQAMAAAHAMQAHALgEAKQgDAHgHAGIgOAJIhJAqQAKADAHAJQAGgKAPgBIALgBIAMgBQALgCAQgNQAZgUALgNQAYgbAGgjQgfgCgagQQgKADgSAEQhxASh1BIQgbAQgUAQIgbAZIgbAYIghAbQgUAPgLAMQAHACAFAGQAEAFADAGIAGAOQAFALAPAXQAPAWALALQAMANATANIAjAVICKBOIAhAVQASAMANAMQANAOAMATQAZApABAeQACAUgIAUQAFABAFACQAHAFADAGQADAGAAAJQABAGgBAHQgCAMgIANQgJANgOANQABALgGAMQgFAJgNALQgdAYgqAWQgaAOgzAWQgfAOgRAEQgVAGgYABQgDAFgDADQgKAGgUAAQgdABg+gBQg7AAggABIgGAAIgKgBgAhOJmQgMgCgKgTQgRgfgIgZQgMgfAAgdQABgTAIgkQAO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AQAAAFgCADQgFAHgKABQgJACgHgHQgEgEgCgIIgCgPIgBgiIAAgeQAAgeAQgkQAJgWAYgnIAQgZQALgTAKgCQAJgCAHAGQAIAGAAAJQABAIgJAOIgZAqQgPAZgIATIgIASQgGATABAbIAAADQAnhGAhhKIAIgOQAFgHAHgDQAHgDAIADQAIADAEAHQAEAJgEARIgJAeIgIAeQgDAOgCADQgCAFgDACQADAEABAGQACAHgDAGQAGABAFADQAAgYAIgRQAEgIAEgEIAAAAQgBgKAJgRIAVgjIAJgQQAQgXAZgJQANgEANABQAOABALAHQAJAFAEAGQADAGgBAGQAAAHgEAFQgEAFgHACQgGACgHgDIgGgEQgFgCgDgBQgEAAgGACQgNAFgIALIgGAKIgEAKIgIANIgHAMIgGALQgCAGgEADQABADgBAEIgEALQgHATAEAZIAFgKIAEgLQACgHAIgLIANgWQAMgSALgDQAGgCAHADQAGACAEAFQAGAJgCAQQgEAkgVAoQgGALgFAEQgIAHgJgCIgGgCIgFADIgKAIQgGADgHgBQgHAAgFgDQgIgEgFgIIgEAGIgFAJQgEAMgJAFQgJAIgUABQgQAAgHgHgASSEFQgGAEgHABQgHAAgGgEQgGgGgCgLIgJAFQgNAEgKgEQgKgGgEgSQgDgLgBgNQAAgGgCgCIgDgCIgEgCQgKgGABgTQABgcAPgoIAEgKQgJAHgHACIAAAGQAAAIgIAJIgUAUQgOANgGAHIgMASQgLARgPANQgMAMgLAEQgPAHgMgHQgNgGgEgPQgEgLACgSQAAgYADgQQADgVAIgQQAHgNANgQQAbgiAagEQAHgBAGABQADgDAEgDQAFgDAGAAQAGAAAFADQAFAEADAFQACAFAAALIAAAKIABgBIALgIQAGgGAFgHQAEgEAAgEIAAgHQgBgEACgHIAEgKIAGgUQAFgKAKgNIAUgVQALgMAHgDQAIgEAJAAQAMAAAHAFQAGAFACAJQADAHgCAJQgDAYgTAYIgPARIAHADQAEADACAGQACAGgBAGIgDALIgEALQgEAMgCASIADgDQAFgDAJgDIAFgBIABgHQACgLAEgIQADgHAHgKQAMgQAKgJQANgMAOgFQAMgFAMAAQALABAGAEQALAFADASQAEAVgJASQgGAMgNAKQgGAFgTANQgKAHgGABQgKAEgHgEIgFgCIgCABIAAAEQgCAsgQAsIgCAGIACAGIAIAMQAKgJAFgCIACgBIABgDQAQgjAWggIAMgPIAKgNQAFgIAGgDQAFgDAGAAQAGABAFADQAEADADAFQACAGAAAGQgBAIgMAOQgQATgPAYIgLATIgIATIgGAMQgEAFgFACIgIAGQgWAQgQACIgHAAQgNAAgGgIgAPGB8QgDAIgBAOQgDATAAAJQAMgLAJgPQgGgEgDgHQgCgGgBgMIAAgBIgCAGgAThAqQgFAEgGAJIgEAEQAEgBAFgEIAHgHIADgCIACgGgApBDuIgEgGIgCgBQgHgDgDgHQgCgEAAgGIABgMIAAgWQABgkALgcQANggAkgmQALgNAJgBQAJgBAGAFQAGAEADAGQADAAAEABQAFACAEAFIACABQAHgEAJADQAJACAEALQACAFgBALIACAAQAFgBAFAEQAFACACAEQADAFABAFQAAAGgCAFQgDAFgHAFIgMAIIgLAKIgJAIIgFAGIgQATIgOAVIgQAVQgHAMgJAHQgLAIgOACIgGAAQgKAAgHgEgAodCcQgDAHgDAOIgCAIIgCAHIgBADIADgDIAGgJIARgYIgCgBQgFgGgDgGIAAAAIgFAKgAnmBhQgGAKgCAIIABAAQAFgKACgIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:47.9283,y:32.4014}).wait(1).to({graphics:mask_1_graphics_2,x:47.9283,y:33.1897}).wait(1).to({graphics:mask_1_graphics_3,x:47.9283,y:58.2586}).wait(1).to({graphics:mask_1_graphics_4,x:47.9283,y:65.5996}).wait(1).to({graphics:mask_1_graphics_5,x:47.9283,y:65.5996}).wait(1).to({graphics:mask_1_graphics_6,x:47.9283,y:65.5996}).wait(1).to({graphics:mask_1_graphics_7,x:47.9283,y:65.5996}).wait(1).to({graphics:mask_1_graphics_8,x:47.9283,y:65.5996}).wait(1).to({graphics:mask_1_graphics_9,x:53.6408,y:65.5996}).wait(1).to({graphics:mask_1_graphics_10,x:62.4072,y:65.5996}).wait(1).to({graphics:mask_1_graphics_11,x:62.4072,y:65.5996}).wait(1).to({graphics:mask_1_graphics_12,x:75.9351,y:65.5996}).wait(1).to({graphics:mask_1_graphics_13,x:76.1651,y:65.5996}).wait(1).to({graphics:mask_1_graphics_14,x:76.1651,y:65.5996}).wait(1).to({graphics:mask_1_graphics_15,x:76.1651,y:65.5996}).wait(1).to({graphics:mask_1_graphics_16,x:76.1651,y:65.5996}).wait(1).to({graphics:mask_1_graphics_17,x:76.1651,y:65.5996}).wait(1).to({graphics:mask_1_graphics_18,x:81.4218,y:65.5996}).wait(1).to({graphics:mask_1_graphics_19,x:81.4218,y:65.5996}).wait(1).to({graphics:mask_1_graphics_20,x:86.3327,y:65.5996}).wait(1).to({graphics:mask_1_graphics_21,x:88.5075,y:65.5996}).wait(1).to({graphics:mask_1_graphics_22,x:90.8019,y:65.5996}).wait(1).to({graphics:mask_1_graphics_23,x:99.0619,y:65.5996}).wait(1).to({graphics:mask_1_graphics_24,x:107.4709,y:65.5996}).wait(1).to({graphics:mask_1_graphics_25,x:107.4709,y:65.5996}).wait(1).to({graphics:mask_1_graphics_26,x:121.3449,y:65.5996}).wait(1).to({graphics:mask_1_graphics_27,x:121.4717,y:65.5996}).wait(1).to({graphics:mask_1_graphics_28,x:121.4717,y:65.5996}).wait(1).to({graphics:mask_1_graphics_29,x:121.4717,y:65.5996}).wait(1).to({graphics:mask_1_graphics_30,x:121.4717,y:65.5996}).wait(1).to({graphics:mask_1_graphics_31,x:125.6421,y:65.5996}).wait(1).to({graphics:mask_1_graphics_32,x:125.6421,y:65.5996}).wait(1).to({graphics:mask_1_graphics_33,x:131.005,y:65.5996}).wait(1).to({graphics:mask_1_graphics_34,x:131.005,y:65.5996}).wait(1).to({graphics:mask_1_graphics_35,x:132.0017,y:65.5996}).wait(325));

	// Frame_1___So_Much_More
	this.instance_17 = new lib.Frame1SoMuchMore();
	this.instance_17.setTransform(4,32);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).to({_off:true},132).wait(227));

	// Frame_1___Black_Slanted_Box
	this.instance_18 = new lib.Frame1BlackSlantedBox_1();
	this.instance_18.setTransform(-154,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:149},23,cjs.Ease.cubicOut).to({_off:true},110).wait(227));

	// Frame_1___Gradient_Below_Type
	this.instance_19 = new lib.Frame1GradientBelowType();

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},133).wait(227));

	// Image_01
	this.instance_20 = new lib.Image01();
	this.instance_20.setTransform(252.85,160.45,0.8813,0.8812,0,0,0,0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:0,regY:0,scaleX:1,scaleY:1,x:261.25,y:141.15},132).to({_off:true},1).wait(227));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-75,65.2,735.1,350.90000000000003);
// library properties:
lib.properties = {
	id: 'A0C51CAA1CD4478B86D43A5AEAEAA432',
	width: 480,
	height: 320,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SleepSavor_480x320_atlas_1.png?1616973157479", id:"SleepSavor_480x320_atlas_1"},
		{src:"images/SleepSavor_480x320_atlas_2.png?1616973157479", id:"SleepSavor_480x320_atlas_2"}
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
an.compositions['A0C51CAA1CD4478B86D43A5AEAEAA432'] = {
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