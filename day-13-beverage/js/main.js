// Main
(function(){
	var openLink 			= document.querySelector('#open-links');
	var closeLink 			= document.querySelector('#close-links');
	var mastheadLink 	= document.querySelector('.mastnav-links');
	
	openLink.addEventListener('click', function() {
		openLink.classList.remove('show');
		openLink.classList.add('hide');
		
		closeLink.classList.remove('hide');
		closeLink.classList.add('show');
		
		mastheadLink.classList.remove('hide');
	}, false);
	
	closeLink.addEventListener('click', function() {
		openLink.classList.remove('hide');
		openLink.classList.add('show');
		
		closeLink.classList.remove('show');
		closeLink.classList.add('hide');
		
		mastheadLink.classList.add('hide');
	}, false);	
})();	
