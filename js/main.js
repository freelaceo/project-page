document.addEventListener('DOMContentLoaded', function(){

	// Margin por el header fixed
	var headerHeight = document.querySelector('.main-header').scrollHeight;
	document.querySelector('body').style.marginTop = headerHeight+'px';

});