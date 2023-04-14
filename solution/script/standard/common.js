var ui = {
	checkLabel : function() {
		$(document).on('click', '.customChk, .customRadio', function (e) {
			$inp = $(this);
			if($inp.next().is("label")) {
				var name = $inp.attr("name");
				//only for radio
				if($inp.attr("type") == "radio") {
                    $(".customRadio[name=" + name + "]").each(function() {
                    	$(this).next().removeClass('on');
                    });
				}
				//both checkbox and radio
				if(name) {
                    $("input[name=" + name + "]").each(function(index) {
                    	if($(this).is(":checked")) {
                    		$(this).next().addClass('on');
                    	} else {
                    		$(this).next().removeClass('on');
                    	}
                    });
				} else {
					//if name is not specified
                	if($inp.is(":checked")) {
                		$inp.next().addClass('on');
                	} else {
                		$inp.next().removeClass('on');
                	}
				}
                //check/uncheck all checkboxes
				var $wrap = $inp.parent();
				if($wrap.hasClass("otherCheck")) {
					$wrap = $wrap.parent();
				}
				// if($wrap.find(".customChk[name=allCheck]").size() == 1) {
				// 	if(name == "allCheck") {
				// 		if($inp.is(":checked")) {
				// 			$wrap.find("input[name!=allCheck]:checkbox").each(function() {
				// 				$(this).prop("checked", true);
				// 				$(this).next().addClass("on");
				// 			});
				// 		} else {
				// 			$wrap.find(".customChk").each(function() {
				// 				$(this).prop("checked", false);
				// 				$(this).next().removeClass("on");
				// 			});
				// 		}
				// 	} else {
				// 		var cnt1 = $wrap.find("input[name!=allCheck]").size();
				// 		var cnt2 = $wrap.find("input[name!=allCheck]:checked").size();
				// 		if(cnt1 == cnt2) {
				// 			$wrap.find("input[name=allCheck]").prop("checked", true);
				// 			$wrap.find("input[name=allCheck]").next().addClass("on");
				// 		} else {
				// 			$wrap.find("input[name=allCheck]").prop("checked", false);
				// 			$wrap.find("input[name=allCheck]").next().removeClass("on");
				// 		}
				// 	}
				// }
			}
		});

		$(document).on('change', '.customRadio', function (e) {
			var $this = $(this);
            if( $this.prop('checked') ){
            	$thisId = $this.attr('id');
            	$thisGroup = $this.attr('name');
            	$("input[name="+$thisGroup+"]").siblings('label').removeClass('on');
            	$this.siblings('label').each(function(){
					if($(this).attr('for') == $thisId){
						$(this).addClass('on');
					}
				});
            } else {
                $this.next('label').removeClass('on');
            }
        }).change();
		if($('.customChk, input[type=radio]').length){
    		$('.customChk, input[type=radio]').each(function(){
    			if($(this).attr('checked') == 'checked'){
    				var selObjName = $(this).attr('id');
    				$('label').each(function(){
    					if($(this).attr('for') == selObjName){
    						$(this).addClass('on');
    					}
    				});
    			}
    		});
    	}

	}
}


$(function(){
	ui.checkLabel();
	//사이즈 변수 선언(공통 사용)
	let winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언


	//내부 스크롤감지
	$.fn.hasScrollBar = function() {
		return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
	};
	
	//btnBunchType1 자식요소 하나일때
	if($('.btnBunchType1>span').length == 1){
		$('.btnBunchType1').addClass('one')
	}


	// 헤더 공통 검색창
	$('.header1 .mobileSrhBtn').click(function(e){
		e.preventDefault();
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.headerSrhFormW').stop().fadeOut();
		}else{
			$(this).addClass('on');
			$('.headerSrhFormW').stop().fadeIn();
		}
	});

	$(window).on('resize',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth > 1024){
			$('.headerSrhFormW').css('display','block')
		}else{
			if($('.mobileSrhBtn').hasClass('on')){
				$('.headerSrhFormW').css('display','block')
			}else{
				$('.headerSrhFormW').css('display','none')
			}
		}
	})


	// layer PopUp
	var _focus;

	// 바구니 담기 레이어 팝업
	$('.addBasket').on('click',function(){
		$('.addBasketLayer').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).addClass('this');
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 768){
			var ph = $('.addBasketLayer .popTitArea').outerHeight();
			$('.addBasketLayer .popupContent').css({'height':'calc(100% - ' +ph+'px)'})
		}
	});
	$('.addBasketLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.addBasket.this').focus();
		$('.addBasket').removeClass('this');
		$('.addBasketLayer').removeClass('long');
		return false;
	});
	// 바구니 담기 레이어 팝업

	// 내서재 담기 레이어 팝업
	$('.insertMyList').on('click',function(){
		$('.insertMyListLayer').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).addClass('this');
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 768){
			var ph = $('.insertMyListLayer .popTitArea').outerHeight();
			$('.insertMyListLayer .popupContent').css({'height':'calc(100% - ' +ph+'px)'})
		}
	});
	$('.insertMyListLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.insertMyList.this').focus();
		$('.insertMyList').removeClass('this');
		$('.insertMyListLayer').removeClass('long');
		return false;
	});
	// 내서재 담기 레이어 팝업

	
	// 내보내기 레이어 팝업
	$('.export').on('click',function(){
		$('.exportLayer').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).addClass('this');
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 768){
			var ph = $('.exportLayer .popTitArea').outerHeight();
			$('.exportLayer .popupContent').css({'height':'calc(100% - ' +ph+'px)'})
		}
	});
	$('.exportLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.export.this').focus();
		$('.export').removeClass('this');
		$('.exportLayer').removeClass('long');
		return false;
	});

	//내보내기 전체선택
	$('#exportCheckAll').click(function(){
		if($("#exportCheckAll").is(":checked")){
			$('.exportLayer .range input:checkbox').prop("checked", true);
			$('.exportLayer .range input:checkbox').next().addClass('on');
			$(this).addClass('focus');
		}else{
			$('.exportLayer .range input:checkbox').prop("checked", false);
			$('.exportLayer .range input:checkbox').next().removeClass('on');
		}
	});


	// 내보내기 레이어 팝업
	

	// 레이어 팝업 black BackGround
	$('.blackBg').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.layerPopup').removeClass('long');
		return false;
	});
	// $('.blackBg2').on('click',function(){
	// 	$('.resInfoTable').removeClass('on');
	// 	$('.blackBg2').removeClass('mo');
	// 	return false;
	// });
	// 레이어 팝업 black BackGround

	//swiper slide
	if($('.swipeType1').length){
		new Swiper('.swipeType1 .inner',{
			slidesPerView:'auto',
			spaceBetween: 0,
			freeMode: true,
			observer: true,
			observeParents: true,
	
		});
	}
	// atoz swiper
	var atozSwiperOpt = {
		slidesPerView:'auto',
		spaceBetween: 0,
		freeMode: true,
		
		observer: true,
		observeParents: true,
	};
	var atozSwiper1,atozSwiper2 = undefined;
	function initAtozSwiper(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 768 && atozSwiper1 == undefined && atozSwiper2 == undefined){
			atozSwiper1 = new Swiper('.atozSwiper1 .inner', atozSwiperOpt);
			atozSwiper2 = new Swiper('.atozSwiper2 .inner', atozSwiperOpt);
		}else if(winWidth >= 768 && atozSwiper1 != undefined && atozSwiper2 != undefined){
			atozSwiper1.destroy();
			atozSwiper2.destroy();
			atozSwiper1 = undefined;
			atozSwiper2 = undefined;
		}
	}
	if($('.atozSwiper').length){
		initAtozSwiper();
	}
	$(window).on("resize",function(){
		initAtozSwiper();
	});

	//datepicker
	$.datepicker.setDefaults({
		monthNames: ['년 1월','년 2월','년 3월','년 4월','년 5월','년 6월','년 7월','년 8월','년 9월','년 10월','년 11월','년 12월'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear:true,
		dateFormat: 'yymmdd',
		duration: 0
	});
	$('.datepick').datepicker();

	// 레이어 
	$('.datepickLayer').datepicker({
		beforeShow: function(input, inst) {
			console.log(input.offsetHeight , input.offsetWidth)
			inst.dpDiv.css({
				marginTop: -input.offsetHeight - 280 + 'px', 
			});
		}
	});

	//임시 키보드
    $('.languageBtn').click(function(e){
		e.preventDefault();
        if($(this).hasClass('on')){
            $(this).removeClass('on')
            $('.languageWrap').hide();
        }else{
            $('.languageWrap').show();
            $(this).addClass('on');
        }
    });

});