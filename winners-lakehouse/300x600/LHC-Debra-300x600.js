(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"LHC_Debra_300x600_atlas_1", frames: [[302,666,347,85],[651,712,232,54],[302,556,492,108],[651,666,314,44],[302,0,300,416],[0,0,300,600],[604,362,300,192],[796,556,188,41],[604,0,293,360],[899,0,44,11],[302,418,185,97],[0,602,300,161]]}
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



(lib.CachedBmp_10 = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Backdrop = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BottomBannerBG = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ButtonBG = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Cutout = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.LHC_BoldLogo = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.LHC_Stacked_BoldLogo = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.TopBannerBG = function() {
	this.initialize(ss["LHC_Debra_300x600_atlas_1"]);
	this.gotoAndStop(11);
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
	this.shape.graphics.f().s("#000000").ss(0.5,1,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-301,302,602);


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
	this.instance.setTransform(-146.5,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cutout_1, new cjs.Rectangle(-146.5,-180,293,360), null);


(lib.BET160 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-1.75,-5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BET160, new cjs.Rectangle(-1.7,-5.5,173.5,42.5), null);


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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-1.65,-3.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ANDWON, new cjs.Rectangle(-1.6,-3.9,116,27), null);


(lib._14734 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(2.25,17.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._14734, new cjs.Rectangle(2.3,17.8,246,54), null);


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
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-86.55,-9.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WINNOW, new cjs.Rectangle(-86.5,-9.2,157,22), null);


(lib.ButtonBG_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ButtonBG();
	this.instance.setTransform(-94,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBG_1, new cjs.Rectangle(-94,-20.5,188,41), null);


// stage content:
(lib.LHCDebra300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// Button
	this.link_btn = new lib.link_btn();
	this.link_btn.name = "link_btn";
	this.link_btn.setTransform(150,300);
	new cjs.ButtonHelper(this.link_btn, 0, 1, 2, false, new lib.link_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.link_btn).wait(120));

	// WIN_NOW_
	this.instance = new lib.WINNOW();
	this.instance.setTransform(149,629.9,1,1,0,0,0,-8.2,1.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({y:566.9},12,cjs.Ease.backOut).wait(61));

	// Button_BG
	this.instance_1 = new lib.ButtonBG_1();
	this.instance_1.setTransform(150,626.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({y:563.5},12,cjs.Ease.backOut).wait(61));

	// $14_734
	this.instance_2 = new lib._14734();
	this.instance_2.setTransform(150,113.85,0.0041,0.0185,0,0,0,122.8,45.9);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({regX:125.2,regY:44.8,scaleX:1,scaleY:1,x:150.05,y:118.75},24,cjs.Ease.elasticOut).wait(73));

	// AND_WON
	this.instance_3 = new lib.ANDWON();
	this.instance_3.setTransform(364.3,74.4,1,1,0,0,0,56.3,9.6);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({x:145.1},12,cjs.Ease.backOut).wait(97));

	// BET_$1_60
	this.instance_4 = new lib.BET160();
	this.instance_4.setTransform(-91,44.85,1,1,0,0,0,85,15.8);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:144.1},11,cjs.Ease.backOut).wait(109));

	// LHC_BoldLogo
	this.instance_5 = new lib.LHC_BoldLogo();
	this.instance_5.setTransform(125,417);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// LHC_Stacked_BoldLogo
	this.instance_6 = new lib.LHC_Stacked_BoldLogo();
	this.instance_6.setTransform(58,435);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Bottom_Banner_BG
	this.instance_7 = new lib.BottomBannerBG();
	this.instance_7.setTransform(0,408);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Cutout
	this.instance_8 = new lib.Cutout_1();
	this.instance_8.setTransform(146.5,352);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.0853,scaleY:1.0853},119).wait(1));

	// Top_Banner_BG
	this.instance_9 = new lib.TopBannerBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Backdrop
	this.instance_10 = new lib.Backdrop();
	this.instance_10.setTransform(0,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Background
	this.instance_11 = new lib.Background();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,299,478.09999999999997,359.9);
// library properties:
lib.properties = {
	id: 'B88BAFA948C240CF9F31347084A291C3',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/LHC_Debra_300x600_atlas_1.png?1623173375924", id:"LHC_Debra_300x600_atlas_1"}
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
an.compositions['B88BAFA948C240CF9F31347084A291C3'] = {
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