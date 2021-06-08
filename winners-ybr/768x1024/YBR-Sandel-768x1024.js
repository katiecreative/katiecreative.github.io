(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"YBR_Sandel_768x1024_atlas_1", frames: [[770,1335,910,307],[0,0,768,1024],[770,0,758,678],[0,1026,768,964],[770,680,768,653],[770,1644,768,342]]},
		{name:"YBR_Sandel_768x1024_atlas_2", frames: [[0,519,806,228],[1074,646,478,146],[0,335,615,128],[1248,436,767,208],[0,0,768,333],[770,0,476,517],[808,519,264,286],[1554,646,301,72],[1248,0,767,216],[617,335,138,131],[1248,218,767,216]]}
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



(lib.CachedBmp_34 = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BlackBox = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BlackBox_1 = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BlackFade = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BottomBlackFade = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CTABUTTON = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Cutout = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.TEXTURE = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.TEXTURE_1 = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.YBRLogo = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.YellowBox = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.YellowBox_1 = function() {
	this.initialize(ss["YBR_Sandel_768x1024_atlas_1"]);
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


(lib.link_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Eg7/BQAMAAAif/MB3/AAAMAAACf/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-512,768,1024);


(lib.BET250 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(-233.25,-63.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BET250, new cjs.Rectangle(-233.2,-63.4,403,114), null);


(lib.ANDWON = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(-137,-40.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ANDWON, new cjs.Rectangle(-137,-40.4,239,73), null);


(lib._10399 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-259.15,-85.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._10399, new cjs.Rectangle(-259.1,-85.5,455,153.5), null);


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
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-153.7,-35.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WINNOW, new cjs.Rectangle(-153.7,-35.4,307.5,64), null);


(lib.CTABUTTON_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CTABUTTON();
	this.instance.setTransform(-150.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTABUTTON_1, new cjs.Rectangle(-150.5,-36,301,72), null);


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
	this.instance.setTransform(-379,-339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cutout_1, new cjs.Rectangle(-379,-339,758,678), null);


// stage content:
(lib.YBRSandel768x1024 = function(mode,startPosition,loop,reversed) {
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
		this.link_btn.addEventListener("click", fl_ClickToGoToWebPage_2);
		
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
		
		if(this.loopNum==3){
		
		this.stop();
		
		}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("Eg7/hP/MB3/AAAMAAACf/Mh3/AAAg");
	this.shape.setTransform(384,512);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// Button
	this.link_btn = new lib.link_btn();
	this.link_btn.name = "link_btn";
	this.link_btn.setTransform(384,512);
	new cjs.ButtonHelper(this.link_btn, 0, 1, 2, false, new lib.link_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.link_btn).wait(120));

	// WIN_NOW_
	this.instance = new lib.WINNOW();
	this.instance.setTransform(384.45,1071.6,1,1,0,0,0,0.1,-3.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({y:943.6},12,cjs.Ease.backOut).wait(61));

	// CTA_BUTTON
	this.instance_1 = new lib.CTABUTTON_1();
	this.instance_1.setTransform(384.5,1072);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({y:944},12,cjs.Ease.backOut).wait(61));

	// $10_399
	this.instance_2 = new lib._10399();
	this.instance_2.setTransform(384,218.4,0.0022,0.0065,0,0,0,-22.8,-7.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regX:-31.7,regY:-8.8,scaleX:1,scaleY:1,x:385.6,y:209.65},23,cjs.Ease.elasticOut).wait(73));

	// AND_WON
	this.instance_3 = new lib.ANDWON();
	this.instance_3.setTransform(907.5,129.8,1,1,0,0,0,-17.5,-3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({x:382.45},12,cjs.Ease.backOut).wait(96));

	// BET_$2_50
	this.instance_4 = new lib.BET250();
	this.instance_4.setTransform(-216.8,57.25,1,1,0,0,0,-31.8,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:376.7},12,cjs.Ease.backOut).wait(108));

	// YBR_Logo
	this.instance_5 = new lib.YBRLogo();
	this.instance_5.setTransform(589,862);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// TEXTURE
	this.instance_6 = new lib.TEXTURE();
	this.instance_6.setTransform(1,808);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Black_Box
	this.instance_7 = new lib.BlackBox();
	this.instance_7.setTransform(1,816);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Yellow_Box
	this.instance_8 = new lib.YellowBox();
	this.instance_8.setTransform(1,808);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Cutout
	this.instance_9 = new lib.Cutout_1();
	this.instance_9.setTransform(380,685);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.0528,scaleY:1.0527},119).wait(1));

	// TEXTURE
	this.instance_10 = new lib.TEXTURE_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Black_Box
	this.instance_11 = new lib.BlackBox_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// Yellow_Box
	this.instance_12 = new lib.YellowBox_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120));

	// Black_Fade
	this.instance_13 = new lib.BlackFade();
	this.instance_13.setTransform(292,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120));

	// Bottom_Black_Fade
	this.instance_14 = new lib.BottomBlackFade();
	this.instance_14.setTransform(0,738);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(120));

	// Layer_2
	this.instance_15 = new lib.Layer2();
	this.instance_15.setTransform(0,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(120));

	// Background
	this.instance_16 = new lib.Background();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,511,1061.2,597);
// library properties:
lib.properties = {
	id: '44FFC76EF94D429A8B3DB44345E65D4B',
	width: 768,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/YBR_Sandel_768x1024_atlas_1.png?1623158008761", id:"YBR_Sandel_768x1024_atlas_1"},
		{src:"images/YBR_Sandel_768x1024_atlas_2.png?1623158008761", id:"YBR_Sandel_768x1024_atlas_2"}
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
an.compositions['44FFC76EF94D429A8B3DB44345E65D4B'] = {
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