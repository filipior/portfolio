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

	// zakładki animacja gradientu

	var closed = $(".coverClosed");
	var active = $(".coverActive");

	closed.on("click", function (event) {
		active.removeClass("coverActive");
		$(this).removeClass("coverClosed").addClass("coverActive");
	})

	// górne menu 

	// var menuLink = $(".menuLink");
	// var hash = window.location.hash;

	// menuLink.on("click", function (evet) {
	// 	event.preventDefault();
	// 	hash = link.attr("href");
	// 	window.location = hash;
	// })

});