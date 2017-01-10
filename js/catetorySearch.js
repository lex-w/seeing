// 内容部分滑动
var catetorySwiper = new Swiper(".category-box", {
    initialSlide: 0,
    loop: false,
    speed: 400,
    onSlideChangeStart: function(){
        $(".category-type .selected").removeClass('selected');
        $(".category-type a").eq(catetorySwiper.activeIndex).addClass('selected');
        
    },
    onSlideChangeEnd: function(swiper){
    }
})
$(".category-type a").on("touchstart mousedown", function(e){
    var _self = $(this);
    _self.addClass('selected').siblings().removeClass('selected');
    catetorySwiper.slideTo(_self.index())
});
