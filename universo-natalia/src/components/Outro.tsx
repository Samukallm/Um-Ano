import { motion } from 'framer-motion';
import './Outro.css';

export function Outro() {
  return (
    <div className="outro-container">
      <div className="stars-animation">
        {/* Astro 1 */}
        <motion.div
          className="astro astro-1"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: -25, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Astro 2 */}
        <motion.div
          className="astro astro-2"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 25, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Brilho conjunto quando se encontram */}
        <motion.div
          className="glow"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1.5 }}
          transition={{ delay: 2, duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <motion.div 
        className="final-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <h1>Feliz 1 ano de namoro, Natália, meu amor.</h1>
        <p>E que este seja apenas o primeiro de infinitos anos-luz juntos.</p>
        <p className="signature">Com amor, Samuel</p>
      </motion.div>
    </div>
  );
}