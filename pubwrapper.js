$(document).ready(function() {
	
	/* Search Placeholder */

	$('.divSearchBox input').attr('placeholder', 'Search');

	/* Select Schools */

	$('.selectSchool #s-select-btn').click(function() {
		$('.schoolDropdown').slideToggle(200);
		$('.schoolDropdown').toggleClass('open');
		if ($('.schoolDropdown').hasClass('open')) {
			$('.selectSchool #s-select-btn').attr('aria-expanded', 'true');
		} else {
			$('.selectSchool #s-select-btn').attr('aria-expanded', 'false');
		}
	});

	document.addEventListener("click", (evt) => {
		const flyoutElement = document.getElementsByClassName('selectSchool');
		const btn = document.getElementById('s-select-btn');
		let targetElement = evt.target;
		if (targetElement == flyoutElement) {
			return;
		} else if (targetElement == btn) {

		} else if (targetElement != btn && targetElement != flyoutElement) {
			$('.schoolDropdown').slideUp(200);
			$('.schoolDropdown').removeClass('open');
			$('.selectSchool #s-select-btn').attr('aria-expanded', 'false');
		}
	});

	/* Google Translate */

	$('#otherLang').click(function() {
		$(this).siblings('.translate__list').slideToggle(200);
		$(this).siblings('.translate__list').toggleClass('open');
		if ($(this).siblings('.translate__list').hasClass('expanded')) {
			$(this).attr('aria-expanded', 'true');
		} else {
			$(this).attr('aria-expanded', 'false');
		}
	});

	$('.other-lang-container .translate__list li a').click(function() {
		$('#otherLang').attr('aria-expanded', 'false');
		$('.translate__list').slideUp(200);
		$('.translate__list').removeClass('expanded');
	});


	document.addEventListener("click", (evt) => {
		const flyoutElement = document.getElementsByClassName('translate__list');
		const btn = document.getElementById('otherLang');
		let targetElement = evt.target;
		if (targetElement == flyoutElement) {
			return;
		} else if (targetElement == btn) {

		} else if (targetElement != btn && targetElement != flyoutElement) {
			$('#otherLang').attr('aria-expanded', 'false');
			$('.translate__list').slideUp(200);
			$('.translate__list').removeClass('expanded');
		}
	});

	/* Pubwrapper More Options */

	$('.pub-more-options').click(function(){
		$(this).toggleClass('expanded');
		$(this).find('.fa').toggleClass('fa-times');
		$(this).find('.fa').toggleClass('fa-cog');
		if ($(this).hasClass('expanded')) {
			$(this).attr('aria-expanded', 'true');
			$('.pubwrapper').addClass('expanded');
		} else {
			$(this).attr('aria-expanded', 'false');
			$('.pubwrapper').removeClass('expanded');
		}
	});


	/* Excape button for closing dropdowns */

	document.onkeydown = function(evt) {
		evt = evt || window.event;
		if (evt.keyCode == 27) {
			$('.schoolDropdown').slideUp(200);
			$('.schoolDropdown').removeClass('open');
			$('.selectSchool #s-select-btn').attr('aria-expanded', 'false');

			$('#otherLang').attr('aria-expanded', 'false');
			$('.translate__list').slideUp(200);
			$('.translate__list').removeClass('expanded');

			$('.pub-more-options').removeClass('expanded');
			$('.pub-more-options').attr('aria-expanded', 'false');
			$('.pubwrapper').removeClass('expanded');
			$(this).find('.fa').removeClass('fa-times');
			$(this).find('.fa').addClass('fa-cog');
		}
	};

});