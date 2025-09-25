const discordButton = document.getElementById('DiscordBt')

discordButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText('night_gsub');
        alert('Discord copiado al portapapeles; presiona Ctrl + v para pegarlo!');
    } catch (err) {
        console.error('Error: ', err);
        alert('Error al copiar el Discord.');
    }
})
