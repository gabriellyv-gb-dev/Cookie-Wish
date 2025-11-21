// icons
import { FaRegTrashAlt } from "react-icons/fa";

// react
import { useState, useEffect } from 'react';

// components
import AppHeader from '../components/AppHeader';
import { FortuneCookie } from '../components/FortuneCookie';
import FortunePaper from '../components/FortunePaper';
import AppFooter from '../components/AppFooter';

// static
import { fortunesArray } from '../static/fortunesArray';

// page function
export default function HomePage() {
    // states
    const [isCookieOpen, setIsCookieOpen] = useState(false);
    const [currentFortune, setCurrentFortune] = useState('');

    const [fortuneHistory, setFortuneHistory] = useState<string[]>([]);
    const [loaded, setLoaded] = useState(false);

    // effects
        // get fortune history from localStorage
        useEffect(() => {
            const saved = localStorage.getItem('fortuneHistoryArray');
            if (saved) {
                setFortuneHistory(JSON.parse(saved));
            }
            setLoaded(true);
        }, []);

        // save fortune history into localStorage
        useEffect(() => {
            if (loaded) {
                localStorage.setItem('fortuneHistoryArray', JSON.stringify(fortuneHistory));
            }
        }, [fortuneHistory, loaded]);


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

    // jsx return
    return(
        <>
            {/* header */}
            <AppHeader />
            
            {/* main with cookie */}
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
                                className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition-colors shadow-lg font-medium"
                            >
                                🍪 Abrir Outro Biscoito
                            </button>
                        </div>
                    )}
                </div>

                {/* fortune history */}
                {fortuneHistory.length > 0 && (
                    <div>
                        <div className="flex justify-between items-center mb-4 px-4">
                            {/* list title */}
                            <h3 className='text-lg font-bold'>
                                Histórico da sorte:
                            </h3>

                            {/* clear list button */}
                            <button 
                                className="hover:transition-all hover:scale-110 cursor-pointer"
                                onClick={() => setFortuneHistory([])}
                            >
                                <FaRegTrashAlt
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>
                        <div className='border p-8 rounded-2xl max-h-[30dvh] overflow-scroll'>
                            <ul className='flex flex-col gap-6'>
                                {fortuneHistory.map( (item, index) => (
                                    <li key={index}>
                                        <FortunePaper fortuneText={item} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </main>
            
            {/* footer */}
            <AppFooter />
        </>
    )
}