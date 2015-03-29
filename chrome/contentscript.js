$(document).ready(function() {
	
		
	var removeElement = function($element){
		$element ? $element.remove() : null;
	}
	
	var removeList = function(list){
		for (var i = 0; i < list.length; i++){
						removeElement($(itemsToRemove[i]));

		}
	}
	
	var url = document.URL;
	if ((url).indexOf('quora') != -1){
		var itemsToRemove = ['.modal_signup_dialog','.modal_signup_background','.modal_signup_facepile']
		removeList(itemsToRemove)

	}
	else if ((url).indexOf('pinterest') != -1){
		var itemsToRemove = ['.modalScroller','.modalContainer','.modalMask'] 
		removeList(itemsToRemove)
		
		var interval = setInterval(function(){
			if ($('.UnauthBanner')){
				console.log("cleared bottom banner");
				$('.UnauthBanner').remove();
				clearInterval(interval);
			}
		},500);
		
		setTimeout(function(){
			removeList(itemsToRemove)
		}, 2000);
	}
})
