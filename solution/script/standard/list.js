$(function () {
    let winWidth = window.innerWidth || document.documentElement.clientWidth;
	//내부 스크롤감지
	$.fn.hasScrollBar = function() {
		return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
	};
	if ($('.mobileTable').length > 0) {
		$('.mobileTable').footable({
			breakpoints: {
				phone: 767
				, tablet: 1024
			}
		});
	};
    //게시판 tag 너비에 따른 제목 길이 js
    $('.tagTable tbody tr').each(function () {
        let sbjW = $(this).find('.sbj').width();
        let tagW = $(this).find('.tagW').width();
        $(this).find('.sbjTxt').css('max-width', sbjW - tagW - 55)
    });
	$('.imageTypeList>ul>li').each(function () {
        let sbjW = $(this).find('.sbj').width();
        let tagW = $(this).find('.tagW').width();
        $(this).find('.sbjTxt').css('max-width', sbjW - tagW - 55)
    });
    $(window).on('resize',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if ($('.mobileTable').length > 0) {
			$('.mobileTable').footable({
				breakpoints: {
					phone: 767
					, tablet: 1024
				}
			});
		};
        $('.tagTable tbody tr').each(function () {
            let sbjW = $(this).find('.sbj').width();
            let tagW = $(this).find('.tagW').width();
            $(this).find('.sbjTxt').css('max-width', sbjW - tagW - 55);
        });
		$('.imageTypeList>ul>li').each(function () {
			let sbjW = $(this).find('.sbj').width();
			let tagW = $(this).find('.tagW').width();
			$(this).find('.sbjTxt').css('max-width', sbjW - tagW - 55)
		});
    })
    $(window).on('load',function(){
        $('.tagTable tbody tr').each(function () {
            let sbjW = $(this).find('.sbj').width();
            let tagW = $(this).find('.tagW').width();
            $(this).find('.sbjTxt').css('max-width', sbjW - tagW - 55)
        });
		$('.imageTypeList>ul>li').each(function () {
			let sbjW = $(this).find('.sbj').width();
			let tagW = $(this).find('.tagW').width();
			$(this).find('.sbjTxt').css('max-width', sbjW - tagW - 55)
		});
    });

    if($('.fixOrderLayer').length){
        Sortable.create(fixOrder, {
            group: 'fixOrder',
            animation: 100
        });
    }

    //상세검색 레이어
	$('.fixOrderBtn').on('click',function(){
		$('.fixOrderLayer').addClass('on');
		$('.blackBg').addClass('mo');
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 768){
			var ph = $('.fixOrderLayer .popTitArea').outerHeight();
			$('.fixOrderLayer .popupContent').css({'height':'calc(100% - ' +ph+'px)'})
		}
	});

	$('.fixOrderLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.fixOrderBtn').focus();
		$('.fixOrderLayer').removeClass('long');
		return false;
	});

	$('.layerPopup .popupContent').on('scroll',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 768){
			if($(this).hasScrollBar()){
				$(this).parents('.layerPopup').addClass('long');
			}
		}
		
	});

	$(window).on('resize',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 768){
			if($('.layerPopup').hasClass('on')){
				var ph = $('.layerPopup .popTitArea').outerHeight();
				$('.layerPopup .popupContent').css({'height':'calc(100% - ' +ph+'px)'})
			}
		}
	});

      
    // 갤러리형 최대 제목 overflow 여부 확인
	function textOverFlowChk(ele) {
		let res;
		let cont = $('<div>'+ele.text()+'</div>').css("display", "table")
		.css("z-index", "-1").css("position", "absolute").css("white-space","nowrap")
		.css("font-family", ele.css("font-family"))
		.css("font-size", ele.css("font-size"))
		.css("font-weight", ele.css("font-weight")).appendTo('body');
		res = (cont.width()>ele.width()*2 - 20);//2줄이라 *2 , new 아이콘 자리 20 빼기
		cont.remove();

		return res;
	}
	function gallerySbjText(){
		$('.galleryTypeList>ul>li .sbjTxtW').each(function(){
			if($(this).find(".new").length){
				if(textOverFlowChk($(this))) {
					$(this).addClass("overText");
				}else{
					$(this).removeClass("overText");
				}
			}
		});
	}
	$(window).on('resize',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		gallerySbjText();
	});
	$(window).on('load',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		gallerySbjText();
	});
	// 갤러리형 좋아요
	$('.galleryTypeList>ul>li .cntArea .favor a').on("click",function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active")
		}else{
			$(this).parent().addClass("active")
		}
		
	});


	//게시판 글상세 좋아요
	$(".boardComment .cntArea .favor a").on("click",function(){
		if($(this).parent().hasClass("on")){
			$(this).parent().removeClass("on");
		}else{
			$(this).parent().addClass("on");
		}

		return false
	});

});