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



const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
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

const btn1 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-1')[0];
const btn2 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-2')[0];
const btn3 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-3')[0];
const btn4 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-4')[0];
const btn5 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-5')[0];    
const btn6 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-6')[0];  
const btn7 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-7')[0];      
// Клонируем меню, чтобы задать свои стили для мобильной версии
/*const menu = document.querySelector("#menu").cloneNode(1);*/

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);
close_popup.addEventListener("click", hambHandler);


//hamb.addEventListener("mouseover", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}




if(btn1) {
  btn1.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn2) {
  btn2.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn3) {
  btn3.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn4) {
  btn4.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn5) {
  btn5.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn6) {
  btn6.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}


if(btn7) {
  btn7.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}
