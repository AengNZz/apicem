export default class BaseHelpers {
	static html = document.documentElement;
	static header = document.querySelector('.header');
	static firstScreen = document.querySelector('[data-observer]');

	static addLoadedClass() {
		window.addEventListener('load', () => {
			setTimeout(() => {
				BaseHelpers.html.classList.add('loaded')
			}, 0)
		})
	}

	static calcScrollbarWidth() {
		const scrollbarWidth = (window.innerWidth - document.body.clientWidth) / 16 + 'rem'
		return scrollbarWidth
	}
}
