(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Winner_1024x768_Melinda_atlas_1", frames: [[0,0,1024,715],[1026,666,401,86],[1026,0,865,664],[0,1038,1024,211],[0,717,1024,319],[1429,666,176,138]]}
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
	this.initialize(ss["Winner_1024x768_Melinda_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Button = function() {
	this.initialize(ss["Winner_1024x768_Melinda_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Cutout1 = function() {
	this.initialize(ss["Winner_1024x768_Melinda_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ShapeBottom = function() {
	this.initialize(ss["Winner_1024x768_Melinda_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ShapeTop = function() {
	this.initialize(ss["Winner_1024x768_Melinda_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TSLogocopy = function() {
	this.initialize(ss["Winner_1024x768_Melinda_atlas_1"]);
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
	this.instance.setTransform(-432.5,-332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cutout1_1, new cjs.Rectangle(-432.5,-332,865,664), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag1CzIAAhYIBsAAIAABYgAgjBCIgWijIAAhRIBzAAIAABRIgWCjg");
	this.shape.setTransform(141.95,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABFCzIhFjgIhDDgIh2AAIhXllIBzAAIAoDHIA9jHIByAAIA8DHIApjHIBzAAIhXFlg");
	this.shape_1.setTransform(105.55,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhoCmQgsgTgbgqQgagqAAg/QAAhWA1gxQA1gxBfAAQBhAAA1AwQA0AwAABWQAAA+gWApQgYAogrAWQgsAWhBAAQhBAAgrgTgAg7hNQgWAYAAA2QAAA2AWAYQAWAYAlAAQAnAAAVgYQAWgXAAg7QAAgzgWgXQgXgXglAAQgkAAgXAXg");
	this.shape_2.setTransform(56.475,-5.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABJCzIiRjDIAADDIhyAAIAAllIBxAAICSDFIAAjFIByAAIAAFlg");
	this.shape_3.setTransform(11.125,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABJCzIiRjDIAADDIhyAAIAAllIBxAAICSDFIAAjFIByAAIAAFlg");
	this.shape_4.setTransform(-52.475,-5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7CzIAAllIB3AAIAAFlg");
	this.shape_5.setTransform(-85.95,-5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABFCzIhFjgIhDDgIh3AAIhWllIByAAIAqDHIA8jHIBxAAIA9DHIAqjHIBxAAIhVFlg");
	this.shape_6.setTransform(-123.8,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WINNOW, new cjs.Rectangle(-197.6,-45,395.29999999999995,76.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhDEXIAAm4IiqAAIAAh1IHbAAIAAB1IipAAIAAG4g");
	this.shape.setTransform(273.025,-0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjQDMQhThUAAh6QAAh5BThSQBThTB9AAQB+AABTBTQBTBSAAB5QAAB6hTBUQhTBVh+AAQh9AAhThVgAhqh1QgsAuAABFQAABGAsAwQAsAwA+AAQA/AAArgwQAsgwABhGQgBhFgsguQgrgug/AAQg+AAgsAug");
	this.shape_1.setTransform(218.85,-0.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjOEXIAAotIDnAAQBRAAAzA2QAyA1AABVQAABVgyA1QgzA2hRAAIhfAAIAACtgAhGgKIBEAAQAiAAATgVQARgVAAgiQAAhLhEAAIhGAAg");
	this.shape_2.setTransform(166.45,-0.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABPEXIh1jiIg5AAIAADiIiIAAIAAotICIAAIAADXIA5AAIByjXICUAAIiXELIAAABICfEhg");
	this.shape_3.setTransform(116.85,-0.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AixDOQhRhSAAh8QAAh6BUhTQBUhTB8AAQCKAABHBPIg/BnQg+g5hOAAQhKAAgsAyQgnAsAABCQAABCApAwQAsA1BIAAQBUAABBhFIBGBkQhPBeiSAAQiBAAhShTg");
	this.shape_4.setTransform(61.475,-0.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB5EXIgih1IitAAIgiB1IiNAAIC+otICPAAIC9ItgAA2A1IgehsQgLgjgMg9IgBAAQgNA9gJAjIghBsIBtAAg");
	this.shape_5.setTransform(8.8,-0.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiADvQg6gzAAhVIAAgpICIAAIAAAeQAAAeAMARQANAUAaAAQAyAAAAg8IAAkIIiWAAIAAh2IEeAAIAAGCQAABWg7AzQg0AshMAAQhMAAg0gtg");
	this.shape_6.setTransform(-39.65,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiJDfQhHhJAAiBQAAh5BEhZQBLhjB7AAQBNAAAuAZIgkB1QglgRgoAAQhZAAgeBcIABAAQAbgTAxAAQBTAAA0A8QAwA2AABMQAABMgzA2Qg1A7hXAAQhcAAg/hCgAhDA1QAAAvAcAhQAbAfAeAAQAZAAAQgTQAQgSAAgaQgBghgTgXQgXgagqAAQg5AAAAAig");
	this.shape_7.setTransform(-98,-0.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiaDrQg0gwAAhIQAAhMBNg7QgzgsAAg/QAAhCAtgtQAzgyBbAAQBRAAA0AqQA4AtAABLQAAA5g2BFQBBAtAABJQAABGg0AvQg5A2hiAAQhgAAg6g2gAhCBnQAAAcATATQAUASAbAAQBDAAAAg5QAAgVgggTQgNgIg7gbQgdAfAAAkgAguh8QAAAZAbAUQARAMAtAUQATgkAAghQAAgzg6AAQgyAAAAArg");
	this.shape_8.setTransform(-145.2,-0.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjGDTIBChqQAyAyBBAAQAjAAAXgQQAUgPAAgZQAAg9hnAAIgnAAIgdhCIBKhYQAaggAVgUIAAgCQgRAFgjAAIiFAAIAAh2IFfAAIAABVIhxCDQA9ANAlAtQAlArAAA8QAABNgzA1Qg6A8hhAAQh9AAhChJg");
	this.shape_9.setTransform(-190.925,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhdBsIA7jXICAAAIhZDXg");
	this.shape_10.setTransform(-223.725,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiaDrQg0gwAAhIQAAhMBNg7QgygsgBg/QAAhCAtgtQAzgyBbAAQBRAAA0AqQA4AtAABLQAAA5g3BFQBCAtAABJQAABGg0AvQg5A2hiAAQhgAAg6g2gAhCBnQAAAcATATQAUASAbAAQBDAAAAg5QAAgVgggTQgMgIg8gbQgdAfAAAkgAguh8QAAAZAaAUQASAMAsAUQAUgkAAghQAAgzg6AAQgyAAAAArg");
	this.shape_11.setTransform(-256.25,-0.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ai0EIIAkh1QAlARAoAAQBZAAAehdIgBAAQgYAUg0AAQhTAAg0g8Qgwg2AAhMQAAhMAzg2QA1g7BXAAQBcAAA/BCQBHBJAACBQAAB6hFBYQhLBjh6AAQhOAAgtgZgAg6iQQgQASAAAaQABAhATAXQAXAaApAAQA6AAAAgiQAAgvgcghQgbgfgeAAQgZAAgQATg");
	this.shape_12.setTransform(-302.95,-0.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoFlIAAhHQhngQg4g9IBHhoQBAA6BFAAQA7AAAAgtQAAgTgogUIhWgnQh/g8AAhgQAAhAAqguQAogsBDgNIAAhJIBUAAIAABHQBgALAvAyIg6BvQg4gwhDAAQgXgBgQALQgTAMAAAWQAAAUAnATIBXAlQB+A5AABkQAAA/goAvQgrAwhJAMIAABHg");
	this.shape_13.setTransform(-348.025,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._9213Jackpot, new cjs.Rectangle(-388.4,-63.3,719,128.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgZC4IAAlCIh+AAIAAgtIEvAAIAAAtIh+AAIAAFCg");
	this.shape.setTransform(97.475,-1.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuC4IAAlvIDUAAIAAAtIihAAIAABzICDAAIAAAsIiDAAIAAB2ICqAAIAAAtg");
	this.shape_1.setTransform(69.075,-1.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah8C4IAAlvICAAAQAvAAAdAZQAeAZAAAsQABA3gvAYIAAABQAdAIAQAYQAQAYAAAgQAAAygjAcQghAbgyAAgAhICLIBRAAQAdAAARgRQASgRgBgdQAAgcgRgRQgSgSgcAAIhRAAgAhIgcIBMAAQAYAAAPgQQAPgPAAgZQAAgZgPgOQgPgPgaAAIhKAAg");
	this.shape_2.setTransform(37.95,-1.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiBAAQAAi9CBAAQCCAAAAC9QAAC+iCAAQiBAAAAi+gAhMAAQAACPBMAAQBNAAAAiPQAAiOhNAAQhMAAAACOg");
	this.shape_3.setTransform(-7.975,-1.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnC4IAAhjIixAAIAAggICpjsIA7AAIAADhIAxAAIAAArIgxAAIAABjgAAWhhIhnCKIAAABIB4AAIAAiFQAAgRACgUIgBAAQgIASgKANg");
	this.shape_4.setTransform(-39.525,-1.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAbIAAg1IA1AAIAAA1g");
	this.shape_5.setTransform(-61.025,13.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnC4IAAhjIixAAIAAggICpjsIA7AAIAADhIAxAAIAAArIgxAAIAABjgAAWhhIhnCKIAAABIB4AAIAAiFQAAgRACgUIgBAAQgIASgKANg");
	this.shape_6.setTransform(-82.925,-1.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPDtIAAgwQhDgGgkgpIAdgnQAnAoA2AAQAbAAASgOQASgPAAgaQAAgZgcgSQgMgIgxgXQgrgSgTgSQgcgaAAgmQAAgmAbgcQAbgdArgGIAAgxIAkAAIAAAxQA6AEAfAfIgXArQgigggvAAQgcAAgTAQQgTAQAAAWQAAAYAcASQAKAGAzAXQArASATASQAcAbAAAoQAAAogaAcQgbAdgtAFIAAAwg");
	this.shape_7.setTransform(-112.375,-1.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4Bet, new cjs.Rectangle(-144.4,-49.8,275.9,97.19999999999999), null);


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
	this.instance.setTransform(-200.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button_1, new cjs.Rectangle(-200.5,-43,401,86), null);


// stage content:
(lib.Winner1024x768Melinda = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("EhP/g7/MCf/AAAMAAAB3/Mif/AAAg");
	this.shape.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// WIN_NOW_
	this.instance = new lib.WINNOW();
	this.instance.setTransform(1231,710.85,1,1,0,0,0,0,-7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({x:812.4},15,cjs.Ease.backOut).wait(58));

	// Button
	this.instance_1 = new lib.Button_1();
	this.instance_1.setTransform(1232.5,717);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({x:812.5},15,cjs.Ease.backOut).wait(58));

	// $9_213_Jackpot_
	this.instance_2 = new lib._9213Jackpot();
	this.instance_2.setTransform(682.6,61.75,0.0014,0.0072,0,0,0,-35.2,7);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regX:-55.6,regY:-1.9,scaleX:1,scaleY:1,x:627.05,y:59.85},29,cjs.Ease.elasticOut).wait(72));

	// $4_Bet
	this.instance_3 = new lib._4Bet();
	this.instance_3.setTransform(-142.7,61.05,1,1,0,0,0,-26.7,-1.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:157.05},15,cjs.Ease.backOut).wait(99));

	// TS_Logo_copy
	this.instance_4 = new lib.TSLogocopy();
	this.instance_4.setTransform(50,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Shape_Bottom
	this.instance_5 = new lib.ShapeBottom();
	this.instance_5.setTransform(0,557);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Cutout_1
	this.instance_6 = new lib.Cutout1_1();
	this.instance_6.setTransform(550.5,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.0578,scaleY:1.0578,y:431.95},119).wait(1));

	// Shape_Top
	this.instance_7 = new lib.ShapeTop();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Base_Image
	this.instance_8 = new lib.BaseImage();
	this.instance_8.setTransform(0,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(241.6,343,1191.4,440.1);
// library properties:
lib.properties = {
	id: '470A1786AF33402F82496FEA1B7E194B',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Winner_1024x768_Melinda_atlas_1.png?1625747916240", id:"Winner_1024x768_Melinda_atlas_1"}
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
an.compositions['470A1786AF33402F82496FEA1B7E194B'] = {
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