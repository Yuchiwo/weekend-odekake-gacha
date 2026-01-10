import { Spot } from '../types';
import { mockSpots } from '../data/mockSpots';

const STORAGE_KEYS = {
    HISTORY: 'odekake_history',
    FAVORITES: 'odekake_favorites',
    CUSTOM_SPOTS: 'odekake_custom_spots',
};

export const StorageService = {
    // History
    getHistory: (): string[] => {
        const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
        return data ? JSON.parse(data) : [];
    },
    addToHistory: (spotId: string) => {
        const history = StorageService.getHistory();
        if (!history.includes(spotId)) {
            history.push(spotId);
            localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
        }
    },

    // Favorites
    getFavorites: (): string[] => {
        const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return data ? JSON.parse(data) : [];
    },
    toggleFavorite: (spotId: string) => {
        const favorites = StorageService.getFavorites();
        const index = favorites.indexOf(spotId);
        if (index === -1) {
            favorites.push(spotId);
        } else {
            favorites.splice(index, 1);
        }
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    },

    // Custom Spots
    getCustomSpots: (): Spot[] => {
        const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_SPOTS);
        return data ? JSON.parse(data) : [];
    },
    addCustomSpot: (spot: Spot) => {
        const spots = StorageService.getCustomSpots();
        spots.push(spot);
        localStorage.setItem(STORAGE_KEYS.CUSTOM_SPOTS, JSON.stringify(spots));
    },
    removeCustomSpot: (spotId: string) => {
        const spots = StorageService.getCustomSpots();
        const filtered = spots.filter(s => s.id !== spotId);
        localStorage.setItem(STORAGE_KEYS.CUSTOM_SPOTS, JSON.stringify(filtered));
    },

    // Combined Spot Source
    getAllSpots: (): Spot[] => {
        const custom = StorageService.getCustomSpots();
        return [...mockSpots, ...custom];
    },

    // Reset used for debugging
    clearAll: () => {
        localStorage.clear();
    }
};
