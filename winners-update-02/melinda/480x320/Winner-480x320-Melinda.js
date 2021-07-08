(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Winner_480x320_Melinda_atlas_1", frames: [[0,0,480,296],[0,298,480,80],[0,380,186,41],[482,0,388,273],[872,0,69,55],[482,275,480,137]]}
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
	this.initialize(ss["Winner_480x320_Melinda_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BottomShape = function() {
	this.initialize(ss["Winner_480x320_Melinda_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Button = function() {
	this.initialize(ss["Winner_480x320_Melinda_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Cutout1 = function() {
	this.initialize(ss["Winner_480x320_Melinda_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.StackedLogo = function() {
	this.initialize(ss["Winner_480x320_Melinda_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TopShape = function() {
	this.initialize(ss["Winner_480x320_Melinda_atlas_1"]);
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
	this.instance.setTransform(-194,-136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cutout1_1, new cjs.Rectangle(-194,-136.5,388,273), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgaBZIAAgrIA1AAIAAArgAgRAhIgLhQIAAgpIA5AAIAAApIgLBQg");
	this.shape.setTransform(155.275,12.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBZIgihvIghBvIg7AAIgrixIA5AAIAUBjIAfhjIA3AAIAeBjIAVhjIA5AAIgrCxg");
	this.shape_1.setTransform(137.2,12.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBTQgWgKgOgVQgNgVAAgfQAAgqAbgZQAagYAvAAQAwAAAaAYQAbAYAAArQAAAegMAUQgLAUgWALQgWALggAAQggAAgVgJgAgdgmQgLAMAAAaQAAAbALAMQALAMASAAQATAAALgLQALgMAAgdQAAgZgMgMQgLgLgSAAQgSAAgLALg");
	this.shape_2.setTransform(112.725,12.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkBZIhHhhIAABhIg5AAIAAixIA4AAIBIBiIAAhiIA5AAIAACxg");
	this.shape_3.setTransform(90.2,12.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBZIhIhhIAABhIg4AAIAAixIA4AAIBIBiIAAhiIA5AAIAACxg");
	this.shape_4.setTransform(58.55,12.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBZIAAixIA7AAIAACxg");
	this.shape_5.setTransform(41.9,12.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBZIgihvIghBvIg7AAIgrixIA5AAIAVBjIAdhjIA4AAIAfBjIAUhjIA5AAIgrCxg");
	this.shape_6.setTransform(23.1,12.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WINNOW, new cjs.Rectangle(-1.7,-7.6,172.79999999999998,38.3), null);


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
	this.instance.setTransform(-93,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button_1, new cjs.Rectangle(-93,-20.5,186,41), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcB3IAAi8IhIAAIAAgxIDJAAIAAAxIhIAAIAAC8g");
	this.shape.setTransform(127.525,-1.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhYBYQgjglAAgzQAAg0AjgkQAkgiA0gBQA2ABAjAiQAjAkAAA0QAAAzgjAlQgjAjg2ABQg0gBgkgjgAgsgyQgTAVAAAdQAAAdATAVQASAUAaAAQAbAAASgUQATgVAAgdQAAgdgTgVQgSgTgbAAQgaAAgSATg");
	this.shape_1.setTransform(104.55,-1.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhXB3IAAjtIBhAAQAjAAAVAWQAWAYAAAkQAAAkgWAWQgVAYgjgBIgnAAIAABKgAgdgDIAdAAQANgBAIgIQAIgJAAgPQAAghgdAAIgdAAg");
	this.shape_2.setTransform(82.425,-1.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhB3IgxhgIgXAAIAABgIg7AAIAAjtIA7AAIAABcIAXAAIAxhcIA+AAIhAByIAAABIBDB6g");
	this.shape_3.setTransform(61.35,-1.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBYQgigjAAg1QAAg0AjgjQAkgkA0AAQA7ABAeAhIgaAsQgbgYghAAQgfAAgSAVQgRATAAAcQAAAcARAUQATAXAeAAQAkAAAbgdIAeAqQghAog/ABQg1AAgkgkg");
	this.shape_4.setTransform(37.8,-1.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzB3IgOgxIhJAAIgOAxIg8AAIBQjtIA8AAIBRDtgAAXAXIgNguIgJgpIgBAAQgFAagEAPIgOAuIAuAAg");
	this.shape_5.setTransform(15.5,-1.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BmQgYgVAAglIAAgSIA6AAIAAAOQAAAMAEAIQAGAIALAAQAVAAAAgZIAAhyIg/AAIAAgxIB4AAIAACkQAAAlgYAWQgXASggABQgfAAgXgUg");
	this.shape_6.setTransform(-5.025,-1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BgQgfggAAg3QAAgzAdgnQAggqA0AAQAhAAATALIgQAyQgPgHgRAAQglAAgNAoIAAAAQAMgJAUAAQAjAAAWAaQAVAWAAAhQAAAhgWAWQgXAagkAAQgnAAgagcgAgcAXQAAAUAMAOQALANANAAQAKAAAHgIQAHgIAAgKQAAgPgJgKQgKgLgQAAQgZAAAAAPg");
	this.shape_7.setTransform(-29.725,-1.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBkQgWgUAAgeQAAgiAhgYQgWgTABgbQgBgcAUgTQAVgVAmgBQAjAAAWASQAXAUAAAfQAAAZgXAdQAcATAAAgQAAAegWATQgZAYgpAAQgoAAgZgYgAgcAtQAAALAIAIQAJAIALAAQAcAAAAgZQAAgIgNgJIgegPQgNAOAAAQgAgTg1QAAAMALAHQAHAGATAJQAIgQAAgOQAAgWgZAAQgUAAAAASg");
	this.shape_8.setTransform(-49.7,-1.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhTBaIAbgtQAWAVAbABQAPgBAJgGQAJgHAAgKQAAgbgrAAIgRAAIgMgbIAfgmIAUgXIAAAAQgHABgPAAIg4AAIAAgxICUAAIAAAkIgwA4QAaAFAQAUQAPARAAAaQAAAigVAWQgZAZgoABQg2gBgbgfg");
	this.shape_9.setTransform(-69.225,-1.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAuIAZhbIA2AAIgmBbg");
	this.shape_10.setTransform(-83.125,9.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBBkQgWgUAAgeQAAgiAhgYQgWgTABgbQAAgcASgTQAWgVAmgBQAiAAAWASQAYAUAAAfQAAAZgXAdQAcATAAAgQAAAegWATQgZAYgpAAQgoAAgZgYgAgcAtQABALAHAIQAJAIALAAQAdAAAAgZQAAgIgOgJIgegPQgNAOAAAQgAgTg1QAAAMALAHQAHAGATAJQAJgQgBgOQAAgWgYAAQgVAAAAASg");
	this.shape_11.setTransform(-96.85,-1.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhMBxIAPgyQAQAHARAAQAlAAANgoIgBAAQgJAJgWAAQgjAAgXgZQgTgXgBghQABggAUgYQAXgZAlAAQAnAAAaAcQAeAgABA3QAAAzgdAmQghAqgzABQghAAgTgLgAgYg9QgHAIAAALQAAAOAJAKQAKALAQAAQAZAAAAgOQAAgVgMgOQgMgNgMAAQgLAAgGAIg");
	this.shape_12.setTransform(-116.6,-1.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQCZIAAgfQgsgGgYgaIAfgtQAaAZAdAAQAZAAAAgTQAAgJgRgIIgkgRQg2gZAAgpQAAgcASgTQASgTAcgFIAAggIAjAAIAAAfQAoAEAVAWIgZAwQgYgVgdAAQgIAAgIAEQgIAFAAAJQAAAJARAIIAkAQQA2AYAAArQAAAbgSAUQgRAUgfAFIAAAfg");
	this.shape_13.setTransform(-135.7,-1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._9213Jackpot, new cjs.Rectangle(-156.5,-28.4,304.5,54.599999999999994), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMBhIAAipIhCAAIAAgYICdAAIAAAYIhBAAIAACpg");
	this.shape.setTransform(41.9,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BhIAAjBIBuAAIAAAYIhTAAIAAA9IBDAAIAAAWIhDAAIAAA+IBYAAIAAAYg");
	this.shape_1.setTransform(27.05,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABhIAAjBIBCAAQAYAAAQAOQAPAMAAAYQAAAdgXAMIAAABQAOAEAJAMQAIANAAARQAAAagSAOQgRAOgbABgAglBJIAqAAQAPAAAJgJQAJgJAAgPQAAgPgJgJQgKgJgPAAIgpAAgAglgPIAnAAQANAAAHgHQAIgJAAgNQAAgNgHgHQgIgIgOAAIgmAAg");
	this.shape_2.setTransform(10.975,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDAAQAAhjBDAAQBEAAAABjQAABkhEAAQhDAAAAhkgAgnAAQAABLAnAAQAoAAAAhLQAAhKgoAAQgnAAAABKg");
	this.shape_3.setTransform(-13.025,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBhIAAg0IhcAAIAAgRIBYh8IAeAAIAAB2IAaAAIAAAXIgaAAIAAA0gAALgzIg1BJIAAAAIA+AAIAAhFIABgTIgBAAQgEAIgFAHg");
	this.shape_4.setTransform(-29.55,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_5.setTransform(-40.7,7.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBhIAAg0IhcAAIAAgRIBYh8IAfAAIAAB2IAaAAIAAAXIgaAAIAAA0gAALgzIg1BJIAAAAIA+AAIAAhFIABgTIAAAAQgFAIgFAHg");
	this.shape_6.setTransform(-52.2,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHB9IAAgaQgjgDgTgVIAPgVQAUAVAcAAQAOAAAJgIQAKgHAAgOQAAgNgPgKQgGgEgZgMQgWgJgKgJQgPgOAAgUQAAgUAOgPQAOgPAXgDIAAgaIASAAIAAAaQAeACAQARIgMAWQgSgQgYAAQgOAAgKAIQgKAIAAAMQAAAMAPAKIAfAPQAWAJAKAKQAPAOAAAVQAAAVgNAOQgPAQgXACIAAAag");
	this.shape_7.setTransform(-67.675,-1.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4Bet, new cjs.Rectangle(-84.5,-25.3,143.4,47.1), null);


// stage content:
(lib.Winner480x320Melinda = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("EglfgY/MBK/AAAMAAAAx/MhK/AAAg");
	this.shape.setTransform(240,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// WIN_NOW_
	this.instance = new lib.WINNOW();
	this.instance.setTransform(578.7,293.4,1,1,0,0,0,84.7,11.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({x:382.8},15,cjs.Ease.backOut).wait(58));

	// Button
	this.instance_1 = new lib.Button_1();
	this.instance_1.setTransform(579,296.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({x:383},15,cjs.Ease.backOut).wait(58));

	// $9_213_Jackpot_
	this.instance_2 = new lib._9213Jackpot();
	this.instance_2.setTransform(307.65,29.5,0.0034,0.0179,0,0,0,-14.6,0);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({regX:-23.1,regY:-0.8,scaleX:1,scaleY:1,x:284.6,y:28.75},28,cjs.Ease.elasticOut).wait(70));

	// $4_Bet_
	this.instance_3 = new lib._4Bet();
	this.instance_3.setTransform(-56.8,30.65,1,1,0,0,0,-12.8,-0.7);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:90.3},15,cjs.Ease.backOut).wait(96));

	// Stacked_Logo
	this.instance_4 = new lib.StackedLogo();
	this.instance_4.setTransform(41,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Bottom_Shape
	this.instance_5 = new lib.BottomShape();
	this.instance_5.setTransform(0,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Cutout_1
	this.instance_6 = new lib.Cutout1_1();
	this.instance_6.setTransform(270,183.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.0644,scaleY:1.0643,x:269.95,y:183.45},119).wait(1));

	// Top_Shape
	this.instance_7 = new lib.TopShape();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Base_Image
	this.instance_8 = new lib.BaseImage();
	this.instance_8.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(101.4,145.8,570.6,182.89999999999998);
// library properties:
lib.properties = {
	id: '3D76602F45E84BE08AAECAB2C1C99548',
	width: 480,
	height: 320,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Winner_480x320_Melinda_atlas_1.png?1625747657623", id:"Winner_480x320_Melinda_atlas_1"}
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
an.compositions['3D76602F45E84BE08AAECAB2C1C99548'] = {
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