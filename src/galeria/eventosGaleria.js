import cerrarGarleria from './cerrarGaleria'
import slideClick from './slideClick'

const galeria = document.getElementById('galeria')
galeria.addEventListener('click', (e) => {
	const boton = e.target.closest('button')

	// --- CERRAR GALERIA
	if (boton?.dataset?.accion === 'cerrar-galeria') {
		cerrarGarleria()
	}

	// --- CAROUSEL SLIDE CLICK
	if (e.target.dataset.id) {
		slideClick(e)
	}
})
