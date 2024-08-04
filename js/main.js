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
