$(window).scroll(function() {   
    var $trans = $('.tabs');
    var $animation_elements = $('.animation-element');
	if ($(window).scrollTop() > 120) {
    	$trans.addClass('viewed');
    	$.each($animation_elements, function() {
    		var $element = $(this);
    		$element.addClass('viewed');
    	});
	} else {
    	$trans.removeClass('viewed');
    	$.each($animation_elements, function() {
    		var $element = $(this);
    		$element.removeClass('viewed');
    	});
    }
});
$(function() {
    $( ".tabs" ).tabs();
});