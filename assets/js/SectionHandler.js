// Pestañas de Roblox Studio (Juegos, Frameworks y Extra)
const tabList = document.querySelector('[role="tablist"]')

if (tabList) {
    const tabs = [...tabList.querySelectorAll('[role="tab"]')]

    const select = (tab, focus = false) => {
        tabs.forEach(other => {
            const selected = other === tab
            other.setAttribute('aria-selected', selected)
            other.tabIndex = selected ? 0 : -1
            document.getElementById(other.getAttribute('aria-controls')).hidden = !selected
        })

        if (focus) tab.focus()

        try {
            sessionStorage.setItem('selectedTab', tab.id)
        } catch { }
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => select(tab))

        // Moverse entre pestañas con las flechas del teclado
        tab.addEventListener('keydown', event => {
            const next = {
                ArrowRight: tabs[(index + 1) % tabs.length],
                ArrowLeft: tabs[(index - 1 + tabs.length) % tabs.length],
                Home: tabs[0],
                End: tabs[tabs.length - 1],
            }[event.key]

            if (!next) return
            event.preventDefault()
            select(next, true)
        })
    })

    // Abrir la pestaña de ?tab=Extra o la última que se usó (por ejemplo, al volver de un proyecto)
    let saved = new URLSearchParams(location.search).get('tab')

    if (!saved) {
        try {
            saved = sessionStorage.getItem('selectedTab')
        } catch { }
    }

    const savedTab = tabs.find(tab => tab.id === saved)
    if (savedTab) select(savedTab)
}
