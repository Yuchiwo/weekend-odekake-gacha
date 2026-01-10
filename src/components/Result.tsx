import { useState, useEffect } from 'react';
import styles from './Result.module.css';
import { Spot } from '../types';
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

    // Fix for broken goo.gl short links in mock data
    const getMapUrl = (spot: Spot) => {
        if (!spot.locationLink || spot.locationLink.includes('goo.gl')) {
            return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name)}`;
        }
        return spot.locationLink;
    };

    return (
        <div className={`container ${styles.resultContainer} fade-in`}>
            <div className={styles.spotCard}>
                <div
                    className={styles.imageArea}
                    style={{ backgroundImage: `url(${spot.imageUrl || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000'})` }}
                >
                    <div className={styles.badges}>
                        <span className={styles.badge}>{spot.area}</span>
                        <span className={styles.badge}>{spot.genre}</span>
                    </div>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.spotName}>{spot.name}</h2>
                    <p className={styles.description}>{spot.description}</p>

                    <div className={styles.infoRow}>
                        <span>💰 {spot.budget}</span>
                        <span>{spot.weather === 'rainy_ok' ? '☔ 雨OK' : '☀️ 晴れ推奨'}</span>
                    </div>

                    <a
                        href={getMapUrl(spot)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mapLink}
                    >
                        📍 Google Mapsで見る
                    </a>
                </div>
            </div>

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
