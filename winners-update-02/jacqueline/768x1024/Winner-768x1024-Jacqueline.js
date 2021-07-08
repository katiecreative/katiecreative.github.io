(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Winner_768x1024_Jacqueline_atlas_1", frames: [[0,0,768,771],[770,555,265,78],[770,0,295,397],[0,773,768,725],[770,399,196,154],[0,1500,768,434]]}
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
	this.initialize(ss["Winner_768x1024_Jacqueline_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Button = function() {
	this.initialize(ss["Winner_768x1024_Jacqueline_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ColorOverlay = function() {
	this.initialize(ss["Winner_768x1024_Jacqueline_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Cutout = function() {
	this.initialize(ss["Winner_768x1024_Jacqueline_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.initialize(ss["Winner_768x1024_Jacqueline_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TopShape = function() {
	this.initialize(ss["Winner_768x1024_Jacqueline_atlas_1"]);
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
	this.instance.setTransform(-384,-362.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cutout_1, new cjs.Rectangle(-384,-362.5,768,725), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgoCGIAAhBIBRAAIAABBgAgaAyIgQh6IAAg9IBVAAIAAA9IgQB6g");
	this.shape.setTransform(94.925,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0CGIg0ioIgyCoIhYAAIhCkLIBWAAIAfCVIAtiVIBVAAIAtCVIAfiVIBWAAIhBELg");
	this.shape_1.setTransform(67.65,-3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOB8QgggOgVgfQgUggAAgvQAAhAAoglQAoglBHAAQBIAAAoAlQAoAjAABBQAAAugSAeQgRAeghARQggARgxAAQgwAAghgPgAgsg5QgQASAAAoQAAAoAQASQARASAbAAQAdAAAQgSQAQgRAAgsQAAgmgQgRQgRgSgcAAQgbAAgRASg");
	this.shape_2.setTransform(30.875,-3.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2CGIhsiSIAACSIhVAAIAAkLIBVAAIBsCTIAAiTIBWAAIAAELg");
	this.shape_3.setTransform(-3.1,-3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3CGIhtiSIAACSIhVAAIAAkLIBVAAIBtCTIAAiTIBVAAIAAELg");
	this.shape_4.setTransform(-50.65,-3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsCGIAAkLIBZAAIAAELg");
	this.shape_5.setTransform(-75.675,-3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0CGIg0ioIgyCoIhZAAIhBkLIBWAAIAfCVIAtiVIBVAAIAuCVIAeiVIBWAAIhBELg");
	this.shape_6.setTransform(-104,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WINNOW, new cjs.Rectangle(-127.1,-33.3,231.5,57.599999999999994), null);


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
	this.instance.setTransform(-132.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button_1, new cjs.Rectangle(-132.5,-39,265,78), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhFEeIAAnDIitAAIAAh4IHlAAIAAB4IitAAIAAHDg");
	this.shape.setTransform(107.925,53.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjVDQQhVhVAAh+QAAh7BVhUQBVhUCAAAQCBAABVBUQBVBUAAB7QAAB+hVBVQhVBXiBABQiAgBhVhXgAhsh4QgtAwAABFQAABIAtAxQAsAxBAAAQBBAAAsgxQAtgxAAhIQAAhFgtgwQgsguhBgBQhAABgsAug");
	this.shape_1.setTransform(52.475,53.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTEeIAAo7IDtAAQBTAAA0A3QAzA3AABXQAABXgzA2Qg1A4hSAAIhhAAIAACxgAhHgKIBFAAQAiAAAUgWQASgVAAgjQAAhNhGAAIhHAAg");
	this.shape_2.setTransform(-1.075,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABREeIh4joIg5AAIAADoIiNAAIAAo7ICNAAIAADdIA5AAIB1jdICWAAIiaERIAAACICjEog");
	this.shape_3.setTransform(-52,53.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai1DSQhThTAAh/QAAh9BWhVQBWhVB/ABQCNgBBJBSIhBBpQhAg7hPAAQhMAAgtA0QgnAsAABDQAABEApAxQAtA2BKAAQBWAABChGIBIBmQhRBhiVAAQiEAAhUhWg");
	this.shape_4.setTransform(-109.125,53.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB8EeIgjh5IixAAIgjB5IiQAAIDDo7ICRAAIDDI7gAA4A2IgghvQgLgjgMg+IgBAAQgNA+gKAjIghBvIBwAAg");
	this.shape_5.setTransform(-163.05,53.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiDD0Qg7gzAAhZIAAgpICLAAIAAAfQAAAfALAQQAOAWAbgBQAzAAAAg8IAAkQIiZAAIAAh4IEkAAIAAGKQAABag8AzQg1AuhOAAQhNgBg2gug");
	this.shape_6.setTransform(-213.025,53.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjrFkQgIgsAAggQAAiUCXhxIBnhJQAwgmAAggQAAgigZgTQgUgQgeAAQhDAAglBKIh/hVQBBiXC1AAQBfAABDA0QBMA7ABBoQAAB9iOBhIhiBBQgtAhgBAdIEoAAIAACTg");
	this.shape_7.setTransform(106.45,-46.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj4EHIBSiDQBAA+BOAAQAlAAAcgVQAggZAAgoQAAgogggYQgfgXgwAAQg2AAgnAXIhcgiIAdltIGGAAIAACTIjxAAIgEBAQAAAOgEAOIABAAQAZgHAbAAQB3AABDBEQA/A9AABkQAABthIBGQhJBHhxAAQibAAhUhdg");
	this.shape_8.setTransform(50.425,-45.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjiFLIAuiTQAuAVAyAAQBvAAAnh0IgCAAQgeAZhBAAQhoAAhBhLQg8hEAAhgQAAheA/hEQBDhKBtAAQBzAABOBSQBZBcAAChQAACZhVBvQheB8iZAAQhiAAg5gfgAhJi1QgTAXAAAgQAAAqAZAcQAcAhA0AAQBIAAAAgqQAAg7gjgqQghgmgmAAQggAAgUAXg");
	this.shape_9.setTransform(-6.975,-45.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah1CIIBKkOIChAAIhvEOg");
	this.shape_10.setTransform(-50.975,-13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkHAAQAAlpEHAAQEIAAAAFpQAAFqkIAAQkHAAAAlqgAhWAAQAADNBWAAQBXAAAAjNQAAjMhXAAQhWAAAADMg");
	this.shape_11.setTransform(-92.7,-45.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjrFkQgIgsAAggQAAiUCYhxIBmhJQAvgmABggQAAgigYgTQgWgQgdAAQhCAAgmBKIh/hVQBAiXC3AAQBeAABDA0QBMA7AABoQABB9iOBhIhhBBQguAhgBAdIEoAAIAACTg");
	this.shape_12.setTransform(-152.05,-46.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyG/IAAhZQiBgThHhNIBaiCQBPBIBXAAQBKAAAAg3QAAgZgygZIhsgwQighLABh6QAAhRA1g4QAyg4BUgQIAAhbIBpAAIAABZQB4ANA8A/IhJCMQhGg+hUAAQgeAAgUANQgYAPAAAbQAAAbAyAYIBtAuQCeBHAAB9QAABQgyA6Qg2A9hcAOIAABZg");
	this.shape_13.setTransform(-208.55,-45.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._9213Jackpot, new cjs.Rectangle(-253.8,-118.6,405.1,237.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgdDUIAAl0IiRAAIAAgzIFdAAIAAAzIiRAAIAAF0g");
	this.shape.setTransform(95.125,-2.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah/DUIAAmnID1AAIAAAzIi6AAIAACFICXAAIAAAzIiXAAIAACJIDEAAIAAAzg");
	this.shape_1.setTransform(62.225,-2.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiPDUIAAmnICTAAQA3AAAiAcQAiAdAAAzQAABAg1AbIAAABQAhAKATAcQASAcAAAkQAAA6goAhQgmAeg6AAgAhUChIBfAAQAhAAAUgUQAUgUAAghQAAgggUgUQgVgVghAAIheAAgAhUghIBYAAQAcAAASgSQAQgSAAgcQAAgdgQgQQgRgSgeAAIhXAAg");
	this.shape_2.setTransform(26.525,-2.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAtDUIAAhxIjNAAIAAgmIDDkQIBEAAIAAEDIA6AAIAAAzIg6AAIAABxgAAZhxIh3CgIAAABICLAAIAAiZQAAgUACgXIgBAAQgJAUgMAPg");
	this.shape_3.setTransform(-26.25,-2.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhlClQgug4AAhaQABhbAthEQA2hPBaAAQAyAAAiASIgUAzQgbgOgiAAQg2AAgiAtQgeAngIA7IABAAQANgSAagMQAbgLAbAAQA7AAAmApQAkAnAAA7QAAA/gmAoQgmAog8AAQhEAAgsg3gAg7AGQgZASAAAXQAAAsAbAkQAdAmAnAAQAjAAAWgZQAVgZAAgmQAAgngXgZQgYgYgoAAQgjAAgaARg");
	this.shape_4.setTransform(-61.1,-2.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAfIAAg9IA8AAIAAA9g");
	this.shape_5.setTransform(-86.2,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiHDYIgDghQABgzAggpQAXgdAxgiQA6gpANgMQAfgfAAggQABgggWgUQgVgTggAAQg4AAgfA2IgsgdQAnhRBfAAQA7AAAlAhQAlAjAAA2QAAAvgfAnQgWAZgvAhQg4AngOAMQggAfAAAfIDSAAIAAA0g");
	this.shape_6.setTransform(-110.35,-2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSESIAAg3QhNgJgqguIAigtQAtAuA+AAQAfAAAVgRQAWgRAAgdQAAgdghgWQgNgJg6gbQgxgUgWgVQghgeAAgsQAAgsAfggQAggiAxgHIAAg4IAqAAIAAA4QBDAEAkAlIgbAxQgngkg2AAQghAAgWASQgVASAAAaQAAAcAgAUQALAHA8AbQAxAUAWAWQAhAgAAAtQAAAugeAgQggAig0AHIAAA3g");
	this.shape_7.setTransform(-143.875,-2.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4Bet, new cjs.Rectangle(-180.7,-49.4,312.79999999999995,96.19999999999999), null);


// stage content:
(lib.Winner768x1024Jacqueline = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("Eg7/hP/MB3/AAAMAAACf/Mh3/AAAg");
	this.shape.setTransform(384,512);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// WIN_NOW_
	this.instance = new lib.WINNOW();
	this.instance.setTransform(913.1,242.45,1,1,0,0,0,-11.3,-4.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({x:621.35},15,cjs.Ease.backOut).wait(58));

	// Button
	this.instance_1 = new lib.Button_1();
	this.instance_1.setTransform(912.5,247);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({x:621.5},15,cjs.Ease.backOut).wait(58));

	// $9_213_Jackpot
	this.instance_2 = new lib._9213Jackpot();
	this.instance_2.setTransform(277.15,196.8,0.0025,0.0042,0,0,0,-39.7,11.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regX:-51.3,regY:4,scaleX:1,scaleY:1,x:226,y:200.8},29,cjs.Ease.elasticOut).wait(72));

	// $4_Bet_
	this.instance_3 = new lib._4Bet();
	this.instance_3.setTransform(-123.5,65.7,0.9996,0.9997,0,0,0,-23.5,-1);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regX:-24.4,regY:-1.4,scaleX:1,scaleY:1,x:231.5,y:65.55},15,cjs.Ease.backOut).wait(99));

	// Cutout
	this.instance_4 = new lib.Cutout_1();
	this.instance_4.setTransform(384,661.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.0521,scaleY:1.0521,x:383.95,y:664.05},119).wait(1));

	// Logo
	this.instance_5 = new lib.Logo();
	this.instance_5.setTransform(523,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Color_Overlay
	this.instance_6 = new lib.ColorOverlay();
	this.instance_6.setTransform(473,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Top_Shape
	this.instance_7 = new lib.TopShape();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Base_Image
	this.instance_8 = new lib.BaseImage();
	this.instance_8.setTransform(0,253);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(93.3,511,951.7,534.4000000000001);
// library properties:
lib.properties = {
	id: '1D61149C1C144DDFA33361ABB3A4F998',
	width: 768,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Winner_768x1024_Jacqueline_atlas_1.png?1625746677291", id:"Winner_768x1024_Jacqueline_atlas_1"}
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
an.compositions['1D61149C1C144DDFA33361ABB3A4F998'] = {
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