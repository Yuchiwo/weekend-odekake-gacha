import { useState, useEffect } from 'react';
import styles from './SpotList.module.css';
import { Spot, Area, Genre, Budget, Weather } from '../types';
import { StorageService } from '../services/StorageService';
import { SpotDetailCard } from './SpotDetailCard';


interface SpotListProps {
    onBack: () => void;
}

export const SpotList = ({ onBack }: SpotListProps) => {
    const [spots, setSpots] = useState<Spot[]>([]);
    const [activeTab, setActiveTab] = useState<'all' | 'custom' | 'favorites'>('favorites');
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);


    // ... (New Spot Form State omitted for brevity, logic remains same)
    // New Spot Form State
    const [newName, setNewName] = useState('');
    const [newArea, setNewArea] = useState<Area>('23ku');
    const [newGenre, setNewGenre] = useState<Genre>('nature');
    const [newBudget, setNewBudget] = useState<Budget>('low');
    const [newWeather, setNewWeather] = useState<Weather>('sunny');
    const [newDescription, setNewDescription] = useState('');

    useEffect(() => {
        loadSpots();
    }, [activeTab]);

    const loadSpots = () => {
        if (activeTab === 'all') {
            setSpots(StorageService.getAllSpots());
        } else if (activeTab === 'custom') {
            setSpots(StorageService.getCustomSpots());
        } else if (activeTab === 'favorites') {
            const favIds = StorageService.getFavorites();
            const all = StorageService.getAllSpots();
            setSpots(all.filter(s => favIds.includes(s.id)));
        }
    };

    // ... (handleAddSpot remains same)
    const handleAddSpot = (e: React.FormEvent) => {
        e.preventDefault();
        const newSpot: Spot = {
            id: 'custom-' + Date.now(),
            name: newName,
            area: newArea,
            genre: newGenre,
            budget: newBudget,
            weather: newWeather,
            description: newDescription,
            locationLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(newName)}`
        };
        StorageService.addCustomSpot(newSpot);
        setShowAddForm(false);
        // Reset form
        setNewName('');
        setNewDescription('');
        loadSpots();
    };



    const handleDelete = (e: React.MouseEvent, id: string, isCustom: boolean) => {
        e.stopPropagation();
        if (activeTab === 'favorites') {

            StorageService.toggleFavorite(id); // Remove from favs
            loadSpots();
        } else if (isCustom) {
            if (window.confirm('本当に削除しますか？')) {
                StorageService.removeCustomSpot(id);
                loadSpots();
            }
        }
    };

    return (
        <div className={`container ${styles.listContainer} fade-in`}>
            <header className={styles.header}>
                <button className={styles.backButton} onClick={onBack}>← Back</button>
                <h2>スポット管理</h2>
            </header>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'favorites' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('favorites')}
                >
                    行きたい！
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'custom' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('custom')}
                >
                    Myスポット
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    すべて
                </button>
            </div>

            {!showAddForm ? (
                <button className={styles.addButton} onClick={() => setShowAddForm(true)}>+ スポットを追加</button>
            ) : (
                <form className={styles.addForm} onSubmit={handleAddSpot}>
                    <h3>新規登録</h3>
                    <input
                        placeholder="名称 (例: 〇〇公園)"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <div className={styles.row}>
                        <select value={newArea} onChange={e => setNewArea(e.target.value as Area)} className={styles.select}>
                            <option value="23ku">23区</option>
                            <option value="tama">多摩</option>
                            <option value="yokohama">横浜</option>
                            <option value="chiba_saitama">千葉埼玉</option>
                            <option value="other">その他</option>
                        </select>
                        <select value={newGenre} onChange={e => setNewGenre(e.target.value as Genre)} className={styles.select}>
                            <option value="nature">自然</option>
                            <option value="art">アート</option>
                            <option value="gourmet">グルメ</option>
                            <option value="onsen">温泉</option>
                            <option value="shopping">買い物</option>
                            <option value="activity">遊び</option>
                        </select>
                    </div>
                    <div className={styles.row}>
                        <select value={newBudget} onChange={e => setNewBudget(e.target.value as Budget)} className={styles.select}>
                            <option value="free">0円</option>
                            <option value="low">~2000円</option>
                            <option value="mid">~5000円</option>
                            <option value="high">5000円~</option>
                        </select>
                        <select value={newWeather} onChange={e => setNewWeather(e.target.value as Weather)} className={styles.select}>
                            <option value="sunny">晴れ推奨</option>
                            <option value="rainy_ok">雨でもOK</option>
                        </select>
                    </div>
                    <textarea
                        placeholder="メモ"
                        value={newDescription}
                        onChange={e => setNewDescription(e.target.value)}
                        className={styles.textarea}
                    />
                    <div className={styles.formActions}>
                        <button type="button" onClick={() => setShowAddForm(false)} className={styles.cancelBtn}>キャンセル</button>
                        <button type="submit" className={styles.saveBtn}>保存</button>
                    </div>
                </form>
            )}

            <div className={styles.list}>
                {spots.map(spot => (
                    <div key={spot.id} className={styles.listItem} onClick={() => setSelectedSpot(spot)}>
                        <div className={styles.itemInfo}>
                            <span className={styles.itemName}>{spot.name}</span>
                            <span className={styles.itemMeta}>{spot.area} / {spot.genre}</span>
                        </div>

                        {activeTab === 'favorites' ? (
                            <button onClick={(e) => handleDelete(e, spot.id, false)} className={styles.deleteBtn} style={{ background: '#ffe4e6', color: '#e11d48' }}>
                                ♥-
                            </button>
                        ) : spot.id.startsWith('custom-') ? (
                            <button onClick={(e) => handleDelete(e, spot.id, true)} className={styles.deleteBtn}>×</button>
                        ) : null}
                    </div>
                ))}
            </div>

            {selectedSpot && (
                <div className={styles.modalOverlay} onClick={() => setSelectedSpot(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setSelectedSpot(null)}>×</button>
                        <SpotDetailCard spot={selectedSpot} />
                    </div>
                </div>
            )}
        </div>

    );
};
