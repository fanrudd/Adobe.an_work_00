(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,700,500],[702,0,226,78],[702,80,178,79],[702,241,176,68],[702,311,173,65],[702,161,177,78],[0,502,700,53]]}
];


// symbols:



(lib._01bg = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._01logo = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._01menu1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._01menu2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._01menu3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._01menu4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._01under = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01menu3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.3897,2.3897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,413.4,155.4), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01menu2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.3897,2.3897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,420.6,162.5), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01menu1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.3897,2.3897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,425.4,188.8), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3.0695,3.0695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,693.7,239.4), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01menu4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.3897,2.3897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,423,186.4), null);


(lib.場景_1_圖層_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.instance = new lib._01under();
	this.instance.parent = this;
	this.instance.setTransform(0,930,2.7428,2.8301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_圖層_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib._01bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.7428,2.16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-961,-541,1922,1082);


(lib.場景_1_圖層_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_9
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(2382.6,132.1,1,1,0,0,0,346.9,119.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[2382.6,132.1,2338,110.6,2314.1,100.4,2271.6,82.2,2234.4,71.5,2189.8,58.7,2146.6,54.7,2098.6,50.2,2056.4,57,2042.2,59.3,2025,63.5,2014.5,66.2,1994.6,71.7,1929.4,89.7,1894.6,99.6,1839.5,115.4,1795.6,129.2,1756.5,141.4,1746.3,144.3,1718.2,152.5,1695.5,156.9,1676.8,160.4,1654.5,162.9,1637.1,164.8,1612.8,166.6,1541.3,171.5,1486.1,167.7,1418,163.1,1366.4,145.1,1352,140.1,1340.9,134.5]}},32).wait(41));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_圖層_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_7
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(2554.5,836.2,1,1,0,0,0,211.5,93.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({x:2458.55},0).wait(1).to({x:2362.6},0).wait(1).to({x:2266.7},0).wait(1).to({x:2170.75},0).wait(1).to({x:2074.85},0).wait(1).to({x:1978.9},0).wait(1).to({x:1883},0).wait(1).to({x:1787.05},0).wait(1).to({x:1691.15},0).wait(1).to({x:1595.2},0).wait(1).to({x:1499.3},0).wait(23));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_圖層_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_6
	this.instance = new lib._01menu3();
	this.instance.parent = this;
	this.instance.setTransform(2520,588,2.3897,2.3897);

	this.instance_1 = new lib.元件7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2726.7,665.7,1,1,0,0,0,206.7,77.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(1).to({x:2591.05,y:665.65},0).wait(1).to({x:2455.4,y:665.6},0).wait(1).to({x:2319.75,y:665.55},0).wait(1).to({x:2184.1},0).wait(1).to({x:2048.5,y:665.5},0).wait(1).to({x:1912.85,y:665.45},0).wait(1).to({x:1777.2},0).wait(1).to({x:1641.55,y:665.4},0).wait(1).to({x:1505.9,y:665.35},0).wait(1).to({x:1370.3},0).wait(34));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_圖層_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_5
	this.instance = new lib._01menu2();
	this.instance.parent = this;
	this.instance.setTransform(2304,427,2.3897,2.3897);

	this.instance_1 = new lib.元件6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2514.3,508.2,1,1,0,0,0,210.3,81.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({regY:81.3,x:2412.9,y:508.3},0).wait(1).to({x:2311.5},0).wait(1).to({x:2210.15},0).wait(1).to({x:2108.75},0).wait(1).to({x:2007.4},0).wait(1).to({x:1906},0).wait(1).to({x:1804.6},0).wait(1).to({x:1703.25},0).wait(1).to({x:1601.85},0).wait(1).to({x:1500.5},0).wait(44));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_圖層_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_4
	this.instance = new lib.元件5();
	this.instance.parent = this;
	this.instance.setTransform(2654.7,332.4,1,1,0,0,0,212.7,94.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({x:2526.85},0).wait(1).to({x:2399},0).wait(1).to({x:2271.15,y:332.45},0).wait(1).to({x:2143.3},0).wait(1).to({x:2015.5,y:332.5},0).wait(1).to({x:1887.65},0).wait(1).to({x:1759.8},0).wait(1).to({x:1631.95,y:332.55},0).wait(1).to({x:1504.1},0).wait(1).to({x:1376.3,y:332.6},0).wait(54));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_72 = function() {
		this.___loopingOver___ = true;
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(949.05,538.9,1.0375,1.0375,0,0,0,0.5,0.5);
	this.___camera___instance.depth = 31.9;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({scaleX:0.7017,scaleY:0.7017,x:949,y:538.85},22).to({regX:0.6,x:1280.65,y:361.85},13).to({regX:0.8,regY:0.7,scaleX:1.0855,scaleY:1.0855,x:957.4,y:541.15},12).to({scaleX:1.0417,scaleY:1.0417,x:957.35,y:541.1},12).wait(14));

	// 圖層_9_obj_
	this.圖層_9 = new lib.場景_1_圖層_9();
	this.圖層_9.name = "圖層_9";
	this.圖層_9.parent = this;
	this.圖層_9.setTransform(2382.6,132.1,1,1,0,0,0,2382.6,132.1);
	this.圖層_9.depth = 0;
	this.圖層_9.isAttachedToCamera = 0
	this.圖層_9.isAttachedToMask = 0
	this.圖層_9.layerDepth = 0
	this.圖層_9.layerIndex = 0
	this.圖層_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.圖層_9).wait(73));

	// 圖層_7_obj_
	this.圖層_7 = new lib.場景_1_圖層_7();
	this.圖層_7.name = "圖層_7";
	this.圖層_7.parent = this;
	this.圖層_7.setTransform(2554.5,836.2,1,1,0,0,0,2554.5,836.2);
	this.圖層_7.depth = 0;
	this.圖層_7.isAttachedToCamera = 0
	this.圖層_7.isAttachedToMask = 0
	this.圖層_7.layerDepth = 0
	this.圖層_7.layerIndex = 1
	this.圖層_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.圖層_7).wait(40).to({regX:2026.9,x:2026.9},0).wait(33));

	// 圖層_6_obj_
	this.圖層_6 = new lib.場景_1_圖層_6();
	this.圖層_6.name = "圖層_6";
	this.圖層_6.parent = this;
	this.圖層_6.setTransform(2726.7,665.6,1,1,0,0,0,2726.7,665.6);
	this.圖層_6.depth = 0;
	this.圖層_6.isAttachedToCamera = 0
	this.圖層_6.isAttachedToMask = 0
	this.圖層_6.layerDepth = 0
	this.圖層_6.layerIndex = 2
	this.圖層_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.圖層_6).wait(30).to({regX:2048.5,regY:665.5,x:2048.5,y:665.5},0).wait(43));

	// 圖層_5_obj_
	this.圖層_5 = new lib.場景_1_圖層_5();
	this.圖層_5.name = "圖層_5";
	this.圖層_5.parent = this;
	this.圖層_5.setTransform(2514.3,508.2,1,1,0,0,0,2514.3,508.2);
	this.圖層_5.depth = 0;
	this.圖層_5.isAttachedToCamera = 0
	this.圖層_5.isAttachedToMask = 0
	this.圖層_5.layerDepth = 0
	this.圖層_5.layerIndex = 3
	this.圖層_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.圖層_5).wait(20).to({regX:2007.4,regY:508.3,x:2007.4,y:508.3},0).wait(53));

	// 圖層_4_obj_
	this.圖層_4 = new lib.場景_1_圖層_4();
	this.圖層_4.name = "圖層_4";
	this.圖層_4.parent = this;
	this.圖層_4.setTransform(2654.7,332.4,1,1,0,0,0,2654.7,332.4);
	this.圖層_4.depth = 0;
	this.圖層_4.isAttachedToCamera = 0
	this.圖層_4.isAttachedToMask = 0
	this.圖層_4.layerDepth = 0
	this.圖層_4.layerIndex = 4
	this.圖層_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.圖層_4).wait(10).to({regX:2015.5,regY:332.5,x:2015.5,y:332.5},0).wait(63));

	// 圖層_3_obj_
	this.圖層_3 = new lib.場景_1_圖層_3();
	this.圖層_3.name = "圖層_3";
	this.圖層_3.parent = this;
	this.圖層_3.setTransform(960,1005,1,1,0,0,0,960,1005);
	this.圖層_3.depth = 0;
	this.圖層_3.isAttachedToCamera = 0
	this.圖層_3.isAttachedToMask = 0
	this.圖層_3.layerDepth = 0
	this.圖層_3.layerIndex = 5
	this.圖層_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.圖層_3).wait(73));

	// 圖層_2_obj_
	this.圖層_2 = new lib.場景_1_圖層_2();
	this.圖層_2.name = "圖層_2";
	this.圖層_2.parent = this;
	this.圖層_2.setTransform(960,540,1,1,0,0,0,960,540);
	this.圖層_2.depth = 0;
	this.圖層_2.isAttachedToCamera = 0
	this.圖層_2.isAttachedToMask = 0
	this.圖層_2.layerDepth = 0
	this.圖層_2.layerIndex = 6
	this.圖層_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.圖層_2).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(873.4,473.5,2060,654.2);
// library properties:
lib.properties = {
	id: '25923479764B6345A658A83F29613DE1',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['25923479764B6345A658A83F29613DE1'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;