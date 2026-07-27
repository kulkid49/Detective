import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase, FileSearch } from 'lucide-react';

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="landing-screen">
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          opacity: 0.05
        }}
      >
        <FileSearch size={800} color="#fff" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="landing-hero"
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.5, stiffness: 200, damping: 15 }}
          >
            <Briefcase size={80} color="var(--paper-white)" />
          </motion.div>
        </div>
        
        <h1 className="landing-title">
          CASE FILES
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="landing-subtitle"
        >
          AN INTERACTIVE DETECTIVE MYSTERY
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="landing-cta"
      >
        <button 
          className="btn"
          onClick={() => navigate('/archives')}
          style={{
            fontSize: '1.5rem',
            padding: '1.5rem 4rem',
            background: 'transparent',
            border: '2px solid var(--paper-white)',
            color: 'var(--paper-white)',
            boxShadow: '0 0 15px rgba(255,255,255,0.2), inset 0 0 15px rgba(255,255,255,0.2)',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--paper-white)';
            e.target.style.color = 'var(--desk-bg)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'var(--paper-white)';
          }}
        >
          OPEN THE ARCHIVES
        </button>
      </motion.div>

      {/* Noir Scanline overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        backgroundSize: '100% 4px, 3px 100%',
        pointerEvents: 'none',
        zIndex: 5
      }}></div>

    </div>
  );
}
