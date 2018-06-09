$(document).ready(function(){
	
	
  $(".mySlider").owlCarousel({
	  items: 1,
	  loop: true,
	  nav: true,
      margin: 30,
       stagePadding:30,
      navText: ["", ""],
      animateOut: "slideOutDown",
      animateIn: "flipInX"
  });
	
	
	let itemBg = $('.itemBg');
	
	
	$('.mySlider .singleSlide').each(function(){
		let itemImg = $(this).find('.itemBg img').attr('src');
		$(this).css({
			background: 'url(' + itemImg + ')'
		});
	});
	
	function mySlideFunc(){
	
		$('.owl-item').removeClass('next prev');
		
		let currenSlide = $('.mySlider .owl-item.active');
		currenSlide.next('.owl-item').addClass('next');
		currenSlide.prev('.owl-item').addClass('prev');

		let nextSlideImg = $('.owl-item.next').find('.itemBg img').attr('src');
		let prevSlideImg = $('.owl-item.prev').find('.itemBg img').attr('src');
    }
	
	mySlideFunc();
});