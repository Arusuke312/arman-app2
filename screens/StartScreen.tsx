import React, { useState } from 'react';
import { Fingerprint } from 'lucide-react';
import { TreeIcon } from '../components/TreeIcon';

interface StartScreenProps {
  onLogin: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onLogin }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleAuth = () => {
    setIsAuthenticating(true);
    // Simulate biometric delay
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col items-center justify-between py-12 px-6 relative overflow-hidden bg-gradient-to-b from-olive-slate to-olive-dark text-ivory">
      
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10">
        <div className="mb-8 p-8 rounded-full bg-white/5 backdrop-blur-sm shadow-2xl animate-breathe">
           <TreeIcon size={80} className="text-olive-light drop-shadow-lg" />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-2 text-center text-ivory">
          Olive Wealth
        </h1>
        <p className="text-ivory/70 text-center max-w-[250px] font-light">
          Your wealth, grown organically.
        </p>
      </div>

      <div className="w-full max-w-xs z-10 mb-8">
        <button
          onClick={handleAuth}
          disabled={isAuthenticating}
          className={`
            w-full flex items-center justify-center gap-3 py-4 rounded-2xl
            bg-ivory/10 backdrop-blur-md border border-white/20
            text-ivory font-semibold text-lg transition-all duration-300
            active:scale-95 shadow-lg
            ${isAuthenticating ? 'opacity-80 cursor-wait' : 'hover:bg-ivory/20'}
          `}
        >
          {isAuthenticating ? (
            <>
              <div className="w-6 h-6 border-2 border-ivory/30 border-t-gold rounded-full animate-spin" />
              <span>Verifying...</span>
            </>
          ) : (
            <>
              <Fingerprint size={24} className="text-gold" />
              <span>Touch ID Login</span>
            </>
          )}
        </button>
        <p className="mt-4 text-xs text-center text-ivory/40">
          Secured by biometric authentication
        </p>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-olive-drab/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};
