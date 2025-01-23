export default class DropdownMenu {
	constructor(openAttr = 'data-dropdown-open', menuAttr = 'data-dropdown') {
		this.openAttr = openAttr
		this.menuAttr = menuAttr

		this.init()
	}

	init() {
		document.querySelectorAll(`[${this.openAttr}]`).forEach((btn) => {
			const menuId = btn.getAttribute(this.openAttr)
			const menu = document.querySelector(`[${this.menuAttr}="${menuId}"]`)

			if (menu) {
				btn.addEventListener('click', (event) => this.handleButtonClick(event, menu))
			}
		})

		document.addEventListener('click', (event) => this.handleOutsideClick(event))
	}

	handleButtonClick(event, menu) {
		event.preventDefault()
		const isOpen = menu.classList.contains('show')
		this.closeAllMenus()
		if (!isOpen) {
			menu.classList.add('show')
		}
	}

	handleOutsideClick(event) {
		const isToggle = event.target.closest(`[${this.openAttr}]`)
		const isMenu = event.target.closest(`[${this.menuAttr}]`)
		if (!isToggle && !isMenu) {
			this.closeAllMenus()
		}
	}

	closeAllMenus() {
		document.querySelectorAll(`[${this.menuAttr}].show`).forEach((menu) => {
			menu.classList.remove('show')
		})
	}
}
