/*
 * ~ jQuery Prototype Utilities ~
 * 			Helper utilities that extend off of the jQuery namespace
 *	---------------------------------------------------------------
 *  Author: 	Boost Labs Development Team
 * Version: 	1.0 (12/12/2014)
 *
 * ---------------------------------------------------------------
 */
(function($) {
	$.fn.extend({
		arrayMax: function(dataArray) {
			return $.isArray(dataArray) ? Math.max.apply(null, dataArray) : false;
		},

		arrayMin: function(dataArray) {
			return $.isArray(dataArray) ? Math.min.apply(null, dataArray) : false;
		},

		switchClass: function(oldClass, newClass) {
			return $(this).removeClass(oldClass).addClass(newClass);
		},

		parseInt: function(number) {
			return parseInt(number.toString().replace(/,/gi, "")) || 0;
		},

		// Work in Progress
		parseCSS: function(style) {
			var styleValue = 0;

			console.log(this);
			console.log($(this));
			console.log($(this).css(style));
			console.log(this.css(style));
		}
	});
})(jQuery);