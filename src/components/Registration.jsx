import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
    { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
    {
        id: 'level',
        label: 'Current English Level',
        type: 'select',
        options: ['Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper-Intermediate', 'Advanced']
    },
    { id: 'city', label: 'City', type: 'text', placeholder: 'Your current city' },
    { id: 'place', label: 'Place of Work or Study', type: 'text', placeholder: 'University, School, or Company name' },
    { id: 'grade', label: 'Current Grade / Position', type: 'text', placeholder: 'e.g. 2nd Year Student' }
];

const Registration = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        level: '',
        city: '',
        place: '',
        grade: ''
    });
    const [error, setError] = useState('');

    const handleNext = () => {
        const field = steps[currentStep].id;
        if (!formData[field]) {
            setError('This field is required.');
            return;
        }
        setError('');

        if (currentStep < steps.length - 1) {
            setCurrentStep(curr => curr + 1);
        } else {
            onComplete(formData);
        }
    };

    const handleChange = (val) => {
        setFormData(prev => ({ ...prev, [steps[currentStep].id]: val }));
        if (error) setError('');
    };

    const stepData = steps[currentStep];

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '24px',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <div className="card" style={{ padding: '40px' }}>
                <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                    <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '8px' }}>
                        Step {currentStep + 1} of {steps.length}
                    </p>
                    <div style={{ height: '4px', background: '#e9ecef', borderRadius: '2px', overflow: 'hidden' }}>
                        <motion.div
                            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                            style={{ height: '100%', background: 'var(--primary)' }}
                        />
                    </div>
                </div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                    >
                        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>{stepData.label}</h2>

                        {stepData.type === 'text' && (
                            <input
                                autoFocus
                                type="text"
                                value={formData[stepData.id]}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder={stepData.placeholder}
                                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                            />
                        )}

                        {stepData.type === 'select' && (
                            <div style={{ display: 'grid', gap: '12px' }}>
                                {stepData.options.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => {
                                            handleChange(opt);
                                            setTimeout(() => {
                                                if (currentStep < steps.length - 1) setCurrentStep(c => c + 1);
                                                else onComplete({ ...formData, level: opt });
                                            }, 150);
                                        }}
                                        style={{
                                            padding: '16px',
                                            textAlign: 'left',
                                            background: formData.level === opt ? 'var(--primary)' : 'white',
                                            color: formData.level === opt ? 'white' : 'var(--text-dark)',
                                            border: formData.level === opt ? '1px solid var(--primary)' : '1px solid #ced4da',
                                            borderRadius: 'var(--radius-sm)',
                                            fontWeight: formData.level === opt ? '600' : '400',
                                            transition: 'all 0.2s',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (formData.level !== opt) e.target.style.background = '#f8f9fa';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (formData.level !== opt) e.target.style.background = 'white';
                                        }}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}

                        {error && (
                            <p style={{ color: 'var(--error)', marginTop: '8px', fontSize: '0.9rem', textAlign: 'center' }}>
                                {error}
                            </p>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Hide Next button for select step unless value selected manually (optional UX choice, sticking to simple flow) */}
                {(stepData.type !== 'select') && (
                    <div style={{ marginTop: '32px' }}>
                        <button
                            className="btn-primary"
                            onClick={handleNext}
                            style={{ width: '100%' }}
                        >
                            {currentStep === steps.length - 1 ? 'Start Placement Test' : 'Continue'}
                        </button>
                    </div>
                )}

                {stepData.type === 'select' && (
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Select an option to continue</span>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Registration;
