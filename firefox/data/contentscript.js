	
function remove() {
	
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
		var itemsToRemove = ['.modalScroller','.modalContainer','.modalMask', '.Modal'] 
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
	else if ((url).indexOf('billhowe') != -1){
		var itemsToRemove = ['#ppop', '#pfade']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('sfglobe') != -1){
		var itemsToRemove = ['.dropdown', '.kfm_dialog', '.kfm_dialog_overlay']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('maddyness') != -1){
		var itemsToRemove = ['.fancybox-wrap', '.fancybox-desktop', '.fancybox-opened', '.fancybox-overlay']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('privesc') != -1){
		var itemsToRemove = ['.modal']
		removeList(itemsToRemove)
		$("body").removeClass("modal-open")
	}
	else if ((url).indexOf('facenews') != -1){
		var itemsToRemove = ['.popup-banner', '.popup-holder', '.popup-time-banner']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('sitepoint') != -1){
		var itemsToRemove = ['.awesome-bar']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('searchenginejournal') != -1){
		var itemsToRemove = ['.optin-monster-overlay']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('lemonde') != -1){
		var itemsToRemove = ['.fond_overlay', 'offre_decouverte', '.overlay', '#footerMainDiv', '#footerDegrade']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('evroua') != -1){
		var itemsToRemove = ['.arcticmodal-container', '.arcticmodal-overlay']
		removeList(itemsToRemove)
		$('body').css('overflow', function(index) {
			return index = 'visible';
		});
	}
	else if ((url).indexOf('motherjones') != -1){
		var itemsToRemove = ['.container']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('sowefund') != -1){
		var itemsToRemove = ['.modal', '.modal-overlay']
		removeList(itemsToRemove)
		$("body").removeClass("modalOpened")
	}
	else if ((url).indexOf('scoop') != -1){
		var itemsToRemove = ['.post-on-overlay-container', '#viewboxOverlay']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('devfright') != -1){
		var itemsToRemove = ['.optin-monster-overlay']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('imdb') != -1){
		var itemsToRemove = ['#fixed_header']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('fontawesome') != -1){
		var itemsToRemove = ['.sumome-popup']
		removeList(itemsToRemove)
		$("body").removeClass("sumome-vex-open")
	}
	else if ((url).indexOf('inmotionhosting') != -1){
		var itemsToRemove = ['#853_overlay_join_community']
		removeList(itemsToRemove)
	}
	else if ((url).indexOf('ezzylynn') != -1){
		var itemsToRemove = ['.fancybox-overlay', '#fancybox-overlay', '#fancybox-wrap', '#fancybox-tmp']
		removeList(itemsToRemove)
		$("html").removeClass("fancybox-lock")
	}

}



$(document).ready(function() {

	remove();

	setTimeout(function(){
		remove()
	}, 2000);

	setTimeout(function(){
		remove()
	}, 4000);

	setTimeout(function(){
		remove()
	}, 7500);

	setTimeout(function(){
		remove()
	}, 10000);

})

