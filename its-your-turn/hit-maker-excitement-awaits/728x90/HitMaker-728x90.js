(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HitMaker_728x90_atlas_P_1", frames: [[0,0,800,91]]},
		{name:"HitMaker_728x90_atlas_NP_1", frames: [[0,0,321,200]]}
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



(lib.Blackjack_ext = function() {
	this.initialize(ss["HitMaker_728x90_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SpinDoctorShapes728 = function() {
	this.initialize(ss["HitMaker_728x90_atlas_P_1"]);
	this.gotoAndStop(0);
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


(lib.ViewMore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// View_More
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIDIIAAmPIERAAIAAA+IjKAAIAABnIDGAAIAAA9IjGAAIAABvIDKAAIAAA+g");
	this.shape.setTransform(132.45,88.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKDIIhYiVIhFAAIAACVIhHAAIAAmPICvAAQA7AAAkAjQAkAjAAA3QAAAzgdAfQgaAcgoAHIBiCdgAhTgKIBfAAQAeAAATgRQATgTAAgcQAAgcgTgSQgTgRgeAAIhfAAg");
	this.shape_1.setTransform(96.575,88.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiSCUQg6g6AAhaQAAhZA6g6QA5g7BZAAQBaAAA5A7QA6A6AABZQAABag6A6Qg5A7haAAQhZAAg5g7gAhghmQgkAoAAA+QAAA/AkAoQAlAqA7AAQA7AAAmgqQAkgoAAg/QAAg+gkgoQgmgqg7AAQg7AAglAqg");
	this.shape_2.setTransform(53.875,88.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACJDIIAAkuIh6EuIgdAAIh6kuIAAEuIhHAAIAAmPIBjAAIBsENIBtkNIBjAAIAAGPg");
	this.shape_3.setTransform(5.9,88.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABqDIIjQkjIAAEjIhGAAIAAmPIBIAAIDLEbIAAkbIBGAAIAAGPg");
	this.shape_4.setTransform(136.75,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABKDIIhYiWIhFAAIAACWIhHAAIAAmPICvAAQA7AAAkAjQAkAiAAA4QAAAygdAgQgaAdgoAFIBiCegAhTgKIBfAAQAeAAATgSQATgRAAgdQAAgcgTgSQgTgSgeAAIhfAAg");
	this.shape_5.setTransform(97.225,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB8DIIgdhNIi8AAIgeBNIhNAAICdmPIBXAAICdGPgABLA9IhLjIIhKDIICVAAg");
	this.shape_6.setTransform(57.3,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiIDIIAAmPIERAAIAAA9IjKAAIAABpIDGAAIAAA8IjGAAIAABvIDKAAIAAA+g");
	this.shape_7.setTransform(20.5,31.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah6DIIAAmPIBGAAIAAFRICvAAIAAA+g");
	this.shape_8.setTransform(-11.875,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(120));

	// Button
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D71920","#F37043"],[0,1],-32.8,198.9,-192.7,-78.1).s().p("AzowtMAnRgALMAAAAhmMgnRAALg");
	this.shape_9.setTransform(66.675,61.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-46.9,398,216.1);


(lib.Turn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AitGKQgUgRAAgoQgQk9gBgvQgDiyAUiPQAGgiAhgIQAcgIAQANQAkAhASBJQANA0AJBkQAMCKAFAgQANBhAYA/QASAqAWAKQATAJALgRQAng+gQkeQgIiXAAgqQAAhZATgPQANgLATAOQAOAMAHAPQAMAmALC4QALCgAABBQAAB0gUA+QgeBfhNgFQhMgEgog1QgPgSgdhFIgJgTQgHgOgEAAQgJAAAAAgIACBIQACBuggARQgIADgIAAQgNAAgLgKg");
	this.shape.setTransform(94.945,39.8415,1.1543,1.1545);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhwE6IgDiWQAAgVgZgIQgggLgNgVQgLgQAbgRQAOgJAUgIQANgFAEgRQAEgQACg3QADiLgBgPQgCgagQgHQhIgeAzg3QArgvBbggQA+gWA0ARQAzAQAXAwQAZAygOBEQgQBKg8BQQgqA6gyArQgnAigBAHQgEANAiAbIB+BfQBoBUhbAUIhnhTQhCg0gEAjQgHAwABAUQABAjAPAoQAFAPgKANQgJANgQAAQg1gFgLhWgAAplLQgeAGgPALQgSAOgDAaQgECXABAqIADAtQAaADAkgxQAhguAVg+QAWhCgKgnQgIglglAAQgIAAgJABg");
	this.shape_1.setTransform(40.6946,39.7988,1.1543,1.1545);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjGTQg9gJgfg3Qg/hrgHjcQgFiuAcivQADgfAtADQAuADAAAnIgKBOQgKBegDBWQgIESBHBgQAjAyAqixQApiogFh3QgCgUAAggIACg0QADiPABgFQAHgoAqgCQAWAAAPALQAOAKAAAPQAHAuACEHQADECAEAZQANBEgVAXQgQASgTgMQgOgDgagUQgaAbgKAQIgVAeQgaAggrAAIgTgBg");
	this.shape_2.setTransform(-12.0045,39.699,1.1543,1.1545);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ao6NdQgogBgKgZQgHgTAEggIAFgcQA3j6A2kmQBupKgCjUQAAgQgaAAQgUAAgYAGQlKBbkqB3QhPAfgVACQgZABgOgdQgNgiAbgUQAOgMArgPQEehtDshIQC3g5AcAAQAPgDAhgRQAfgPASgCQHWhKFggeQLPg+AmCMQACAEgHAJQgHAHgFAAIgcgEQgRgBgIgCQixgzo0A2QjTAVjLAdQi4AahGATQgMADgLgFIgPgGQgMAAgOBKQgWB3ilQdIgkDwQgEAjgmAAIgEAAg");
	this.shape_3.setTransform(-0.107,-0.0663,1.1543,1.1545);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Turn, new cjs.Rectangle(-143.6,-99.5,287,198.9), null);


(lib.Shapes = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SpinDoctorShapes728();
	this.instance.setTransform(-400,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shapes, new cjs.Rectangle(-400,-45.5,800,91), null);


(lib.Photo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Blackjack_ext();
	this.instance.setTransform(-77,-69,0.6346,0.6346);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Photo, new cjs.Rectangle(-77,-69,203.7,126.9), null);


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


(lib.Line4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(168,40,35,0)","#E26D38"],[0,1],-98,-384.1,108.1,384.3).s().p("EAPFA77QgggSgJgjMgfeh1eQgKgjASgfQASggAigJQAjgKAfASQAfASAJAkMAffB1eQAKAjgSAfQgSAggjAJQgLADgMAAQgWAAgUgMg");
	this.shape.setTransform(-691.5149,-619.6161,0.8136,0.8135,-20.4992);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line4, new cjs.Rectangle(-882.5,-884.5,382,529.8), null);


(lib.ItsYour = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABaD1Ihri3IhWAAIAAC3IhWAAIAAnpIDWAAQBJAAAtAqQAsArAABEQAAA+gkAnQghAjgwAIIB4DAgAhngNIB1AAQAlAAAXgVQAYgWAAgjQAAgjgYgWQgXgVglAAIh1AAg");
	this.shape.setTransform(167.3942,-0.0792,1.1329,1.133);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AifDCQg1g1AAheIAAkoIBYAAIAAElQAAA8AgAiQAhAjA7AAQA8AAAhgjQAggiAAg8IAAklIBYAAIAAEoQAABeg1A1Qg4A4hoAAQhnAAg4g4g");
	this.shape_1.setTransform(109.9001,0.4306,1.1329,1.133);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AizC2QhHhIAAhuQAAhuBHhHQBGhIBtAAQBtAABIBIQBGBIAABtQAABuhGBIQhIBIhtAAQhtAAhGhIgAh2h+QgrAyAABMQAABNArAxQAuA0BIAAQBJAAAug0QAsgxAAhNQAAhMgsgyQgugyhJgBQhIABguAyg");
	this.shape_2.setTransform(48.0161,-0.0509,1.1329,1.133);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqD1IAAjLIi/keIBjAAICGDRICGjRIBjAAIi9EeIAADLg");
	this.shape_3.setTransform(-7.099,-0.0792,1.1329,1.133);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjCCwIAxhDQAbAeAlASQArAVAvAAQAxgBAagVQAXgSAAgcQAAgigtgTQgKgEhXgYQhDgSgfgXQgtgkAAg8QAAg/AxgpQAygpBPAAQBxAABGBGIgwBAQgdgdgmgOQgkgPgnAAQglAAgXASQgXARAAAbQAAAeAtARIBhAcQBCATAhAYQAsAlAAA9QAABCgtApQgzAuheAAQh7AAhMhOg");
	this.shape_4.setTransform(-80.3119,-0.0509,1.1329,1.133);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBEQATgLAPgTQAQgVACgRQgDABgIAAQgSAAgNgNQgMgNAAgUQAAgVAOgOQAPgPAVAAQAWAAAQASQARASAAAfQAAAkgTAiQgSAggeAWg");
	this.shape_5.setTransform(-114.6951,-17.8384,1.1329,1.133);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqD1IAAmeIiVAAIAAhLIF/AAIAABLIiVAAIAAGeg");
	this.shape_6.setTransform(-149.2482,-0.0792,1.1329,1.133);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqD1IAAnpIBVAAIAAHpg");
	this.shape_7.setTransform(-184.0845,-0.0792,1.1329,1.133);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ItsYour, new cjs.Rectangle(-189,-28.8,378,57.6), null);


(lib.HitMaker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0.0298);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HitMaker, new cjs.Rectangle(-77.5,-38.9,155,77.9), null);


(lib.BeThe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AitD3IAAntIFbAAIAABbIjzAAIAABrIDvAAIAABZIjvAAIAABzIDzAAIAABbg");
	this.shape.setTransform(104.9,-1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB0D3IAAjPIjoAAIAADPIhpAAIAAntIBpAAIAADCIDoAAIAAjCIBqAAIAAHtg");
	this.shape_1.setTransform(55.6,-1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0D3IAAmQIiQAAIAAhdIGJAAIAABdIiQAAIAAGQg");
	this.shape_2.setTransform(7,-1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AitD3IAAntIFcAAIAABbIjzAAIAABrIDtAAIAABZIjtAAIAABzIDzAAIAABbg");
	this.shape_3.setTransform(-54.2,-1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjND3IAAntIEDAAQBDAAAnAmQAkAjAAA1QAAAtgZAfQgYAegkAHQAoAHAbAgQAcAkAAAtQAAA7glAkQgnAnhEAAgAhkCdICHAAQAdAAARgQQARgPAAgbQAAgZgQgQQgSgRgdAAIiHAAgAhkgvICDAAQAaAAAQgQQAQgPAAgYQAAgYgQgPQgQgPgaAAIiDAAg");
	this.shape_4.setTransform(-100.125,-1.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BeThe, new cjs.Rectangle(-156.9,-47,313.9,94.1), null);


// stage content:
(lib.HitMaker728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [228];
	// timeline functions:
	this.frame_228 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(228).call(this.frame_228).wait(12));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// Logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.3).p("AAAgUQAJAAAGAGQAFAGAAAIQAAAIgFAGQgGAGgJAAQgHAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAHAAgAAAgRQgFAAgFAFQgFAGAAAGQAAAHAFAFQAEAFAGAAQAHAAAFgFQAFgFAAgHQAAgGgFgGQgFgFgHAAgAgDALIgDAAIAAgVIAGgBQAFAAABACQACABAAAEQAAADgEABQADABABAFIABAFIgEAAIgBgFQgBgEgDAAIgDAAgAgDAAIADAAQAFAAAAgEQAAgEgFAAIgDAAg");
	this.shape_1.setTransform(709.9174,62.5897,1.7166,1.7178);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAOQgGgFAAgJQAAgIAGgFQAGgGAHgBQAJABAGAGQAFAFAAAIQAAAJgFAFQgGAHgJAAQgHAAgGgHgAgKgMQgFAGAAAGQAAAHAFAFQAEAFAGAAQAHAAAFgFQAFgFAAgHQAAgGgFgGQgFgEgHAAQgFAAgFAEgAAFAMIgBgGQgBgEgDAAIgDAAIAAAKIgDAAIAAgWIAGgBQAFAAABACQACABAAAEQAAAEgEABQADAAABAFIABAGgAgDgHIAAAHIADAAQAFAAAAgEQAAgEgFAAg");
	this.shape_2.setTransform(709.9174,62.5897,1.7166,1.7178);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA6QgPgFgIgJQgIgGgGgMQgGgNABgNQAAgMADgMQAFgLAIgJQAGgJAMgEQAKgFALAAQALAAAJADQAKAFAGAGQAHAJAEALQADANAAANIAAADIhQAAQACAKADAGQAEAJAJAGQAGAEAHABQAHACAMAAIAYgBIgEAYIgCAAIgTABQgSAAgOgFgAAbgSQgCgKgFgGQgHgHgLAAQgLABgGAGQgGAGgDAKIAzAAIAAAAg");
	this.shape_3.setTransform(699.919,68.9475,0.9018,0.9023);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA9QgOgGgLgJQgHgIgGgMQgGgMAAgOQAAgNAFgMQADgLAJgKQAHgIAMgGQALgFALABQAMgBAJAEQAJAEAHAHQAJAKADALQAEAMAAAPIAAADIAAACIgDABIhNAAIAEAMQADAHAKAHQAHAEAEABQAHACAMAAIAYgBIABABIABACIgDAXIgDACIgDAAIgSABQgSAAgPgEgAgNggQgEADgEAIIAsAAQgCgIgEgDQgFgGgKAAQgIAAgHAGg");
	this.shape_4.setTransform(699.919,68.9475,0.9018,0.9023);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBACIgBgCIABgBQABAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAIACABIgCACIgBABg");
	this.shape_5.setTransform(697.3037,67.6843,0.9018,0.9023);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYA/IABhQQAAgLgEgFQgDgEgKAAQgHAAgHADIgSAJIAABYIgaAAIAAh6IAaAAIAAALIAVgKQAKgEAHAAQARAAAKALQAKAKgBARIABBXg");
	this.shape_6.setTransform(688.0598,68.9249,0.9018,0.9023);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBBIgBgBIgBgCIABhPQgBgKgDgFQgCgDgJAAQgGAAgHAEQgKADgGAFIAABWQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgaAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAh6IABgBIACgBIAaAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAAAHQAIgGAJgCQALgEAHAAQARAAALALQALALAAASIAABXQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_7.setTransform(688.0598,68.9249,0.9018,0.9023);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAACIgBgCIAAgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIABABIAAABIgBABIgBABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_8.setTransform(685.2641,72.4324,0.9018,0.9023);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAACQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_9.setTransform(670.5754,66.737,0.9018,0.9023);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAAIABgBIABgBIABABQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_10.setTransform(677.5985,63.6242,0.9018,0.9023);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVA9QgKgFgIgHQgKgJgEgNQgFgMAAgPQAAgMAEgNQAEgKAJgLQAJgJAKgDQALgFALAAQAMAAALAEQALAEAHAJQAJAJAFAMQAEANAAAMQAAAOgFAMQgFAOgJAJQgIAHgKAEQgJAEgNAAQgMAAgJgDgAgLgmQgEABgFAGQgGAGgDAHQgDAJAAAJQAAALADAIQADAJAHAGQAEAEAFACQAEACAGAAQAGAAAGgCQAFgDAEgEQAGgGADgIQADgJAAgJQAAgIgDgLQgDgHgHgIQgDgDgGgCIgLgCQgGAAgFACg");
	this.shape_11.setTransform(675.5468,69.0377,0.9018,0.9023);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWA+QgJgDgKgIQgJgJgGgPQgFgMAAgPQAAgMAEgOQAEgKAKgLQAIgIAMgGQAMgFALABQANgBALAFQALAFAIAIQAJAJAFANQAFANAAANQAAAOgFANQgFAOgLAKQgIAHgKAEQgJAEgOABQgMgBgKgEgAgKgkQgFACgEAFQgEAEgEAIQgDAJAAAIQAAAKADAIQADAHAHAIIAIAEIAJACQAGAAAFgCIAIgFQAGgHACgHQADgIAAgJQAAgIgDgKQgDgIgGgFQgCgDgGgDIgKgCQgEAAgGACg");
	this.shape_12.setTransform(675.5468,69.0377,0.9018,0.9023);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbBLQgZAAgMgLQgNgLAAgWIAAg5IgTAAIAAgVIAUAAIAAgbIAYAAIAAAbIAoAAIAAAVIgoAAIgBA3QAAAMAHAGQAHAFAOAAIAOAAIgEAWIgCABg");
	this.shape_13.setTransform(664.9501,67.8873,0.9018,0.9023);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBCQgOgLAAgYIAAg2IgQAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgVQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIARAAIAAgYQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAYAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAAYIAmAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAVQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgmAAIAAA0QAAALAFAFQAHAFANAAIAOAAIABAAIABACIgDAXQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgNAAQgaAAgNgLg");
	this.shape_14.setTransform(664.9501,67.8873,0.9018,0.9023);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiDCMQgrggAAgwQAAgiAUgWQAVgWAeAAQAZABAMALQAEAEAAAFIgBAFIgDANIgJgHQgQgNgPAAQgSAAgNAOQgNAPAAAVQAAAuA0AeQAqAXAnAAQAjAAAZgPIABAAIAHgEIAAAAIAIgGIABAAQAIgGAGgIQARgUAAgUQAAgPgLgPQgLgQgZgTIgSgNQgegXgOgUQgNgUAAgWQAAgjAfgXQAdgWAxAAQAnAAAdARQAdASAAAZQAAAOgLAKQgKAJgPAAQgMAAgKgGIAAAAIgFgEQgCgDAAgDQAAgEAEgDIACgDIAEgEIAHAEIAAAAQAHAFAHAAQAEAAADgCQACgCAAgEQAAgHgGgHQgIgJgKgFQgYgOgeAAQgiAAgVAOQgTAMgBAWQAAANAIANQAJAOAUARIApAhQArAiAAAoQAAAugsAgQgrAhg6AAQg/AAgpghg");
	this.shape_15.setTransform(649.0778,61.9325,0.9018,0.9023);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiFCOQgrggAAgyQAAgjAVgXQAVgXAfAAQAYAAAPANQAFAFAAAGIgBAFIgDAOIgCACIgBAAIgBgBIgKgHQgPgMgOAAQgRAAgMANQgMAOAAAUQAAAtAyAcQAoAYAoAAQAiAAAZgPIAIgEIAHgGIACgBQAGgDAHgKQAQgTAAgTQAAgPgKgNQgKgQgagTIgRgNQgggZgNgTQgOgUAAgXQAAgkAggYQAfgWAxAAQApAAAcARQAeATAAAaQAAAPgLAKQgLAKgQAAQgLAAgMgFIgGgFQgCgEAAgEQAAgGAEgDIACgCIAEgFIACgBIAIAFQAHAEAGAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgGgFgHQgHgHgKgGQgZgOgbAAQgiAAgVAOQgSANAAATQAAAMAHANQAIAMAVASIAoAhQAsAjAAApQAAAvgtAhQgsAhg6AAQhAAAgqghg");
	this.shape_16.setTransform(649.0778,61.9325,0.9018,0.9023);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkBXIgDgWIAcgCIARgEQAMgEAEgHQADgFABgJIgBAAQgNAAgOgDQgQgEgKgHQgLgIgGgLQgHgKAAgRQAAgRAKgNQAJgNAQgIQAKgFAMgCQAMgCATAAIARAAIAABvQAAAUgIAMQgGALgOAIQgKAFgOADQgOADgUAAgAAKg+QgEAAgKAEQgKAFgGAIQgFAJAAALQAAAMAFAHQAGAHAIAEIAOAFQAIACALAAIAAhMQgKAAgHACg");
	this.shape_17.setTransform(708.6894,37.0303,0.9018,0.9023);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkBaQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgDgXIABgCIACgBIAEAAIAXgBIARgEQALgEAEgHQADgFAAgEQgNAAgNgDQgPgEgLgIQgMgIgGgLQgHgMAAgRQAAgSAKgOQAJgNAQgIQALgFANgDQALgCAUAAIARAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAABvQAAAVgHAMQgHAMgPAIQgLAGgOADQgOADgUAAgAALg8QgHABgHAEQgKADgFAJQgFAHAAALQAAAKAFAHQAFAHAIADQAHAEAHABIAPACIAAhGIgNABg");
	this.shape_18.setTransform(708.6894,37.0303,0.9018,0.9023);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAYA/IAAgDIABgCIAAhLQAAgLgEgFQgDgEgKAAQgHAAgIADIgRAJIAABYIgaAAIAAh6IAaAAIAAALQALgGAKgEQAKgEAIAAQAQAAAKALQAKAJAAASIAABOIAAAEIAAAFg");
	this.shape_19.setTransform(696.8978,34.6393,0.9018,0.9023);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAYBBIgBgBIgBgCIABhPQgBgKgDgFQgCgDgJAAQgGAAgHAEIgQAIIAABWIgBABIgCABIgaAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAh6IABgBIACgBIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAGQAJgFAIgCQALgEAIAAQAQAAALALQALALAAASIAABXQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_20.setTransform(696.8978,34.6393,0.9018,0.9023);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMA9IAAh5IAZAAIAAB5g");
	this.shape_21.setTransform(687.5187,34.7747,0.9018,0.9023);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMBAIgCgBIgBgCIABgEIAAh1IAAgCIACgBIAZAAIACABIABACIAAB5QAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_22.setTransform(687.4961,34.7747,0.9018,0.9023);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_23.setTransform(687.5187,26.7897,0.9018,0.9023);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNAQQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgbQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAbAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAbQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_24.setTransform(687.5187,26.7672,0.9018,0.9023);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAYA/IABhQQAAgLgEgFQgDgEgKAAQgHAAgIADIgRAJIgBA6IABAeIgaAAIAAh6IAaAAIAAALQALgGAKgEQAKgEAIAAQAQAAAKALQAKAJAAASIAABQIAAACIAAAFg");
	this.shape_25.setTransform(678.2297,34.6393,0.9018,0.9023);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYBBIgBgBIgBgCIABhPQgBgKgDgFQgCgDgJAAQgGAAgHAEQgKADgGAFIAABWQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgaAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAh6IABgBIACgBIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAHQAIgGAJgCQALgEAIAAQAQAAALALQALALAAASIAABXQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_26.setTransform(678.2297,34.6393,0.9018,0.9023);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglA/IAAh5IAaAAIAAAOIAngRIAEgBIAFAYIgDAAIgBABIgSAGIgaAMIAABSg");
	this.shape_27.setTransform(668.4899,34.6168,0.9018,0.9023);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglBCQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAh5IABgCIABgBIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIAAAKIAQgIIAUgIIAFAAIAAAAIABAAIABABIAGAZQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgEABIgSAGIgZALIABBRQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAg");
	this.shape_28.setTransform(668.4899,34.6168,0.9018,0.9023);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgoA0QgKgLAAgSIAAhUIAaAAIAABOQABANADAEQADAFAIAAQAHAAAMgFIAPgIIAAhXIAaAAIAAB5IgaAAIAAgKIgOAHQgLAGgMAAQgSAAgKgLg");
	this.shape_29.setTransform(657.014,34.8875,0.9018,0.9023);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNBBQgSAAgLgLQgKgLAAgUIAAhUQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAaAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIgBBOQABAMADAEQADADAGABQAHgBALgFIAOgHIgBhVQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAaAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAB5IAAABIgCACIgaAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgGIgLAFQgMAGgMAAg");
	this.shape_30.setTransform(657.014,34.8875,0.9018,0.9023);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAADIgBgBIAAgCIAAgBIACgBIAAABIABABIgBACIAAABg");
	this.shape_31.setTransform(652.9782,31.1431,0.9018,0.9023);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AizClQgLgFgFgFQgHgGAAgHQAAgEADgFIAQgRIAFAGQAaAaAjAAQAiAAAegZIABAAQALgIAMgQQAMgRAQgdIAAgBIAcg3QAohPATgdQgNgDgSgHIgcgNQgYgKgWAAQgiAAgdAeQgeAdAAAkQAAAWAMAPQALAOARAAQAQAAANgNQANgOAAgSIAAgGIABgBIABgBQAGgGAFAAQADAAACACQAFACAAAHIgEASQgIAYgTAOQgTAQgXAAQgZAAgQgSQgQgSAAgbQAAg0ApgoQAqgpA2AAQAbAAAgANIAwATQAkgoAiAAQAMAAAGAGQAIAGAAAKQAAATgZAQQgYAOggAAIgOAAQgTAegTAiIgiBDIgCAFIgDAEIgcA1Qg2BdhNAAQgbAAgYgOgACCiFIAHAAQASAAAOgIQAMgGAAgIIAAgBIgBgBIgFAAQgTAAgaAYg");
	this.shape_32.setTransform(646.1919,27.7371,0.9018,0.9023);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ai1CoIgQgLQgHgHAAgIQAAgFADgFIAQgSIACAAIACAAIAFAGQAYAaAjAAQAgAAAfgZQAMgIALgQQANgSAOgcIAPgeIANgZQAnhMATgdQgQgFgMgFIgcgMQgYgLgVAAQghAAgdAdQgcAeAAAiQAAAWALAOQALANAPAAQAPAAAMgMQANgOAAgRIAAgGIAAgCIACgCQAHgGAGgBIAHADQAFADAAAIQgBALgCAHQgIAZgUAPQgUAQgYAAQgaAAgRgTQgRgRAAgdQAAg1ArgpQAqgpA3AAQAcAAAgANIAuASQAlgnAiAAQALAAAJAGQAIAHAAALQAAAVgaAQQgYAPghAAIgNAAQgUAfgRAgIgnBLQgSAlgKAQQg2BehPAAQgbAAgagNgACIiHIABAAQARAAAOgIQALgFAAgGIgBAAIgDgBQgQAAgXAUg");
	this.shape_33.setTransform(646.1919,27.7371,0.9018,0.9023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(240));

	// Turn
	this.instance = new lib.Turn();
	this.instance.setTransform(482.75,47.15,0.0035,0.3414,0,0,0,14.3,5.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).to({regX:3,scaleX:0.3418,x:483.75},12,cjs.Ease.backOut).wait(110).to({regX:14.3,scaleX:0.0035,x:482.75},10,cjs.Ease.backIn).wait(1));

	// Its_Your
	this.instance_1 = new lib.ItsYour();
	this.instance_1.setTransform(381.8,59.95,0.0026,0.3425,0,0,0,18.9,4.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107).to({_off:false},0).to({regX:5.7,scaleX:0.3439,x:383.75},12,cjs.Ease.backOut).wait(110).to({regX:18.9,scaleX:0.0026,x:381.8},10,cjs.Ease.backIn).wait(1));

	// Hit_Maker_copy
	this.instance_2 = new lib.HitMaker();
	this.instance_2.setTransform(491.8,45.15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({scaleX:0.0065},12,cjs.Ease.backIn).to({_off:true},1).wait(132));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("EAhDACgQgMgIAAgXQAAgOACgWIADgkQABgQgCgiIgBgYIAAgNQAAgHADgFQAEgHAIgDQAJgFAKACIANAFIAIACIAHADQAFAEACAIQACAGAAAKIgBBSIAAAYQgBANgDAKQgFAbgQAOQgIAIgJACIgHAAQgHAAgFgDg");
	var mask_graphics_10 = new cjs.Graphics().p("EAhIAEZQgFgFgBgJIAAgRQABgfgCgfIgDgVIAAglIAAhQIAAgJIACgHQgJgIAAgUQAAgNACgWIADgkQABgQgCgiIgBgZIAAgNQAAgHADgFQAEgHAIgDQAJgFAKACIANAFIAIACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgDAKQgFAagQAOIgFAEIADAHIAAALIAAAsQgBAwADAaIABAVIABAjIAAAgIgBAKQAAAGgCADQgFAIgJABIgEAAQgHAAgFgFg");
	var mask_graphics_11 = new cjs.Graphics().p("EAhJAF8QgLgFgEgOQgCgJABgMIACgUIABgeIAAgeIgBgMIgBgFIgCgFQgCgJgBgRIgDgtIgDgSQgBgLACgHQADgPAPgMIgBgMIgDgVIAAglIAAhPIAAgJIACgHQgJgJAAgUQAAgNACgXIADgjQABgRgCgiIgBgZIAAgNQAAgHADgFQAEgGAIgEQAJgEAKACIANAEIAIACIAHAEQAFADACAJQACAGAAAKIgBBSIAAAYQgBANgDALQgFAagQAPIgFADIADAIIAAALIAAArQgBAvADAbIABANIACABQAGACADADQAEAFABAHIABANQAAAMADAWIAEAhQAAALgBAUIgGBrIgDAWQgCAMgFAJQgHAKgKAEQgGADgFAAQgFAAgFgDg");
	var mask_graphics_12 = new cjs.Graphics().p("AfuF8QgLgFgEgOQgCgJABgMIACgUIABgeIAAgeIgBgMIgBgFIgCgFQgCgJgBgRIgDgtIgDgSQgBgLACgHQAEgPAOgMIgBgMIgCgVIgBglIAAhPIAAgJIACgHQgJgJAAgUQAAgNACgXIAEgjQABgRgCgiIgCgZIAAgNQABgHACgFQAEgGAIgEQAJgEAKACIAOAEIAHACIAHAEQAFADACAJQACAGAAAKIgBBSIAAAYQgBANgCALQgGAagQAPIgEADIACAIIAAALIAAArQgBAvADAbIABANIADABQAFACADADQAEAFABAHIABANQAAAMADAWIAEAhQABALgCAUIgGBrIgDAWQgCAMgFAJQgGAKgLAEQgGADgFAAQgFAAgFgDgEAiQgA+QgFgFABgKIACgIIABgIQACgJAAgMIgBgVQgDglAAgpQAAgdACgSQACgZAIgUQAGgMAGgHQAJgKAMABQAHAAAHAFQAGAEAEAHQALAQgCAUIgCAPIgEAPQgGATgCAYIgBAsQAAAHABADIAFAJQAEAHgCALIgEAUIAAANQAAAIgBAFQgDAIgJAGIgSAIQgLADgGABQgLAAgFgHg");
	var mask_graphics_13 = new cjs.Graphics().p("AfuF8QgLgFgEgOQgCgJABgMIACgUIABgeIAAgeIgBgMIgBgFIgCgFQgCgJgBgRIgDgtIgDgSQgBgLACgHQAEgPAOgMIgBgMIgCgVIgBglIAAhPIAAgJIACgHQgJgJAAgUQAAgNACgXIAEgjQABgRgCgiIgCgZIAAgNQABgHACgFQAEgGAIgEQAJgEAKACIAOAEIAHACIAHAEQAFADACAJQACAGAAAKIgBBSIAAAYQgBANgCALQgGAagQAPIgEADIACAIIAAALIAAArQgBAvADAbIABANIADABQAFACADADQAEAFABAHIABANQAAAMADAWIAEAhQABALgCAUIgGBrIgDAWQgCAMgFAJQgGAKgLAEQgGADgFAAQgFAAgFgDgEAijADaQgEgEgBgIIgBgNQAAg/gChAIgCgwIgCgnIgCgkQgDgCgCgDQgFgFABgKIACgIIABgIQACgJAAgMIgBgVQgDglAAgpQAAgdACgSQACgZAIgUQAGgMAGgHQAJgKAMABQAHAAAHAFQAGAEAEAHQALAQgCAUIgCAPIgEAPQgGATgCAYIgBAsQAAAHABADIAFAJQAEAHgCALIgEAUIAAANQAAAIgBAFQgDAIgJAGIgFACIAAAKQAAAfAEBeQAEBPgCAvIgBALQgBAGgDAEQgFAGgJABQgIAAgGgGg");
	var mask_graphics_14 = new cjs.Graphics().p("EAjEAGqQgLgDgGgRQgMgcgGgnQgDgTgFgyQgEg1gHglQgBgJAAgFQABgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgCgpIgCgkQgDgBgCgDQgFgGABgJIABgIIACgIQACgJAAgMIgCgVQgDgmAAgpQAAgcACgSQADgaAIgTQAFgNAHgHQAJgJALAAQAIAAAHAFQAFAEAFAHQAKARgBAUIgCAPIgFAOQgFAUgCAYIgCAsQABAGABAEIAFAIQAEAHgDAMIgDATIAAAOQAAAIgCAFQgCAIgKAFIgEADIAAAKQAAAeAEBfQAEBIgCAtQAFAEADAHQACAFABAHIAAANQAAAbAHAYIAIAbIAIAbIADAWIABAWIACAyIgBARQgBAJgDAHQgEAIgHAEQgFACgGAAIgFAAgAfmFRQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgOAPgMIgBgNIgDgVIAAgkIAAhQIAAgJIACgHQgJgIAAgUQAAgOACgWIADgkQABgQgCgiIgBgZIAAgNQAAgHADgFQAEgHAIgDQAJgFAKACIANAFIAIACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgDAKQgFAbgQAOIgFAEIADAHIAAALIAAAsQgBAvADAaIABAOIACAAQAGACADAEQAEAEABAIIABANQAAAMADAVIAEAiQAAAKgBAVIgGBqIgDAXQgCAMgFAIQgHAKgKAFQgGACgFAAQgFAAgFgCg");
	var mask_graphics_15 = new cjs.Graphics().p("EAjEAGqQgLgDgGgRQgMgcgGgnQgDgTgFgyQgEg1gHglQgBgJAAgFQABgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgCgpIgCgkQgDgBgCgDQgFgGABgJIABgIIACgIQACgJAAgMIgCgVQgDgmAAgpQAAgcACgSQADgaAIgTQAFgNAHgHQAJgJALAAQAIAAAHAFQAFAEAFAHQAKARgBAUIgCAPIgFAOQgFAUgCAYIgCAsQABAGABAEIAFAIQAEAHgDAMIgDATIAAAOQAAAIgCAFQgCAIgKAFIgEADIAAAKQAAAeAEBfQAEBIgCAtQAFAEADAHQACAFABAHIAAANQAAAbAHAYIAIAbIAIAbIADAWIABAWIACAyIgBARQgBAJgDAHQgEAIgHAEQgFACgGAAIgFAAgAfmFRQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMAKgKIgKADQgKAEgTANIggAUIgRALQgJAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAIgIIARgNIARgNIANgOIAOgNQARgRAUgKQAWgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIADgkQABgQgCgiIgBgZIAAgNQAAgHADgFQAEgHAIgDQAJgFAKACIANAFIAIACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgDAKQgFAbgQAOIgFAEIADAHIAAALIAAAsQgBAvADAaIABAOIACAAQAGACADAEQAEAEABAIIABANQAAAMADAVIAEAiQAAAKgBAVIgGBqIgDAXQgCAMgFAIQgHAKgKAFQgGACgFAAQgFAAgFgCg");
	var mask_graphics_16 = new cjs.Graphics().p("EAjEAGqQgLgDgGgRQgMgcgGgnQgDgTgFgyQgEg1gHglQgBgJAAgFQABgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgSAIQgxARgpAeQgJAHgFAFIgLAKIgCAEIAAADIACAAQAGACADAEQAEAEABAIIABANQAAAMADAVIAEAiQAAAKgBAVIgGBqIgDAXQgCAMgFAIQgHAKgKAFQgLAEgKgEQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMAKgKIgKADQgKAEgTANIggAUIgRALQgJAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAIgIIARgNIARgNIANgOIAOgNQARgRAUgKQAWgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIADgkQABgQgCgiIgBgZIAAgNQAAgHADgFQAEgHAIgDQAJgFAKACIANAFIAIACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgDAKQgFAbgQAOIgFAEIADAHIAAALIAAAsIAAAHIADgCIAPgHQAygVAugeQANgHAGgCIABAAQgFgGABgJIABgIIACgIQACgJAAgMIgCgVQgDgmAAgpQAAgcACgSQADgaAIgTQAFgNAHgHQAJgJALAAQAIAAAHAFQAFAEAFAHQAKARgBAUIgCAPIgFAOQgFAUgCAYIgCAsQABAGABAEIAFAIQAEAHgDAMIgDATIAAAOQAAAIgCAFQgCAIgKAFIgEADIAAAKQAAAeAEBfQAEBIgCAtQAFAEADAHQACAFABAHIAAANQAAAbAHAYIAIAbIAIAbIADAWIABAWIACAyIgBARQgBAJgDAHQgEAIgHAEQgFACgGAAIgFAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EAhwAGqQgKgDgHgRQgMgcgGgnQgDgTgEgyQgFg1gGglQgCgJABgFQAAgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgSAIQgxARgpAeQgJAHgFAFIgKAKIgDAEIAAADIADAAQAFACADAEQAEAEABAIIABANQAAAMADAVIAEAiQABAKgCAVIgGBqIgDAXQgCAMgFAIQgGAKgLAFQgLAEgKgEQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMALgKIgKADQgKAEgUANIggAUIgQALQgKAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAJgIIAQgNIARgNIANgOIAOgNQARgRAVgKQAVgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIAEgkQABgQgCgiIgCgZIAAgNQABgHACgFQAEgHAIgDQAJgFAKACIAOAFIAHACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgCAKQgGAbgQAOIgEAEIACAHIAAALIAAAsIAAAHIAEgCIAOgHQAygVAvgeQAMgHAHgCIAAAAQgFgGABgJIACgIIABgIQACgJAAgMIgBgVQgDgmAAgpQAAgcACgSQACgaAIgTQAGgNAGgHQAJgJAMAAQAHAAAHAFQAGAEAEAHQALARgCAUIgCAPIgEAOQgGAUgCAYIgBAsQAAAGABAEIAFAIQAEAHgCAMIgEATIAAACIAjgPQAWgJApgOIAygSIANgFQAIgBAGAAQAIABAFAFQAGAFABAGIAAAHIgBAHIABALQAAAFgCAFQgDAFgEADIgJAEIgKADQgKADgRAIIgiAPIgtAUIgpATQgVAKgQAGIADBaQAEBIgCAtQAGAEACAHQACAFABAHIAAANQABAbAGAYIAJAbIAHAbIADAWIABAWIACAyIgBARQAAAJgEAHQgDAIgIAEQgFACgFAAIgGAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EAhwAGqQgKgDgHgRQgMgcgGgnQgDgTgEgyQgFg1gGglQgCgJABgFQAAgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgSAIQgxARgpAeQgJAHgFAFIgKAKIgDAEIAAADIADAAQAFACADAEQAEAEABAIIABANQAAAMADAVIAEAiQABAKgCAVIgGBqIgDAXQgCAMgFAIQgGAKgLAFQgLAEgKgEQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMALgKIgKADQgKAEgUANIggAUIgQALQgKAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAJgIIAQgNIARgNIANgOIAOgNQARgRAVgKQAVgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIAEgkQABgQgCgiIgCgZIAAgNQABgHACgFQAEgHAIgDQAJgFAKACIAOAFIAHACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgCAKQgGAbgQAOIgEAEIACAHIAAALIAAAsIAAAHIAEgCIAOgHQAygVAvgeQAMgHAHgCIAAAAQgFgGABgJIACgIIABgIQACgJAAgMIgBgVQgDgmAAgpQAAgcACgSQACgaAIgTQAGgNAGgHQAJgJAMAAQAHAAAHAFQAGAEAEAHQALARgCAUIgCAPIgEAOQgGAUgCAYIgBAsQAAAGABAEIAFAIQAEAHgCAMIgEATIAAACIAjgPQAWgJApgOIAygSIANgFQAIgBAGAAQAIABAFAFQAGAFABAGIAAAHIgBAHIABALQAAAFgCAFQgDAFgEADIgJAEIgKADQgKADgRAIIgiAPIgtAUIgpATQgVAKgQAGIADBaQAEBIgCAtQAGAEACAHQACAFABAHIAAANQABAbAGAYIAJAbIAHAbIADAWIABAWIACAyIgBARQAAAJgEAHQgDAIgIAEQgFACgFAAIgGAAgEAiiACDQgGAAgEgDQgFgEgCgFQgCgEAAgKIAAhlIABgKIAEgLQADgEAEgCQAFgCAFABQAFABAEACQAEADACAFIACAIIABAIIAABkIgBAKQAAAFgCADQgDAFgFADQgEACgFAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EAhwAGqQgKgDgHgRQgMgcgGgnQgDgTgEgyQgFg1gGglQgCgJABgFQAAgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgSAIQgxARgpAeQgJAHgFAFIgKAKIgDAEIAAADIADAAQAFACADAEQAEAEABAIIABANQAAAMADAVIAEAiQABAKgCAVIgGBqIgDAXQgCAMgFAIQgGAKgLAFQgLAEgKgEQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMALgKIgKADQgKAEgUANIggAUIgQALQgKAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAJgIIAQgNIARgNIANgOIAOgNQARgRAVgKQAVgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIAEgkQABgQgCgiIgCgZIAAgNQABgHACgFQAEgHAIgDQAJgFAKACIAOAFIAHACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgCAKQgGAbgQAOIgEAEIACAHIAAALIAAAsIAAAHIAEgCIAOgHQAygVAvgeQAMgHAHgCIAAAAQgFgGABgJIACgIIABgIQACgJAAgMIgBgVQgDgmAAgpQAAgcACgSQACgaAIgTQAGgNAGgHQAJgJAMAAQAHAAAHAFQAGAEAEAHQALARgCAUIgCAPIgEAOQgGAUgCAYIgBAsQAAAGABAEIAFAIQAEAHgCAMIgEATIAAACIAjgPQAWgJApgOIAygSIANgFQAIgBAGAAQAIABAFAFQAGAFABAGIAAAHIgBAHIABALQAAAFgCAFQgDAFgEADIgJAEIgKADQgKADgRAIIgiAPIgtAUIgpATQgVAKgQAGIADBaQAEBIgCAtQAGAEACAHQACAFABAHIAAANQABAbAGAYIAJAbIAHAbIADAWIABAWIACAyIgBARQAAAJgEAHQgDAIgIAEQgFACgFAAIgGAAgEAiXAD8QgGgCgDgEQgDgEgBgFIAAgLIAAg6IACgjIAAgMQAAgHACgFIABgDIAAgBIAAhlIABgKIAEgLQADgEAEgCQAFgCAFABQAFABAEACQAEADACAFIACAIIABAIIAABiIACACQAHAFAAAMIgBAKIgCAKIgCAWIgBAWIgDAhQgBAOgEAHQgFALgLADIgGABIgFgBg");
	var mask_graphics_20 = new cjs.Graphics().p("EAhwAGqQgKgDgHgRQgMgcgGgnQgDgTgEgyQgFg1gGglQgCgJABgFQAAgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgSAIQgxARgpAeQgJAHgFAFIgKAKIgDAEIAAADIADAAQAFACADAEQAEAEABAIIABANQAAAMADAVIAEAiQABAKgCAVIgGBqIgDAXQgCAMgFAIQgGAKgLAFQgLAEgKgEQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMALgKIgKADQgKAEgUANIggAUIgQALQgKAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAJgIIAQgNIARgNIANgOIAOgNQARgRAVgKQAVgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIAEgkQABgQgCgiIgCgZIAAgNQABgHACgFQAEgHAIgDQAJgFAKACIAOAFIAHACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgCAKQgGAbgQAOIgEAEIACAHIAAALIAAAsIAAAHIAEgCIAOgHQAygVAvgeQAMgHAHgCIAAAAQgFgGABgJIACgIIABgIQACgJAAgMIgBgVQgDgmAAgpQAAgcACgSQACgaAIgTQAGgNAGgHQAJgJAMAAQAHAAAHAFQAGAEAEAHQALARgCAUIgCAPIgEAOQgGAUgCAYIgBAsQAAAGABAEIAFAIQAEAHgCAMIgEATIAAACIAjgPQAWgJApgOIAygSIANgFQAIgBAGAAQAIABAFAFQAGAFABAGIAAAHIgBAHIABALQAAAFgCAFQgDAFgEADIgJAEIgKADQgKADgRAIIgiAPIgtAUIgpATQgVAKgQAGIADBaQAEBIgCAtQAGAEACAHQACAFABAHIAAANQABAbAGAYIAJAbIAHAbIADAWIABAWIACAyIgBARQAAAJgEAHQgDAIgIAEQgFACgFAAIgGAAgEAkBAECQgEAAgFgDQgEgCgCgFQgCgDAAgFIABgJIABgeIgBgxIgBg3IgEg4QgBgLACgFQACgFAEgDQAEgEAFgBQAFAAAFABQAEACAEAEQADAEACAGIACAMIABAkQADBSAABIIgBAKQgBAGgDAEQgDAEgFACIgIABIgDAAgEAiXAD8QgGgCgDgEQgDgEgBgFIAAgLIAAg6IACgjIAAgMQAAgHACgFIABgDIAAgBIAAhlIABgKIAEgLQADgEAEgCQAFgCAFABQAFABAEACQAEADACAFIACAIIABAIIAABiIACACQAHAFAAAMIgBAKIgCAKIgCAWIgBAWIgDAhQgBAOgEAHQgFALgLADIgGABIgFgBg");
	var mask_graphics_21 = new cjs.Graphics().p("EAhaAGqQgKgDgHgRQgMgcgGgnQgDgTgEgyQgFg1gGglQgCgJABgFQAAgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgSAIQgxARgpAeQgJAHgFAFIgKAKIgDAEIAAADIADAAQAFACADAEQAEAEABAIIABANQAAAMADAVIAEAiQABAKgCAVIgGBqIgDAXQgCAMgFAIQgGAKgLAFQgLAEgKgEQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMALgKIgKADQgKAEgUANIggAUIgQALQgKAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAJgIIAQgNIARgNIANgOIAOgNQARgRAVgKQAVgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIAEgkQABgQgCgiIgCgZIAAgNQABgHACgFQAEgHAIgDQAJgFAKACIAOAFIAHACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgCAKQgGAbgQAOIgEAEIACAHIAAALIAAAsIAAAHIAEgCIAOgHQAygVAvgeQAMgHAHgCIAAAAQgFgGABgJIACgIIABgIQACgJAAgMIgBgVQgDgmAAgpQAAgcACgSQACgaAIgTQAGgNAGgHQAJgJAMAAQAHAAAHAFQAGAEAEAHQALARgCAUIgCAPIgEAOQgGAUgCAYIgBAsQAAAGABAEIAFAIQAEAHgCAMIgEATIAAACIAjgPQAWgJApgOIAygSIANgFQAIgBAGAAQAIABAFAFQAGAFABAGIAAAHIgBAHIABALQAAAFgCAFQgDAFgEADIgJAEIgKADQgKADgRAIIgiAPIgtAUIgpATQgVAKgQAGIADBaQAEBIgCAtQAGAEACAHQACAFABAHIAAANQABAbAGAYIAJAbIAHAbIADAWIABAWIACAyIgBARQAAAJgEAHQgDAIgIAEQgFACgFAAIgGAAgEAjrAECQgEAAgFgDQgEgCgCgFQgCgDAAgFIABgJIABgeIgBgxIgBg3IgEg4IAAgIIghACIgSAAIgCgBIAABDIACACQAHAFAAAMIgBAKIgCAKIgCAWIgBAWIgDAhQgBAOgEAHQgFALgLADQgFACgGgCQgGgCgDgEQgDgEgBgFIAAgLIAAg6IACgjIAAgMQAAgHACgFIABgDIAAgBIAAhlIABgKIAEgLQADgEAEgCQAFgCAFABQAFABAEACIAFAGIAJgCIAegCIBngGQANAAAHADQAGACAEAGQAFAGgBAHQgBAKgKAHQgHAFgOADQgTAEgdADIACAKIABAkQADBSAABIIgBAKQgBAGgDAEQgDAEgFACIgIABIgDAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EAgUAGqQgKgDgHgRQgMgcgGgnQgDgTgEgyQgFg1gGglQgCgJABgFQAAgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgSAIQgxARgpAeQgJAHgFAFIgKAKIgDAEIAAADIADAAQAFACADAEQAEAEABAIIABANQAAAMADAVIAEAiQABAKgCAVIgGBqIgDAXQgCAMgFAIQgGAKgLAFQgLAEgKgEQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMALgKIgKADQgKAEgUANIggAUIgQALQgKAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAJgIIAQgNIARgNIANgOIAOgNQARgRAVgKQAVgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIAEgkQABgQgCgiIgCgZIAAgNQABgHACgFQAEgHAIgDQAJgFAKACIAOAFIAHACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgCAKQgGAbgQAOIgEAEIACAHIAAALIAAAsIAAAHIAEgCIAOgHQAygVAvgeQAMgHAHgCIAAAAQgFgGABgJIACgIIABgIQACgJAAgMIgBgVQgDgmAAgpQAAgcACgSQACgaAIgTQAGgNAGgHQAJgJAMAAQAHAAAHAFQAGAEAEAHQALARgCAUIgCAPIgEAOQgGAUgCAYIgBAsQAAAGABAEIAFAIQAEAHgCAMIgEATIAAACIAjgPQAWgJApgOIAygSIANgFQAIgBAGAAQAIABAFAFQAGAFABAGIAAAHIgBAHIABALQAAAFgCAFQgDAFgEADIgJAEIgKADQgKADgRAIIgiAPIgtAUIgpATQgVAKgQAGIADBaQAEBIgCAtQAGAEACAHQACAFABAHIAAANQABAbAGAYIAJAbIAHAbIADAWIABAWIACAyIgBARQAAAJgEAHQgDAIgIAEQgFACgFAAIgGAAgEAlyAFXQgIAAgGgEQgMgHgHgUQgEgNgCgRIgCgfIgBg0IADg3QADgigBgUIABgOQABgIAEgEQADgEAGgCIAMgDIALgBQAFAAAFACQAJAFAEARQADAOAAATIgCAiIgFBAIgCAjQABATAEAOIAFAMIAEAMQAEAOgFAKQgEALgNAFQgGACgGAAIgCAAgEAilAECQgEAAgFgDQgEgCgCgFQgCgDAAgFIABgJIABgeIgBgxIgBg3IgEg4IAAgIIghACIgSAAIgCgBIAABDIACACQAHAFAAAMIgBAKIgCAKIgCAWIgBAWIgDAhQgBAOgEAHQgFALgLADQgFACgGgCQgGgCgDgEQgDgEgBgFIAAgLIAAg6IACgjIAAgMQAAgHACgFIABgDIAAgBIAAhlIABgKIAEgLQADgEAEgCQAFgCAFABQAFABAEACIAFAGIAJgCIAegCIBngGQANAAAHADQAGACAEAGQAFAGgBAHQgBAKgKAHQgHAFgOADQgTAEgdADIACAKIABAkQADBSAABIIgBAKQgBAGgDAEQgDAEgFACIgIABIgDAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EAgUAGqQgKgDgHgRQgMgcgGgnQgDgTgEgyQgFg1gGglQgCgJABgFQAAgIAEgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgSAIQgxARgpAeQgJAHgFAFIgKAKIgDAEIAAADIADAAQAFACADAEQAEAEABAIIABANQAAAMADAVIAEAiQABAKgCAVIgGBqIgDAXQgCAMgFAIQgGAKgLAFQgLAEgKgEQgLgGgEgOQgCgIABgMIACgVIABgdIAAgeIgBgMIgBgGIgCgFQgCgJgBgRIgDgtIgDgSQgBgKACgIQADgMALgKIgKADQgKAEgUANIggAUIgQALQgKAGgIACQgMAFgNgBQgNgBgGgGQgDgFgCgJQgCgLACgGQACgHAJgIIAQgNIARgNIANgOIAOgNQARgRAVgKQAVgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQAAgOACgWIAEgkQABgQgCgiIgCgZIAAgNQABgHACgFQAEgHAIgDQAJgFAKACIAOAFIAHACIAHADQAFAEACAIQACAGAAAKIgBBTIAAAYQgBANgCAKQgGAbgQAOIgEAEIACAHIAAALIAAAsIAAAHIAEgCIAOgHQAygVAvgeQAMgHAHgCIAAAAQgFgGABgJIACgIIABgIQACgJAAgMIgBgVQgDgmAAgpQAAgcACgSQACgaAIgTQAGgNAGgHQAJgJAMAAQAHAAAHAFQAGAEAEAHQALARgCAUIgCAPIgEAOQgGAUgCAYIgBAsQAAAGABAEIAFAIQAEAHgCAMIgEATIAAACIAjgPQAWgJApgOIAygSIANgFQAIgBAGAAQAIABAFAFQAGAFABAGIAAAHIgBAHIABALQAAAFgCAFQgDAFgEADIgJAEIgKADQgKADgRAIIgiAPIgtAUIgpATQgVAKgQAGIADBaQAEBIgCAtQAGAEACAHQACAFABAHIAAANQABAbAGAYIAJAbIAHAbIADAWIABAWIACAyIgBARQAAAJgEAHQgDAIgIAEQgFACgFAAIgGAAgEAlyAFXQgIAAgGgEQgMgHgHgUQgEgNgCgRIgCgfIgBg0IADg3QADgigBgUIABgOQABgIAEgEQADgEAGgCIADgBIgCgQQgDgTgBggQgBg4ADh6IABg2IABgsIAEgrQABgKACgFQACgIAEgGQAFgGAHgDQAIgCAHAEQAGADACAJQACAGAAAKQADBQgDB+QgFCtAAAgIAAADIAAABQADAOAAATIgCAiIgFBAIgCAjQABATAEAOIAFAMIAEAMQAEAOgFAKQgEALgNAFQgGACgGAAIgCAAgEAilAECQgEAAgFgDQgEgCgCgFQgCgDAAgFIABgJIABgeIgBgxIgBg3IgEg4IAAgIIghACIgSAAIgCgBIAABDIACACQAHAFAAAMIgBAKIgCAKIgCAWIgBAWIgDAhQgBAOgEAHQgFALgLADQgFACgGgCQgGgCgDgEQgDgEgBgFIAAgLIAAg6IACgjIAAgMQAAgHACgFIABgDIAAgBIAAhlIABgKIAEgLQADgEAEgCQAFgCAFABQAFABAEACIAFAGIAJgCIAegCIBngGQANAAAHADQAGACAEAGQAFAGgBAHQgBAKgKAHQgHAFgOADQgTAEgdADIACAKIABAkQADBSAABIIgBAKQgBAGgDAEQgDAEgFACIgIABIgDAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AfvGqQgLgDgGgRQgMgcgGgnQgDgTgFgyQgFg1gGglQgBgJAAgFQAAgIAFgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgTAIQgwARgpAeQgKAHgEAFIgLAKIgDAEIAAADIADAAQAGACADAEQAEAEABAIIAAANQABAMADAVIAEAiQAAAKgBAVIgHBqIgCAXQgCAMgGAIQgGAKgLAFQgLAEgJgEQgLgGgEgOQgDgIABgMIADgVIABgdIAAgeIgBgMIgBgGIgCgFQgDgJAAgRIgEgtIgCgSQgBgKACgIQADgMAKgKIgKADQgKAEgTANIggAUIgRALQgJAGgIACQgMAFgOgBQgNgBgFgGQgEgFgCgJQgCgLACgGQADgHAIgIIARgNIAQgNIAOgOIANgNQARgRAVgKQAWgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQgBgOADgWIADgkQABgQgCgiIgBgZIAAgNQAAgHADgFQAEgHAIgDQAJgFAJACIAOAFIAHACIAHADQAGAEACAIQABAGAAAKIAABTIgBAYQAAANgDAKQgFAbgRAOIgEAEIACAHIABALIAAAsIAAAHIADgCIAOgHQAzgVAugeQANgHAGgCIABAAQgFgGABgJIABgIIACgIQACgJgBgMIgBgVQgDgmAAgpQAAgcACgSQADgaAIgTQAFgNAHgHQAJgJALAAQAHAAAHAFQAGAEAFAHQAKARgBAUIgDAPIgEAOQgFAUgCAYIgCAsQAAAGACAEIAFAIQADAHgCAMIgEATIAAACIAkgPQAVgJApgOIAygSIAOgFQAHgBAHAAQAHABAGAFQAGAFABAGIgBAHIAAAHIABALQAAAFgDAFQgCAFgEADIgJAEIgKADQgKADgSAIIgiAPIgtAUIgpATQgUAKgRAGIAEBaQADBIgBAtQAFAEADAHQACAFABAHIAAANQAAAbAHAYIAIAbIAIAbIADAWIABAWIABAyIAAARQgBAJgDAHQgEAIgHAEQgGACgFAAIgFAAgEAlMAFXQgIAAgGgEQgMgHgGgUQgEgNgCgRIgCgfIgCg0IAEg3QADgigBgUIAAgOQABgIAEgEQAEgEAGgCIADgBIgDgQQgDgTAAggQgBg4ACh6IACg2IABgsIADgrQABgKACgFQACgIAEgGQAFgGAIgDQAIgCAGAEIADACQAFAAAFACQAJAEAGAJQAEAHACAKIABAUQAFCGAfCDIALArQAFAXACATQADATgIAHIgJAFIgJACIgMAEQgHABgFgCQgFgCgDgHIgEgMIgWh3IgDCLIAAADIAAABQADAOAAATIgCAiIgFBAIgBAjQAAATAFAOIAEAMIAEAMQAEAOgEAKQgFALgMAFQgGACgHAAIgCAAgEAiAAECQgFAAgEgDQgEgCgCgFQgCgDAAgFIAAgJIABgeIgBgxIgBg3IgDg4IAAgIIgiACIgRAAIgDgBIAABDIADACQAHAFAAAMIgBAKIgCAKIgDAWIAAAWIgDAhQgCAOgDAHQgGALgLADQgFACgGgCQgFgCgEgEQgCgEgBgFIgBgLIAAg6IACgjIAAgMQABgHACgFIABgDIAAgBIAAhlIAAgKIAEgLQADgEAFgCQAFgCAEABQAFABAEACIAFAGIAKgCIAdgCIBngGQAOAAAGADQAHACAEAGQAEAGgBAHQAAAKgLAHQgHAFgNADQgUAEgcADIABAKIACAkQACBSAABIIAAAKQgBAGgDAEQgDAEgGACIgIABIgCAAg");
	var mask_graphics_25 = new cjs.Graphics().p("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");
	var mask_graphics_26 = new cjs.Graphics().p("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");
	var mask_graphics_27 = new cjs.Graphics().p("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");
	var mask_graphics_28 = new cjs.Graphics().p("EAnUAGsQgMgEgJgNQgJgMgEgSQgDgMgBgUIgCgnIgBgnQgCgngHgzIgNhZIAAgFQgCgGAAgLQAAglgIhkQgDANgGAHQgDAQgBAoQgBAkgFAUQgCALgFANQgJAZgIANQgGALgGAEQgHAFgNAAQgMAAgJgEQgHgEgJgKQgPgTgLgWQgEgIgBgHIgCgBQgFgCgDgHIgEgMIgWh3IgDCLIAAADIAAABQADAOAAATIgCAiIgFBAIgBAjQAAATAFAOIAEAMIAEAMQAEAOgEAKQgFALgMAFQgHADgIgBQgIAAgGgEQgMgHgGgUQgEgNgCgRIgCgfIgCg0IAEg3QADgigBgUIAAgOQABgIAEgEQAEgEAGgCIADgBIgDgQQgDgTAAggQgBg4ACh6IACg2IABgsIADgrQABgKACgFQACgIAEgGQAFgGAIgDQAIgCAGAEIADACQAFAAAFACQAJAEAGAJQAEAHACAKIABAUQAFCGAfCDIALArQAFAXACATQACAOgEAIIACABQADAEACgBIACgDQAJgUAGggIALg0IAEgNQADgGAEgEIABAAIAAgWQABgSAFgeQAFgZAThWQAPhEAFgrQACgMADgHQAEgKAHgDQAHgDAHADQAHADAEAGQAHAKAAARQAIgCAGAGQAGAFABAIQACAHgCAIIgFAPIgDAMQACAEACAGQACAIAAANQgCCpADCoQABAIgBAEIgCAGQACADAAAGIgBAMQgDARAFAbQAHAnAAAFIABATIACATQABAIADAMIAFAUIAEAZIAEAaQADAbAHAZQAEAQAAAHQAAAOgIAIQgFAEgIABIgEAAIgJgBgAdgGnQgLgDgGgRQgMgcgGgnQgDgTgFgyQgFg1gGglQgBgJAAgFQAAgIAFgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgTAIQgwARgpAeQgKAHgEAFIgLAKIgDAEIAAADIADAAQAGACADAEQAEAEABAIIAAANQABAMADAVIAEAiQAAAKgBAVIgHBqIgCAXQgCAMgGAIQgGAKgLAFQgLAEgJgEQgLgGgEgOQgDgIABgMIADgVIABgdIAAgeIgBgMIgBgGIgCgFQgDgJAAgRIgEgtIgCgSQgBgKACgIQADgMAKgKIgKADQgKAEgTANIggAUIgRALQgJAGgIACQgMAFgOgBQgNgBgFgGQgEgFgCgJQgCgLACgGQADgHAIgIIARgNIAQgNIAOgOIANgNQARgRAVgKQAWgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQgBgOADgWIADgkQABgQgCgiIgBgZIAAgNQAAgHADgFQAEgHAIgDQAJgFAJACIAOAFIAHACIAHADQAGAEACAIQABAGAAAKIAABTIgBAYQAAANgDAKQgFAbgRAOIgEAEIACAHIABALIAAAsIAAAHIADgCIAOgHQAzgVAugeQANgHAGgCIABAAQgFgGABgJIABgIIACgIQACgJgBgMIgBgVQgDgmAAgpQAAgcACgSQADgaAIgTQAFgNAHgHQAJgJALAAQAHAAAHAFQAGAEAFAHQAKARgBAUIgDAPIgEAOQgFAUgCAYIgCAsQAAAGACAEIAFAIQADAHgCAMIgEATIAAACIAkgPQAVgJApgOIAygSIAOgFQAHgBAHAAQAHABAGAFQAGAFABAGIgBAHIAAAHIABALQAAAFgDAFQgCAFgEADIgJAEIgKADQgKADgSAIIgiAPIgtAUIgpATQgUAKgRAGIAEBaQADBIgBAtQAFAEADAHQACAFABAHIAAANQAAAbAHAYIAIAbIAIAbIADAWIABAWIABAyIAAARQgBAJgDAHQgEAIgHAEQgGACgFAAIgFAAgEAn/AD/QgIAAgFgHIgCgDQgDgDgCgEIgDgIIAAgKIABgKIABgPIAAgTIACgVIACgLIADgGQgBgGACgLQAHg0AHgaQAKgrATgdQAMgTAOABQAHABAFAHQAEAGABAIQAAAHgDAIIgFANQgTAvgLA/QgFAjgHBPIgCANQgCAHgEAEQgFAEgHAAIgDAAgAfxD/QgFAAgEgDQgEgCgCgFQgCgDAAgFIAAgJIABgeIgBgxIgBg3IgDg4IAAgIIgiACIgRAAIgDgBIAABDIADACQAHAFAAAMIgBAKIgCAKIgDAWIAAAWIgDAhQgCAOgDAHQgGALgLADQgFACgGgCQgFgCgEgEQgCgEgBgFIgBgLIAAg6IACgjIAAgMQABgHACgFIABgDIAAgBIAAhlIAAgKIAEgLQADgEAFgCQAFgCAEABQAFABAEACIAFAGIAKgCIAdgCIBngGQAOAAAGADQAHACAEAGQAEAGgBAHQAAAKgLAHQgHAFgNADQgUAEgcADIABAKIACAkQACBSAABIIAAAKQgBAGgDAEQgDAEgGACIgIABIgCAAg");
	var mask_graphics_29 = new cjs.Graphics().p("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");
	var mask_graphics_30 = new cjs.Graphics().p("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");
	var mask_graphics_31 = new cjs.Graphics().p("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");
	var mask_graphics_32 = new cjs.Graphics().p("EAmEAGsQgMgEgJgNQgJgMgEgSQgDgMgBgUIgCgnIgBgnQgCgngHgzIgNhZIAAgFQgCgGAAgLQAAglgIhkQgDANgGAHQgDAQgBAoQgBAkgFAUQgCALgFANQgJAZgIANQgGALgGAEQgHAFgNAAQgMAAgJgEQgHgEgJgKQgPgTgLgWQgEgIgBgHIgCgBQgFgCgDgHIgEgMIgWh3IgDCLIAAADIAAABQADAOAAATIgCAiIgFBAIgBAjQAAATAFAOIAEAMIAEAMQAEAOgEAKQgFALgMAFQgHADgIgBQgIAAgGgEQgMgHgGgUQgEgNgCgRIgCgfIgCg0IAEg3QADgigBgUIAAgOQABgIAEgEQAEgEAGgCIADgBIgDgQQgDgTAAggQgBg4ACh6IACg2IABgsIADgrQABgKACgFQACgIAEgGQAFgGAIgDQAIgCAGAEIADACQAFAAAFACQAJAEAGAJQAEAHACAKIABAUQAFCGAfCDIALArQAFAXACATQACAOgEAIIACABQADAEACgBIACgDQAJgUAGggIALg0IAEgNQADgGAEgEIABAAIAAgWQABgSAFgeQAFgZAThWQAPhEAFgrQACgMADgHQAEgKAHgDQAHgDAHADQAHADAEAGQAHAKAAARQAIgCAGAGQAGAFABAIQACAHgCAIIgFAPIgDAMQACAEACAGQACAIAAANQgCCpADCoQABAIgBAEIgCAGQACADAAAGIgBAMIgBAHIADgFIAIgHIALgIQAFgFAMgGIAHgDQAEgYAEgQQAKgrATgdQAMgTAOABIACABQAEAAADACQAGAEADAJQACAGAAALIAGBMIAFABQAIADAEAIQAEAHgBAIQgBAMgNAJIgCACIADAwQACAQACAIIACAKIACAKQABANgGAHQgEAFgIABQgHABgFgEQgFgEgDgGIgDgMIgFgaIgDgXIgCgeIgOADQgFAjgFA/IgCANQgCAHgEAEQgGAFgJgBQgIAAgFgHIgCgDQgDgDgCgEIgDgIIAAgKIABgKIABgPIAAgTIACgVIACgLIABgDIgOADQgIABgGgDQgGgDgDgGIADAVQAHAnAAAFIABATIACATQABAIADAMIAFAUIAEAZIAEAaQADAbAHAZQAEAQAAAHQAAAOgIAIQgFAEgIABIgFAAIgIgBgAcQGnQgLgDgGgRQgMgcgGgnQgDgTgFgyQgFg1gGglQgBgJAAgFQAAgIAFgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgTAIQgwARgpAeQgKAHgEAFIgLAKIgDAEIAAADIADAAQAGACADAEQAEAEABAIIAAANQABAMADAVIAEAiQAAAKgBAVIgHBqIgCAXQgCAMgGAIQgGAKgLAFQgLAEgJgEQgLgGgEgOQgDgIABgMIADgVIABgdIAAgeIgBgMIgBgGIgCgFQgDgJAAgRIgEgtIgCgSQgBgKACgIQADgMAKgKIgKADQgKAEgTANIggAUIgRALQgJAGgIACQgMAFgOgBQgNgBgFgGQgEgFgCgJQgCgLACgGQADgHAIgIIARgNIAQgNIAOgOIANgNQARgRAVgKQAWgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQgBgOADgWIADgkQABgQgCgiIgBgZIAAgNQAAgHADgFQAEgHAIgDQAJgFAJACIAOAFIAHACIAHADQAGAEACAIQABAGAAAKIAABTIgBAYQAAANgDAKQgFAbgRAOIgEAEIACAHIABALIAAAsIAAAHIADgCIAOgHQAzgVAugeQANgHAGgCIABAAQgFgGABgJIABgIIACgIQACgJgBgMIgBgVQgDgmAAgpQAAgcACgSQADgaAIgTQAFgNAHgHQAJgJALAAQAHAAAHAFQAGAEAFAHQAKARgBAUIgDAPIgEAOQgFAUgCAYIgCAsQAAAGACAEIAFAIQADAHgCAMIgEATIAAACIAkgPQAVgJApgOIAygSIAOgFQAHgBAHAAQAHABAGAFQAGAFABAGIgBAHIAAAHIABALQAAAFgDAFQgCAFgEADIgJAEIgKADQgKADgSAIIgiAPIgtAUIgpATQgUAKgRAGIAEBaQADBIgBAtQAFAEADAHQACAFABAHIAAANQAAAbAHAYIAIAbIAIAbIADAWIABAWIABAyIAAARQgBAJgDAHQgEAIgHAEQgGACgFAAIgFAAgAehD/QgFAAgEgDQgEgCgCgFQgCgDAAgFIAAgJIABgeIgBgxIgBg3IgDg4IAAgIIgiACIgRAAIgDgBIAABDIADACQAHAFAAAMIgBAKIgCAKIgDAWIAAAWIgDAhQgCAOgDAHQgGALgLADQgFACgGgCQgFgCgEgEQgCgEgBgFIgBgLIAAg6IACgjIAAgMQABgHACgFIABgDIAAgBIAAhlIAAgKIAEgLQADgEAFgCQAFgCAEABQAFABAEACIAFAGIAKgCIAdgCIBngGQAOAAAGADQAHACAEAGQAEAGgBAHQAAAKgLAHQgHAFgNADQgUAEgcADIABAKIACAkQACBSAABIIAAAKQgBAGgDAEQgDAEgGACIgIABIgCAAgEAowADxQgDgEgCgHIgBgMIgFhvQgEhDACgsIABgKQABgGADgEQAEgGAIgBQAIgBAFAEQAHAGACAKQABAGgBALQgBATABAVIAHgJIAKgKQAGgGAJgNIAFgHQADgDAEgCQAGgDAGABIAGACQAEAAAEADQAFADACAGQACAHgDAKIgCAIIgCAJIAAAFIAAAGIgEAIIgEAMQgEAHgFAEQgGAGgHAAIgEAAIAAABQgGAEgGAIIgLAOQgGAHgGACIAFBZQABAJgBAGQgBAIgFAFQgFAGgJAAQgJgBgFgGg");
	var mask_graphics_33 = new cjs.Graphics().p("EAmDAGsQgMgEgJgNQgJgMgEgSQgDgMgBgUIgCgnIgBgnQgCgngHgzIgNhZIAAgFQgCgGAAgLQAAglgIhkQgDANgGAHQgDAQgBAoQgBAkgFAUQgCALgFANQgJAZgIANQgGALgGAEQgHAFgNAAQgMAAgJgEQgHgEgJgKQgPgTgLgWQgEgIgBgHIgCgBQgFgCgDgHIgEgMIgWh3IgDCLIAAADIAAABQADAOAAATIgCAiIgFBAIgBAjQAAATAFAOIAEAMIAEAMQAEAOgEAKQgFALgMAFQgHADgIgBQgIAAgGgEQgMgHgGgUQgEgNgCgRIgCgfIgCg0IAEg3QADgigBgUIAAgOQABgIAEgEQAEgEAGgCIADgBIgDgQQgDgTAAggQgBg4ACh6IACg2IABgsIADgrQABgKACgFQACgIAEgGQAFgGAIgDQAIgCAGAEIADACQAFAAAFACQAJAEAGAJQAEAHACAKIABAUQAFCGAfCDIALArQAFAXACATQACAOgEAIIACABQADAEACgBIACgDQAJgUAGggIALg0IAEgNQADgGAEgEIABAAIAAgWQABgSAFgeQAFgZAThWQAPhEAFgrQACgMADgHQAEgKAHgDQAHgDAHADQAHADAEAGQAHAKAAARQAIgCAGAGQAGAFABAIQACAHgCAIIgFAPIgDAMQACAEACAGQACAIAAANQgCCpADCoQABAIgBAEIgCAGQACADAAAGIgBAMIgBAHIADgFIAIgHIALgIQAFgFAMgGIAHgDQAEgYAEgQQAKgrATgdQAMgTAOABIACABQAEAAADACQAGAEADAJQACAGAAALIAGBMIAFABQAIADAEAIQAEAHgBAIIgCAHIACABIAIABQAFAAACACQgDg+ACgqIABgKQABgGADgEQAEgGAIgBQAIgBAFAEQAHAGACAKQABAGgBALQgBATABAVIAHgJIAKgKQAGgGAJgNIAFgHQADgDAEgCQAGgDAGABQAHABAEAFQAEAEABAGQAAAHgDAGIgDAFIAAAHQACAMgDALQgDAMgIAIIgIAGIgIAHQgGAEgGAIIgLAOQgGAHgGACIAAACQAaALAWAHQALADAEACQAIAEADAGQAFAHgDAIQgDAJgHADQgGADgLgCQgSgCgagNIgCgBIACAqQABAJgBAGQgBAIgFAFQgFAGgJAAQgJgBgFgGQgDgEgCgHIgBgMIgDg/IAAAAIgRgFQgKgDgFgGIABATQACAQACAIIACAKIACAKQABANgGAHQgEAFgIABQgHABgFgEQgFgEgDgGIgDgMIgFgaIgDgXIgCgeIgOADQgFAjgFA/IgCANQgCAHgEAEQgGAFgJgBQgIAAgFgHIgCgDQgDgDgCgEIgDgIIAAgKIABgKIABgPIAAgTIACgVIACgLIABgDIgOADQgIABgGgDQgGgDgDgGIADAVQAHAnAAAFIABATIACATQABAIADAMIAFAUIAEAZIAEAaQADAbAHAZQAEAQAAAHQAAAOgIAIQgFAEgIABIgEAAIgJgBgAcPGnQgLgDgGgRQgMgcgGgnQgDgTgFgyQgFg1gGglQgBgJAAgFQAAgIAFgEIADgDIAAgBQAAhAgCg/IgCgvIgBgSIgEACIgTAIQgwARgpAeQgKAHgEAFIgLAKIgDAEIAAADIADAAQAGACADAEQAEAEABAIIAAANQABAMADAVIAEAiQAAAKgBAVIgHBqIgCAXQgCAMgGAIQgGAKgLAFQgLAEgJgEQgLgGgEgOQgDgIABgMIADgVIABgdIAAgeIgBgMIgBgGIgCgFQgDgJAAgRIgEgtIgCgSQgBgKACgIQADgMAKgKIgKADQgKAEgTANIggAUIgRALQgJAGgIACQgMAFgOgBQgNgBgFgGQgEgFgCgJQgCgLACgGQADgHAIgIIARgNIAQgNIAOgOIANgNQARgRAVgKQAWgMARAAIAIABIAAhJIAAgJIACgHQgJgIAAgUQgBgOADgWIADgkQABgQgCgiIgBgZIAAgNQAAgHADgFQAEgHAIgDQAJgFAJACIAOAFIAHACIAHADQAGAEACAIQABAGAAAKIAABTIgBAYQAAANgDAKQgFAbgRAOIgEAEIACAHIABALIAAAsIAAAHIADgCIAOgHQAzgVAugeQANgHAGgCIABAAQgFgGABgJIABgIIACgIQACgJgBgMIgBgVQgDgmAAgpQAAgcACgSQADgaAIgTQAFgNAHgHQAJgJALAAQAHAAAHAFQAGAEAFAHQAKARgBAUIgDAPIgEAOQgFAUgCAYIgCAsQAAAGACAEIAFAIQADAHgCAMIgEATIAAACIAkgPQAVgJApgOIAygSIAOgFQAHgBAHAAQAHABAGAFQAGAFABAGIgBAHIAAAHIABALQAAAFgDAFQgCAFgEADIgJAEIgKADQgKADgSAIIgiAPIgtAUIgpATQgUAKgRAGIAEBaQADBIgBAtQAFAEADAHQACAFABAHIAAANQAAAbAHAYIAIAbIAIAbIADAWIABAWIABAyIAAARQgBAJgDAHQgEAIgHAEQgGACgFAAIgFAAgAegD/QgFAAgEgDQgEgCgCgFQgCgDAAgFIAAgJIABgeIgBgxIgBg3IgDg4IAAgIIgiACIgRAAIgDgBIAABDIADACQAHAFAAAMIgBAKIgCAKIgDAWIAAAWIgDAhQgCAOgDAHQgGALgLADQgFACgGgCQgFgCgEgEQgCgEgBgFIgBgLIAAg6IACgjIAAgMQABgHACgFIABgDIAAgBIAAhlIAAgKIAEgLQADgEAFgCQAFgCAEABQAFABAEACIAFAGIAKgCIAdgCIBngGQAOAAAGADQAHACAEAGQAEAGgBAHQAAAKgLAHQgHAFgNADQgUAEgcADIABAKIACAkQACBSAABIIAAAKQgBAGgDAEQgDAEgGACIgIABIgCAAg");
	var mask_graphics_34 = new cjs.Graphics().p("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");
	var mask_graphics_35 = new cjs.Graphics().p("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");
	var mask_graphics_36 = new cjs.Graphics().p("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");
	var mask_graphics_37 = new cjs.Graphics().p("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");
	var mask_graphics_38 = new cjs.Graphics().p("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");
	var mask_graphics_39 = new cjs.Graphics().p("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");
	var mask_graphics_40 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:217.65,y:16.3391}).wait(1).to({graphics:mask_graphics_10,x:217.65,y:28.615}).wait(1).to({graphics:mask_graphics_11,x:217.65,y:38.2625}).wait(1).to({graphics:mask_graphics_12,x:226.7344,y:38.2625}).wait(1).to({graphics:mask_graphics_13,x:226.7344,y:38.2625}).wait(1).to({graphics:mask_graphics_14,x:227.55,y:42.6446}).wait(1).to({graphics:mask_graphics_15,x:227.55,y:42.6446}).wait(1).to({graphics:mask_graphics_16,x:227.55,y:42.6446}).wait(1).to({graphics:mask_graphics_17,x:235.925,y:42.6446}).wait(1).to({graphics:mask_graphics_18,x:235.925,y:42.6446}).wait(1).to({graphics:mask_graphics_19,x:235.925,y:42.6446}).wait(1).to({graphics:mask_graphics_20,x:235.925,y:42.6446}).wait(1).to({graphics:mask_graphics_21,x:238.1091,y:42.6446}).wait(1).to({graphics:mask_graphics_22,x:245.1441,y:42.6446}).wait(1).to({graphics:mask_graphics_23,x:245.1441,y:42.6446}).wait(1).to({graphics:mask_graphics_24,x:248.8798,y:42.6446}).wait(1).to({graphics:mask_graphics_25,x:257.0821,y:42.6446}).wait(1).to({graphics:mask_graphics_26,x:257.0821,y:42.6446}).wait(1).to({graphics:mask_graphics_27,x:259.075,y:42.9417}).wait(1).to({graphics:mask_graphics_28,x:263.175,y:42.9417}).wait(1).to({graphics:mask_graphics_29,x:264.4071,y:42.9417}).wait(1).to({graphics:mask_graphics_30,x:264.66,y:42.9417}).wait(1).to({graphics:mask_graphics_31,x:267.7083,y:42.9417}).wait(1).to({graphics:mask_graphics_32,x:271.19,y:42.9417}).wait(1).to({graphics:mask_graphics_33,x:271.285,y:42.9417}).wait(1).to({graphics:mask_graphics_34,x:274.6333,y:42.9417}).wait(1).to({graphics:mask_graphics_35,x:279.015,y:42.9417}).wait(1).to({graphics:mask_graphics_36,x:279.015,y:42.9417}).wait(1).to({graphics:mask_graphics_37,x:279.015,y:42.9417}).wait(1).to({graphics:mask_graphics_38,x:281.75,y:42.9417}).wait(1).to({graphics:mask_graphics_39,x:285.5306,y:42.9417}).wait(1).to({graphics:mask_graphics_40,x:285.5306,y:42.9417}).wait(200));

	// Hit_Maker
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ADsGFQgQgEgJgOIgKghIgIhAIgdmcIgCgCQgBAAAAAAQgBAAgBABQAAAAAAAAQgBABAAAAIgqDJQgIAWgLAPIgLAIIgPACIgSgGQgLgGgHgPIgSgrIgPgzIgQhcQgCgJgDgHQgEAEgBANIgLDvIAACUIgCAKIgJAFIgKgCIgJgMQgEgOABgzIAMo4QAAgHAHgFQAIgFAGADIARALIAEAMIAcDUIAhCdQALAfAJANQAGAHAIgYIASg+IAvj4IAFgeIAFhaIAHgMIALgEIAMAFQAFAFAAAMIALFuIASD+IALBRIAGAWQAFALAMAFQAEACgFAIQgFAGgHAAIgFAAgAmQGEQgLgIgFgRIgIgqIgPipIgHjgIgDgJIgJABIh6BFIgMAMIAGECIgEAlQgEAHgMgDQgGgBgCgJIgJkNQgBgKgMAFIhsBIIgNADIgMgGIgFgJQgBgFAFgFIB3hMIAYgTIADgKIgCkHIAFgaQADgHAJgCQAJgCAGAFIAEAIIgCCHIgBAAIAACEQABAMARgKIB8g/QAGgGgBgLIgChrIAKh3IAAgLIADgJIALgFIAMABQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAQADADACAFIgLChIgBBUICZhIQAPgHAJABIAPAFIAFAMIgHANIisBKIgRAIIALFMIAIBQIALA1QADAJgHAIQgFAFgDAAIgEgBgAKuDNIgGgUIgBgwQAAgDgCgDIgHgDIgGgDIgHgHQgCgCACgEIAFgFIAGgDIAFgCIAEgGIADgXIAAgyIgBgHIgEgDQgNgFgBgHQAAgGAGgHIATgPIAZgLQAUgIARAHQAQAFAGAPQAIAPgEAVQgEAWgUAbQgSAZgMAIIgNAMQgBAFAMAIIAnAeIAQARIABALIgHAFIgGAAIgggaIgPgJQgHgDgBAGIgCAVIAGAZIgBAJIgJAEQgKgBgEgIgALZgTQgVADgBAPIgBA9IABAHIAAAHQAJABALgQIASghQAGgTgDgOQgCgMgLAAIgGAAgAEGDSIgHgKIgBgQIADghIACAAIADgUIAAgIIAAgKQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgHAAIgIAAIgHgGQgGgIAGgJIALgIIANgDQAIgDAFgQIAXhJQAIgSALgGQAKgEAIAFQAJAEAAAKIADBBIAFAIIANAJQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIgBAEQgDADgDADIgFAEIgDAGIAKBjQAAAIgGAEQgGAEgJgFIgFgDQgCgEgBgGIgHhFIgEgQQAAgCgDgCQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgMAEIgHAIIgNBNIACAWQACAFgFAFIgKAFgAE4AsQgFAEACAGQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQADAAAAgHQAAgHgDAAIgCACgAkKDGIgBjJQAAgHgKAAIgtABQgGgBgDgGIgDCPIABAvIgDAeQgEAJgGAAQgGABgFgGIgGgSIgBjOQACgUAIgDQANgFAFAFIAFAJQADgFAEAAIAVgBIAngGIBVACQAMACgCANIgGAKIgWADIgcgBQgHgBgCAOIgFDLQgBADgDAFQgEACgEABQgMgFgDgLgAIhDLQgQgMgGgaIgDgNIgDgoIgEgIIgFgEQgKgMAPgHQACAAADgEIADgKIALg+IAAgJIgOgFIgIgFIgCgHIADgFIASgHIBRgIIAVABQAIACgBAFIgQAKIguAMQgLACgBAIIgLAwIAAATQAEAEAIgEIAUgCIAHAFQADAEgFAFIgMALIgZAKIgGAGIgCAXIAFAhQAFAPAIAKQAKAKAPgIIATgNIAaghIAMgLQAFgDADAGQAFAHgGAKQgLAdgUAQQgUAQgUABIgEAAQgRAAgPgKgAGaDTIgFgIIgIhEQgCgEgCgEIgGgCIgHgBIgHgGIgFgRQgBgNANgDIALgFIACgNIAEhbIAGgPQAEgFAJADQAJACAAAGIAABUQACAGAIgMIAgg8IAMgHQANgCACAIIgFATIgOAeIglA4IgJAMQACAFAOAGIA0AXQAKAGgHAFQgFAFgJgBIgsgLQgKgCgDADIgCAQIAEAlIgDAPIgHAFg");
	this.shape_34.setTransform(491.8,45.1798);
	this.shape_34._off = true;

	var maskedShapeInstanceList = [this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(9).to({_off:false},0).to({_off:true},87).wait(144));

	// Be_The
	this.instance_3 = new lib.BeThe();
	this.instance_3.setTransform(355.4,109.55,0.4001,0.3934,0,0,0,-3.4,7.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({regX:7.2,x:359.6,y:57.35},12,cjs.Ease.backOut).wait(79).to({regX:15.8,scaleX:0.0032,x:356.7},12,cjs.Ease.backIn).to({_off:true},1).wait(132));

	// Bar
	this.instance_4 = new lib.Line4();
	this.instance_4.setTransform(499.15,193.25,0.5491,0.5492,0,0,0,2.5,1.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131).to({_off:false},0).to({regX:1.8,regY:2.5,x:555.15,y:273.95},24,cjs.Ease.quintOut).wait(74).to({x:262},10,cjs.Ease.backIn).wait(1));

	// Shapes
	this.instance_5 = new lib.Shapes();
	this.instance_5.setTransform(328,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:622.95},22,cjs.Ease.backOut).wait(207).to({x:328},10,cjs.Ease.backIn).wait(1));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_191 = new cjs.Graphics().p("AobHiIAGvDIQxAAIAAPDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(191).to({graphics:mask_1_graphics_191,x:51.4922,y:44.292}).wait(49));

	// Shine
	this.instance_6 = new lib.buttonshine_mc();
	this.instance_6.setTransform(-45.35,52.1,0.3485,0.4175,0,0,0,19.5,23.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(191).to({_off:false},0).to({regX:19.9,scaleY:0.4174,x:7.3,alpha:0.3008},7).to({regX:24.6,x:66.95,alpha:0.6016},7).to({regX:22.8,x:109.05,alpha:0.2891},7).to({regX:22.7,x:158.95,alpha:0},7).wait(21));

	// Play_Now
	this.instance_7 = new lib.ViewMore();
	this.instance_7.setTransform(28.1,23.2,0.4239,0.4244,0,0,0,9.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(240));

	// Photo
	this.instance_8 = new lib.Photo();
	this.instance_8.setTransform(184.75,45.9,1.2385,1.2385,0,0,0,-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0,regY:-0.1,scaleX:1.3303,scaleY:1.3296,x:166.2,y:43.75},239).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(140.4,-248.5,912.0000000000001,373.5);
// library properties:
lib.properties = {
	id: 'DFF4487015A343DBA233FF464EA54148',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HitMaker_728x90_atlas_P_1.png?1688658963117", id:"HitMaker_728x90_atlas_P_1"},
		{src:"images/HitMaker_728x90_atlas_NP_1.jpg?1688658963117", id:"HitMaker_728x90_atlas_NP_1"}
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
an.compositions['DFF4487015A343DBA233FF464EA54148'] = {
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