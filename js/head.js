function debug(msg){
    if(window.console != undefined){
        console.log(msg);
    }
}
var fixChat = {
	topScrollTimer:null,
	scrollDot:100,
	chatDivShowed:false,
	onlineMsg_h:0,
	hasGotMsg:false,

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
				fixChat.hasGotMsg = false;
			}else{
				$('#chatVideo').show().animate({"right":"70px","opacity":1},200);
				fixChat.chatDivShowed = true;
				clearInterval(fixChat.onlineMsg_h);
				$(this).removeClass('active');

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
	},
	hasMsg:function(){
		var $msgBtn = fixChat.Obj.find('.chatbtn');
		if (!fixChat.chatDivShowed && !fixChat.hasGotMsg) {
			fixChat.onlineMsg_h = setInterval(function(){
				if ($msgBtn.hasClass('active')) {
					$msgBtn.removeClass('active');
				}else{
					$msgBtn.addClass('active');
				}
			},500);
			fixChat.hasGotMsg = true;
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
	

	$("#allTabs").on('click', 'li', function(event) {
		event.preventDefault();
		var $this = $(this);
		var ids = $this.data('name');
		SwitchPrv(ids);
		$this.siblings('li').removeClass('hover').end().addClass('hover');

	});
	$(".cityTabs").on('click', 'li', function(event) {
		event.preventDefault();
		var $this = $(this);
		var ids = $this.data('name');
		SwitchCit(ids);
		$this.siblings('li').removeClass('hover').end().addClass('hover');
	});
	function SwitchPrv(id){
		var obj = $("#Are"+id);
		obj.show()/*.find('a').show()*/;
	}
	function SwitchCit(id){
		var obj = $(".Cit"+id);
		if (id != 0) {
			obj.show();
		}else{
			$("#Citcon"+id).find('a').show();
		}
	}

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


