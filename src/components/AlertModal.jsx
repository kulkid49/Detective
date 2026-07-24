import { motion, AnimatePresence } from 'framer-motion';

export default function AlertModal({ isOpen, onClose, message, title = "DETECTIVE'S NOTES" }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="paper-doc"
          style={{
            maxWidth: '500px',
            width: '90%',
            padding: '2rem',
            position: 'relative'
          }}
        >
          <h3 style={{ 
            fontFamily: 'var(--font-typewriter-bold)', 
            borderBottom: '2px solid var(--blood-red)', 
            paddingBottom: '0.5rem', 
            marginTop: 0 
          }}>
            {title}
          </h3>
          
          <p style={{ 
            fontFamily: 'var(--font-typewriter)', 
            whiteSpace: 'pre-wrap', 
            lineHeight: '1.6', 
            margin: '2rem 0' 
          }}>
            {message}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              className="btn" 
              onClick={onClose}
              style={{ padding: '0.5rem 2rem' }}
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
