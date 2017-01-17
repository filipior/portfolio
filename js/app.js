$(function () {

	// animacja na hover -------------------------------------

	var cover = $( ".cover" );

	cover.on("mouseenter", function (event) {
		$(this).addClass("coverOnHover" );
	});

	// menu hamburger ----------------------------------------

	var menu = $(".hamburgerMenu");
	var menuOpen = $(".hamburgerMenuOpen");

	menu.on("click", function (event) {

		menuOpen.slideToggle({direction: 'down'},300);

	});

	// zakładki

	var closed = $(".coverClosed");
	var active = $(".coverActive");

	closed.on("click", function (event) {
		active.removeClass("coverActive");
		$(this).removeClass("coverClosed").addClass("coverActive");
	})

});