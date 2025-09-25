let selected = document.querySelector(".Games")

const gamesButton = document.getElementById("Games")
const FrameworksButton = document.getElementById("Frameworks")
const ExtraButton = document.getElementById("Extra")

const gamesSection = document.querySelector(".Games")
const FrameworksSection = document.querySelector(".Frameworks")
const ExtraSection = document.querySelector(".Extra")

console.log(gamesSection, FrameworksSection)


gamesButton.addEventListener("click", () => {
    if (selected == gamesSection) return
    selected = gamesSection

    FrameworksSection.classList.remove("opacity-100")
    ExtraSection.classList.remove("opacity-100")

    FrameworksSection.classList.add("hidden")
    ExtraSection.classList.add("hidden")

    gamesSection.classList.remove("hidden")

    setTimeout(() => {
        gamesSection.classList.add("opacity-100")
        FrameworksSection.classList.add("opacity-0")
        ExtraSection.classList.add("opacity-0")

    }, 50);
})

FrameworksButton.addEventListener("click", () => {
    if (selected == FrameworksSection) return
    selected = FrameworksSection

    gamesSection.classList.remove("opacity-100")
    ExtraSection.classList.remove("opacity-100")

    gamesSection.classList.add("hidden")
    ExtraSection.classList.add("hidden")

    FrameworksSection.classList.remove("hidden")
    setTimeout(() => {
        FrameworksSection.classList.add("opacity-100")
        gamesSection.classList.add("opacity-0")
        ExtraSection.classList.add("opacity-0")

    }, 50);
})

ExtraButton.addEventListener("click", () => {
    if (selected == ExtraSection) return
    selected = ExtraSection

    gamesSection.classList.remove("opacity-100")
    FrameworksSection.classList.remove("opacity-100")

    gamesSection.classList.add("hidden")
    FrameworksSection.classList.add("hidden")

    ExtraSection.classList.remove("hidden")
    setTimeout(() => {
        ExtraSection.classList.add("opacity-100")
        gamesSection.classList.add("opacity-0")
        FrameworksSection.classList.add("opacity-0")

    }, 50);
})
