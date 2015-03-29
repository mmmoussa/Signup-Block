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
	else if ((url).indexOf('nationalpost') != -1){
		var itemsToRemove = ['#gregbox-outer', '#gregbox-signInTab', '#gregbox-closeBtn', '#destination_publishing_iframe_postmedia_0']
		removeList(itemsToRemove)
		$('div').filter(function() {
		    return $(this).css('z-index') == '99998';
		}).remove();
	}
})
