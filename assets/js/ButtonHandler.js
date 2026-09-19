// Copia mi Discord al portapapeles desde cualquier botón con data-discord
const discord = 'night_gsub'
const toast = document.getElementById('toast')
let toastTimer

const showToast = message => {
    if (!toast) return alert(message)

    toast.textContent = message
    toast.classList.add('is-visible')

    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4500)
}

document.querySelectorAll('[data-discord]').forEach(button => {
    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(discord)
            showToast(`Discord (${discord}) copiado al portapapeles; ¡presiona Ctrl + V para pegarlo si estás en computadora!`)
        } catch (err) {
            console.error('Error: ', err)
            showToast(`Error al copiar el Discord. Mi usuario es: ${discord}`)
        }
    })
})
