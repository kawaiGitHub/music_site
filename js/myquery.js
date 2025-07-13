//�y�[�W�g�b�v
jQuery(function() {
	var appear = false;
	var pagetop = $('#page_top');
	var opens = $('.open');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {  //1000px�X�N���[��������
			if (appear == false) {
				appear = true;
				pagetop.stop().animate({
				'left': '10px' //�E����0px�̈ʒu��
				}, 300); //0.3�b�����Č����
				opens.stop().animate({
				'left': '5px' //�E����0px�̈ʒu��
				}, 300); //0.3�b�����Č����
			}
		} else {
			if (appear) {
				appear = false;
				pagetop.stop().animate({
				'left': '-120px' //�E����-50px�̈ʒu��
				}, 300); //0.3�b�����ĉB���
				opens.stop().animate({
				'left': '-250px' //�E����-50px�̈ʒu��
				}, 300); //0.3�b�����ĉB���
			}
		}
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500); //0.5�b�����ăg�b�v�֖߂�
		return false;
	});

});

//�X���[�X�X�N���[��
$(function(){
	// #�Ƀ_�u���N�H�[�e�[�V�������K�v
	$('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});



$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});



const mySwiper = new Swiper('.mv01 .swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,

});



$(".openbtn1").click(function () {//�{�^�����N���b�N���ꂽ��
  $(this).toggleClass('active');//�{�^�����g�� active�N���X��t�^��
    $("#g-nav").toggleClass('panelactive');//�i�r�Q�[�V������panelactive�N���X��t�^
    $(".circle-bg").toggleClass('circleactive');//�۔w�i��circleactive�N���X��t�^
});

$("#g-nav a").click(function () {//�i�r�Q�[�V�����̃����N���N���b�N���ꂽ��
    $(".openbtn1").removeClass('active');//�{�^���� active�N���X��������
    $("#g-nav").removeClass('panelactive');//�i�r�Q�[�V������panelactive�N���X������
    $(".circle-bg").removeClass('circleactive');//�۔w�i��circleactive�N���X������
});