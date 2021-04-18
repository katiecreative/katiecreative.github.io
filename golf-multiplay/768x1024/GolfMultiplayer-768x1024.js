(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"GolfMultiplayer_768x1024_atlas_1", frames: [[0,0,2000,1333]]},
		{name:"GolfMultiplayer_768x1024_atlas_2", frames: [[0,1069,1602,900],[0,0,1600,1067]]},
		{name:"GolfMultiplayer_768x1024_atlas_3", frames: [[745,0,1058,604],[745,606,1171,342],[699,1631,768,402],[0,996,697,1024],[699,996,768,633],[0,0,743,994]]},
		{name:"GolfMultiplayer_768x1024_atlas_4", frames: [[0,485,385,288],[0,0,830,288],[1227,179,600,288],[0,290,1225,193],[832,0,1080,177],[387,485,652,104],[387,591,291,195],[1227,469,550,210],[1779,469,263,206]]}
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



(lib.CachedBmp_79 = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(img.CachedBmp_75);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2558,158);


(lib.CachedBmp_74 = function() {
	this.initialize(img.CachedBmp_74);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2558,400);


(lib.CachedBmp_73 = function() {
	this.initialize(img.CachedBmp_73);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2558,528);


(lib.CachedBmp_72 = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BarunderTagline = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BottomTanSlantedBox = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowType = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowTypecopy = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frame1GradientBelowTypecopy2 = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Frame3BookLINKarea = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Frame1Image = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Frame2Image = function() {
	this.initialize(img.Frame2Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1685);


(lib.Frame3Image = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Frame4Image = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.SoMuchMore = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.TSLogoWhite = function() {
	this.initialize(ss["GolfMultiplayer_768x1024_atlas_4"]);
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


(lib.Image04 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame4Image();
	this.instance.setTransform(-800,-533.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image04, new cjs.Rectangle(-800,-533.5,1600,1067), null);


(lib.Image03 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Frame3Image();
	this.instance.setTransform(-1000,-666.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image03, new cjs.Rectangle(-1000,-666.5,2000,1333), null);


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
	this.instance = new lib.Frame2Image();
	this.instance.setTransform(-1500,-842.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image02, new cjs.Rectangle(-1500,-842.5,3000,1685), null);


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
	this.instance = new lib.Frame1Image();
	this.instance.setTransform(-945.5,-531.15,1.1804,1.1804);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image01, new cjs.Rectangle(-945.5,-531.1,1891,1062.3000000000002), null);


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
	this.instance = new lib.CachedBmp_79();
	this.instance.setTransform(-128.55,-82.2,0.2431,0.2431);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BOOKNOW, new cjs.Rectangle(-128.5,-82.2,257.1,146.8), null);


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
	this.instance.setTransform(-145.5,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame3BookLINKarea_1, new cjs.Rectangle(-145.5,-97.5,291,195), null);


(lib.Pass = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_78();
	this.instance.setTransform(-112.55,-158.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pass, new cjs.Rectangle(-112.5,-158.6,192.5,144), null);


(lib.MULTIPLAYPASS799 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-223.6,-158.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MULTIPLAYPASS799, new cjs.Rectangle(-223.6,-158.6,415,144), null);


(lib._799 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-166.15,-158.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._799, new cjs.Rectangle(-166.1,-158.6,300,144), null);


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
	this.instance.setTransform(-348.5,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1GradientBelowType_1, new cjs.Rectangle(-348.5,-512,697,1024), null);


(lib.More = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-639.5,-659.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.More, new cjs.Rectangle(-639.5,-659.1,1279,79), null);


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
	this.instance = new lib.CachedBmp_74();
	this.instance.setTransform(-639.5,-659.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame310Rounds, new cjs.Rectangle(-639.5,-659.1,1279,200), null);


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
	this.instance = new lib.CachedBmp_73();
	this.instance.setTransform(-639.5,-659.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Championship, new cjs.Rectangle(-639.5,-659.1,1279,264), null);


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
	this.instance.setTransform(-384,-316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Frame1GradientBelowTypecopy_1, new cjs.Rectangle(-384,-316.5,768,633), null);


(lib.TURNINGSTONEGOLFMULTIPLAYPASS = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-323,-126.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TURNINGSTONEGOLFMULTIPLAYPASS, new cjs.Rectangle(-323,-126.5,585.5,171), null);


(lib.Multiplay = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-336.6,-126.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Multiplay, new cjs.Rectangle(-336.6,-126.5,612.5,96.5), null);


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
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(-295.6,-51.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.THANTEETIMES, new cjs.Rectangle(-295.6,-51.1,540,88.5), null);


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
	this.instance.setTransform(-326,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BarunderTagline_1, new cjs.Rectangle(-326,-52,652,104), null);


// stage content:
(lib.GolfMultiplayer768x1024 = function(mode,startPosition,loop,reversed) {
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

	// TS_Logo_White
	this.instance = new lib.TSLogoWhite();
	this.instance.setTransform(453,771);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Bottom_Tan_Slanted_Box
	this.instance_1 = new lib.BottomTanSlantedBox();
	this.instance_1.setTransform(0,622);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// Frame_3___BOOK_NOW
	this.instance_2 = new lib.Frame3BOOKNOW();
	this.instance_2.setTransform(239.05,546.2,2.057,2.0562,0,0,0,1.1,-7.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(290).to({_off:false},0).to({regX:0,regY:-8.8,scaleX:1,scaleY:1,x:238.5,y:555,alpha:1},20,cjs.Ease.cubicOut).wait(50));

	// Frame_3___Book_LINK_area
	this.instance_3 = new lib.Frame3BookLINKarea_1();
	this.instance_3.setTransform(242.9,557.1,1.9657,1.9648,0,0,0,0.8,1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(290).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:242.5,y:556.5,alpha:1},20,cjs.Ease.cubicOut).wait(50));

	// _99
	this.instance_4 = new lib._799();
	this.instance_4.setTransform(-208.65,320.8,1,1,0,0,0,-16.2,-86.7);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(283).to({_off:false},0).to({x:236.35},21,cjs.Ease.quintOut).wait(56));

	// Pass
	this.instance_5 = new lib.Pass();
	this.instance_5.setTransform(-209.2,210.75,1,1,0,0,0,-16.2,-86.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(280).to({_off:false},0).to({x:238.05},21,cjs.Ease.quintOut).wait(59));

	// MULTI_PLAY_PASS_$799
	this.instance_6 = new lib.MULTIPLAYPASS799();
	this.instance_6.setTransform(-208.55,213,1,1,0,0,0,-16.2,-15.6);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(277).to({_off:false},0).to({x:236.45},21,cjs.Ease.quintOut).wait(62));

	// Frame_1___Gradient_Below_Type
	this.instance_7 = new lib.Frame1GradientBelowType_1();
	this.instance_7.setTransform(348.5,512);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(264).to({_off:false},0).to({alpha:1},13).wait(83));

	// Image_4
	this.instance_8 = new lib.Image04();
	this.instance_8.setTransform(415.05,378.55,1.2556,1.2556,0,0,0,1.1,1.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(264).to({_off:false},0).to({regX:1.2,scaleX:1.2701,scaleY:1.2702,x:408.15,y:373.95,alpha:1},13).to({regX:2,regY:1.6,scaleX:1.3619,scaleY:1.3619,x:363.85,y:344.95},82).wait(1));

	// __More
	this.instance_9 = new lib.More();
	this.instance_9.setTransform(384,699.15,1,1,0,0,0,0,-619.6);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(199).to({_off:false},0).to({y:608.15,alpha:1},23,cjs.Ease.cubicOut).to({_off:true},56).wait(82));

	// Championship
	this.instance_10 = new lib.Championship();
	this.instance_10.setTransform(384,468.6,1,1,0,0,0,0,-535);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(195).to({_off:false},0).to({y:377.6,alpha:1},23,cjs.Ease.cubicOut).to({_off:true},60).wait(82));

	// Frame_3___10_Rounds
	this.instance_11 = new lib.Frame310Rounds();
	this.instance_11.setTransform(381.9,402.15,1,1,0,0,0,0,-383);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(191).to({_off:false},0).to({y:311.15,alpha:1},23,cjs.Ease.cubicOut).to({_off:true},64).wait(82));

	// Frame_1___Gradient_Below_Type_copy
	this.instance_12 = new lib.Frame1GradientBelowTypecopy_1();
	this.instance_12.setTransform(384,584.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180).to({_off:false},0).to({alpha:1},11).to({_off:true},87).wait(82));

	// Image_3
	this.instance_13 = new lib.Image03();
	this.instance_13.setTransform(-341.1,277.25,1.593,1.5929,0,0,0,-1.4,1.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(180).to({_off:false},0).to({regY:1.4,scaleX:1.5812,scaleY:1.5811,x:-331.55,y:276.2,alpha:1},11).to({regX:-2.1,regY:2.2,scaleX:1.489,scaleY:1.4889,x:-257.25,y:266.9},86).to({_off:true},1).wait(82));

	// TURNING_STONE_GOLF_MULTI_PLAY_PASS
	this.instance_14 = new lib.TURNINGSTONEGOLFMULTIPLAYPASS();
	this.instance_14.setTransform(377.05,301.75,1,1,0,0,0,-30.4,-7.8);
	this.instance_14.alpha = 0;
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(112).to({_off:false},0).to({y:408.55,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},55).wait(168));

	// Multiplay
	this.instance_15 = new lib.Multiplay();
	this.instance_15.setTransform(379.95,369.65,1,1,0,0,0,-30.4,-84.9);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(107).to({_off:false},0).to({y:476.45,alpha:1},25,cjs.Ease.cubicOut).to({_off:true},60).wait(168));

	// Image_02
	this.instance_16 = new lib.Image02();
	this.instance_16.setTransform(704,759.25,1.2753,1.2752,0,0,0,1.4,0.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(95).to({_off:false},0).to({regY:0.9,scaleX:1.286,scaleY:1.286,x:703.35,y:764.65,alpha:1},12).to({regX:2,regY:1.4,scaleX:1.3613,scaleY:1.3613,x:698.65,y:801.25},84).to({_off:true},1).wait(168));

	// THAN_TEE_TIMES
	this.instance_17 = new lib.THANTEETIMES();
	this.instance_17.setTransform(311.6,603.1,1,1,0,0,0,-25.6,-6.9);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({_off:false},0).to({y:529.95,alpha:1},24,cjs.Ease.cubicOut).to({_off:true},49).wait(252));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("Ak3FRQgQgRgKgZQgIgPgLgtQgLgvAFgZQAGghAggdQAVgTArgZIDYh8QAmgVAVAAQAaABAQAZQAQAXgIAYQgHAPgQALQgLAIgVAMIihBaQAWAJAQARQAMgUAhgDIAagBQARgBAJgBQAXgGAkgcQA4grAagcQA1g7AMhLQhYgFhHg4QgigcgLgaQgLgbAEgrQAFgkAQgOQAPgNAdADIAwAJQASADAxADQArADAXAIQA2ASAlA6QAuBIACBqQABA6gVAbQgOATgZAGQgZAGgTgNQgVAqgrArQgbAag4AtIiABnQgPALgGAJIgHAQIgHAPQgNAXgeAEQgeAEgSgTQgJANgOAGQgQAFgPgCQgSgGgJAAQgGAAgJADIgPADIgIABQgbAAgZgcg");
	var mask_graphics_2 = new cjs.Graphics().p("AqJF8QgbgIgKgeQgHgVAGgiQALhEA1hDQAogzBGg8QA/g2BCgvQAQgLAFgJQAGgJAGgVQANgdAzgaQA8gfB6gtIDlhWQA+gVAogJQA1gNAsADIADgEQAPgNAdADIAwAJQASAEAyADQArADAXAIQA1ARAlA6QAvBJACBpQABA6gWAdQgOARgZAHQgZAGgSgOQgVArgsAqQgaAag5AtIiABnQgPAMgGAJIgIAPIgGAQQgNAXgeADQgfAEgSgSQgIANgPAFQgPAGgPgDQgSgGgJAAQgGAAgJADIgPAEQggAFgdggQgOgRgLgZQgHgQgLgtQgMguAFgaQAHghAegdQAVgTAsgYIDYh8QAlgWAWABQAbABAQAYQAQAYgJAXQgHAPgQANQgKAHgVAMIijBaQAXAIAPARQAMgTAigEIAagBQAQAAAKgCQAYgGAjgbQA5grAagcQA0g7AMhMQhDgDg6gjQgXAHgoAGQj9ApkDCaQg+AkgrAjQgWASgmAjQgoAmgUAPQgKAKhAAxQguAjgbAaQgFAHgOAMQgKAMgKAGQgUAOgUAAQgHAAgHgCg");
	var mask_graphics_3 = new cjs.Graphics().p("ADJOcQgQgEgLgNQgJgMgDgQQgBgRAHgOQgLAFgMABQgcAEgYgQQgagQgBgZQAAgSANgVIAZgiQAegtgCg7QgDg5gggvQgagng3gsQhLg7hIgbQgYgJgngLIhBgTQhxgjhihHQhghGhDhfQgng2gNguQgNgwAFhPQACgZAGgRQAAgNADgPQALhEA1hEQAogzBGg8QA/g2BCgwQAQgKAFgJQAGgKAGgUQANgdAzgaQA8gfB6guIDlhVQA+gVAogKQA1gMAsADIADgEQAPgNAdADIAwAJQASADAyADQArADAXAIQA1ASAlA6QAvBIACBqQABA6gWAcQgOATgZAGQgZAGgSgNQgVAqgsArQgaAag5AtIiABnQgPALgGAJIgIAQIgGAPQgNAXgeAEQgfAEgSgTQgIANgPAGQgPAFgPgCQgSgGgJAAQgGAAgJADIgPADQggAFgdggQgPgRgKgZQgHgPgLgtQgMgvAFgZQAHghAegdQAVgTAsgZIDYh9QAlgVAWAAQAbABAQAZQAQAXgJAYQgHAPgQAMQgKAIgVAMIijBaQAXAJAPARQAMgUAigDIAagBQAQgBAKgBQAYgGAjgcQA5grAagcQA0g8AMhLQhDgEg6gjQgXAHgoAHQj9ApkDCbQg+AkgrAiQgWASgmAkQgoAlgUAQQgKAJhAAxQgsAhgaAaIABAAQAPAFALAMQAIAKAIARIAMAcQAMAaAhAwQAjAxAYAXQAbAdAqAcQAbARAzAcIEyCqQAxAcAbARQAoAaAbAbQAdAeAbAqQA4BXADBBQAEAsgSAtQANABAKAGQAQAJAHAPQAHANAAATQABANgCAOQgFAagTAdQgXAkgqAjQgUASgSAFQgHACgIAAQgIAAgJgDg");
	var mask_graphics_4 = new cjs.Graphics().p("ArcQ9QgTgCgNgJQgWgOgBgZQgBgaAUgQQAOgMAWgEIAIgBQgCgHAAgJQABgXANgPIARgNQAMgJAEgFQANgRAIgGQASgNAsACICVAGQA0AEAegEQAzgDA7gYQAmgOBAgiIE4ieQACgPAKgQIAZgiQAegugCg6QgDg5gggvQgagog3grQhMg8hHgbQgYgJgngLIhBgTQhxgjhihGQhghFhDhfQgng4gNguQgNgwAFhOQACgaAGgRQAAgMADgQQALhEA1hDQAogzBGg8QA/g3BCgvQAQgLAFgJQAGgJAGgVQANgdAzgaQA8gfB6gtIDlhWQA+gVAogJQA1gNAsADIADgEQAPgNAdADIAwAJQASAEAyADQArADAXAIQA1ARAlA6QAvBJACBpQABA6gWAdQgOASgZAHQgZAGgSgOQgVArgsAqQgaAag5AtIiABnQgPAMgGAJIgIAPIgGAQQgNAXgeADQgfAEgSgSQgIANgPAFQgPAGgPgDQgSgGgJAAQgGAAgJADIgPAEQggAFgdggQgPgRgLgZQgHgQgLgtQgMguAFgaQAHghAfgdQAVgTAsgYIDYh9QAlgWAWABQAbABAQAYQAQAYgJAXQgHAPgQANQgKAIgVAMIijBaQAXAIAPARQAMgTAigEIAagBQAQAAAKgCQAYgGAjgbQA5grAagdQA0g7AMhMQhDgDg6gjQgXAHgoAGQj9ApkDCbQg+AkgrAjQgWASgmAjQgoAmgUAPQgKAKhAAxQgsAhgaAaIABAAQAPAEALANQAIAKAIAQIAMAdQAMAaAhAwQAjAwAYAZQAbAcAqAdQAbAQAzAdIEyCoQAxAcAbARQAoAbAbAbQAdAdAbArQA4BXADBBQAEArgSAtQANABAKAGQAQAJAHAPQAHAOAAASQABAOgCANQgFAagTAdQgTAdgfAcQAEAXgOAaQgMAUgeAZQhBA0hdAwQg7AdhwAwQhFAdglALQgvAMg3AEQgFAJgJAGQgUAOgtABQhBACiJgCQiFgChGADIgRAAIgUgBg");
	var mask_graphics_5 = new cjs.Graphics().p("An6Q9QgTgCgNgJQgMgHgGgMIgxgHQg5gIgbgHQgugKghgQQg6gbg4g8Qg+hBgjhLQglhTAEhRQADhGAkhFQAihAA3g1QAngmAhgEQAWgCATAMQAVAOAAAUQBthBC2hZQAigRATADQATAEAMAQQALAQABATQABAcgZAoQg1BXhrBLQgqAdg5AeQgfAThHAjQgdAOgDARQgCANANAVQAZAnAPAUQAYAgAcASQAbARA8AUQBHAXAmAGQAiAEAKADQAZAHAMAPIAAABQANgCARABICVAGQA0AEAegEQAzgDA7gYQAlgOBAgiIE5ieQACgPAKgQIAZgiQAegugCg6QgDg5gggvQgagog3grQhMg8hIgbQgYgJgngLIhBgTQhwgjhihGQhghFhDhfQgng4gNguQgNgwAFhOQACgaAGgRQAAgMADgQQALhEA1hDQAogzBGg8QA/g3BCgvQAQgLAFgJQAGgJAGgVQANgdAygaQA8gfB6gtIDmhWQA+gVAogJQA1gNAsADIADgEQAPgNAdADIAwAJQASAEAyADQArADAXAIQA1ARAlA6QAvBJACBpQABA6gWAdQgOASgZAHQgZAGgSgOQgVArgsAqQgaAag5AtIiABnQgPAMgGAJIgIAPIgGAQQgNAXgeADQgfAEgSgSQgIANgPAFQgPAGgPgDQgSgGgJAAQgGAAgJADIgPAEQggAFgdggQgPgRgLgZQgHgQgLgtQgMguAFgaQAHghAfgdQAVgTAsgYIDYh9QAlgWAWABQAbABAQAYQAQAYgJAXQgHAPgQANQgKAIgVAMIijBaQAXAIAPARQAMgTAigEIAagBQAQAAAKgCQAYgGAjgbQA5grAagdQA0g7AMhMQhDgDg6gjQgXAHgoAGQj9ApkECbQg+AkgrAjQgWASglAjQgoAmgUAPQgKAKhAAxQgsAhgaAaIABAAQAPAEALANQAIAKAIAQIAMAdQAMAaAhAwQAjAwAYAZQAbAcAqAdQAaAQAzAdIEzCoQAxAcAbARQAoAbAbAbQAdAdAbArQA4BXADBBQAEArgSAtQANABAKAGQAQAJAHAPQAHAOAAASQABAOgCANQgFAagTAdQgTAdgfAcQAEAXgOAaQgMAUgeAZQhBA0hdAwQg7AdhxAwQhFAdglALQgvAMg3AEQgFAJgJAGQgTAOgtABQhBACiJgCQiFgChGADIgRAAIgUgBg");
	var mask_graphics_6 = new cjs.Graphics().p("An6Q9QgTgCgNgJQgMgHgGgMIgxgHQg5gIgbgHQgugKghgQQg6gbg4g8Qg+hBgjhLQglhTAEhRQADhGAkhFQAihAA3g1QAngmAhgEQAWgCATAMQAVAOAAAUQBthBC2hZQAigRATADQATAEAMAQQALAQABATQABAcgZAoQg1BXhrBLQgqAdg5AeQgfAThHAjQgdAOgDARQgCANANAVQAZAnAPAUQAYAgAcASQAbARA8AUQBHAXAmAGQAiAEAKADQAZAHAMAPIAAABQANgCARABICVAGQA0AEAegEQAzgDA7gYQAlgOBAgiIE5ieQACgPAKgQIAZgiQAegugCg6QgDg5gggvQgagog3grQhMg8hIgbQgYgJgngLIhBgTQhwgjhihGQhghFhDhfQgng4gNguQgNgwAFhOQACgaAGgRQAAgMADgQQALhEA1hDQAogzBGg8QA/g3BCgvQAQgLAFgJQAGgJAGgVQANgdAygaQA8gfB6gtIDmhWQA+gVAogJQA1gNAsADIADgEQAPgNAdADIAwAJQASAEAyADQArADAXAIQA1ARAlA6QAvBJACBpQABA6gWAdQgOASgZAHQgZAGgSgOQgVArgsAqQgaAag5AtIiABnQgPAMgGAJIgIAPIgGAQQgNAXgeADQgfAEgSgSQgIANgPAFQgPAGgPgDQgSgGgJAAQgGAAgJADIgPAEQggAFgdggQgPgRgLgZQgHgQgLgtQgMguAFgaQAHghAfgdQAVgTAsgYIDYh9QAlgWAWABQAbABAQAYQAQAYgJAXQgHAPgQANQgKAIgVAMIijBaQAXAIAPARQAMgTAigEIAagBQAQAAAKgCQAYgGAjgbQA5grAagdQA0g7AMhMQhDgDg6gjQgXAHgoAGQj9ApkECbQg+AkgrAjQgWASglAjQgoAmgUAPQgKAKhAAxQgsAhgaAaIABAAQAPAEALANQAIAKAIAQIAMAdQAMAaAhAwQAjAwAYAZQAbAcAqAdQAaAQAzAdIEzCoQAxAcAbARQAoAbAbAbQAdAdAbArQA4BXADBBQAEArgSAtQANABAKAGQAQAJAHAPQAHAOAAASQABAOgCANQgFAagTAdQgTAdgfAcQAEAXgOAaQgMAUgeAZQhBA0hdAwQg7AdhxAwQhFAdglALQgvAMg3AEQgFAJgJAGQgTAOgtABQhBACiJgCQiFgChGADIgRAAIgUgBgAKfAXQgNgDgRgPQgNgMgFgNQgHgOAAgUQgBg5AdgzQAFgIANgTQALgVAMgMQAPgRATgEQALgCAMAEQAMAEAJAJQAIAIADAMQACAMgDALQgEAJgLAOIgaAjQgMAVgEASQAJgEAWgSQAUgRAWgQQAcgVAVAAQAMgBAKAGQALAFAGAKQAHAKAAAMQABAMgFALQgGALgPALQgSALgJAGQgKAHgPAOQgRAQgHAFQgeAXgsAOQgRAFgLAAIgKgBg");
	var mask_graphics_7 = new cjs.Graphics().p("An6Q9QgTgCgNgJQgMgHgGgMIgxgHQg5gIgbgHQgugKghgQQg6gbg4g8Qg+hBgjhLQglhTAEhRQADhGAkhFQAihAA3g1QAngmAhgEQAWgCATAMQAVAOAAAUQBthBC2hZQAigRATADQATAEAMAQQALAQABATQABAcgZAoQg1BXhrBLQgqAdg5AeQgfAThHAjQgdAOgDARQgCANANAVQAZAnAPAUQAYAgAcASQAbARA8AUQBHAXAmAGQAiAEAKADQAZAHAMAPIAAABQANgCARABICVAGQA0AEAegEQAzgDA7gYQAlgOBAgiIE5ieQACgPAKgQIAZgiQAegugCg6QgDg5gggvQgagog3grQhMg8hIgbQgYgJgngLIhBgTQhwgjhihGQhghFhDhfQgng4gNguQgNgwAFhOQACgaAGgRQAAgMADgQQALhEA1hDQAogzBGg8QA/g3BCgvQAQgLAFgJQAGgJAGgVQANgdAygaQA8gfB6gtIDmhWQA+gVAogJQA1gNAsADIADgEQAPgNAdADIAwAJQASAEAyADQArADAXAIQA1ARAlA6QAvBJACBpQABA6gWAdQgOASgZAHQgZAGgSgOQgVArgsAqQgaAag5AtIiABnQgPAMgGAJIgIAPIgGAQQgNAXgeADQgfAEgSgSQgIANgPAFQgPAGgPgDQgSgGgJAAQgGAAgJADIgPAEQggAFgdggQgPgRgLgZQgHgQgLgtQgMguAFgaQAHghAfgdQAVgTAsgYIDYh9QAlgWAWABQAbABAQAYQAQAYgJAXQgHAPgQANQgKAIgVAMIijBaQAXAIAPARQAMgTAigEIAagBQAQAAAKgCQAYgGAjgbQA5grAagdQA0g7AMhMQhDgDg6gjQgXAHgoAGQj9ApkECbQg+AkgrAjQgWASglAjQgoAmgUAPQgKAKhAAxQgsAhgaAaIABAAQAPAEALANQAIAKAIAQIAMAdQAMAaAhAwQAjAwAYAZQAbAcAqAdQAaAQAzAdIEzCoQAxAcAbARQAoAbAbAbQAdAdAbArQA4BXADBBQAEArgSAtQANABAKAGQAQAJAHAPQAHAOAAASQABAOgCANQgFAagTAdQgTAdgfAcQAEAXgOAaQgMAUgeAZQhBA0hdAwQg7AdhxAwQhFAdglALQgvAMg3AEQgFAJgJAGQgTAOgtABQhBACiJgCQiFgChGADIgRAAIgUgBgAIUCyQgJgHgFgMQgFgLACgLQACgMAIgKQAGgJAMgEIAQgFQAKgCAGgCQAKgFAIgKIANgUQARgZAVgaIgDgCQgNgMgFgNQgHgOAAgUQgBg5AdgzQAFgIANgTQALgVAMgMQAPgRATgEQALgCAMAEQAMAEAJAJIAEADQAQgJASAGQAWAFAJAXQAFALgDAZIAEAAQAMgBAKAGQALAFAGAKQAHAKAAAMQABAMgFALQgGALgPALQgSALgJAGQgKAHgPAOIgVATIgKANQgWAagNAOIghAtQgXAhgLAMQgRAbgSAOQgZATggAEIgNABQgXAAgOgKgALch/QgMAVgEASIADgBQAKgUAFgTIgCABg");
	var mask_graphics_8 = new cjs.Graphics().p("An6Q9QgTgCgNgJQgMgHgGgMIgxgHQg5gIgbgHQgugKghgQQg6gbg4g8Qg+hBgjhLQglhTAEhRQADhGAkhFQAihAA3g1QAngmAhgEQAWgCATAMQAVAOAAAUQBthBC2hZQAigRATADQATAEAMAQQALAQABATQABAcgZAoQg1BXhrBLQgqAdg5AeQgfAThHAjQgdAOgDARQgCANANAVQAZAnAPAUQAYAgAcASQAbARA8AUQBHAXAmAGQAiAEAKADQAZAHAMAPIAAABQANgCARABICVAGQA0AEAegEQAzgDA7gYQAlgOBAgiIE5ieQACgPAKgQIAZgiQAegugCg6QgDg5gggvQgagog3grQhMg8hIgbQgYgJgngLIhBgTQhwgjhihGQhghFhDhfQgng4gNguQgNgwAFhOQACgaAGgRQAAgMADgQQALhEA1hDQAogzBGg8QA/g3BCgvQAQgLAFgJQAGgJAGgVQANgdAygaQA8gfB6gtIDmhWQA+gVAogJQA1gNAsADIADgEQAPgNAdADIAwAJQASAEAyADQArADAXAIQA1ARAlA6QAvBJACBpQABA6gWAdQgOASgZAHQgZAGgSgOQgVArgsAqQgaAag5AtIiABnQgPAMgGAJIgIAPIgGAQQgNAXgeADQgfAEgSgSQgIANgPAFQgPAGgPgDQgSgGgJAAQgGAAgJADIgPAEQggAFgdggQgPgRgLgZQgHgQgLgtQgMguAFgaQAHghAfgdQAVgTAsgYIDYh9QAlgWAWABQAbABAQAYQAQAYgJAXQgHAPgQANQgKAIgVAMIijBaQAXAIAPARQAMgTAigEIAagBQAQAAAKgCQAYgGAjgbQA5grAagdQA0g7AMhMQhDgDg6gjQgXAHgoAGQj9ApkECbQg+AkgrAjQgWASglAjQgoAmgUAPQgKAKhAAxQgsAhgaAaIABAAQAPAEALANQAIAKAIAQIAMAdQAMAaAhAwQAjAwAYAZQAbAcAqAdQAaAQAzAdIEzCoQAxAcAbARQAoAbAbAbQAdAdAbArQA4BXADBBQAEArgSAtQANABAKAGQAQAJAHAPQAHAOAAASQABAOgCANQgFAagTAdQgTAdgfAcQAEAXgOAaQgMAUgeAZQhBA0hdAwQg7AdhxAwQhFAdglALQgvAMg3AEQgFAJgJAGQgTAOgtABQhBACiJgCQiFgChGADIgRAAIgUgBgAIUCyQgHgGgDgHIgGgCQgPgHgHgOQgEgKAAgOIACgZQABgKAAglQABhOAag9QAchGBQhSQAZgbAUgDQATgCAPALQAOAIAGAOQAHAAAIADQAMAEAJAJIAEADQAQgJASAGQAWAFAJAXQAFALgDAZIAEAAQAMgBAKAGQALAFAGAKQAHAKAAAMQABAMgFALQgGALgPALQgSALgJAGQgKAHgPAOIgVATIgKANQgWAagNAOIghAtQgXAhgLAMQgRAbgSAOQgZATggAEIgNABQgXAAgOgKgAJjABQgGAPgIAeIgEARQgEAKgBAHIgBAEIAGgGIANgUQARgZAVgaIgDgCQgNgMgFgNIAAgBQgIAMgEAKgALch/QgMAVgEASIADgBQAKgUAFgTIgCABg");
	var mask_graphics_9 = new cjs.Graphics().p("Ap5Q9QgUgCgNgJQgLgHgGgMIgygHQg4gIgcgHQgtgKgigQQg5gbg5g8Qg+hBgihLQgmhTAEhRQAEhGAjhFQAihAA4g1QAngmAhgEQAWgCATAMQAUAOABAUQBthBC1hZQAigRAUADQASAEAMAQQAMAQAAATQABAcgZAoQg0BXhsBLQgpAdg5AeQggAThGAjQgdAOgEARQgCANANAVQAZAnAPAUQAZAgAbASQAcARA7AUQBIAXAmAGQAiAEAKADQAYAHAMAPIABABQAMgCARABICVAGQA0AEAegEQAzgDA7gYQAmgOBBgiIE3ieQADgPAJgQIAagiQAegugDg6QgDg5gfgvQgbgog3grQhMg8hIgbQgYgJgmgLIhBgTQhxgjhhhGQhghFhDhfQgog4gNguQgNgwAFhOQADgaAFgRQAAgMADgQQAMhEA0hDQAogzBGg8QBAg3BCgvQAPgLAFgJQAHgJAGgVQAMgdA0gaQA8gfB4gtIDnhWQA9gVAogJQA1gNAsADIADgEQAQgNAdADIAwAJQASAEAxADQArADAXAIQA2ARAlA6QAuBJACBpQABA6gVAdQgOASgZAHQgZAGgTgOQgVArgrAqQgbAag4AtIiBBnQgPAMgGAJIgHAPIgHAQQgNAXgeADQgeAEgSgSQgJANgOAFQgQAGgPgDQgSgGgJAAQgGAAgJADIgPAEQggAFgcggQgQgRgKgZQgIgQgLgtQgLguAFgaQAGghAggdQAVgTArgYIDYh9QAmgWAWABQAaABAQAYQAQAYgIAXQgHAPgQANQgLAIgVAMIiiBaQAWAIAQARQAMgTAhgEIAagBQARAAAJgCQAYgGAkgbQA4grAagdQA1g7AMhMQhDgDg6gjQgXAHgpAGQj9ApkECbQg9AkgqAjQgWASgmAjQgpAmgTAPQgKAKhBAxQgsAhgZAaIAAAAQAQAEALANQAIAKAIAQIALAdQAMAaAiAwQAjAwAXAZQAbAcAqAdQAbAQA0AdIEyCoQAxAcAaARQApAbAbAbQAcAdAcArQA4BXADBBQADArgRAtQAMABALAGQAPAJAHAPQAIAOAAASQABAOgDANQgFAagSAdQgTAdgfAcQADAXgOAaQgLAUgfAZQhAA0heAwQg6AdhxAwQhFAdglALQgvAMg2AEQgGAJgIAGQgVAOgtABQhAACiKgCQiFgChGADIgRAAIgTgBgAOnFBQgUgCgMgOQgKgLgBgUQgBgNAFgVIAQhsQAQhiALg1QARhTAWhCQANgnAHgUQALghAHgZQAGgXAHgxQAHgwAGgYQALgtAagMQARgIAUAJQATAIAFASQADALgEAcIgPBMQgJA2gLAnQgGAZgQAuIgYBGQgWBHgRByQgYCjgGAZQgHAjgOANQgMAKgSAAIgDAAgAGUCyQgGgGgEgHIgGgCQgPgHgGgOQgEgKAAgOIACgZQABgKAAglQABhOAZg9QAdhGBPhSQAagbAUgDQASgCAQALQANAIAGAOQAHAAAIADQANAEAIAJIAEADQAQgJATAGQAWAFAJAXQAEALgCAZIADAAQAMgBALAGQALAFAFAKQAHAKABAMQABAMgFALQgGALgPALQgTALgIAGQgKAHgPAOIgVATIgLANQgWAagMAOIghAtQgXAhgLAMQgSAbgSAOQgZATgfAEIgNABQgXAAgPgKgAHkABQgGAPgIAeIgFARQgEAKgBAHIgBAEIAHgGIANgUQARgZAVgaIgDgCQgNgMgGgNIAAgBQgIAMgDAKgAJdh/QgMAVgEASIADgBQAKgUAEgTIgBABg");
	var mask_graphics_10 = new cjs.Graphics().p("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");
	var mask_graphics_11 = new cjs.Graphics().p("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");
	var mask_graphics_12 = new cjs.Graphics().p("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");
	var mask_graphics_13 = new cjs.Graphics().p("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");
	var mask_graphics_14 = new cjs.Graphics().p("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");
	var mask_graphics_15 = new cjs.Graphics().p("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");
	var mask_graphics_16 = new cjs.Graphics().p("AxwQ9QgTgCgNgJQgMgHgGgMIgxgHQg5gIgbgHQgugKghgQQg6gbg4g8Qg+hBgjhLQglhTAEhRQADhGAkhFQAihAA3g1QAngmAhgEQAWgCATAMQAVAOAAAUQBthBC2hZQAigRATADQATAEAMAQQALAQABATQABAcgZAoQg1BXhrBLQgqAdg5AeQgfAThHAjQgdAOgDARQgCANANAVQAZAnAPAUQAYAgAcASQAbARA8AUQBHAXAmAGQAiAEAKADQAZAHAMAPIAAABQANgCARABICVAGQA0AEAegEQAzgDA7gYQAmgOBAgiIE5ieQACgPAKgQIAZgiQAegugCg6QgDg5gggvQgagog3grQhMg8hIgbQgYgJgngLIhBgTQhxgjhihGQhghFhDhfQgng4gNguQgNgwAFhOQACgaAGgRQAAgMADgQQALhEA1hDQAogzBGg8QA/g3BCgvQAQgLAFgJQAGgJAGgVQANgdAzgaQA8gfB6gtIDmhWQA+gVAogJQA1gNArADIADgEQAPgNAdADIAwAJQASAEAyADQArADAXAIQA1ARAlA6QAvBJACBpQABA6gWAdQgOASgZAHQgZAGgSgOQgVArgsAqQgaAag5AtIiABnQgOAMgGAJIgIAPIgGAQQgNAXgeADQgfAEgSgSQgIANgPAFQgPAGgPgDQgSgGgJAAQgGAAgJADIgPAEQggAFgdggQgPgRgLgZQgHgQgLgtQgMguAFgaQAHghAfgdQAVgTAsgYIDYh9QAkgWAWABQAbABAQAYQAQAYgJAXQgHAPgQANQgKAIgVAMIiiBaQAXAIAPARQAMgTAigEIAagBQAQAAAJgCQAYgGAjgbQA5grAagdQA0g7AMhMQhDgDg6gjQgXAHgoAGQj8ApkECbQg+AkgrAjQgWASgmAjQgoAmgUAPQgKAKhAAxQgsAhgaAaIABAAQAPAEALANQAIAKAIAQIAMAdQAMAaAhAwQAjAwAYAZQAbAcAqAdQAbAQAzAdIEzCoQAxAcAbARQAoAbAbAbQAdAdAbArQA3BXADBBQAEArgRAtQAMABAKAGQAQAJAHAPQAHAOAAASQABAOgCANQgFAagTAdQgTAdgeAcQAEAXgOAaQgMAUgeAZQhBA0hdAwQg7AdhxAwQhFAdglALQgvAMg3AEQgFAJgJAGQgUAOgtABQhBACiJgCQiFgChGADIgSAAIgTgBgAP3PjQgcgDgWgqQgmhEgTg2QgZhFABg9QABgrAQhNQAhilAWhXQAiiKAshqQAZhAA5hyQAJgSAGgIIACgCIgCgFQgGgTANgiQA1iIAcg/QAbg4AEgNIAOgxQAJglAEgMQALggAVgsIAkhKQAlhRAVhNIgbANQgbAPgRAPQgOAOgOAVQgGAHgSAdIimEaQgsBKgTApQgNAbgSAvIgeBKQgPAlggA+QgMAVgIAJIgJAJQADAHABAIQACAPgEARIgKAeQgwCRgfCSQgEAVgGAMQgIASgNAJQgNAIgQgCQgRgCgKgLQgLgLgDgUQgCgNACgVQAQjYAmieIAOg+QAIgjAFgaIAHhAQAEgWAJggIAQg0QAJghALg8IgKAQIhvCwQgjA6gNAcIgUAvQgMAigHAPQgKAYghA9QgdA0gLAhQgKAcgGAKQgLAUgRAHQgLAGgMgCQgPBegEATQgGAjgPANQgMALgUgBQgUgCgMgOQgKgLgCgUQAAgNAEgVIARhsQAQhiALg1QARhTAWhCQAMgnAIgUQALghAGgZQAGgXAHgxQAIgwAGgYQAKgtAbgMQARgIATAJQATAIAFASQAEALgEAcIgPBMQgKA2gKAnIgBAEQBQhfA5hfQATgfAFgUQACgdAFgNQADgNAMgNIAVgXQALgMAUgdQATgcALgNQAfgjAiAAQALABAOAEIAXAJQAIADAOADQAMAEAGAHQARAQgJAYQgFASgUASQgGAHgMAIIgUByIgeCXIAMghIATgwQAOgfAZgnQAOgXAegtQAWglAeg2IA0hcQBGh9A3hBQBThjBigrQA7gaAiAVIARAJQAGACAIAAIAPAAQAHABAFADQAJACAJAIQALAKAEAPQAGAXgLAjQgPApgfAsQgZAhgnAqQgRARgMAIQgRAMgSAAQgLApghBDQglBLgLAgQgHAUgLAnQgJAngHAUQgIAVgOAcIgXAxQgWAxgpBuQgGASgFAKIgGAKQAEANgEAQQgDAPgMAXIgdA5QgLAZgCALIABAfQAFBWgXBqQgPBDgpB3QAOAJADAVQACANgCAYQgIA/AABVIAACVQABAsgDAZQgFAngOAcQgJASgNALQgOAMgQAAIgDAAgAS8DyQgLgKgEgRQgDgLgBgVIgFhJQgCgsABgXQAEhBAjhMQAVgxA0hUIAjg4QAZgoAYgFQAUgEAQAOQARANAAATQABASgSAdIg6BcQggA2gTAoQgKAXgHARQgNApACA7IABAFQBWiVBKiiQAJgUAIgKQALgQAPgGQARgGARAGQASAHAIAPQAJATgIAlIgTBCIgTBAQgGAegEAIQgMAVgSABIgLAAQgHAAgEACQgGADgFAJIgcAuQgmBDgSAoQgLAXgHAKQgNARgQAGQgKADgJgBQgCAKgFAHQgKAPgWACIgIABQgQAAgLgLgAhhCyQgHgGgDgHIgGgCQgPgHgHgOQgEgKAAgOIACgZQABgKAAglQABhOAag9QAchGBQhSQAYgbAUgDQATgCAPALQAOAIAGAOQAHAAAIADQAMAEAJAJIAEADQAQgJASAGQAWAFAJAXQAFALgDAZIAEAAQAMgBAKAGQALAFAGAKQAHAKAAAMQABAMgFALQgGALgPALQgSALgJAGQgKAHgPAOIgVATIgKANQgWAagNAOIghAtQgXAhgLAMQgRAbgSAOQgYATggAEIgNABQgXAAgOgKgAgSABQgGAPgIAeIgEARQgEAKgBAHIgBAEIAGgGIANgUQARgZAUgaIgDgCQgMgMgFgNIAAgBQgIAMgEAKgABmh/QgMAVgEASIADgBQAKgUAFgTIgCABg");
	var mask_graphics_17 = new cjs.Graphics().p("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");
	var mask_graphics_18 = new cjs.Graphics().p("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");
	var mask_graphics_19 = new cjs.Graphics().p("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");
	var mask_graphics_20 = new cjs.Graphics().p("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");
	var mask_graphics_21 = new cjs.Graphics().p("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");
	var mask_graphics_22 = new cjs.Graphics().p("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");
	var mask_graphics_23 = new cjs.Graphics().p("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");
	var mask_graphics_24 = new cjs.Graphics().p("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");
	var mask_graphics_25 = new cjs.Graphics().p("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");
	var mask_graphics_26 = new cjs.Graphics().p("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");
	var mask_graphics_27 = new cjs.Graphics().p("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");
	var mask_graphics_28 = new cjs.Graphics().p("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");
	var mask_graphics_29 = new cjs.Graphics().p("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");
	var mask_graphics_30 = new cjs.Graphics().p("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");
	var mask_graphics_31 = new cjs.Graphics().p("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");
	var mask_graphics_32 = new cjs.Graphics().p("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");
	var mask_graphics_33 = new cjs.Graphics().p("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");
	var mask_graphics_34 = new cjs.Graphics().p("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");
	var mask_graphics_35 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:181.4515,y:304.3307}).wait(1).to({graphics:mask_graphics_2,x:148.8138,y:306.0661}).wait(1).to({graphics:mask_graphics_3,x:148.3328,y:360.5358}).wait(1).to({graphics:mask_graphics_4,x:139.1016,y:376.4669}).wait(1).to({graphics:mask_graphics_5,x:116.5329,y:376.4669}).wait(1).to({graphics:mask_graphics_6,x:116.5329,y:376.4669}).wait(1).to({graphics:mask_graphics_7,x:116.5329,y:376.4669}).wait(1).to({graphics:mask_graphics_8,x:116.5329,y:376.4669}).wait(1).to({graphics:mask_graphics_9,x:129.2874,y:376.4669}).wait(1).to({graphics:mask_graphics_10,x:148.8502,y:376.4669}).wait(1).to({graphics:mask_graphics_11,x:148.8502,y:376.4669}).wait(1).to({graphics:mask_graphics_12,x:179.0466,y:376.4669}).wait(1).to({graphics:mask_graphics_13,x:179.5481,y:376.4669}).wait(1).to({graphics:mask_graphics_14,x:179.5481,y:376.4669}).wait(1).to({graphics:mask_graphics_15,x:179.5481,y:376.4669}).wait(1).to({graphics:mask_graphics_16,x:179.5481,y:376.4669}).wait(1).to({graphics:mask_graphics_17,x:179.5481,y:376.4669}).wait(1).to({graphics:mask_graphics_18,x:191.262,y:376.4669}).wait(1).to({graphics:mask_graphics_19,x:191.262,y:376.4669}).wait(1).to({graphics:mask_graphics_20,x:202.2297,y:376.4669}).wait(1).to({graphics:mask_graphics_21,x:207.1072,y:376.4669}).wait(1).to({graphics:mask_graphics_22,x:212.2042,y:376.4669}).wait(1).to({graphics:mask_graphics_23,x:230.6442,y:376.4669}).wait(1).to({graphics:mask_graphics_24,x:249.3965,y:376.4669}).wait(1).to({graphics:mask_graphics_25,x:249.3965,y:376.4669}).wait(1).to({graphics:mask_graphics_26,x:280.3816,y:376.4669}).wait(1).to({graphics:mask_graphics_27,x:280.6432,y:376.4669}).wait(1).to({graphics:mask_graphics_28,x:280.6432,y:376.4669}).wait(1).to({graphics:mask_graphics_29,x:280.6432,y:376.4669}).wait(1).to({graphics:mask_graphics_30,x:280.6432,y:376.4669}).wait(1).to({graphics:mask_graphics_31,x:289.9504,y:376.4669}).wait(1).to({graphics:mask_graphics_32,x:289.9504,y:376.4669}).wait(1).to({graphics:mask_graphics_33,x:301.9097,y:376.4669}).wait(1).to({graphics:mask_graphics_34,x:301.9097,y:376.4669}).wait(1).to({graphics:mask_graphics_35,x:304.1324,y:376.4669}).wait(325));

	// So_Much_More
	this.instance_18 = new lib.SoMuchMore();
	this.instance_18.setTransform(26.05,274.6,1.0311,0.993);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({_off:true},107).wait(252));

	// Bar_under_Tagline
	this.instance_19 = new lib.BarunderTagline_1();
	this.instance_19.setTransform(-328,362);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:326},23,cjs.Ease.quintOut).to({_off:true},85).wait(252));

	// Frame_1___Gradient_Below_Type_copy_2
	this.instance_20 = new lib.Frame1GradientBelowTypecopy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},108).wait(252));

	// Image_1
	this.instance_21 = new lib.Image01();
	this.instance_21.setTransform(474.3,367.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:0.8,regY:0.8,scaleX:1.0857,scaleY:1.0856,x:536.7,y:399},107).to({_off:true},1).wait(252));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1547.8,-274.5,4285.8,2220.7);
// library properties:
lib.properties = {
	id: 'AA8292BC762445BC986C3F400C20D5CF',
	width: 768,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_75.png?1618703442528", id:"CachedBmp_75"},
		{src:"images/CachedBmp_74.png?1618703442528", id:"CachedBmp_74"},
		{src:"images/CachedBmp_73.png?1618703442528", id:"CachedBmp_73"},
		{src:"images/Frame2Image.jpg?1618703442528", id:"Frame2Image"},
		{src:"images/GolfMultiplayer_768x1024_atlas_1.png?1618703442480", id:"GolfMultiplayer_768x1024_atlas_1"},
		{src:"images/GolfMultiplayer_768x1024_atlas_2.png?1618703442480", id:"GolfMultiplayer_768x1024_atlas_2"},
		{src:"images/GolfMultiplayer_768x1024_atlas_3.png?1618703442480", id:"GolfMultiplayer_768x1024_atlas_3"},
		{src:"images/GolfMultiplayer_768x1024_atlas_4.png?1618703442480", id:"GolfMultiplayer_768x1024_atlas_4"}
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
an.compositions['AA8292BC762445BC986C3F400C20D5CF'] = {
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