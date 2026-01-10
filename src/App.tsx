import { useState } from 'react';
import { Home } from './components/Home';
import { Result } from './components/Result';
import { SpotList } from './components/SpotList';
import { GachaEngine } from './services/GachaEngine';
import { Spot, FilterState } from './types';
import './index.css';

function App() {
    const [currentScreen, setCurrentScreen] = useState<'home' | 'result' | 'list'>('home');
    const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
    const [lastFilter, setLastFilter] = useState<FilterState | null>(null);

    const handleGacha = (filter: FilterState) => {
        const spot = GachaEngine.draw(filter);
        if (spot) {
            setSelectedSpot(spot);
            setLastFilter(filter);
            setCurrentScreen('result');
        } else {
            alert('条件に合うスポットが見つかりませんでした。条件を緩めてみてください。');
        }
    };

    const handleReroll = () => {
        if (lastFilter) {
            handleGacha(lastFilter);
        }
    };

    const handleHome = () => {
        setCurrentScreen('home');
        setSelectedSpot(null);
    };

    return (
        <>
            {currentScreen === 'home' && (
                <>
                    <Home onGacha={handleGacha} />
                    <div style={{ padding: '0 20px 20px', textAlign: 'center' }}>
                        <button
                            onClick={() => setCurrentScreen('list')}
                            style={{ background: 'none', border: 'none', color: '#6366f1', textDecoration: 'underline' }}
                        >
                            スポットを管理する
                        </button>
                    </div>
                </>
            )}
            {currentScreen === 'result' && selectedSpot && (
                <Result
                    spot={selectedSpot}
                    onReroll={handleReroll}
                    onHome={handleHome}
                />
            )}
            {currentScreen === 'list' && (
                <SpotList onBack={handleHome} />
            )}
        </>
    );
}

export default App;
