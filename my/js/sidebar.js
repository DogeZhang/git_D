$(document).ready(function(){
	/* 左侧导航栏展开 */
		isClosed = false;

		$('#hamburger').click(function () {
			burgerTime();
		});

		function burgerTime() {
			if (isClosed == true) {
				$('.sidebar').removeClass('open');
			    $('.menu li span').addClass('menu_title');
				$('#hamburger').removeClass('is-open');
				$('#hamburger').addClass('is-closed');
				isClosed = false;
			} else {
				$('.sidebar').addClass('open');
			    $('.menu li span').removeClass('menu_title');
				$('#hamburger').removeClass('is-closed');
				$('#hamburger').addClass('is-open');
				isClosed = true;
			}
		}
});