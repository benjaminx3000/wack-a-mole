(function(hf, $){
	console.log(hf, $);
	var	debugTool = $('<div class="debug"><p>frame rate:</p></div>');
	var debugText = $(debugTool).find('p');

	$(debugTool).on('Update', function(e){
		$(debugText).text('frame rate: ' +  Math.ceil(1000 / hf.time.deltaTime));
	});
	
	console.log('Debugger ready');
	hf.addEventListener('Update', debugTool);

	hf.debug.debugTool = debugTool;

})(window.hf, Zepto);