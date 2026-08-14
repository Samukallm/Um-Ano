import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SpaceBackground } from './components/SpaceBackground';
import { Universe } from './components/Universe';
import { Outro } from './components/Outro';

type AppState = 'intro' | 'universe' | 'outro';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('intro');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStartJourney = () => {
    // Tenta tocar a música assim que o usuário clica para entrar no universo
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Volume agradável de fundo
      audioRef.current.play().catch((err) => {
        console.log("Autoplay bloqueado pelo navegador:", err);
      });
    }
    setCurrentState('universe');
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', color: 'white', position: 'relative' }}>
      <SpaceBackground />
      
      {/* Elemento de áudio escondido (coloque o arquivo musica.mp3 na pasta public) */}
      <audio ref={audioRef} src="/musica.mp3" loop />

      <AnimatePresence mode="wait">
        {currentState === 'intro' && (
          <motion.div 
            key="intro" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
            transition={{ duration: 1.5 }}
            style={introStyles}
          >
            <h1 style={{ fontFamily: 'serif', fontWeight: 300, letterSpacing: '2px', textAlign: 'center', padding: '0 20px' }}>
              Um ano navegando no mesmo universo.
            </h1>
            <button onClick={handleStartJourney} style={btnStyle}>
              Começar Viagem
            </button>
          </motion.div>
        )}

        {currentState === 'universe' && (
          <motion.div 
            key="universe" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ width: '100%', height: '100%' }}
          >
            <Universe onFinish={() => setCurrentState('outro')} />
          </motion.div>
        )}

        {currentState === 'outro' && (
          <motion.div 
            key="outro" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ width: '100%', height: '100%' }}
          >
            <Outro />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const introStyles: React.CSSProperties = {
  position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center', zIndex: 10
};

const btnStyle: React.CSSProperties = {
  marginTop: '40px', padding: '12px 30px', background: 'transparent', 
  border: '1px solid rgba(255,255,255,0.4)', color: 'white', borderRadius: '30px',
  cursor: 'pointer', fontFamily: 'serif', fontSize: '1rem',
  transition: 'all 0.3s ease'
};

export default App;