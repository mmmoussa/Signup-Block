
$( document ).ready(function() {
	var url = document.URL;
	console.log(url);
	console.log((url).indexOf('quora'))
	if ( (url).indexOf('quora') != -1){
		console.log("You are at the quora website");
		$('.modal_signup_dialog').remove();
		$('.modal_signup_background').remove();
		$('.modal_signup_facepile').remove();
	}
})

