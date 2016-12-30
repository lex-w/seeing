$(".category-type a").click(function(event) {
	var _self = $(this);
	_self.addClass('selected').siblings().removeClass('selected');
});