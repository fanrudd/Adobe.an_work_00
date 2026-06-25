(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index01_atlas_", frames: [[0,606,273,99],[275,606,273,99],[0,0,302,99],[304,0,273,99],[0,505,302,99],[304,202,273,99],[0,404,302,99],[304,404,273,99],[0,303,302,99],[304,303,273,99],[0,101,302,99],[304,101,273,99],[0,202,302,99]]}
];


// symbols:



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_21 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_22 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_23 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_24 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_25 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_26 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_27 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_29 = function() {
	this.initialize(ss["index01_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.index01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		var queryString = window.location.search;
		
		var urlParams = new URLSearchParams(queryString);
		
		//30 or 60 or 90
		var v1 = urlParams.get('value1');
		
		//var v2 = urlParams.get('value2');
		
		//var v3 = urlParams.get('value3');
		
		
		this.gotoAndStop(v1);
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}
	this.frame_88 = function() {
		this.stop();
	}
	this.frame_92 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(24).call(this.frame_28).wait(3).call(this.frame_31).wait(27).call(this.frame_58).wait(4).call(this.frame_62).wait(26).call(this.frame_88).wait(4).call(this.frame_92).wait(58));

	// 圖層_2
	this.instance = new lib.CachedTexturedBitmap_17();
	this.instance.parent = this;
	this.instance.setTransform(214,169.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(244,293.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(214,169.5,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(210,347.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(214,169.5,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(210,371.45,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(214,169.5,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_25();
	this.instance_7.parent = this;
	this.instance_7.setTransform(268,398.45,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(214,169.5,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_27();
	this.instance_9.parent = this;
	this.instance_9.setTransform(245,363.45,0.5,0.5);

	this.instance_10 = new lib.CachedTexturedBitmap_26();
	this.instance_10.parent = this;
	this.instance_10.setTransform(214,169.5,0.5,0.5);

	this.instance_11 = new lib.CachedTexturedBitmap_29();
	this.instance_11.parent = this;
	this.instance_11.setTransform(259,371.45,0.5,0.5);

	this.instance_12 = new lib.CachedTexturedBitmap_28();
	this.instance_12.parent = this;
	this.instance_12.setTransform(214,169.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},28).to({state:[{t:this.instance_4},{t:this.instance_3}]},3).to({state:[{t:this.instance_6},{t:this.instance_5}]},27).to({state:[{t:this.instance_8},{t:this.instance_7}]},4).to({state:[{t:this.instance_10},{t:this.instance_9}]},26).to({state:[{t:this.instance_12},{t:this.instance_11}]},4).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(530,409.5,-111,38.5);
// library properties:
lib.properties = {
	id: 'EC8D5CEBC8AAF94694A3FC19D4580B1F',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index01_atlas_.png?1781144143212", id:"index01_atlas_"}
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
an.compositions['EC8D5CEBC8AAF94694A3FC19D4580B1F'] = {
	getStage: function() { return exportRoot.getStage(); },
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;