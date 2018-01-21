
(function(){
     "use strict";
	jQuery(document).ready(function(){
		// Accordion image path transfer
		$(function() {
			$('.panel-title>a').on({
			    'click': function(){
			    	var img_path = $(this).parent().parent().parent().closest('div').find('.test01').attr('src');
			        $('#au-fig-transfer').attr('src',img_path);
			        // alert(img_path);
			    }
			});
		});

	});
})();