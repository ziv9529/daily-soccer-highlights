export interface Side1 {
    name: string;
    url: string;
}

export interface Side2 {
    name: string;
    url: string;
}

export interface Competition {
    name: string;
    id: number;
    url: string;
}

export interface Video {
    title: string;
    embed: string;
}

export interface HighlightModel {
    title: string;
    embed: string;
    url: string;
    thumbnail: string;
    date: Date;
    side1: Side1;
    side2: Side2;
    competition: Competition;
    videos: Video[];
}