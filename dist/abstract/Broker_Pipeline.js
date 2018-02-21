(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,10);// helper functions:

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


(lib.gfxElement3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B202B").s().p("AxjPwIAA/fMAjHAAAIAAffg");
	this.shape.setTransform(118.6,107.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(6.2,6.8,224.8,201.5), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsvDXIAAmtIBKBSIYVAAIAAFbg");
	mask.setTransform(85.5,25.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5637FB").s().p("AtWD9IAAn5IatAAIAAH5g");
	this.shape.setTransform(85.5,25.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(3.9,3.8,163.3,43), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F8FA").s().p("A3vPEIAA+HMAvfAAAIAAeHg");
	this.shape.setTransform(157.1,100.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(5.2,4.4,303.9,192.9), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E3540").s().p("AxjQvMAAAghdMAjHAAAMAAAAhdg");
	this.shape.setTransform(118.7,113.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(6.4,6.8,224.8,214.2), null);


(lib.mcElement3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.gfxElement3("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(126.8,66.2,1,1,0,0,0,126.8,66.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.gfxElement5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARTWORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A4B6CB").ss(0.2).p("AxjAAMAjHAAA");
	this.shape.setTransform(112.4,167.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AgHAjIgGgCQgDgCgCgDQgCgDAAgEIAIAAIACAEIADACIAEACIADAAIAHgBQADgCABgCIAEgGIAAgIIAAgDQgCAFgEACQgFACgEAAQgFAAgEgCQgFgCgDgEIgDgIQgCgDAAgFIABgKIAEgIQADgEAEgDQAFgCAFAAQAFAAAEACQAEACACAEIAAgHIAIAAIAAAtQAAANgFAFQgHAHgLAAIgHgBgAgFgaIgFAEIgDAGIgBAHIABAHQABACACACQABAEADABQADACADAAQAEAAADgCIAEgFIADgEIABgHIgBgHQgBgEgCgCQgBgCgDgCQgDgCgDABQgDgBgDACg");
	this.shape_1.setTransform(209.2,187.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AANAaIAAghQAAgFgDgDQgDgCgEAAIgGABIgFADIgCAFIgBAGIAAAcIgJAAIAAgxIAIAAIAAAIQAGgKAKAAQAFAAADACQADABACADQACACABADIABAIIAAAgg");
	this.shape_2.setTransform(203.9,186.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AgDAjIAAgyIAHAAIAAAygAgDgYIAAgKIAHAAIAAAKg");
	this.shape_3.setTransform(200.1,185.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AgMAaIAAgxIAHAAIAAAKIABAAQADgGADgDQAEgDAHAAIAAAJQgFAAgDACQgEABgBADIgDAGIgBAHIAAAXg");
	this.shape_4.setTransform(197.8,186.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgKAZQgEgCgCgDIgDgFIgBgHIAAghIAJAAIAAAhQAAAFACADQADACAFAAQADABACgCIAFgDIADgFIABgHIAAgbIAIAAIAAAyIgIAAIAAgIQgDAEgEADQgEACgEAAIgIgBg");
	this.shape_5.setTransform(193.2,186.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A1A1A").s().p("AgJAYQgFgCgDgDQgDgEgCgEQgBgFAAgGQAAgEABgFQACgFADgDIAIgGQAEgCAFAAQAGAAAFACQAEACADAEQADADACAFQABAFAAAEQAAAGgBAFQgCAEgDAEQgDADgEACQgFACgGAAQgFAAgEgCgAgFgRIgFAEQgCADgBADQgCAEAAADQAAAFACADQABAEACACQACADADABQADABACAAIAGgBQADgBACgDIADgGQACgDAAgFQAAgDgCgEIgDgGIgFgEIgGgBIgFABg");
	this.shape_6.setTransform(187.7,186.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AgDAjIAAg9IgYAAIAAgIIA3AAIAAAIIgXAAIAAA9g");
	this.shape_7.setTransform(183.3,185.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D7C8E").s().p("AgJAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFACgEQABgFADgEQAEgDAEgCQAEgCAEAAQAHAAAEADQAFACACAFQADAEABAFIABAJIglAAIABAGIADAFIAFAEQADABADAAQAFAAAEgCQADgDABgFIAIAAQgBAJgGAEQgGAEgIAAQgFAAgFgCgAgFgRQgDABgBACIgDAFIgCAFIAcAAQAAgDgBgCIgDgFIgEgDIgGgBIgFABg");
	this.shape_8.setTransform(59.4,186.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D7C8E").s().p("AgHAjIgGgCQgDgCgCgDQgCgDAAgEIAIAAIABAEIAEACIAEACIADAAIAHgBQADgCACgCIADgGIAAgIIAAgDQgCAFgFACQgEACgEAAQgFAAgFgCQgDgCgEgEIgDgIQgCgDAAgFIABgKIAEgIQADgEAEgDQAEgCAGAAQAFAAAEACQAEACACAEIAAgHIAIAAIAAAtQAAANgGAFQgFAHgMAAIgHgBgAgFgaIgFAEIgCAGIgBAHIABAHQAAACACACQACAEACABQADACADAAQAEAAADgCIAFgFIACgEIABgHIgBgHQgBgEgBgCQgCgCgDgCQgDgCgEABQgDgBgCACg");
	this.shape_9.setTransform(53.8,187.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D7C8E").s().p("AAMAZQgCgCAAgEQgDAEgEACQgDABgGAAIgGAAIgGgDIgDgEQgCgDAAgEQAAgEACgDIAEgEIAFgCIAGgBIAGgBIAGgBIADgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgFIgCgCIgEgCIgDAAQgFAAgDACQgEACAAAGIgIAAQAAgFACgDQABgDADgCIAGgDIAIgBIAHAAIAFACIAFAFQACACgBAFIAAAYIABAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADAAIAAAGIgHABQgCAAgDgBgAAGABIgFABIgEABIgFABIgEADQgCACAAADIABADIACACIADACIAEAAQAEAAACgBIAFgDIACgEIABgDIAAgIIgEABg");
	this.shape_10.setTransform(48.7,186.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D7C8E").s().p("AAHAhIgFgBIgDgBIgCgEIgBgFIAAggIgIAAIAAgHIAIAAIAAgOIAHAAIAAAOIAKAAIAAAHIgKAAIAAAfIABACIABACIABAAIAEAAIADAAIAAAIg");
	this.shape_11.setTransform(44.3,185.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D7C8E").s().p("AgJAjQgGgCgDgDQgFgDgBgEQgDgFAAgGIAJAAQAAAEACADQABAEADACIAGADIAHABIAGgBIAGgCIAEgEQABgCABgEQAAgEgCgCQgCgCgDgBIgIgDIgHgCIgIgCIgHgCIgFgFQgCgDAAgFQAAgFACgEQACgEAEgCQADgDAFgBQAEgBAFAAQAFAAAEABQAFABADADQADADACAEQACAEABAGIgJAAQgBgIgEgDQgFgDgGAAIgGAAIgFACQgCABgBADIgBAFQAAAEABACQACACAEABIAGACIAHACIAIACQAFABADACQADACACADQACAEAAAFQAAAFgCAEQgDAEgEADQgEACgEABIgKABIgKgBg");
	this.shape_12.setTransform(39.8,185.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D7C8E").s().p("AgDAjIAAhFIAHAAIAABFg");
	this.shape_13.setTransform(32.9,185.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D7C8E").s().p("AANAZQgCgCAAgEQgDAEgFACQgDABgGAAIgHAAIgEgDIgEgEQgBgDgBgEQABgEABgDIAEgEIAFgCIAHgBIAFgBIAFgBIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgFIgEgCIgDgCIgDAAQgFAAgDACQgEACgBAGIgIAAQAAgFACgDQACgDADgCIAHgDIAHgBIAGAAIAHACIAEAFQACACAAAFIAAAYIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIACAAIAAAGIgFABQgEAAgBgBgAAGABIgFABIgFABIgEABIgFADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAEgDIAEgEIAAgDIAAgIIgEABg");
	this.shape_14.setTransform(29.4,186.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D7C8E").s().p("AgJAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFACgEQABgFADgEQAEgDAEgCQAEgCAEAAQAHAAAEADQAFACACAFQADAEABAFIABAJIglAAIABAGIADAFIAFAEQADABADAAQAFAAAEgCQADgDABgFIAIAAQgBAJgGAEQgGAEgIAAQgFAAgFgCgAgFgRQgDABgBACIgDAFIgCAFIAcAAQAAgDgBgCIgDgFIgEgDIgGgBIgFABg");
	this.shape_15.setTransform(24.1,186.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D7C8E").s().p("AgcAjIAAhFIAZAAQAOAAAJAIQAJAJgBAQQAAAIgCAGQgCAIgDAEQgFAFgGACQgGACgHABgAgSAbIAPAAIADAAIAFgBIAFgEIAFgEQACgDABgFQABgEAAgGQAAgGgBgEQgBgGgDgDQgDgDgEgCQgFgCgEAAIgQAAg");
	this.shape_16.setTransform(18.3,185.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A4B6CB").ss(0.2).p("AxjAAMAjHAAA");
	this.shape_17.setTransform(112.4,131.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1A1A1A").s().p("AAKAZIgKgnIgJAnIgJAAIgQgxIAJAAIALAoIABAAIAKgoIAIAAIAKAoIAMgoIAIAAIgQAxg");
	this.shape_18.setTransform(208.6,149.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1A1A1A").s().p("AgJAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFACgEQABgFADgEQAEgDAEgCQAEgCAEAAQAHAAAEADQAFACACAFQADAEABAFIABAJIglAAIABAGIADAFIAFAEQADABADAAQAFAAAEgCQADgDABgFIAIAAQgBAJgGAEQgGAEgIAAQgFAAgFgCgAgFgRQgDABgBACIgDAFIgCAFIAcAAQAAgDgBgCIgDgFIgEgDIgGgBIgFABg");
	this.shape_19.setTransform(202.4,149.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1A1A1A").s().p("AASAiIgkg2IAAAAIAAA2IgJAAIAAhDIAKAAIAkA3IAAg3IAIAAIAABDg");
	this.shape_20.setTransform(196.3,148.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6D7C8E").s().p("AgJAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFACgEQABgFADgEQAEgDAEgCQAEgCAEAAQAHAAAEADQAFACACAFQADAEABAFIABAJIglAAIABAGIADAFIAFAEQADABADAAQAFAAAEgCQADgDABgFIAIAAQgBAJgGAEQgGAEgIAAQgFAAgFgCgAgFgRQgDABgBACIgDAFIgCAFIAcAAQAAgDgBgCIgDgFIgEgDIgGgBIgFABg");
	this.shape_21.setTransform(54.4,149.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D7C8E").s().p("AgXAjIAAhEIAIAAIAAAHIABAAQACgEAEgCQAEgCAFAAQAGAAAEACQAEACADAEQADADABAFQACAFAAAFQAAAGgCADQgBAFgDAEQgDADgEACQgEACgGAAIgDAAIgFgBIgEgDIgDgDIgBAAIAAAZgAgHgZIgEAEQgCADgBADIgBAHIABAHQABADACACIAFAFQADABADAAQAEAAADgCQADgBACgDQACgDAAgCIABgHIgBgHIgDgGIgFgEQgCgCgEAAQgEAAgDACg");
	this.shape_22.setTransform(49,150.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D7C8E").s().p("AgPAjIgDgBIAAgIIADABIACABQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgIIgTgxIAJAAIANAoIABAAIAOgoIAIAAIgVA3IgCAHIgDAEIgEADIgFAAg");
	this.shape_23.setTransform(43.5,150.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6D7C8E").s().p("AgDAiIAAg8IgYAAIAAgHIA3AAIAAAHIgXAAIAAA8g");
	this.shape_24.setTransform(39.4,148.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6D7C8E").s().p("AgDAiIAAhDIAHAAIAABDg");
	this.shape_25.setTransform(32.9,148.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D7C8E").s().p("AANAZQgCgCAAgEQgDAEgFACQgDABgGAAIgHAAIgEgDQgDgCgBgCQgBgDgBgEQABgEABgDIAEgEIAFgCIAHgBIAFgBIAFgBIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgFIgEgCIgDgCIgDAAQgFAAgDACQgEACgBAGIgIAAQAAgFACgDQACgDADgCIAHgDIAHgBIAGAAIAHACIAEAFQACACAAAFIAAAYIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIACAAIAAAGIgFABQgEAAgBgBgAAGABIgFABIgFABIgEABIgFADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAEgDIAEgEIAAgDIAAgIIgEABg");
	this.shape_26.setTransform(29.4,149.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6D7C8E").s().p("AgJAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFACgEQABgFADgEQAEgDAEgCQAEgCAEAAQAHAAAEADQAFACACAFQADAEABAFIABAJIglAAIABAGIADAFIAFAEQADABADAAQAFAAAEgCQADgDABgFIAIAAQgBAJgGAEQgGAEgIAAQgFAAgFgCgAgFgRQgDABgBACIgDAFIgCAFIAcAAQAAgDgBgCIgDgFIgEgDIgGgBIgFABg");
	this.shape_27.setTransform(24.1,149.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6D7C8E").s().p("AgcAiIAAhDIAZAAQAOAAAJAHQAJAIgBARQAAAIgCAHQgCAGgDAFQgFAEgGADQgGADgHgBgAgSAaIAPAAIADAAIAFgBIAFgCIAFgFQACgDABgEQABgFAAgGQAAgGgBgFQgBgEgDgEQgDgEgEgBQgFgCgEAAIgQAAg");
	this.shape_28.setTransform(18.3,148.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A4B6CB").ss(0.2).p("AxjAAMAjHAAA");
	this.shape_29.setTransform(112.4,95.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D7C8E").s().p("AgVAkIAjgkIgjgjIAEgEIAnAnIgBABIgmAng");
	this.shape_30.setTransform(211.6,112.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1A1A1A").s().p("AgIAiQgEgCgCgDIgFgFIgCgIIgBgIIAAgIIAAgHIABgIIACgHIAFgGQACgCAEgCQADgCAFAAQAGAAADACQAEACACACIAFAGIABAHIABAIIABAHIgBAIIgBAIIgBAIIgFAFQgCADgEACQgDABgGAAQgFAAgDgBgAgFgZQgDABgBACIgDAGIgBAGIAAAFIAAAFIAAAJIABAJQACAEADADQACADAFAAQAFAAADgDQADgDABgEIACgJIAAgJIAAgFIgBgFIgBgGIgCgGQgCgCgCgBQgDgCgDABQgCgBgDACg");
	this.shape_31.setTransform(200.4,112.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1A1A1A").s().p("AgIAiQgEgCgDgDIgDgFIgCgIIgBgIIgBgIIABgHIABgIIACgHIADgGQADgCAEgCQADgCAFAAQAFAAAEACQAEACADACIADAGIADAHIABAIIAAAHIAAAIIgBAIIgDAIIgDAFQgDADgEACQgEABgFAAQgFAAgDgBgAgFgZQgCABgCACIgCAGIgBAGIgBAFIAAAFIAAAJIACAJQABAEADADQACADAFAAQAFAAADgDQADgDACgEIABgJIAAgJIAAgFIAAgFIgBgGIgDgGQgBgCgDgBQgDgCgDABQgDgBgCACg");
	this.shape_32.setTransform(195,112.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1A1A1A").s().p("AgOAeQgGgDgBgJIAJAAQAAAEADADQAEADAFAAQAGAAAEgHQAEgGABgOIAAAAQgDAEgEADQgFADgEgBQgEABgFgCQgEgCgDgDQgDgDgBgDIgBgJQAAgGACgDQABgFADgCQADgDAEgCQAEgCAFAAIAIABQAFACADAEQADAEACAGQACAHAAAJQAAARgGAKQgGAJgLAAQgJAAgFgFgAgGgZQgDABgBACIgDAGIAAAGIABAFIADAFIADACQADABADAAQADAAACgBIAEgCIADgFIABgGIgBgGIgDgFIgEgDQgCgCgDABQgEgBgCACg");
	this.shape_33.setTransform(189.6,112.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1A1A1A").s().p("AgNAEIAAgHIAbAAIAAAHg");
	this.shape_34.setTransform(185.1,113.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1A1A1A").s().p("AgIAiQgEgCgCgDIgFgFIgCgIIgBgIIAAgIIAAgHIABgIIACgHIAFgGQACgCAEgCQADgCAFAAQAGAAADACQAEACACACIAFAGIABAHIABAIIABAHIgBAIIgBAIIgBAIIgFAFQgCADgEACQgDABgGAAQgFAAgDgBgAgFgZQgDABgBACIgDAGIgBAGIAAAFIAAAFIAAAJIABAJQACAEADADQACADAFAAQAFAAADgDQADgDACgEIABgJIAAgJIAAgFIgBgFIAAgGIgDgGQgCgCgCgBQgDgCgDABQgCgBgDACg");
	this.shape_35.setTransform(180.6,112.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1A1A1A").s().p("AgIAiQgEgCgDgDIgDgFIgCgIIgBgIIgBgIIABgHIABgIIACgHIADgGQADgCAEgCQADgCAFAAQAFAAAEACQAEACADACIADAGIADAHIABAIIAAAHIAAAIIgBAIIgDAIIgDAFQgDADgEACQgEABgFAAQgFAAgDgBgAgFgZQgCABgCACIgCAGIgBAGIgBAFIAAAFIAAAJIACAJQABAEADADQACADAFAAQAFAAADgDQADgDACgEIABgJIAAgJIAAgFIAAgFIgBgGIgDgGQgBgCgDgBQgDgCgDABQgDgBgCACg");
	this.shape_36.setTransform(175.2,112.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1A1A1A").s().p("AgIAiIgHgEQgEgCgCgEQgBgFAAgFQAAgGADgFQADgDAGgCQgFgCgCgEQgDgDAAgFQAAgFACgDQABgDADgCQADgDAEgBQAEgBADAAQAFAAAEABIAGAFQADACABADQABAEAAADQAAAFgCADQgDAEgEACQAGACADADQADAFAAAGQAAAFgCAEQgBAEgDACQgDADgFACQgEABgFAAIgIgBgAgFACIgEADIgEAEIgBAGQAAAGAFAEQAEADAFAAIAGgBIAFgDIACgEIABgFQAAgEgBgCIgDgEIgFgDIgFgBIgFABgAgEgaIgDACIgDAEIgBAEIABAFIADADIADACIAEABQAFAAAEgDQACgDAAgFQAAgFgCgDQgEgDgFABIgEAAg");
	this.shape_37.setTransform(169.9,112.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6D7C8E").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_38.setTransform(44.7,113.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6D7C8E").s().p("AgJAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFACgEQABgFADgEQAEgDAEgCQAEgCAEAAQAHAAAEADQAFACACAFQADAEABAFIABAJIglAAIABAGIADAFIAFAEQADABADAAQAFAAAEgCQADgDABgFIAIAAQgBAJgGAEQgGAEgIAAQgFAAgFgCgAgFgRQgDABgBACIgDAFIgCAFIAcAAQAAgDgBgCIgDgFIgEgDIgGgBIgFABg");
	this.shape_39.setTransform(39.7,113.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6D7C8E").s().p("AgIAYQgFgBgDgEQgDgDgBgFQgCgFAAgFQAAgFACgFQABgFADgDQADgEAFgCQAEgCAFAAIAIABQAEABADACIAEAFQACAEABAEIgJAAQgBgFgDgCQgDgDgFAAQgEAAgDACIgFAEIgCAGIgBAHIABAHIACAFIAFAFQADABADAAQAGAAADgDQAEgDAAgGIAJAAQgCAJgFAFQgGAFgJAAQgFAAgEgCg");
	this.shape_40.setTransform(34.5,113.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6D7C8E").s().p("AANAZQgCgCAAgEQgDAEgFACQgDABgGAAIgHAAIgEgDQgDgCgBgCQgBgDgBgEQABgEABgDIAEgEIAFgCIAHgBIAFgBIAFgBIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgFIgEgCIgDgCIgDAAQgFAAgDACQgEACgBAGIgIAAQAAgFACgDQACgDADgCIAHgDIAHgBIAGAAIAHACIAEAFQACACAAAFIAAAYIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIACAAIAAAGIgFABQgEAAgBgBgAAGABIgFABIgFABIgEABIgFADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAEgDIAEgEIAAgDIAAgIIgEABg");
	this.shape_41.setTransform(29.4,113.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6D7C8E").s().p("AgXAjIAAhEIAIAAIAAAHIABAAQACgEAEgCQAEgCAFAAQAGAAAEACQAEACADAEQADADABAFQACAFAAAFQAAAGgCADQgBAFgDAEQgDADgEACQgEACgGAAIgDAAIgFgBIgEgDIgDgDIgBAAIAAAZgAgHgZIgEAEQgCADgBADIgBAHIABAHQABADACACIAFAFQADABADAAQAEAAADgCQADgBACgDQACgDAAgCIABgHIgBgHIgDgGIgFgEQgCgCgEAAQgEAAgDACg");
	this.shape_42.setTransform(23.9,114.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6D7C8E").s().p("AgKAjQgFgCgEgDQgDgDgDgEQgCgFAAgGIAJAAQAAAEABADQACAEADACIAHADIAGABIAGgBIAGgCIAEgEQABgCAAgEQAAgEgCgCQgBgCgDgBIgHgDIgHgCIgJgCIgHgCIgFgFQgCgDAAgFQAAgFADgEQACgEADgCQADgDAFgBQAFgBAEAAQAEAAAFABQAFABADADQAEADACAEQACAEAAAGIgJAAQAAgIgGgDQgEgDgGAAIgGAAIgFACQgCABgBADIgCAFQABAEACACQABACADABIAHACIAIACIAIACQAEABADACQADACACADQACAEAAAFQAAAFgDAEQgCAEgEADQgEACgFABIgKABIgKgBg");
	this.shape_43.setTransform(17.8,112.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A4B6CB").ss(0.2).p("AxjAAMAjHAAA");
	this.shape_44.setTransform(112.4,61.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6D7C8E").s().p("AgVAkIAjgkIgjgjIAEgEIAnAnIgBABIgmAng");
	this.shape_45.setTransform(211.6,78.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1A1A1A").s().p("AgPAjIgDgBIAAgIIADABIACABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgIIgTgxIAJAAIANAoIABAAIAOgoIAIAAIgVA4IgCAGIgDAEIgEACIgFABg");
	this.shape_46.setTransform(200.5,80.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1A1A1A").s().p("AAMAZQgCgCAAgEQgCAEgFACQgEABgFAAIgHAAIgEgDIgEgEQgBgDgBgEQABgEABgDIAEgEIAFgCIAGgBIAGgBIAFgBIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgFIgDgCIgEgCIgDAAQgFAAgDACQgEACgBAGIgIAAQABgFACgDQABgDADgCIAHgDIAHgBIAHAAIAFACIAFAFQABACABAFIAAAYIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIACAAIAAAGIgFABQgDAAgDgBgAAGABIgFABIgFABIgEABIgFADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAFgDIADgEIAAgDIAAgIIgEABg");
	this.shape_47.setTransform(195.6,79.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1A1A1A").s().p("AAKAZIgKgnIgJAnIgJAAIgQgxIAJAAIALAoIABAAIAKgoIAIAAIAKAoIAMgoIAIAAIgQAxg");
	this.shape_48.setTransform(189.2,79.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1A1A1A").s().p("AgKAhQgEgCgDgEQgDgEgBgEIgCgKQAAgGACgEIAEgIQADgDAEgCQAEgCAGgBIADABIAFABIAEADIADADIABAAIAAgZIAIAAIAABEIgIAAIAAgHIgBAAQgCAEgEACQgEACgFAAQgGAAgEgCgAgGgIIgFAFIgCAFIgBAHIABAHIADAGQACADADABQADACADAAQAEAAADgCIAEgEQACgCABgEIABgHIgBgHQgBgDgCgCQgCgDgDgCQgDgBgEAAQgDAAgDABg");
	this.shape_49.setTransform(182.5,78.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1A1A1A").s().p("AANAZQgCgCAAgEQgEAEgEACQgDABgGAAIgHAAIgFgDIgDgEQgCgDABgEQgBgEACgDIAEgEIAFgCIAHgBIAFgBIAFgBIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgFIgEgCIgDgCIgDAAQgFAAgEACQgDACgBAGIgIAAQAAgFACgDQACgDADgCIAHgDIAHgBIAGAAIAHACIAEAFQACACAAAFIAAAYIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIACAAIAAAGIgGABQgDAAgBgBgAAGABIgFABIgFABIgFABIgEADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAEgDIAEgEIAAgDIAAgIIgEABg");
	this.shape_50.setTransform(177.3,79.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1A1A1A").s().p("AgJAYQgFgCgDgDQgDgEgCgEQgBgFAAgGQAAgEABgFQACgFADgDIAIgGQAEgCAFAAQAGAAAFACQAEACADAEQADADACAFQABAFAAAEQAAAGgBAFQgCAEgDAEQgDADgEACQgFACgGAAQgFAAgEgCgAgFgRIgFAEQgCADgBADQgCAEAAADQAAAFACADQABAEACACQACADADABQADABACAAIAGgBQADgBACgDIADgGQACgDAAgFQAAgDgCgEIgDgGIgFgEIgGgBIgFABg");
	this.shape_51.setTransform(171.8,79.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1A1A1A").s().p("AgMAaIAAgxIAHAAIAAAKIABAAQADgGADgDQAEgDAHAAIAAAJQgFAAgDACQgEABgBADIgDAGIgBAHIAAAXg");
	this.shape_52.setTransform(167.9,79.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1A1A1A").s().p("AgaAiIAAhDIAZAAIAEAAIAFAAIAFABIADABQAEACACAEQACADAAAFQAAAGgCAEQgDAEgFABIAAABQAHABADAEQADAEAAAGQAAAFgBADQgBAEgDADIgHAEQgEABgFAAgAgRAbIAWAAQAGgBAEgDQADgDAAgGQAAgDgBgCIgDgEIgFgCIgGAAIgUAAgAgRgEIARAAQAIAAAEgCQADgDAAgGIgBgGIgDgDQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgGgBIgRAAg");
	this.shape_53.setTransform(162.9,78.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1A1A1A").s().p("AgLAgQgEgDgDgFQgDgFgBgFIgBgMQABgGABgGQABgIADgEQADgGAFgCQAEgEAHAAQAJAAAEAFQAGAEAAAJIgIAAQAAgFgDgDQgDgDgFAAQgEABgEACQgDADgCADIgDAJIAAAIIAAABQADgFAFgCQAEgCAEAAQAFAAAEABQAEACADADQACADACAEQABAEAAAEIgBAIQgBAEgCADIgHAGQgFACgGAAQgIAAgEgDgAgFgBIgEACIgDAGIgBAGIABAFIADAGIAEACQADACADAAQADAAACgCQAEAAABgCIACgGIABgFIAAgGIgDgGIgEgCIgGgBIgGABg");
	this.shape_54.setTransform(154.1,78.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1A1A1A").s().p("AgIAiQgEgCgCgDIgFgFIgBgIIgBgIIgBgIIABgHIABgIIABgHIAFgGQACgDAEgBQADgCAFAAQAGAAADACQAEABADADIADAGIADAHIABAIIAAAHIAAAIIgBAIIgDAIIgDAFQgDADgEACQgDABgGAAQgFAAgDgBgAgFgZQgCABgCADIgCAEIgBAHIgBAGIAAAEIAAAJIACAJQABAEADADQACADAFAAQAFAAADgDQADgDACgEIABgJIAAgJIAAgEIAAgGIgBgHIgDgEQgBgDgDgBQgDgBgDgBQgCABgDABg");
	this.shape_55.setTransform(148.8,78.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1A1A1A").s().p("AgWAiIACgKQACgEADgEIAFgFIAHgFIAHgEIAGgEIADgFIABgGIgBgGIgDgDQgBgBAAAAQgBgBAAAAQAAAAgBgBQgBAAAAAAIgFgBQgDAAgCACQgDABgCACIgCAGIgBAGIgIAAQAAgFABgFQABgEADgDIAHgGQAFgBAEAAQAFgBAEACIAGAEQADACACAEQACAEAAAFQAAAEgCAEIgDAFIgGAFIgGAEIgGAEIgFAEIgFAFQgCACAAADIAiAAIAAAHg");
	this.shape_56.setTransform(143.2,78.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6D7C8E").s().p("AAHAgIgFAAIgDgCIgCgDIgBgGIAAgeIgIAAIAAgHIAIAAIAAgQIAHAAIAAAQIAKAAIAAAHIgKAAIAAAeIABACIABACIABAAIAEAAIADAAIAAAHg");
	this.shape_57.setTransform(37.2,79.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6D7C8E").s().p("AgJAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFACgEQABgFADgEQAEgDAEgCQAEgCAEAAQAHAAAEADQAFACACAFQADAEABAFIABAJIglAAIABAGIADAFIAFAEQADABADAAQAFAAAEgCQADgDABgFIAIAAQgBAJgGAEQgGAEgIAAQgFAAgFgCgAgFgRQgDABgBACIgDAFIgCAFIAcAAQAAgDgBgCIgDgFIgEgDIgGgBIgFABg");
	this.shape_58.setTransform(33.2,79.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6D7C8E").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_59.setTransform(28.1,79.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6D7C8E").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_60.setTransform(23.3,79.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6D7C8E").s().p("AAWAiIgIgVIgcAAIgIAVIgJAAIAbhDIAJAAIAbBDgAgLAGIAWAAIgLgfIAAAAg");
	this.shape_61.setTransform(17.8,78.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6D7C8E").s().p("AgVAkIAjgkIgjgjIAEgEIAnAnIgBABIgmAng");
	this.shape_62.setTransform(211.6,46.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1A1A1A").s().p("AgEAFIAAgKIAKAAIAAAKg");
	this.shape_63.setTransform(201.8,49.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1A1A1A").s().p("AgIAYQgFgBgDgEQgDgDgBgFQgCgFAAgFQAAgFACgFQABgFADgDQADgEAFgCQAEgCAFAAIAIABQAEABADACIAEAFQACAEABAEIgJAAQgBgFgDgCQgDgDgFAAQgEAAgDACIgFAEIgCAGIgBAHIABAHIACAFIAFAFQADABADAAQAGAAADgDQAEgDAAgGIAJAAQgCAJgFAFQgGAFgJAAQgFAAgEgCg");
	this.shape_64.setTransform(197.8,47.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1A1A1A").s().p("AANAaIAAghQAAgFgDgDQgDgCgEAAIgGABIgFADIgCAFIgBAGIAAAcIgJAAIAAgxIAIAAIAAAIQAGgKAKAAQAFAAADACQADABACADQACACABADIABAIIAAAgg");
	this.shape_65.setTransform(192.5,47.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1A1A1A").s().p("AgDAiIAAhDIAIAAIAABDg");
	this.shape_66.setTransform(188.6,46.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1A1A1A").s().p("AgXAjIAAhEIAIAAIAAAHIABAAQACgEAEgCQAEgCAFAAQAGAAAEACQAEACADAEQADADABAFQACAFAAAFQAAAGgCADQgBAFgDAEQgDADgEACQgEACgGAAIgDAAIgFgBIgEgDIgDgDIgBAAIAAAZgAgHgZIgEAEQgCADgBADIgBAHIABAHQABADACACIAFAFQADABADAAQAEAAADgCQADgBACgDQACgDAAgCIABgHIgBgHIgDgGIgFgEQgCgCgEAAQgEAAgDACg");
	this.shape_67.setTransform(182,48.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1A1A1A").s().p("AAMAZQgCgCAAgEQgDAEgEACQgDABgGAAIgGAAIgGgDIgDgEQgCgDAAgEQAAgEACgDIAEgEIAFgCIAGgBIAGgBIAGgBIADgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgFIgCgCIgEgCIgDAAQgFAAgDACQgEACAAAGIgIAAQAAgFACgDQABgDADgCIAGgDIAIgBIAHAAIAFACIAFAFQACACgBAFIAAAYIABAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADAAIAAAGIgHABQgCAAgDgBgAAGABIgFABIgEABIgFABIgEADQgCACAAADIABADIACACIADACIAEAAQAEAAACgBIAFgDIACgEIABgDIAAgIIgEABg");
	this.shape_68.setTransform(176.5,47.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1A1A1A").s().p("AANAaIAAghQAAgFgDgDQgDgCgEAAIgGABIgFADIgCAFIgBAGIAAAcIgJAAIAAgxIAIAAIAAAIQAGgKAKAAQAFAAADACQADABACADQACACABADIABAIIAAAgg");
	this.shape_69.setTransform(171.1,47.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1A1A1A").s().p("AgKAjQgEgCgFgDQgEgDgCgEQgCgFAAgGIAJAAQAAAEABADQACAEADACIAGADIAHABIAGgBIAGgCIAEgEQACgCgBgEQAAgEgCgCQgBgCgEgBIgGgDIgHgCIgIgCIgIgCIgFgFQgCgDAAgFQAAgFADgEQABgEAEgCQADgDAFgBQAFgBAEAAQAEAAAFABQAFABADADQAEADACAEQABAEABAGIgJAAQAAgIgGgDQgEgDgGAAIgGAAIgEACQgDABgCADIgBAFQAAAEADACQABACADABIAIACIAHACIAIACQAEABADACQADACACADQACAEAAAFQAAAFgDAEQgCAEgEADQgEACgFABIgKABIgKgBg");
	this.shape_70.setTransform(165.3,46.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6D7C8E").s().p("AAHAgIgFAAIgDgCIgCgDIgBgGIAAgeIgIAAIAAgHIAIAAIAAgQIAHAAIAAAQIAKAAIAAAHIgKAAIAAAeIABACIABABIABABIAEAAIADAAIAAAHg");
	this.shape_71.setTransform(41.6,46.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6D7C8E").s().p("AANAaIAAghQAAgFgDgDQgDgCgEAAIgGABIgFADIgCAFIgBAGIAAAcIgJAAIAAgxIAIAAIAAAIQAGgKAKAAQAFAAADACQADABACADQACACABADIABAIIAAAgg");
	this.shape_72.setTransform(37.5,47.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6D7C8E").s().p("AAMAZQgCgCAAgEQgDAEgEACQgEABgFAAIgHAAIgEgDIgEgEQgCgDAAgEQAAgEACgDIAEgEIAFgCIAGgBIAGgBIAGgBIADgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgFIgCgCIgEgCIgDAAQgFAAgDACQgEACgBAGIgHAAQAAgFACgDQABgDADgCIAGgDIAIgBIAHAAIAFACIAFAFQABACABAFIAAAYIAAAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADAAIAAAGIgGABQgEAAgCgBgAAGABIgFABIgFABIgEABIgFADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAFgDIACgEIABgDIAAgIIgEABg");
	this.shape_73.setTransform(32.4,47.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6D7C8E").s().p("AANAaIAAghQAAgFgDgDQgDgCgEAAIgGABIgFADIgCAFIgBAGIAAAcIgJAAIAAgxIAIAAIAAAIQAGgKAKAAQAFAAADACQADABACADQACACABADIABAIIAAAgg");
	this.shape_74.setTransform(27,47.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6D7C8E").s().p("AgJAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFACgEQABgFADgEQAEgDAEgCQAEgCAEAAQAHAAAEADQAFACACAFQADAEABAFIABAJIglAAIABAGIADAFIAFAEQADABADAAQAFAAAEgCQADgDABgFIAIAAQgBAJgGAEQgGAEgIAAQgFAAgFgCgAgFgRQgDABgBACIgDAFIgCAFIAcAAQAAgDgBgCIgDgFIgEgDIgGgBIgFABg");
	this.shape_75.setTransform(21.8,47.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6D7C8E").s().p("AgDAiIAAg8IgYAAIAAgHIA3AAIAAAHIgXAAIAAA8g");
	this.shape_76.setTransform(17.4,46.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgVAXQgKgKAAgNQAAgMAKgJQAJgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgJgJg");
	this.shape_77.setTransform(17,50.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AxiNRIAA6hMAjFAAAIAAahg");
	this.shape_78.setTransform(112.5,117.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_79.setTransform(140.3,15.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AASAjQgDgCAAgGQgFAGgGACQgGADgHAAIgJgBQgFgBgDgCQgDgDgCgEQgCgDAAgGQAAgHACgEIAFgGIAIgDIAJgBIAJgCIAIgCIAFgCQACgCAAgDQAAgEgCgCIgDgEIgGgCIgEgBQgIAAgFAEQgFACAAAJIgMAAQAAgHACgFQADgEAEgDQAEgEAGgBQAFgBAGAAIAJABQAFABAEACQAEACACAEQADAEAAAGIAAAkIAAAGQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAJQgDACgFAAQgFAAgDgDgAAJABIgIACIgHABIgHACQgEABgBADQgDACAAAFQAAADACACIADADIAEACIAGAAQAFAAAEgBIAHgEQACgDABgDIACgFIAAgLIgGABg");
	this.shape_80.setTransform(135.1,16.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgNAjQgGgCgFgGQgEgEgCgIQgCgHgBgIQAAgHADgHQACgHAFgFQAEgFAHgDQAGgDAGAAQAKAAAHAEQAGAEAEAHQAEAFABAIQACAHgBAGIg1AAQAAAFABAEQABAEADAEQADADAEABQAFACAFAAQAHABAFgEQAFgEABgGIAMAAQgCAMgIAGQgIAGgNAAQgIAAgGgDgAgIgZIgGAFIgEAHIgCAHIApAAIgCgIQgCgDgDgDQgCgDgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_81.setTransform(127.6,16.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAiAAQAWAAANAMQAMAMAAAYQAAALgCAKQgDAKgGAHQgGAGgJAEQgJADgMAAgAgbAnIAWAAIAFAAIAHgCIAIgEQADgCADgFQADgEACgHQACgGAAgJQAAgIgCgIQgCgHgEgFQgEgFgGgCQgGgDgIAAIgXAAg");
	this.shape_82.setTransform(119.1,15.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAPAkIgPg5IAAAAIgOA5IgNAAIgXhHIANAAIARA6IAAAAIAPg6IAMAAIAPA6IAAAAIAQg6IANAAIgXBHg");
	this.shape_83.setTransform(104.7,16.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgNAjQgGgCgFgGQgEgEgCgIQgCgHgBgIQAAgHADgHQACgHAFgFQAEgFAHgDQAGgDAGAAQAKAAAHAEQAGAEAEAHQAEAFABAIQACAHgBAGIg1AAIABAJQABAEADAEQADADAEABQAFACAFAAQAHABAFgEQAFgEABgGIAMAAQgCAMgIAGQgIAGgNAAQgIAAgGgDgAgIgZIgGAFIgEAHIgCAHIApAAIgCgIQgCgDgDgDQgCgDgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_84.setTransform(95.7,16.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAZAyIg0hPIAABPIgMAAIAAhjIAOAAIA0BQIAAhQIANAAIAABjg");
	this.shape_85.setTransform(86.9,15.5);

	this.instance = new lib.Path_9();
	this.instance.parent = this;
	this.instance.setTransform(112.4,100.7,1,1,0,0,0,118.5,107.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,233,211);


(lib.gfxElement4Banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARTWORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AAMAdIgBgHIgBgHQAAgEgDgDQgCgCgEAAIgMAAIAAAXIgMAAIAAg5IAdAAIAHABIAGAEIADAFIABAGQAAAFgCAEQgCADgFACIAEACIADACIAAAFIABAEIAAADIABAEIAAADIABAEgAgLgCIANAAQAEAAADgCQACgCAAgEQAAgEgCgCQgDgCgEAAIgNAAg");
	this.shape.setTransform(123,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgVAdIAAg5IAqAAIAAALIgdAAIAAAMIAaAAIAAAJIgaAAIAAAOIAeAAIAAALg");
	this.shape_1.setTransform(117.5,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgFAdIAAguIgRAAIAAgLIAtAAIAAALIgRAAIAAAug");
	this.shape_2.setTransform(112.4,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgIAdQgFgBgDgDQgDgCgCgEQgCgEAAgFIAMAAIABAEIADADIAEADIAEAAIADAAIAEgBIACgDQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgDgCIgGgCIgFgBIgGgCIgGgDIgDgEQgCgDAAgEQAAgEACgEIAEgFIAIgDIAHgBIAIABIAHADQADADACADQACAEAAAEIgMAAIgBgEIgCgDIgEgBIgDAAIgEAAIgCABIgCACIgBAEIABACIACACIAGACIAHACIAEABIAGACIAFAFQACACAAAGQAAAEgCADIgEAFQgDADgFACQgEABgFAAQgEAAgFgBg");
	this.shape_3.setTransform(107.4,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AAPAdIgFgNIgUAAIgFANIgMAAIAVg5IANAAIAVA5gAgHAGIAOAAIgHgTg");
	this.shape_4.setTransform(102.1,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgTAdIAAg5IAnAAIAAALIgbAAIAAANIAYAAIAAAJIgYAAIAAAYg");
	this.shape_5.setTransform(97.6,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgIAdQgFgBgCgDQgEgCgCgEQgCgEAAgFIAMAAIABAEIADADIAEADIAEAAIADAAIAEgBIACgDQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgDgCIgGgCIgFgBIgGgCIgGgDIgDgEQgCgDAAgEQAAgEACgEIAEgFIAIgDIAHgBIAIABIAHADQADADACADQACAEAAAEIgMAAIgBgEIgCgDIgEgBIgDAAIgEAAIgCABIgCACIgBAEIABACIACACIAGACIAHACIAEABIAGACIAFAFQACACAAAGQAAAEgCADIgEAFQgDADgFACQgEABgFAAQgEAAgFgBg");
	this.shape_6.setTransform(90.3,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgTAdIAAg5IAMAAIAAAuIAbAAIAAALg");
	this.shape_7.setTransform(85.6,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AAPAdIgEgNIgVAAIgEANIgNAAIAWg5IALAAIAWA5gAgGAGIANAAIgHgTg");
	this.shape_8.setTransform(80.3,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgVAdIAAg5IAqAAIAAALIgdAAIAAAMIAaAAIAAAJIgaAAIAAAOIAeAAIAAALg");
	this.shape_9.setTransform(75.1,25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgYAdIAAg5IAYAAQAFAAAFACQAEACAEADQADAEACAFQACAGAAAGQAAAGgBAFQgCAFgDAFQgDADgFACQgFADgGAAgAgMASIAMAAIAEgBIAEgDIAEgFIABgIIgBgHQgBgDgCgDQgCgDgDAAQgDgCgEAAIgJAAg");
	this.shape_10.setTransform(69.6,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgVAdIAAg5IAqAAIAAALIgdAAIAAAMIAaAAIAAAJIgaAAIAAAOIAeAAIAAALg");
	this.shape_11.setTransform(61.9,25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgIAdQgEgBgDgDQgEgCgCgEQgCgEAAgFIAMAAIABAEIADADIAEADIADAAIAFAAIADgBIADgDQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgFgCIgFgCIgFgBIgHgCIgFgDIgEgEQgBgDAAgEQAAgEABgEIAGgFIAGgDIAIgBIAIABIAHADQAEADABADQACAEAAAEIgMAAIgBgEIgDgDIgDgBIgEAAIgCAAIgDABIgCACIgBAEIAAACIADACIAFACIAIACIAFABIAFACIAFAFQACACAAAGQAAAEgBADIgFAFQgDADgEACQgFABgGAAQgEAAgEgBg");
	this.shape_12.setTransform(56.6,25.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgKAcQgGgDgDgEQgEgEgCgFQgCgGAAgGQAAgFACgGQACgFAEgFQADgDAGgDQAEgCAGAAQAHAAAFACQAFADAEADQADAFACAFQACAGAAAFQAAAGgCAGQgCAFgDAEQgEAEgFADQgFACgHAAQgGAAgEgCgAgGgRIgFAFIgDAGIgBAGIABAHIADAGIAFAEQADADADAAQAFAAADgDQADgBABgDIADgGIABgHIgBgGIgDgGIgEgFQgDgCgFAAQgDAAgDACg");
	this.shape_13.setTransform(50.9,25.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgTAdIAAg5IAMAAIAAAuIAbAAIAAALg");
	this.shape_14.setTransform(45.7,25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgJAcQgGgDgDgEQgEgEgCgFQgCgGAAgGQAAgFACgGQACgFAEgFQADgDAGgDQAFgCAFAAQAFAAAEABQAFACADADQADACACAEQACADABAFIgMAAIgCgDIgCgDIgEgDIgFgBQgDAAgDACIgFAFIgCAGIgBAGIABAHIACAGIAFAEQADADADAAQAGAAADgEQAEgDAAgHIANAAIgDAKQgCAEgDADQgEADgEACQgEACgGAAQgFAAgFgCg");
	this.shape_15.setTransform(40.2,25.2);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(81.7,21.5,1,1,0,0,0,85.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.8,171,50.7);


(lib.gfxElement2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARTWORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape.setTransform(282,17.3);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(269.4,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7BEC7").s().p("AAAAKQgDAAgCgCQgDgDAAgFQAAgDADgDQACgDADAAIAEABIADACIABAEIABADIgNAAIABAFQAAAAABABQAAAAAAAAQABABABAAQAAAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAIABgCIADAAIgBACIgBACIgEACIgCAAgAAFAAIgBgEQgBgCgDAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIAJAAIAAAAg");
	this.shape_1.setTransform(289.9,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7BEC7").s().p("AgBANIAAgZIADAAIAAAZg");
	this.shape_2.setTransform(288.5,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B7BEC7").s().p("AgCAMIgDgCIAAADIgDAAIAAgZIAEAAIAAAJIADgCIACgBQADAAADADQACACAAAEQAAAEgCADQgDADgDABIgDgCgAgCgBQgDABAAADIABAFQABACADAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQACgCAAgDQAAgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_3.setTransform(287.1,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7BEC7").s().p("AAHAKQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIAAgCIgDACIgDABQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAFgBIAEgBIACgBIAAgBIgBgDIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBACIgDAAQAAgDACgCQACgBADAAQADAAACABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIAAAKIAAABIABABIAAAAIABgBIAAADIgBAAgAgBABIgCABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIABACIADABIACgBQADgBAAgDIAAgDIgCABIgCAAg");
	this.shape_4.setTransform(285,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7BEC7").s().p("AAAANIAAgZIABAAIAAAZg");
	this.shape_5.setTransform(283.6,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7BEC7").s().p("AAAANIAAgSIABAAIAAASgAAAgJIAAgDIABAAIAAADg");
	this.shape_6.setTransform(282.8,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7BEC7").s().p("AAHAKQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIAAgCIgDACIgDABQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAFgBIAEgBIACgBIAAgBIgBgDIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBACIgDAAQAAgDACgCQACgBADAAQADAAACABQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAKIAAABIABABIAAAAIABgBIAAADIgBAAgAgBABIgCABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIABACIADABIACgBQADgBAAgDIAAgDIgCABIgCAAg");
	this.shape_7.setTransform(281.4,13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7BEC7").s().p("AgBAKIgHgTIAEAAIAEAPIAFgPIAEAAIgHATg");
	this.shape_8.setTransform(279.4,13.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7BEC7").s().p("AAIANIgDgIIgKAAIgCAIIgEAAIAKgZIADAAIAKAZgAAEACIgEgKIgEAKIAIAAg");
	this.shape_9.setTransform(277.3,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_10.setTransform(253.4,17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#889AB2").s().p("AgOAsQgGAAAAgGIAAhLQAAgGAGAAIAdAAQAGAAAAAGIAABLQAAAGgGAAg");
	this.shape_11.setTransform(243.1,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B7BEC7").s().p("AAAALIgBgDIAAgLIgDAAIAAgDIADAAIAAgGIACAAIAAAGIADAAIAAADIgDAAIAAALIABACIABAAIABAAIAAAAIAAACIgBAAIgBABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_12.setTransform(258.2,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B7BEC7").s().p("AAFAKIAAgLIgBgDQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgBABIgCABIgBACIgBACIAAAKIgDAAIAAgTIADAAIAAAEIADgDIADgBQAEAAABADIABAEIAAAMg");
	this.shape_13.setTransform(256.6,13.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B7BEC7").s().p("AAHAKQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIAAgCIgDACIgDABQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAFgBIAEgBIACgBIAAgBIgBgDIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBACIgDAAQAAgDACgCQACgBADAAQADAAACABQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAKIAAABIABABIAAAAIABgBIAAADIgBAAgAgBABIgCABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIABACIADABIACgBQADgBAAgDIAAgDIgCABIgCAAg");
	this.shape_14.setTransform(254.6,13.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B7BEC7").s().p("AgFAIQgCgDAAgEQAAgEACgDQADgDADAAQADAAACABQACACAAAEIgDAAIgBgDIgDgBQgDAAgBADIgBAEQAAADACACQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIABgDIADAAQAAAEgCACQgCABgEAAQgDAAgCgCg");
	this.shape_15.setTransform(252.6,13.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B7BEC7").s().p("AAHAKQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIAAgCIgDACIgDABQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAFgBIAEgBIACgBIAAgBIgBgDIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBACIgDAAQAAgDACgCQACgBADAAQADAAACABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIAAAKIAAABIABABIAAAAIABgBIAAADIgBAAgAgBABIgCABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIABACIADABIACgBQADgBAAgDIAAgDIgCABIgCAAg");
	this.shape_16.setTransform(250.7,13.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B7BEC7").s().p("AgBANIgKgZIAFAAIAGAVIAHgVIAFAAIgKAZg");
	this.shape_17.setTransform(248.8,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_18.setTransform(224.9,17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4CC49A").s().p("AgOAsQgGAAAAgGIAAhLQAAgGAGAAIAdAAQAGAAAAAGIAABLQAAAGgGAAg");
	this.shape_19.setTransform(214.5,15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B7BEC7").s().p("AgBAJIAAgIIgHAAIAAgBIAHAAIAAgIIADAAIAAAIIAIAAIAAABIgIAAIAAAIg");
	this.shape_20.setTransform(228.3,13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B7BEC7").s().p("AACANIAAgGIgKAAIAAgEIALgPIACAAIAAAQIAEAAIAAADIgEAAIAAAGgAgFAEIAHAAIAAgLg");
	this.shape_21.setTransform(226.1,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B7BEC7").s().p("AgIANIABgGQACgDADgCIACgCIAEAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACIgBAFIgDAAIABgGQACgEAEAAQAFAAACADQACACAAADQAAADgCABIgFADIgCACIgCACIgCADIANAAIAAADg");
	this.shape_22.setTransform(224.1,13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDABgDQACgGAFAAQAFAAADAEQABADAAAFQAAAFgBAEQgDAEgFAAQgEAAgCgEgAgDgGQgBACAAAEIABAHQABADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCABgGIgBgGQgBgDgEAAQgCAAgBADg");
	this.shape_23.setTransform(222,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B7BEC7").s().p("AgIANIACgGQAAgDAEgCIACgCIAEAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBABAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACIgBAFIgDAAIABgGQACgEAEAAQAFAAACADQACACAAADQAAADgCABIgEADIgDACIgCACIgCADIANAAIAAADg");
	this.shape_24.setTransform(220,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_25.setTransform(196.3,17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#84E4B6").s().p("AgOAsQgGAAAAgGIAAhLQAAgGAGAAIAeAAQAFAAAAAGIAABLQAAAGgFAAg");
	this.shape_26.setTransform(186,15.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B7BEC7").s().p("AgGALQgCgDAAgDIADAAIABADQABACADAAIAEgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgEgBIAAAAIgBAAIAAgCIABAAIAAAAIACgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgDgBQAAAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABIAAADIgEAAIABgFQADgDAEAAQADAAADACQACABAAAEQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIgDABIAEABIABAEQAAAEgCACQgDACgEAAQgEAAgCgCg");
	this.shape_27.setTransform(197.5,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B7BEC7").s().p("AgIANIABgGQABgDAEgCIACgCIAEAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACIgBAFIgDAAIABgGQACgEAEAAQAFAAACADQACACAAADQAAADgCABIgFADIgCACIgCACIgCADIANAAIAAADg");
	this.shape_28.setTransform(195.5,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDACgDQABgGAFAAQAFAAACAEQACADAAAFQAAAFgCAEQgCAEgFAAQgDAAgDgEgAgDgGQgCACABAEIABAHQABADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCAAgGIAAgGQgCgDgDAAQgBAAgCADg");
	this.shape_29.setTransform(193.4,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B7BEC7").s().p("AgIANIACgGQABgDADgCIADgCIADAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgBACIgBAFIgDAAIABgGQACgEAFAAQAEAAACADQACACAAADQAAADgCABIgEADIgDACIgCACIgCADIANAAIAAADg");
	this.shape_30.setTransform(191.4,13.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_31.setTransform(167.7,17.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CDE48B").s().p("AgPAsQgFAAAAgGIAAhLQAAgGAFAAIAeAAQAGAAAAAGIAABLQAAAGgGAAg");
	this.shape_32.setTransform(158.4,15.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B7BEC7").s().p("AgIANIACgGQABgDADgCIADgCIADAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgBACIgBAFIgDAAIABgGQACgEAFAAQAEAAACADQACACAAADQAAADgCABIgFADIgCACIgCACIgCADIANAAIAAADg");
	this.shape_33.setTransform(169,13.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B7BEC7").s().p("AgIANIABgGQACgDADgCIACgCIAEAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACIgBAFIgDAAIABgGQACgEAEAAQAFAAACADQACACAAADQAAADgCABIgFADIgCACIgCACIgCADIANAAIAAADg");
	this.shape_34.setTransform(166.9,13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDABgDQACgGAFAAQAFAAACAEQACADAAAFQAAAFgCAEQgCAEgFAAQgEAAgCgEgAgDgGQgBACAAAEIABAHQABADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCABgGIgBgGQgBgDgEAAQgCAAgBADg");
	this.shape_35.setTransform(164.9,13.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B7BEC7").s().p("AgIANIACgGQAAgDAEgCIACgCIAEAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACIgBAFIgDAAIABgGQACgEAEAAQAFAAACADQACACAAADQAAADgCABIgEADIgDACIgCACIgCADIANAAIAAADg");
	this.shape_36.setTransform(162.8,13.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_37.setTransform(139.2,17.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FAF68E").s().p("AgOAsQgGAAAAgGIAAhLQAAgGAGAAIAdAAQAGAAAAAGIAABLQAAAGgGAAg");
	this.shape_38.setTransform(128.9,15.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B7BEC7").s().p("AABANIAAgSIgFAAIAAgCIAEgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIADAAIAAAZg");
	this.shape_39.setTransform(140.2,13.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B7BEC7").s().p("AgIANIACgGQABgDADgCIADgCIADAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgBACIgBAFIgDAAIABgGQACgEAFAAQAEAAACADQACACAAADQAAADgCABIgFADIgCACIgCACIgCADIANAAIAAADg");
	this.shape_40.setTransform(138.4,13.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDABgDQACgGAFAAQAFAAADAEQABADAAAFQAAAFgBAEQgDAEgFAAQgDAAgDgEgAgDgGQgCACAAAEIABAHQACADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgGIgCgGQAAgDgEAAQgCAAgBADg");
	this.shape_41.setTransform(136.3,13.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B7BEC7").s().p("AgIANIABgGQABgDAEgCIACgCIAEAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACIgBAFIgDAAIABgGQACgEAEAAQAFAAACADQACACAAADQAAADgCABIgFADIgCACIgCACIgCADIANAAIAAADg");
	this.shape_42.setTransform(134.3,13.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_43.setTransform(110.6,17.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEE7A1").s().p("AgPAsQgFAAAAgGIAAhLQAAgGAFAAIAeAAQAGAAAAAGIAABLQAAAGgGAAg");
	this.shape_44.setTransform(100.3,15.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDABgDQADgGAEAAQAFAAACAEQACADAAAFQAAAFgCAEQgCAEgFAAQgEAAgCgEgAgDgGQgBACAAAEIABAHQABADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCABgGIgBgGQgBgDgEAAQgBAAgCADg");
	this.shape_45.setTransform(111.9,13.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B7BEC7").s().p("AgIANIACgGQAAgDAEgCIADgCIADAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgBACIgBAFIgDAAIABgGQACgEAFAAQAEAAACADQACACAAADQAAADgCABIgEADIgDACIgCACIgCADIANAAIAAADg");
	this.shape_46.setTransform(109.8,13.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDACgDQACgGAEAAQAFAAADAEQABADAAAFQAAAFgBAEQgDAEgFAAQgDAAgDgEgAgDgGQgBACgBAEIABAHQACADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCAAgGIgBgGQgBgDgDAAQgBAAgCADg");
	this.shape_47.setTransform(107.8,13.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B7BEC7").s().p("AgIANIABgGQACgDADgCIADgCIADAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgBACIgBAFIgDAAIABgGQACgEAFAAQAEAAACADQACACAAADQAAADgCABIgFADIgCACIgCACIgCADIANAAIAAADg");
	this.shape_48.setTransform(105.7,13.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_49.setTransform(82.1,17.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FBBE8C").s().p("AgOAsQgGAAAAgGIAAhLQAAgGAGAAIAdAAQAGAAAAAGIAABLQAAAGgGAAg");
	this.shape_50.setTransform(71.7,15.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B7BEC7").s().p("AgGALQgCgCAAgDIAEAAQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAIACABQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQACgCAAgGIgCACIgDABQgEAAgCgCQgCgCAAgDQAAgEACgCQACgDAEAAQAFAAACAFQACADAAAEQAAAEgCADQgCAGgFAAQgEAAgCgCgAgDgIQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_51.setTransform(83.3,13.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B7BEC7").s().p("AABANIAAgSIgFAAIAAgCIAEgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADAAIAAAZg");
	this.shape_52.setTransform(81.1,13.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDACgDQACgGAEAAQAFAAACAEQACADAAAFQAAAFgCAEQgCAEgFAAQgEAAgCgEgAgDgGQgCACABAEIABAHQABADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCgBgGIAAgGQgCgDgDAAQgBAAgCADg");
	this.shape_53.setTransform(79.2,13.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B7BEC7").s().p("AgIANIACgGQABgDADgCIADgCIADAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgBACIgBAFIgDAAIABgGQACgEAFAAQAEAAACADQACACAAADQAAADgCABIgEADIgDACIgCACIgCADIANAAIAAADg");
	this.shape_54.setTransform(77.2,13.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_55.setTransform(53.5,17.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DE8AA6").s().p("AgOAsQgGAAAAgGIAAhLQAAgGAGAAIAdAAQAGAAAAAGIAABLQAAAGgGAAg");
	this.shape_56.setTransform(43.2,15.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B7BEC7").s().p("AgFALQgDgCAAgEQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIADgCIgCgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgDACgCQADgCACAAQAEAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIgBAEIgDACIAEABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgCACQgDACgEAAQgCAAgDgCgAgDACIgBAEIABADQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgBIgDABgAgDgIIgBADQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABIACABIADgBIABgDIgBgDIgDgBIgDABg");
	this.shape_57.setTransform(54.8,13.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B7BEC7").s().p("AABANIAAgSIgFAAIAAgCIAEgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADAAIAAAZg");
	this.shape_58.setTransform(52.5,13.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDABgDQADgGAEAAQAFAAACAEQACADAAAFQAAAFgCAEQgCAEgFAAQgEAAgCgEgAgDgGQgBACAAAEIABAHQABADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCABgGIgBgGQgBgDgEAAQgCAAgBADg");
	this.shape_59.setTransform(50.7,13.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B7BEC7").s().p("AgIANIACgGQAAgDAEgCIADgCIADAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgBACIgBAFIgDAAIABgGQACgEAFAAQAEAAACADQACACAAADQAAADgCABIgEADIgDACIgCACIgCADIANAAIAAADg");
	this.shape_60.setTransform(48.6,13.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E1E2E5").s().p("Ag5ADIAAgFIBzAAIAAAFg");
	this.shape_61.setTransform(25,17.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E18B89").s().p("AgOAsQgGAAAAgGIAAhLQAAgGAGAAIAeAAQAFAAAAAGIAABLQAAAGgFAAg");
	this.shape_62.setTransform(14.6,15.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B7BEC7").s().p("AgEANQABgIADgGIAFgHIgNAAIAAgEIARAAIAAADIgDAEIgEAGIgCAGIgBAGg");
	this.shape_63.setTransform(26.3,13.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B7BEC7").s().p("AABANIAAgSIgFAAIAAgCIAEgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIADAAIAAAZg");
	this.shape_64.setTransform(24,13.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B7BEC7").s().p("AgGAJQgCgDAAgGQAAgDABgDQACgGAFAAQAFAAADAEQABADAAAFQAAAFgBAEQgDAEgFAAQgEAAgCgEgAgDgGQgCACAAAEIACAHQABADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgGIgBgGQgCgDgDAAQgCAAgBADg");
	this.shape_65.setTransform(22.1,13.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B7BEC7").s().p("AgIANIABgGQACgDADgCIACgCIAEAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACIgBAFIgDAAIABgGQACgEAEAAQAFAAACADQACACAAADQAAADgCABIgEADIgDACIgCACIgCADIANAAIAAADg");
	this.shape_66.setTransform(20.1,13.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D8D8D8").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_67.setTransform(23.7,175.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D8D8D8").s().p("Ag8AGIAAgLIB5AAIAAALg");
	this.shape_68.setTransform(20.4,173);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D8D8D8").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_69.setTransform(23.7,156.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D8D8D8").s().p("Ag8AGIAAgLIB5AAIAAALg");
	this.shape_70.setTransform(20.4,153.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D8D8D8").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_71.setTransform(23.7,137.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D8D8D8").s().p("Ag8AGIAAgLIB5AAIAAALg");
	this.shape_72.setTransform(20.4,135);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D8D8D8").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_73.setTransform(23.7,118.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D8D8D8").s().p("Ag8AGIAAgLIB5AAIAAALg");
	this.shape_74.setTransform(20.4,116.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D8D8D8").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_75.setTransform(23.7,99.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D8D8D8").s().p("Ag8AGIAAgLIB5AAIAAALg");
	this.shape_76.setTransform(20.4,97.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D8D8D8").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_77.setTransform(23.7,80.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D8D8D8").s().p("Ag8AGIAAgLIB5AAIAAALg");
	this.shape_78.setTransform(20.4,78.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D8D8D8").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_79.setTransform(23.7,62.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D8D8D8").s().p("Ag8AGIAAgLIB5AAIAAALg");
	this.shape_80.setTransform(20.4,60.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D8D8D8").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_81.setTransform(23.7,43.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D8D8D8").s().p("Ag8AGIAAgLIB5AAIAAALg");
	this.shape_82.setTransform(20.4,41.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#505050").s().p("AgHANQgDgDAAgEIAEAAIABAEQACADADAAQADAAACgCQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgEgCgBIgFgBIAAAAIgBAAIAAgDIABAAIAAAAIADAAQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgCADIAAAEIgEAAQAAgDACgDQACgEAFAAQAFAAACACQADACAAAEQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABIgDACQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAEgDADQgDADgFAAQgFAAgCgDg");
	this.shape_83.setTransform(15.2,168.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#505050").s().p("AADAQIAAgIIgNAAIAAgEIANgTIAEAAIAAAUIAEAAIAAADIgEAAIAAAIgAgGAFIAJAAIAAgOg");
	this.shape_84.setTransform(15.2,149.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#505050").s().p("AgGAOQgDgCgBgFIAEAAQABAEACABIADABQADgBACgCQACgCAAgDQAAgDgCgCQgCgBgDAAIgDABIgCABIgEAAIADgQIAPAAIAAAEIgMAAIgCAJIACgBIAEgBQAEAAADACQADACAAAFQAAAEgDAEQgDADgFAAQgEAAgCgCg");
	this.shape_85.setTransform(15.2,130.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#505050").s().p("AgGANQgEgEAAgIQAAgEABgFQAEgHAFAAQAGAAACACQACADAAADIgEAAIgBgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAgBAAQgCAAgBADQgCADAAAGIACgDIAEgBQAEAAADADQADABAAAFQAAAEgDAEQgDADgFAAQgDAAgDgDgAgDAAQgCACAAADQAAADACADQABACACAAQAEAAABgDQACgCgBgDIgBgEQgBgBgEAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_86.setTransform(15.2,111.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#505050").s().p("AgFAQQABgKAEgHIAGgJIgQAAIAAgFIAVAAIAAAEIgEAFIgEAHIgDAIIgBAHg");
	this.shape_87.setTransform(15.2,92.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#505050").s().p("AgHAOQgDgDAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQABgCADgBIgDgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgDADgDQACgCAEAAQAFAAACACQADACAAAEQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAIgCACIADACQACACAAADQAAAEgDADQgDADgFAAQgDAAgEgCgAgEACQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABIABAEQACACACAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCgCgDAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAgAgDgKQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIADABQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAABg");
	this.shape_88.setTransform(15.2,74);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#505050").s().p("AgHAOQgCgDAAgDIAEAAQAAADACABIADABQACAAACgDQACgCABgHIgEADIgDABQgEAAgDgDQgDgCAAgEQAAgFADgDQADgDAEAAQAHAAACAGQACADAAAFQAAAFgCAFQgDAHgGAAQgEAAgDgCgAgEgKQgCACAAADQAAAEACABQABABADAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgBAAgEQAAgDgCgCQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_89.setTransform(15.2,56.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#505050").s().p("AgIALQgCgEAAgHQAAgEACgEQACgHAGAAQAGAAADAFQACAEAAAGQAAAGgCAEQgDAGgGAAQgFAAgDgFgAgEgIQgCADAAAFIABAIQACAFADAAQADAAACgDQACgDAAgHQAAgFgCgDQgBgEgEAAQgCAAgCAEg");
	this.shape_90.setTransform(17.7,36.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#505050").s().p("AABAQIAAgWIgGAAIAAgDIAFgBQACgBABgEIADAAIAAAfg");
	this.shape_91.setTransform(15,36.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#889AB2").s().p("Ai2BZIAAixIFtAAIAACxg");
	this.shape_92.setTransform(273.2,56.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4CC49A").s().p("AixBZIAAixIFjAAIAACxg");
	this.shape_93.setTransform(235.2,56.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#889AB2").s().p("Al9BZIAAixIL8AAIAACxg");
	this.shape_94.setTransform(177.3,56.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CDE48B").s().p("AnXBZIAAixIOuAAIAACxg");
	this.shape_95.setTransform(90.1,56.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#889AB2").s().p("AjgBZIAAixIHBAAIAACxg");
	this.shape_96.setTransform(268.8,76.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4CC49A").s().p("ApXBZIAAixISvAAIAACxg");
	this.shape_97.setTransform(184.5,76.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DF8CA8").s().p("AmOBZIAAixIMdAAIAACxg");
	this.shape_98.setTransform(82.9,76.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FAF68E").s().p("AkthWIJbgEIAACxIpbAEg");
	this.shape_99.setTransform(261,173.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FCE07F").s().p("AujBZIAAixIdHAAIAACxg");
	this.shape_100.setTransform(136.2,173.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#889AB2").s().p("AzZBZIAAixMAmzAAAIAACxg");
	this.shape_101.setTransform(167.1,153.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#889AB2").s().p("AzZBZIAAixMAmzAAAIAACxg");
	this.shape_102.setTransform(167.1,134.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FAF68E").s().p("AzZBZIAAixMAmzAAAIAACxg");
	this.shape_103.setTransform(167.1,115.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FAF68E").s().p("AzZBZIAAixMAmzAAAIAACxg");
	this.shape_104.setTransform(167.1,95.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FAF68E").s().p("AzZBZIAAixMAmzAAAIAACxg");
	this.shape_105.setTransform(167.1,37.4);

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152,96.4,1,1,0,0,0,157.1,100.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,313,202);


(lib.gfxElement1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARTWORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAWQgJgJAAgNQAAgNAJgJQAKgJAMAAQANAAAKAJQAJAJAAANQAAANgJAJQgKAKgNAAQgMAAgKgKg");
	this.shape.setTransform(17.6,192.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDC4D0").s().p("AglAmQgQgPAAgXQAAgVAQgQQAPgRAWABQAWgBAQARQAQAQAAAVQAAAXgQAPQgQAQgWAAQgWAAgPgQg");
	this.shape_1.setTransform(17.6,192.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_2.setTransform(69.7,192.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAjIgDgBIAAgIIADACIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgJIgTgwIAJAAIANAoIABAAIAOgoIAIAAIgVA4IgCAGIgDAEIgEACIgFABg");
	this.shape_3.setTransform(64.9,194);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAZQgCgCAAgEQgDAEgFACQgDABgGAAIgHAAIgEgDQgDgCgBgCQgBgDgBgEQABgEABgDIAEgEIAFgCIAHgBIAFgBIAFgBIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgFIgEgCIgDgCIgDAAQgFAAgDACQgEACgBAGIgIAAQAAgFACgDQACgDADgCIAHgDIAHgBIAGAAIAHACIAEAFQACACAAAFIAAAYIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIACAAIAAAGIgFABQgEAAgBgBgAAGABIgFABIgFABIgEABIgFADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAEgDIAEgEIAAgDIAAgIIgEABg");
	this.shape_4.setTransform(60,192.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAjIAAhEIAYAAQAOgBAJAJQAIAHAAARQAAAIgBAGQgCAIgFAEQgDAEgHADQgGADgHAAgAgSAbIAPAAIADAAIAFgBIAFgEIAFgEQACgDABgEQACgFgBgGQABgGgCgEQgBgGgDgDQgCgDgFgCQgFgCgEAAIgQAAg");
	this.shape_5.setTransform(54.1,192);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAhIgHgEQgDgCgCgEQgCgEAAgEIAIAAIABAFIADAEIAFACIAFABIAFgBIAFgDQACgCABgDIABgHIgBgGIgDgFIgFgDIgGgBQgDAAgDACQgEACgCACIgHgBIAGgiIAhAAIAAAHIgaAAIgFAUIABAAQACgDAEgBIAGgBIAJABQADACADADQAEADABADQACAFAAAGIgBAIQgCAEgDADQgDAEgEABQgFACgFAAIgIgBg");
	this.shape_6.setTransform(45.1,192.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAgQgEgDgDgFQgDgFgBgFIgBgMQABgGABgHQABgGADgFQADgGAFgCQAEgEAHAAQAJAAAEAEQAGAFAAAJIgIAAQAAgFgDgCQgDgEgFAAQgEAAgEADQgDACgCAEIgDAJIAAAIIAAABQADgFAFgCQAEgCAEAAQAFAAAEABQAEACADADQACADACAEQABAEAAAEIgBAIQgBAEgCADIgHAGQgFACgGAAQgIAAgEgDgAgFgBIgEADIgDAEIgBAHIABAFIADAFIAEADQADACADAAQADAAACgCQAEgBABgCIACgFIABgFIAAgHIgDgEIgEgDIgGgBIgGABg");
	this.shape_7.setTransform(39.8,192.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAhQgEgBgDgCQgDgEgCgDQgBgFAAgFIAIAAQAAAGAEAEQADAFAHAAIAFgBIAFgDIADgEIABgGIgBgFIgDgEIgEgDIgGAAIgEAAIAAgGIABAAIABAAIABAAIAEgBIAFgCIADgEIABgEQAAgGgEgCQgDgEgFAAIgFABIgEAEQgCACgBACIgBAHIgIAAQAAgFACgFIAEgHQACgDAEgBQAEgCAFAAQAEAAAEACIAGACQADADACAEQABADAAAFQAAAFgCADQgDADgEACQAGACADAEQADAEAAAGQAAAGgCADIgFAHQgDACgEACIgJABQgFAAgEgCg");
	this.shape_8.setTransform(34.4,192.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAXQgJgJAAgOQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAAOgJAJQgKAJgNAAQgMAAgKgJg");
	this.shape_9.setTransform(17.6,169);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BDC4D0").s().p("AglAnQgQgQAAgXQAAgWAQgQQAPgQAWAAQAWAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgWAAQgWAAgPgQg");
	this.shape_10.setTransform(17.6,169);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_11.setTransform(69.7,169.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAjIgDgBIAAgHIADABIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgJIgTgwIAJAAIANAoIABAAIAOgoIAIAAIgVA3IgCAHIgDAEIgEADIgFAAg");
	this.shape_12.setTransform(64.9,170.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAZQgCgCAAgEQgDAEgFACQgDABgGAAIgHAAIgEgDQgDgCgBgCQgBgDgBgEQABgEABgDIAEgEIAFgCIAHgBIAFgBIAFgBIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgFIgEgCIgDgCIgDAAQgFAAgDACQgEACgBAGIgIAAQAAgFACgDQACgDADgCIAHgDIAHgBIAGAAIAHACIAEAFQACACAAAFIAAAYIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIACAAIAAAGIgFABQgEAAgBgBgAAGABIgFABIgFABIgEABIgFADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAEgDIAEgEIAAgDIAAgIIgEABg");
	this.shape_13.setTransform(60,169.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAjIAAhFIAYAAQAOABAJAHQAIAJAAAQQAAAIgBAHQgCAGgFAFQgDAFgHACQgGACgHABgAgSAaIAPAAIADAAIAFAAIAFgDIAFgFQACgDABgFQACgEgBgGQABgFgCgFQgBgFgDgEQgCgDgFgCQgFgCgEAAIgQAAg");
	this.shape_14.setTransform(54.1,168.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAhQgEgBgDgCIgDgHIgCgHIgBgIIgBgIIABgGIABgIIACgIIADgGQADgCAEgCQADgCAFAAQAFAAAEACQAEACADACIADAGIADAIIABAIIAAAGIAAAIIgBAIIgDAHIgDAHQgDACgEABQgEACgFAAQgFAAgDgCgAgFgZQgCABgCACIgCAGIgBAFIgBAHIAAAEIAAAJIACAJQABAEADADQACADAFAAQAFAAADgDQADgDACgEIABgJIAAgJIAAgEIAAgHIgBgFIgDgGQgBgCgDgBQgDgBgDAAQgDAAgCABg");
	this.shape_15.setTransform(45.2,168.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIAiIgHgEQgEgCgCgFQgBgEAAgFQAAgGADgFQADgDAGgCQgFgBgCgEQgDgEAAgFQAAgEACgDQABgEADgCQADgCAEgBQAEgCADAAQAFAAAEACIAGADQADADABAEQABACAAAEQAAAFgCAEQgDADgEACQAGACADADQADAFAAAGQAAAFgCAEQgBAEgDADQgDACgFABQgEACgFAAIgIgBgAgFADIgEACIgEAEIgBAFQAAAHAFADQAEAEAFAAIAGgBIAFgDIACgEIABgGQAAgCgBgCIgDgFIgFgCIgFgBIgFABgAgEgaIgDACIgDADIgBAFIABAFIADAEIADACIAEAAQAFAAAEgDQACgCABgGQgBgFgCgDQgEgCgFAAIgEAAg");
	this.shape_16.setTransform(39.8,168.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAFAjIAAgxIgRAAIAAgGIAHgBIAFgCQACgBACgDQACgCABgFIAGAAIAABFg");
	this.shape_17.setTransform(33.9,168.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAXQgJgKAAgNQAAgNAJgIQAKgKAMAAQANAAAKAKQAJAIAAANQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_18.setTransform(17.6,145.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BDC4D0").s().p("AglAnQgQgRAAgWQAAgWAQgQQAPgPAWgBQAWABAQAPQAQAQAAAWQAAAWgQARQgQAPgWAAQgWAAgPgPg");
	this.shape_19.setTransform(17.6,145.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_20.setTransform(64.4,146.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAjIgDgBIAAgHIADABIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgJIgTgwIAJAAIANAoIABAAIAOgoIAIAAIgVA3IgCAHIgDAEIgEADIgFAAg");
	this.shape_21.setTransform(59.5,147.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANAZQgDgCAAgEQgDAEgEACQgEABgFAAIgGAAIgGgDIgDgEQgBgDAAgEQAAgEABgDIAEgEIAFgCIAGgBIAGgBIAGgBIADgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgFIgCgCIgEgCIgDAAQgFAAgEACQgDACAAAGIgIAAQAAgFABgDQACgDADgCIAGgDIAIgBIAHAAIAGACIAEAFQACACgBAFIAAAYIABAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADAAIAAAGIgHABQgCAAgCgBgAAGABIgFABIgEABIgGABIgDADQgCACAAADIABADIACACIADACIAEAAQAEAAACgBIAFgDIACgEIABgDIAAgIIgEABg");
	this.shape_22.setTransform(54.6,146.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcAiIAAhEIAYAAQAQABAIAHQAJAJAAAQQAAAIgCAHQgDAGgDAFQgEAFgGACQgHACgIAAgAgSAaIAPAAIADAAIAFAAIAFgDIAEgFQADgDABgFQABgEABgGQgBgFgBgFQgBgFgDgEQgDgEgEgBQgEgCgGAAIgPAAg");
	this.shape_23.setTransform(48.7,146);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAhQgEgBgCgDIgEgGIgDgHIgBgIIAAgIIAAgGIABgJIADgHIAEgGQACgCAEgCQADgCAFAAQAGAAADACQAEACACACIAFAGIABAHIABAJIABAGIgBAIIgBAIIgBAHIgFAGQgCADgEABQgDACgGAAQgFAAgDgCgAgFgZQgDABgBACIgDAGIgBAFIAAAGIAAAFIAAAJIABAJQACAEADADQADADAEAAQAFAAADgDQADgDABgEIACgJIAAgJIAAgFIgBgGIgBgFIgCgGQgCgCgCgBQgDgBgDAAQgCAAgDABg");
	this.shape_24.setTransform(39.8,146);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAeQgGgEgBgIIAIAAQABAFAEACQADADAFAAQAHAAAEgHQADgGAAgNIAAgBQgCAFgEACQgEACgEABQgGgBgEgBQgEgCgCgDQgDgDgCgDIgBgKQAAgEABgFQACgDADgDQADgEAFgBQADgCAFAAIAJABQAEACADAEQADADACAHQACAHAAAJQAAARgFAKQgHAJgLAAQgJAAgFgFgAgGgZQgDABgCACIgCAGIgBAGIABAFIAEAFIADACQADACADgBQACABADgCIAFgCIACgFIABgGIgBgGIgCgFIgFgDQgDgBgCAAQgDAAgDABg");
	this.shape_25.setTransform(34.4,146);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAXQgJgKAAgNQAAgNAJgIQAKgKAMAAQANAAAKAKQAJAIAAANQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_26.setTransform(17.6,122.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BDC4D0").s().p("AglAnQgQgQAAgXQAAgVAQgQQAPgQAWAAQAWAAAQAQQAQAQAAAVQAAAXgQAQQgQAPgWAAQgWAAgPgPg");
	this.shape_27.setTransform(17.6,122.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_28.setTransform(64.4,123.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAjIgDgBIAAgIIADABIACABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgIIgTgxIAJAAIANAoIABAAIAOgoIAIAAIgVA4IgCAGIgDAEIgEACIgFABg");
	this.shape_29.setTransform(59.5,124.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAZQgDgCAAgEQgDAEgEACQgEABgFAAIgGAAIgGgDQgCgCgBgCQgBgDAAgEQAAgEABgDIAEgEIAFgCIAGgBIAGgBIAGgBIADgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgFIgCgCIgEgCIgDAAQgFAAgEACQgDACAAAGIgIAAQAAgFABgDQACgDADgCIAGgDIAIgBIAHAAIAGACIAEAFQACACgBAFIAAAYIABAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADAAIAAAGIgHABQgCAAgCgBgAAGABIgFABIgEABIgGABIgDADQgCACAAADIABADIACACIADACIAEAAQAEAAACgBIAFgDIACgEIABgDIAAgIIgEABg");
	this.shape_30.setTransform(54.6,123.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcAjIAAhEIAYAAQAQgBAIAJQAJAHAAARQAAAIgCAGQgDAIgDAEQgEAFgGACQgHADgIAAgAgSAbIAPAAIADAAIAFgBIAFgEIAEgEQADgDABgEQABgFABgGQgBgGgBgFQgBgFgDgDQgDgDgEgCQgEgCgGAAIgPAAg");
	this.shape_31.setTransform(48.7,122.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAiQgEgCgCgCIgEgGIgDgIIgBgIIAAgIIAAgHIABgHIADgIIAEgGQACgDAEgBQADgCAFAAQAGAAADACQAEABACADIAFAGIABAIIABAHIABAHIgBAIIgBAIIgBAIIgFAGQgCACgEACQgDABgGAAQgFAAgDgBgAgFgZQgDABgBADIgDAEIgBAGIAAAHIAAAEIAAAJIABAJQACAEADADQADADAEAAQAFAAADgDQADgDABgEIACgJIAAgJIAAgEIgBgHIgBgGIgCgEQgCgDgCgBQgDgBgDgBQgCABgDABg");
	this.shape_32.setTransform(39.8,122.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAgQgEgDgDgFQgDgFAAgFIgBgMQAAgGABgHQABgHADgEQADgGAFgCQAEgEAHAAQAJAAAEAFQAFAEACAJIgJAAQAAgFgEgCQgCgEgGAAQgEABgDACQgDACgCAEIgCAJIgBAIIAAABQADgFAEgCQAFgCAFAAQAEAAAEABQAEACADADQACADACAEQABAEABAEIgCAIQgBAEgDADIgGAGQgFACgHAAQgGAAgFgDgAgEgBIgFACIgCAFIgBAHIABAFIACAGIAFACQADACACAAQADAAACgCQADgBACgBIADgGIABgFIgBgHIgDgFIgEgCIgGgBIgFABg");
	this.shape_33.setTransform(34.5,122.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAXQgJgJAAgOQAAgMAJgJQAKgKAMAAQANAAAKAKQAJAJAAAMQAAAOgJAJQgKAJgNAAQgMAAgKgJg");
	this.shape_34.setTransform(17.6,99.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BDC4D0").s().p("AglAmQgQgQAAgWQAAgWAQgPQAPgQAWAAQAWAAAQAQQAQAPAAAWQAAAWgQAQQgQAQgWAAQgWAAgPgQg");
	this.shape_35.setTransform(17.6,99.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_36.setTransform(64.4,100.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgPAjIgDgBIAAgHIADAAIACABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgIIgTgxIAJAAIANAoIABAAIAOgoIAIAAIgVA3IgCAHIgDAEIgEADIgFAAg");
	this.shape_37.setTransform(59.5,101.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AANAZQgDgCAAgEQgDAEgEACQgEABgFAAIgGAAIgGgDIgDgEQgBgDAAgEQAAgEABgDIAEgEIAFgCIAGgBIAGgBIAGgBIADgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgFIgCgCIgEgCIgDAAQgFAAgEACQgDACAAAGIgIAAQAAgFABgDQACgDADgCIAGgDIAIgBIAHAAIAGACIAEAFQACACgBAFIAAAYIABAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADAAIAAAGIgHABQgCAAgCgBgAAGABIgFABIgEABIgGABIgDADQgCACAAADIABADIACACIADACIAEAAQAEAAACgBIAFgDIACgEIABgDIAAgIIgEABg");
	this.shape_38.setTransform(54.6,100.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgcAiIAAhEIAYAAQAQABAIAHQAJAIAAARQAAAIgCAHQgDAGgDAFQgEAEgGADQgHADgIgBgAgSAaIAPAAIADAAIAFgBIAFgCIAEgFQADgDABgFQABgEABgGQgBgGgBgFQgBgEgDgEQgDgEgEgBQgEgCgGAAIgPAAg");
	this.shape_39.setTransform(48.7,99.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIAiQgEgCgCgDIgEgGIgDgHIgBgIIAAgIIAAgHIABgIIADgHIAEgGQACgCAEgCQADgCAFAAQAGAAADACQAEACACACIAFAGIABAHIABAIIABAHIgBAIIgBAIIgBAHIgFAGQgCADgEACQgDABgGAAQgFAAgDgBgAgFgZQgDABgBACIgDAGIgBAGIAAAFIAAAFIAAAJIABAJQACAEADADQADADAEAAQAFAAADgDQADgDABgEIACgJIAAgJIAAgFIgBgFIgBgGIgCgGQgCgCgCgBQgDgCgDABQgCgBgDACg");
	this.shape_40.setTransform(39.8,99.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAiQgEgCgDgDQgDgCgCgFQgBgEAAgGIAIAAQAAAIAEADQADAFAHAAIAFgBIAFgCIADgFIABgGIgBgFIgDgEIgEgDIgGgBIgEAAIAAgGIABABIABAAIABAAIAEgBIAFgCIADgDIABgFQAAgGgEgDQgDgCgFAAIgFABIgEADQgCACgBADIgBAFIgIAAQAAgEACgFIAEgGQACgEAEgBQAEgCAFAAQAEAAAEABIAGADQADADACADQABAEAAAFQAAAEgCAEQgDADgEADQAGABADADQADAFAAAGQAAAFgCAEIgFAHQgDADgEABIgJABQgFAAgEgBg");
	this.shape_41.setTransform(34.4,99.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#292E38").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_42.setTransform(17.6,75.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BDC4D0").s().p("AglAmQgQgQAAgWQAAgWAQgPQAPgQAWAAQAWAAAQAQQAQAPAAAWQAAAWgQAQQgQARgWgBQgWABgPgRg");
	this.shape_43.setTransform(17.6,75.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_44.setTransform(64.4,76.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgPAjIgDgBIAAgIIADACIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgJIgTgwIAJAAIANAoIABAAIAOgoIAIAAIgVA4IgCAGIgDAEIgEACIgFABg");
	this.shape_45.setTransform(59.5,77.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANAZQgDgCAAgEQgDAEgEACQgEABgFAAIgGAAIgGgDQgCgCgBgCQgBgDAAgEQAAgEABgDIAEgEIAFgCIAGgBIAGgBIAGgBIADgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgFIgCgCIgEgCIgDAAQgFAAgEACQgDACAAAGIgIAAQAAgFABgDQACgDADgCIAGgDIAIgBIAHAAIAGACIAEAFQACACgBAFIAAAYIABAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADAAIAAAGIgHABQgCAAgCgBgAAGABIgFABIgEABIgGABIgDADQgCACAAADIABADIACACIADACIAEAAQAEAAACgBIAFgDIACgEIABgDIAAgIIgEABg");
	this.shape_46.setTransform(54.6,76.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcAjIAAhFIAYAAQAQAAAIAJQAJAHAAARQAAAIgCAGQgDAIgDAEQgEAEgGADQgHADgIAAgAgSAbIAPAAIADAAIAFgBIAFgEIAEgEQADgDABgFQABgEABgGQgBgGgBgEQgBgGgDgDQgDgDgEgCQgEgCgGAAIgPAAg");
	this.shape_47.setTransform(48.7,75.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAHAjIAAgQIgeAAIAAgJIAfgsIAGAAIAAAtIAKAAIAAAIIgKAAIAAAQgAgPALIAWAAIAAghIgBAAg");
	this.shape_48.setTransform(39.7,75.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAFAjIAAgxIgRAAIAAgHIAHAAIAFgCQACgCACgCQACgDABgEIAGAAIAABFg");
	this.shape_49.setTransform(33.9,75.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHAZQgEAAgDgCQgDgCgBgEQgCgDAAgFIAIAAIABAFIADADIAFACIADAAIAFAAIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgDgBIgGgDIgHgCIgIgCIgGgDQgCgDAAgFQAAgEACgCQABgDADgCIAGgCIAHgBIAGABQAEAAADACQADACABADIACAIIgIAAIgBgEIgDgDIgEgBIgDgBIgDAAIgEACIgCABIgBAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFACIAFABIAGACQADABACABQADABABADQABACAAAEQAAAEgCADQgBADgEACIgGADIgIAAIgHgBg");
	this.shape_50.setTransform(59,53.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgPAjIgDgBIAAgIIADABIACABQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIADgJIgTgwIAJAAIANAoIABAAIAOgoIAIAAIgVA4IgCAGIgDAEIgEACIgFABg");
	this.shape_51.setTransform(54.2,54.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAMAZQgBgCAAgEQgDAEgFACQgEABgFAAIgHAAIgEgDQgDgCgBgCQgBgDgBgEQABgEABgDIAEgEIAFgCIAGgBIAGgBIAFgBIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgFIgEgCIgDgCIgDAAQgFAAgDACQgEACgBAGIgIAAQAAgFADgDQABgDADgCIAHgDIAHgBIAGAAIAGACIAFAFQABACABAFIAAAYIAAAFQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIACAAIAAAGIgFABQgEAAgCgBgAAGABIgFABIgFABIgEABIgFADQgBACAAADIABADIACACIADACIAEAAQAEAAACgBIAEgDIAEgEIAAgDIAAgIIgEABg");
	this.shape_52.setTransform(49.3,53.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgcAjIAAhEIAZAAQAOgBAJAJQAJAHgBARQAAAIgCAGQgBAIgFAEQgDAFgHACQgGADgHAAgAgSAbIAPAAIADAAIAFgBIAFgEIAFgEQACgDABgEQABgFAAgGQAAgGgBgFQgBgFgDgDQgCgDgFgCQgFgCgEAAIgQAAg");
	this.shape_53.setTransform(43.4,52.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMAiIACgRIAGgQQAEgHAEgHIAKgMIgjAAIAAgIIArAAIAAAHQgFAFgFAHIgIAPIgFAQIgCARg");
	this.shape_54.setTransform(34.5,52.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWAXQgJgJAAgOQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAAOgJAJQgKAJgNAAQgMAAgKgJg");
	this.shape_55.setTransform(17.6,52.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BDC4D0").s().p("AglAmQgQgQAAgWQAAgWAQgPQAPgQAWAAQAWAAAQAQQAQAPAAAWQAAAWgQAQQgQAQgWAAQgWAAgPgQg");
	this.shape_56.setTransform(17.6,52.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BDC4D0").s().p("AAAgWIg5A5IgGgGIA/g/IBAA/IgGAGg");
	this.shape_57.setTransform(188.7,17.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#292E38").s().p("AxiOEIAA8GMAjFAAAIAAcGg");
	this.shape_58.setTransform(112.4,123.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A5BDCE").s().p("AgWAzIgEgBIAAgLIAEABIADAAQAEAAADgBIADgFIAFgNIgdhHIANAAIAVA7IAVg7IAMAAIgfBRIgEAJQgBAEgDACQgDADgDABIgHABg");
	this.shape_59.setTransform(140.9,19.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A5BDCE").s().p("AALAvIgIAAQgDgBgCgCQgCgBgBgEIgBgIIAAgtIgNAAIAAgKIANAAIAAgWIALAAIAAAWIAPAAIAAAKIgPAAIAAAsIAAAEIABACIAEAAIAEABIAGAAIAAAKg");
	this.shape_60.setTransform(135,16.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A5BDCE").s().p("AgFAyIAAhHIALAAIAABHgAgFgiIAAgPIALAAIAAAPg");
	this.shape_61.setTransform(131.4,16.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A5BDCE").s().p("AgFAkIgbhHIANAAIATA7IABAAIAUg7IAMAAIgbBHg");
	this.shape_62.setTransform(126.4,17.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A5BDCE").s().p("AgFAyIAAhHIALAAIAABHgAgFgiIAAgPIALAAIAAAPg");
	this.shape_63.setTransform(121.3,16.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A5BDCE").s().p("AAKAvIgIAAQgCgBgCgCQgCgBgBgEIgBgIIAAgtIgMAAIAAgKIAMAAIAAgWIALAAIAAAWIAOAAIAAAKIgOAAIAAAsIABAEIABACIACAAIAFABIAFAAIAAAKg");
	this.shape_64.setTransform(117.4,16.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A5BDCE").s().p("AgMAjQgHgCgFgFQgEgFgCgHQgCgHAAgIQAAgHACgHQACgIAEgFQAFgFAHgDQAGgDAHAAQAHAAAFABQAFACAFADIAGAIQADAFABAGIgNAAQgBgGgEgFQgFgEgIAAQgFABgFACQgEADgDADQgCAFgBAEQgCAFABAFIABAKQABAEACAEQADAEAEADQAEABAFAAQAIAAAGgEQAFgFABgIIAMAAQgCAOgIAGQgIAIgOAAQgHAAgGgDg");
	this.shape_65.setTransform(111.7,17.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A5BDCE").s().p("AAgAyIgLgeIgpAAIgLAeIgPAAIAnhjIAOAAIAnBjgAgQAJIAgAAIgQguIAAAAg");
	this.shape_66.setTransform(103.3,16.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A5BDCE").s().p("AAKAvIgHAAQgDgBgCgCQgCgBgBgEIgBgIIAAgtIgNAAIAAgKIANAAIAAgWIALAAIAAAWIAOAAIAAAKIgOAAIAAAsIABAEIABACIACAAIAFABIAFAAIAAAKg");
	this.shape_67.setTransform(92.5,16.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A5BDCE").s().p("AgQAjQgFgCgDgEQgCgDgCgEIgBgMIAAguIAMAAIAAAwQAAAHAEAEQAEADAHAAQAEABAEgCQAEgCADgDIAEgHIABgJIAAgoIAMAAIAABHIgLAAIAAgLIgBAAQgDAHgGADQgGADgHAAQgHAAgFgCg");
	this.shape_68.setTransform(86.6,17.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A5BDCE").s().p("AgOAjQgHgDgEgFQgFgFgCgHQgCgHAAgIQAAgGACgIQACgGAFgGQAEgFAHgDQAHgDAHAAQAJAAAGADQAHADAEAFQAFAGACAGQACAIAAAGQAAAIgCAHQgCAHgFAFQgEAFgHADQgGADgJAAQgHAAgHgDgAgIgZQgEACgDAEQgDAEgCAFQgCAFAAAFQAAAHACAFQACAFADADQADAEAEACQAEACAEgBQAFABAEgCQAEgCADgEQADgDACgFQACgFAAgHQAAgFgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_69.setTransform(78.6,17.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A5BDCE").s().p("AASAyIAAgxQAAgGgEgEQgDgEgIAAQgEAAgEACQgEACgCADQgEADgBADQgBAEAAAFIAAApIgMAAIAAhjIAMAAIAAAmQACgDACgCIAGgEIAHgCIAFgBQAIAAAEACQAFACADADQADAEABAFIABAKIAAAvg");
	this.shape_70.setTransform(70.7,16.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A5BDCE").s().p("AALAvIgIAAQgDgBgCgCQgCgBgBgEIgBgIIAAgtIgNAAIAAgKIANAAIAAgWIALAAIAAAWIAPAAIAAAKIgPAAIAAAsIAAAEIABACIAEAAIAEABIAGAAIAAAKg");
	this.shape_71.setTransform(64.5,16.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A5BDCE").s().p("AgFAyIAAhHIALAAIAABHgAgFgiIAAgPIALAAIAAAPg");
	this.shape_72.setTransform(60.9,16.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A5BDCE").s().p("AAXAyIgXhTIAAAAIgWBTIgPAAIgahjIAPAAIATBSIABAAIAWhSIANAAIAWBSIAVhSIANAAIgbBjg");
	this.shape_73.setTransform(52.8,16.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A5BDCE").s().p("AgLAlQgFgBgEgDQgFgDgCgFQgDgFAAgGIAMAAQAAAEACACIAEAFIAGACIAHAAIAFAAIAGgBIAEgDQACgDAAgDQAAgFgDgCQgEgDgFgBIgLgDIgLgDQgFgCgEgDQgDgEAAgHQAAgGACgEQADgDADgDQAEgCAFgCIAKgBIAKABIAJAEQAEACADAFQACAEABAHIgMAAIgCgGIgEgEIgFgCIgFgBIgGABIgFABIgDAEQgBAAAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACIAGADIAIACIAHACIAJADQAEABADACQAEACACAEQACADAAAGQAAAGgDAEQgDAFgEADQgFACgFABIgLABIgLgBg");
	this.shape_74.setTransform(38.9,17.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A5BDCE").s().p("AgWAzIgEgBIAAgLIADABIAEAAQAEAAACgBIAEgFIAFgNIgdhHIAOAAIAUA7IAUg7IANAAIggBRIgCAJQgCAEgDACQgCADgDABIgHABg");
	this.shape_75.setTransform(31.9,19.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A5BDCE").s().p("AASAjQgDgCAAgGQgFAGgGACQgGADgHAAIgJgBQgFgBgDgCQgDgDgCgEQgCgEAAgFQAAgHACgDIAFgHIAIgCIAJgCIAJgCIAIgCIAFgCQACgCAAgDQAAgEgCgCIgDgEIgGgCIgEgBQgIAAgFADQgFAEAAAIIgMAAQAAgHACgFQADgFAEgDQAEgDAGgBQAFgBAGAAIAJABQAFAAAEADQAEACACAEQADAEAAAGIAAAkIAAAHQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAJQgDACgFAAQgFAAgDgDgAAJABIgIABIgHACIgHACQgEABgBADQgDADAAAEQAAADACACIADADIAEACIAGAAQAFABAEgCIAHgEQACgCABgDIACgGIAAgLIgGABg");
	this.shape_76.setTransform(24.8,17.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A5BDCE").s().p("AgoAyIAAhjIAiAAQAWAAANAMQAMAMAAAYQAAALgCAKQgDAKgGAHQgGAGgJAEQgJADgMAAgAgbAnIAWAAIAFAAIAHgCIAIgEQADgCADgFQADgEACgHQACgGAAgJQAAgIgCgIQgCgHgEgFQgEgFgGgCQgGgDgIAAIgXAAg");
	this.shape_77.setTransform(16.3,16.2);

	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(112.4,107.1,1,1,0,0,0,118.7,113.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,236,226);


(lib.mcElement5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer_1
	this.instance = new lib.gfxElement5("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(126,87.5,1,1,0,0,0,126,87.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,233,211);


(lib.mcElement4Banner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{_loopStart:11});

	// timeline functions:
	this.frame_10 = function() {
		
	}
	this.frame_59 = function() {
		this.gotoAndPlay(12);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(49).call(this.frame_59).wait(1));

	// Layer_1 copy
	this.instance = new lib.gfxElement4Banner("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(81.7,21.5,1,1,0,0,0,81.7,21.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,loop:false},10).to({_off:true},1).wait(49));

	// Layer_1
	this.instance_1 = new lib.gfxElement4Banner("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.7,21.5,1,1,0,0,0,81.7,21.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({y:26},24).to({y:21.5,loop:false},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.3,43);


(lib.mcElement2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.gfxElement2("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(40.8,15.2,1,1,0,0,0,40.8,15.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,313,202);


(lib.mcElement1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(6));

	// Layer_1
	this.instance = new lib.gfxElement1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(121.7,110.9,1,1,0,0,0,121.7,110.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,236,226);


(lib.mcBlah = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
		this.stop();
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// Element 4
	this.instance = new lib.mcElement4Banner();
	this.instance.parent = this;
	this.instance.setTransform(122.7,172.8,1,1,0,0,0,81.7,21.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({regX:81.6,regY:23.8,y:168.7},0).wait(1).to({x:122.8,y:165.8},0).wait(1).to({x:122.9,y:163.6},0).wait(1).to({y:161.8},0).wait(1).to({x:123,y:160.3},0).wait(1).to({y:159},0).wait(1).to({x:123.1,y:157.8},0).wait(1).to({y:156.8},0).wait(1).to({y:156},0).wait(1).to({y:155.2},0).wait(1).to({y:154.5},0).wait(1).to({x:123.2,y:153.9},0).wait(1).to({y:153.4},0).wait(1).to({y:152.9},0).wait(1).to({y:152.5},0).wait(1).to({y:152.1},0).wait(1).to({y:151.8},0).wait(1).to({y:151.6},0).wait(1).to({y:151.4},0).wait(1).to({y:151.2},0).wait(1).to({y:151.1},0).wait(1).to({y:151},0).wait(2).to({regX:81.7,regY:21.5,x:123.4,y:148.7},0).wait(1));

	// Element 5
	this.instance_1 = new lib.mcElement5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106,-37.7,1,1,0,0,0,126,87.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(1).to({regX:112.4,regY:100.8,x:92.4,y:-14.8},0).wait(1).to({x:92.5,y:-10.6},0).wait(1).to({y:-7.3},0).wait(1).to({y:-4.7},0).wait(1).to({y:-2.5},0).wait(1).to({y:-0.6},0).wait(1).to({y:1.1},0).wait(1).to({y:2.6},0).wait(1).to({y:3.8},0).wait(1).to({y:4.9},0).wait(1).to({y:5.9},0).wait(1).to({y:6.8},0).wait(1).to({y:7.5},0).wait(1).to({y:8.2},0).wait(1).to({y:8.7},0).wait(1).to({y:9.2},0).wait(1).to({y:9.6},0).wait(1).to({y:10},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({regX:126,regY:87.5,x:106.1,y:-2.7},0).wait(1));

	// Element 3
	this.instance_2 = new lib.mcElement3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-65.5,103.1,1,1,0,0,0,-1.2,-1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(1).to({regX:0,regY:0,x:-64.3,y:98.3},0).wait(1).to({y:96.1},0).wait(1).to({y:94.7},0).wait(1).to({y:93.5},0).wait(1).to({y:92.6},0).wait(1).to({y:91.8},0).wait(1).to({y:91.1},0).wait(1).to({y:90.5},0).wait(1).to({y:90},0).wait(1).to({y:89.5},0).wait(1).to({y:89.1},0).wait(1).to({y:88.7},0).wait(1).to({y:88.4},0).wait(1).to({y:88.1},0).wait(1).to({y:87.9},0).wait(1).to({y:87.7},0).wait(1).to({y:87.5},0).wait(1).to({y:87.3},0).wait(1).to({y:87.1},0).wait(1).to({y:87},0).wait(1).to({y:86.9},0).wait(1).to({y:86.8},0).wait(1).to({y:86.7},0).wait(1).to({y:86.6},0).wait(2).to({regX:-1.2,regY:-1.2,x:-65.4,y:85.4},0).wait(1));

	// Element 2
	this.instance_3 = new lib.mcElement2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-217.2,29,1,1,0,0,0,-0.2,-0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({regX:152,regY:96.4,x:-59.4,y:124.1},0).wait(1).to({x:-54,y:122.7},0).wait(1).to({x:-49.2,y:121.4},0).wait(1).to({x:-44.9,y:120.3},0).wait(1).to({x:-41.3,y:119.4},0).wait(1).to({x:-38.2,y:118.6},0).wait(1).to({x:-35.4,y:117.8},0).wait(1).to({x:-33.1,y:117.2},0).wait(1).to({x:-31,y:116.7},0).wait(1).to({x:-29.2,y:116.2},0).wait(1).to({x:-27.7,y:115.8},0).wait(1).to({x:-26.3,y:115.4},0).wait(1).to({x:-25,y:115.1},0).wait(1).to({x:-24,y:114.8},0).wait(1).to({x:-23,y:114.6},0).wait(1).to({x:-22.2,y:114.4},0).wait(1).to({x:-21.4,y:114.2},0).wait(1).to({x:-20.8,y:114},0).wait(1).to({x:-20.3,y:113.9},0).wait(1).to({x:-19.8,y:113.7},0).wait(1).to({x:-19.4,y:113.6},0).wait(1).to({x:-19.1,y:113.5},0).wait(1).to({x:-18.8},0).wait(1).to({x:-18.6,y:113.4},0).wait(1).to({x:-18.4},0).wait(1).to({regX:-0.2,regY:-0.2,x:-170.5,y:16.8},0).wait(1));

	// Element 1
	this.instance_4 = new lib.mcElement1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-189.5,-169.5,1,1,0,0,0,-0.6,-0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({regX:112.4,regY:107.1,x:-60.9,y:-58.6},0).wait(1).to({x:-47.7,y:-55.5},0).wait(1).to({x:-38.3,y:-53.3},0).wait(1).to({x:-31.7,y:-51.8},0).wait(1).to({x:-26.9,y:-50.7},0).wait(1).to({x:-23.3,y:-49.9},0).wait(1).to({x:-20.4,y:-49.2},0).wait(1).to({x:-18,y:-48.6},0).wait(1).to({x:-16.1,y:-48.2},0).wait(1).to({x:-14.4,y:-47.8},0).wait(1).to({x:-13,y:-47.5},0).wait(1).to({x:-11.8,y:-47.2},0).wait(1).to({x:-10.8,y:-47},0).wait(1).to({x:-9.9,y:-46.7},0).wait(1).to({x:-9,y:-46.6},0).wait(1).to({x:-8.3,y:-46.4},0).wait(1).to({x:-7.7,y:-46.2},0).wait(1).to({x:-7.1,y:-46.1},0).wait(1).to({x:-6.6,y:-46},0).wait(1).to({x:-6.1,y:-45.9},0).wait(1).to({x:-5.7,y:-45.8},0).wait(1).to({x:-5.3,y:-45.7},0).wait(1).to({x:-5,y:-45.6},0).wait(1).to({x:-4.7,y:-45.5},0).wait(1).to({x:-4.4},0).wait(1).to({x:-4.2,y:-45.4},0).wait(1).to({x:-3.9},0).wait(1).to({x:-3.7,y:-45.3},0).wait(1).to({x:-3.6},0).wait(1).to({regX:-0.6,regY:-0.2,x:-116.4,y:-152.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Broker_Pipeline = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Element 1
	this.instance = new lib.mcBlah();
	this.instance.parent = this;
	this.instance.setTransform(147.3,280.8,1,1,0,0,0,-153.6,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({y:299.8},42,cjs.Ease.quadInOut).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'F1373E23D3C0476A9B8F206899302788',
	width: 550,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Path_1.png?1518710976936", id:"Path_1"}
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
an.compositions['F1373E23D3C0476A9B8F206899302788'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;