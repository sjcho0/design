$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언

	var _focus;

	// 그래프보기 레이어 팝업
	$('.seatGraphViewPopup').on('click',function(){
		_focus = $(this);
		$('.seatGraphView').addClass('on');
		$('.blackBg').addClass('mo');
		$('.seatGraphView').attr("tabindex", 0).show().focus();
		$('.seatGraphView .layerClose').on('click',function(){
			$('.layerPopup').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 그래프보기 레이어 팝업

	// 예약신청 레이어 팝업
	$('.seatResApplyPopup a').on('click',function(){
		_focus = $(this);
		$('.resInfoTable').addClass('on');
		$('.blackBg2').addClass('mo');
		$('.resInfoTable').attr("tabindex", 0).show().focus();
		$('.resInfoTable .layerClose').on('click',function(){
			$('.resInfoTable').removeClass('on');
			$('.blackBg2').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 예약신청 레이어 팝업

	// 예약정보 레이어 팝업
	$('.bookingInfoTableBtn').on('click',function(){
		_focus = $(this);
		$('.bookingInfoTable').addClass('on');
		$('.blackBg').addClass('mo');
		$('.bookingInfoTable').attr("tabindex", 0).show().focus();
		$('.bookingInfoTable .layerClose').on('click',function(){
			$('.bookingInfoTable').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 예약정보 레이어 팝업

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

	// 좌석예약 > 예약신청 > 그래프보기, 배치도보기 선택
	$('.tab1 > li > a').on('click focus', function(){
		var cnt = $(this).parent().index();
		$('.legendW ul').removeClass('on')
		$('.legendW ul').eq(cnt).addClass('on');

		$('.tab1 > li').removeClass();
		$(this).parent().addClass('on');
		return false;
	});
	// 좌석예약 > 예약신청 > 그래프보기, 배치도보기 선택

	// 좌석예약 > 예약신청 > 그래프보기 > 코너 선택 탭
	$('.tab2 > li > a').on('click focus', function(){
		$('.tab2 > li').removeClass();
		$(this).parent().addClass('on');
		return false;
	});
	// 좌석예약 > 예약신청 > 그래프보기 > 코너 선택 탭

});