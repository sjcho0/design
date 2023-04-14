let keyboard;
let selectedInput;
const _WRAP = '.languageWrap';
const DEFLANG = 'korean';
const language = [
  {id:'korean', name:'한국'},
  {id:'english', name:'영어'},
  {id:'japanese', name:'일본어'},
  {id:'arabic', name:'아랍어'},
  {id:'russian', name:'러시아어'},
  {id:'ukrainian', name:'우크라이나어'},
  {id:'greek', name:'그리스어'},
  {id:'hebrew', name:'히브리어'},
  {id:'hindi', name:'힌디어'},
  {id:'farsi', name:'페르시어'},
  {id:'assamese', name:'아삼어'},
  {id:'belarusian', name:'벨로루시어'},
  {id:'bengali', name:'벵골어'},
  {id:'burmese', name:'버마어'},
  {id:'georgian', name:'조지아어'},
  {id:'gilaki', name:'길라키어'},
  {id:'kannada', name:'칸나다어'},
  {id:'russianOld', name:'러시아어(옛)'},
  {id:'sindhi', name:'신디어'},
  {id:'thai', name:'타이어'},
  {id:'urdu', name:'우르두어'},
  {id:'uyghur', name:'위구루어'}
];

const _keyboard = {
    init : function(param){
        _keyboard.createHtml(param);
        _keyboard.setKeyboard(param);
        _keyboard.setEvent();
    },
    createHtml : function(param){
        let wrap = $('<div/>', {class : 'languageWrap'});
        wrap.append($('<div/>', {class : 'simple-keyboard'}));
        let content = $('<div/>', {class : 'languageContent'});
        content.append($('<span/>', {class : 'tit'}).text('다국어 입력'));
        let select = $('<div/>', {class : 'languageSelect'});
        language.forEach(function(e){
            let temp = $('<a/>', {href : '#'+e.id}).text(e.name).attr('data-lang', e.id);
            if(e.id == param){
                temp.attr('class', 'on');
            }
            select.append(temp);
        });
        content.append(select);
        wrap.append(content);
        $('body').append(wrap);
    },
    setKeyboard : function(param){
        let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        Keyboard = window.SimpleKeyboard["default"];
        let KeyboardLayouts = window.SimpleKeyboardLayouts["default"];

        let layout = new KeyboardLayouts().get(param);

        keyboard = new Keyboard(_extends({
          onChange: function onChange(input) {
            return _onChange(input);
          },
          onKeyPress: function onKeyPress(button) {
            return _onKeyPress(button);
          }
        }, layout));

        function _onChange(input) {
            document.querySelector('#'+selectedInput.id).value = input;
        }

        function _onKeyPress(button) {
             if (button === "{shift}" || button === "{lock}") handleShift();
        }

        function handleShift() {
            let currentLayout = keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";

            keyboard.setOptions({
              layoutName: shiftToggle
            });
        }
    },
    setEvent : function(){
        document.querySelectorAll(".btnLanguage").forEach(function(t) {
            let target = t.getAttribute('data-target');
            let input = document.querySelector('#'+target);

            input.removeEventListener("focus", function(e){});
            input.removeEventListener("input", function(e){});

            input.addEventListener("focus", function(e){
                selectedInput = e.target;
            });
            input.addEventListener("input", function(e){
                keyboard.setInput(e.target.value, e.target.id);
            });
        });

        $(".btnLanguage").unbind('click');
        $(".btnLanguage").click(function(e){
            if($(_WRAP).is(':visible')){
	            $(".btnLanguage").removeClass("change");
                $(_WRAP).hide();
            }else{
            	$(this).addClass("change");
                let target = $(this).data('target');
                selectedInput = document.querySelector('#'+target);
                keyboard.setOptions({
                   inputName : selectedInput.id,
                });
                $(_WRAP).insertAfter(this);
                $(_WRAP).show();
            }
        });

        $(".languageSelect > a").unbind('click');
        $(".languageSelect > a").click(function(e){
            $(_WRAP).remove();
            _keyboard.init($(this).data("lang"));
            $('.btnLanguage').each(function(e){
                let target = $(this).data('target');
                if(target == selectedInput.id){
                    $(this).trigger('click');
                }
            });
        });
    }
};

$(document).ready(function () {
    _keyboard.init(DEFLANG);
    alert('asdsa')
});
