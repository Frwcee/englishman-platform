import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingAssistant = ({ step }) => {
    // Hidden during test
    if (step === 'test') return null;

    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Show assistant on scroll or after a delay
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            }
        };

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000); // Show after 3s if no interaction

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="floating-assistant"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    style={styles.container}
                >
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                style={styles.tooltip}
                            >
                                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                                    {step === 'registration'
                                        ? "Need help filling the form?"
                                        : "Questions about the program?"}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setShowTooltip(!showTooltip)}
                        style={styles.button}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        aria-label="Assistant"
                    >
                        ?
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const styles = {
    container: {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexDirection: 'row-reverse' // Tooltip to the left
    },
    button: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary)', // defined in index.css
        color: 'white',
        border: 'none',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s',
    },
    tooltip: {
        backgroundColor: 'white',
        padding: '10px 16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #E9ECEF',
        whiteSpace: 'nowrap',
        color: 'var(--text-dark)',
    }
};

export default FloatingAssistant;
