$(document).ready(function () {


	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	if (ScrollTrigger.isTouch !== 1) {

		ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.content',
			smooth: 1,
			effects: true
		})

		gsap.fromTo('.billbord', { opacity: 1 }, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.billbord',
				start: 'center',
				end: '1500',
				scrub: true
			}
		})

		gsap.fromTo('.services', { opacity: 1 }, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.services',
				start: 'center',
				end: '1500',
				scrub: true
			}
		})

		gsap.fromTo('.about', { opacity: 1 }, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.about',
				start: 'center',
				end: '1500',
				scrub: true
			}
		})

		gsap.fromTo('.advantages', { opacity: 1 }, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.advantages',
				start: 'center',
				end: '1500',
				scrub: true
			}
		})

		gsap.fromTo('.estimate', { opacity: 1 }, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.estimate',
				start: 'center',
				end: '1500',
				scrub: true
			}
		})

		gsap.fromTo('.portfolio', { opacity: 1 }, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'center',
				end: '1500',
				scrub: true
			}
		})

		gsap.fromTo('.reviews', { opacity: 1 }, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.reviews',
				start: 'center',
				end: '1500',
				scrub: true
			}
		})

	}

	//кнопка sandwich
	$(".sandwich").click(function () {
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
			$(".sandwich").addClass("active");
			$("body").addClass("no-scroll");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
			$("body").removeClass("no-scroll");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay").click(function () {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
	});

	//слайдер

	$('.slider-two').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 0H24L9.6 21L24 42H14.4L-1.90735e-06 21L14.4 0Z" fill="#44CFD5"/></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.6 0H0L14.4 21L0 42H9.6L24 21L9.6 0Z" fill="#44CFD5"/></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.slider-three').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 0H24L9.6 21L24 42H14.4L-1.90735e-06 21L14.4 0Z" fill="#44CFD5"/></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.6 0H0L14.4 21L0 42H9.6L24 21L9.6 0Z" fill="#44CFD5"/></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	//tabs
	const $tabs = $('.tabs__item');
	const $panes = $('.tab-pane');

	// стартовое состояние
	$tabs.removeClass('active').first().addClass('active');
	$tabs.first().find(".tabs__item-content").slideDown(200);
	$panes.hide().first().show();

	$('.tabs__item-head').on('click', function () {
		const index = $(this).closest('.tabs__item').index();

		$tabs.removeClass('active');
		$(".tabs__item-content").slideUp(200);
		$tabs.eq(index).addClass('active');

		$tabs.eq(index).find(".tabs__item-content").slideDown(200);

		$panes.hide();
		$panes.eq(index).fadeIn(200);
	});

	$('.tabs-main li a').click(function (event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-main").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$('.tab-pane-main').find(".slider-two").slick('setPosition');
	});


	$('.advantages__item').click(function () {
		$(this).siblings(".advantages__item").removeClass('active');
		$(this).toggleClass('active');
	});

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});

});
