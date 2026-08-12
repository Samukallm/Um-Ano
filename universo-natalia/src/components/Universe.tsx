import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { poems, type Poem } from '../data/poems';
import './Universe.css';

interface UniverseProps {
  onFinish: () => void;
}

export function Universe({ onFinish }: UniverseProps) {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);

  return (
    <div className="universe-container">
      <button className="finish-button" onClick={onFinish}>
        Ver Mensagem Final
      </button>

      <div className="solar-system">
        {poems.map((poem) => {
          const { id, title, planet } = poem;
          const isSelected = selectedPoem?.id === id;

          return (
            <div 
              key={id} 
              className="orbit-ring"
              style={{
                width: planet.orbitRadius * 2,
                height: planet.orbitRadius * 2,
                pointerEvents: 'none' // Não bloqueia o clique nos elementos abaixo
              }}
            >
              <motion.div
                className="orbit-container"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: planet.speed || 10,
                  ease: "linear",
                }}
                style={{ pointerEvents: 'none' }}
              >
                {!isSelected && (
                  <motion.div
                    layoutId={`planet-${id}`}
                    className="planet"
                    style={{
                      width: planet.size,
                      height: planet.size,
                      background: planet.color,
                      top: -planet.size / 2,
                      pointerEvents: 'auto', // Ativa o clique EXCLUSIVAMENTE na bolinha
                      cursor: 'pointer'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPoem(poem);
                    }}
                    whileHover={{ scale: 1.2, boxShadow: `0 0 25px ${planet.color}` }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="planet-label">{title}</span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Leitor de Poemas */}
      <AnimatePresence>
        {selectedPoem && (
          <div className="poem-overlay" style={{ zIndex: 999 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="poem-backdrop"
              onClick={() => setSelectedPoem(null)}
            />
            
            <motion.div
              layoutId={`planet-${selectedPoem.id}`}
              className="poem-reader"
              style={{ background: selectedPoem.planet.color }}
            >
              <button 
                className="close-poem" 
                onClick={() => setSelectedPoem(null)}
              >
                ✕
              </button>
              
              <motion.div 
                className="poem-content-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="poem-title">{selectedPoem.title}</h2>
                <div className="poem-text">
                  {/* Trata tanto texto normal quanto array de estrofes */}
                  {Array.isArray(selectedPoem.content) ? (
                    selectedPoem.content.map((stanza, index) => (
                      <p key={index}>{stanza}</p>
                    ))
                  ) : (
                    <p>{selectedPoem.content}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}