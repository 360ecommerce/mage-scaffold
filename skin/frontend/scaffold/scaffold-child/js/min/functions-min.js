jQuery.noConflict(),jQuery(document).ready(function($){$(".js-slider").bxSlider(),$(".js-tabs").tabs(),$(".js-fancybox").fancybox(),$(document).on("click",".js-fancybox-special",function(t){return $.fancybox.open({href:$(this).attr("href"),type:$(this).data("type"),wrapCSS:$(this).data("wrap-css"),closeBtn:$(this).data("close-btn"),width:500,afterShow:function(){var t=$(".fancybox-wrap").find(".input-text").first(),a=t.val();t.focus().val("").val(a)}}),!1})});