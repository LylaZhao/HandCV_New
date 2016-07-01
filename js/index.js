$(function () {

    showSlide();
    window.onresize = function(){
        showSlide();
    }

    showCaptions = function (el) {
        var $this = el;
        if ($this.find('.caption-top').length) {
            $this.find('.caption-top')
                .show()
                .animate({top: 0, opacity: 1}, 400);
        }
        if ($this.find('.caption-right').length) {
            $this.find('.caption-right')
                .show()
                .animate({right: 0, opacity: 1}, 400);
        }
        if ($this.find('.caption-bottom').length) {
            $this.find('.caption-bottom')
                .show()
                .animate({bottom: 0, opacity: 1}, 400);
        }
        if ($this.find('.caption-left').length) {
            $this.find('.caption-left')
                .show()
                .animate({left: 0, opacity: 1}, 400);
        }
    };
    hideCaptions = function (el) {
        var $this = el;
        if ($this.find('.caption-top').length) {
            $this.find('.caption-top')
                .stop()
                .animate({top: -50, opacity: 0}, 350, function () {
                    $this.find('.caption-top').hide();
                });
        }
        if ($this.find('.caption-right').length) {
            $this.find('.caption-right')
                .stop()
                .animate({right: -150, opacity: 0}, 350, function () {
                    $this.find('.caption-right').hide();
                });
        }
        if ($this.find('.caption-bottom').length) {
            $this.find('.caption-bottom')
                .stop()
                .animate({bottom: -50, opacity: 0}, 350, function () {
                    $this.find('.caption-bottom').hide();
                });
        }
        if ($this.find('.caption-left').length) {
            $this.find('.caption-left')
                .stop()
                .animate({left: -150, opacity: 0}, 350, function () {
                    $this.find('.caption-left').hide();
                });
        }
    };

    var $headerA = $('.headerbtns').find('a');
    $headerA.each(function (index, element) {
        var _this = this;
        switch (index){
            case 0:
                $(_this).click(function () {
                    $("html,body").animate({scrollTop: $($(_this).attr('href')).offset().top - $('.header').height() }, 500);
                    return false;
                });
                break;
            case 1:
                $(_this).click(function () {
                    $("html,body").animate({scrollTop: $($(_this).attr('href')).offset().top + 160  }, 500);
                    return false;
                });
                break;

        }

    });
    $("#headtop").click(function(){
         // $("html,body").animate({scrollTop: 0}, 500);
        $("html,body").animate({scrollTop: $($(this).attr('href')).offset().top  }, 500);
        return false;
    });

});

/*change the icons on tab 改变技术参数TabBar的图标状态*/
$("#hardwareTab").on('shown.bs.tab', function(){
    $("#hardwareImg").attr({
        src:"img/icon-yingjianfangan2.png"
    });
});

$("#hardwareTab").on('hide.bs.tab',function(){
    $("#hardwareImg").attr({
        src:"img/icon-yingjianfangan.png"
    });
});

$("#delayTab").on('shown.bs.tab', function(){
    $("#delayImg").attr({
        src:"img/icon-yanchi2.png"
    });
});

$("#delayTab").on('hide.bs.tab',function(){
    $("#delayImg").attr({
        src:"img/icon-yanchi.png"
    });
});

$("#frameRateTab").on('shown.bs.tab', function(){
    $("#frameRateImg").attr({
        src:"img/icon-zhenlv2.png"
    });
});

$("#frameRateTab").on('hide.bs.tab',function(){
    $("#frameRateImg").attr({
        src:"img/icon-zhenlv.png"
    });
});

$("#focalDistanceTab").on('shown.bs.tab', function(){
    $("#focalDistanceImg").attr({
        src:"img/icon-jiaoju2.png"
    });
});

$("#focalDistanceTab").on('hide.bs.tab',function(){
    $("#focalDistanceImg").attr({
        src:"img/icon-jiaoju.png"
    });
});


$("#priceTab").on('shown.bs.tab', function(){
    $("#priceImg").attr({
        src:"img/icon-jiage2.png"
    });
});

$("#priceTab").on('hide.bs.tab',function(){
    $("#priceImg").attr({
        src:"img/icon-jiage.png"
    });
});


/*改变图标状态完毕*/


/*使用情境*/







$("#detailBtn").click(function(){
    $("#specTable").toggle();
}
)


function mouseOnHeader(x){
	$(".backDrop").css("opacity","0.8");
}
function mouseOutHeader(x){
	$(".backDrop").css("opacity","0");
}
$(window).scroll(function () {
	var this_scrollTop = $(this).scrollTop();
	var distance= $(".header").height();
	var distance2=$('.header').offset().top;
	if(this_scrollTop>distance){
		// $(".backDrop").css({"opacity":"0.8"});

		$(".backDrop").stop().animate({"opacity":"0.8"}, 600);
        $(".backDrop").css({"background-color":"white"});
        $(".headerbtn").css({"color":"#0768ab"});

		$(".header img").attr("src","./img/LOGO-1.png");
	}else{
		// $(".backDrop").css({"opacity":"0"});

        $(".backDrop").stop().animate({"opacity":"0"}, 600);
        $(".headerbtn").css({"color":"white"});

		$(".header img").attr("src","./img/LOGO-2.png");
	}



})