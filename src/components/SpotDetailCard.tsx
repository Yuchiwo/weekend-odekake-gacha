import styles from './SpotDetailCard.module.css';
import { Spot } from '../types';

interface SpotDetailCardProps {
    spot: Spot;
    className?: string;
}

export const SpotDetailCard = ({ spot, className }: SpotDetailCardProps) => {

    // Fix for broken goo.gl short links in mock data
    const getMapUrl = (spot: Spot) => {
        if (!spot.locationLink || spot.locationLink.includes('goo.gl')) {
            return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name)}`;
        }
        return spot.locationLink;
    };

    return (
        <div className={`${styles.spotCard} ${className || ''}`}>
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
                {spot.address && <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 1rem 0' }}>📍 {spot.address}</p>}
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
                {spot.hpLink && (
                    <a
                        href={spot.hpLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mapLink}
                        style={{ marginTop: '0.5rem', background: '#f0f9ff', color: '#0369a1' }}
                    >
                        🌐 公式サイトを見る
                    </a>
                )}
            </div>
        </div>
    );
};
