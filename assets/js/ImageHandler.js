// Videos que funcionan como GIF: se reproducen solos cuando se ven en pantalla y se pausan al salir
const clips = document.querySelectorAll('video.gif')
const menosMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches

if (clips.length && !menosMovimiento && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const clip = entry.target
            if (entry.isIntersecting) clip.play().catch(() => { })
            else clip.pause()
        })
    }, { rootMargin: '250px' })

    const alternar = clip => clip.paused ? clip.play().catch(() => { }) : clip.pause()

    clips.forEach(clip => {
        observer.observe(clip)

        // Clic (o Enter/espacio) para pausar o seguir
        clip.addEventListener('click', () => alternar(clip))
        clip.addEventListener('keydown', event => {
            if (event.key !== 'Enter' && event.key !== ' ') return
            event.preventDefault()
            alternar(clip)
        })

        clip.tabIndex = 0
        clip.classList.add('cursor-pointer')
        clip.title = 'Clic para pausar o seguir'
    })
} else {
    // Si prefieres menos movimiento (o no hay soporte), quedan con controles para reproducirlos tú
    clips.forEach(clip => { clip.controls = true })
}

// Visor de imágenes: abre en grande las imágenes que están dentro de un <a class="media" href="...">
const zoomLinks = document.querySelectorAll('a.media')

if (zoomLinks.length && typeof HTMLDialogElement === 'function') {
    const dialog = document.createElement('dialog')
    dialog.className = 'lightbox'
    dialog.setAttribute('aria-label', 'Imagen ampliada')
    dialog.innerHTML = `
        <form method="dialog" class="lightbox-bar">
            <p class="lightbox-caption"></p>
            <button class="icon-btn" aria-label="Cerrar">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"
                    stroke-linecap="round" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13" /></svg>
            </button>
        </form>
        <img alt="">`
    document.body.append(dialog)

    const image = dialog.querySelector('img')
    const caption = dialog.querySelector('.lightbox-caption')

    zoomLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()

            const preview = link.querySelector('img')
            image.src = link.href
            image.alt = preview ? preview.alt : ''
            caption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent.trim() || image.alt

            dialog.showModal()
        })
    })

    // Cerrar al hacer clic fuera de la imagen
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close()
    })

    dialog.addEventListener('close', () => image.removeAttribute('src'))
}
