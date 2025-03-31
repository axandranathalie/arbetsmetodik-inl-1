
/**
 * Definiera ett interface för podcast-programmet
 * Definiera ett interface för det övergripande svaret från API:et
 */

interface IPodcastProgram {
    name: string;
    description: string;
    socialimage: string;
    programurl: string;
}
interface IApiResponse {
    programs: IPodcastProgram[];
}

const url= import.meta.env.VITE_APP_URL;

export async function getPodcasts(): Promise<IApiResponse | null> {
    try {
        const response = await fetch(url);
        const data: IApiResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Något blev fel:', error);
        return null;
    }
}