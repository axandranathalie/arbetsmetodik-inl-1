import { getPodcasts } from './api';

/**
 * Denna modul hämtar podcastdata från ett API och skapar HTML-element 
 * för att visa information om varje podcast,
 * inklusive bild, namn, beskrivning och länk till programmet. 
 * Funktionen `createHtml` hanterar all renderingslogik.
 */

const podCastContainer = document.querySelector('.section-podlist-pods') as HTMLElement;

export async function createHtml(): Promise<void> {
    if (!podCastContainer) {
        console.error("Podcast container element not found");
        return;
    }

    try {
        const podcasts = await getPodcasts();

        if (!podcasts || !podcasts.programs) {
            console.error("Ingen podcasts-data hittades eller fel struktur.");
            return;
        }

        podcasts.programs.forEach((podcast) => {
            renderPodcast(podcast, podCastContainer);
        });
    } catch (error) {
        console.error('Ett fel uppstod vid hämtning eller renderande av podcasts:', error);
    }
}

function renderPodcast(podcast: any, parent: HTMLElement): void {
    const article = createArticle(parent);
    const textDiv = createTextDiv(article);

    if (podcast.socialimage) {
        createImage(podcast.socialimage, article);
    }

    createHeader(podcast.name, textDiv);
    createDescription(podcast.description, textDiv);

    if (podcast.programurl) {
        createLink(podcast.programurl, textDiv);
    }
}

function createArticle(parent: HTMLElement): HTMLElement {
    const article = document.createElement('article');
    article.className = 'section-article-innerArticle';
    parent.appendChild(article);
    return article;
}

function createTextDiv(parent: HTMLElement): HTMLElement {
    const textDiv = document.createElement('div');
    textDiv.className = 'section-article-div';
    parent.appendChild(textDiv);
    return textDiv;
}

function createImage(src: string, parent: HTMLElement): void {
    const img = document.createElement('img');
    img.src = src;
    img.width = 100;
    img.height = 100;
    img.alt = "Podcast-omslagsbild";
    parent.appendChild(img);
}

function createHeader(name: string, parent: HTMLElement): void {
    const header = document.createElement('h2');
    header.textContent = name;
    parent.appendChild(header);
}

function createDescription(description: string, parent: HTMLElement): void {
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    parent.appendChild(paragraph);
}

function createLink(url: string, parent: HTMLElement): void {
    const link = document.createElement('a');
    link.href = url;
    link.textContent = 'Lyssna här';
    parent.appendChild(link);
}