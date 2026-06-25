(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index00_atlas_1", frames: [[0,101,118,99],[120,101,118,99],[240,101,118,99],[0,0,273,99]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index00_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index00_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index00_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index00_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.元件1複製2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-25,-20.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnADbQi6haAAiBQAAiAC6hbQC6haEGAAQEHAAC6BaQC6BbAACAQAACBi6BaQi6BbkHAAQkGAAi6hbg");
	this.shape.setTransform(5.5,3.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-27.9,127,62);


(lib.元件1複製 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-25,-20.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnADbQi6haAAiBQAAiAC6hbQC6haEGAAQEHAAC6BaQC6BbAACAQAACBi6BaQi6BbkHAAQkGAAi6hbg");
	this.shape.setTransform(5.5,3.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-27.9,127,62);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-25,-20.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnADbQi6haAAiBQAAiAC6hbQC6haEGAAQEHAAC6BaQC6BbAACAQAACBi6BaQi6BbkHAAQkGAAi6hbg");
	this.shape.setTransform(5.5,3.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-27.9,127,62);


// stage content:
(lib.index00 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [94];
	// timeline functions:
	this.frame_94 = function() {
		this.stop();
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		// http://localhost/xxx.html  V
		// http://192.168.0.1/xxx.html X
		// http://127.0.0.1/xxx.html V
		
		
		this.b_1_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://localhost/public_html/index01.html?value1=30", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.b_1_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://localhost/public_html/index01.html?value1=60", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.b_1_3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://localhost/public_html/index01.html?value1=90", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// 圖層_2
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(87.1,202.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95));

	// 圖層_1
	this.b_1_3 = new lib.元件1複製2();
	this.b_1_3.name = "b_1_3";
	this.b_1_3.setTransform(476,409.7);
	new cjs.ButtonHelper(this.b_1_3, 0, 1, 2, false, new lib.元件1複製2(), 3);

	this.b_1_2 = new lib.元件1複製();
	this.b_1_2.name = "b_1_2";
	this.b_1_2.setTransform(479.15,290.85);
	new cjs.ButtonHelper(this.b_1_2, 0, 1, 2, false, new lib.元件1複製(), 3);

	this.b_1_1 = new lib.元件1();
	this.b_1_1.name = "b_1_1";
	this.b_1_1.setTransform(479.15,162.65);
	new cjs.ButtonHelper(this.b_1_1, 0, 1, 2, false, new lib.元件1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b_1_1},{t:this.b_1_2},{t:this.b_1_3}]}).wait(95));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(567.1,454.7,-18.899999999999977,-10.899999999999977);
// library properties:
lib.properties = {
	id: '47773ED23E708F4CAC24BC5256D9B165',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index00_atlas_1.png?1782394661910", id:"index00_atlas_1"}
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
an.compositions['47773ED23E708F4CAC24BC5256D9B165'] = {
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