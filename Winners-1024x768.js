(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Winners_1024x768_atlas_1", frames: [[0,380,1335,207],[0,589,1335,207],[0,798,1335,207],[0,1007,1335,207],[1026,0,829,231],[0,0,1024,378],[1026,233,174,136]]},
		{name:"Winners_1024x768_atlas_2", frames: [[0,1420,669,628],[0,736,1024,682],[1026,0,1006,673],[0,0,1024,734],[1026,1333,809,667],[1026,675,849,656]]},
		{name:"Winners_1024x768_atlas_3", frames: [[0,0,1024,768],[0,770,1024,745]]}
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



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Winners_1024x768_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Winners_1024x768_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Winners_1024x768_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Winners_1024x768_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BottomBanner = function() {
	this.initialize(ss["Winners_1024x768_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CatherineBackground = function() {
	this.initialize(ss["Winners_1024x768_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CatherineTopLayer = function() {
	this.initialize(ss["Winners_1024x768_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.KathyBackground = function() {
	this.initialize(ss["Winners_1024x768_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.KathyTopLayer = function() {
	this.initialize(ss["Winners_1024x768_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.MaryannBackground = function() {
	this.initialize(ss["Winners_1024x768_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.MaryannTopLayer = function() {
	this.initialize(ss["Winners_1024x768_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.MichaelBackground = function() {
	this.initialize(ss["Winners_1024x768_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MichaelTopLayer = function() {
	this.initialize(ss["Winners_1024x768_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.TopBanner = function() {
	this.initialize(ss["Winners_1024x768_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.TurningStoneLogo = function() {
	this.initialize(ss["Winners_1024x768_atlas_1"]);
	this.gotoAndStop(6);
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


(lib.MichaelWon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-333.65,-51.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MichaelWon, new cjs.Rectangle(-333.6,-51.8,667.5,103.5), null);


(lib.MichaelBackground_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MichaelBackground();
	this.instance.setTransform(-512,-372.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MichaelBackground_1, new cjs.Rectangle(-512,-372.5,1024,745), null);


(lib.MichaelTopLayer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MichaelTopLayer();
	this.instance.setTransform(-424.5,-328);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MichaelTopLayer_1, new cjs.Rectangle(-424.5,-328,849,656), null);


(lib._8068 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AnWHTIBMkXICmAAIhyEXgA2xHHIAAhbQiGgUhIhPIBciHQBSBLBbAAQBMAAAAg5QAAgagzgaIhxgxQikhOAAh+QAAhSA2g8QA1g4BWgRIAAheIBuAAIAABbQB7AOA+BBIhLCRQhJhAhWAAQggAAgVANQgYAQAAAcQAAAbAzAZIBxAwQCkBIAACBQAABUg1A7Qg3A+heAQIAABbgAStErQhEg/AAhdQAAhiBkhMQhCg5AAhRQAAhXA6g5QBBhBB3AAQBpAABEA2QBIA6AABiQAABKhHBaQBVA5AABfQAABZhDA+QhKBFh/AAQh9AAhKhFgAUeCAQAAAjAZAZQAZAYAkAAQBXAAAAhJQAAgcgpgZQgQgKhOgkQgmApAAAvgAU4imQAAAgAiAZQAWARA8AZQAZguAAgrQAAhChMAAQhBAAAAA4gAJWEbQhcheAAinQAAidBYhzQBhiACfAAQBlAAA7AgIgwCXQgvgVg0AAQh0AAgnB3IACAAQAjgaBAABQBrgBBDBOQA+BGAABjQAABihABGQhHBMhvAAQh4AAhRhVgAKwA+QAAA+AkAqQAiAoApAAQAgAAAVgYQAUgYAAghQAAgrgageQgeghg2AAQhKAAAAArgAiGgGQAAl0EOAAQEQAAAAF0QAAF2kQAAQkOAAAAl2gAAvgGQAADUBZAAQBbAAAAjUQAAjShbAAQhZAAAADSgAvhErQhEg/AAhdQAAhiBkhMQhBg5AAhRQAAhXA5g5QBChBB3AAQBpAABDA2QBIA6AABiQAABKhGBaQBVA5AABfQAABZhDA+QhLBFh+AAQh9AAhLhFgAtwCAQAAAjAZAZQAZAYAlAAQBXAAAAhJQAAgcgqgZQgQgKhNgkQgnApAAAvgAtWimQAAAgAiAZQAXARA7AZQAaguAAgrQAAhChMAAQhCAAAAA4g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._8068, new cjs.Rectangle(-166.4,-46.7,332.9,93.5), null);


(lib.MaryannWon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-333.65,-51.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MaryannWon, new cjs.Rectangle(-333.6,-51.8,667.5,103.5), null);


(lib.MaryannBackground_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MaryannBackground();
	this.instance.setTransform(-512,-367);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MaryannBackground_1, new cjs.Rectangle(-512,-367,1024,734), null);


(lib.MaryannTopLayer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MaryannTopLayer();
	this.instance.setTransform(-404.5,-333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MaryannTopLayer_1, new cjs.Rectangle(-404.5,-333.5,809,667), null);


(lib._40163 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhMHTIBMkXIClAAIhyEXgA7CHHIAAhbQiGgUhIhPIBciHQBSBLBbAAQBMAAAAg5QAAgagzgaIhxgxQikhOAAh+QAAhSA2g8QA1g4BWgRIAAheIBuAAIAABbQB7AOA+BBIhLCRQhJhAhWAAQggAAgVANQgYAQAAAcQAAAbAzAZIBxAwQCkBIAACBQAABUg1A7Qg3A+heAQIAABbgAWPERIBViIQBBBABUAAQAvAAAdgVQAagUAAgfQAAhQiGAAIgyAAIgmhVIBfhxQAigqAdgaIAAgCQgYAFgtAAIitAAIAAiXIHIAAIAABtIiSCpQBPASAwA5QAvA5AABMQAABlhCBFQhKBNiAAAQihAAhVhfgAOKEbQhcheAAinQAAidBYhzQBiiACfAAQBkAAA7AgIgvCXQgwgVgzAAQh0AAgoB3IACAAQAkgaA/ABQBsgBBDBOQA+BGAABjQAABihBBGQhGBMhwAAQh3AAhShVgAPkA+QAAA+AlAqQAiAoAoAAQAhAAAUgYQAUgYAAghQAAgrgageQgdghg2AAQhLAAAAArgAqlgGQAAl0EQAAQEQAAAAF0QAAF2kQAAQkQAAAAl2gAnvgGQAADUBaAAQBaAAAAjUQAAjShaAAQhaAAAADSgAEIFjIAAiXICZAAIAAkrIABg4IgCAAQgJAUgTASIgrAnIhmhtIDDi2ICYAAIAAI5ICbAAIAACXgAwIFjIAAiuIlAAAIAAhrIEXm3IDYAAIAAGPIBWAAIAACTIhWAAIAACugAwniEIhtCkIAAACICMAAIAAihQAAgnAGgpIgCAAQgPAsgUAfg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._40163, new cjs.Rectangle(-193.7,-46.7,387.5,93.5), null);


(lib.KathyWon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-333.65,-51.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KathyWon, new cjs.Rectangle(-333.6,-51.8,667.5,103.5), null);


(lib.KathyBackground_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KathyBackground();
	this.instance.setTransform(-512,-341);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KathyBackground_1, new cjs.Rectangle(-512,-341,1024,682), null);


(lib.KathyTopLayer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KathyTopLayer();
	this.instance.setTransform(-503,-336.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KathyTopLayer_1, new cjs.Rectangle(-503,-336.5,1006,673), null);


(lib._22165 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah5HTIBMkXIClAAIhyEXgA6dHHIAAhbQiGgUhIhPIBciHQBSBLBbAAQBMAAAAg5QAAgagzgaIhxgxQikhOAAh+QAAhSA2g8QA1g4BWgRIAAheIBuAAIAABbQB7AOA+BBIhLCRQhJhAhWAAQggAAgVANQgYAQAAAcQAAAbAzAZIBxAwQCkBIAACBQAABUg1A7Qg3A+heAQIAABbgAVqERIBViIQBCBABRAAQAnAAAdgWQAhgZAAgqQAAgqghgYQgggYgzAAQg4AAgoAZIhfgjIAdl5IGVAAIAACXIj7AAIgEBCQAAAPgEANIACAAQAagGAbgBQB7AABGBGQBBBBAABmQAABxhKBIQhMBJh1AAQigAAhXhfgANdEbQhcheAAinQAAidBYhzQBiiACfAAQBkAAA7AgIgvCXQgwgVgzAAQh0AAgoB3IACAAQAkgaA/ABQBsgBBDBOQA+BGAABjQAABihBBGQhGBMhwAAQh3AAhShVgAO3A+QAAA+AlAqQAiAoAoAAQAhAAAUgYQAUgYAAghQAAgrgageQgdghg2AAQhLAAAAArgADbFjIAAiXICZAAIAAkrIABg4IgCAAQgJAUgTASIgrAnIhmhtIDDi2ICYAAIAAI5ICbAAIAACXgAqmFjQgIgtAAghQAAiZCch0IBrhLQAxgoAAggQAAgkgYgTQgWgRggAAQhEAAgnBNIiDhYQBDicC8AAQBiAABFA1QBPA9AABrQAACCiSBkIhlBDQgvAigCAeIEzAAIAACXgA0FFjQgIgtAAghQAAiZCch0IBrhLQAxgoAAggQAAgkgYgTQgWgRggAAQhEAAgnBNIiDhYQBDicC8AAQBiAABFA1QBPA9AABrQAACCiSBkIhlBDQgvAigCAeIEzAAIAACXg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._22165, new cjs.Rectangle(-190,-46.7,380.1,93.5), null);


(lib.CatherineWon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-333.65,-51.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CatherineWon, new cjs.Rectangle(-333.6,-51.8,667.5,103.5), null);


(lib.CatherineBackground_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CatherineBackground();
	this.instance.setTransform(-512,-384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CatherineBackground_1, new cjs.Rectangle(-512,-384,1024,768), null);


(lib.TopBanner_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TopBanner();
	this.instance.setTransform(-512,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TopBanner_1, new cjs.Rectangle(-512,-189,1024,378), null);


(lib.CatherineTopLayer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CatherineTopLayer();
	this.instance.setTransform(-334.5,-314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CatherineTopLayer_1, new cjs.Rectangle(-334.5,-314,669,628), null);


(lib.BottomBanner_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BottomBanner();
	this.instance.setTransform(-414.5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BottomBanner_1, new cjs.Rectangle(-414.5,-115.5,829,231), null);


(lib.TurningStoneLogo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TurningStoneLogo();
	this.instance.setTransform(-87,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TurningStoneLogo_1, new cjs.Rectangle(-87,-68,174,136), null);


(lib._10132_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhvHTIBMkXICmAAIhzEXgA6LHHIAAhbQiGgUhIhPIBciHQBSBLBbAAQBMAAAAg5QAAgagzgaIhxgxQikhOAAh+QAAhSA2g8QA1g4BWgRIAAheIBuAAIAABbQB7AOA+BBIhLCRQhJhAhWAAQggAAgVANQgYAQAAAcQAAAbAzAZIBxAwQCkBIAACBQAABUg1A7Qg3A+heAQIAABbgAL7ERIBViIQBBBABUAAQAvAAAdgVQAbgUAAgfQAAhQiGAAIgzAAIglhVIBehxQAjgqAcgaIAAgCQgXAFgtAAIitAAIAAiXIHIAAIAABtIiTCpQBQASAvA5QAwA5AABMQAABlhCBFQhKBNiAAAQiiAAhVhfgArHgGQAAl0EPAAQEQAAAAF0QAAF2kQAAQkPAAAAl2gAoRgGQAADUBZAAQBbAAAAjUQAAjShbAAQhZAAAADSgAVmFjQgIgtAAghQAAiZCch0IBrhLQAxgoAAggQAAgkgYgTQgWgRggAAQhEAAgnBNIiDhYQBDicC8AAQBiAABFA1QBPA9AABrQAACCiSBkIhlBDQgvAigCAeIEzAAIAACXgADlFjIAAiXICaAAIAAkrIABg4IgCAAQgKAUgSASIgsAnIhmhtIDDi2ICYAAIAAI5ICbAAIAACXgAzzFjIAAiXICaAAIAAkrIABg4IgCAAQgKAUgSASIgsAnIhmhtIDDi2ICYAAIAAI5ICbAAIAACXg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._10132_mc, new cjs.Rectangle(-188.2,-46.7,376.5,93.5), null);


(lib.button_link = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


// stage content:
(lib.Winners1024x768 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,479];
	// timeline functions:
	this.frame_0 = function() {
		this.button_link.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.google.com", "_blank");
		}
	}
	this.frame_479 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(479).call(this.frame_479).wait(1));

	// Button
	this.button_link = new lib.button_link();
	this.button_link.name = "button_link";
	this.button_link.setTransform(512,384);
	new cjs.ButtonHelper(this.button_link, 0, 1, 2, false, new lib.button_link(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhP/g7/MCf/AAAMAAAB3/Mif/AAAg");
	this.shape.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.button_link}]}).wait(480));

	// _0163
	this.instance = new lib._40163();
	this.instance.setTransform(234.75,150.55,0.0026,0.0109,0,0,0,19.5,4.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(396).to({_off:false},0).to({regX:19.6,scaleX:0.9998,scaleY:0.9998,x:248.1,y:155.3},30,cjs.Ease.elasticOut).wait(54));

	// Maryann_Won
	this.instance_1 = new lib.MaryannWon();
	this.instance_1.setTransform(-226,60.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(384).to({_off:false},0).to({x:364.7},15,cjs.Ease.backOut).wait(81));

	// _068
	this.instance_2 = new lib._8068();
	this.instance_2.setTransform(202.3,150.65,0.003,0.0106,0,0,0,33.5,14.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(276).to({_off:false},0).to({scaleX:0.9644,scaleY:0.9647,x:227.5,y:165.55},28,cjs.Ease.elasticOut).to({scaleX:0.9643,scaleY:0.9646},55).to({regX:34.5,regY:14.8,scaleX:0.9641,scaleY:0.9653,x:-792.75,y:165.95},25,cjs.Ease.quintIn).to({_off:true},1).wait(95));

	// Michael_Won
	this.instance_3 = new lib.MichaelWon();
	this.instance_3.setTransform(-195,60.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(264).to({_off:false},0).to({x:364.7},15,cjs.Ease.backOut).wait(80).to({x:-660},25,cjs.Ease.quintIn).to({_off:true},1).wait(95));

	// _2165
	this.instance_4 = new lib._22165();
	this.instance_4.setTransform(221.2,152.65,0.0026,0.0109,0,0,0,19.2,9.2);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(156).to({_off:false},0).to({scaleX:0.9998,scaleY:0.9998,x:242.9,y:162.15},28,cjs.Ease.elasticOut).wait(55).to({x:-814.05},25,cjs.Ease.quintIn).to({_off:true},1).wait(215));

	// Kathy_Won
	this.instance_5 = new lib.KathyWon();
	this.instance_5.setTransform(-128.3,59.05,1,0.9998,0,0,0,0.7,0.6);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({regX:0,regY:0,scaleY:1,x:361.6,y:58.9},15,cjs.Ease.backOut).wait(80).to({x:-695.35},25,cjs.Ease.quintIn).to({_off:true},1).wait(215));

	// _0132
	this.instance_6 = new lib._10132_mc();
	this.instance_6.setTransform(224.45,151.3,0.0026,0.0104,0,0,0,38.1,9.7);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({scaleX:0.9656,scaleY:0.9659,x:251.85,y:161.55},29,cjs.Ease.elasticOut).wait(71).to({regX:39.1,regY:10.2,scaleX:0.9657,scaleY:0.966,x:-759.25,y:161.6},25,cjs.Ease.quintIn).to({_off:true},1).wait(335));

	// Catherine_Won
	this.instance_7 = new lib.CatherineWon();
	this.instance_7.setTransform(-273,58.9);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({x:366.4},15,cjs.Ease.backOut).wait(98).to({x:-652},25,cjs.Ease.quintIn).to({_off:true},1).wait(335));

	// Turning_Stone_Logo
	this.instance_8 = new lib.TurningStoneLogo_1();
	this.instance_8.setTransform(1744.1,674);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:902},24,cjs.Ease.quintOut).wait(456));

	// Bottom_Banner
	this.instance_9 = new lib.BottomBanner_1();
	this.instance_9.setTransform(1445.5,652.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:609.5},24,cjs.Ease.quintOut).wait(456));

	// Maryann_Top_Layer
	this.instance_10 = new lib.MaryannTopLayer_1();
	this.instance_10.setTransform(1554.5,434.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(359).to({_off:false},0).to({x:530.5},25,cjs.Ease.quintIn).to({regX:1.1,regY:1.3,scaleX:1.0494,scaleY:1.0494,x:530.45},95).wait(1));

	// Michael_Top_Layer
	this.instance_11 = new lib.MichaelTopLayer_1();
	this.instance_11.setTransform(1600.5,440);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(239).to({_off:false},0).to({x:576.5},25,cjs.Ease.quintIn).to({regX:0.1,regY:0.1,scaleX:1.0471,scaleY:1.0469,x:576.65},95).to({regX:0.7,regY:1.2,scaleX:1.0518,scaleY:1.0517,x:-447.45,y:439.9},25,cjs.Ease.quintIn).to({_off:true},1).wait(95));

	// Kathy_Top_Layer
	this.instance_12 = new lib.KathyTopLayer_1();
	this.instance_12.setTransform(1545,431.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).to({x:521},25,cjs.Ease.quintIn).to({regX:1.2,regY:1.6,scaleX:1.0398,scaleY:1.0396},95).to({regY:1.5,scaleX:1.0438,scaleY:1.0436,x:-533.7,y:431.45},25,cjs.Ease.quintIn).to({_off:true},1).wait(215));

	// Catherine_Top_Layer
	this.instance_13 = new lib.CatherineTopLayer_1();
	this.instance_13.setTransform(520.5,768,1,1,0,0,0,0,314);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:0.1,regY:314.1,scaleX:1.0598,scaleY:1.0597,x:520.55,y:786.8},119).to({regX:0,scaleX:1.0643,scaleY:1.0642,x:-505.5,y:788.2},25,cjs.Ease.quintIn).wait(41).to({scaleX:1.0463,scaleY:1.0463,y:782.6},0).to({_off:true},1).wait(294));

	// Top_Banner
	this.instance_14 = new lib.TopBanner_1();
	this.instance_14.setTransform(-524.3,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:512},24,cjs.Ease.quintOut).wait(456));

	// Maryann_Background
	this.instance_15 = new lib.MaryannBackground_1();
	this.instance_15.setTransform(1536,401);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(359).to({_off:false},0).to({x:512},25,cjs.Ease.quintIn).wait(96));

	// Michael_Background
	this.instance_16 = new lib.MichaelBackground_1();
	this.instance_16.setTransform(1536,395.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(239).to({_off:false},0).to({x:512},25,cjs.Ease.quintIn).wait(95).to({x:-512},25,cjs.Ease.quintIn).to({_off:true},1).wait(95));

	// Kathy_Background
	this.instance_17 = new lib.KathyBackground_1();
	this.instance_17.setTransform(1536,427);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(119).to({_off:false},0).to({x:512},25,cjs.Ease.quintIn).wait(95).to({x:-542.8},25,cjs.Ease.quintIn).to({_off:true},1).wait(215));

	// Catherine_Background
	this.instance_18 = new lib.CatherineBackground_1();
	this.instance_18.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(119).to({x:-514},25,cjs.Ease.quintIn).to({_off:true},1).wait(335));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-547.9,380.7,2595.9,407.40000000000003);
// library properties:
lib.properties = {
	id: '470A1786AF33402F82496FEA1B7E194B',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Winners_1024x768_atlas_1.png?1614973534141", id:"Winners_1024x768_atlas_1"},
		{src:"images/Winners_1024x768_atlas_2.png?1614973534141", id:"Winners_1024x768_atlas_2"},
		{src:"images/Winners_1024x768_atlas_3.png?1614973534141", id:"Winners_1024x768_atlas_3"}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;