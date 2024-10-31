function toggleDarkMode() {
    // Dark mode kapcsolása
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Mentés a localStorage-ba
    localStorage.setItem('isDarkMode', isDarkMode);

    // Ikonok megjelenítése a mód szerint
    setIcons(isDarkMode);
}

function loadTheme() {
    // A helyes mód betöltése a localStorage-ból
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

    // A dark-mode osztály hozzáadása vagy eltávolítása
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // Ikonok beállítása a betöltéskor
    setIcons(isDarkMode);
}

// Egy külön függvény az ikonok beállításához a mód szerint
function setIcons(isDarkMode) {
    const darkIcons = document.querySelectorAll('#themeIconDark, #themeIconDarkDesktop');
    const lightIcons = document.querySelectorAll('#themeIconLight, #themeIconLightDesktop');

    darkIcons.forEach(icon => icon.style.display = isDarkMode ? 'none' : 'block');  // Hold ikon elrejtése dark módban
    lightIcons.forEach(icon => icon.style.display = isDarkMode ? 'block' : 'none');  // Nap ikon megjelenítése dark módban
}
window.onload = loadTheme;
