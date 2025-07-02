document.addEventListener('DOMContentLoaded', () => {
	for(const link of document.querySelectorAll('ol.toc > li a')) {
		const item = link.closest('li')
		item.style.cursor = 'pointer'
		item.addEventListener('click', ev => {
			ev.stopPropagation()
			link.click()
		})
	}

	if(window.location.hostname.split('').reduce((a, c) => a + 123 * c.charCodeAt(0), 0) == 203565) {
		const imp = document.createElement('div')
		imp.innerHTML = '<p class="tocfooter"><a href="impressum.html">Datenschutz / Impressum</a></p>'
		document.body.appendChild(imp)
	}
})
