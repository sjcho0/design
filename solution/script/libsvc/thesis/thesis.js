$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언
	
	// layer PopUp
	var _focus;

	
	// 입력예시 레이어 팝업
	$('.exBtn').on('click',function(){
		_focus = $(this);
		$('.exInputPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$('.exInputPopup').attr("tabindex", 0).show().focus();
		$('.exInputPopup .layerClose').on('click',function(){
			$('.exInputPopup').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 입력예시 레이어 팝업

	// 제출자정보 수정 레이어 팝업
	$('.editBtn1').on('click',function(){
		_focus = $(this);
		$('.editPopup1').addClass('on');
		$('.blackBg').addClass('mo');
		$('.editPopup1').attr("tabindex", 0).show().focus();
		$('.editPopup1 .layerClose').on('click',function(){
			$('.editPopup1').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 제출자정보 수정 레이어 팝업

	// 메타정보 수정 레이어 팝업
	$('.editBtn2').on('click',function(){
		_focus = $(this);
		$('.editPopup2').addClass('on');
		$('.blackBg').addClass('mo');
		$('.editPopup2').attr("tabindex", 0).show().focus();
		$('.editPopup2 .layerClose').on('click',function(){
			$('.editPopup2').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 메타정보 수정 레이어 팝업

	// 원문정보 수정 레이어 팝업
	$('.editBtn3').on('click',function(){
		_focus = $(this);
		$('.editPopup3').addClass('on');
		$('.blackBg').addClass('mo');
		$('.editPopup3').attr("tabindex", 0).show().focus();
		$('.editPopup3 .layerClose').on('click',function(){
			$('.editPopup3').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 원문정보 수정 레이어 팝업

	// 저작권정보 수정 레이어 팝업
	$('.editBtn4').on('click',function(){
		_focus = $(this);
		$('.editPopup4').addClass('on');
		$('.blackBg').addClass('mo');
		$('.editPopup4').attr("tabindex", 0).show().focus();
		$('.editPopup4 .layerClose').on('click',function(){
			$('.editPopup4').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 저작권정보 수정 레이어 팝업

	
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


});