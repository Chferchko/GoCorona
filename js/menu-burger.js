function slideToggleMenu() {
	$('.menu__burger').click(function (event) {
		$('.menu__burger, .menu__list').toggleClass('active')
		$('body').toggleClass('lock');
	});
};

function removeActiveClass() {
	if ($(window).width() >= 767.98) {
		$('.menu__burger, .menu__list').removeClass('active')
		$('body').removeClass('lock');
	}
};

$(document).ready(function () {
	slideToggleMenu();
});

$(window).resize(function () {
	removeActiveClass();
});