import "../../style.scss"; 
import { createHtml } from './createHtml';
import { toggleDarkMode } from './toggleDarkMode';
import { getPodcasts } from './api'; 

/**
 * Aktiverar funktionalitet för att växla mellan mörkt och ljust läge.
 * Skapar HTML-strukturen baserat på innehåll från API.
 * Hämtar och loggar podcast-data från API.
 * Hanterar eventuella fel under initialiseringen.
 */

async function init(): Promise<void> {
    try {
        toggleDarkMode();

        await createHtml();  

        // Hämta data från API och logga det
        const podcasts = await getPodcasts(); 

    } catch (error) {
        console.error('Ett fel uppstod under initialiseringen:', error);
    }
}

init();
