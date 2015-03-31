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
		$("body").removeClass("noTouch noScroll")

		var interval = setInterval(function(){
			if ($('.UnauthBanner')){
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
	else if ((url).indexOf('newyorker') != -1){
		var itemsToRemove = ['#CM-notification']
		removeList(itemsToRemove)
		$('.page-container').css('opacity', function(index) {
			return index = 1;
		});
		$('.page-container').css('-webkit-user-select', function(index) {
			return index = 'auto';
		});
		$('.page-container').css('pointer-events', function(index) {
			return index = 'auto';
		});
		$('.content-wrapper').css('-webkit-user-select', function(index) {
			return index = 'auto';
		});
		$('.content-wrapper').css('pointer-events', function(index) {
			return index = 'auto';
		});
	}
	else if ((url).indexOf('twitter') != -1){
		var itemsToRemove = ['.SignupDialog', '.alert-messages', '.modal-overlay']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('youtube') != -1){
		var itemsToRemove = ['.yt-dialog-fg', '.yt-dialog-bg']
		removeList(itemsToRemove)
		$("body").removeClass("yt-dialog-active")
	}
	else if ((url).indexOf('pcmag') != -1){
		var itemsToRemove = ['.bcx_container']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('thebetterindia') != -1){
		var itemsToRemove = ['.addthis_bar']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('cnet') != -1){
		var itemsToRemove = ['#flyoutPromo', '.social-bar-wrapper']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('cnbc') != -1){
		var itemsToRemove = ['.bcx_container', '#social-tools-panel_gig_containerParent']
		removeList(itemsToRemove)
	}
	//'#bcx_98136_iframe_overlay', '.bcx_onsite_els', 
})
