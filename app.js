const navBar = document.querySelector('[data-navbar]');
const leftButton = document.querySelector('[data-carousel-left]');
const rightButton = document.querySelector('[data-carousel-right]');
const headerCarousel = document.querySelector('[data-carousel-wrapper]');
const carouselCard = document.querySelector('[data-card]');
const carouselButtons = document.querySelectorAll('.carousel__btn');
const navItem = document.querySelector('.nav-items-list');
const hamburger = document.querySelector('.responsive__nav');
const searchToggleButton = document.querySelector('[data-nav-search');
const searchComponent = document.querySelector('.search__component');
const backToTop = document.querySelector('[data-back-to-top]');
const navForm = document.querySelector('[data-nav-form]');
const carousel = document.querySelector('[data-carousel-div]');

//function for drag to scroll in carousel

const dragToScroll = (wrapper) => {
	let isDown = false;
	let startX;
	let scrollLeft;
	wrapper.addEventListener('mousedown', (e) => {
		isDown = true;
		wrapper.classList.add('active');
		startX = e.pageX - wrapper.offsetLeft;
		scrollLeft = wrapper.scrollLeft;
	});
	wrapper.addEventListener('mouseleave', () => {
		isDown = false;
		wrapper.classList.remove('active');
	});
	wrapper.addEventListener('mouseup', () => {
		isDown = false;
		wrapper.classList.remove('active');
	});
	wrapper.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - wrapper.offsetLeft;
		const walk = (x - startX) * 2.5; //scroll-fast
		wrapper.scrollLeft = scrollLeft - walk;
	});
};

//upon scroll navbar background changes

window.addEventListener('scroll', () => {
	if (window.scrollY > 150) {
		navBar.classList.add('nav-dark');
		backToTop.style.opacity = 1;
	} else {
		navBar.className = 'navbar';
		backToTop.style.opacity = 0;
	}
});

//back to top button

backToTop.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

//header carousel

leftButton.addEventListener('click', (e) => {
	if (headerCarousel.scrollLeft === 0) {
		headerCarousel.scrollLeft += 3 * carouselCard.offsetWidth;
	}
	headerCarousel.scrollLeft -= carouselCard.offsetWidth;
});

rightButton.addEventListener('click', (e) => {
	if (
		Math.floor(headerCarousel.scrollLeft) ===
		2 * headerCarousel.offsetWidth
	) {
		headerCarousel.scrollLeft -= 3 * carouselCard.offsetWidth;
	}
	headerCarousel.scrollLeft += carouselCard.offsetWidth;
});

carouselButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		headerCarousel.scrollLeft +=
			carouselCard.offsetWidth * (parseInt(btn.getAttribute('data-value')) - 1);
	});
});

//responsive navbar

hamburger.addEventListener('click', (e) => {
	hamburger.classList.toggle('responsive__nav__toggle');
	navItem.classList.toggle('nav-items-list-responsive');
});

//navbar search feature

searchToggleButton.addEventListener('click', (e) => {
	searchComponent.classList.toggle('search__component__visible');
});

navForm.addEventListener('submit', (e) => {
	e.preventDefault();
	searchComponent.classList.toggle('search__component__visible');
});

//calling drag to scroll function for certain components

dragToScroll(carousel);
dragToScroll(headerCarousel);

// kunal js
$(function () {
	$('.material-card > .mc-btn-action').click(function () {
		var card = $(this).parent('.material-card');
		var icon = $(this).children('i');
		icon.addClass('fa-spin-fast');

		if (card.hasClass('mc-active')) {
			card.removeClass('mc-active');

			window.setTimeout(function () {
				icon
					.removeClass('fa-arrow-left')
					.removeClass('fa-spin-fast')
					.addClass('fa-bars');
			}, 800);
		} else {
			card.addClass('mc-active');

			window.setTimeout(function () {
				icon
					.removeClass('fa-bars')
					.removeClass('fa-spin-fast')
					.addClass('fa-arrow-left');
			}, 800);
		}
	});
});
