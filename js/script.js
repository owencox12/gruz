let mySwiper = new Swiper ('.swiper-container', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 130,
	 navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: false,
  breakpoints: {
	  768: {
		slidesPerView: 2,
	  },
	  1200: {
		slidesPerView: 3,
    
	  }
  }
  });
  const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.header__navigation');
menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('menu-btn_active');
    nav.classList.toggle('header__navigation_active');
});
  
function valideForms(form) {
  $(form).validate({
      rules : {
          name: "required",
          phone: "required",
          email: {
             required: true,
             email: true
          }
      }, 
      messages: {
          name: "Пожалуйста введите свое имя",
          phone: "Введите свой номер телефона",
          email: {
            required: "Пожалуйста введите свою почту",
            email: "Неправильно введен адресс почты"
          }
        }
    });
};

valideForms('.questions__form');
valideForms('.form')
valideForms('#modal-form');
// valideForms('.form');
// valideForms('#order form');


// modal window

$('#button-header, .button_footer').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks').fadeOut('slow');
});

$('input[name=phone]').mask("+7 (999) 999-9999");

$('form').submit(function(e){
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function(){
      $(this).find(".input").val("");

      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');


      $('form').trigger('reset');
  });
});

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => { 
    mask.remove();
  },950)
});