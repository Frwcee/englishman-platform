import React from 'react';
import { motion } from 'framer-motion';

const getLevelData = (score) => {
    // 50 questions total
    if (score <= 12) return {
        level: 'A1 (Beginner)',
        desc: "You are just starting your journey. You know basic phrases but need to build a strong foundation.",
        rec: "General English / Elementary Speaking"
    };
    if (score <= 22) return {
        level: 'A2 (Elementary)',
        desc: "You can understand common phrases and descriptions. You need more practice to speak freely.",
        rec: "Pre-Intermediate Speaking"
    };
    if (score <= 32) return {
        level: 'B1 (Intermediate)',
        desc: "You can deal with most situations while traveling. You need to expand vocabulary and fluency.",
        rec: "IELTS Speaking Foundation"
    };
    if (score <= 42) return {
        level: 'B2 (Upper-Intermediate)',
        desc: "You speak quite clearly but may lack some complex grammar or idiomatic range.",
        rec: "IELTS Speaking Advanced"
    };
    return {
        level: 'C1/C2 (Advanced)',
        desc: "Excellent! You have a strong command of grammar. Let's polish it to perfection.",
        rec: "Professional Speaking / C1 Advanced"
    };
};

const Results = ({ score, userData }) => {
    const { level, desc, rec } = getLevelData(score);

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            minHeight: '100vh',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card"
                style={{
                    padding: '40px',
                    textAlign: 'center',
                    borderTop: '4px solid var(--primary)'
                }}
            >
                <p style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '1.1rem' }}>
                    Results for {userData.fullName}
                </p>
                <h1 style={{ marginBottom: '24px', fontSize: '2.5rem' }}>{level}</h1>
                <p style={{ marginBottom: '32px', lineHeight: '1.6', fontSize: '1.1rem' }}>{desc}</p>

                <div style={{
                    background: 'var(--secondary)',
                    padding: '24px',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '32px',
                    textAlign: 'left'
                }}>
                    <span style={{
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        color: 'var(--text-muted)',
                        display: 'block',
                        marginBottom: '8px'
                    }}>
                        Recommended Course
                    </span>
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: 'var(--primary)'
                    }}>
                        {rec}
                    </span>
                </div>

                <div style={{ display: 'grid', gap: '16px' }}>
                    <button className="btn-primary" style={{ width: '100%' }}>
                        Proceed to Payment
                    </button>

                    <a
                        href="https://t.me/englishmanadmin"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className="btn-secondary" style={{ width: '100%' }}>
                            Contact Admin (Telegram)
                        </button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Results;
