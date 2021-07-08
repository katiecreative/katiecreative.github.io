(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Winner_300x600_Jacqueline_atlas_1", frames: [[0,0,300,370],[0,372,300,148],[0,522,168,52],[302,0,300,347],[0,576,100,79],[302,349,300,255]]}
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
	this.initialize(ss["Winner_300x600_Jacqueline_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BottomShape = function() {
	this.initialize(ss["Winner_300x600_Jacqueline_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Button = function() {
	this.initialize(ss["Winner_300x600_Jacqueline_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Cutout = function() {
	this.initialize(ss["Winner_300x600_Jacqueline_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.StackedLogo = function() {
	this.initialize(ss["Winner_300x600_Jacqueline_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TopShape = function() {
	this.initialize(ss["Winner_300x600_Jacqueline_atlas_1"]);
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
	this.instance.setTransform(-150,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cutout_1, new cjs.Rectangle(-150,-173.5,300,347), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYBTIAAgpIAxAAIAAApgAgQAfIgKhLIAAgmIA1AAIAAAmIgLBLg");
	this.shape.setTransform(58.825,-1.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBTIgghnIgfBnIg3AAIgoilIA1AAIATBcIAdhcIA0AAIAcBcIAThcIA1AAIgoClg");
	this.shape_1.setTransform(41.925,-1.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBNQgUgJgNgUQgMgTAAgdQAAgnAZgXQAYgXAsAAQAtAAAZAXQAYAWAAAoQAAAcgLASQgKATgVAKQgUALgeAAQgeAAgUgJgAgbgjQgKALAAAYQAAAZAKALQAKALARAAQASAAAKgKQAKgLAAgbQAAgXgLgLQgKgLgRAAQgQAAgLALg");
	this.shape_2.setTransform(19.15,-1.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBTIhDhaIAABaIg1AAIAAilIA0AAIBEBbIAAhbIA1AAIAAClg");
	this.shape_3.setTransform(-1.875,-1.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBTIhDhaIAABaIg1AAIAAilIA0AAIBEBbIAAhbIA1AAIAAClg");
	this.shape_4.setTransform(-31.325,-1.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_5.setTransform(-46.85,-1.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgBTIgghnIgfBnIg3AAIgoilIA1AAIATBcIAdhcIA0AAIAcBcIAThcIA1AAIgoClg");
	this.shape_6.setTransform(-64.425,-1.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WINNOW, new cjs.Rectangle(-78.7,-20.5,143.4,35.6), null);


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
	this.instance.setTransform(-84,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button_1, new cjs.Rectangle(-84,-26,168,52), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgpCtIAAkQIhpAAIAAhJIElAAIAABJIhpAAIAAEQg");
	this.shape.setTransform(65.425,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiBB+Qgzg0AAhLQAAhLAzgzQA0gzBNAAQBOAAA0AzQAzAzAABLQAABLgzA0Qg0A1hOAAQhNAAg0g1gAhBhIQgbAcgBArQABArAbAdQAbAeAmAAQAnAAAbgeQAbgdABgrQgBgrgbgcQgbgcgnAAQgmAAgbAcg");
	this.shape_1.setTransform(31.85,27.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/CtIAAlZICOAAQAzAAAfAhQAfAiAAA0QAAA1gfAgQgfAigzAAIg6AAIAABrgAgrgGIAqAAQAVAAALgNQALgNAAgVQAAgugqAAIgrAAg");
	this.shape_2.setTransform(-0.625,27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxCtIhIiMIgjAAIAACMIhVAAIAAlZIBVAAIAACGIAjAAIBGiGIBbAAIhdClIAAABIBjCzg");
	this.shape_3.setTransform(-31.475,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhtB/QgygyAAhNQAAhMAzgzQA0gzBNAAQBWAAAsAxIgnBAQgngjgwAAQguAAgbAeQgYAcAAAoQAAApAZAdQAcAhAsAAQA0AAAogqIArA+QgwA6hbAAQhPAAgzg0g");
	this.shape_4.setTransform(-66.025,27.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABLCtIgVhJIhrAAIgVBJIhXAAIB2lZIBYAAIB1FZgAAiAhIgUhDQgGgWgHglIgBAAQgHAlgHAWIgUBDIBEAAg");
	this.shape_5.setTransform(-98.7,27.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOCUQglgfAAg2IAAgYIBUAAIAAASQAAATAHAKQAJAMAQAAQAfABgBgmIAAijIhbAAIAAhJICwAAIAADuQAAA2gkAgQghAbgvAAQgvAAgfgcg");
	this.shape_6.setTransform(-128.95,27.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiODYQgFgbAAgTQAAhaBchFIA+gsQAcgWAAgUQAAgUgOgLQgNgLgRABQgpgBgWAuIhNg0QAnhbBuAAQA5AAAoAfQAvAkAAA+QAABNhWA5Ig6AoQgcAVgBARICzAAIAABZg");
	this.shape_7.setTransform(64.475,-28.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiWCgIAyhQQAnAmAvAAQAWAAARgNQATgPAAgZQAAgYgTgOQgTgOgcAAQghAAgYAOIg3gVIARjcIDsAAIAABYIiSAAIgCAoQAAAIgDAIIABAAQAPgEAQAAQBIAAApApQAmAlAAA8QAABCgsArQgsAqhEAAQheAAgzg3g");
	this.shape_8.setTransform(30.575,-27.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiIDIIAchYQAbANAfAAQBCAAAYhGIgBAAQgTAOgmAAQhAAAgngtQgkgpAAg6QAAg5AmgqQApgsBCAAQBFAAAvAyQA2A3AABiQAABcgzBEQg6BKhcAAQg7AAgigTgAgshtQgLAOAAATQAAAaAPARQARATAfAAQAsAAAAgZQAAgjgWgaQgUgXgWAAQgUAAgMAOg");
	this.shape_9.setTransform(-4.175,-27.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGBSIAsijIBhAAIhDCjg");
	this.shape_10.setTransform(-30.825,-8.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AifAAQAAjaCfAAQCfAAABDaQgBDbifAAQifAAAAjbgAg0AAQAAB9A0AAQA1AAAAh9QAAh7g1AAQg0AAAAB7g");
	this.shape_11.setTransform(-56.1,-27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiODYQgFgbAAgTQAAhaBchFIA+gsQAcgWAAgUQAAgUgOgLQgNgLgRABQgpgBgWAuIhNg0QAnhbBuAAQA5AAAoAfQAvAkAAA+QAABNhWA5Ig6AoQgcAVgBARICzAAIAABZg");
	this.shape_12.setTransform(-92.025,-28.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeEPIAAg2QhPgLgqgvIA3hPQAvAsA1AAQAsAAAAgiQAAgPgdgPIhCgdQhggtAAhKQgBgxAhgiQAegiAzgJIAAg4IA/AAIAAA2QBJAJAkAlIgsBVQgqglg0AAQgQAAgNAHQgPAKAAAQQAAAQAfAPIBBAcQBgAqAABMQAAAwgfAjQggAlg4AJIAAA2g");
	this.shape_13.setTransform(-126.25,-27.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._9213Jackpot, new cjs.Rectangle(-153.6,-71.8,245.2,138.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRCBIAAjhIhYAAIAAggIDTAAIAAAgIhYAAIAADhg");
	this.shape.setTransform(57.65,-1.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNCBIAAkBICUAAIAAAgIhwAAIAABQIBbAAIAAAeIhbAAIAABTIB3AAIAAAgg");
	this.shape_1.setTransform(37.725,-1.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWCBIAAkBIBZAAQAhAAAUARQAVATAAAeQAAAnggARIAAAAQAUAGAMAQQALARgBAWQABAjgZAUQgXATgjAAgAgyBhIA4AAQAVAAAMgMQALgMAAgTQABgVgMgMQgNgLgUAAIg4AAgAgygUIA1AAQAQAAALgLQAKgKAAgSQAAgQgJgLQgLgKgSAAIg0AAg");
	this.shape_2.setTransform(16.1,-1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbCBIAAhGIh7AAIAAgWIB2ilIApAAIAACdIAiAAIAAAeIgiAAIAABGgAAPhEIhIBhIAAAAIBUAAIAAhdIACgZIgBAAQgGAMgHAJg");
	this.shape_3.setTransform(-15.85,-1.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9BkQgbgiAAg2QAAg3AcgqQAggvA3AAQAeAAAUAKIgMAfQgRgIgUAAQggAAgVAcQgTAXgEAjIAAAAQAJgLAQgGQAPgHAQAAQAkAAAXAYQAWAYAAAkQAAAmgXAYQgXAYgkAAQgpAAgbghgAgjADQgPAMAAAOQAAAaAQAVQASAYAWAAQAWAAANgQQANgOAAgXQAAgYgOgPQgPgOgYAAQgUgBgQAKg");
	this.shape_4.setTransform(-36.975,-1.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_5.setTransform(-52.125,9.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRCDIgCgUQAAgfAUgZQANgRAegVQAjgYAIgIQATgSAAgUQAAgTgNgMQgNgMgTAAQgiAAgSAhIgbgSQAYgxA6AAQAiAAAXAVQAXAUAAAhQAAAdgTAXQgNAPgeAUQghAXgIAIQgTASgBATIB/AAIAAAgg");
	this.shape_6.setTransform(-66.775,-1.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKCmIAAgiQgvgEgagdIAVgbQAbAcAlAAQATAAANgKQANgLAAgRQAAgSgTgNQgJgFgigQQgegNgOgMQgTgTAAgaQAAgbASgTQATgUAfgFIAAgiIAYAAIAAAiQApADAWAWIgRAeQgXgWghAAQgTAAgOALQgNALAAAPQAAARAUAMQAHAFAjAQQAeAMAOANQAUATgBAcQABAcgTATQgTAVggADIAAAig");
	this.shape_7.setTransform(-87.1,-1.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4Bet, new cjs.Rectangle(-109.4,-29.9,189.4,58.3), null);


// stage content:
(lib.Winner300x600Jacqueline = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// WIN_NOW_
	this.instance = new lib.WINNOW();
	this.instance.setTransform(-92,547,1,1,0,0,0,-7,-2.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({x:93.9},15,cjs.Ease.backOut).wait(58));

	// Button
	this.instance_1 = new lib.Button_1();
	this.instance_1.setTransform(-91,551);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({x:94},15,cjs.Ease.backOut).wait(58));

	// $9_213_Jackpot
	this.instance_2 = new lib._9213Jackpot();
	this.instance_2.setTransform(180.9,108.65,0.0042,0.0072,0,0,0,-36.1,7);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:0.9997,scaleY:0.9997,x:144.9,y:111.1},29,cjs.Ease.elasticOut).wait(72));

	// $4_Bet_
	this.instance_3 = new lib._4Bet();
	this.instance_3.setTransform(-71.7,31.6,1,1,0,0,0,-14.7,-0.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:150},15,cjs.Ease.backOut).wait(99));

	// Stacked_Logo
	this.instance_4 = new lib.StackedLogo();
	this.instance_4.setTransform(185,503);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Bottom_Shape
	this.instance_5 = new lib.BottomShape();
	this.instance_5.setTransform(0,452);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Cutout
	this.instance_6 = new lib.Cutout_1();
	this.instance_6.setTransform(150,335.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.0833,scaleY:1.0833,x:149.95,y:335.45},119).wait(1));

	// Top_Shape
	this.instance_7 = new lib.TopShape();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Base_Image
	this.instance_8 = new lib.BaseImage();
	this.instance_8.setTransform(0,139);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,294.5,338.9,306.5);
// library properties:
lib.properties = {
	id: 'F05E75FBEDC449A4B7A08027C04C80E4',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Winner_300x600_Jacqueline_atlas_1.png?1625745965273", id:"Winner_300x600_Jacqueline_atlas_1"}
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
an.compositions['F05E75FBEDC449A4B7A08027C04C80E4'] = {
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