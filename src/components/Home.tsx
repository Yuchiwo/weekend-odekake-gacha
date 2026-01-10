import { useState } from 'react';
import styles from './Home.module.css';
import { FilterState, Area, Budget, Genre, Weather } from '../types';

interface HomeProps {
    onGacha: (filter: FilterState) => void;
}

export const Home = ({ onGacha }: HomeProps) => {
    const [filter, setFilter] = useState<FilterState>({
        areas: [],
        genres: [],
        budgets: [],
        weather: null,
        mood: null,
    });

    const [isAnimating, setIsAnimating] = useState(false);

    const handleGachaClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            onGacha(filter);
            setIsAnimating(false);
        }, 800);
    };

    const toggleFilter = <T extends string>(
        category: keyof FilterState,
        value: T
    ) => {
        // @ts-ignore
        setFilter((prev) => {
            if (category === 'weather' || category === 'mood') {
                // @ts-ignore
                return { ...prev, [category]: prev[category] === value ? null : value };
            }

            const currentList = prev[category] as unknown as T[];
            const newList = currentList.includes(value)
                ? currentList.filter((item) => item !== value)
                : [...currentList, value];

            return { ...prev, [category]: newList };
        });
    };

    return (
        <div className={`container ${styles.homeContainer}`}>
            <header className={styles.header}>
                <h1 className={styles.title}>週末、どこ行く？</h1>
                <p className={styles.subtitle}>迷ったら運に任せて、新しい発見を。</p>
            </header>

            <div className={`glass-panel ${styles.filterPanel}`}>
                <h2 className={styles.sectionTitle}>条件で絞り込む</h2>

                <div className={styles.filterGroup}>
                    <label>お天気</label>
                    <div className={styles.chips}>
                        <button
                            className={`${styles.chip} ${filter.weather === 'rainy_ok' ? styles.active : ''}`}
                            onClick={() => setFilter(prev => ({ ...prev, weather: prev.weather === 'rainy_ok' ? null : 'rainy_ok' }))}
                        >
                            ☔ 雨でもOK
                        </button>
                        <button
                            className={`${styles.chip} ${filter.weather === 'sunny' ? styles.active : ''}`}
                            onClick={() => setFilter(prev => ({ ...prev, weather: prev.weather === 'sunny' ? null : 'sunny' }))}
                        >
                            ☀️ 晴天推奨
                        </button>
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label>気分 (Mood)</label>
                    <div className={styles.chips}>
                        <button
                            className={`${styles.chip} ${filter.mood === 'relax' ? styles.active : ''}`}
                            onClick={() => toggleFilter('mood', 'relax')}
                        >
                            🍵 まったり
                        </button>
                        <button
                            className={`${styles.chip} ${filter.mood === 'exciting' ? styles.active : ''}`}
                            onClick={() => toggleFilter('mood', 'exciting')}
                        >
                            🎉 わいわい
                        </button>
                        <button
                            className={`${styles.chip} ${filter.mood === 'romantic' ? styles.active : ''}`}
                            onClick={() => toggleFilter('mood', 'romantic')}
                        >
                            💕 ロマンチック
                        </button>
                        <button
                            className={`${styles.chip} ${filter.mood === 'cultural' ? styles.active : ''}`}
                            onClick={() => toggleFilter('mood', 'cultural')}
                        >
                            🎨 知的・文化
                        </button>
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label>エリア</label>
                    <div className={styles.chips}>
                        {(['23ku', 'tama', 'yokohama', 'chiba_saitama', 'other'] as Area[]).map(area => (
                            <button
                                key={area}
                                className={`${styles.chip} ${filter.areas.includes(area) ? styles.active : ''}`}
                                onClick={() => toggleFilter('areas', area)}
                            >
                                {area === '23ku' ? '23区' : area === 'tama' ? '多摩' : area === 'yokohama' ? '横浜' : area === 'chiba_saitama' ? '千葉埼玉' : 'その他'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label>予算</label>
                    <div className={styles.chips}>
                        {(['free', 'low', 'mid', 'high'] as Budget[]).map(budget => (
                            <button
                                key={budget}
                                className={`${styles.chip} ${filter.budgets.includes(budget) ? styles.active : ''}`}
                                onClick={() => toggleFilter('budgets', budget)}
                            >
                                {budget === 'free' ? '0円' : budget === 'low' ? '~2千' : budget === 'mid' ? '~5千' : '5千~'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.actionArea}>
                <button
                    className={`${styles.gachaButton} ${isAnimating ? styles.shake : ''}`}
                    onClick={handleGachaClick}
                    disabled={isAnimating}
                >
                    {isAnimating ? '選定中...' : 'ガチャを回す'}
                </button>
            </div>
        </div>
    );
};
