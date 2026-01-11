import { Spot } from '../types';
import { tokyoSpots } from './areas/tokyo';
import { kanagawaSpots } from './areas/kanagawa';
import { chibaSpots } from './areas/chiba';
import { saitamaSpots } from './areas/saitama';
import { otherSpots } from './areas/other';

export const mockSpots: Spot[] = [
    ...tokyoSpots,
    ...kanagawaSpots,
    ...chibaSpots,
    ...saitamaSpots,
    ...otherSpots
];
