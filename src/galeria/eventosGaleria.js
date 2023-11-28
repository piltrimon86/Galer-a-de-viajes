import cerrarGarleria from './cerrarGaleria'
import slideClick from './slideClick'
import { cargarAnteriorSiguiente } from './cargarImagen'
import carousel from './carousel'

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

	// --- BOTÓN SIGUIENTE IMAGEN
	if (boton?.dataset?.accion === 'siguiente-imagen') {
		cargarAnteriorSiguiente('siguiente')
	}

	// --- BOTÓN ANTERIOR IMAGEN
	if (boton?.dataset?.accion === 'anterior-imagen') {
		cargarAnteriorSiguiente('anterior')
	}

	// --- BOTÓN SIGUIENTE IMAGEN CAROUSEL
	if (boton?.dataset?.accion === 'siguiente-slide') {
		carousel('adelante')
	}

	// --- BOTÓN ANTERIOR IMAGEN CAROUSEL
	if (boton?.dataset?.accion === 'anterior-slide') {
		carousel('atras')
	}
})
