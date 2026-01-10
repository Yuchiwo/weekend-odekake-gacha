export type Area = '23ku' | 'tama' | 'yokohama' | 'chiba_saitama' | 'other';
export type Genre = 'nature' | 'art' | 'gourmet' | 'onsen' | 'shopping' | 'activity' | 'relax';
export type Budget = 'free' | 'low' | 'mid' | 'high'; // 0, <2000, <5000, >5000
export type Weather = 'sunny' | 'rainy_ok';
export type Mood = 'relax' | 'exciting' | 'romantic' | 'cultural';

export interface Spot {
    id: string;
    name: string;
    area: Area;
    genre: Genre;
    budget: Budget;
    weather: Weather;
    description: string;
    imageUrl?: string;
    locationLink: string; // Google Maps URL
    priority?: number;
    vibes?: Mood[]; // New field
}

export interface FilterState {
    areas: Area[];
    genres: Genre[];
    budgets: Budget[];
    weather: Weather | null;
    mood: Mood | null; // New field
}
