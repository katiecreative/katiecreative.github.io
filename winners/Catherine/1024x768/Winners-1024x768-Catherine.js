(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Winners_1024x768_Catherine_atlas_1", frames: [[0,1150,1335,207],[1026,630,829,231],[0,0,1024,768],[1026,0,669,628],[0,770,1024,378],[1697,0,174,136]]}
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



(lib.CachedBmp_26 = function() {
	this.initialize(ss["Winners_1024x768_Catherine_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BottomBanner = function() {
	this.initialize(ss["Winners_1024x768_Catherine_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CatherineBackground = function() {
	this.initialize(ss["Winners_1024x768_Catherine_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CatherineTopLayer = function() {
	this.initialize(ss["Winners_1024x768_Catherine_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.TopBanner = function() {
	this.initialize(ss["Winners_1024x768_Catherine_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TurningStoneLogo = function() {
	this.initialize(ss["Winners_1024x768_Catherine_atlas_1"]);
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
	this.instance = new lib.CachedBmp_26();
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
(lib.Winners1024x768Catherine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,119];
	// timeline functions:
	this.frame_0 = function() {
		this.button_link.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.google.com", "_blank");
		}
	}
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("EhP/g7/MCf/AAAMAAAB3/Mif/AAAg");
	this.shape.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// Button
	this.button_link = new lib.button_link();
	this.button_link.name = "button_link";
	this.button_link.setTransform(512,384);
	new cjs.ButtonHelper(this.button_link, 0, 1, 2, false, new lib.button_link(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EhP/g7/MCf/AAAMAAAB3/Mif/AAAg");
	this.shape_1.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.button_link}]}).wait(120));

	// _0132
	this.instance = new lib._10132_mc();
	this.instance.setTransform(224.45,151.3,0.0026,0.0104,0,0,0,38.1,9.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:0.9656,scaleY:0.9659,x:251.85,y:161.55},29,cjs.Ease.elasticOut).wait(72));

	// Catherine_Won
	this.instance_1 = new lib.CatherineWon();
	this.instance_1.setTransform(-273,58.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:366.4},15,cjs.Ease.backOut).wait(99));

	// Turning_Stone_Logo
	this.instance_2 = new lib.TurningStoneLogo_1();
	this.instance_2.setTransform(1744.1,674);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:902},24,cjs.Ease.quintOut).wait(96));

	// Bottom_Banner
	this.instance_3 = new lib.BottomBanner_1();
	this.instance_3.setTransform(1445.5,652.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:609.5},24,cjs.Ease.quintOut).wait(96));

	// Catherine_Top_Layer
	this.instance_4 = new lib.CatherineTopLayer_1();
	this.instance_4.setTransform(520.5,768,1,1,0,0,0,0,314);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,regY:314.1,scaleX:1.0747,scaleY:1.0746,y:791.4},119).wait(1));

	// Top_Banner
	this.instance_5 = new lib.TopBanner_1();
	this.instance_5.setTransform(-524.3,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:512},24,cjs.Ease.quintOut).wait(96));

	// Catherine_Background
	this.instance_6 = new lib.CatherineBackground_1();
	this.instance_6.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-524.3,383,2384.3,408.29999999999995);
// library properties:
lib.properties = {
	id: '470A1786AF33402F82496FEA1B7E194B',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Winners_1024x768_Catherine_atlas_1.png?1615575227000", id:"Winners_1024x768_Catherine_atlas_1"}
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