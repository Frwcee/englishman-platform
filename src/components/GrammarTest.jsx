import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { questions } from '../data/questions';

const GrammarTest = ({ onComplete }) => {
    return <GrammarTestContent onComplete={onComplete} questions={questions} />;
};

const GrammarTestContent = ({ onComplete, questions }) => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selection, setSelection] = useState(null); // { idx: number, isCorrect: boolean }

    const currentQ = questions[index];

    const handleSelect = (optIndex) => {
        if (selection) return;

        const isCorrect = optIndex === currentQ.correct;
        setSelection({ idx: optIndex, isCorrect });

        if (isCorrect) setScore(s => s + 1);

        setTimeout(() => {
            if (index < questions.length - 1) {
                setIndex(i => i + 1);
                setSelection(null);
            } else {
                onComplete(score + (isCorrect ? 1 : 0));
            }
        }, 800);
    };

    return (
        <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            minHeight: '100vh',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Minimal Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '20px',
                borderBottom: '1px solid #e9ecef',
                marginBottom: '40px'
            }}>
                <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Grammar Assessment</span>
                <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{index + 1} / {questions.length}</span>
            </div>

            {/* Question Area */}
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    lineHeight: '1.6'
                }}>
                    {currentQ.question.split('___').map((part, i, arr) => (
                        <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                                <span style={{
                                    borderBottom: '2px solid var(--text-dark)',
                                    display: 'inline-block',
                                    minWidth: '60px',
                                    margin: '0 8px'
                                }}>&nbsp;</span>
                            )}
                        </React.Fragment>
                    ))}
                </h2>

                <div style={{ display: 'grid', gap: '16px' }}>
                    {currentQ.options.map((opt, i) => {
                        let borderColor = '#ced4da';
                        let bgColor = 'white';
                        let textColor = 'var(--text-dark)';

                        if (selection) {
                            if (selection.idx === i) {
                                if (selection.isCorrect) {
                                    borderColor = 'var(--success)';
                                    bgColor = 'rgba(56, 142, 60, 0.05)';
                                    textColor = 'var(--success)';
                                } else {
                                    borderColor = 'var(--error)';
                                    bgColor = 'rgba(211, 47, 47, 0.05)';
                                    textColor = 'var(--error)';
                                }
                            } else if (i === currentQ.correct && !selection.isCorrect) {
                                borderColor = 'var(--success)'; // Show correct explanation
                            }
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => handleSelect(i)}
                                style={{
                                    padding: '20px',
                                    textAlign: 'left',
                                    background: bgColor,
                                    border: `1px solid ${borderColor}`,
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '1.1rem',
                                    color: textColor,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                disabled={selection !== null}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default GrammarTest;
