(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Winner_160x600_Melinda_atlas_1", frames: [[0,0,160,306],[324,217,160,174],[0,308,150,40],[162,0,160,287],[162,289,100,79],[324,0,160,215]]}
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



(lib.BaseImage = function() {
	this.initialize(ss["Winner_160x600_Melinda_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BottomShape = function() {
	this.initialize(ss["Winner_160x600_Melinda_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Button = function() {
	this.initialize(ss["Winner_160x600_Melinda_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Cutout1 = function() {
	this.initialize(ss["Winner_160x600_Melinda_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.StackedLogo = function() {
	this.initialize(ss["Winner_160x600_Melinda_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TopShape = function() {
	this.initialize(ss["Winner_160x600_Melinda_atlas_1"]);
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


(lib.Cutout1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Cutout1();
	this.instance.setTransform(-80,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cutout1_1, new cjs.Rectangle(-80,-143.5,160,287), null);


(lib.WINNOW = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUBGIAAgiIApAAIAAAigAgNAaIgIg/IAAggIAsAAIAAAgIgJA/g");
	this.shape.setTransform(49.3,-1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBGIgbhXIgaBXIguAAIghiLIAsAAIAQBNIAYhNIArAAIAYBNIAQhNIAsAAIghCLg");
	this.shape_1.setTransform(35.175,-1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBBQgRgIgKgRQgLgPAAgZQAAghAVgTQAVgTAkAAQAmAAAUATQAVASAAAiQAAAXgJAQQgJAQgRAIQgRAJgZAAQgZAAgRgHgAgWgeQgJAKAAAUQAAAVAJAJQAIAKAOgBQAPABAJgKQAIgJAAgWQAAgTgJgKQgIgIgPgBQgNABgJAIg");
	this.shape_2.setTransform(16.075,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBGIg4hMIAABMIgsAAIAAiLIAsAAIA4BNIAAhNIAsAAIAACLg");
	this.shape_3.setTransform(-1.55,-1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBGIg3hMIAABMIgsAAIAAiLIArAAIA4BNIAAhNIAtAAIAACLg");
	this.shape_4.setTransform(-26.25,-1.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBGIAAiLIAtAAIAACLg");
	this.shape_5.setTransform(-39.25,-1.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBGIgbhXIgaBXIguAAIghiLIAsAAIAQBNIAYhNIArAAIAYBNIAQhNIAsAAIghCLg");
	this.shape_6.setTransform(-53.925,-1.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WINNOW, new cjs.Rectangle(-65.9,-17.3,120.2,29.9), null);


(lib.Button_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Button();
	this.instance.setTransform(-75,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button_1, new cjs.Rectangle(-75,-20,150,40), null);


(lib._9213Jackpot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgaBtIAAisIhCAAIAAgtIC5AAIAAAtIhCAAIAACsg");
	this.shape.setTransform(42.475,21.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRBQQggghAAgvQAAgwAggfQAhghAwAAQAxAAAhAhQAgAfAAAwQAAAvggAhQghAhgxAAQgwAAghghgAgpgtQgRASAAAbQAAAbARASQARATAYAAQAZAAARgTQARgSAAgbQAAgbgRgSQgRgSgZAAQgYAAgRASg");
	this.shape_1.setTransform(21.275,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQBtIAAjZIBaAAQAgAAAUAVQATAVAAAhQAAAhgTAUQgUAWggAAIglAAIAABDgAgbgDIAbAAQAMAAAIgJQAHgIAAgNQAAgegbAAIgbAAg");
	this.shape_2.setTransform(0.6,21.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfBtIguhYIgVAAIAABYIg2AAIAAjZIA2AAIAABUIAVAAIAthUIA6AAIg8BoIAAABIA/Bwg");
	this.shape_3.setTransform(-18.95,21.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFBRQgfggAAgxQAAgvAgggQAhghAwAAQA2AAAcAfIgZAoQgYgWgeAAQgdAAgRATQgPASAAAaQAAAZAQATQARAUAcAAQAhAAAZgbIAbAnQgfAlg5AAQgyAAggggg");
	this.shape_4.setTransform(-40.775,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBtIgNguIhDAAIgNAuIg3AAIBKjZIA3AAIBKDZgAAVAVIgMgqIgJglIAAAAIgIAlIgNAqIAqAAg");
	this.shape_5.setTransform(-61.525,21.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBeQgXgUAAgiIAAgPIA1AAIAAALQAAAMAEAGQAGAJAJgBQAUABAAgYIAAhnIg6AAIAAguIBvAAIAACWQAAAigXAUQgUARgeAAQgdAAgUgRg");
	this.shape_6.setTransform(-80.575,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/BoQghgiAAg8QAAg5AggpQAjgtA4AAQAkAAAWALIgRA2QgRgIgTAAQgpABgOArIABAAQAMgKAWABQAnAAAYAbQAWAZAAAkQAAAjgXAZQgZAcgoAAQgqAAgegfgAgeAYQAAAXANAPQAMAOAOAAQALAAAIgJQAHgIAAgMQAAgQgJgKQgLgMgTAAQgaAAAAAPg");
	this.shape_7.setTransform(40.475,-16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhHBuQgYgXgBghQABgkAjgaQgXgWAAgdQAAgfAVgVQAYgWApAAQAmAAAYATQAaAUAAAjQABAcgaAfQAfAVAAAiQAAAhgZAWQgaAZguAAQgsAAgbgZgAgfAwQAAANAKAIQAJAJAMAAQAgAAgBgaQAAgKgOgJQgHgEgbgNQgOAPAAARgAgVg6QAAANANAIQAHAGAVAJQAJgQAAgPQAAgYgbAAQgXAAAAATg");
	this.shape_8.setTransform(18.4,-16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcBiIAfgxQAXAXAeAAQAQAAALgIQAJgHAAgLQAAgdgvAAIgSAAIgOgeIAigpQANgPAJgJIAAgBQgHACgRAAIg+AAIAAg2ICjAAIAAAnIg0A9QAcAGARAVQASAUAAAbQAAAlgYAYQgbAcgtAAQg6AAgfgig");
	this.shape_9.setTransform(-3.175,-15.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrAzIAchlIA7AAIgpBlg");
	this.shape_10.setTransform(-18.875,-4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHBuQgZgXABghQgBgkAlgaQgYgWAAgdQAAgfAUgVQAYgWAqAAQAmAAAZATQAaAUAAAjQAAAcgaAfQAfAVgBAiQAAAhgXAWQgcAZgtAAQgsAAgbgZgAgfAwQAAANAKAIQAJAJAMAAQAfAAAAgaQAAgKgPgJQgFgEgbgNQgOAPgBARgAgVg6QAAANAMAIQAJAGAUAJQAJgQAAgPQAAgYgbAAQgXAAAAATg");
	this.shape_11.setTransform(-34.2,-16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhTB7IARg3QARAIATAAQAoAAAPgrIgBAAQgLAJgYAAQgnAAgYgcQgWgYAAgkQAAgjAXgZQAagbAoAAQAqAAAdAdQAhAjAAA8QAAA4gfApQgkAvg4AAQgkAAgVgMgAgahDQgHAJAAAMQAAAPAJAKQAKANATAAQAbAAAAgPQAAgXgNgPQgNgPgNAAQgMAAgHAJg");
	this.shape_12.setTransform(-56.175,-16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSCmIAAghQgwgHgbgcIAigxQAdAbAhAAQAbAAAAgVQgBgJgSgJIgogSQg6gbAAguQAAgeATgVQATgUAfgGIAAgiIAnAAIAAAhQAsAFAWAXIgbA0QgagXgfAAQgKAAgIAFQgJAGAAAKQAAAJATAJIAnASQA8AZAAAvQgBAegSAVQgVAXghAFIAAAhg");
	this.shape_13.setTransform(-77.5,-16.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._9213Jackpot, new cjs.Rectangle(-94.6,-43.2,152,89.2), null);


(lib._4Bet = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJBmIAAi5IhKAAIAAgTICnAAIAAATIhJAAIAAC5g");
	this.shape.setTransform(46.7,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BmIAAjMIByAAIAAATIheAAIAABLIBNAAIAAARIhNAAIAABLIBjAAIAAASg");
	this.shape_1.setTransform(30.7,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBmIAAjMIBFAAQAZAAAPAPQAPANAAAYQAAAggaANIAAAAQAQAFAJAMQAKAPAAASQAAAagSAQQgRAQgbgBgAgtBUIAzAAQASABALgLQALgLAAgSQAAgTgLgLQgLgLgTAAIgyAAgAgtgNIAwAAQAQABAJgLQAKgKAAgPQAAgQgKgKQgJgJgQAAIgwAAg");
	this.shape_2.setTransform(13.35,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFAAQAAhpBFAAQBGAAAABpQAABqhGAAQhFAAAAhqgAgwAAQgBBXAxAAQAyAAAAhXQAAhWgyAAQgxAAABBWg");
	this.shape_3.setTransform(-12.7,-1.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBmIAAg4IhmAAIAAgOIBkiGIAWAAIAACCIAdAAIAAASIgdAAIAAA4gAARg8IhDBYIAAAAIBNAAIAAhVIABgTIgBAAIgKAQg");
	this.shape_4.setTransform(-30.375,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_5.setTransform(-42.2,7.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBmIAAg4IhmAAIAAgOIBkiGIAWAAIAACCIAdAAIAAASIgdAAIAAA4gAARg8IhDBYIAAAAIBNAAIAAhVIABgTIgBAAIgKAQg");
	this.shape_6.setTransform(-54.375,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGCEIAAgbQglgDgTgWIALgPQAVAWAggBQARAAAMgJQAMgJAAgRQAAgQgQgMQgJgGgagMQgZgKgKgKQgQgOAAgVQAAgUAPgQQAOgPAYgDIAAgcIAPAAIAAAbQAgACARASIgKARQgSgSgbAAQgRABgNAKQgMAKABAPQAAAPAPALQAIAFAbANQAZAJAKAKQAQAQAAAVQAAAWgOAPQgOAQgaACIAAAbg");
	this.shape_7.setTransform(-70.7,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4Bet, new cjs.Rectangle(-89.6,-25.6,155.5,48.7), null);


// stage content:
(lib.Winner160x600Melinda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [119];
	// timeline functions:
	this.frame_119 = function() {
		if(!this.alreadyExecuted){
		
		this.alreadyExecuted=true;
		
		this.loopNum=1;
		
		} else {
		
		this.loopNum++;
		
		if(this.loopNum==2){
		
		this.stop();
		
		}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// WIN_NOW_
	this.instance = new lib.WINNOW();
	this.instance.setTransform(-81.9,572.8,1,1,0,0,0,-5.9,-2.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:79.6},14,cjs.Ease.backOut).wait(66));

	// Button
	this.instance_1 = new lib.Button_1();
	this.instance_1.setTransform(-81,577);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({x:80},14,cjs.Ease.backOut).wait(66));

	// $9_213_Jackpot
	this.instance_2 = new lib._9213Jackpot();
	this.instance_2.setTransform(80.05,99.4,0.0069,0.0112,0,0,0,-14.5,4.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({scaleX:0.9997,scaleY:0.9997,x:84.15,y:100.9},29,cjs.Ease.elasticOut).wait(79));

	// $4_Bet_
	this.instance_3 = new lib._4Bet();
	this.instance_3.setTransform(80,-16.7,1,1,0,0,0,-11.9,-0.7);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:46.2},14,cjs.Ease.backOut).wait(106));

	// Stacked_Logo
	this.instance_4 = new lib.StackedLogo();
	this.instance_4.setTransform(30,461);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Bottom_Shape
	this.instance_5 = new lib.BottomShape();
	this.instance_5.setTransform(0,426);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Cutout_1
	this.instance_6 = new lib.Cutout1_1();
	this.instance_6.setTransform(80,310.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.0938,scaleY:1.0937},119).wait(1));

	// Top_Shape
	this.instance_7 = new lib.TopShape();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Base_Image
	this.instance_8 = new lib.BaseImage();
	this.instance_8.setTransform(0,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-76,250.4,267,350.6);
// library properties:
lib.properties = {
	id: '5CD1A0CE0B6B4BBE9792B0FBF35CBAE8',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Winner_160x600_Melinda_atlas_1.png?1625747139779", id:"Winner_160x600_Melinda_atlas_1"}
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
an.compositions['5CD1A0CE0B6B4BBE9792B0FBF35CBAE8'] = {
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