function debug(msg){
    if(window.console != undefined){
        console.log(msg);
    }
}
var fixChat = {
	topScrollTimer:null,
	scrollDot:100,
	chatDivShowed:false,

	init:function(){
		fixChat.Obj = $("#fixChat");
		fixChat.Totop = fixChat.Obj.find('.bactop');

		var tops = $(document).scrollTop();
		if (tops > fixChat.scrollDot) {
			fixChat.showTotop(true);
		}else{
			fixChat.showTotop(false);
		}


		$(window).on("scroll", function() {
			if (fixChat.topScrollTimer) {
				clearTimeout(fixChat.topScrollTimer)
			}
			fixChat.topScrollTimer = setTimeout(function() {
				if ($(document).scrollTop() > fixChat.scrollDot) {
					fixChat.showTotop(true);
				}else{
					fixChat.showTotop(false);
				}
			}, 200);

		});
		fixChat.Obj.on('click', '.bactop', function(event) {
			event.preventDefault();
			$("html,body").stop().animate({scrollTop : 0}, 500);
		}).on('click', '.chatbtn', function(event) {
			event.preventDefault();
			if (fixChat.chatDivShowed) {
				$('#chatVideo').animate({"right":"0px","opacity":0},200,function(){$(this).hide();});
				fixChat.chatDivShowed = false;
			}else{
				$('#chatVideo').show().animate({"right":"50px","opacity":1},200);
				fixChat.chatDivShowed = true;
			}
		}).on('click', '#chatVClose', function(event) {
			event.preventDefault();
			$('#chatVideo').animate({"right":"0px","opacity":0},200,function(){$(this).hide();});
			fixChat.chatDivShowed = false;
		});

	},
	showTotop:function(type){
		if (type) {
			fixChat.Obj.addClass('tops');
		}else{
			fixChat.Obj.removeClass('tops');
		}
	}
}



$(document).ready(function() {
	var $h_nameWr = $("#h_nameWr") 
	$h_nameWr.hover(function() {
		var $panel = $(this).find('.panel');
		$panel.removeClass('loaded').addClass('pop_fadein');
		loadingPanel($panel);//
	}, function() {
		$(this).find('.panel').removeClass('pop_fadein')
	}).on('click', '.pb_phone i', function(event) {
		event.preventDefault();
		$(this).parent("span").hide();
	});

/*Totop*/
fixChat.init();
	


});





var hasMphone = false;
function loadingPanel(obj){
	if (!hasMphone) {
		obj.find('.pb_phone').show();
	};

	setTimeout(function(){
		obj.addClass('loaded');
	}, 1000);

}
