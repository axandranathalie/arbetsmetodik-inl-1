/**
 * Hanterar växling mellan mörkt och ljust läge i applikationen.
 * Lägger till eller tar bort klassen 'darkmode' på <body> för att ändra temat.
 */

const toggleDarkModeButton = document.querySelector('.toggle-btn') as HTMLElement | null;

export function toggleDarkMode(): void {
    if (toggleDarkModeButton) {
        document.body.classList.toggle('darkmode');

        if (document.body.classList.contains('darkmode')) {
            toggleDarkModeButton.innerHTML = 'Välj mörkt läge'; 
        } else {
            toggleDarkModeButton.innerHTML = 'Välj ljust läge'; 
        }
    } else {
        console.error('Knappen för att växla läge hittades inte');
    }
}

if (toggleDarkModeButton) {
    toggleDarkModeButton.addEventListener('click', toggleDarkMode);
} else {
    console.error('Knappen för att växla läge finns inte i DOM');
}