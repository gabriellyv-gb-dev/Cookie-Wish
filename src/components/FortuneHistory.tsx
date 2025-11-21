import { FaRegTrashAlt } from 'react-icons/fa';
import FortunePaper from '../components/FortunePaper';
import type { FortuneHistoryProps } from '../types/FortuneHistoryProps';
 

 
 export default function FortuneHistory( { fortuneHistory, setFortuneHistory }: FortuneHistoryProps ) {
    
    
    
    return(
        <div>
            {fortuneHistory.length > 0 ? (
                <div>
                    <div className="flex justify-between items-center mb-4 px-4">
                        {/* list title */}
                        <h3 className='text-lg font-bold text-amber-950'>
                            Histórico da sorte:
                        </h3>

                        {/* clear list button */}
                        <button 
                            className="hover:transition-all hover:scale-110 cursor-pointer"
                            onClick={() => setFortuneHistory([])}
                        >
                            <FaRegTrashAlt
                                className="w-5 h-5 text-amber-950" 
                            />
                        </button>
                    </div>
                    <div className='border border-red-300 bg-red-100 shadow-lg p-8 rounded-2xl max-h-[30dvh] overflow-auto'>
                        <ul className='flex flex-col gap-6'>
                            {fortuneHistory.map( (item, index) => (
                                <li key={index}>
                                    <FortunePaper fortuneText={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <></>
            ) }
        </div>
    )
 }