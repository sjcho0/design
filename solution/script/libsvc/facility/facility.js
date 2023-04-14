$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언

	var _focus;
	
	// 일별예약 레이어 팝업
	$('.roomRes').on('click',function(){
		_focus = $(this);
		$('.resLayer').addClass('on');
		$('.blackBg').addClass('mo');
		$('.resLayer').attr("tabindex", 0).show().focus();
		$('.resLayer .layerClose').on('click',function(){
			$('.layerPopup').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 일별예약 레이어 팝업

	// 시설예약 열기/닫기
	$('.popupRoomContent .popupContentHeader').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).siblings().stop().slideDown();
			$(this).parent().removeClass('on');
		}else{
			$(this).siblings().stop().slideUp();
			$(this).parent().addClass('on');
		}
		return false;
	});
	// 시설예약 열기/닫기

	// 일별예약 레이어 팝업
	$('.applyForm').on('click',function(){
		_focus = $(this);
		$('.applyForm').addClass('on');
		$('.blackBg').addClass('mo');
		$('.applyForm').attr("tabindex", 0).show().focus();
		$('.applyForm .layerClose').on('click',function(){
			$('.layerPopup').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 일별예약 레이어 팝업

	// 레이어 팝업 black BackGround
	$('.blackBg').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		return false;
	});
	$('.blackBg2').on('click',function(){
		$('.resInfoTable').removeClass('on');
		$('.blackBg2').removeClass('mo');
		return false;
	});
	// 레이어 팝업 black BackGround
		
	// 시설예약 열기/닫기
	$('.roomHeader .title').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().siblings().stop().slideDown();
			$(this).parent().removeClass('on');
		}else{
			$(this).parent().siblings().stop().slideUp();
			$(this).parent().addClass('on');
		}
		return false;
	});

});