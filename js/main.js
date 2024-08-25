$(document).ready(function(){
    $('.checkbox_item').each(function(index) {
        if ($(this).is(':checked')) {
            console.log('Чекбокс номер', index + 1, 'отмечен:', $(this).val());
        } else {
            console.log('Чекбокс номер', index + 1, 'не отмечен:', $(this).val());
        }
    });

     $('.checkbox_item').on('click', function() {
        if ($(this).attr('checked')) {
            // Если чекбокс уже был отмечен, снимаем отметку и убираем атрибут checked
            $(this).removeAttr('checked');
            $(this).prop('checked', false); // Это обновляет состояние чекбокса
            console.log('Чекбокс', $(this).index('.checkbox_item') + 1, 'был снят');
        } else {
            // Если чекбокс не был отмечен, добавляем атрибут checked
            $(this).attr('checked', 'checked');
            $(this).prop('checked', true); // Это обновляет состояние чекбокса
            console.log('Чекбокс', $(this).index('.checkbox_item') + 1, 'был отмечен');
        }
    });
});







/*---------!!! ВСПЛЫВАЮЩЕЕ МЕНЮ КАТАЛОГА !!!------------------*/

        const hoverElement = document.getElementById('hoverElement');
        const hiddenElement = document.getElementById('hiddenElement');
        const menuItems = document.querySelectorAll('.header_content_navmenu_list_item_hide');
        let hideTimeout;

        // Функция для отображения скрытого элемента
        function showHiddenElement() {
            clearTimeout(hideTimeout); // Очищаем таймер, если уже есть
            hiddenElement.style.display = 'flex';
            setTimeout(() => {
                hiddenElement.style.opacity = '0.9';
            }, 10);

            // Устанавливаем таймер на 1 минуту для скрытия
            hideTimeout = setTimeout(hideHiddenElement, 60000);
        }

        // Функция для скрытия скрытого элемента
        function hideHiddenElement() {
            hiddenElement.style.opacity = '0';
            setTimeout(() => {
                hiddenElement.style.display = 'none';
            }, 500);
        }

        // Обработчик события mouseover для шапки
        hoverElement.addEventListener('mouseover', showHiddenElement);

        // Обработчик события mouseover для скрытого блока
        hiddenElement.addEventListener('mouseover', showHiddenElement);

        

        // Обработчик события mouseout для скрытого блока
        hiddenElement.addEventListener('mouseout', (e) => {
            if (!hoverElement.contains(e.relatedTarget) && !hiddenElement.contains(e.relatedTarget)) {
                hideHiddenElement();
            }
        });

        // Обработчик события mouseover для элементов с классом header_content_navmenu_list_item_hide
        menuItems.forEach(item => {
            item.addEventListener('mouseover', hideHiddenElement);
        });


/*---------!!! МОДАЛКА ИНИЦИАЛИЗАЦИЯ !!!------------------*/

window.addEventListener('DOMContentLoaded', function () {
   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });
});

var body1 = document.getElementsByTagName('body')[0];

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-kviz').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal_kviz"); // тут указываем ID элемента
    var divt2 = $(".modal-kviz"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

/*---------!!! СЛАЙДЕРЫ ИНИЦИАЛИЗАЦИЯ !!!------------------*/

$('.reviewssec_content_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.reviewssec_content_slider_arrowleft'),
    nextArrow: $('.reviewssec_content_slider_arrowright')
});

$('.partnerssec_content_slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: false,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
      }
    }
  ],
    prevArrow: $('.partnerssec_content_slider_arrowleft'),
    nextArrow: $('.partnerssec_content_slider_arrowright')
});

$('.catalogsec_content_list').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    responsive: [
    {
      breakpoint: 8000,
        settings: "unslick"
    },
     {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
      }
    }
  ]
});

$('.marketplacesec_content_steplist').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    responsive: [
    {
      breakpoint: 8000,
        settings: "unslick"
    },
     {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
      }
    }
  ]
});

$('.metodssec_content_main_list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    responsive: [
    {
      breakpoint: 8000,
        settings: "unslick"
    },
     {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
      }
    }
  ]
});

$('.ourproductionsec_content_main_list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    responsive: [
    {
      breakpoint: 8000,
        settings: "unslick"
    },
     {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
      }
    }
  ]
});

$('.brendihudisec_content_main_leftpart_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.brendihudisec_content_main_leftpart_slider_arrowleft'),
    nextArrow: $('.brendihudisec_content_main_leftpart_slider_arrowright')
});


$('.examplessec_content_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.examplessec_content_slider_arrowleft'),
    nextArrow: $('.examplessec_content_slider_arrowright')
});

$('.lastnewssec_content_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: true,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.blogsec_content_main_uppart_arrowleft_blogpage'),
    nextArrow: $('.blogsec_content_main_uppart_arrowright_blogpage')
});

$('.portfoliosec_content_main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.portfoliosec_content_main_slider_arrowleft'),
    nextArrow: $('.portfoliosec_content_main_slider_arrowright')
});





/*---------!!! СЛАЙДЕР МОДАЛКИ ИНИЦИАЛИЗАЦИЯ !!!------------------*/

$(document).ready(function(){
    $('.modal_kviz_form_slider').slick({
        slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.modal_kviz_form_slider_buttons_leftbtn'),
    nextArrow: $('.modal_kviz_form_slider_buttons_rightbtn')
    });

    $('.modal_kviz_form_slider').on('afterChange', function(event, slick, currentSlide){
    var totalSlides = slick.slideCount;
    var screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth > 1200) {
        if (currentSlide === totalSlides - 1) {
            $('.modal_kviz_form_slider_buttons').css('display', 'none').css('important', true);
            $('.modal_kviz_form_slider').css('max-height', '727px');
        } else {
            $('.modal_kviz_form_slider_buttons').css('display', '').css('important', false);
            $('.modal_kviz_form_slider').css('max-height', '568px');
        }
    } 
    else if (screenWidth < 1200 && screenWidth > 768) {
      console.log(123);
        if (currentSlide === totalSlides - 1) {
            $('.modal_kviz_form_slider_buttons').css('display', 'none').css('important', true);
            $('.modal_kviz_form_slider').css('max-height', '435px');
        } else {
            $('.modal_kviz_form_slider_buttons').css('display', '').css('important', false);
            $('.modal_kviz_form_slider').css('max-height', '353px');
        }
    }
    else if (screenWidth < 768) {
        if (currentSlide === totalSlides - 1) {
            $('.modal_kviz_form_slider_buttons').css('display', 'none').css('important', true);
            $('.modal_kviz_form_slider').css('max-height', '460px');
        } else {
            $('.modal_kviz_form_slider_buttons').css('display', '').css('important', false);
            $('.modal_kviz_form_slider').css('max-height', '380px');
        }
    }
});
});




window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


var emailInputs = document.querySelectorAll('input[data-email-input]');

$(emailInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^aA-zZ1234567890@.?!%&()><*-_]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});

/*-------------ТАБ-МЕНЮ УСЛУГИ-------------*/

let p_bold = document.getElementsByClassName('questions-list-item-title-p');
let listitem = document.getElementsByClassName('questions-list-item');
let wrapinfo = document.getElementsByClassName('questions-list-item-wrapinfo');
let itemimage = document.getElementsByClassName('questions-list-item-title_image');

let imgnoac = document.getElementsByClassName('questions-list-item-btnwrap-imgnoactive');
let imgac = document.getElementsByClassName('questions-list-item-btnwrap-imgactive');



for (let i = 0; i < listitem.length; i++) {
  listitem[i].addEventListener('click', function() {
    wrapinfo[i].classList.toggle("questions-list-item-wrapinfo_js");

    p_bold[i].classList.toggle("questions-list-item-title-p_js");
    itemimage[i].classList.toggle("questions-list-item-title_image_js");
    itemimage[i].classList.toggle("questions-list-item-title_image_block");

    imgnoac[i].classList.toggle("questions-list-item-btnwrap-imgnoactive_js");
    imgac[i].classList.toggle("questions-list-item-btnwrap-imgactive_js");

  });
}


/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");

const body = document.body;
let listitembtn = document.getElementsByClassName('header_content-wrap-navmenu-list-item');

hamb.addEventListener("click", hambHandler);
close_popup.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}

for (let n = 0; n < listitembtn.length; n++) {
  listitembtn[n].addEventListener('click', function() {
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}



let yandexmap = document.getElementsByClassName('yandexmap');

if (yandexmap[0]) {
ymaps.ready(function () {
    var myMap = new ymaps.Map('yandexmap', {
        center: [57.005893, 40.978599],
        zoom: 17,
        controls: []
    }, 

    {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark1 = new ymaps.Placemark([57.005893, 40.978299], {}, {
      // Опции.
      
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapsec_baloon.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    })

    myMap.geoObjects
        .add(myPlacemark1);
});

}