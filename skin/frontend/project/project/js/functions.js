jQuery(document).ready(function($){

	// Slider
	$('.js-slider').bxSlider();

	// Tabs
	$('.js-tabs').tabs();

	// Fancybox
	$('.js-fancybox').fancybox();

	// Fancybox (special)
	$(document).on('click', '.js-fancybox-special', function(event){
		$.fancybox.open({
			href: $(this).attr('href'),
			type: $(this).data('type'),
			wrapCSS: $(this).data('wrap-css'),
			closeBtn: $(this).data('close-btn'),
			width: 500,
			afterShow: function() {
				var input = $('.fancybox-wrap').find('.input-text').first(),
					value = input.val();

				input.focus().val('').val(value);
			}
		});

		return false;
	});

});