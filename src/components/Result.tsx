import { useState, useEffect } from 'react';
import styles from './Result.module.css';
import { Spot } from '../types';
import { SpotDetailCard } from './SpotDetailCard';
import { StorageService } from '../services/StorageService';

interface ResultProps {
    spot: Spot;
    onReroll: () => void;
    onHome: () => void;
}

export const Result = ({ spot, onReroll, onHome }: ResultProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = StorageService.getFavorites();
        setIsFavorite(favorites.includes(spot.id));
    }, [spot.id]);

    const toggleFavorite = () => {
        StorageService.toggleFavorite(spot.id);
        setIsFavorite(!isFavorite);
    };



    return (
        <div className={`container ${styles.resultContainer} fade-in`}>
            <SpotDetailCard spot={spot} />
            <div className={styles.actions}>
                <button onClick={onHome} className={styles.secondaryBtn}>
                    ホーム
                </button>
                <button
                    onClick={toggleFavorite}
                    className={`${styles.secondaryBtn} ${isFavorite ? styles.favoriteActive : ''}`}
                    style={{ background: isFavorite ? '#fff0f7' : 'white', color: isFavorite ? '#ec4899' : '#1f2937', border: isFavorite ? '2px solid #ec4899' : 'none' }}
                >
                    {isFavorite ? '♥ 行きたい済' : '♡ 行きたい！'}
                </button>
                <button onClick={onReroll} className={styles.primaryBtn}>
                    ↻ 次へ
                </button>
            </div>
        </div>
    );
};
