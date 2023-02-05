import { HighlightModel } from "../Models/highlightModel";


export function getUniqueTeamsArray(highlightsArray: HighlightModel[]): string[] {
    const teamNames = highlightsArray.map((highlight: HighlightModel) => {
        return [highlight.side1.name, highlight.side2.name]
    })
    const uniqueTeamNames = teamNames.reduce((unique: string[], teams: string[]) => {
        teams.forEach((team: string) => {
            if (!unique.includes(team)) {
                unique.push(team);
            }
        });
        return unique;
    }, []);
    return uniqueTeamNames.sort((a, b) => a.localeCompare(b))
}