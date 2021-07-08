(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Winner_300x250_Jacqueline_atlas_1", frames: [[0,0,300,230],[867,0,151,35],[302,0,261,216],[565,0,300,105],[565,107,300,70],[867,37,59,49]]}
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
	this.initialize(ss["Winner_300x250_Jacqueline_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Button = function() {
	this.initialize(ss["Winner_300x250_Jacqueline_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Cutout = function() {
	this.initialize(ss["Winner_300x250_Jacqueline_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Shape1 = function() {
	this.initialize(ss["Winner_300x250_Jacqueline_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ShapeBottom = function() {
	this.initialize(ss["Winner_300x250_Jacqueline_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.StackedLogo = function() {
	this.initialize(ss["Winner_300x250_Jacqueline_atlas_1"]);
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


(lib.Cutout_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Cutout();
	this.instance.setTransform(-130.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cutout_1, new cjs.Rectangle(-130.5,-108,261,216), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgQA5IAAgcIAhAAIAAAcgAgKAVIgHgzIAAgaIAjAAIAAAaIgHAzg");
	this.shape.setTransform(40.175,-1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA5IgWhHIgVBHIglAAIgchxIAkAAIAOA/IATg/IAjAAIATA/IANg/IAkAAIgbBxg");
	this.shape_1.setTransform(28.65,-1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA1QgOgHgJgNQgIgNAAgUQAAgbAQgPQARgQAeAAQAfAAARAQQAQAPAAAbQAAATgHANQgHANgOAHQgOAHgUAAQgVAAgNgGgAgSgYQgHAIAAAQQAAARAHAIQAHAHALAAQANAAAGgHQAHgHAAgSQAAgQgHgIQgHgHgMAAQgLAAgHAHg");
	this.shape_2.setTransform(13.05,-1.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA5Igtg+IAAA+IgkAAIAAhxIAjAAIAuA+IAAg+IAkAAIAABxg");
	this.shape_3.setTransform(-1.275,-1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXA5Igtg+IAAA+IgkAAIAAhxIAjAAIAuA+IAAg+IAkAAIAABxg");
	this.shape_4.setTransform(-21.425,-1.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSA5IAAhxIAlAAIAABxg");
	this.shape_5.setTransform(-32.025,-1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWA5IgWhHIgVBHIglAAIgchxIAkAAIAOA/IATg/IAjAAIAUA/IAMg/IAkAAIgbBxg");
	this.shape_6.setTransform(-44,-1.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WINNOW, new cjs.Rectangle(-53.8,-14,98,24.4), null);


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
	this.instance.setTransform(-75.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button_1, new cjs.Rectangle(-75.5,-17.5,151,35), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUBUIAAiEIgzAAIAAgjICPAAIAAAjIgzAAIAACEg");
	this.shape.setTransform(78.475,-2.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/A+QgYgaAAgkQAAgkAYgZQAagZAlAAQAmAAAZAZQAZAZAAAkQAAAkgZAaQgZAZgmAAQglAAgagZgAgfgiQgOANAAAVQAAAUAOAPQANAOASAAQATAAANgOQANgPAAgUQAAgVgNgNQgNgOgTAAQgSAAgNAOg");
	this.shape_1.setTransform(62,-2.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BUIAAinIBEAAQAZAAAPAQQAPAQAAAaQAAAZgPAQQgPAQgZAAIgbAAIAAA0gAgUgCIAUAAQAJAAAGgHQAFgGAAgKQAAgXgUAAIgUAAg");
	this.shape_2.setTransform(46.075,-2.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBUIgjhEIgRAAIAABEIgpAAIAAinIApAAIAABBIARAAIAihBIAsAAIguBQIAAABIAxBWg");
	this.shape_3.setTransform(31,-2.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A+QgYgYAAgmQAAgkAZgZQAagZAkAAQApAAAXAYIgUAfQgTgRgXAAQgWAAgNAPQgLANAAAUQgBATAMAOQAOAQAVAAQAZAAATgUIAWAeQgYAcgsAAQgmAAgZgZg");
	this.shape_4.setTransform(14.15,-2.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkBUIgKgjIg0AAIgJAjIgrAAIA5inIAqAAIA6CngAARAQIgKggIgHgdIAAAAIgGAdIgKAgIAhAAg");
	this.shape_5.setTransform(-1.85,-2.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBIQgRgPAAgaIAAgMIAoAAIAAAJQAAAJAEAFQAEAGAHAAQAPAAAAgSIAAhPIgsAAIAAgkIBVAAIAAB0QABAagTAPQgPAOgXAAQgWAAgQgOg");
	this.shape_6.setTransform(-16.6,-2.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4BWIgCgSQABgkAjgbIAYgRQAMgJAAgIQAAgIgFgFQgGgEgGAAQgQAAgJASIgfgUQAQglArAAQAWAAARANQASAOAAAZQAAAegiAXIgXAPQgKAJgBAGIBGAAIAAAkg");
	this.shape_7.setTransform(-34.45,-2.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7A/IAUgfQAPAPATAAQAIAAAHgFQAHgGAAgKQAAgKgHgFQgIgGgLAAQgNAAgJAGIgWgJIAHhXIBdAAIAAAkIg6AAIAAAPIgBAHQAGgCAGAAQAcAAAQAQQAQAPAAAXQAAAbgSARQgRARgbAAQglAAgUgXg");
	this.shape_8.setTransform(-47.9,-2.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2BQIAMgkQAKAFAMAAQAaAAAKgbIgBAAQgHAFgOAAQgaAAgQgSQgOgPAAgXQAAgXAPgQQAQgSAbAAQAbAAASAUQAWAWAAAnQAAAkgVAaQgXAegkAAQgXAAgOgHgAgRgrQgEAGAAAIQgBAKAHAGQAGAIAMAAQASAAAAgKQAAgOgJgKQgIgJgIAAQgIAAgFAFg");
	this.shape_9.setTransform(-61.75,-2.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAgIARhAIAmAAIgaBAg");
	this.shape_10.setTransform(-72.225,5.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+AAQAAhWA+AAQA/AAAABWQAABXg/AAQg+AAAAhXgAgUAAQAAAxAUAAQAVAAAAgxQAAgwgVAAQgUAAAAAwg");
	this.shape_11.setTransform(-82.375,-2.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BWIgBgSQAAgkAkgbIAXgRQAMgJAAgIQAAgIgGgFQgEgEgHAAQgQAAgJASIgegUQAPglArAAQAXAAAQANQASAOAAAZQAAAegiAXIgXAPQgLAJAAAGIBHAAIAAAkg");
	this.shape_12.setTransform(-96.6,-2.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLBsIAAgWQgggEgQgTIAVgfQAUARAUAAQARAAABgNQgBgGgMgGIgZgMQgngRAAgdQABgUANgNQALgOAVgEIAAgWIAYAAIAAAWQAdADAPAPIgSAiQgRgPgUAAQgGAAgGADQgFAEAAAGQAAAHAMAFIAZALQAmARAAAeQAAATgMAOQgMAPgXADIAAAWg");
	this.shape_13.setTransform(-110.15,-2.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._9213Jackpot, new cjs.Rectangle(-124.9,-21.4,218.3,38.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgGAxIAAhVIghAAIAAgMIBPAAIAAAMIghAAIAABVg");
	this.shape.setTransform(20.025,-4.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAxIAAhhIA3AAIAAAMIgqAAIAAAfIAiAAIAAALIgiAAIAAAfIAsAAIAAAMg");
	this.shape_1.setTransform(12.475,-4.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAxIAAhhIAhAAQAMAAAIAHQAIAHAAALQAAAPgMAGQAIACAEAGQAEAHAAAIQAAANgKAIQgIAHgNAAgAgSAlIAVAAQAHAAAEgFQAFgEAAgIQAAgHgFgFQgEgEgIAAIgUAAgAgSgHIATAAQAHAAAEgEQADgEAAgGQAAgHgDgEQgFgEgGAAIgTAAg");
	this.shape_2.setTransform(4.25,-4.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKAxIAAgaIguAAIAAgJIAsg+IAQAAIAAA7IANAAIAAAMIgNAAIAAAagAAGgZIgbAkIAAAAIAfAAIAAgiIABgKIgBAAIgEAIg");
	this.shape_3.setTransform(-7.8,-4.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAmQgKgNAAgUQAAgVAKgPQANgSAUAAQALAAAIAEIgEALQgHgDgIAAQgLAAgIALQgHAIgBAOQACgEAHgDQAFgCAGAAQANAAAKAJQAIAIAAAOQAAAOgJAJQgIAJgPAAQgOAAgLgMgAgNABQgFAFAAAFQAAAKAGAIQAHAJAHAAQAIAAAGgGQAEgFAAgJQABgJgGgGQgFgFgKAAQgHAAgGADg");
	this.shape_4.setTransform(-15.8,-4.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_5.setTransform(-21.6,0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAxIgBgHQAAgMAIgJQAFgHALgHIAQgMQAHgHAAgHQAAgHgFgGQgFgDgGAAQgNgBgHAMIgKgGQAJgSAVgBQANAAAJAIQAIAIAAAMQAAALgHAJQgFAFgLAHIgPAMQgHAHAAAHIAvAAIAAAMg");
	this.shape_6.setTransform(-27.175,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEA/IAAgNQgRgCgKgKIAIgLQAKALAOAAQAHAAAFgEQAFgEAAgHQAAgGgHgFIgQgIQgLgEgGgFQgHgHAAgKQAAgKAHgIQAHgHALgCIAAgNIAJAAIAAANQAQABAIAJIgGALQgJgJgMAAQgHAAgFAFQgFAEAAAGQAAAGAIAFIAPAHQALAEAFAFQAHAIAAAKQABALgIAHQgGAIgNABIAAANg");
	this.shape_7.setTransform(-34.9,-4.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4Bet, new cjs.Rectangle(-44.5,-16.2,74.3,24.5), null);


(lib.StackedLogo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.StackedLogo();
	this.instance.setTransform(-29.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StackedLogo_1, new cjs.Rectangle(-29.5,-24.5,59,49), null);


// stage content:
(lib.Winner300x250Jacqueline = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// WIN_NOW_
	this.instance = new lib.WINNOW();
	this.instance.setTransform(376.2,230.25,1,1,0,0,0,-4.8,-1.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({x:224.6},14,cjs.Ease.backOut).wait(59));

	// Button
	this.instance_1 = new lib.Button_1();
	this.instance_1.setTransform(376.5,232.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({x:224.5},14,cjs.Ease.backOut).wait(59));

	// $9_213_Jackpot_
	this.instance_2 = new lib._9213Jackpot();
	this.instance_2.setTransform(204,20,0.0047,0.0248,0,0,0,-10.7,0);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({scaleX:0.9997,scaleY:0.9997,x:190.15,y:20.05},29,cjs.Ease.elasticOut).wait(69));

	// $4_Bet_
	this.instance_3 = new lib._4Bet();
	this.instance_3.setTransform(-38.4,21.1,1,1,0,0,0,-7.4,-0.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:47.6},15,cjs.Ease.backOut).wait(96));

	// Shape_Bottom
	this.instance_4 = new lib.ShapeBottom();
	this.instance_4.setTransform(0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Cutout
	this.instance_5 = new lib.Cutout_1();
	this.instance_5.setTransform(169.5,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.0766,scaleY:1.0766,x:169.45,y:139.95},119).wait(1));

	// Stacked_Logo
	this.instance_6 = new lib.StackedLogo_1();
	this.instance_6.setTransform(45.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Shape_1
	this.instance_7 = new lib.Shape1();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Base_Image
	this.instance_8 = new lib.BaseImage();
	this.instance_8.setTransform(0,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(64.5,111.9,387.5,144.29999999999998);
// library properties:
lib.properties = {
	id: 'C5E4BE6D50E143CA95029CE183A7505B',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Winner_300x250_Jacqueline_atlas_1.png?1625745721626", id:"Winner_300x250_Jacqueline_atlas_1"}
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
an.compositions['C5E4BE6D50E143CA95029CE183A7505B'] = {
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