// components
import FortunePaper from "./FortunePaper";

// types
import type { FortuneCookieProps } from "../types/components/fortuneCookieProps";

// component function
export function FortuneCookie({ isOpen, onClick, currentFortune = "" }: FortuneCookieProps) {
  return (
    <div 
      className="min-h-80 min-w-72 relative mx-auto cursor-pointer bg-red-200 rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      {!isOpen ? (
        // BISCOITO FECHADO
        <div className="min-w-lg flex items-center justify-center hover:transition-transform hover:scale-110 hover:duration-300">
          <img 
            src="/assets/images/cookie-img1.png" 
            alt="Biscoito da Sorte Fechado"
            className="w-64 h-64 object-contain drop-shadow-2xl"
          />
        </div>
      ) : (
        // BISCOITO ABERTO
        <div className="flex items-center justify-center gap-4 relative">
          {/* Metade ESQUERDA */}
          <div className="animate-[slideLeft_0.5s_ease-out] z-10">
            <img 
              src="/assets/images/splitted-cookie-1.png" 
              alt="Metade Esquerda do Biscoito"
              className="w-32 h-64 object-contain drop-shadow-xl rotate-12"
            />
          </div>
          
          {/* Papel da sorte NA HORIZONTAL com mensagem */}
          <FortunePaper fortuneText={currentFortune} />
          
          {/* Metade DIREITA */}
          <div className="animate-[slideRight_0.5s_ease-out] z-10">
            <img 
              src="/assets/images/splitted-cookie-2.png" 
              alt="Metade Direita do Biscoito"
              className="w-32 h-64 object-contain drop-shadow-xl -rotate-12"
            />
          </div>
        </div>
      )}
    </div>
  );
}