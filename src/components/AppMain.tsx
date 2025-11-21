// imports
import FortuneHistory from '../components/FortuneHistory';
import { FortuneCookie } from '../components/FortuneCookie';
import { useState } from 'react';
import { fortunesArray } from '../static/fortunesArray';


export default function AppMain() {

    // states
    const [isCookieOpen, setIsCookieOpen] = useState(false);
    const [currentFortune, setCurrentFortune] = useState('');
    const [fortuneHistory, setFortuneHistory] = useState<string[]>([]);

    

    // handlers
    const handleCookieClick = () => {
        if (!isCookieOpen) {
            const randomIndex = Math.floor(Math.random() * fortunesArray.length);
            const newFortune = fortunesArray[randomIndex];

            setCurrentFortune(newFortune);
            setIsCookieOpen(true);

            // adiciona no histórico sem mutar o state
            setFortuneHistory(prev => [newFortune, ...prev]);
        }
    };

    const handleNewCookie = () => {
        setIsCookieOpen(false);
        setCurrentFortune('');
    };

    return (
        <main className="flex gap-8 flex-col items-center justify-center p-8 min-h-[80dvh] max-h-[80dvh] bg-amber-50">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                    🥠 Biscoito da Sorte
                </h2>
                
                <p className="text-amber-700 mb-8 text-lg">
                    {isCookieOpen ? 'Sua sorte foi revelada!' : 'Clique no biscoito para revelar sua sorte'}
                </p>

                {/* Componente FortuneCookie com a mensagem */}
                <FortuneCookie 
                    isOpen={isCookieOpen}
                    onClick={handleCookieClick}
                    currentFortune={currentFortune} // Passando a mensagem para o componente
                />

                {/* Botão para novo biscoito */}
                {isCookieOpen && (
                    <div className="mt-8 animate-fade-in">
                        <button
                            onClick={handleNewCookie}
                            className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition-colors shadow-lg font-medium font-"
                        >
                            🍪 Abrir Outro Biscoito
                        </button>
                    </div>
                )}
            </div>

            {/* fortune history */}
            <FortuneHistory 
                fortuneHistory={ fortuneHistory } 
                setFortuneHistory={ setFortuneHistory } 
            />
        </main>
    )
}