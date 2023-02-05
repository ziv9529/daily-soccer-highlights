import axios from "axios";
import { HighlightModel } from "../Models/highlightModel";

const options = {
    method: 'GET',
    url: 'https://free-football-soccer-videos1.p.rapidapi.com/v1/',
    headers: {
        'X-RapidAPI-Key': 'bc550ff3d4msh5af2c8b66525e11p1e75eajsnb3fe09352e98',
        'X-RapidAPI-Host': 'free-football-soccer-videos1.p.rapidapi.com'
    }
};

export async function fetchHighlightsService(): Promise<HighlightModel[]> {
    const { data } = await axios.request(options);
    return data
}



