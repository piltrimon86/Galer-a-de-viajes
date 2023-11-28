const galeria = document.getElementById('galeria')
const cerrarGarleria = () => {
	galeria.classList.remove('galeria--active')
	document.body.style.overflow = ''
}
export default cerrarGarleria
