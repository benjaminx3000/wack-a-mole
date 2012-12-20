(function($){

	var HighFive = {
		paused: false,
		framerate: 30,
		time: {
			lastTime  : 0,
			deltaTime : 0
		},
		context: null, /*$(object) the window for our game*/
		debug: {
			enabled: true
		}
	};

	HighFive.listeners = {
		Update: []
	};

	var i;
	var l;

	//the main loop
	HighFive.Update = function (timestamp) {
		HighFive.time.deltaTime = timestamp - HighFive.time.lastTime;
		HighFive.time.lastTime  = timestamp;
		for(i = 0; i < HighFive.listeners.Update.length; i ++){
			$(HighFive.listeners.Update[i]).trigger('Update');
		}
		if(!hf.paused){
			window.webkitRequestAnimationFrame(HighFive.Update);
		}
	};


	//start
	HighFive.Start = function (context /*$(object)*/) {
		HighFive.context = context;
		if(HighFive.debug.enabled){
			$(HighFive.context).append(HighFive.debug.debugTool);
		}

		HighFive.Update(Date.now());
	};
	
	//pasue
	HighFive.Pause = function (){
		hf.paused = true;
	};

	// resume
	HighFive.Play = function () {
		hf.paused = false;
		Update();
	};

	HighFive.addEventListener = function (evt /*String*/, listener /*$(object)*/) {
		HighFive.listeners[evt].push(listener);
	};
	
	//here is our global scope
	window.hf = HighFive;
})(Zepto);