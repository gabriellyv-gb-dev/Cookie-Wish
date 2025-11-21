// types
import type { fortunePaperTypes } from "../types/components/fortunePaperTypes";

// component function
export default function FortunePaper( {fortuneText}: fortunePaperTypes ) {
    return (
        <div className="flex max-w-[350px] items-center justify-center animate-[fadeInUp_0.8s_ease-out] z-20">
            <div className="bg-amber-50 shadow-lg rounded-lg border-2 border-amber-300 flex items-center justify-center p-3">
                <p className="text-amber-800 font-medium text-center leading-tight">
                    {fortuneText}
                </p>
            </div>
        </div>
    )
}