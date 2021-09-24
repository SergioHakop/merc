// humburger-menu 
const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

const toggleMenu = () => {
	menuElem.classList.toggle('menu-active')
	burger.classList.toggle('humburger-menu-active')
}
burger.addEventListener('click', () =>{
	toggleMenu()
})

/*-----------------------------------------------*/

const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () =>{
	//console.log('click')
	modal.classList.remove('hidden')
})

modal.addEventListener('click', (event) =>{
	const target = event.target

	if(target.classList.contains('overlay') || target.classList.contains('modal__close')){
		modal.classList.add('hidden')
	}

})