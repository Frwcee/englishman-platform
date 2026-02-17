import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Mascot = ({ step }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [message, setMessage] = useState("Hi! I'm Yappy! 🐭");

    // Don't show mascot during test
    if (step === 'test') return null;

    useEffect(() => {
        const messages = [
            "Ready to speak? 🗣️",
            "Only 10 seats left! 🪑",
            "Let's test your level! 📊",
            "No boring theory! 🚫",
        ];

        const interval = setInterval(() => {
            setMessage(messages[Math.floor(Math.random() * messages.length)]);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 4000);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="mascot-container"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 100,
                pointerEvents: 'none' // allow clicking through empty space
            }}
        >
            <div style={{ position: 'relative', pointerEvents: 'auto' }}>
                <AnimatePresence>
                    {showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            style={{
                                position: 'absolute',
                                bottom: '100%',
                                right: '0',
                                marginBottom: '10px',
                                background: 'white',
                                padding: '12px 16px',
                                borderRadius: '16px 16px 0 16px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                width: 'max-content',
                                maxWidth: '200px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                color: 'var(--primary-hover)'
                            }}
                        >
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    className="mascot-body"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    onClick={() => setShowTooltip(true)}
                    style={{
                        fontSize: '3.5rem',
                        cursor: 'pointer',
                        filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.2))'
                    }}
                >
                    🐭
                </motion.div>
            </div>
        </div>
    );
};

export default Mascot;
