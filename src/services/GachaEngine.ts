import { Spot, FilterState } from '../types';
import { StorageService } from './StorageService';

export const GachaEngine = {
    filterSpots: (spots: Spot[], filter: FilterState): Spot[] => {
        return spots.filter(spot => {
            // Area match
            if (filter.areas.length > 0 && !filter.areas.includes(spot.area)) return false;

            // Genre match
            if (filter.genres.length > 0 && !filter.genres.includes(spot.genre)) return false;

            // Budget match
            if (filter.budgets.length > 0 && !filter.budgets.includes(spot.budget)) return false;

            // Weather match
            // If filter is 'rainy_ok', we only show spots that are 'rainy_ok'.
            // If filter is 'sunny' (or null/any), we show everything usually? 
            // Requirement: "Rainy OK" button selected -> Only show rainy_ok spots.
            // If user DOES NOT select "Rainy OK" (e.g. it's sunny), show all spots? or prioritize sunny?
            // Let's assume filter.weather is strictly restrictive.
            if (filter.weather === 'rainy_ok' && spot.weather !== 'rainy_ok') return false;

            // If filter is sunny, maybe we don't strictly exclude rainy_ok places? 
            // But if user explicitly wants "Sunny" spots (maybe outdoor), we might exclude rainy_ok indoor spots if they are strictly indoor?
            // For now: "Sunny" filter means show everything (default) or specifically "Sunny only" spots?
            // Re-reading requirements: "Weather (Rain OK / Sunny Recommended)".
            // Let's implement: unique logic based on UI toggle.
            // If filter.weather is set, matched strictly.
            if (filter.weather && spot.weather !== filter.weather && filter.weather !== 'sunny') return false;
            // If filter is 'sunny', we assume it excludes 'strictly rainy'? No, 'sunny' spots are usually outdoor. 'rainy_ok' spots are both?
            // Let's stick to simple strict matching for now, can refine later.
            if (filter.weather === 'sunny' && spot.weather === 'rainy_ok') {
                // 'rainy_ok' spots (museums) can be visited on sunny days too. 
                // So 'Sunny' filter might be redundant unless we have 'Sunny ONLY' spots (parks).
                // Allow all if filter is sunny? Or restrict to ONLY 'sunny' types? 
                // Let's allow all if filter is sunny, UNLESS we treat 'sunny' as "Outdoor activities".
                // For MVP: Strict equality for simplicity.
                return true;
            }

            // Mood match
            if (filter.mood) {
                if (!spot.vibes || !spot.vibes.includes(filter.mood)) return false;
            }

            return true;
        });
    },

    draw: (filter: FilterState): Spot | null => {
        const allSpots = StorageService.getAllSpots();
        const candidates = GachaEngine.filterSpots(allSpots, filter);

        // Initial requirement: "History ... don't show again"
        // Let's exclude visited spots for now, or make it optional?
        // "Past went places -> done (don't show again)"
        const history = StorageService.getHistory();
        const unvisitedCandidates = candidates.filter(s => !history.includes(s.id));

        // Fallback: if all unvisited, maybe show visited? Or just return null (No spots found).
        // Let's return from unvisited if possible.
        const pool = unvisitedCandidates.length > 0 ? unvisitedCandidates : candidates;

        if (pool.length === 0) return null;

        // Random selection
        const randomIndex = Math.floor(Math.random() * pool.length);
        return pool[randomIndex];
    }
};
