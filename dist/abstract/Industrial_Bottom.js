(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvrKpQgKAAgGgGQgGgHAAgJIAA0lQAAgJAGgHQAGgGAKAAIfXAAQAJAAAHAGQAGAHAAAJIAAUlQAAAJgGAHQgHAGgJAAg");
	this.shape.setTransform(104.4,69.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(1.8,1.8,205.3,136.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#889AB2").ss(0.5).p("AighEIFBAAQAIAAAGAGQAGAGAAAIIAABhQAAAIgGAGQgGAGgIAAIlBAAQgIAAgGgGQgGgGAAgIIAAhhQAAgIAGgGQAGgGAIAAg");
	this.shape.setTransform(23.3,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifBFQgJAAgGgGQgFgFgBgJIAAhhQABgIAFgGQAGgGAJAAIE/AAQAJAAAGAGQAFAGAAAIIAABhQAAAJgFAFQgGAGgJAAg");
	mask.setTransform(23.3,12.2);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(0.5).p("Ajmh2IHNAAIAADtInNAAg");
	this.shape_1.setTransform(23.3,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjlB3IAAjtIHLAAIAADtg");
	this.shape_2.setTransform(23.3,12.2);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(4.3,4.3,38.1,15.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALmCGI4VAAIAAlcIZfAAIAAGtg");
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(3.9,3.8,163.3,43.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AviGgIAAs/IfFAAIAAM/g");
	this.shape.setTransform(103.3,45.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(3.8,3.5,199,83.2), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AviGgIAAs/IfFAAIAAM/g");
	this.shape.setTransform(103.6,45.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(4.1,4.1,199,83.2), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdCgIAAk/IA7AAIAAE/g");
	mask.setTransform(11.3,24.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwD0IAAnnIDhAAIAAHng");
	this.shape.setTransform(11.3,24.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(8.4,8.4,6,32), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAHIAAgNIAPAAIAAANg");
	mask.setTransform(7.8,7.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNIAAiaICbAAIAACag");
	this.shape.setTransform(7.8,7.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(7,7,1.6,1.5), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkIEuIAApbIHHAAIBKBLIAAIQg");
	mask.setTransform(33.5,37.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB5B5D").s().p("AlOF0IAArnIKdAAIAALng");
	this.shape.setTransform(33.5,37.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(7,7,53,60.4), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhNCLIAAkWICbAAIAAEWg");
	mask.setTransform(8.8,15);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AhNiLICbAAIAAEXIibAAg");
	this.shape.setTransform(8.8,15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(1,1,15.6,27.9), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAHIAAgNIAPAAIAAANg");
	mask.setTransform(7.8,7.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNIAAiZICbAAIAACZg");
	this.shape.setTransform(7.8,7.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(7,7,1.6,1.4), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAHIAAgNIAPAAIAAANg");
	mask.setTransform(7.8,7.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNIAAiZICbAAIAACZg");
	this.shape.setTransform(7.8,7.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(7,7,1.6,1.4), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAHIAAgNIAPAAIAAANg");
	mask.setTransform(7.8,7.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNIAAiZICbAAIAACZg");
	this.shape.setTransform(7.8,7.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(7,7,1.6,1.4), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkIEuIAApbIHHAAIBKBLIAAIQg");
	mask.setTransform(33.5,37.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34DB9F").s().p("AlOF0IAArnIKdAAIAALng");
	this.shape.setTransform(33.5,37.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(7,7,53.1,60.4), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAHIAAgNIAPAAIAAANg");
	mask.setTransform(7.8,7.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNIAAiZICbAAIAACZg");
	this.shape.setTransform(7.8,7.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(7,7,1.6,1.4), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdB9IAAj5IA7AAIAAD5g");
	mask.setTransform(11.4,20.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwDRIAAmhIDhAAIAAGhg");
	this.shape.setTransform(11.3,20.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(8.4,8.4,5.9,25), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAHIAAgNIAPAAIAAANg");
	mask.setTransform(7.8,7.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNIAAiaICbAAIAACag");
	this.shape.setTransform(7.8,7.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(7,7,1.6,1.5), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdBbIAAi0IA7AAIAAC0g");
	mask.setTransform(11.3,17.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwCuIAAlbIDhAAIAAFbg");
	this.shape.setTransform(11.3,17.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(8.4,8.4,6,18.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAHIAAgNIAPAAIAAANg");
	mask.setTransform(7.8,7.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNIAAiaICbAAIAACag");
	this.shape.setTransform(7.8,7.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(7,7,1.6,1.5), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAjIAAhFIA7AAIAABFg");
	mask.setTransform(11.4,11.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhxB3IAAjtIDiAAIAADtg");
	this.shape.setTransform(11.4,11.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(8.4,8.4,5.9,7), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAHIAAgNIAPAAIAAANg");
	mask.setTransform(7.8,7.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNIAAiaICbAAIAACag");
	this.shape.setTransform(7.8,7.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(7,7,1.6,1.5), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxiIZIAAwxMAjFAAAIAAQxg");
	this.shape.setTransform(117.5,58.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(5.1,5,224.7,107.4), null);


(lib.gfxElement5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARTWORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AAAAAA").p("AA+A9Ih7AAIAAh5IB7AAg");
	this.shape.setTransform(29.3,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#424242").p("AAogkIhOBJ");
	this.shape_1.setTransform(47.8,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#424242").p("AAcgXIg3Aw");
	this.shape_2.setTransform(42.6,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#424242").p("AAfgYIg9Ay");
	this.shape_3.setTransform(53.8,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#424242").p("AAAgRIAAAj");
	this.shape_4.setTransform(44.6,27.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#424242").p("AAAgRIAAAj");
	this.shape_5.setTransform(50.7,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#424242").p("ABWAmIirAAIAAhLICrAAg");
	this.shape_6.setTransform(48.3,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBF0F7").s().p("ArvAgIAAhAIXgAAIAABAg");
	this.shape_7.setTransform(109.6,162.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDF2F9").s().p("AtJAgIAAg/IaUAAIAAA/g");
	this.shape_8.setTransform(118.6,149.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDF2F7").s().p("ArvAhIAAhAIXgAAIAABAg");
	this.shape_9.setTransform(109.6,135.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBF0F7").s().p("AtJAgIAAhAIaUAAIAABAg");
	this.shape_10.setTransform(118.6,120.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A3A3A").s().p("AgKAgQgEgDgDgDIgEgIQgBgFAAgFQAAgGACgEQABgEADgDQADgDADgCIAIgCIADABIAFABIAEADIADADIAAgZIALAAIAABBIgKAAIAAgGQgDADgEADQgDACgEAAQgGAAgEgCgAgFgGIgEAEIgCAEIgBAHIABAGIACAFQACADADABQACABACAAQADAAADgBIAEgEIADgFIABgGQgBgJgDgDQgDgEgHgBQgDABgCABg");
	this.shape_11.setTransform(210.9,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A3A3A").s().p("AgNAYIAAguIAKAAIAAAJIACgEIACgDIAEgCIAFgBIADAAIABAAIAAAKIgCAAIgDAAIgFABIgEADIgBAFIgBAGIAAAWg");
	this.shape_12.setTransform(207.1,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3A3A").s().p("AgJAgQgEgCgDgDIgEgHQgBgEAAgFIAKAAQgBAGADADQADAFAGAAQAFAAADgEQAEgDAAgFQAAgDgCgDIgDgDQgCgCgEAAIgEAAIAAgHIADAAIAFgCIADgCIABgGQABgEgDgCQgDgDgEAAIgEABIgEAEIgCADIAAAGIgKAAQAAgFABgEIAEgHQADgDAEgBQAEgDAEAAQADAAAEACIAHADQADACABADQACADAAAFQAAAEgCAEQgDAEgEACQAFABADADQAEAEAAAHQAAAFgDADQgBADgDADIgIAEQgDABgFABQgFAAgEgCg");
	this.shape_13.setTransform(202.7,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A3A3A").s().p("AgJAgQgEgCgDgDIgEgHQgBgEAAgFIAKAAQAAAGACADQADAFAGAAQAFAAADgEQAEgDAAgFQAAgDgCgDIgDgDQgDgCgDAAIgEAAIAAgHIADAAIAFgCIADgCIABgGQABgEgDgCQgDgDgEAAIgEABIgEAEIgBADIgBAGIgKAAQAAgFACgEIADgHQADgDAEgBQAEgDAEAAQADAAAEACIAHADQACACACADQACADAAAFQAAAEgCAEQgDAEgEACQAFABADADQADAEABAHQgBAFgCADQgBADgDADIgIAEQgDABgFABQgFAAgEgCg");
	this.shape_14.setTransform(197.6,21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2FBBE7").s().p("AgSAgIAAgIIACAAIADAAIADAAIACgBIABgDIABgCIABgEIgRguIALAAIALAiIABAAIALgiIALAAIgSAxIgDAGIgCAFIgEAEQgDABgEAAIgHgBg");
	this.shape_15.setTransform(180.7,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2FBBE7").s().p("AALAXQgCgBAAgDQgDADgFABIgIACIgGgBIgEgCIgFgFIgBgGQAAgEACgDQACgDACgBIAGgCIAGgBIAFgBIAEAAIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgDIgCgBIgEgBIgCgBQgEAAgDACQgDACAAADIgLAAQABgEACgDIAEgFIAHgCIAHgBIAHABIAFACQAEABABAEQABACAAADIAAAYIABACIACABIABAAIACAAIAAAHIgCABIgCAAIgCAAIgBABQgDAAgDgCgAACACIgGABIgDABIgCABIgCACIgBAEIABADIADABIACABIAEAAIACAAIAEgCIADgCIABgFIAAgHQgCACgEAAg");
	this.shape_16.setTransform(175.9,22.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2FBBE7").s().p("AAJAYIgJgiIgIAiIgKAAIgQgvIALAAIAKAjIAJgjIAKAAIAIAjIABAAIAJgjIALAAIgQAvg");
	this.shape_17.setTransform(169.7,22.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2FBBE7").s().p("AAJAhIgNgXIgHAGIAAARIgKAAIAAhBIAKAAIAAAlIASgTIANAAIgSARIAUAeg");
	this.shape_18.setTransform(164,21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2FBBE7").s().p("AgNAYIAAguIAKAAIAAAJIACgEIACgDIAEgCIAFgBIADAAIABAAIAAAKIgCAAIgDAAIgFABIgEADIgBAFIgBAGIAAAWg");
	this.shape_19.setTransform(160,22.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2FBBE7").s().p("AALAXQgCgBAAgDQgDADgFABIgIACIgGgBIgEgCIgFgFIgBgGQAAgEACgDQACgDACgBIAGgCIAGgBIAFgBIAEAAIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgDIgCgBIgEgBIgCgBQgEAAgDACQgDACAAADIgLAAQABgEACgDIAEgFIAHgCIAHgBIAHABIAFACQAEABABAEQABACAAADIAAAYIABACIACABIABAAIACAAIAAAHIgCABIgCAAIgCAAIgBABQgDAAgDgCgAACACIgGABIgDABIgCABIgCACIgBAEIABADIADABIACABIAEAAIACAAIAEgCIADgCIABgFIAAgHQgCACgEAAg");
	this.shape_20.setTransform(155.7,22.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2FBBE7").s().p("AgZAhIAAhBIAcAAQAHAAAEACQAFACACADIAEAHIABAHIgBAGQgBAEgDACQgCADgFACQgEACgHAAIgQAAIAAAZgAgNgBIAPAAIAFAAIADgCIADgDIABgFIgBgGIgDgDIgDgCIgEAAIgQAAg");
	this.shape_21.setTransform(150.2,21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2FBBE7").s().p("AgSAgIAAgIIACAAIADAAIADAAIACgBIABgDIABgCIABgEIgRguIALAAIALAiIABAAIALgiIALAAIgSAxIgDAGIgCAFIgEAEQgDABgEAAIgHgBg");
	this.shape_22.setTransform(142.1,23.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2FBBE7").s().p("AALAXQgBgBgBgDQgDADgFABIgIACIgFgBIgGgCIgDgFIgCgGQAAgEACgDQABgDADgBIAGgCIAGgBIAFgBIAFAAIADgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgDIgCgBIgEgBIgCgBQgEAAgDACQgDACAAADIgLAAQABgEACgDIAEgFIAHgCIAHgBIAHABIAFACQAEABABAEQACACgBADIAAAYIABACIACABIABAAIACAAIAAAHIgCABIgCAAIgCAAIgBABQgDAAgDgCgAACACIgFABIgEABIgCABIgCACIgBAEIABADIACABIADABIAEAAIACAAIAEgCIADgCIABgFIAAgHQgCACgEAAg");
	this.shape_23.setTransform(137.3,22.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FBBE7").s().p("AgaAhIAAhBIAfAAQAIAAAGAEQAFAEAAAJQAAAFgCADQgCAEgFACQAGABADADQADAFAAAHIgCAHQgBADgCACQgEADgEABQgEACgHAAgAgOAXIATAAQAFAAADgCQACgDAAgFQAAgFgCgCQgDgDgFAAIgTAAgAgOgEIARAAQAEAAADgDQADgCAAgEQAAgFgDgCQgDgCgEAAIgRAAg");
	this.shape_24.setTransform(131.7,21.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2FBBE7").s().p("AgNAYIAAguIAKAAIAAAJIACgEIACgDIAEgCIAFgBIADAAIABAAIAAAKIgCAAIgDAAIgFABIgEADIgBAFIgBAGIAAAWg");
	this.shape_25.setTransform(124.5,22.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2FBBE7").s().p("AgJAXQgFgCgDgEQgDgDgBgEQgCgFAAgFQAAgEACgFQABgEADgEQADgDAFgCQAEgCAFAAQAGAAAEACQAEACAEADQADAEABAEQACAFAAAEQAAAFgCAFQgBAEgDADQgEAEgEACQgEACgGAAQgFAAgEgCgAgFgOIgEADIgDAGIgBAFIABAGIADAGIAEADQACABADAAQADAAADgBIAEgDIADgGIAAgGIAAgFIgDgGQgBgCgDgBQgDgCgDAAQgDAAgCACg");
	this.shape_26.setTransform(119.9,22.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2FBBE7").s().p("AgBAhIgEgBIgEgDIgDgDIgBAAIAAAGIgJAAIAAhBIAKAAIAAAZIAAAAIADgDIADgDIAEgBIADgBQAGAAAEACQAEADADADQADADABAFQABAEAAAFIgBAJQgBAFgDADQgCADgEACQgEACgFABgAgJgDQgDAEAAAIIAAAGIADAFIAEAEIAFABQADAAADgBIAEgEQACgCAAgDIABgGIgBgHIgCgEIgEgEQgDgBgDgBQgGABgDAEg");
	this.shape_27.setTransform(114.5,21.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2FBBE7").s().p("AgNAYIAAguIAKAAIAAAJIACgEIACgDIAEgCIAFgBIADAAIABAAIAAAKIgCAAIgDAAIgFABIgEADIgBAFIgBAGIAAAWg");
	this.shape_28.setTransform(110.3,22.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2FBBE7").s().p("AAMAXQgDgBAAgDQgDADgFABIgIACIgFgBIgGgCIgDgFIgBgGQAAgEABgDQABgDADgBIAGgCIAHgBIAEgBIAFAAIACgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgDIgCgBIgDgBIgDgBQgFAAgCACQgDACgBADIgKAAQAAgEACgDIAGgFIAGgCIAHgBIAHABIAGACQADABABAEQABACAAADIAAAYIABACIACABIABAAIACAAIAAAHIgCABIgBAAIgDAAIgBABQgDAAgCgCgAADACIgGABIgEABIgDABIgBACIgBAEIABADIACABIAEABIADAAIACAAIAEgCIADgCIABgFIAAgHQgCACgDAAg");
	this.shape_29.setTransform(106,22.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2FBBE7").s().p("AAPAhIAAgeIgdAAIAAAeIgMAAIAAhBIAMAAIAAAaIAdAAIAAgaIALAAIAABBg");
	this.shape_30.setTransform(100.1,21.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2FBBE7").s().p("AgKAeQgEgDgDgFQgCgFgBgGIgBgLIABgKQABgGACgFQADgFAEgDQAEgEAGAAQAHAAAEAEQAEADADAFQADAFAAAGIABAKIgBALQAAAGgDAFQgDAFgEADQgEADgHABQgGgBgEgDgAgFgVIgDAEIgCAIIgBAJIABAJIACAIIADAGQACACADAAQADAAADgCQACgDABgDIACgIIAAgJIAAgJIgCgIQgBgCgCgCQgDgDgDAAQgDAAgCADg");
	this.shape_31.setTransform(91.8,21.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FBBE7").s().p("AgVAhQAAgIAEgGQAEgGAGgFIAHgEIAFgEIAFgFQABgDAAgEIAAgDIgBgEQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAgBgBAAIgFgBIgFABIgDAEIgBAFIgBAGIgLAAQAAgFACgFQABgEADgEIAHgFQAEgCAEAAQAGAAAEACQAEACADADQACADABAEIABAGIgCAHIgCAFIgFAFIgFAEIgGADIgEAEIgEADIgCAEIAeAAIAAAKg");
	this.shape_32.setTransform(86.7,21.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2FBBE7").s().p("AAFAgIAAgPIgbAAIAAgKIAbgmIAKAAIAAAoIAIAAIAAAIIgIAAIAAAPgAgOAJIATAAIAAgbg");
	this.shape_33.setTransform(81.6,21.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2FBBE7").s().p("AACAgIAAgsIgPAAIAAgIIAHgBIAGgCIACgDQACgCABgDIAIAAIAAA/g");
	this.shape_34.setTransform(75.9,21.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4C4C4C").s().p("AgIAXQgFgCgDgDQgDgDgBgFQgCgEAAgGQAAgEACgEQACgFADgDQADgEAEgCQAEgCAEAAQAGAAAEACQAFACADAFQADADABAGQABAEAAAFIgiAAIABAFQAAACACADIAEACIAFABQAEAAADgCQADgCABgDIAKAAIgDAGIgFAGIgGACIgHACQgFAAgEgCgAAMgEIgBgEIgCgEIgEgDIgFgBIgEABIgEADIgCAEIgBAEIAXAAIAAAAg");
	this.shape_35.setTransform(189.7,104.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4C4C4C").s().p("AgIAXQgEgCgDgDQgDgDgCgFQgBgEgBgFQABgFABgEQACgGADgCQADgEAEgCQAEgCAFAAIAIABIAGADQAEACABAEQACADAAAEIgKAAQgBgEgCgDQgDgCgFAAIgDABQgCAAgCACIgEAGQgBADAAAFIABAFIACAGIAEADQACABADAAQAEAAADgDQADgCABgFIAKAAQgBAJgGAFQgFAFgJAAQgFAAgEgCg");
	this.shape_36.setTransform(184.6,104.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4C4C4C").s().p("AAKAYIAAgdQAAgFgCgDQgCgCgFAAIgEABIgDADIgCAEIgBAEIAAAbIgLAAIAAguIAKAAIAAAHIAAAAQADgEAEgCQADgCAEAAQAIAAAEAEQAFAEAAAIIAAAfg");
	this.shape_37.setTransform(179.4,104.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4C4C4C").s().p("AAMAXQgDgBAAgDQgDADgFABIgIACIgFgBIgGgCIgDgFIgBgGQAAgEABgDQABgDADgBIAGgCIAHgBIAEgBIAFgBIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgDIgCgBIgDgBIgDgBQgFAAgCACQgDACgBAEIgKAAQAAgFACgDIAGgFIAGgCIAHgBIAHABIAGACQADABABAEQABACAAADIAAAYIABACIACABIABAAIACAAIAAAHIgCABIgBAAIgDAAIgBABQgDAAgCgCgAADACIgGABIgEAAIgDACIgBACIgBAEIABACIACACIAEABIADAAIACAAIAEgCIADgCIABgFIAAgHQgCABgDABg");
	this.shape_38.setTransform(174.4,104.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4C4C4C").s().p("AgNAYIAAguIAKAAIAAAJIACgEIACgDIAEgCIAFgBIADAAIABAAIAAAKIgCAAIgDAAIgFABIgEADIgBAFIgBAGIAAAWg");
	this.shape_39.setTransform(170.5,104.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4C4C4C").s().p("AgQATQgEgEAAgJIAAgeIALAAIAAAdQAAAGACADQACACAFAAIAEgBIAEgCIACgFIAAgFIAAgbIALAAIAAAvIgKAAIAAgHIgBAAQgCAEgDACQgEACgDABQgJAAgFgGg");
	this.shape_40.setTransform(165.9,104.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4C4C4C").s().p("AgIAYQgDgBgDgCQgDgCgCgEQgBgCAAgEIAKAAQABAEADABQADACADAAIAEAAIADgBIACgCIACgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDgCIgGgCIgEAAIgGgCIgEgCIgEgEIgBgGQAAgEACgCQACgCADgCQADgCADAAIAGgBIAGABIAHACQADACABADQACACABAEIgMAAQAAgEgDAAQgDgCgCAAIgDABIgCAAIgDABIgBADIABADIAEACIAEABIAGABIAGACIAEACQACABACACQABADAAAEQAAADgCADIgFAGIgHACIgHABIgIgBg");
	this.shape_41.setTransform(161,104.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4C4C4C").s().p("AAKAYIAAgdQAAgFgCgDQgCgCgFAAIgEABIgDADIgCAEIgBAEIAAAbIgLAAIAAguIAKAAIAAAHIAAAAQADgEAEgCQADgCAEAAQAIAAAEAEQAFAEAAAIIAAAfg");
	this.shape_42.setTransform(156,104.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4C4C4C").s().p("AgFAhIAAhBIALAAIAABBg");
	this.shape_43.setTransform(152.1,103.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4C4C4C").s().p("AgIAXQgFgCgDgDQgDgDgBgFQgCgEAAgGQAAgEACgEQACgFADgDQADgEAEgCQAEgCAEAAQAGAAAEACQAFACADAFQADADABAGQABAEAAAFIgiAAIABAFQAAACACADIAEACIAFABQAEAAADgCQADgCABgDIAKAAIgDAGIgFAGIgGACIgHACQgFAAgEgCgAAMgEIgBgEIgCgEIgEgDIgFgBIgEABIgEADIgCAEIgBAEIAXAAIAAAAg");
	this.shape_44.setTransform(145.9,104.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4C4C4C").s().p("AgFAhIAAgnIgIAAIAAgIIAIAAIAAgDIAAgIIADgEIAEgCIAEgBIAIABIAAAIIgCAAIgDAAIgEABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIAAAEIAJAAIAAAIIgJAAIAAAng");
	this.shape_45.setTransform(142,103.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C4C4C").s().p("AgEAhIAAgvIAJAAIAAAvgAgEgWIAAgKIAJAAIAAAKg");
	this.shape_46.setTransform(139.4,103.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4C4C4C").s().p("AgVAhIAAhBIALAAIAAA3IAgAAIAAAKg");
	this.shape_47.setTransform(135.9,103.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4C4C4C").s().p("AgEAhIAAhBIAJAAIAABBg");
	this.shape_48.setTransform(129.4,103.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4C4C4C").s().p("AAMAXQgCgBgBgDQgDADgEABIgIACIgGgBIgGgCIgDgFIgBgGQgBgEACgDQACgDACgBIAGgCIAHgBIAEgBIAFgBIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgDIgDgBIgCgBIgDgBQgFAAgCACQgDACgBAEIgKAAQAAgFACgDIAGgFIAGgCIAHgBIAGABIAHACQADABABAEQABACAAADIAAAYIABACIACABIABAAIABAAIAAAHIgBABIgBAAIgDAAIgBABQgDAAgCgCgAADACIgGABIgEAAIgDACIgBACIgBAEIABACIACACIAEABIADAAIACAAIAEgCIADgCIABgFIAAgHQgCABgDABg");
	this.shape_49.setTransform(125.9,104.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4C4C4C").s().p("AgQATQgEgEAAgJIAAgeIALAAIAAAdQAAAGACADQACACAFAAIAEgBIAEgCIACgFIAAgFIAAgbIALAAIAAAvIgKAAIAAgHIgBAAQgCAEgDACQgEACgDABQgJAAgFgGg");
	this.shape_50.setTransform(120.6,104.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4C4C4C").s().p("AAHAfIgHgBIgDgCIgBgEIgBgFIAAgbIgIAAIAAgIIAIAAIAAgOIAKAAIAAAOIAJAAIAAAIIgJAAIAAAYIAAADIABACIABABIACAAIADAAIACAAIAAAIIgDABg");
	this.shape_51.setTransform(116.5,103.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4C4C4C").s().p("AgQATQgEgEAAgJIAAgeIALAAIAAAdQAAAGACADQACACAFAAIAEgBIAEgCIACgFIAAgFIAAgbIALAAIAAAvIgKAAIAAgHIgBAAQgCAEgDACQgEACgDABQgJAAgFgGg");
	this.shape_52.setTransform(112.4,104.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4C4C4C").s().p("AAXAhIAAgyIgSAyIgJAAIgSgyIAAAAIAAAyIgLAAIAAhBIAQAAIARAzIASgzIAQAAIAABBg");
	this.shape_53.setTransform(105.7,103.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4C4C4C").s().p("AgHAYQgEgBgDgCQgDgCgCgEQgBgCAAgEIAKAAQABAEADABQADACADAAIADAAIAEgBIADgCIABgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgCIgEgCIgFAAIgGgCIgEgCIgEgEIgBgGQAAgEACgCQABgCADgCQADgCAEAAIAGgBIAGABIAGACQADACACADQACACABAEIgLAAQgBgEgDAAQgDgCgCAAIgDABIgCAAIgCABIgBADIABADIADACIAEABIAGABIAGACIAEACQADABABACQABADAAAEQAAADgCADIgFAGIgHACIgHABIgHgBg");
	this.shape_54.setTransform(96.9,104.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4C4C4C").s().p("AAHAfIgGgBIgEgCIgCgEIAAgFIAAgbIgIAAIAAgIIAIAAIAAgOIAJAAIAAAOIAKAAIAAAIIgKAAIAAAYIAAADIABACIACABIADAAIACAAIACAAIAAAIIgDABg");
	this.shape_55.setTransform(92.9,103.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4C4C4C").s().p("AAHAfIgHgBIgDgCIgBgEIgBgFIAAgbIgIAAIAAgIIAIAAIAAgOIAKAAIAAAOIAJAAIAAAIIgJAAIAAAYIAAADIAAACIACABIACAAIADAAIACAAIAAAIIgDABg");
	this.shape_56.setTransform(89.9,103.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4C4C4C").s().p("AgIAXQgFgCgDgDQgDgDgBgFQgCgEAAgGQAAgEACgEQACgFADgDQADgEAEgCQAEgCAEAAQAGAAAEACQAFACADAFQADADABAGQABAEAAAFIgiAAIABAFQAAACACADIAEACIAFABQAEAAADgCQADgCABgDIAKAAIgDAGIgFAGIgGACIgHACQgFAAgEgCgAAMgEIgBgEIgCgEIgEgDIgFgBIgEABIgEADIgCAEIgBAEIAXAAIAAAAg");
	this.shape_57.setTransform(86,104.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4C4C4C").s().p("AgHAYQgEgBgDgCQgDgCgCgEQgBgCAAgEIAKAAQABAEADABQADACADAAIADAAIAEgBIADgCIABgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgCIgEgCIgFAAIgGgCIgEgCIgEgEIgBgGQAAgEACgCQABgCADgCQADgCAEAAIAGgBIAGABIAGACQADACACADQACACABAEIgLAAQgBgEgDAAQgDgCgCAAIgDABIgCAAIgCABIgBADIABADIADACIAEABIAGABIAGACIAEACQADABABACQABADAAAEQAAADgCADIgFAGIgHACIgHABIgHgBg");
	this.shape_58.setTransform(81.1,104.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4C4C4C").s().p("AgQATQgEgEAAgJIAAgeIALAAIAAAdQAAAGACADQACACAFAAIAEgBIAEgCIACgFIAAgFIAAgbIALAAIAAAvIgKAAIAAgHIgBAAQgCAEgDACQgEACgDABQgJAAgFgGg");
	this.shape_59.setTransform(76.1,104.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4C4C4C").s().p("AAKAhIAAgeQAAgFgCgCQgCgDgFAAIgEABIgDADIgCADIgBAFIAAAcIgLAAIAAhBIALAAIAAAZQACgEAEgCQADgCAEAAQAIAAAEAEQAFAEAAAHIAAAhg");
	this.shape_60.setTransform(70.8,103.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4C4C4C").s().p("AgIAXQgEgCgDgDQgEgDgBgFQgBgEAAgFQAAgFABgEQABgGAEgCQADgEAEgCQAEgCAFAAIAIABIAGADQADACACAEQACADAAAEIgKAAQAAgEgEgDQgDgCgEAAIgDABQgDAAgBACIgEAGQgBADAAAFIABAFIACAGIAEADQADABACAAQAEAAADgDQADgCABgFIAKAAQgBAJgGAFQgFAFgJAAQgFAAgEgCg");
	this.shape_61.setTransform(65.7,104.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4C4C4C").s().p("AAMAXQgCgBgBgDQgDADgEABIgIACIgHgBIgFgCIgEgFIAAgGQgBgEACgDQABgDAEgBIAFgCIAHgBIAEgBIAFgBIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgDIgDgBIgCgBIgDgBQgEAAgDACQgDACgBAEIgKAAQABgFABgDIAGgFIAGgCIAHgBIAGABIAHACQADABABAEQACACAAADIAAAYIAAACIACABIABAAIABAAIAAAHIgBABIgBAAIgCAAIgCABQgDAAgCgCgAADACIgHABIgDAAIgDACIgCACIAAAEIABACIACACIAEABIACAAIADAAIAEgCIADgCIABgFIAAgHQgCABgDABg");
	this.shape_62.setTransform(60.8,104.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4C4C4C").s().p("AgHAYQgEgBgDgCQgDgCgCgEQgBgCAAgEIAKAAQABAEADABQADACADAAIAEAAIADgBIADgCIABgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgCIgEgCIgFAAIgGgCIgEgCIgEgEIgBgGQAAgEACgCQACgCADgCQACgCAEAAIAGgBIAGABIAHACQADACABADQACACABAEIgMAAQAAgEgDAAQgDgCgCAAIgDABIgCAAIgCABIgCADIACADIADACIAEABIAGABIAGACIAEACQADABABACQABADAAAEQAAADgCADIgFAGIgHACIgHABIgHgBg");
	this.shape_63.setTransform(55.8,104.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4C4C4C").s().p("AgIAYQgDgBgDgCQgDgCgCgEQgBgCAAgEIAKAAQABAEADABQADACADAAIAEAAIADgBIACgCIABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDgCIgGgCIgEAAIgGgCIgEgCIgEgEIgBgGQAAgEACgCQACgCADgCQADgCADAAIAGgBIAGABIAHACQADACABADQACACAAAEIgLAAQAAgEgDAAQgDgCgCAAIgCABIgDAAIgDABIgBADIABADIAEACIAEABIAGABIAGACIAEACQACABABACQACADAAAEQAAADgCADIgFAGIgHACIgHABIgIgBg");
	this.shape_64.setTransform(51.1,104.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4C4C4C").s().p("AALAXQgCgBAAgDQgDADgFABIgIACIgGgBIgEgCIgFgFIgBgGQAAgEACgDQACgDACgBIAGgCIAGgBIAFgBIAEgBIAEgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgDIgCgBIgEgBIgCgBQgEAAgDACQgDACAAAEIgLAAQABgFACgDIAEgFIAHgCIAHgBIAHABIAFACQAEABABAEQABACAAADIAAAYIABACIACABIABAAIACAAIAAAHIgCABIgCAAIgCAAIgBABQgDAAgDgCgAACACIgGABIgDAAIgCACIgCACIgBAEIABACIADACIACABIAEAAIACAAIAEgCIADgCIABgFIAAgHQgCABgEABg");
	this.shape_65.setTransform(46.3,104.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4C4C4C").s().p("AAXAhIAAgyIgSAyIgJAAIgSgyIAAAAIAAAyIgLAAIAAhBIAQAAIARAzIASgzIAQAAIAABBg");
	this.shape_66.setTransform(39.6,103.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4C4C4C").s().p("AAQAhQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgFIgBgIIgCgFQgBgCgDgBIgHgBIgPAAIAAAbIgMAAIAAhBIAfAAQAKAAAGAFQAFAFAAAIIgBAIIgEAFQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIgCACIACABIAEACIACAEIABAHIABAKIACAHgAgPgCIARAAQAGAAADgCQADgDAAgFIgBgFIgDgDQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgRAAg");
	this.shape_67.setTransform(57.8,83.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4C4C4C").s().p("AgWAhIAAhBIAsAAIAAAKIggAAIAAARIAdAAIAAAJIgdAAIAAAdg");
	this.shape_68.setTransform(51.9,83.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4C4C4C").s().p("AgMAgQgGgDgEgFQgEgEgCgHQgCgGAAgHQAAgGACgGQACgGAEgFQAEgFAGgCQAGgDAGAAQAHAAAGADQAGACAEAFQAEAFACAGQACAGAAAGQAAAHgCAGQgCAHgEAEQgEAFgGADQgGACgHAAQgGAAgGgCgAgIgWQgEACgCAEQgDADgBAFIgBAIIABAJQABAFADADQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQADgDABgFIABgJIgBgIQgBgFgDgDQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_69.setTransform(45.4,83.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4C4C4C").s().p("AAQAhQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIgBgFIAAgIIgCgFQgCgCgCgBIgGgBIgQAAIAAAbIgLAAIAAhBIAdAAQALAAAGAFQAFAFAAAIIgBAIIgEAFQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDACIAEABIADACIACAEIABAHIABAKIADAHgAgPgCIARAAQAGAAADgCQADgDAAgFIgBgFIgDgDQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgRAAg");
	this.shape_70.setTransform(39,83.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6D7C8E").s().p("AgFAVIgGgCIgEgFQgBgDAAgEIAFAAIABAFIADADIAEACIAEABIAEgBIADgBIADgCIAAgEIgBgEIgDgCIgEgBIgEgCIgFgBIgEgBIgEgDIgBgFQAAgDACgCQABgDACgBIAFgCIAFgBIAGABIAFACIADAEQABADAAADIgFAAQgBgEgCgCQgDgCgEAAIgDAAIgDABIgCACIgBAEQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIADACIAFABIADABIAFACIAFABIADADQABACAAAEQAAADgBACIgEAEIgGADIgFAAIgGgBg");
	this.shape_71.setTransform(107.1,83.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6D7C8E").s().p("AgFAVIgGgCIgEgFQgBgDAAgEIAFAAIABAFIADADIAEACIAEABIAEgBIADgBIADgCIAAgEIgBgEIgDgCIgEgBIgEgCIgFgBIgEgBIgEgDIgBgFQAAgDACgCQABgDACgBIAFgCIAFgBIAGABIAFACIADAEQABADAAADIgFAAQgBgEgCgCQgDgCgEAAIgDAAIgDABIgCACIgBAEQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIADACIAFABIADABIAFACIAFABIADADQABACAAAEQAAADgBACIgEAEIgGADIgFAAIgGgBg");
	this.shape_72.setTransform(103.2,83.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6D7C8E").s().p("AgOAVIAAgpIAdAAIAAAFIgXAAIAAANIAVAAIAAAEIgVAAIAAAOIAXAAIAAAFg");
	this.shape_73.setTransform(99.6,83.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6D7C8E").s().p("AgNAVIAAgpIAGAAIAAAkIAVAAIAAAFg");
	this.shape_74.setTransform(96.3,83.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6D7C8E").s().p("AAKAVIgKgiIgJAiIgGAAIgLgpIAGAAIAIAiIAKgiIAFAAIAKAiIAIgiIAGAAIgMApg");
	this.shape_75.setTransform(90,83.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6D7C8E").s().p("AgOAVIAAgpIAdAAIAAAFIgXAAIAAANIAVAAIAAAEIgVAAIAAAOIAXAAIAAAFg");
	this.shape_76.setTransform(85.6,83.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6D7C8E").s().p("AgCAVIAAgpIAFAAIAAApg");
	this.shape_77.setTransform(82.9,83.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6D7C8E").s().p("AgCAVIgPgpIAGAAIALAkIAAAAIAMgkIAGAAIgPApg");
	this.shape_78.setTransform(80.4,83.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgHAaQgEAAgDgCIgFgGIgCgJIAJAAQAAAEABACIADACIAFACIADAAIAFAAIAEgBIADgCIABgEQAAgDgDgCIgGgCIgHgCIgIgDQgEAAgCgDQgDgDAAgFQAAgEACgDIAEgEIAGgDIAIgBIAHABQAEABACACQADACABACQACADAAAFIgIAAIgBgEIgDgDIgEgBIgDgBIgDABIgEABIgDACIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIADACIAGACIAFABIAGACIAGABIADAFQACACAAAEQAAAEgCADQgCAEgDACIgHACIgIABIgHgBg");
	this.shape_79.setTransform(149.9,54.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgCgDgCgFIgCgLQAAgFACgFQACgFADgEQADgDAEgCQAFgCAEAAQAIAAAEADQAFADACAEQADAFABAFIABAJIgmAAIABAGIADAGIAFADIAGABQAFAAAEgCQADgDABgFIAJAAQgBAJgHAFQgFAEgJAAQgFAAgFgCgAgFgRIgFADIgCAEIgCAGIAdAAIgBgGIgDgEIgFgDIgGgCQgCABgDABg");
	this.shape_80.setTransform(144.8,54.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgJAZQgEgCgDgDQgDgDgCgFQgCgGABgFQgBgFACgFQACgFACgEQAEgEAEgBQAFgDAFAAIAIABQAEABADADQADACACADQACADAAAFIgJAAQAAgFgDgDQgEgDgFAAQgEAAgDACQgDACgCADQgCADAAADIgBAHIABAHIACAGIAFAEQACABADAAQAHAAAEgDQADgDABgGIAIAAQgBAJgGAGQgFAFgKAAQgFAAgFgCg");
	this.shape_81.setTransform(139.4,54.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AANAbIAAgiQAAgFgDgDQgDgDgFAAQgCAAgDACIgFACIgDAGIgBAGIAAAdIgIAAIAAgzIAIAAIAAAIQAFgJALAAQAFgBADACQAEACACACIADAGIAAAIIAAAhg");
	this.shape_82.setTransform(133.9,54.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AANAZQgCgCAAgEQgDAEgFACQgEACgFAAIgHgBIgFgCIgEgFQgBgDAAgDQAAgFABgCQACgDACgCQADgBADgBIAGgBIAGgBIAGgBIADgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgEIgDgDIgEgBIgDgBQgFAAgEACQgDACgBAGIgIAAIACgIQACgDADgCIAGgDIAIgBIAHAAIAGADQADABABADQACADAAAFIAAAZIABAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIACAAIAAAHIgGABQgDAAgCgCgAAGABIgFABIgFABIgFABIgEADQgBACAAADIABADIACADIADABIAEAAIAGgBQADgBACgCIADgDIABgEIAAgIIgFABg");
	this.shape_83.setTransform(128.6,54.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgNAbIAAgzIAIAAIAAAKIABAAQADgFADgEQAFgCAHAAIAAAJQgGgBgDACQgEACgBACQgCADgBADIgBAIIAAAYg");
	this.shape_84.setTransform(124.5,54.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgCAkIgFgBIgEgDIgDgEIgBAAIAAAHIgIAAIAAhGIAIAAIAAAbIABAAQACgFAEgCQAFgCAEAAQAGAAAFADQAEACADAEQACADACAFQACAEgBAGQABAFgCAFQgBAFgDAEQgDADgEACQgFACgGAAgAgGgHIgGAEQgCADAAACIgBAHIABAIQAAADACADQACADAEABQADACADAAQAEAAADgCQAEgBACgDIACgHIAAgHIAAgHIgDgFIgFgFQgDgBgEAAQgDAAgDACg");
	this.shape_85.setTransform(119.7,53.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAcAbIAAghIgBgFIgBgEIgDgCIgFgBQgHAAgDADQgEAFAAAFIAAAgIgHAAIAAghIgBgFIgBgEIgDgCIgFgBQgEAAgCACIgFADIgCAFIgBADIAAAgIgIAAIAAgzIAIAAIAAAIQAGgKALABQAEAAAEABQADACACAGQACgFAFgCQAEgDAFABIAHABIAFACQADACABADQABACAAAEIAAAmg");
	this.shape_86.setTransform(112.4,54.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgLAZIgGgEIgDgGIAAgHIAAghIAIAAIAAAiQAAAEADADQADADAFAAIAFgBQADgBACgDQACgCABgDIABgGIAAgcIAIAAIAAAyIgIAAIAAgIQgCAFgFACQgEACgFAAIgIgBg");
	this.shape_87.setTransform(105.3,54.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgJAZQgEgCgDgDQgDgDgCgFQgCgGABgFQgBgFACgFQABgFAEgEQADgEAEgBQAFgDAFAAIAIABQAEABADADQADACACADQACADAAAFIgJAAQAAgFgDgDQgEgDgFAAQgEAAgDACQgDACgCADQgCADgBADIAAAHIAAAHIADAGIAFAEQADABADAAQAGAAAEgDQADgDABgGIAIAAQgBAJgGAGQgFAFgKAAQgFAAgFgCg");
	this.shape_88.setTransform(99.9,54.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AANAbIAAgiQAAgFgDgDQgDgDgFAAQgCAAgDACIgFACIgDAGIgBAGIAAAdIgIAAIAAgzIAIAAIAAAIQAFgJALAAQAFgBADACQAEACACACIADAGIAAAIIAAAhg");
	this.shape_89.setTransform(94.4,54.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAwAAIAAAIIgmAAIAAAXIAkAAIAAAHIgkAAIAAAZIAnAAIAAAIg");
	this.shape_90.setTransform(88.8,53.3);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(93.9,83.2,1,1,0,0,0,23.3,12.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2FBBE7").s().p("AwBCcIAAjYQAAgJAGgHQAGgGAKAAICbAAIBIhJIBJBJIarAAQAJAAAHAGQAGAHAAAJIAADYg");
	this.shape_91.setTransform(119.8,50.2);

	this.instance_1 = new lib.Path_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.8,110.1,1,1,0,0,0,104.4,69.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F6F8FA").s().p("Ay5POIAA+bMAlzAAAIAAebg");
	this.shape_92.setTransform(121,97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.instance_1},{t:this.shape_91},{t:this.instance},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,194.9);


(lib.gfxElement4Banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARTWORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgVAcIAAg3IAqAAIAAAKIgdAAIAAAMIAaAAIAAAJIgaAAIAAAOIAeAAIAAAKg");
	this.shape.setTransform(130.7,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgJAbQgGgCgDgEQgEgEgCgFQgCgGAAgGQAAgFACgFQACgGAEgEQADgFAGgCQAFgCAFAAQAFAAAEACQAFABADACQADADACAEQACAEABAEIgMAAIgCgDIgCgEIgEgBIgFgBQgDgBgDACIgFAFIgCAGIgBAGIABAHIACAHIAFADQADACADAAQAGABADgEQAEgEAAgFIANAAIgDAJQgCAEgDAEQgEADgEABQgEACgGAAQgFAAgFgDg");
	this.shape_1.setTransform(125,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AALAcIgWglIAAAlIgMAAIAAg3IAMAAIAXAkIAAgkIAMAAIAAA3g");
	this.shape_2.setTransform(119.1,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AAPAcIgFgMIgUAAIgFAMIgMAAIAVg3IANAAIAVA3gAgHAHIAOAAIgHgVg");
	this.shape_3.setTransform(113.5,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AATAcIAAgnIAAAAIgOAnIgJAAIgOgmIAAAmIgMAAIAAg3IASAAIAMAlIANglIASAAIAAA3g");
	this.shape_4.setTransform(107.1,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AAMAcIgBgGIgBgHQgBgEgCgCQgBgDgGAAIgLAAIAAAWIgMAAIAAg3IAdAAIAHAAIAFAEIAEAFIABAGQAAAFgCAEQgCADgFABIAEACIADAEIABADIABAFIAAADIAAAEIAAAEIABACgAgLgCIANAAQAEAAACgBQACgDABgEQgBgEgCgCQgCgCgEAAIgNAAg");
	this.shape_5.setTransform(100.7,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgLAbQgFgCgEgEQgDgEgCgFQgCgGAAgGQAAgFACgFQACgGADgEQAEgFAFgCQAGgCAFAAQAHAAAFACQAFACAEAFQADAEADAGQABAFAAAFQAAAGgBAGQgDAFgDAEQgEAEgFACQgFADgHAAQgFAAgGgDgAgGgRIgFAFIgCAGIgBAGIABAHIACAHIAFADQADACADAAQAEAAADgCQAEgBABgCIADgHIAAgHIAAgGIgDgGIgFgFQgDgCgEABQgDgBgDACg");
	this.shape_6.setTransform(94.6,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgTAcIAAg3IAnAAIAAAKIgbAAIAAANIAXAAIAAAJIgXAAIAAAXg");
	this.shape_7.setTransform(89.4,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AAMAcIgBgGIgBgHQgBgEgCgCQgBgDgGAAIgLAAIAAAWIgMAAIAAg3IAdAAIAHAAIAFAEIAEAFIABAGQAAAFgCAEQgCADgFABIAEACIADAEIABADIABAFIAAADIAAAEIABAEIAAACgAgLgCIANAAQAEAAACgBQACgDABgEQgBgEgCgCQgCgCgEAAIgNAAg");
	this.shape_8.setTransform(84.1,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgVAcIAAg3IAqAAIAAAKIgdAAIAAAMIAaAAIAAAJIgaAAIAAAOIAeAAIAAAKg");
	this.shape_9.setTransform(78.6,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgWAcIAAg3IAZAAQAFgBAEACIAGAEQADACABAEIABAHIgBAHQgBACgDACIgGAFQgEABgFAAIgMAAIAAAUgAgJAAIAJAAIAEgBIADgBIADgDIABgEIgBgFIgDgDIgDAAIgEgBIgJAAg");
	this.shape_10.setTransform(73.4,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgVAcIAAg3IAqAAIAAAKIgdAAIAAAMIAaAAIAAAJIgaAAIAAAOIAeAAIAAAKg");
	this.shape_11.setTransform(66,17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgXAcIAAgKIAegjIgbAAIAAgKIArAAIAAAKIgeAjIAfAAIAAAKg");
	this.shape_12.setTransform(60.7,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgFAcIAAg3IALAAIAAA3g");
	this.shape_13.setTransform(56.9,17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AATAcIAAgnIAAAAIgOAnIgJAAIgOgmIAAAmIgMAAIAAg3IASAAIAMAlIANglIASAAIAAA3g");
	this.shape_14.setTransform(52.1,17.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgFAcIAAg3IALAAIAAA3g");
	this.shape_15.setTransform(47.3,17.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgFAcIAAgtIgSAAIAAgKIAuAAIAAAKIgRAAIAAAtg");
	this.shape_16.setTransform(43.8,17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgWAcIAAg3IAZAAQAFgBAEACIAGAEQADACABAEIABAHIgBAHQgBACgDACIgGAFQgEABgFAAIgMAAIAAAUgAgJAAIAJAAIAEgBIADgBIADgDIABgEIgBgFIgDgDIgDAAIgEgBIgJAAg");
	this.shape_17.setTransform(38.8,17.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgKAbQgGgCgDgEQgEgEgCgFQgCgGAAgGQAAgFACgFQACgGAEgEQADgFAGgCQAEgCAGAAQAHAAAFACQAFACAEAFQADAEACAGQACAFAAAFQAAAGgCAGQgCAFgDAEQgEAEgFACQgFADgHAAQgGAAgEgDgAgGgRIgFAFIgDAGIgBAGIABAHIADAHIAFADQADACADAAQAFAAADgCQADgBABgCIADgHIABgHIgBgGIgDgGIgEgFQgDgCgFABQgDgBgDACg");
	this.shape_18.setTransform(32.9,17.2);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(81.7,21.5,1,1,0,0,0,85.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.8,170.9,50.7);


(lib.gfxElement3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARTWORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#34DB9F").ss(0.8).p("AAAAlIAAhJ");
	this.shape.setTransform(-72.2,110.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#34DB9F").ss(0.8).p("AAfgQIgfAeIgege");
	this.shape_1.setTransform(-72.2,113.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AgegPIA9AAIgfAfg");
	this.shape_2.setTransform(-72.2,113);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#34DB9F").ss(0.8).p("ABdgRIAAAgIi5AAIAAgi");
	this.shape_3.setTransform(-72.2,116.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEAEA").s().p("AhcASIAAgjIC5ACIAAAhg");
	this.shape_4.setTransform(-72.2,116.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#636363").s().p("AgCAaQgEgDABgGIAAgcIgHAAIAAgGIAHAAIAAgLIAGAAIAAALIALAAIAAAGIgLAAIAAAbQAAAHAGAAIAGgBIAAAGIgHABQgGAAgCgDg");
	this.shape_5.setTransform(-28,112.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#636363").s().p("AgKAYIAAguIAHAAIAAAJQAEgKAKAAIAAAHQgHAAgEAEQgDADAAAIIAAAZg");
	this.shape_6.setTransform(-31,113.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#636363").s().p("AgQASQgGgHAAgKIAAgBQAAgKAGgGQAHgIAJAAQAKAAAGAIQAHAGAAAKIAAABQAAAKgHAHQgGAGgKAAQgJAAgHgGgAgKgNQgEAGAAAHIAAABQAAAHAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgHIAAgBQAAgHgEgGQgEgEgHAAQgGAAgEAEg");
	this.shape_7.setTransform(-35.6,113.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#636363").s().p("AgVAgIAAg+IAHAAIAAAIQACgEAEgCQAFgDAEAAQAJAAAHAGQAFAHABALIAAAAQgBAKgFAHQgHAHgJAAQgKAAgFgJIAAAYgAgKgVQgEAFAAAJIAAABQAAAHAEAFQAEAEAGAAQAPAAAAgQIAAgBQAAgJgFgEQgEgFgGAAQgFAAgFAEg");
	this.shape_8.setTransform(-40.9,113.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#636363").s().p("AAMAXIgMgTIgMATIgIAAIARgXIgQgXIAJAAIAKARIAMgRIAIAAIgQAXIARAXg");
	this.shape_9.setTransform(-46.3,113.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#636363").s().p("AgTAgIAAg/IAlAAIAAAGIgdAAIAAAWIAYAAIAAAGIgYAAIAAAXIAfAAIAAAGg");
	this.shape_10.setTransform(-50.9,112.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#34DB9F").ss(0.8).p("AooiCIRRAAIAAEFIxRAAg");
	this.shape_11.setTransform(-52.9,112.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AooCCIAAkEIRQAAIAAEEg");
	this.shape_12.setTransform(-52.9,112.3);

	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(57.6,102.4,1,1,0,0,0,11.3,24.4);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.1,114.8,1,1,0,0,0,11.3,11.8);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(35.5,109.3,1,1,0,0,0,11.3,17.4);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(47.3,105.8,1,1,0,0,0,11.3,20.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#828282").s().p("AgWAhIAAhBIAsAAIAAAKIggAAIAAARIAdAAIAAAJIgdAAIAAAdg");
	this.shape_13.setTransform(25.5,76.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#828282").s().p("AgbAhIAAhBIAbAAQAGAAAGADQAGADADAEQAEAFABAFQACAGAAAGQAAAHgCAGQgBAFgEAFQgEAFgFACQgGADgGAAgAgQAXIAMAAQAGAAAEgCQAEgBACgDIAEgIIABgJIgBgIQgBgEgDgEQgCgDgEgCQgFgBgFAAIgMAAg");
	this.shape_14.setTransform(19.4,76.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#828282").s().p("AgZAhIAAhBIAcAAQAHAAAFACQAEACACADQADADABAEIABAGIgBAHQgBAEgDACQgCADgEACQgFABgHAAIgRAAIAAAagAgOgBIAQAAIAFAAIADgCIADgDIABgGIgBgFIgDgDQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgQAAg");
	this.shape_15.setTransform(13.1,76.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AiCBJIAAiRIEFAAIAACRg");
	this.shape_16.setTransform(18.5,76.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3EF8B1").s().p("AgkAlIAAhJIBJBJg");
	this.shape_17.setTransform(64.2,68.7);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(41.4,95.1,1,1,0,0,0,33.5,37.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A4B6CB").ss(0.3).p("AvjAAIfHAA");
	this.shape_18.setTransform(-20.3,87.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#364150").s().p("AgKAZQgFgCgDgEIgFgIQgBgFAAgGQAAgFABgFQACgEADgEQADgEAFgCQAFgCAFAAQAGAAAFACIAIAGQADAEABAEQACAFAAAFQAAAGgCAFQgBAEgDAEQgEAEgEACQgFACgGAAQgFAAgFgCgAgFgRQgDABgCADQgDACgBAEQgBADAAAEQAAAFABADQABAEADADIAFADIAFABIAGgBIAFgDQADgDABgEQABgDAAgFQAAgEgBgDQgBgEgDgCQgCgDgDgBQgDgBgDgBIgFACg");
	this.shape_19.setTransform(-69.6,71.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#364150").s().p("AgDAkIAAgzIAHAAIAAAzgAgDgYIAAgLIAHAAIAAALg");
	this.shape_20.setTransform(-73.6,70.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#364150").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_21.setTransform(-75.8,70.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#364150").s().p("AgKAZQgFgCgDgEIgFgIQgBgFAAgGQAAgFABgFQACgEADgEQADgEAFgCQAFgCAFAAQAGAAAFACIAIAGQADAEABAEQACAFAAAFQAAAGgCAFQgBAEgDAEQgEAEgEACQgFACgGAAQgFAAgFgCgAgFgRQgDABgCADQgDACgBAEQgBADAAAEQAAAFABADQABAEADADIAFADIAFABIAGgBIAFgDQADgDABgEQABgDAAgFQAAgEgBgDQgBgEgDgCQgCgDgDgBQgDgBgDgBIgFACg");
	this.shape_22.setTransform(-79.7,71.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#364150").s().p("AgEAkIAAgrIgJAAIAAgIIAJAAIAAgHQAAgHADgDQADgDAHAAIADAAIACAAIAAAIIgCgBIgCAAIgFABQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAAHIAKAAIAAAIIgKAAIAAArg");
	this.shape_23.setTransform(-84,70.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#364150").s().p("AAHAiIgFgBIgDgCIgCgDIgBgGIAAgfIgJAAIAAgIIAJAAIAAgQIAHAAIAAAQIALAAIAAAIIgLAAIAAAeIABADIABABIACABIADAAIAEAAIAAAIg");
	this.shape_24.setTransform(-87.2,71.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#364150").s().p("AgNAbIAAgzIAIAAIAAAKIABAAQADgFADgEQAFgCAHAAIAAAJQgGgBgDACQgEACgBACQgCADgBADIgBAIIAAAYg");
	this.shape_25.setTransform(-90,71.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#364150").s().p("AgKAZQgFgCgDgEIgFgIQgBgFAAgGQAAgFABgFQACgEADgEQADgEAFgCQAFgCAFAAQAGAAAFACIAIAGQADAEABAEQACAFAAAFQAAAGgCAFQgBAEgDAEQgEAEgEACQgFACgGAAQgFAAgFgCgAgFgRQgDABgCADQgDACgBAEQgBADAAAEQAAAFABADQABAEADADIAFADIAFABIAGgBIAFgDQADgDABgEQABgDAAgFQAAgEgBgDQgBgEgDgCQgCgDgDgBQgDgBgDgBIgFACg");
	this.shape_26.setTransform(-94.8,71.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#364150").s().p("AgZAkIAAhHIAdAAQAMAAAFAGQAGAFAAAKQAAAKgGAFQgFAGgMAAIgUAAIAAAdgAgQAAIASAAQAHAAAEgEQAEgDAAgHQAAgGgEgDQgEgEgHAAIgSAAg");
	this.shape_27.setTransform(-100.7,70.8);

	this.instance_5 = new lib.Path_1_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-19.7,95.1,1,1,0,0,0,103.2,45.1);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#34DB9F").ss(0.8).p("AAAAlIAAhJ");
	this.shape_28.setTransform(48,57.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#34DB9F").ss(0.8).p("AAfgQIgfAeIgege");
	this.shape_29.setTransform(48,59.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAEAEA").s().p("AgegPIA9AAIgfAfg");
	this.shape_30.setTransform(48,59.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#34DB9F").ss(0.8).p("ABcgRIAAAgIi3AAIAAgi");
	this.shape_31.setTransform(48,62.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EAEAEA").s().p("AhbASIAAgjIC3ACIAAAhg");
	this.shape_32.setTransform(48,62.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#636363").s().p("AgCAaQgEgDAAgGIAAgcIgGAAIAAgGIAGAAIAAgLIAHAAIAAALIALAAIAAAGIgLAAIAAAbQAAAHAGAAIAGgBIAAAGIgGABQgHAAgCgDg");
	this.shape_33.setTransform(92.3,59.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#636363").s().p("AgLAYIAAguIAIAAIAAAIQAEgIAKgBIAAAHQgHAAgEADQgDAEAAAIIAAAZg");
	this.shape_34.setTransform(89.3,59.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#636363").s().p("AgQARQgGgGAAgLIAAAAQAAgKAGgHQAHgGAJAAQAKAAAGAGQAHAHAAAKIAAAAQAAALgHAGQgGAIgKgBQgJABgHgIgAgKgMQgEAFAAAHIAAAAQAAAJAEAFQAEAEAGAAQAHAAAEgFQAEgEAAgJIAAAAQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_35.setTransform(84.7,59.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#636363").s().p("AgWAgIAAg+IAIAAIAAAIQACgEAFgCQAEgDAEAAQAJAAAHAGQAFAHAAALIAAAAQAAAKgFAHQgHAHgJAAQgKAAgFgJIAAAYgAgKgVQgEAFAAAJIAAABQAAAHAEAFQAEAEAGAAQAOAAAAgQIAAgBQAAgJgDgEQgEgFgHAAQgGAAgEAEg");
	this.shape_36.setTransform(79.4,60.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#636363").s().p("AAMAXIgMgSIgMASIgIAAIARgXIgQgWIAJAAIAKARIAMgRIAIAAIgQAWIARAXg");
	this.shape_37.setTransform(74,59.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#636363").s().p("AgSAgIAAg/IAkAAIAAAGIgcAAIAAAWIAWAAIAAAGIgWAAIAAAXIAdAAIAAAGg");
	this.shape_38.setTransform(69.4,58.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#34DB9F").ss(0.8).p("AoniCIRPAAIAAEFIxPAAg");
	this.shape_39.setTransform(67.3,58.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFEFEF").s().p("AonCCIAAkEIRPAAIAAEEg");
	this.shape_40.setTransform(67.3,58.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#828282").s().p("AgWAhIAAhBIAtAAIAAAKIghAAIAAARIAcAAIAAAJIgcAAIAAAdg");
	this.shape_41.setTransform(145.7,22.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#828282").s().p("AgbAhIAAhBIAbAAQAGAAAGADQAFADAEAEQADADADAHQABAGAAAGQAAAHgBAGQgDAHgDADQgDAEgGADQgGADgGAAgAgPAXIALAAQAGAAADgBQAGgDABgCQADgDAAgFIACgJIgCgIIgDgIQgBgDgGgBQgDgCgGAAIgLAAg");
	this.shape_42.setTransform(139.7,22.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#828282").s().p("AgZAhIAAhBIAdAAQAFAAAGACQAEADADACIADAHIABAHIgBAGQgBAEgCACQgDACgEADQgEACgHAAIgRAAIAAAZgAgNgBIAPAAIAFAAIADgCIADgDIABgFIAAgGIgDgDIgEgCIgEAAIgQAAg");
	this.shape_43.setTransform(133.3,22.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFEFEF").s().p("AiCBJIAAiRIEFAAIAACRg");
	this.shape_44.setTransform(138.7,23.1);

	this.instance_6 = new lib.ClipGroup_10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(162.7,52.3,1,1,0,0,0,7.8,7.8);

	this.instance_7 = new lib.ClipGroup_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(158,52.3,1,1,0,0,0,7.8,7.8);

	this.instance_8 = new lib.ClipGroup_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(162.7,47.9,1,1,0,0,0,7.8,7.8);

	this.instance_9 = new lib.ClipGroup_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(158,47.9,1,1,0,0,0,7.8,7.8);

	this.instance_10 = new lib.ClipGroup_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(162.7,43.4,1,1,0,0,0,7.8,7.7);

	this.instance_11 = new lib.ClipGroup_5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(158,43.4,1,1,0,0,0,7.8,7.7);

	this.instance_12 = new lib.ClipGroup_6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(162.7,39,1,1,0,0,0,7.8,7.7);

	this.instance_13 = new lib.ClipGroup_7();
	this.instance_13.parent = this;
	this.instance_13.setTransform(158,39,1,1,0,0,0,7.8,7.7);

	this.instance_14 = new lib.ClipGroup_8();
	this.instance_14.parent = this;
	this.instance_14.setTransform(160.3,45,1,1,0,0,0,8.8,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F48E8F").s().p("AgkAlIAAhJIBJBJg");
	this.shape_45.setTransform(184.4,15.3);

	this.instance_15 = new lib.ClipGroup_9();
	this.instance_15.parent = this;
	this.instance_15.setTransform(161.7,41.7,1,1,0,0,0,33.5,37.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A4B6CB").ss(0.3).p("AvkAAIfIAA");
	this.shape_46.setTransform(100,34.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#364150").s().p("AgPAkIgDgBIAAgIIADABIACAAIAEgBIADgDIAEgJIgVgyIAKAAIANApIAPgpIAJAAIgWA6IgDAGIgCAEIgFACIgEABg");
	this.shape_47.setTransform(83.6,19.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#364150").s().p("AAHAiIgFgBIgDgBIgCgEIgBgGIAAgfIgJAAIAAgIIAJAAIAAgQIAHAAIAAAQIALAAIAAAIIgLAAIAAAeIABADIABABIACABIADAAIAEAAIAAAIg");
	this.shape_48.setTransform(79.4,17.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#364150").s().p("AgDAkIAAgzIAHAAIAAAzgAgDgYIAAgLIAHAAIAAALg");
	this.shape_49.setTransform(76.9,17.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#364150").s().p("AgDAaIgTgzIAJAAIANAqIAOgqIAJAAIgSAzg");
	this.shape_50.setTransform(73.3,18.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#364150").s().p("AgDAkIAAgzIAHAAIAAAzgAgDgYIAAgLIAHAAIAAALg");
	this.shape_51.setTransform(69.7,17.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#364150").s().p("AAHAiIgFgBIgDgBIgCgEIgBgGIAAgfIgJAAIAAgIIAJAAIAAgQIAHAAIAAAQIALAAIAAAIIgLAAIAAAeIABADIABABIACABIADAAIAEAAIAAAIg");
	this.shape_52.setTransform(66.9,17.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#364150").s().p("AgIAZQgFgCgDgDQgDgDgCgFQgBgGgBgFQABgFABgFQACgFADgEQACgDAGgCQAEgDAFAAIAIABQAEABADADQADACACADQACAEAAAEIgJAAQgBgFgCgCQgEgEgFAAQgEAAgDACQgDACgCADQgCADgBADIgBAHIABAHIADAGIAFAEQACACAEAAQAGgBAEgDQADgDABgGIAIAAQgBAJgFAGQgHAFgJAAQgFAAgEgCg");
	this.shape_53.setTransform(62.8,18.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#364150").s().p("AAXAkIgIgWIgeAAIgHAWIgKAAIAchHIAJAAIAcBHgAgLAGIAXAAIgMggIAAAAg");
	this.shape_54.setTransform(56.9,17.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#364150").s().p("AgHAkQgDgBgDgCIgFgEQgCgDgBgEIAJAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAEADIAEACIADAAQAEAAADgBIAFgFQACgCABgDIABgIIAAgEQgDAFgEACQgFACgEAAQgFAAgFgCQgEgCgDgDQgDgEgBgEIgCgKIACgJQABgFADgEQACgEAFgCQAFgDAFAAQAFAAAEADQAEACADADIAAgGIAIAAIAAAuQAAAMgGAHQgGAGgMAAIgHgBgAgFgbQgDACgCADIgDAGIgBAGIABAHIACAGIAFAEQADACADAAQAEAAADgCIAFgEQACgDAAgDIABgHIAAgGIgDgGIgFgFQgCgBgEgBQgDABgDABg");
	this.shape_55.setTransform(47.9,19.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#364150").s().p("AANAbIAAgiQAAgFgDgDQgDgDgFAAQgCAAgDACIgFACIgDAGIgBAHIAAAcIgIAAIAAgzIAIAAIAAAIQAFgJALAAQAFgBADACQAEACACACIADAGIAAAHIAAAig");
	this.shape_56.setTransform(42.4,18.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#364150").s().p("AgDAkIAAgzIAHAAIAAAzgAgDgYIAAgLIAHAAIAAALg");
	this.shape_57.setTransform(38.5,17.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#364150").s().p("AgHAaQgEAAgDgDIgFgFIgCgJIAJAAQgBAEACABIADADIAFACIADABIAFAAIADgCIAEgCIABgEQAAgDgDgCIgGgCIgHgCIgIgDQgEAAgDgDQgCgDAAgFQAAgEACgDIAFgEIAFgDIAHgBIAHABQAEABADACQADACABACQACAEAAAEIgIAAIgBgEIgDgDIgDgBIgEgBIgDABIgEABIgDACIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAFACIAFACIAFABIAHACIAEABIAFAFQABACAAAEQAAAEgCADQgCAEgDABIgHADIgIABIgHgBg");
	this.shape_58.setTransform(34.9,18.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#364150").s().p("AANAZQgCgCAAgEQgDAEgFACQgEACgFAAIgHgBIgFgCIgEgEQgBgEAAgDQAAgFABgDQACgCACgCQADgBADgBIAGgBIAGgBIAGgBIADgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgEIgDgDIgEgBIgDgBQgFAAgEACQgDADgBAFIgIAAIACgIQACgDADgCIAGgDIAIgBIAHAAIAGADQADABABADQACADAAAFIAAAZIABAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAIACgBIAAAHIgGABQgDAAgCgCgAAGABIgFABIgFABIgFABIgEADQgBACAAADIABADIACADIADABIAEABIAGgCQADgBACgCIADgDIABgEIAAgIIgFABg");
	this.shape_59.setTransform(29.8,18.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#364150").s().p("AgJAZQgFgCgDgDQgDgEgBgFIgCgLQAAgFACgFQACgEADgFQADgDAEgCQAFgCAEAAQAIAAAEADQAFADACAEQADAEABAGIABAJIgmAAIABAGIADAFIAFAEIAGACQAGAAADgDQAEgCABgGIAIAAQgCAKgFAEQgHAEgIAAQgGAAgEgCgAgFgRIgFADIgCAEIgCAGIAdAAIgBgGIgEgEIgEgDIgGgCQgDABgCABg");
	this.shape_60.setTransform(24.5,18.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#364150").s().p("AgXAkIAAhHIAKAAIAAA/IAlAAIAAAIg");
	this.shape_61.setTransform(19.3,17.4);

	this.instance_16 = new lib.Path_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(100.6,41.6,1,1,0,0,0,103.5,45.6);
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_15},{t:this.shape_45},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_5},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_4},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,-2,326.3,144.4);


(lib.gfxElement1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARTWORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A4B6CB").ss(0.2).p("AuiAAIdFAA");
	this.shape.setTransform(123.7,92.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A4B6CB").ss(0.3).p("AxjAAMAjHAAA");
	this.shape_1.setTransform(112.4,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7B8FAB").ss(0.9).p("AuYggIFUBBICTghICiAhIE+gqICnAdIEtguIGWA7");
	this.shape_2.setTransform(123.8,88.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8C86E0").ss(0.9).p("AOgA5IiohMIidA4Ik0hcIiIA7Ik+gQIh1A0IhigtIiaA3Ij3hLIiYBS");
	this.shape_3.setTransform(123.7,83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FCB879").ss(0.9).p("AufgFICnAjIE0hBICTAjICdgMICMAaIExhMICdAbQAQADB6AqICdgxICyBn");
	this.shape_4.setTransform(123.7,81);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32DF94").ss(0.9).p("AueAPICohPICUBqICNg1IClBMQFxgrAIAAIDMAQIDKgaIClAGIBdgNIC+A8");
	this.shape_5.setTransform(123.6,82.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FA0B1A").ss(0.9).p("AugAUICYhWQCCAoAIAAQAIAACahTICVBCICXhCQAigbAjgbQBGg1AFAAQAFAABJBOQAlAoAkAnICfh1ICSB7IClguQB6gOAIAEQAFACBmCjQAzBSAyBS");
	this.shape_6.setTransform(123.8,65.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A4B6CB").ss(0.5).p("AgmAAIBOAA");
	this.shape_7.setTransform(27.5,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A4B6CB").ss(0.5).p("AgmAAIBOAA");
	this.shape_8.setTransform(27.5,93);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A4B6CB").ss(0.5).p("AgmAAIBOAA");
	this.shape_9.setTransform(27.5,74.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A4B6CB").ss(0.5).p("AgmAAIBOAA");
	this.shape_10.setTransform(27.5,59.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A4B6CB").ss(0.5).p("AAAjxIAAHi");
	this.shape_11.setTransform(31.3,68.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D7C8E").s().p("AgDAPIgDgCIgCgDIgBgEIAFAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIADABIACgBIACgBIABgCIAAgCIAAgCIgBgDIgCAAIgCgBIgCABIgCABIgFAAIADgPIAPAAIAAAEIgLAAIgCAIIABAAIACgBIACgBIAEABIADABIACACIAAAFIAAADIgCAEIgDACIgFABIgDAAg");
	this.shape_12.setTransform(17.4,43.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D7C8E").s().p("AgFAPIABgHIACgHIADgFIAEgFIgOAAIAAgFIATAAIAAAEIgEAGIgDAFIgDAGIAAAIg");
	this.shape_13.setTransform(15.1,43.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D7C8E").s().p("AgEAOIgDgEIgCgFIAAgFIAAgEIACgFIADgEQACgBACAAQADAAACABIADAEIACAFIAAAEIAAAFIgCAFIgDAEQgCABgDAAQgCAAgCgBgAgCgJIgBACIgBAEIAAADIAAAEIABAEIABACIACABIADgBIABgCIABgEIAAgEIAAgDIgBgEIgBgCIgDgBIgCABg");
	this.shape_14.setTransform(17.4,59.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D7C8E").s().p("AgDAOIgDgBIgCgDIgBgEIAFAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIADABIACAAIACgCIABgCIAAgDIAAgBIgBgCIgCgBIgCgBIgCABIgCABIgFAAIADgPIAPAAIAAAEIgLAAIgCAIIABAAIACgCIACgBIAEABIADACIACADIAAADIAAAEIgCAEIgDACIgFABIgDgBg");
	this.shape_15.setTransform(15.1,60);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D7C8E").s().p("AgEAOIgDgEIgCgFIAAgFIAAgEIACgFIADgEQACgBACAAQADAAACABIADAEIACAFIAAAEIAAAFIgCAFIgDAEQgCABgDAAQgCAAgCgBgAgCgJIgBACIgBAEIAAADIAAAEIABAEIABACIACABIADgBIABgCIABgEIAAgEIAAgDIgBgEIgBgCIgDgBIgCABg");
	this.shape_16.setTransform(15.1,92);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D7C8E").s().p("AgDAPIgDgCIgCgDIgBgEIAFAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIADABIACAAIACgCIABgCIAAgCIAAgCIgBgDIgCAAIgCgBIgCABIgCABIgFAAIADgPIAPAAIAAAEIgLAAIgCAIIABAAIACgBIACgBIAEABIADABIACACIAAAFIAAADIgCAEIgDACIgFABIgDAAg");
	this.shape_17.setTransform(17.4,76);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D7C8E").s().p("AgJAPQAAgDACgDIAEgFIADgCIACgCIACgBIABgEIAAgBIgBgCIgBgBIgDgBIgBABIgCABIAAACIgBADIgFAAIABgEIACgEIADgCIAEgBIAEABIADACIACADIAAADIgBADIgBACIgCACIgDACIgCABIgBACIgCACIgBABIANAAIAAAFg");
	this.shape_18.setTransform(15.1,75.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#364150").s().p("AgJAZQgEgCgDgEQgDgDgCgFIgCgLQAAgFACgFQACgFADgEQADgDAFgCQAEgCAFAAQAGAAAFADQAEADADAEQADAEABAGIABAIIgmAAIABAHIADAGIAFADIAGABQAGAAADgCQAEgDAAgFIAJAAQgBAJgHAFQgFAEgJAAQgGAAgEgCgAgFgRIgEADIgEAEIgBAGIAdAAIgCgGIgCgEIgFgDIgGgCQgCABgDABg");
	this.shape_19.setTransform(105.5,15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#364150").s().p("AgIAZQgFgCgDgDQgDgDgCgGQgBgFgBgFQABgFABgFQACgFADgEQACgDAGgDQAEgCAFAAIAIABQAEABADADQADACACADQACADAAAFIgJAAQgBgFgCgDQgEgCgFgBQgEAAgDACQgDACgCADQgCADgBADIgBAHIABAHIADAGIAFAEQACABAEAAQAGAAAEgDQADgDABgGIAIAAQgBAKgFAFQgHAFgJAAQgFAAgEgCg");
	this.shape_20.setTransform(100.1,15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#364150").s().p("AANAbIAAgiQAAgFgDgDQgDgDgFAAQgCAAgDACIgFACIgDAGIgBAGIAAAdIgIAAIAAgzIAIAAIAAAIQAFgJALAAQAFAAADABQAEACACACIADAGIAAAIIAAAhg");
	this.shape_21.setTransform(94.6,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#364150").s().p("AANAZQgCgCAAgEQgDAEgFACQgEACgFAAIgHgBIgFgCIgEgFQgBgDAAgDQAAgFABgCQACgDACgCQADgBADgBIAGgBIAGgBIAGgBIADgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgFIgDgCIgEgBIgDgBQgFAAgEACQgDADgBAFIgIAAIACgIQACgDADgCIAGgDIAIgBIAHAAIAGACQADACABADQACADAAAFIAAAZIABAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIACAAIAAAHIgGABQgDAAgCgCgAAGABIgFABIgFABIgFABIgEADQgBACAAADIABAEIACACIADABIAEAAIAGgBQADgBACgBIADgEIABgEIAAgIIgFABg");
	this.shape_22.setTransform(89.3,15.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#364150").s().p("AAcAbIAAghIgBgFIgBgDIgDgDIgFgBQgHAAgDAEQgEAEAAAGIAAAfIgHAAIAAghIgBgFIgBgDIgDgDIgFgBQgEAAgCACIgFADIgCAFIgBAEIAAAfIgIAAIAAgzIAIAAIAAAIQAGgJALAAQAEAAAEACQADABACAGQACgFAFgCQAEgCAFAAIAHABIAFACQADACABADQABACAAAEIAAAmg");
	this.shape_23.setTransform(82.3,15.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#364150").s().p("AgNAbIAAgzIAIAAIAAAKIABAAQADgFADgDQAFgDAHAAIAAAJQgGAAgDABQgEABgBADQgCADgBAEIgBAHIAAAYg");
	this.shape_24.setTransform(76.7,15.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#364150").s().p("AgKAZQgFgCgDgEIgFgIQgBgFAAgGQAAgFABgFQACgEADgEQADgEAFgCQAFgCAFAAQAGAAAFACIAIAGQADAEABAEQACAFAAAFQAAAGgCAFQgBAEgDAEQgEAEgEACQgFACgGAAQgFAAgFgCgAgFgRQgDABgCADQgDACgBAEQgBADAAAEQAAAFABADQABAEADADIAFADIAFABIAGgBIAFgDQADgDABgEQABgDAAgFQAAgEgBgDQgBgEgDgCQgCgDgDgBQgDgBgDgBIgFACg");
	this.shape_25.setTransform(71.9,15.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#364150").s().p("AgEAkIAAgrIgJAAIAAgIIAJAAIAAgIQAAgGADgDQADgDAHAAIADAAIACAAIAAAIIgCAAIgCAAIgFAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAAHIAKAAIAAAIIgKAAIAAArg");
	this.shape_26.setTransform(67.6,14.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#364150").s().p("AgNAbIAAgzIAIAAIAAAKIABAAQADgFADgDQAFgDAHAAIAAAJQgGAAgDABQgEABgBADQgCADgBAEIgBAHIAAAYg");
	this.shape_27.setTransform(64.7,15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#364150").s().p("AgJAZQgEgCgDgEQgDgDgCgFIgCgLQAAgFACgFQABgFAEgEQADgDAFgCQAEgCAFAAQAGAAAFADQAEADADAEQADAEABAGIABAIIgmAAIABAHIADAGIAFADIAGABQAGAAADgCQAEgDAAgFIAJAAQgBAJgGAFQgHAEgIAAQgFAAgFgCgAgFgRIgEADIgEAEIgBAGIAdAAIgCgGIgCgEIgFgDIgGgCQgCABgDABg");
	this.shape_28.setTransform(60.2,15.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#364150").s().p("AgZAkIAAhHIAdAAQALAAAGAGQAFAFABAKQgBAKgFAFQgGAGgLAAIgUAAIAAAdgAgQAAIARAAQAJAAADgEQAEgDAAgHQAAgGgEgDQgDgEgJAAIgRAAg");
	this.shape_29.setTransform(54.4,14.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#364150").s().p("AgKAZQgFgCgDgEIgFgIQgBgFAAgGQAAgFABgFQACgEADgEQADgEAFgCQAFgCAFAAQAGAAAFACIAIAGQADAEABAEQACAFAAAFQAAAGgCAFQgBAEgDAEQgEAEgEACQgFACgGAAQgFAAgFgCgAgFgRQgDABgCADQgDACgBAEQgBADAAAEQAAAFABADQABAEADADIAFADIAFABIAGgBIAFgDQADgDABgEQABgDAAgFQAAgEgBgDQgBgEgDgCQgCgDgDgBQgDgBgDgBIgFACg");
	this.shape_30.setTransform(45.4,15.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#364150").s().p("AgDAkIAAgzIAHAAIAAAzgAgDgYIAAgLIAHAAIAAALg");
	this.shape_31.setTransform(41.4,14.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#364150").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_32.setTransform(39.2,14.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#364150").s().p("AgKAZQgFgCgDgEIgFgIQgBgFAAgGQAAgFABgFQACgEADgEQADgEAFgCQAFgCAFAAQAGAAAFACIAIAGQADAEABAEQACAFAAAFQAAAGgCAFQgBAEgDAEQgEAEgEACQgFACgGAAQgFAAgFgCgAgFgRQgDABgCADQgDACgBAEQgBADAAAEQAAAFABADQABAEADADIAFADIAFABIAGgBIAFgDQADgDABgEQABgDAAgFQAAgEgBgDQgBgEgDgCQgCgDgDgBQgDgBgDgBIgFACg");
	this.shape_33.setTransform(35.3,15.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#364150").s().p("AgEAkIAAgrIgJAAIAAgIIAJAAIAAgIQAAgGADgDQADgDAHAAIADAAIACAAIAAAIIgCAAIgCAAIgFAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAAHIAKAAIAAAIIgKAAIAAArg");
	this.shape_34.setTransform(31,14.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#364150").s().p("AAHAiIgFgBIgDgCIgCgDIgBgGIAAgfIgJAAIAAgIIAJAAIAAgQIAHAAIAAAQIALAAIAAAIIgLAAIAAAeIABADIABABIACABIADAAIAEAAIAAAIg");
	this.shape_35.setTransform(27.8,15.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#364150").s().p("AgNAbIAAgzIAIAAIAAAKIABAAQADgFADgDQAFgDAHAAIAAAJQgGAAgDABQgEABgBADQgCADgBAEIgBAHIAAAYg");
	this.shape_36.setTransform(25,15.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#364150").s().p("AgKAZQgFgCgDgEIgFgIQgBgFAAgGQAAgFABgFQACgEADgEQADgEAFgCQAFgCAFAAQAGAAAFACIAIAGQADAEABAEQACAFAAAFQAAAGgCAFQgBAEgDAEQgEAEgEACQgFACgGAAQgFAAgFgCgAgFgRQgDABgCADQgDACgBAEQgBADAAAEQAAAFABADQABAEADADIAFADIAFABIAGgBIAFgDQADgDABgEQABgDAAgFQAAgEgBgDQgBgEgDgCQgCgDgDgBQgDgBgDgBIgFACg");
	this.shape_37.setTransform(20.2,15.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#364150").s().p("AgaAkIAAhHIAfAAQALAAAFAGQAGAFgBAKQABAKgGAFQgFAGgLAAIgVAAIAAAdgAgQAAIASAAQAIAAAEgEQADgDAAgHQAAgGgDgDQgEgEgIAAIgSAAg");
	this.shape_38.setTransform(14.3,14.9);

	this.instance = new lib.Path_12();
	this.instance.parent = this;
	this.instance.setTransform(112.5,53.7,1,1,0,0,0,117.5,58.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,233,117);


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
p.nominalBounds = new cjs.Rectangle(0,0,242,194.9);


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
p.nominalBounds = new cjs.Rectangle(0,0,163.3,43.1);


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
p.nominalBounds = new cjs.Rectangle(-121.2,-2,326.3,144.4);


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
p.nominalBounds = new cjs.Rectangle(-2.9,-3,233,117);


(lib.mcBlah = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// Element 3
	this.instance = new lib.mcElement3();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,66.1,1,1,0,0,0,-1.2,-1.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:40.5,regY:68.3,x:-12.1,y:126.7},0).wait(1).to({x:-8,y:123.6},0).wait(1).to({x:-5.1,y:121.4},0).wait(1).to({x:-2.8,y:119.7},0).wait(1).to({x:-1,y:118.3},0).wait(1).to({x:0.6,y:117.1},0).wait(1).to({x:1.9,y:116.1},0).wait(1).to({x:3,y:115.2},0).wait(1).to({x:4.1,y:114.5},0).wait(1).to({x:4.9,y:113.8},0).wait(1).to({x:5.7,y:113.2},0).wait(1).to({x:6.4,y:112.7},0).wait(1).to({x:7.1,y:112.2},0).wait(1).to({x:7.6,y:111.8},0).wait(1).to({x:8.1,y:111.4},0).wait(1).to({x:8.5,y:111.1},0).wait(1).to({x:8.9,y:110.8},0).wait(1).to({x:9.3,y:110.5},0).wait(1).to({x:9.6,y:110.3},0).wait(1).to({x:9.8,y:110.1},0).wait(1).to({x:10,y:109.9},0).wait(1).to({x:10.2,y:109.8},0).wait(1).to({x:10.4,y:109.7},0).wait(1).to({x:10.5,y:109.6},0).wait(1).to({x:10.6,y:109.5},0).wait(1).to({regX:-1.2,regY:-1.2,x:-31,y:40},0).wait(1));

	// Element 1
	this.instance_1 = new lib.mcElement1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-213.1,-67.8,1,1,0,0,0,-0.6,-0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:112.4,regY:53.7,x:-86.7,y:-8.6},0).wait(1).to({x:-75.4,y:-4.1},0).wait(1).to({x:-67.3,y:-0.9},0).wait(1).to({x:-61.6,y:1.3},0).wait(1).to({x:-57.5,y:2.9},0).wait(1).to({x:-54.4,y:4.1},0).wait(1).to({x:-51.9,y:5.1},0).wait(1).to({x:-49.9,y:5.9},0).wait(1).to({x:-48.2,y:6.6},0).wait(1).to({x:-46.8,y:7.1},0).wait(1).to({x:-45.6,y:7.6},0).wait(1).to({x:-44.6,y:8},0).wait(1).to({x:-43.7,y:8.4},0).wait(1).to({x:-42.9,y:8.7},0).wait(1).to({x:-42.2,y:8.9},0).wait(1).to({x:-41.6,y:9.2},0).wait(1).to({x:-41,y:9.4},0).wait(1).to({x:-40.5,y:9.6},0).wait(1).to({x:-40.1,y:9.8},0).wait(1).to({x:-39.7,y:9.9},0).wait(1).to({x:-39.3,y:10.1},0).wait(1).to({x:-39,y:10.2},0).wait(1).to({x:-38.7,y:10.3},0).wait(1).to({x:-38.5,y:10.4},0).wait(1).to({x:-38.2,y:10.5},0).wait(1).to({x:-38,y:10.6},0).wait(1).to({x:-37.8,y:10.7},0).wait(1).to({x:-37.6},0).wait(1).to({x:-37.5,y:10.8},0).wait(1).to({regX:-0.6,regY:-0.2,x:-150.4,y:-43.1},0).wait(1));

	// Element 4
	this.instance_2 = new lib.mcElement4Banner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-147.2,-117.5,1,1,0,0,0,81.7,21.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(1).to({regX:81.6,regY:23.8,x:-147.1,y:-106.9},0).wait(1).to({x:-147,y:-103.1},0).wait(1).to({y:-100.3},0).wait(1).to({x:-146.9,y:-98},0).wait(1).to({y:-96.1},0).wait(1).to({y:-94.4},0).wait(1).to({y:-92.9},0).wait(1).to({x:-146.8,y:-91.6},0).wait(1).to({y:-90.5},0).wait(1).to({y:-89.5},0).wait(1).to({y:-88.6},0).wait(1).to({y:-87.8},0).wait(1).to({y:-87.1},0).wait(1).to({x:-146.7,y:-86.5},0).wait(1).to({y:-86},0).wait(1).to({y:-85.5},0).wait(1).to({y:-85.2},0).wait(1).to({y:-84.8},0).wait(1).to({y:-84.6},0).wait(1).to({y:-84.4},0).wait(1).to({y:-84.2},0).wait(1).to({y:-84.1},0).wait(1).to({y:-84},0).wait(1).to({regX:81.7,regY:21.5,x:-146.6,y:-86.3},0).wait(1));

	// Element 5
	this.instance_3 = new lib.mcElement5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(66.1,-110.5,1,1,0,0,0,126,87.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(1).to({regX:121,regY:97.5,x:57.8,y:-94.1},0).wait(1).to({x:56.3,y:-91.3},0).wait(1).to({x:55.2,y:-89.1},0).wait(1).to({x:54.3,y:-87.4},0).wait(1).to({x:53.5,y:-85.9},0).wait(1).to({x:52.9,y:-84.7},0).wait(1).to({x:52.3,y:-83.6},0).wait(1).to({x:51.8,y:-82.6},0).wait(1).to({x:51.4,y:-81.8},0).wait(1).to({x:51,y:-81},0).wait(1).to({x:50.6,y:-80.4},0).wait(1).to({x:50.3,y:-79.8},0).wait(1).to({x:50.1,y:-79.3},0).wait(1).to({x:49.8,y:-78.9},0).wait(1).to({x:49.7,y:-78.5},0).wait(1).to({x:49.5,y:-78.2},0).wait(1).to({x:49.4,y:-77.9},0).wait(1).to({x:49.2,y:-77.7},0).wait(1).to({y:-77.5},0).wait(1).to({x:49.1,y:-77.4},0).wait(1).to({x:49,y:-77.3},0).wait(2).to({regX:126,regY:87.5,x:54,y:-87.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Industrial_Bottom = function(mode,startPosition,loop) {
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
	manifest: [],
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